/* ================= i18n ================= */
const T={
ja:{
 'tab.plan':'プラン','tab.discover':'見つける','tab.shiori':'しおり','tab.tips':'お役立ち',
 'plan.mytrips':'あなたの旅','plan.active':'進行中','plan.results':'あなたへの提案','plan.empty':'下の ✦ ボタンから条件を入れて、新しい旅を探せます。行き先だけでも、「温泉行きたい」だけでもOK。',
 'search.title':'新しい旅を探す','search.sub':'決まっているところだけでOK。あとはAIが埋めます。',
 'f.dest':'行き先（決まっていれば）','f.dest.ph':'例：京都、パリ、上海、佐渡島。空欄でもOK',
 'f.vague':'ふんわり希望','f.vague.ph':'例：温泉行きたいね〜、1泊2日くらいで。夜景がきれいなところ',
 'f.origin':'出発地','f.origin.ph':'例：自宅（東京）、羽田空港','f.origin.home':'🏠 自宅','f.origin.airport':'✈ 空港','f.origin.local':'📍 現地集合',
 'f.goal':'ゴール','f.goal.round':'出発地に戻る（往復）','f.goal.ph':'例：新大阪駅、実家',
 'f.dates':'日程','f.dates.tbd':'日程は未定','f.type':'旅のタイプ','f.people':'人数','f.budget':'予算（1人あたり・交通宿込み）','f.license':'運転','f.license.yes':'🚗 運転できる','f.license.no':'🚃 電車・バス派',
 'f.must':'絶対に行きたい場所','f.must.ph':'例：清水寺、〇〇カフェ','f.search':'プランを探す',
 'r.nights':(n)=>n===0?'日帰り':`${n}泊${n+1}日`,'r.detail':'詳しく見る','r.over':'⚠ 予算オーバー','r.fit':'予算内',
 's.itin':'旅程','s.route':'ルート','s.book':'予約','s.start':'この旅をはじめる','s.booknote':'人数・泊数から自動計算。まとめて予約できます。','s.total':'合計',
 's.walk':'徒歩','s.bus':'バス','s.train':'電車','s.min':'分','s.alt':'ほかの案','s.detour':'寄り道スポット','s.detour.add':'＋ 寄り道','s.detour.note':'ルート上にあるおすすめ。タップで旅程に入ります。','s.map':'鳥瞰マップ','s.added':'追加スポット',
 'nav.title':'ナビ','nav.next':'次へ','nav.restart':'最初から','nav.eta':'到着予想','nav.left':'残り','nav.start':'🧭 この日のルートでナビ',
 'd.search.ph':'場所で検索（例：京都、ソウル）','d.all':'すべて','d.grid':'▦ グリッド','d.shorts':'▶ ショート','d.post':'＋ 投稿','d.views':'回再生',
 'ed.title':'ショートを作る','ed.clips':'クリップを選ぶ（しおりのアルバムから）','ed.caption':'キャプション','ed.caption.ph':'例：清水寺の朝、人が少なくて最高だった','ed.tag':'タグ','ed.share':'ショートを公開する','ed.note':'公開範囲はあとから変えられます',
 'sh.closed':'🔒 クローズ共有','sh.closed.note':'招待した仲間だけが見られます','sh.invite':'招待リンク','sh.copy':'コピー',
 'sh.itin':'旅程','sh.album':'アルバム','sh.split':'割り勘','sh.diary':'日記','sh.addphoto':'＋ 写真を追加','sh.paypay':'PayPay連携','sh.paypay.note':'コード決済を自動で取り込み','sh.auto':'PayPayから自動取込',
 'sh.total':'合計','sh.per':'1人あたり','sh.settle':'精算','sh.settlebtn':'PayPayで精算リクエスト','sh.addexp':'＋ 支出を追加','sh.noexp':'支出はまだありません。PayPayで払うと自動で追加されます。',
 'dy.ph':'ひとこと日記。「抹茶パフェおいしかった」だけでもOK','dy.add':'追記する','dy.note':'メンバーだけに見えます。あとからレビューとして公開もできます。',
 'tips.title':'旅のお役立ち','tips.pr':'PR','tips.read':'コラムを読む →','tips.prnote':'※ このコラムにはプロモーションが含まれます',
 'toast.copied':'招待リンクをコピーしました','toast.liked':'いいねしました','toast.unliked':'いいねを外しました','toast.bm':'ブックマークしました','toast.unbm':'ブックマークを外しました','toast.share':'リンクをコピーしました',
 'toast.addplan':(n)=>`「${n}」をプランに追加しました`,'toast.start':(n)=>`${n}の旅をはじめました。しおりを作成しました`,'toast.settle':'精算リクエストを送りました（デモ）','toast.paypay.on':'PayPayの決済取込をオンにしました','toast.paypay.off':'PayPayの決済取込をオフにしました','toast.exp':'支出を追加しました','toast.photo':'写真を追加しました','toast.detour':(n)=>`「${n}」を寄り道に追加しました`,'toast.swap':'プランを差し替えました','toast.diary':'日記に追記しました','toast.post':'ショートを公開しました','toast.clip':'クリップを選択しました',
 'reason.kw':(k)=>`「${k}」の希望にマッチ`,'reason.type':(t)=>`${t}の定番`,'reason.dest':'指定の行き先','reason.near':'条件にマッチ','reason.generic':'この行き先向けの基本プラン',
 'people':(n)=>`${n}人`,'v.classic':'王道プラン','v.classic.d':'定番を効率よく。はじめてならこれ','v.theme':(k)=>`${k}中心プラン`,'v.theme.d':(k)=>`${k}を軸に組み直した1本`,'v.slow':'のんびりプラン','v.slow.d':'1日2スポットだけ。余白を楽しむ',
},
en:{
 'tab.plan':'Plans','tab.discover':'Discover','tab.shiori':'Journal','tab.tips':'Tips',
 'plan.mytrips':'Your trips','plan.active':'Active','plan.results':'Suggested for you','plan.empty':'Tap the ✦ button below to search for a new trip. A destination alone — or just "want a hot spring" — is enough.',
 'search.title':'Find a new trip','search.sub':'Fill in only what you know. AI fills the rest.',
 'f.dest':'Destination (if decided)','f.dest.ph':'e.g. Kyoto, Paris, Shanghai. Blank is fine',
 'f.vague':'Rough wishes','f.vague.ph':'e.g. Want a hot spring, about 2 days, nice night views',
 'f.origin':'Starting point','f.origin.ph':'e.g. Home (Tokyo), Haneda Airport','f.origin.home':'🏠 Home','f.origin.airport':'✈ Airport','f.origin.local':'📍 Meet locally',
 'f.goal':'End point','f.goal.round':'Return to start (round trip)','f.goal.ph':'e.g. Shin-Osaka Sta.',
 'f.dates':'Dates','f.dates.tbd':'Dates undecided','f.type':'Trip type','f.people':'Travelers','f.budget':'Budget (per person, incl. transport & stay)','f.license':'Driving','f.license.yes':'🚗 Can drive','f.license.no':'🚃 Trains & buses',
 'f.must':'Must-visit places','f.must.ph':'e.g. Kiyomizu-dera','f.search':'Find plans',
 'r.nights':(n)=>n===0?'Day trip':`${n+1} days`,'r.detail':'View details','r.over':'⚠ Over budget','r.fit':'Within budget',
 's.itin':'Itinerary','s.route':'Route','s.book':'Booking','s.start':'Start this trip','s.booknote':'Calculated from travelers & nights. Book everything at once.','s.total':'Total',
 's.walk':'Walk','s.bus':'Bus','s.train':'Train','s.min':'min','s.alt':'Alternatives','s.detour':'Detour spots','s.detour.add':'+ Detour','s.detour.note':'Along your route. Tap to add to the plan.','s.map':'Bird\'s-eye map','s.added':'Added spots',
 'nav.title':'Navigation','nav.next':'Next','nav.restart':'Restart','nav.eta':'ETA','nav.left':'left','nav.start':'🧭 Navigate this day',
 'd.search.ph':'Search by place (e.g. Kyoto, Seoul)','d.all':'All','d.grid':'▦ Grid','d.shorts':'▶ Shorts','d.post':'+ Post','d.views':' views',
 'ed.title':'Create a short','ed.clips':'Pick clips (from your journal album)','ed.caption':'Caption','ed.caption.ph':'e.g. Kiyomizu at dawn — no crowds!','ed.tag':'Tag','ed.share':'Publish short','ed.note':'You can change visibility later',
 'sh.closed':'🔒 Private share','sh.closed.note':'Only invited members can see this','sh.invite':'Invite link','sh.copy':'Copy',
 'sh.itin':'Itinerary','sh.album':'Album','sh.split':'Split','sh.diary':'Diary','sh.addphoto':'+ Add photos','sh.paypay':'PayPay link','sh.paypay.note':'Auto-import code payments','sh.auto':'Auto-imported from PayPay',
 'sh.total':'Total','sh.per':'Per person','sh.settle':'Settlement','sh.settlebtn':'Request via PayPay','sh.addexp':'+ Add expense','sh.noexp':'No expenses yet. Payments via PayPay are added automatically.',
 'dy.ph':'One-line diary. "The matcha parfait was great" is enough','dy.add':'Add entry','dy.note':'Visible to members only. You can publish as a review later.',
 'tips.title':'Travel tips','tips.pr':'PR','tips.read':'Read the column →','tips.prnote':'* This column contains promotion',
 'toast.copied':'Invite link copied','toast.liked':'Liked','toast.unliked':'Like removed','toast.bm':'Bookmarked','toast.unbm':'Bookmark removed','toast.share':'Link copied',
 'toast.addplan':(n)=>`Added "${n}" to your plan`,'toast.start':(n)=>`Started your ${n} trip. Journal created`,'toast.settle':'Settlement request sent (demo)','toast.paypay.on':'PayPay auto-import ON','toast.paypay.off':'PayPay auto-import OFF','toast.exp':'Expense added','toast.photo':'Photos added','toast.detour':(n)=>`Added "${n}" as a detour`,'toast.swap':'Swapped in your plan','toast.diary':'Added to diary','toast.post':'Short published','toast.clip':'Clip selected',
 'reason.kw':(k)=>`Matches "${k}"`,'reason.type':(t)=>`Popular for ${t}`,'reason.dest':'Your destination','reason.near':'Matches your wishes','reason.generic':'Base plan for this destination',
 'people':(n)=>`${n} people`,'v.classic':'Classic plan','v.classic.d':'The essentials, efficiently. Best for first-timers','v.theme':(k)=>`${k}-focused plan`,'v.theme.d':(k)=>`Rebuilt around ${k}`,'v.slow':'Slow plan','v.slow.d':'Just 2 spots a day. Enjoy the space between',
}};
const state={lang:'ja',screen:'plan',disMode:'grid',disTag:'all',disQuery:'',shioriTab:'itin',paypayOn:true,results:null,
 form:{dest:'',vague:'',origin:'',goal:'',roundtrip:true,from:'',to:'',tbd:false,type:'',people:2,budget:'',license:'',must:''}};
