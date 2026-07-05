# tabi API — 本物のデータでプランを作るバックエンド

フロント（静的PWA）のデモ用擬似AIを、**Claude + Google Maps Platform** の実データに置き換えるサーバーです。

```
フロント(tabi) ──POST /api/plan──▶ このサーバー ──▶ Claude（条件解釈・プラン生成）
                                        │
                                        └──▶ Google Places / Directions（実在スポット・実経路で根拠付け）
```

## セットアップ

```sh
cd server
npm install
cp .env.example .env   # キーを記入
npm start              # http://localhost:8787
```

必要なキー:
- `ANTHROPIC_API_KEY` — Claude API（条件の解釈と旅程JSONの生成）
- `GOOGLE_MAPS_API_KEY` — Places API（実在スポット）/ Directions API（実経路・乗継）/ Street View Static API（実写画像）

## フロントとの接続

アプリの **設定（⚙）→ AIバックエンド接続** にこのサーバーのURL（例 `http://localhost:8787`）を入れて保存。
以降、「プランを探す」は `/api/plan` を呼び、失敗時は自動でローカルのデモ提案にフォールバックします。

## エンドポイント

| Method | Path | 役割 |
|---|---|---|
| POST | `/api/plan` | 検索条件JSON → Claudeがプラン候補3案をJSONで生成（Placesの実在スポットで根拠付け） |
| GET | `/api/places?query=` | Places Text Search プロキシ |
| GET | `/api/directions?origin=&destination=&mode=transit` | Directions プロキシ（番線・路線名・時刻を含む実経路） |
| GET | `/api/photo?ref=` or `?location=` | Places写真 / Street View 画像プロキシ |
| GET | `/api/health` | 稼働確認 |

## 本実装に向けたTODO

- `/api/plan` 内で spots ごとに Directions を呼び、区間所要時間をAPI実測値で上書きする
- ナビ画面のポリラインを Directions の `overview_polyline` に置換
- 予約はOTA/チケットプロバイダAPI（じゃらん・Klook等）との接続が別途必要
- 認証・レート制限・キー管理（本番ではフロントに直接キーを渡さないこと）
