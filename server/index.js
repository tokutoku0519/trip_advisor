// tabi API — 旅行プラン生成バックエンド
// Claude (プラン生成・条件解釈) + Google Maps Platform (実在スポット・実経路) を束ねる。
// フロントは localStorage 'tabi.api' にこのサーバーのURLを入れると自動で接続する。
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
app.use(cors());
app.use(express.json());

const anthropic = new Anthropic(); // ANTHROPIC_API_KEY / `ant auth login` プロファイルを自動解決
const GMAPS_KEY = process.env.GOOGLE_MAPS_API_KEY || '';
const MODEL = process.env.TABI_MODEL || 'claude-opus-4-8';

/* ---------- Google Maps Platform プロキシ ---------- */
// Places Text Search: 実在スポットの検索（⑥）
app.get('/api/places', async (req, res) => {
  if (!GMAPS_KEY) return res.status(501).json({ error: 'GOOGLE_MAPS_API_KEY not set' });
  const { query, language = 'ja' } = req.query;
  const u = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');
  u.searchParams.set('query', query);
  u.searchParams.set('language', language);
  u.searchParams.set('key', GMAPS_KEY);
  const r = await fetch(u);
  res.json(await r.json());
});

// Directions: 実経路・乗継・時刻（⑦⑯⑰。transit で 番線/路線名まで返る）
app.get('/api/directions', async (req, res) => {
  if (!GMAPS_KEY) return res.status(501).json({ error: 'GOOGLE_MAPS_API_KEY not set' });
  const { origin, destination, mode = 'transit', departure_time = 'now', language = 'ja' } = req.query;
  const u = new URL('https://maps.googleapis.com/maps/api/directions/json');
  u.searchParams.set('origin', origin);
  u.searchParams.set('destination', destination);
  u.searchParams.set('mode', mode);
  u.searchParams.set('departure_time', departure_time);
  u.searchParams.set('language', language);
  u.searchParams.set('key', GMAPS_KEY);
  const r = await fetch(u);
  res.json(await r.json());
});

// Places Photo / Street View: 実写画像（⑬）
app.get('/api/photo', async (req, res) => {
  if (!GMAPS_KEY) return res.status(501).json({ error: 'GOOGLE_MAPS_API_KEY not set' });
  const { ref, location, w = 900 } = req.query;
  const url = ref
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${w}&photo_reference=${ref}&key=${GMAPS_KEY}`
    : `https://maps.googleapis.com/maps/api/streetview?size=${w}x600&location=${encodeURIComponent(location)}&key=${GMAPS_KEY}`;
  const r = await fetch(url);
  res.setHeader('Content-Type', r.headers.get('content-type') || 'image/jpeg');
  res.send(Buffer.from(await r.arrayBuffer()));
});

/* ---------- プラン生成（LLM + 実データ） ---------- */
const PLAN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['cands'],
  properties: {
    cands: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['destName', 'emoji', 'title', 'desc', 'reason', 'nights', 'price', 'spots'],
        properties: {
          destName: { type: 'string' }, destNameEn: { type: 'string' },
          emoji: { type: 'string' }, title: { type: 'string' }, titleEn: { type: 'string' },
          desc: { type: 'string' }, reason: { type: 'string' },
          nights: { type: 'integer' }, price: { type: 'integer' },
          hotel: { type: 'string' }, hotelPrice: { type: 'integer' },
          legs: {
            type: 'array',
            items: {
              type: 'object', additionalProperties: false,
              required: ['name', 'dep', 'arr', 'from', 'to'],
              properties: { icon: { type: 'string' }, name: { type: 'string' }, dep: { type: 'string' }, arr: { type: 'string' }, from: { type: 'string' }, to: { type: 'string' }, note: { type: 'string' } },
            },
          },
          spots: {
            type: 'array',
            items: {
              type: 'object', additionalProperties: false,
              required: ['name', 'type', 'dur'],
              properties: { name: { type: 'string' }, nameEn: { type: 'string' }, type: { type: 'string', enum: ['activity', 'scenery', 'food', 'cafe', 'hotel'] }, dur: { type: 'integer' }, go: { type: 'string' }, goMin: { type: 'integer' }, near: { type: 'string' } },
            },
          },
        },
      },
    },
  },
};

app.post('/api/plan', async (req, res) => {
  const f = req.body || {};
  try {
    // 1. 行き先が指定されていれば Places で実在スポットを取得して LLM に渡す（⑥ グラウンディング）
    let placesContext = '';
    if (GMAPS_KEY && f.dest) {
      try {
        const u = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');
        u.searchParams.set('query', `${f.dest} 観光スポット`);
        u.searchParams.set('language', 'ja');
        u.searchParams.set('key', GMAPS_KEY);
        const places = await (await fetch(u)).json();
        placesContext = (places.results || []).slice(0, 12)
          .map(p => `- ${p.name}（評価${p.rating ?? '-'} / ${p.formatted_address ?? ''}）`)
          .join('\n');
      } catch { /* Places失敗時はLLM単独で続行 */ }
    }

    const msg = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 16000,
      output_config: { format: { type: 'json_schema', schema: PLAN_SCHEMA } },
      system:
        'あなたは日本の旅行プランナーです。実在する場所・店・列車/フライトだけを使い、現実的な移動時間と滞在時間で旅程を作ります。' +
        '乗換が必要な行き先は legs に区間ごとの便名・番線・時刻まで書きます（例: のぞみ15号 東京駅18番線 08:12発→11:25 岡山駅着）。' +
        '食事は店名を挙げ、near にエリアを書きます。go には前の場所からの現実的な交通手段と所要分（goMin）を書きます。' +
        'price は1人あたりの交通+宿+食費の概算(円)。3案は 王道/テーマ特化/のんびり で中身を変えてください。',
      messages: [{
        role: 'user',
        content:
          `条件: ${JSON.stringify(f)}\n` +
          (placesContext ? `Google Placesで確認できた実在スポット:\n${placesContext}\n` : '') +
          'この条件に合う旅行プラン候補を3つ、JSONで返してください。',
      }],
    });
    if (msg.stop_reason === 'refusal') return res.status(502).json({ error: 'model refused' });
    const text = msg.content.find(b => b.type === 'text')?.text || '{}';
    res.json(JSON.parse(text));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String(e.message || e) });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, model: MODEL, gmaps: !!GMAPS_KEY }));

const port = process.env.PORT || 8787;
app.listen(port, () => console.log(`tabi API listening on :${port}`));