const t=(k,...a)=>{const v=T[state.lang][k];return typeof v==='function'?v(...a):(v??k)};
const L=(o)=>typeof o==='string'?o:(o[state.lang]||o.ja);
const yen=(n)=>'¥'+n.toLocaleString('ja-JP');
const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
const esc=(s)=>(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const addMin=(hm,m)=>{const[h,mi]=hm.split(':').map(Number);const x=h*60+mi+m;return `${String(Math.floor(x/60)%24).padStart(2,'0')}:${String(x%60).padStart(2,'0')}`};

/* ================= シーンアート（ダミー写真） ================= */
const SCENES={
 torii:'<circle cx="150" cy="34" r="16" class="sun"/><g class="sil"><rect x="52" y="52" width="8" height="52"/><rect x="104" y="52" width="8" height="52"/><rect x="42" y="44" width="80" height="7" rx="3"/><rect x="50" y="60" width="64" height="5"/></g>',
 onsen:'<g class="sil"><ellipse cx="80" cy="100" rx="46" ry="12"/><ellipse cx="130" cy="106" rx="30" ry="9"/></g><g class="steam"><path d="M60 78 q6 -12 0 -24 q-6 -10 0 -20"/><path d="M82 82 q6 -12 0 -24 q-6 -10 0 -20"/><path d="M104 78 q6 -12 0 -24 q-6 -10 0 -20"/></g>',
 beach:'<circle cx="150" cy="30" r="15" class="sun"/><g class="wave"><path d="M0 92 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0"/><path d="M0 104 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0"/></g>',
 eiffel:'<g class="sil"><polygon points="80,104 96,30 100,30 116,104 104,104 98,58 92,104"/><rect x="76" y="76" width="44" height="5"/><rect x="84" y="52" width="28" height="4"/></g><circle cx="150" cy="34" r="13" class="sun"/>',
 skyline:'<g class="sil"><rect x="30" y="60" width="18" height="44"/><rect x="54" y="42" width="14" height="62"/><rect x="74" y="68" width="20" height="36"/><rect x="100" y="30" width="12" height="74"/><polygon points="118,104 118,54 130,44 142,54 142,104"/><rect x="148" y="62" width="16" height="42"/></g>',
 lantern:'<g class="sil"><rect x="40" y="20" width="120" height="3"/><rect x="56" y="26" width="18" height="26" rx="8"/><rect x="98" y="26" width="18" height="32" rx="8"/><rect x="138" y="26" width="18" height="22" rx="8"/></g><circle cx="30" cy="80" r="10" class="sun"/>',
 tower:'<g class="sil"><polygon points="90,104 100,36 104,36 114,104"/><ellipse cx="102" cy="34" rx="12" ry="6"/><rect x="100" y="16" width="3" height="14"/><ellipse cx="102" cy="96" rx="52" ry="10"/></g>',
 teahouse:'<g class="sil"><polygon points="36,68 76,52 116,68 116,72 36,72"/><rect x="44" y="72" width="64" height="32"/><polygon points="104,60 140,48 176,60 176,64 104,64"/><rect x="112" y="64" width="56" height="40"/></g>',
 island:'<g class="sil"><ellipse cx="90" cy="90" rx="52" ry="20"/><ellipse cx="150" cy="98" rx="26" ry="10"/></g><g class="wave"><path d="M10 108 q14 -6 28 0 t28 0 t28 0 t28 0"/></g><path class="bird" d="M140 40 q6 -6 12 0 M158 32 q6 -6 12 0"/>',
 mountains:'<circle cx="46" cy="34" r="13" class="sun"/><g class="sil"><polygon points="40,104 92,40 144,104"/><polygon points="110,104 150,56 190,104"/></g>',
};
const sceneArt=(key)=>`<svg class="scene" viewBox="0 0 200 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${SCENES[key]||SCENES.mountains}</svg>`;

/* ================= データ ================= */
const TYPE_META={activity:{ja:'アクティビティ',en:'Activity',icon:'🛶'},scenery:{ja:'景色',en:'Scenery',icon:'🏔'},food:{ja:'食事',en:'Food',icon:'🍜'},cafe:{ja:'カフェ',en:'Café',icon:'☕'},hotel:{ja:'宿',en:'Stay',icon:'🏨'},ride:{ja:'乗り物',en:'Ride',icon:'🚃'}};
const USE_TAGS=[{id:'stay',ja:'🏨 泊まる',en:'🏨 Stay'},{id:'ride',ja:'🚃 乗る',en:'🚃 Ride'},{id:'eat',ja:'🍜 食べる',en:'🍜 Eat'},{id:'play',ja:'🛶 遊ぶ',en:'🛶 Play'},{id:'view',ja:'🏔 景色',en:'🏔 Views'}];
const TYPE2TAG={hotel:'stay',ride:'ride',food:'eat',cafe:'eat',activity:'play',scenery:'view'};
const TRIP_TYPES=[{id:'grad',ja:'🎓 卒業旅行',en:'🎓 Grad trip'},{id:'honeymoon',ja:'💒 ハネムーン',en:'💒 Honeymoon'},{id:'girls',ja:'👭 女子旅',en:'👭 Girls trip'},{id:'doki',ja:'🏢 同期旅行',en:'🏢 Work friends'},{id:'propose',ja:'💍 プロポーズ',en:'💍 Proposal'},{id:'date',ja:'💑 デート',en:'💑 Date'},{id:'solo',ja:'🚶 ひとり旅',en:'🚶 Solo'},{id:'family',ja:'👨‍👩‍👧 家族旅行',en:'👨‍👩‍👧 Family'}];
const AFFINITY={honeymoon:['hawaii','paris','okinawa'],propose:['paris','singapore','hawaii','hakone'],grad:['seoul','taipei','okinawa','shanghai'],girls:['seoul','taipei','kanazawa'],doki:['okinawa','taipei','hakone'],date:['kamakura','hakone','kyoto'],solo:['kyoto','kanazawa','sado'],family:['okinawa','hakone','singapore']};
const BUDGETS=[{id:'b1',label:'〜¥20,000',min:0,max:20000},{id:'b2',label:'¥20,000〜50,000',min:20000,max:50000},{id:'b3',label:'¥50,000〜100,000',min:50000,max:100000},{id:'b4',label:'¥100,000〜',min:100000,max:9e9}];
const KW=[{kw:['温泉','onsen','hot spring','spa'],feat:'onsen',ja:'温泉',en:'hot springs'},{kw:['海','ビーチ','beach'],feat:'beach',ja:'海',en:'the beach'},{kw:['夜景','night'],feat:'night',ja:'夜景',en:'night views'},{kw:['グルメ','食べ','food','eat'],feat:'food',ja:'グルメ',en:'food'},{kw:['絶景','scenery','view'],feat:'view',ja:'絶景',en:'scenic views'},{kw:['カフェ','cafe','coffee'],feat:'cafe',ja:'カフェ',en:'cafés'},{kw:['文化','寺','神社','culture','temple'],feat:'culture',ja:'文化',en:'culture'},{kw:['島','island'],feat:'island',ja:'島',en:'islands'}];
const FEAT_LABEL={onsen:{ja:'♨ 温泉',en:'♨ Onsen'},beach:{ja:'🏖 海',en:'🏖 Beach'},night:{ja:'🌃 夜景',en:'🌃 Night view'},food:{ja:'🍜 グルメ',en:'🍜 Food'},view:{ja:'🏔 絶景',en:'🏔 Scenery'},cafe:{ja:'☕ カフェ',en:'☕ Café'},culture:{ja:'⛩ 文化',en:'⛩ Culture'},island:{ja:'🏝 島',en:'🏝 Island'}};

/* spots: dur は現実的な滞在時間（分） */
const DESTS=[
{id:'kyoto',ja:'京都',en:'Kyoto',country:'jp',grad:'g-kyoto',scene:'torii',emoji:'⛩',feat:['culture','view','food','cafe'],needCar:false,travelMin:135,mode:'🚄',
 station:{ja:'京都駅',en:'Kyoto Sta.'},ride:{ja:'のぞみ207号',en:'Nozomi 207'},transport:{ja:'新幹線（往復）',en:'Shinkansen (rt)',price:26640},hotel:{ja:'THE GATE HOTEL 京都高瀬川',en:'THE GATE HOTEL Kyoto',price:24000},act:{ja:'茶道体験（和菓子付き）',en:'Tea ceremony w/ sweets',price:4500},
 spots:[{ja:'清水寺',en:'Kiyomizu-dera',type:'scenery',dur:90},{ja:'二年坂・三年坂さんぽ',en:'Ninenzaka walk',type:'activity',dur:60},{ja:'祇園 京料理ランチ',en:'Gion kyo-ryori lunch',type:'food',dur:70},{ja:'％ Arabica 嵐山',en:'% Arabica Arashiyama',type:'cafe',dur:40},{ja:'伏見稲荷大社',en:'Fushimi Inari',type:'scenery',dur:120},{ja:'錦市場 食べ歩き',en:'Nishiki Market bites',type:'food',dur:60},{ja:'嵐山 竹林の小径',en:'Arashiyama bamboo grove',type:'scenery',dur:60},{ja:'鴨川 夕方さんぽ',en:'Kamo River sunset walk',type:'activity',dur:40},{ja:'先斗町 おばんざいディナー',en:'Pontocho obanzai dinner',type:'food',dur:90},{ja:'喫茶ソワレ',en:'Kissa Soirée',type:'cafe',dur:45}]},
{id:'hakone',ja:'箱根',en:'Hakone',country:'jp',grad:'g-onsen',scene:'onsen',emoji:'♨',feat:['onsen','view'],needCar:false,travelMin:85,mode:'🚃',
 station:{ja:'箱根湯本駅',en:'Hakone-Yumoto Sta.'},ride:{ja:'ロマンスカーGSE',en:'Romancecar GSE'},transport:{ja:'ロマンスカー（往復）',en:'Romancecar (rt)',price:4800},hotel:{ja:'客室露天風呂の宿',en:'Ryokan w/ private onsen',price:32000},act:{ja:'海賊船＋ロープウェイ',en:'Pirate ship + ropeway',price:6000},
 spots:[{ja:'大涌谷',en:'Owakudani',type:'scenery',dur:75},{ja:'芦ノ湖 海賊船',en:'Lake Ashi cruise',type:'activity',dur:60},{ja:'箱根神社',en:'Hakone Shrine',type:'scenery',dur:50},{ja:'湖畔の蕎麦ランチ',en:'Lakeside soba lunch',type:'food',dur:60},{ja:'彫刻の森美術館',en:'Open-Air Museum',type:'activity',dur:120},{ja:'温泉街 食べ歩き',en:'Onsen town bites',type:'food',dur:60},{ja:'湖畔カフェ',en:'Lakeside café',type:'cafe',dur:45},{ja:'旅館の会席ディナー',en:'Kaiseki dinner',type:'food',dur:100},{ja:'日帰り湯でひと休み',en:'Day-use onsen',type:'activity',dur:90}]},
{id:'kusatsu',ja:'草津温泉',en:'Kusatsu Onsen',country:'jp',grad:'g-onsen',scene:'onsen',emoji:'♨',feat:['onsen'],needCar:true,travelMin:180,mode:'🚌',
 station:{ja:'草津温泉BT',en:'Kusatsu Onsen BT'},ride:{ja:'特急草津＋JRバス',en:'Ltd. Exp. Kusatsu + bus'},transport:{ja:'特急＋バス（往復）',en:'Express + bus (rt)',price:6800},hotel:{ja:'湯畑前の旅館',en:'Ryokan by Yubatake',price:18000},act:{ja:'湯もみショー',en:'Yumomi show',price:700},
 spots:[{ja:'湯畑',en:'Yubatake',type:'scenery',dur:50},{ja:'熱乃湯 湯もみショー',en:'Yumomi show',type:'activity',dur:50},{ja:'温泉まんじゅう食べ歩き',en:'Onsen manju bites',type:'food',dur:45},{ja:'西の河原公園',en:'Sainokawara Park',type:'scenery',dur:60},{ja:'裏草津カフェ',en:'Ura-Kusatsu café',type:'cafe',dur:45},{ja:'大滝乃湯',en:'Otakinoyu bath',type:'activity',dur:100},{ja:'旅館の会席',en:'Ryokan kaiseki',type:'food',dur:90},{ja:'夜の湯畑ライトアップ',en:'Yubatake night lights',type:'scenery',dur:30}]},
{id:'okinawa',ja:'沖縄',en:'Okinawa',country:'jp',grad:'g-beach',scene:'beach',emoji:'🏖',feat:['beach','view','island'],needCar:true,travelMin:170,mode:'✈',
 station:{ja:'那覇空港',en:'Naha Airport'},ride:{ja:'ANA469便',en:'ANA 469'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:32000},hotel:{ja:'ビーチリゾートホテル',en:'Beach resort hotel',price:26000},act:{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling',price:5500},
 spots:[{ja:'美ら海水族館',en:'Churaumi Aquarium',type:'activity',dur:150},{ja:'古宇利大橋ドライブ',en:'Kouri Bridge drive',type:'scenery',dur:50},{ja:'沖縄そばランチ',en:'Okinawa soba lunch',type:'food',dur:50},{ja:'瀬底ビーチ',en:'Sesoko Beach',type:'activity',dur:150},{ja:'万座毛サンセット',en:'Manzamo sunset',type:'scenery',dur:45},{ja:'国際通り',en:'Kokusai Street',type:'activity',dur:90},{ja:'海カフェ',en:'Ocean café',type:'cafe',dur:50},{ja:'島料理ディナー',en:'Island cuisine dinner',type:'food',dur:90},{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling',type:'activity',dur:150}]},
{id:'kanazawa',ja:'金沢',en:'Kanazawa',country:'jp',grad:'g-alley',scene:'teahouse',emoji:'🍵',feat:['culture','food','cafe'],needCar:false,travelMin:150,mode:'🚄',
 station:{ja:'金沢駅',en:'Kanazawa Sta.'},ride:{ja:'かがやき509号',en:'Kagayaki 509'},transport:{ja:'北陸新幹線（往復）',en:'Hokuriku Shinkansen (rt)',price:28000},hotel:{ja:'香林坊のホテル',en:'Korinbo hotel',price:15000},act:{ja:'金箔貼り体験',en:'Gold leaf workshop',price:3000},
 spots:[{ja:'兼六園',en:'Kenrokuen Garden',type:'scenery',dur:100},{ja:'ひがし茶屋街',en:'Higashi Chaya district',type:'activity',dur:75},{ja:'近江町市場 海鮮丼',en:'Omicho seafood bowl',type:'food',dur:60},{ja:'金箔ソフト',en:'Gold leaf ice cream',type:'cafe',dur:30},{ja:'21世紀美術館',en:'21st Century Museum',type:'activity',dur:120},{ja:'主計町 夜さんぽ',en:'Kazuemachi night walk',type:'scenery',dur:40},{ja:'おでん横丁',en:'Oden alley dinner',type:'food',dur:80},{ja:'長町武家屋敷跡',en:'Nagamachi samurai district',type:'scenery',dur:60},{ja:'町家カフェ',en:'Machiya café',type:'cafe',dur:45}]},
{id:'kamakura',ja:'鎌倉',en:'Kamakura',country:'jp',grad:'g-view',scene:'island',emoji:'🌊',feat:['view','cafe','beach'],needCar:false,travelMin:60,mode:'🚃',
 station:{ja:'鎌倉駅',en:'Kamakura Sta.'},ride:{ja:'横須賀線',en:'Yokosuka Line'},transport:{ja:'電車（往復）',en:'Train (rt)',price:2000},hotel:{ja:'由比ヶ浜のゲストハウス',en:'Yuigahama guesthouse',price:9000},act:{ja:'座禅体験',en:'Zazen meditation',price:2000},
 spots:[{ja:'鶴岡八幡宮',en:'Tsurugaoka Hachimangu',type:'scenery',dur:60},{ja:'小町通り 食べ歩き',en:'Komachi Street bites',type:'food',dur:60},{ja:'鎌倉大仏',en:'Great Buddha',type:'scenery',dur:50},{ja:'江ノ電で長谷へ',en:'Enoden ride to Hase',type:'activity',dur:30},{ja:'しらす丼ランチ',en:'Shirasu bowl lunch',type:'food',dur:50},{ja:'由比ヶ浜サンセット',en:'Yuigahama sunset',type:'scenery',dur:45},{ja:'海辺カフェ',en:'Seaside café',type:'cafe',dur:50},{ja:'報国寺 竹の庭',en:'Hokokuji bamboo garden',type:'scenery',dur:50}]},
{id:'sado',ja:'佐渡島',en:'Sado Island',country:'jp',grad:'g-view',scene:'island',emoji:'🏝',feat:['island','view'],needCar:true,travelMin:260,mode:'🚢',
 station:{ja:'両津港',en:'Ryotsu Port'},ride:{ja:'ときわ丸（カーフェリー）',en:'Tokiwa-maru ferry'},transport:{ja:'新幹線＋フェリー（往復）',en:'Shinkansen + ferry (rt)',price:18000},hotel:{ja:'両津の温泉宿',en:'Ryotsu onsen inn',price:14000},act:{ja:'たらい舟体験',en:'Tarai-bune tub boat',price:1500},
 spots:[{ja:'たらい舟体験（小木）',en:'Tarai-bune at Ogi',type:'activity',dur:45},{ja:'佐渡金山',en:'Sado Gold Mine',type:'activity',dur:100},{ja:'海鮮ランチ',en:'Seafood lunch',type:'food',dur:60},{ja:'宿根木の町並み',en:'Shukunegi old town',type:'scenery',dur:70},{ja:'二ツ亀',en:'Futatsugame rocks',type:'scenery',dur:60},{ja:'トキの森公園',en:'Toki Forest Park',type:'activity',dur:75},{ja:'港前カフェ',en:'Harbor café',type:'cafe',dur:40},{ja:'寿司ディナー',en:'Sushi dinner',type:'food',dur:80}]},
{id:'taipei',ja:'台北',en:'Taipei',country:'tw',grad:'g-night',scene:'lantern',emoji:'🏮',feat:['food','night','cafe'],needCar:false,travelMin:250,mode:'✈',
 station:{ja:'桃園空港',en:'Taoyuan Airport'},ride:{ja:'CI221便',en:'CI 221'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:42000},hotel:{ja:'中山エリアのホテル',en:'Zhongshan hotel',price:12000},act:{ja:'九份・十分ツアー',en:'Jiufen & Shifen tour',price:6500},
 spots:[{ja:'九份 提灯の街',en:'Jiufen lantern streets',type:'scenery',dur:150},{ja:'鼎泰豊で小籠包',en:'Din Tai Fung xiaolongbao',type:'food',dur:70},{ja:'士林夜市',en:'Shilin Night Market',type:'food',dur:100},{ja:'永康街カフェ',en:'Yongkang St. café',type:'cafe',dur:50},{ja:'中正紀念堂',en:'CKS Memorial Hall',type:'scenery',dur:70},{ja:'象山から夜景',en:'Elephant Mtn night view',type:'scenery',dur:90},{ja:'迪化街さんぽ',en:'Dihua Street stroll',type:'activity',dur:60},{ja:'マンゴーかき氷',en:'Mango shaved ice',type:'food',dur:40},{ja:'台北101展望台',en:'Taipei 101 observatory',type:'activity',dur:90}]},
{id:'seoul',ja:'ソウル',en:'Seoul',country:'kr',grad:'g-city',scene:'tower',emoji:'🌆',feat:['food','cafe','night'],needCar:false,travelMin:150,mode:'✈',
 station:{ja:'金浦空港',en:'Gimpo Airport'},ride:{ja:'NH863便',en:'NH 863'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:38000},hotel:{ja:'明洞のホテル',en:'Myeongdong hotel',price:14000},act:{ja:'韓服レンタル',en:'Hanbok rental',price:3500},
 spots:[{ja:'景福宮',en:'Gyeongbokgung Palace',type:'scenery',dur:100},{ja:'益善洞 韓屋カフェ',en:'Ikseondong hanok café',type:'cafe',dur:50},{ja:'サムギョプサル',en:'Samgyeopsal dinner',type:'food',dur:80},{ja:'明洞ショッピング',en:'Myeongdong shopping',type:'activity',dur:100},{ja:'Nソウルタワー夜景',en:'N Seoul Tower night view',type:'scenery',dur:80},{ja:'広蔵市場 食べ歩き',en:'Gwangjang Market bites',type:'food',dur:70},{ja:'漢江ピクニック',en:'Han River picnic',type:'activity',dur:90},{ja:'聖水洞カフェ巡り',en:'Seongsu café hop',type:'cafe',dur:70}]},
{id:'shanghai',ja:'上海',en:'Shanghai',country:'cn',grad:'g-marina',scene:'skyline',emoji:'🌃',feat:['night','food','culture'],needCar:false,travelMin:200,mode:'✈',
 station:{ja:'浦東空港',en:'Pudong Airport'},ride:{ja:'MU576便',en:'MU 576'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:45000},hotel:{ja:'外灘エリアのホテル',en:'Bund area hotel',price:16000},act:{ja:'リニアモーターカー乗車',en:'Maglev ride',price:1200},
 spots:[{ja:'外灘（バンド）の夜景',en:'The Bund at night',type:'scenery',dur:80},{ja:'豫園と豫園商城',en:'Yu Garden & bazaar',type:'scenery',dur:100},{ja:'小籠包の名店ランチ',en:'Xiaolongbao lunch',type:'food',dur:60},{ja:'田子坊さんぽ',en:'Tianzifang stroll',type:'activity',dur:80},{ja:'上海タワー展望台',en:'Shanghai Tower deck',type:'activity',dur:90},{ja:'新天地カフェ',en:'Xintiandi café',type:'cafe',dur:50},{ja:'上海蟹ディナー',en:'Hairy crab dinner',type:'food',dur:90},{ja:'武康路の洋館めぐり',en:'Wukang Road villas',type:'scenery',dur:70}]},
{id:'singapore',ja:'シンガポール',en:'Singapore',country:'sg',grad:'g-marina',scene:'skyline',emoji:'🌴',feat:['night','view'],needCar:false,travelMin:440,arrLocal:'17:00',mode:'✈',
 station:{ja:'チャンギ空港',en:'Changi Airport'},ride:{ja:'SQ637便',en:'SQ 637'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:65000},hotel:{ja:'マリーナ地区のホテル',en:'Marina district hotel',price:26000},act:{ja:'ナイトサファリ',en:'Night Safari',price:6000},
 spots:[{ja:'マーライオン公園',en:'Merlion Park',type:'scenery',dur:45},{ja:'ガーデンズ・バイ・ザ・ベイ',en:'Gardens by the Bay',type:'scenery',dur:150},{ja:'ホーカーズで昼食',en:'Hawker centre lunch',type:'food',dur:60},{ja:'マリーナベイ夜景',en:'Marina Bay night view',type:'scenery',dur:70},{ja:'チキンライス',en:'Hainanese chicken rice',type:'food',dur:50},{ja:'セントーサ島',en:'Sentosa Island',type:'activity',dur:210},{ja:'アラブストリート',en:'Arab Street',type:'activity',dur:70},{ja:'カヤトーストの朝食',en:'Kaya toast breakfast',type:'cafe',dur:40},{ja:'ナイトサファリ',en:'Night Safari',type:'activity',dur:180}]},
{id:'hawaii',ja:'ハワイ',en:'Hawaii',country:'us',grad:'g-beach',scene:'beach',emoji:'🌺',feat:['beach','view'],needCar:false,travelMin:430,arrLocal:'11:00',mode:'✈',
 station:{ja:'ホノルル空港',en:'Honolulu Airport'},ride:{ja:'JL784便',en:'JL 784'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:150000},hotel:{ja:'ワイキキのホテル',en:'Waikiki hotel',price:45000},act:{ja:'ダイヤモンドヘッド登山',en:'Diamond Head hike',price:2000},
 spots:[{ja:'ワイキキビーチ',en:'Waikiki Beach',type:'activity',dur:180},{ja:'ダイヤモンドヘッド朝登山',en:'Diamond Head sunrise hike',type:'activity',dur:150},{ja:'ガーリックシュリンプ',en:'Garlic shrimp lunch',type:'food',dur:50},{ja:'カイルアタウン',en:'Kailua town',type:'activity',dur:150},{ja:'サンセットクルーズ',en:'Sunset cruise',type:'scenery',dur:130},{ja:'アサイーボウルの朝食',en:'Açaí bowl breakfast',type:'cafe',dur:45},{ja:'タンタラスの丘 夜景',en:'Tantalus night view',type:'scenery',dur:70},{ja:'ポケ丼ランチ',en:'Poke bowl lunch',type:'food',dur:50}]},
{id:'paris',ja:'パリ',en:'Paris',country:'fr',grad:'g-paris',scene:'eiffel',emoji:'🗼',feat:['culture','night','cafe'],needCar:false,travelMin:870,arrLocal:'17:30',mode:'✈',
 station:{ja:'CDG空港',en:'CDG Airport'},ride:{ja:'AF275便',en:'AF 275'},transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:180000},hotel:{ja:'オペラ地区のホテル',en:'Opéra district hotel',price:38000},act:{ja:'ルーヴル優先入場チケット',en:'Louvre priority ticket',price:3000},
 spots:[{ja:'エッフェル塔',en:'Eiffel Tower',type:'scenery',dur:120},{ja:'ルーヴル美術館（半日）',en:'Louvre Museum (half day)',type:'activity',dur:240},{ja:'マレ地区のカフェ',en:'Le Marais café',type:'cafe',dur:60},{ja:'セーヌ川クルーズ',en:'Seine river cruise',type:'scenery',dur:75},{ja:'モンマルトルさんぽ',en:'Montmartre stroll',type:'activity',dur:100},{ja:'ビストロディナー',en:'Bistro dinner',type:'food',dur:100},{ja:'夜のエッフェル塔',en:'Eiffel Tower at night',type:'scenery',dur:45},{ja:'パン屋巡りの朝',en:'Boulangerie morning',type:'food',dur:60},{ja:'オルセー美術館',en:'Musée d\'Orsay',type:'activity',dur:150}]},
];
const destById=(id)=>DESTS.find(d=>d.id===id);
function makeGenericDest(name){return{id:'generic',ja:name,en:name,country:'jp',grad:'g-view',scene:'mountains',emoji:'🧭',feat:['view','food'],needCar:false,travelMin:150,mode:'🚄',generic:true,
 station:{ja:`${name}駅`,en:`${name} Sta.`},ride:{ja:'特急',en:'Express'},transport:{ja:'電車・特急（往復）',en:'Train (rt)',price:14000},hotel:{ja:`${name}駅前のホテル`,en:`Hotel near ${name}`,price:12000},act:{ja:'ローカルガイドツアー',en:'Local guide tour',price:3000},
 spots:[{ja:`${name}のシンボルスポット`,en:`${name} landmark`,type:'scenery',dur:80},{ja:'旧市街さんぽ',en:'Old town walk',type:'activity',dur:70},{ja:'名物ランチ',en:'Local specialty lunch',type:'food',dur:60},{ja:'展望スポット',en:'Viewpoint',type:'scenery',dur:60},{ja:'地元で人気のカフェ',en:'Popular local café',type:'cafe',dur:45},{ja:'市場・商店街',en:'Local market',type:'activity',dur:70},{ja:'郷土料理ディナー',en:'Regional dinner',type:'food',dur:90},{ja:'夜の川辺さんぽ',en:'Riverside night walk',type:'scenery',dur:40}]}}

/* ================= 旅程ビルダー（⑦⑧⑨） ================= */
let UID=0;const EVMAP={};
const mkEv=(e)=>{e.uid=++UID;EVMAP[e.uid]=e;return e};
const HOTEL_ALTS=[{ja:'節約案: 駅近ビジネスホテル',en:'Budget: business hotel'},{ja:'贅沢案: 5つ星ホテル',en:'Splurge: 5-star hotel'}];
function mealAlts(dest,usedName){const others=dest.spots.filter(s=>s.type==='food'&&L(s)!==usedName).slice(0,2);
 return others.length?others.map(s=>({ja:s.ja,en:s.en})):[{ja:'駅ナカで軽く',en:'Quick station bite'},{ja:'ローカル食堂',en:'Local diner'}]}
function buildItinerary(dest,dayCount,opts={},form=state.form){
 const perDay=opts.perDay||3;const focus=opts.focus||null;
 const origin=form.origin||(state.lang==='ja'?'自宅（東京）':'Home (Tokyo)');
 const goal=form.roundtrip===false&&form.goal?form.goal:origin;
 const longHaul=dest.travelMin>400;
 let pool=dest.spots.filter(s=>s.type!=='food');
 if(focus)pool=[...pool.filter(s=>s.type===focus),...pool.filter(s=>s.type!==focus)];
 const foods=dest.spots.filter(s=>s.type==='food');
 let si=0,fi=0;const nextSpot=()=>pool[si++%pool.length];const nextFood=()=>foods[fi++%foods.length];
 const days=[];
 for(let d=0;d<dayCount;d++){const day=[];const last=d===dayCount-1&&dayCount>1;
  const push=(e)=>day.push(mkEv(e));
  if(d===0){const dep=opts.startLate?'09:30':'08:30';const depR=addMin(dep,15);
   const arr=longHaul?(dest.arrLocal||'17:30'):addMin(depR,dest.travelMin);
   push({kind:'depart',icon:'🏠',time:dep,title:{ja:`${origin} を出発`,en:`Leave ${origin}`},sub:{ja:'忘れ物チェック：チケットはアプリ内',en:'Tickets are in the app'}});
   push({kind:'ride',icon:dest.mode,time:depR,title:dest.ride,sub:longHaul?{ja:`${depR}発 → 現地 ${arr} ${L(dest.station)}着（時差込み）`,en:`Dep ${depR} → Arr ${arr} local, ${L(dest.station)}`}:{ja:`${depR}発 → ${arr} ${L(dest.station)}着`,en:`Dep ${depR} → Arr ${arr} ${L(dest.station)}`}});
   if(longHaul){
    push({kind:'hotel',icon:'🏨',time:addMin(arr,60),title:dest.hotel,sub:{ja:'チェックイン・ひと休み',en:'Check-in & rest'},alts:HOTEL_ALTS});
    const f1=nextFood();push({kind:'meal',icon:'🍽',time:addMin(arr,150),title:f1,sub:{ja:'初日は近場で軽めに',en:'Keep day 1 light & local'},alts:mealAlts(dest,L(f1)),dur:f1.dur});
   }else{
    let tm=addMin(arr,20);
    for(let i=0;i<Math.max(perDay-1,1);i++){const s=nextSpot();push({kind:'spot',icon:TYPE_META[s.type].icon,time:tm,title:s,type:s.type,dur:s.dur,walk:(i*7+11)%14+4});tm=addMin(tm,s.dur+25);
     if(i===0){const f=nextFood();push({kind:'meal',icon:'🍽',time:tm,title:f,type:'food',dur:f.dur,alts:mealAlts(dest,L(f))});tm=addMin(tm,f.dur+20)}}
    if(dayCount>1)push({kind:'hotel',icon:'🏨',time:'17:30',title:dest.hotel,sub:{ja:'チェックイン・荷物を置く',en:'Check-in, drop bags'},alts:HOTEL_ALTS});
    const f2=nextFood();push({kind:'meal',icon:'🌙',time:'19:00',title:f2,type:'food',dur:f2.dur,alts:mealAlts(dest,L(f2))});
   }
  }else if(!last){let tm=opts.startLate?'10:00':'09:00';
   for(let i=0;i<perDay;i++){const s=nextSpot();push({kind:'spot',icon:TYPE_META[s.type].icon,time:tm,title:s,type:s.type,dur:s.dur,walk:(i*9+13)%16+4});tm=addMin(tm,s.dur+30);
    if(i===0){const f=nextFood();push({kind:'meal',icon:'🍽',time:tm,title:f,type:'food',dur:f.dur,alts:mealAlts(dest,L(f))});tm=addMin(tm,f.dur+20)}}
   const f3=nextFood();push({kind:'meal',icon:'🌙',time:'19:00',title:f3,type:'food',dur:f3.dur,alts:mealAlts(dest,L(f3))});
   push({kind:'hotel',icon:'🏨',time:'21:30',title:dest.hotel,sub:{ja:'ホテルに戻る',en:'Back to hotel'}});
  }else{let tm='09:00';
   push({kind:'hotel',icon:'🧳',time:tm,title:{ja:'チェックアウト・荷物を預ける',en:'Check out, store luggage'},sub:dest.hotel});tm=addMin(tm,40);
   const s=nextSpot();push({kind:'spot',icon:TYPE_META[s.type].icon,time:tm,title:s,type:s.type,dur:s.dur,walk:8});tm=addMin(tm,s.dur+30);
   const f=nextFood();push({kind:'meal',icon:'🍽',time:tm,title:f,type:'food',dur:60,alts:mealAlts(dest,L(f))});
   const depBack=longHaul?'15:00':'16:00';const arrBack=longHaul?(state.lang==='ja'?'翌日':'+1d'):addMin(depBack,dest.travelMin);
   push({kind:'ride',icon:dest.mode,time:depBack,title:dest.ride,sub:longHaul?{ja:`${L(dest.station)} ${depBack}発 → 翌日 ${goal}着（時差込み）`,en:`${L(dest.station)} dep ${depBack} → arr next day (incl. time diff)`}:{ja:`${L(dest.station)} ${depBack}発 → ${arrBack}着`,en:`${L(dest.station)} dep ${depBack} → arr ${arrBack}`}});
   push({kind:'depart',icon:'🏁',time:arrBack,title:{ja:`${goal} に到着`,en:`Arrive at ${goal}`},sub:{ja:'おつかれさま！アルバムが自動で整理されます',en:'Welcome back! Your album is auto-organized'}});
  }
  days.push(day)}
 return days}
function detourRecs(dest,days){const used=new Set();days.flat().forEach(e=>e.title&&used.add(L(e.title)));
 const rec=dest.spots.filter(s=>!used.has(L(s))).slice(0,3).map((s,i)=>({s,walk:(i*5+3)%7+3}));
 if(rec.length<2)rec.push({s:{ja:'地元で人気の喫茶店',en:'Beloved local coffee shop',type:'cafe',dur:40},walk:4});
 return rec}

/* ================= 鳥瞰マップ（③） ================= */
function birdMap(stops,active=-1){const P=[[42,152],[112,118],[176,148],[236,96],[292,126],[150,64],[84,74],[250,60]];
 const pts=stops.map((_,i)=>P[i%P.length]);
 const line=pts.map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' ');
 const blocks=[[70,130,26,16],[150,90,30,18],[210,120,24,14],[110,60,22,14],[250,140,28,16],[30,100,20,12]]
  .map(([x,y,w,h])=>`<g><rect x="${x}" y="${y-6}" width="${w}" height="${h}" class="bm-side"/><rect x="${x}" y="${y-12}" width="${w}" height="${h}" class="bm-top"/></g>`).join('');
 const pins=pts.map((p,i)=>`<g class="${i===active?'bm-pin on':'bm-pin'}"><circle cx="${p[0]}" cy="${p[1]}" r="${i===active?11:9}"/><text x="${p[0]}" y="${p[1]+3.5}">${i+1}</text></g>`).join('');
 return `<svg class="bmap" viewBox="0 0 320 190" aria-label="bird's-eye map"><g transform="skewX(-8)" transform-origin="160 95">
  <rect x="-30" y="0" width="380" height="190" class="bm-ground"/>
  ${[35,75,115,155].map(y=>`<line x1="-20" y1="${y}" x2="350" y2="${y}" class="bm-grid"/>`).join('')}
  ${[40,110,180,250,320].map(x=>`<line x1="${x}" y1="0" x2="${x-24}" y2="190" class="bm-grid"/>`).join('')}
  <path d="M-20 168 C60 150, 120 178, 200 158 S300 130, 350 140" class="bm-river"/>${blocks}</g>
  <path d="${line}" class="bm-route"/>${pins}</svg>`}

/* ================= 見つける（⑬） ================= */
const DISCOVER=[
{id:1,title:{ja:'夕暮れの二年坂',en:'Ninenzaka at dusk'},dest:'kyoto',type:'scenery',likes:1243,bm:210,views:'1.2万',grad:'g-kyoto',emoji:'⛩',author:'@kyoto_life',cap:{ja:'灯りがともる少し前が、いちばん美しい',en:'Just before the lights come on'}},
{id:2,title:{ja:'九份、提灯がともる時間',en:'Jiufen lantern hour'},dest:'taipei',type:'scenery',likes:2871,bm:642,views:'8.4万',grad:'g-night',emoji:'🏮',author:'@tw_walker',cap:{ja:'16時台に着くのが正解でした',en:'Arrive around 4pm — trust me'}},
{id:3,title:{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling'},dest:'okinawa',type:'activity',likes:1698,bm:388,views:'3.1万',grad:'g-beach',emoji:'🤿',author:'@oki_diver',cap:{ja:'朝イチ便は透明度がぜんぜん違う',en:'First boat = clearest water'}},
{id:4,title:{ja:'益善洞の韓屋カフェ',en:'Ikseondong hanok café'},dest:'seoul',type:'cafe',likes:980,bm:301,views:'2.2万',grad:'g-city',emoji:'☕',author:'@seoul_days',cap:{ja:'平日の開店直後なら並ばない',en:'Weekday opening = no queue'}},
{id:5,title:{ja:'錦市場 食べ歩き5選',en:'5 bites at Nishiki Market'},dest:'kyoto',type:'food',likes:1512,bm:455,views:'5.6万',grad:'g-food',emoji:'🍡',author:'@kyoto_gourmet',cap:{ja:'豆乳ドーナツは外せない',en:'The soy milk donuts are a must'}},
{id:6,title:{ja:'客室露天から芦ノ湖',en:'Private onsen, Lake Ashi'},dest:'hakone',type:'hotel',likes:2034,bm:812,views:'9.8万',grad:'g-onsen',emoji:'♨',author:'@onsen_hunter',cap:{ja:'この宿は夕食も部屋出しでした',en:'Dinner served in-room too'}},
{id:7,title:{ja:'ガーデンズの夜ショー',en:'Gardens light show'},dest:'singapore',type:'scenery',likes:3120,bm:701,views:'12万',grad:'g-marina',emoji:'🌴',author:'@sg_nights',cap:{ja:'19:45と20:45の2回。無料です',en:'19:45 & 20:45, free'}},
{id:8,title:{ja:'江ノ電 海沿い区間の車窓',en:'Enoden seaside window'},dest:'kamakura',type:'ride',likes:864,bm:189,views:'1.8万',grad:'g-view',emoji:'🚃',author:'@shonan_rail',cap:{ja:'鎌倉高校前で海側に座って',en:'Sit sea-side before Kamakurakokomae'}},
{id:9,title:{ja:'広蔵市場の屋台グルメ',en:'Gwangjang street food'},dest:'seoul',type:'food',likes:1877,bm:392,views:'6.7万',grad:'g-food',emoji:'🥟',author:'@krfoodie',cap:{ja:'麻薬キンパ→ユッケの順で',en:'Mayak gimbap first, then yukhoe'}},
{id:10,title:{ja:'外灘の夜景タイムラプス',en:'The Bund timelapse'},dest:'shanghai',type:'scenery',likes:2210,bm:498,views:'7.9万',grad:'g-marina',emoji:'🌃',author:'@sh_lens',cap:{ja:'ライトアップは22時まで',en:'Lights go off at 10pm'}},
{id:11,title:{ja:'ワイキキ朝サーフィン',en:'Waikiki morning surf'},dest:'hawaii',type:'activity',likes:2456,bm:534,views:'10万',grad:'g-beach',emoji:'🌺',author:'@aloha_surf',cap:{ja:'初心者は7時のレッスンが空いてる',en:'7am lessons are least crowded'}},
{id:12,title:{ja:'たらい舟、漕がせてもらえる',en:'You can row the tub boat'},dest:'sado',type:'activity',likes:534,bm:98,views:'0.9万',grad:'g-view',emoji:'🛶',author:'@sado_trip',cap:{ja:'意外とむずかしくて笑う',en:'Harder than it looks 😂'}},
{id:13,title:{ja:'マレ地区のパン屋巡り',en:'Le Marais bakery hop'},dest:'paris',type:'food',likes:1322,bm:377,views:'4.4万',grad:'g-paris',emoji:'🥐',author:'@paris_morning',cap:{ja:'朝8時、焼きたての音がする',en:'8am — you can hear the crust'}},
];
const disState={};DISCOVER.forEach(d=>disState[d.id]={liked:false,bmed:false});
let editor={clips:[],caption:'',tag:'view'};

/* ================= お役立ちコラム（⑮） ================= */
const TIPS=[
{id:'pack',cat:'prep',icon:'🎒',title:{ja:'パッキングの基本テク',en:'Packing basics'},lead:{ja:'荷物が軽いと、旅は必ずうまくいく。',en:'A light bag makes every trip better.'},article:[
 {h:{ja:'巻く、立てる、分ける',en:'Roll, stand, divide'},p:{ja:'衣類は畳まずに巻くのが基本です。シワがつきにくく、体感で2割ほど容量が減ります。巻いた衣類はスーツケースに「立てて」並べると、開けた瞬間に全体が見渡せて、現地で荷物をかき回すことがなくなります。ポーチは「機内で使う」「宿で使う」「毎日持ち歩く」の3つに分けるのがおすすめです。',en:'Roll your clothes instead of folding — fewer wrinkles and roughly 20% less volume. Stand the rolls upright in your case so you can see everything at a glance. Divide pouches into three: in-flight, at the hotel, and daily carry.'}},
 {h:{ja:'液体と電子機器は「出しやすさ」が正義',en:'Liquids & electronics: easy access wins'},p:{ja:'国際線の保安検査では液体（100ml以下・透明袋）と大型電子機器を出すよう求められます。バッグの一番上か外ポケットにまとめておくと、検査列で慌てません。液体は現地で買い足す前提で最小限に。ミニボトルへの詰め替えで十分です。',en:'Security checks ask for liquids (under 100ml, clear bag) and large electronics. Keep them at the top or in an outer pocket. Pack minimal liquids and buy the rest locally — mini bottles are enough.'}},
 {h:{ja:'帰りの「3割ルール」',en:'The 30% rule for the way home'},p:{ja:'行きの荷物はバッグの7割まで。残りの3割はお土産と「現地で増えるもの」のための余白です。パンパンの状態で出発すると、帰りに必ず後悔します。折りたたみのサブバッグを1枚忍ばせておくと、いざという時の保険になります。',en:'Fill only 70% of your bag on the way out; the rest is for souvenirs. A foldable sub-bag is cheap insurance for when things overflow.'}}]},
{id:'items',cat:'items',icon:'🧳',pr:true,title:{ja:'旅がラクになる持ち物5選',en:'5 items that make travel easier'},lead:{ja:'何度も旅をして、最後まで残った「本当に使うもの」だけ。',en:'Only the gear that survived dozens of trips.'},article:[
 {h:{ja:'圧縮バッグとモバイルバッテリー',en:'Compression bags & a power bank'},p:{ja:'圧縮バッグは衣類の体積を半分にします。ファスナー式で十分で、袋型より出し入れが速いのが利点です。モバイルバッテリーは10,000mAhがベストバランス。地図・翻訳・決済・チケットのすべてがスマホに集まる旅では、電池切れ＝旅の停止を意味します。',en:'Compression bags halve your clothing volume — zipper type is fastest. A 10,000mAh power bank is the sweet spot: when maps, translation, payment and tickets all live in your phone, a dead battery stops the trip.'}},
 {h:{ja:'移動の質を変える小物',en:'Small items, big comfort'},p:{ja:'速乾タオルは温泉・ビーチ・急な雨のすべてで働きます。ネックピローとアイマスクは深夜バスや長距離フライトの睡眠の質を大きく変えます。スマホストラップは撮影中の落下と置き忘れを防ぐ、いちばん安い保険です。',en:'A quick-dry towel works at onsen, beaches and in sudden rain. A neck pillow and eye mask transform overnight buses and long flights. A phone strap is the cheapest insurance against drops and leave-behinds.'}},
 {h:{ja:'選び方のコツ',en:'How to choose'},p:{ja:'旅行グッズは「複数の場面で使えるか」で選ぶと荷物が減ります。単機能の便利グッズは、たいてい2回目の旅から置いていかれます。※本コラムで紹介した商品カテゴリにはプロモーションが含まれる場合があります。',en:'Choose gear that works in multiple situations — single-purpose gadgets get left home by trip two. * Product categories in this column may include promotion.'}}]},
{id:'safety',cat:'safety',icon:'⚠️',title:{ja:'渡航前の安全チェック',en:'Safety check before you go'},lead:{ja:'出発前の10分でできる、いちばん確実なリスク管理。',en:'Ten minutes before departure — the most reliable risk management.'},article:[
 {h:{ja:'危険情報レベルの読み方',en:'Reading travel advisories'},p:{ja:'外務省の海外安全ホームページでは、国・地域ごとに危険情報がレベル1（十分注意）〜レベル4（退避勧告）で示されます。レベル2以上の地域への旅行は再検討を。同じ国でも地域によってレベルが違うことが多いので、都市名まで確認するのがポイントです。',en:'Japan\'s MOFA rates regions from Level 1 (caution) to Level 4 (evacuate). Reconsider travel to Level 2+. Levels often differ within a country, so check by city, not just country.'}},
 {h:{ja:'「たびレジ」と連絡手段',en:'Tabi-Reji & staying reachable'},p:{ja:'外務省の「たびレジ」に登録すると、滞在先の安全情報や緊急事態の連絡がメールで届きます。3分で登録できて無料です。パスポートのコピーと緊急連絡先は、スマホの中だけでなく紙でも1枚持ちましょう。スマホを失くした瞬間に全てを失わないためです。',en:'Register with MOFA\'s free "Tabi-Reji" service for local safety alerts by email. Carry paper copies of your passport and emergency contacts — losing your phone shouldn\'t mean losing everything.'}},
 {h:{ja:'現地での基本動作',en:'Basics on the ground'},p:{ja:'夜間に歩いていいエリアかどうかは、ホテルのフロントに聞くのが最速で確実です。貴重品は分散して持ち、バッグは車道と反対側に。トラブルの大半は「観光客が集中する場所」で起きるので、人混みでは特にスリに注意してください。',en:'Ask your hotel front desk which areas are safe at night — fastest and most reliable. Split your valuables, keep bags away from the road side, and watch for pickpockets where tourists concentrate.'}}]},
{id:'plug',cat:'abroad',icon:'🔌',title:{ja:'変換プラグ、買うべき？',en:'Do you need a plug adapter?'},lead:{ja:'答えは「行き先による」。1分で判定できます。',en:'It depends on the destination — check in one minute.'},article:[
 {h:{ja:'プラグ形状の基本',en:'Plug shapes 101'},p:{ja:'日本のプラグはAタイプです。台湾・アメリカ・ハワイも同じAタイプなので変換プラグは不要。韓国はSE/Cタイプ、ヨーロッパの大半はCタイプ、シンガポール・香港・マレーシアはBFタイプで、これらは変換プラグが必要です。',en:'Japan uses Type A — same as Taiwan, the USA and Hawaii, so no adapter needed there. Korea uses SE/C, most of Europe uses C, and Singapore/Hong Kong/Malaysia use BF: adapters required.'}},
 {h:{ja:'電圧は気にしなくていい？',en:'What about voltage?'},p:{ja:'スマホやPCの充電器は「100-240V」対応がほとんどで、変圧器は不要です。注意が必要なのはドライヤーやヘアアイロンなどの熱器具。日本専用品を海外で使うと故障や発火の恐れがあります。ホテル備え付けを使うのが安全です。',en:'Phone and laptop chargers are almost always 100–240V — no converter needed. The exception is heat appliances like hair dryers; use the hotel\'s instead of bringing a Japan-only model.'}},
 {h:{ja:'マルチプラグという保険',en:'The universal adapter'},p:{ja:'行き先が複数国にまたがる旅や、これから何度も海外に行く予定があるなら、全世界対応のマルチ変換プラグを1つ買うのが結局いちばん安上がりです。USBポート付きを選ぶと、プラグの取り合いも起きません。',en:'For multi-country trips or frequent travelers, one universal adapter is the cheapest answer — pick one with USB ports so nobody fights over outlets.'}}]},
{id:'esim',cat:'abroad',icon:'📶',title:{ja:'海外の通信、どうする？',en:'Staying connected abroad'},lead:{ja:'空港のSIM売り場に並ぶ時代は、終わりつつあります。',en:'The airport SIM queue is becoming history.'},article:[
 {h:{ja:'eSIMが第一候補',en:'eSIM first'},p:{ja:'いまの短期海外旅行の第一候補はeSIMです。出発前にアプリで購入してQRコードを読み込んでおけば、現地到着と同時に開通します。物理SIMの入れ替えが不要なので、日本の番号にかかってくる電話やSMSもそのまま受けられます。',en:'For short trips, eSIM is the default now: buy in-app before departure, scan a QR, and you\'re online on arrival. Your physical SIM stays in, so you still receive calls and SMS on your home number.'}},
 {h:{ja:'ローミングと物理SIMの使いどころ',en:'When roaming or physical SIMs win'},p:{ja:'キャリアの海外ローミングは設定不要で確実ですが、料金は最も高くつきます。逆に長期滞在なら現地の物理SIMが最安になることも。滞在日数×データ量で比べるのがコツで、7日以内・5GB程度ならeSIMがほぼ勝ちます。',en:'Carrier roaming is zero-setup but priciest; for long stays a local physical SIM can be cheapest. Compare by days × data — under 7 days and ~5GB, eSIM almost always wins.'}},
 {h:{ja:'オフラインの備え',en:'Prepare for offline'},p:{ja:'どの手段を選んでも、地図のオフライン保存だけはしておきましょう。地下鉄や山間部では普通に圏外になります。ホテルの住所を現地語でメモしておくと、タクシーで困りません。',en:'Whatever you choose, save offline maps — subways and mountains still kill signal. Note your hotel address in the local language for taxi rides.'}}]},
{id:'money',cat:'abroad',icon:'💳',title:{ja:'現金・カード・両替のコツ',en:'Cash, cards & exchange'},lead:{ja:'旅先のお金は「一点集中」ではなく「分散」が基本。',en:'Don\'t concentrate your travel money — spread it.'},article:[
 {h:{ja:'カードは2枚体制',en:'Carry two cards'},p:{ja:'タッチ決済対応のクレジットカードを2枚、別々のブランド（VISAとMastercard）で持つのが基本です。1枚が磁気不良や利用停止になっても旅が止まりません。2枚は別の場所に保管しましょう。財布とパスポートケース、のように。',en:'Two contactless credit cards on different networks (one Visa, one Mastercard) keep the trip alive if one fails or gets blocked. Store them separately — wallet and passport case.'}},
 {h:{ja:'両替のベストプラクティス',en:'Exchange best practice'},p:{ja:'空港の両替所はレートが悪いことが多く、最低限の交通費分だけにするのが定石です。街中の両替所か、現地ATMでのキャッシングの方がレートは有利なことがほとんど。屋台や市場、チップ文化の国では少額紙幣の現金が必須です。',en:'Airport counters usually have the worst rates — exchange only enough for transport. Town exchanges or ATM withdrawals are better. Keep small bills for street food, markets and tipping cultures.'}},
 {h:{ja:'割り勘は記録がすべて',en:'Splitting bills: record everything'},p:{ja:'グループ旅行のお金のもめごとは、ほぼ「誰が何を払ったか分からない」ことから起きます。払った瞬間にアプリに記録して、精算は帰りの移動中に一度だけ。tabiの割り勘機能ならPayPay決済が自動で取り込まれるので、記録の手間すらありません。',en:'Group money trouble comes from unrecorded payments. Log every payment the moment it happens and settle once, on the way home. tabi\'s split feature auto-imports PayPay payments, so there\'s nothing to forget.'}}]},
];
const TIP_CATS=[{id:'all',ja:'すべて',en:'All'},{id:'prep',ja:'準備',en:'Prep'},{id:'items',ja:'持ち物',en:'Packing'},{id:'safety',ja:'安全',en:'Safety'},{id:'abroad',ja:'海外',en:'Abroad'}];
let tipCat='all';

/* ================= アクティブな旅 ================= */
let activeTrip={destId:'kyoto',title:{ja:'京都旅行',en:'Kyoto Trip'},dates:'7/18 (Sat) – 7/20 (Mon)',members:['Koki','Yui'],
 days:buildItinerary(destById('kyoto'),3,{},{origin:'自宅（東京）',roundtrip:true,people:2}),extra:[],invite:'tabi.app/t/KYO-8264',
 album:[{grad:'g-kyoto',emoji:'⛩',label:{ja:'DAY1 清水寺',en:'Day 1 Kiyomizu'}},{grad:'g-food',emoji:'🍡',label:{ja:'DAY1 祇園',en:'Day 1 Gion'}},{grad:'g-alley',emoji:'🏮',label:{ja:'DAY2 先斗町',en:'Day 2 Pontocho'}},{grad:'g-view',emoji:'🌇',label:{ja:'DAY2 鴨川',en:'Day 2 Kamo River'}}],
 diary:[{d:1,time:'21:04',who:'Yui',text:{ja:'清水寺、朝イチで行って正解。人が少なくて空気が澄んでた。',en:'Kiyomizu first thing in the morning — so quiet, so clear.'}},{d:2,time:'15:22',who:'Koki',text:{ja:'抹茶パフェ、並んだけど後悔なし🍵',en:'Queued for the matcha parfait. Zero regrets 🍵'}}],
 expenses:[{name:{ja:'新幹線（2人分 往復）',en:'Shinkansen (2 rt)'},payer:'Koki',amount:53280,src:'paypay'},{name:{ja:'ホテル 2泊',en:'Hotel, 2 nights'},payer:'Yui',amount:48000,src:'card'},{name:{ja:'祇園ランチ',en:'Gion lunch'},payer:'Koki',amount:4600,src:'paypay'},{name:{ja:'タクシー',en:'Taxi'},payer:'Yui',amount:1800,src:'paypay'}]};
let shioriDay=0;

/* ================= 検索（②〜⑫の中核） ================= */
function parseNights(){const f=state.form;
 if(f.from&&f.to){const n=Math.round((new Date(f.to)-new Date(f.from))/864e5);if(n>=0)return Math.min(n,3)}
 const m=f.vague.match(/(\d)\s*泊/);if(m)return Math.min(+m[1],3);
 if(/日帰り|day\s*trip/i.test(f.vague))return 0;return 2}
function planPrice(dest,nights,mult=1){const n=Math.max(nights,1);
 return Math.round((dest.transport.price+dest.hotel.price*n+dest.act.price+3500*(nights+1))*mult/100)*100}
function searchPlans(){const f=state.form;const nights=parseNights();const days=nights+1;
 const kws=KW.filter(k=>k.kw.some(w=>(f.vague+' '+f.must).toLowerCase().includes(w)));
 const budget=BUDGETS.find(b=>b.id===f.budget);
 const typed=f.dest.trim();
 let destHit=typed?DESTS.find(d=>d.ja.includes(typed)||d.en.toLowerCase().includes(typed.toLowerCase())):null;
 if(typed&&!destHit)destHit=makeGenericDest(typed);
 let cands=[];
 if(destHit){const kwLabel=kws[0]?L(kws[0]):null;
  const focus=kws[0]&&['cafe','food'].includes(kws[0].feat)?kws[0].feat:(destHit.feat.includes('cafe')?'cafe':'scenery');
  const focusLabel=kwLabel||L(TYPE_META[focus]);
  cands=[
   {dest:destHit,name:{ja:t('v.classic'),en:t('v.classic')},desc:{ja:T.ja['v.classic.d'],en:T.en['v.classic.d']},opts:{perDay:3},mult:1,reason:destHit.generic?t('reason.generic'):t('reason.dest')},
   {dest:destHit,name:{ja:T.ja['v.theme'](focusLabel),en:T.en['v.theme'](focusLabel)},desc:{ja:T.ja['v.theme.d'](focusLabel),en:T.en['v.theme.d'](focusLabel)},opts:{perDay:3,focus},mult:.95,reason:kwLabel?t('reason.kw',kwLabel):t('reason.near')},
   {dest:destHit,name:{ja:t('v.slow'),en:t('v.slow')},desc:{ja:T.ja['v.slow.d'],en:T.en['v.slow.d']},opts:{perDay:2,startLate:true},mult:.9,reason:t('reason.near')},
  ].map(c=>({...c,nights,days,price:planPrice(c.dest,nights,c.mult)}));
 }else{
  const scored=DESTS.map(d=>{let s=1,reason=t('reason.near');
   kws.forEach(k=>{if(d.feat.includes(k.feat)){s+=3;reason=t('reason.kw',L(k))}});
   if(f.type&&(AFFINITY[f.type]||[]).includes(d.id)){s+=2.5;reason=t('reason.type',L(TRIP_TYPES.find(x=>x.id===f.type)).replace(/^[^ ]+ /,''))}
   if(f.license==='no'&&d.needCar)s-=4;
   if(f.license==='yes'&&d.needCar)s+=1;
   const price=planPrice(d,nights);
   if(budget&&(price>budget.max||price<budget.min*.7))s=-99; /* ⑫ 予算を厳守 */
   s+=(d.id.length%3)*.1;return{d,s,reason,price}})
  .filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
  cands=scored.map(x=>({dest:x.d,name:{ja:`${x.d.ja}への旅`,en:`Trip to ${x.d.en}`},desc:{ja:t('v.classic.d'),en:t('v.classic.d')},opts:{perDay:3},reason:x.reason,price:x.price,nights,days}));
 }
 cands.forEach(c=>{if(budget)c.overBudget=c.price>budget.max});
 state.results={cands,nights,days};render()}

/* ================= レンダリング ================= */
const chips=(items,sel,group)=>items.map(i=>`<button class="chip ${sel===i.id?'active':''}" data-act="chip" data-group="${group}" data-val="${i.id}">${L(i)}</button>`).join('');
const featTags=(d)=>d.feat.slice(0,3).map(f=>`<span>${L(FEAT_LABEL[f])}</span>`).join('');
const toast=(m)=>{const el=$('#toast');el.querySelector('p').textContent=m;el.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>el.classList.remove('show'),2200)};

function evRow(e,idx){
 if(e.kind==='walkrow')return '';
 const alts=e.alts?`<div class="alts"><small>${t('s.alt')}</small>${e.alts.map((a,i)=>`<button class="alt-chip" data-act="swap" data-uid="${e.uid}" data-i="${i}">⇄ ${L(a)}</button>`).join('')}</div>`:'';
 const walk=e.walk&&idx>0?`<div class="tr-row"><span></span><small>🚶 ${t('s.walk')} ${e.walk}${t('s.min')}</small></div>`:'';
 const dur=e.dur?` · ${e.dur}${t('s.min')}`:'';
 const sub=e.sub?`<small>${L(e.sub)}${dur}</small>`:(e.type?`<small>${L(TYPE_META[e.type])}${dur}</small>`:'');
 return `${walk}<div class="ev k-${e.kind}"><time>${e.time}</time><i></i><div><b>${e.icon||''} ${L(e.title)}${e.detour?' <em class="detour-tag">寄り道</em>':''}</b>${sub}${alts}</div></div>`}
const dayTimeline=(day)=>`<div class="timeline">${day.map((e,i)=>evRow(e,i)).join('')}</div>`;
const stopsOf=(day)=>day.filter(e=>['spot','meal'].includes(e.kind));

function screenPlan(){const tt=activeTrip;const d=destById(tt.destId)||makeGenericDest('旅');
 const myTrip=`<div class="trip-card" data-act="goto" data-val="shiori"><div class="trip-cover ${d.grad}">${sceneArt(d.scene)}<span class="badge-lime">${t('plan.active')}</span></div>
  <div class="trip-info"><b>${L(tt.title)}</b><small>${tt.dates} · ${tt.members.join(', ')}</small></div><span class="go">→</span></div>`;
 const results=state.results?`<section class="block" id="results"><h2>${t('plan.results')}</h2><div class="cands">${state.results.cands.map((c,i)=>`
  <div class="cand ${c.dest.grad}" data-act="open-plan" data-val="${i}">${sceneArt(c.dest.scene)}<div class="cand-top"><span class="cand-emoji">${c.dest.emoji}</span><span class="cand-reason">✦ ${c.reason}</span></div>
   <div class="cand-body"><h3>${L(c.dest)}<span class="cand-sub">${L(c.name)}</span></h3><p>${L(c.desc)} · ${t('r.nights',c.nights)}</p><div class="cand-tags">${featTags(c.dest)}</div></div>
   <div class="cand-foot"><b>${yen(c.price)}〜${c.overBudget?`<em class="over">${t('r.over')}</em>`:(state.form.budget?`<em class="fit">${t('r.fit')}</em>`:'')}</b><span class="mini-btn">${t('r.detail')} →</span></div></div>`).join('')}</div></section>`
 :`<div class="card hint"><span>✦</span><p>${t('plan.empty')}</p></div>`;
 return `<section class="block"><h2>${t('plan.mytrips')}</h2>${myTrip}</section>${results}`}

function searchFormHTML(){const f=state.form;
 return `<div class="sheet-card form-sheet"><div class="sheet-bar"><b>✦ ${t('search.title')}</b><button class="close" data-act="close-search">×</button></div>
 <div class="sheet-body">
  <p class="form-sub">${t('search.sub')}</p>
  <label class="f-label">${t('f.dest')}</label><input class="f-input" data-field="dest" value="${esc(f.dest)}" placeholder="${t('f.dest.ph')}">
  <label class="f-label">${t('f.vague')}</label><textarea class="f-input" rows="2" data-field="vague" placeholder="${t('f.vague.ph')}">${esc(f.vague)}</textarea>
  <label class="f-label">${t('f.origin')}</label>
  <input class="f-input" data-field="origin" value="${esc(f.origin)}" placeholder="${t('f.origin.ph')}">
  <div class="chips">${['home','airport','local'].map(k=>`<button class="chip" data-act="origin-quick" data-val="${k}">${t('f.origin.'+k)}</button>`).join('')}</div>
  <label class="f-label">${t('f.goal')}</label>
  <div class="chips"><button class="chip ${f.roundtrip?'active':''}" data-act="toggle-round">${t('f.goal.round')}</button></div>
  ${f.roundtrip?'':`<input class="f-input" data-field="goal" value="${esc(f.goal)}" placeholder="${t('f.goal.ph')}">`}
  <label class="f-label">${t('f.dates')}</label>
  <div class="f-row dates"><input type="date" class="f-input" data-field="from" value="${f.from}" ${f.tbd?'disabled':''}><input type="date" class="f-input" data-field="to" value="${f.to}" min="${f.from||''}" ${f.tbd?'disabled':''}><button class="chip ${f.tbd?'active':''}" data-act="toggle-tbd">${t('f.dates.tbd')}</button></div>
  <label class="f-label">${t('f.type')}</label><div class="chips">${chips(TRIP_TYPES,f.type,'type')}</div>
  <div class="f-grid">
   <div><label class="f-label">${t('f.people')}</label><div class="stepper"><button data-act="people" data-val="-1">−</button><b>${t('people',f.people)}</b><button data-act="people" data-val="1">＋</button></div></div>
   <div><label class="f-label">${t('f.license')}</label><div class="chips">${chips([{id:'yes',ja:t('f.license.yes'),en:t('f.license.yes')},{id:'no',ja:t('f.license.no'),en:t('f.license.no')}],f.license,'license')}</div></div>
  </div>
  <label class="f-label">${t('f.budget')}</label><div class="chips">${chips(BUDGETS.map(b=>({id:b.id,ja:b.label,en:b.label})),f.budget,'budget')}</div>
  <label class="f-label">${t('f.must')}</label><input class="f-input" data-field="must" value="${esc(f.must)}" placeholder="${t('f.must.ph')}">
 </div>
 <div class="sheet-foot"><button class="primary-btn" data-act="search"><span>${t('f.search')}</span><b>→</b></button></div></div>`}

/* ---- 見つける（グリッド / ショート） ---- */
function disItems(){const q=state.disQuery.toLowerCase();
 return DISCOVER.filter(d=>{const dest=d.mine?null:destById(d.dest);
  const place=dest?L(dest):'';
  const hitQ=!q||L(d.title).toLowerCase().includes(q)||place.toLowerCase().includes(q)||(dest&&dest.ja.includes(state.disQuery));
  const tag=d.tag||TYPE2TAG[d.type]||'view';
  const hitT=state.disTag==='all'||tag===state.disTag;return hitQ&&hitT})}
function screenDiscover(){const items=disItems();
 const tagChips=[`<button class="chip ${state.disTag==='all'?'active':''}" data-act="dis-tag" data-val="all">${t('d.all')}</button>`,
  ...USE_TAGS.map(u=>`<button class="chip ${state.disTag===u.id?'active':''}" data-act="dis-tag" data-val="${u.id}">${L(u)}</button>`)].join('');
 const seg=`<div class="seg dis-seg"><button class="${state.disMode==='grid'?'active':''}" data-act="dis-mode" data-val="grid">${t('d.grid')}</button><button class="${state.disMode==='shorts'?'active':''}" data-act="dis-mode" data-val="shorts">${t('d.shorts')}</button></div>`;
 const head=`<div class="f-row"><input class="f-input dis-search" id="disSearch" value="${esc(state.disQuery)}" placeholder="${t('d.search.ph')}"><button class="mini-btn post" data-act="open-editor">${t('d.post')}</button></div>
 <div class="chips scroll-x">${tagChips}</div>${seg}`;
 if(state.disMode==='shorts'){
  return `<section class="block">${head}<div class="shorts" id="shorts">${items.map(d=>{const s=disState[d.id];const dest=d.mine?null:destById(d.dest);
   return `<div class="short ${d.grad}">${sceneArt(dest?dest.scene:'mountains')}<div class="short-shade"></div>
    <div class="short-copy"><small>⌖ ${dest?L(dest):L(d.title)} · ${d.views||'0'}${t('d.views')}</small><h3>${L(d.title)}</h3><p><b>${d.author||'@you'}</b> ${d.cap?L(d.cap):''}</p></div>
    <div class="short-rail"><button data-act="like" data-val="${d.id}">${s.liked?'♥':'♡'}<small>${(d.likes+(s.liked?1:0)).toLocaleString()}</small></button>
     <button data-act="bm" data-val="${d.id}">${s.bmed?'▰':'▱'}<small>${d.bm+(s.bmed?1:0)}</small></button>
     <button data-act="share-short">↗<small></small></button>
     <button class="rail-add" data-act="add-spot" data-val="${d.id}">＋<small>plan</small></button></div>
    <span class="play-big">▶</span></div>`}).join('')||`<p class="empty">🔍</p>`}</div></section>`}
 return `<section class="block">${head}<div class="dis-grid" id="disGrid">${items.map(d=>{const s=disState[d.id];const dest=d.mine?null:destById(d.dest);const tag=d.tag||TYPE2TAG[d.type]||'view';
  return `<div class="dis-card"><div class="dis-cover ${d.grad}">${sceneArt(dest?dest.scene:'mountains')}<span class="play">▶</span><span class="dis-type">${L(USE_TAGS.find(u=>u.id===tag))}</span></div>
   <div class="dis-body"><b>${L(d.title)}</b><small>⌖ ${dest?L(dest):'—'} · ${d.views||'0'}${t('d.views')}</small>
    <div class="dis-actions"><button class="pill ${s.liked?'on':''}" data-act="like" data-val="${d.id}">${s.liked?'♥':'♡'} ${(d.likes+(s.liked?1:0)).toLocaleString()}</button>
     <button class="pill ${s.bmed?'on':''}" data-act="bm" data-val="${d.id}">${s.bmed?'▰':'▱'} ${d.bm+(s.bmed?1:0)}</button>
     <button class="pill add" data-act="add-spot" data-val="${d.id}">＋</button></div></div></div>`}).join('')||'<p class="empty">🔍</p>'}</div></section>`}

/* ---- しおり ---- */
function settleInfo(){const list=activeTrip.expenses.filter(x=>state.paypayOn||x.src!=='paypay');
 const total=list.reduce((s,x)=>s+x.amount,0);const mem=activeTrip.members;const per=Math.round(total/mem.length);
 const paid={};mem.forEach(m=>paid[m]=0);list.forEach(x=>paid[x.payer]+=x.amount);
 const debt=mem.map(m=>({m,d:per-paid[m]})).sort((a,b)=>b.d-a.d);
 const transfer=debt[0]&&debt[0].d>0?{from:debt[0].m,to:debt[debt.length-1].m,amt:debt[0].d}:null;
 return{list,total,per,transfer}}
function screenShiori(){const tt=activeTrip;const d=destById(tt.destId)||makeGenericDest(L(tt.title));
 const head=`<div class="sh-head ${d.grad}">${sceneArt(d.scene)}<div class="sh-head-in"><span class="badge-lock">${t('sh.closed')}</span><h2>${L(tt.title)}</h2><p>${tt.dates}</p>
  <div class="sh-members">${tt.members.map(m=>`<span class="avatar sm">${m[0]}</span>`).join('')}<small>${tt.members.join(' · ')}</small></div></div></div>
 <div class="invite-row"><div><small>${t('sh.invite')} · ${t('sh.closed.note')}</small><b>${tt.invite}</b></div><button class="mini-btn" data-act="copy-invite">${t('sh.copy')}</button></div>`;
 const tabs=`<div class="seg">${[['itin',t('sh.itin')],['album',t('sh.album')],['split',t('sh.split')],['diary',t('sh.diary')]].map(([id,l])=>`<button class="${state.shioriTab===id?'active':''}" data-act="sh-tab" data-val="${id}">${l}</button>`).join('')}</div>`;
 let body='';
 if(state.shioriTab==='itin'){const dayChips=tt.days.map((_,i)=>`<button class="chip ${shioriDay===i?'active':''}" data-act="sh-day" data-val="${i}">DAY ${i+1}</button>`).join('');
  const extra=tt.extra.length?`<div class="extra"><small>✦ ${t('s.added')}</small>${tt.extra.map(x=>`<span class="chip">＋ ${L(x.title)}</span>`).join('')}</div>`:'';
  body=`<div class="chips">${dayChips}</div>${dayTimeline(tt.days[shioriDay])}${extra}<button class="primary-btn" data-act="open-nav" data-val="${shioriDay}"><span>${t('nav.start')}</span><b>→</b></button>`}
 if(state.shioriTab==='album'){body=`<div class="album">${tt.album.map(a=>`<div class="al-tile ${a.grad}"><span>${a.emoji}</span><small>${L(a.label)}</small></div>`).join('')}
  <button class="al-add" data-act="add-photo">${t('sh.addphoto')}</button></div>`}
 if(state.shioriTab==='split'){const si=settleInfo();
  const rows=si.list.length?si.list.map(x=>`<div class="exp"><span class="b-icon sm">${x.src==='paypay'?'📱':'💳'}</span><div><b>${L(x.name)}</b><small>${x.payer}${x.src==='paypay'?` · <em>${t('sh.auto')}</em>`:''}</small></div><b>${yen(x.amount)}</b></div>`).join(''):`<p class="empty-note">${t('sh.noexp')}</p>`;
  body=`<div class="pp-row"><div><b>${t('sh.paypay')}</b><small>${t('sh.paypay.note')}</small></div><button class="switch ${state.paypayOn?'on':''}" data-act="paypay"><i></i></button></div>
  <div class="exp-list">${rows}</div><button class="outline-btn" data-act="add-exp">${t('sh.addexp')}</button>
  <div class="settle"><div class="s-row"><span>${t('sh.total')}</span><b>${yen(si.total)}</b></div><div class="s-row"><span>${t('sh.per')}（×${activeTrip.members.length}）</span><b>${yen(si.per)}</b></div>
   ${si.transfer?`<div class="s-row hl"><span>${t('sh.settle')}</span><b>${si.transfer.from} → ${si.transfer.to} ${yen(si.transfer.amt)}</b></div>`:''}
   <button class="primary-btn paypay" data-act="settle"><span>${t('sh.settlebtn')}</span><b>→</b></button></div>`}
 if(state.shioriTab==='diary'){
  const entries=activeTrip.diary.map(e=>`<div class="dy"><span class="avatar sm">${e.who[0]}</span><div><small>DAY ${e.d} · ${e.time} · ${e.who}</small><p>${L(e.text)}</p></div></div>`).join('');
  body=`<div class="dy-list">${entries}</div>
   <textarea class="f-input" id="diaryInput" rows="2" placeholder="${t('dy.ph')}"></textarea>
   <button class="outline-btn" data-act="add-diary">✎ ${t('dy.add')}</button><p class="note">🔒 ${t('dy.note')}</p>`}
 return `<section class="block">${head}${tabs}<div class="card soft">${body}</div></section>`}

function screenTips(){const items=TIPS.filter(x=>tipCat==='all'||x.cat===tipCat);
 return `<section class="block"><h2>${t('tips.title')}</h2>
 <div class="chips scroll-x">${TIP_CATS.map(c=>`<button class="chip ${tipCat===c.id?'active':''}" data-act="tip-cat" data-val="${c.id}">${L(c)}</button>`).join('')}</div>
 <div class="tips">${items.map(x=>`<div class="tip" data-act="open-article" data-val="${x.id}"><span class="b-icon">${x.icon}</span><div><b>${L(x.title)}${x.pr?` <em class="pr">${t('tips.pr')}</em>`:''}</b><small>${L(x.lead)}</small><span class="read">${t('tips.read')}</span></div></div>`).join('')}</div></section>`}

function render(){$('#app').innerHTML={plan:screenPlan,discover:screenDiscover,shiori:screenShiori,tips:screenTips}[state.screen]();
 $$('.tabbar .tab').forEach(b=>b.classList.toggle('active',b.dataset.screen===state.screen));
 $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
 $('#langBtn').textContent=state.lang==='ja'?'EN':'日本語';document.documentElement.lang=state.lang}

/* ================= プラン詳細シート ================= */
let sheet={cand:null,tab:'itin',day:0,days:null};
function openPlanSheet(i){const c=state.results.cands[i];sheet={cand:c,tab:'itin',day:0,days:buildItinerary(c.dest,c.days,c.opts)};renderSheet();$('#planSheet').classList.add('open')}
function detourCards(dest,days,target){return `<div class="detours"><div class="det-head"><b>✦ ${t('s.detour')}</b><small>${t('s.detour.note')}</small></div><div class="det-row">${detourRecs(dest,days).map((r,i)=>`
 <div class="det-card"><span class="b-icon sm">${TYPE_META[r.s.type].icon}</span><div><b>${L(r.s)}</b><small>🚶 +${r.walk}${t('s.min')}</small></div><button class="mini-btn" data-act="${target}" data-val="${i}">${t('s.detour.add')}</button></div>`).join('')}</div></div>`}
function renderSheet(){const c=sheet.cand;if(!c)return;const d=c.dest;const days=sheet.days;const f=state.form;
 const dayChips=days.map((_,i)=>`<button class="chip ${sheet.day===i?'active':''}" data-act="sheet-day" data-val="${i}">DAY ${i+1}</button>`).join('');
 let body='';
 if(sheet.tab==='itin')body=`<div class="chips">${dayChips}</div>${dayTimeline(days[sheet.day])}`;
 if(sheet.tab==='route'){const stops=stopsOf(days[sheet.day]);
  body=`<div class="chips">${dayChips}</div><p class="note">🗺 ${t('s.map')}</p>${birdMap(stops)}
  <div class="route">${stops.map((s,i)=>`<div class="r-stop"><span class="r-pin">${i+1}</span><b>${L(s.title)}</b></div>${i<stops.length-1?`<div class="r-leg"><i></i><small>${i%2?t('s.bus'):t('s.walk')} · ${(i*7+13)%20+6}${t('s.min')}</small></div>`:''}`).join('')}</div>
  ${detourCards(d,days,'add-detour')}`}
 if(sheet.tab==='book'){const nights=Math.max(c.nights,1);const rows=[
   {icon:d.mode,name:`${L(d.transport)}（${L(d.ride)}）`,qty:`×${f.people}`,amt:d.transport.price*f.people},
   {icon:'🏨',name:L(d.hotel),qty:`×${c.nights||1}${state.lang==='ja'?'泊':'n'}`,amt:d.hotel.price*nights},
   {icon:'🎟',name:L(d.act),qty:`×${f.people}`,amt:d.act.price*f.people}];
  const total=rows.reduce((s,r)=>s+r.amt,0);
  body=`<p class="note">✦ ${t('s.booknote')}</p>${rows.map(r=>`<div class="exp"><span class="b-icon sm">${r.icon}</span><div><b>${r.name}</b><small>${r.qty}</small></div><b>${yen(r.amt)}</b></div>`).join('')}
  <div class="settle"><div class="s-row hl"><span>${t('s.total')}</span><b>${yen(total)}</b></div></div>`}
 $('#planSheet').innerHTML=`<div class="sheet-card">
  <div class="sheet-cover ${d.grad}">${sceneArt(d.scene)}<button class="close" data-act="close-sheet">×</button>
   <div class="sheet-title"><small>${L(d)} · ${t('r.nights',c.nights)} · ${L(c.name)}</small><h2>${L(d)}<span> — ${L(c.name)}</span></h2><b>${yen(c.price)}〜 <small>/ ${state.lang==='ja'?'人':'person'}</small>${c.overBudget?`<em class="over">${t('r.over')}</em>`:''}</b></div></div>
  <div class="seg">${[['itin',t('s.itin')],['route',t('s.route')],['book',t('s.book')]].map(([id,l])=>`<button class="${sheet.tab===id?'active':''}" data-act="sheet-tab" data-val="${id}">${l}</button>`).join('')}</div>
  <div class="sheet-body">${body}</div>
  <div class="sheet-foot"><button class="primary-btn" data-act="start-trip"><span>${t('s.start')}</span><b>→</b></button></div></div>`}

/* ================= ナビシート（②③） ================= */
let nav={day:0,step:0};
function navSteps(day){const stops=stopsOf(day);const steps=[];
 stops.forEach((s,i)=>{if(i===stops.length-1){steps.push({arrow:'◎',ja:`${L(s.title)} に到着`,en:`Arrived at ${L(s.title)}`,d:''});return}
  steps.push({arrow:i%2?'⬅':'➡',ja:`${L(s.title)}を出て${i%2?'左':'右'}へ`,en:`Exit ${L(s.title)}, turn ${i%2?'left':'right'}`,d:`${(i*40+120)%300+80}m`});
  steps.push({arrow:'⬆',ja:`${i%2?t('s.bus'):t('s.walk')}で ${L(stops[i+1].title)} へ`,en:`${i%2?'Bus':'Walk'} to ${L(stops[i+1].title)}`,d:`${(i*7+13)%20+6}${t('s.min')}`})});
 return steps}
function openNav(dayIdx){nav={day:dayIdx,step:0};renderNav();$('#navSheet').classList.add('open')}
function renderNav(){const tt=activeTrip;const d=destById(tt.destId)||makeGenericDest(L(tt.title));const day=tt.days[nav.day];const stops=stopsOf(day);
 const steps=navSteps(day);const st=steps[Math.min(nav.step,steps.length-1)];
 const activeStop=Math.min(Math.floor(nav.step/2),stops.length-1);
 const totalMin=stops.reduce((s,x)=>s+(x.dur||45),0);const eta=addMin('09:00',Math.round(totalMin*(nav.step+1)/steps.length));
 $('#navSheet').innerHTML=`<div class="sheet-card nav-card">
  <div class="sheet-bar dark"><b>🧭 DAY ${nav.day+1} ${t('nav.title')}</b><button class="close" data-act="close-nav">×</button></div>
  <div class="nav-instr"><span class="nav-arrow">${st.arrow}</span><div><b>${L(st)}</b><small>${st.d}</small></div></div>
  <div class="nav-progress"><i style="width:${Math.round((nav.step+1)/steps.length*100)}%"></i></div>
  ${birdMap(stops,activeStop)}
  <div class="nav-stats"><div><small>${t('nav.eta')}</small><b>${eta}</b></div><div><small>${t('nav.left')}</small><b>${Math.max(steps.length-1-nav.step,0)} step</b></div><div><small>Σ</small><b>${(stops.length*0.9).toFixed(1)} km</b></div></div>
  <div class="f-row nav-btns"><button class="outline-btn" data-act="nav-restart">${t('nav.restart')}</button><button class="primary-btn" data-act="nav-next" style="margin-top:12px"><span>${t('nav.next')}</span><b>→</b></button></div>
  <div class="sheet-body">${detourCards(d,tt.days,'add-detour-nav')}</div></div>`}

/* ================= サブシート（コラム/エディタ） ================= */
function openArticle(id){const x=TIPS.find(a=>a.id===id);
 $('#subSheet').innerHTML=`<div class="sheet-card article">
  <div class="sheet-bar"><b>${x.icon} ${L(TIP_CATS.find(c=>c.id===x.cat))}</b><button class="close" data-act="close-sub">×</button></div>
  <div class="sheet-body art-body"><h1>${L(x.title)}</h1><p class="lead">${L(x.lead)}</p>
  ${x.article.map(s=>`<h3>${L(s.h)}</h3><p>${L(s.p)}</p>`).join('')}
  ${x.pr?`<p class="prnote">${t('tips.prnote')}</p>`:''}</div></div>`;
 $('#subSheet').classList.add('open')}
function openEditor(){editor={clips:[],caption:'',tag:'view'};renderEditor();$('#subSheet').classList.add('open')}
function renderEditor(){
 $('#subSheet').innerHTML=`<div class="sheet-card">
  <div class="sheet-bar"><b>🎬 ${t('ed.title')}</b><button class="close" data-act="close-sub">×</button></div>
  <div class="sheet-body">
   <label class="f-label">${t('ed.clips')}</label>
   <div class="album">${activeTrip.album.map((a,i)=>`<button class="al-tile ${a.grad} ${editor.clips.includes(i)?'sel':''}" data-act="ed-clip" data-val="${i}"><span>${a.emoji}</span><small>${L(a.label)}</small>${editor.clips.includes(i)?'<em class="ck">✓</em>':''}</button>`).join('')}</div>
   <label class="f-label">${t('ed.caption')}</label><textarea class="f-input" id="edCaption" rows="2" placeholder="${t('ed.caption.ph')}">${esc(editor.caption)}</textarea>
   <label class="f-label">${t('ed.tag')}</label><div class="chips">${USE_TAGS.map(u=>`<button class="chip ${editor.tag===u.id?'active':''}" data-act="ed-tag" data-val="${u.id}">${L(u)}</button>`).join('')}</div>
   <p class="note">🔒 ${t('ed.note')}</p></div>
  <div class="sheet-foot"><button class="primary-btn" data-act="ed-share"><span>${t('ed.share')}</span><b>→</b></button></div></div>`}

/* ================= イベント ================= */
document.addEventListener('input',(e)=>{const fld=e.target.dataset.field;
 if(fld){state.form[fld]=e.target.value;
  if(fld==='from'){const to=$('[data-field="to"]');if(to){to.min=e.target.value;if(state.form.to&&state.form.to<e.target.value){state.form.to=e.target.value;to.value=e.target.value}}}
  if(fld==='to'&&state.form.from&&e.target.value&&e.target.value<state.form.from){state.form.to=state.form.from;e.target.value=state.form.from}}
 if(e.target.id==='disSearch'){state.disQuery=e.target.value;const g=$('#disGrid')||$('#shorts');if(g){const tmp=document.createElement('div');tmp.innerHTML=screenDiscover();const ng=tmp.querySelector('#disGrid')||tmp.querySelector('#shorts');if(ng)g.innerHTML=ng.innerHTML}}
 if(e.target.id==='edCaption')editor.caption=e.target.value});
document.addEventListener('change',(e)=>{const fld=e.target.dataset.field;if(fld)state.form[fld]=e.target.value});

document.addEventListener('click',(e)=>{const el=e.target.closest('[data-act],.tab');if(!el)return;
 if(el.classList.contains('tab')&&el.dataset.screen){state.screen=el.dataset.screen;render();window.scrollTo({top:0});return}
 const act=el.dataset.act,val=el.dataset.val;
 switch(act){
  case 'chip':{const g=el.dataset.group;state.form[g]=state.form[g]===val?'':val;refreshSearch();break}
  case 'toggle-tbd':state.form.tbd=!state.form.tbd;if(state.form.tbd){state.form.from='';state.form.to=''}refreshSearch();break;
  case 'toggle-round':state.form.roundtrip=!state.form.roundtrip;refreshSearch();break;
  case 'origin-quick':{state.form.origin={home:state.lang==='ja'?'自宅（東京）':'Home (Tokyo)',airport:state.lang==='ja'?'羽田空港':'Haneda Airport',local:state.lang==='ja'?'現地集合':'Meet locally'}[val];refreshSearch();break}
  case 'people':state.form.people=Math.min(9,Math.max(1,state.form.people+ +val));refreshSearch();break;
  case 'open-search':case undefined:break;
  case 'search':$('#searchSheet').classList.remove('open');state.screen='plan';searchPlans();setTimeout(()=>{const r=$('#results');if(r)r.scrollIntoView({behavior:'smooth'})},60);break;
  case 'close-search':$('#searchSheet').classList.remove('open');break;
  case 'open-plan':openPlanSheet(+val);break;
  case 'sheet-tab':sheet.tab=val;renderSheet();break;
  case 'sheet-day':sheet.day=+val;renderSheet();break;
  case 'close-sheet':$('#planSheet').classList.remove('open');break;
  case 'add-detour':{const r=detourRecs(sheet.cand.dest,sheet.days)[+val];const day=sheet.days[sheet.day];
   const pos=Math.min(2,day.length);day.splice(pos,0,mkEv({kind:'spot',icon:TYPE_META[r.s.type].icon,time:'＋',title:{ja:r.s.ja,en:r.s.en},type:r.s.type,dur:r.s.dur,detour:true}));
   toast(t('toast.detour',L(r.s)));renderSheet();break}
  case 'add-detour-nav':{const d=destById(activeTrip.destId)||makeGenericDest('');const r=detourRecs(d,activeTrip.days)[+val];const day=activeTrip.days[nav.day];
   day.splice(Math.min(2,day.length),0,mkEv({kind:'spot',icon:TYPE_META[r.s.type].icon,time:'＋',title:{ja:r.s.ja,en:r.s.en},type:r.s.type,dur:r.s.dur,detour:true}));
   toast(t('toast.detour',L(r.s)));renderNav();break}
  case 'swap':{const ev=EVMAP[+el.dataset.uid];if(ev&&ev.alts){const i=+el.dataset.i;const old={ja:ev.title.ja,en:ev.title.en};ev.title=ev.alts[i];ev.alts[i]=old;toast(t('toast.swap'));
   if($('#planSheet').classList.contains('open'))renderSheet();else render()}break}
  case 'start-trip':{const c=sheet.cand;const d=c.dest;
   activeTrip={destId:d.generic?'kyoto':d.id,title:{ja:`${d.ja}旅行`,en:`${d.en} Trip`},dates:state.form.from&&state.form.to?`${state.form.from} – ${state.form.to}`:(state.lang==='ja'?'日程未定':'Dates TBD'),
    members:['Koki','Yui'],days:sheet.days,extra:[],invite:`tabi.app/t/${(d.id||'trip').slice(0,3).toUpperCase()}-${1000+Math.floor(Math.random()*9000)}`,album:[],diary:[],expenses:[]};
   if(d.generic)activeTrip.destId='generic',activeTrip._generic=d;shioriDay=0;
   $('#planSheet').classList.remove('open');toast(t('toast.start',L(d)));state.screen='shiori';state.shioriTab='itin';render();window.scrollTo({top:0});break}
  case 'goto':state.screen=val;render();window.scrollTo({top:0});break;
  case 'dis-tag':state.disTag=val;render();break;
  case 'dis-mode':state.disMode=val;render();break;
  case 'like':{const s=disState[+val];s.liked=!s.liked;toast(t(s.liked?'toast.liked':'toast.unliked'));render();break}
  case 'bm':{const s=disState[+val];s.bmed=!s.bmed;toast(t(s.bmed?'toast.bm':'toast.unbm'));render();break}
  case 'share-short':toast(t('toast.share'));break;
  case 'add-spot':{const d=DISCOVER.find(x=>x.id===+val);activeTrip.extra.push(d);toast(t('toast.addplan',L(d.title)));break}
  case 'open-editor':openEditor();break;
  case 'close-sub':$('#subSheet').classList.remove('open');break;
  case 'ed-clip':{const i=+val;const ix=editor.clips.indexOf(i);ix>=0?editor.clips.splice(ix,1):editor.clips.push(i);renderEditor();break}
  case 'ed-tag':editor.tag=val;renderEditor();break;
  case 'ed-share':{const a=activeTrip.album[editor.clips[0]]||{grad:'g-kyoto',emoji:'📷'};
   DISCOVER.unshift({id:Date.now(),mine:true,title:{ja:editor.caption||'わたしの旅ショート',en:editor.caption||'My travel short'},dest:activeTrip.destId==='generic'?'kyoto':activeTrip.destId,type:'scenery',tag:editor.tag,likes:0,bm:0,views:'0',grad:a.grad,emoji:a.emoji,author:'@you',cap:{ja:'いま公開しました',en:'Just published'}});
   disState[DISCOVER[0].id]={liked:false,bmed:false};$('#subSheet').classList.remove('open');state.screen='discover';state.disMode='shorts';toast(t('toast.post'));render();break}
  case 'open-article':openArticle(val);break;
  case 'sh-tab':state.shioriTab=val;render();break;
  case 'sh-day':shioriDay=+val;render();break;
  case 'open-nav':openNav(+val);break;
  case 'close-nav':$('#navSheet').classList.remove('open');break;
  case 'nav-next':nav.step=Math.min(nav.step+1,navSteps(activeTrip.days[nav.day]).length-1);renderNav();break;
  case 'nav-restart':nav.step=0;renderNav();break;
  case 'copy-invite':{if(navigator.clipboard)navigator.clipboard.writeText('https://'+activeTrip.invite).catch(()=>{});toast(t('toast.copied'));break}
  case 'paypay':state.paypayOn=!state.paypayOn;toast(t(state.paypayOn?'toast.paypay.on':'toast.paypay.off'));render();break;
  case 'add-exp':{activeTrip.expenses.push({name:{ja:'お土産',en:'Souvenirs'},payer:activeTrip.members[activeTrip.expenses.length%activeTrip.members.length],amount:2400,src:'manual'});toast(t('toast.exp'));render();break}
  case 'settle':toast(t('toast.settle'));break;
  case 'add-photo':{activeTrip.album.push({grad:'g-food',emoji:'📷',label:{ja:`DAY${(activeTrip.album.length%3)+1} 追加`,en:`Day ${(activeTrip.album.length%3)+1} new`}});toast(t('toast.photo'));render();break}
  case 'add-diary':{const v=($('#diaryInput')||{}).value;if(v&&v.trim()){activeTrip.diary.push({d:shioriDay+1,time:new Date().toTimeString().slice(0,5),who:'Koki',text:{ja:v.trim(),en:v.trim()}});toast(t('toast.diary'));render()}break}
  case 'tip-cat':tipCat=val;render();break;
 }});
function refreshSearch(){if($('#searchSheet').classList.contains('open')){$('#searchSheet').innerHTML=searchFormHTML()}else render()}
$('#langBtn').addEventListener('click',()=>{state.lang=state.lang==='ja'?'en':'ja';render();
 if($('#searchSheet').classList.contains('open'))$('#searchSheet').innerHTML=searchFormHTML();
 if($('#planSheet').classList.contains('open'))renderSheet();
 if($('#navSheet').classList.contains('open'))renderNav()});
$('#fabBtn').addEventListener('click',()=>{$('#searchSheet').innerHTML=searchFormHTML();$('#searchSheet').classList.add('open')});
render();
