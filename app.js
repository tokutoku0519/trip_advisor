/* ================= i18n ================= */
const T={
ja:{
 'tab.plan':'プラン','tab.discover':'見つける','tab.shiori':'しおり','tab.tips':'お役立ち',
 'plan.mytrips':'あなたの旅','plan.active':'進行中','plan.search.title':'新しい旅を探す','plan.search.sub':'決まっているところだけでOK。あとはAIが埋めます。',
 'f.dest':'行き先（決まっていれば）','f.dest.ph':'例：京都、台北。空欄でもOK','f.overseas':'🌏 海外もOK','f.vague':'ふんわり希望','f.vague.ph':'例：温泉行きたいね〜、1泊2日くらいで。夜景がきれいなところ',
 'f.dates':'日程','f.dates.tbd':'日程は未定','f.type':'旅のタイプ','f.people':'人数','f.budget':'予算（1人あたり）','f.license':'運転','f.license.yes':'🚗 運転できる','f.license.no':'🚃 電車・バス派',
 'f.must':'絶対に行きたい場所','f.must.ph':'例：清水寺、〇〇カフェ','f.search':'プランを探す',
 'r.title':'あなたへの提案','r.nights':(n)=>n===0?'日帰り':`${n}泊${n+1}日`,'r.detail':'詳しく見る','r.match':'マッチ',
 's.itin':'旅程','s.route':'ルート','s.book':'予約','s.start':'この旅をはじめる','s.booknote':'人数・泊数から自動計算。まとめて予約できます。','s.total':'合計',
 's.walk':'徒歩','s.bus':'バス','s.train':'電車','s.min':'分','s.added':'追加スポット',
 'd.search.ph':'場所で検索（例：京都、ソウル）','d.all':'すべて',
 'sh.closed':'🔒 クローズ共有','sh.closed.note':'招待した仲間だけが見られます','sh.invite':'招待リンク','sh.copy':'コピー','sh.members':'メンバー',
 'sh.itin':'旅程','sh.album':'アルバム','sh.split':'割り勘','sh.addphoto':'＋ 写真を追加','sh.paypay':'PayPay連携','sh.paypay.note':'コード決済を自動で取り込み','sh.auto':'PayPayから自動取込',
 'sh.total':'合計','sh.per':'1人あたり','sh.settle':'精算','sh.settlebtn':'PayPayで精算リクエスト','sh.addexp':'＋ 支出を追加','sh.noexp':'支出はまだありません。PayPayで払うと自動で追加されます。',
 'tips.title':'旅のお役立ち','tips.pr':'PR',
 'toast.copied':'招待リンクをコピーしました','toast.liked':'いいねしました','toast.unliked':'いいねを外しました','toast.bm':'ブックマークしました','toast.unbm':'ブックマークを外しました',
 'toast.addplan':(n)=>`「${n}」をプランに追加しました`,'toast.start':(n)=>`${n}の旅をはじめました。しおりを作成しました`,'toast.settle':'Yui に ¥4,040 の精算リクエストを送りました（デモ）','toast.paypay.on':'PayPayの決済取込をオンにしました','toast.paypay.off':'PayPayの決済取込をオフにしました','toast.exp':'支出を追加しました','toast.photo':'写真を追加しました',
 'reason.kw':(k)=>`「${k}」の希望にマッチ`,'reason.type':(t)=>`${t}の定番`,'reason.dest':'指定の行き先','reason.near':'条件にマッチ',
 'people':(n)=>`${n}人`,'nights.label':(n)=>n===0?'日帰り':`${n}泊${n+1}日`,
},
en:{
 'tab.plan':'Plans','tab.discover':'Discover','tab.shiori':'Journal','tab.tips':'Tips',
 'plan.mytrips':'Your trips','plan.active':'Active','plan.search.title':'Find a new trip','plan.search.sub':'Fill in only what you know. AI fills the rest.',
 'f.dest':'Destination (if decided)','f.dest.ph':'e.g. Kyoto, Taipei. Leave blank if unsure','f.overseas':'🌏 Include overseas','f.vague':'Rough wishes','f.vague.ph':'e.g. Want a hot spring, about 2 days, nice night views',
 'f.dates':'Dates','f.dates.tbd':'Dates undecided','f.type':'Trip type','f.people':'Travelers','f.budget':'Budget (per person)','f.license':'Driving','f.license.yes':'🚗 Can drive','f.license.no':'🚃 Trains & buses',
 'f.must':'Must-visit places','f.must.ph':'e.g. Kiyomizu-dera','f.search':'Find plans',
 'r.title':'Suggested for you','r.nights':(n)=>n===0?'Day trip':`${n+1} days`,'r.detail':'View details','r.match':'match',
 's.itin':'Itinerary','s.route':'Route','s.book':'Booking','s.start':'Start this trip','s.booknote':'Calculated from travelers & nights. Book everything at once.','s.total':'Total',
 's.walk':'Walk','s.bus':'Bus','s.train':'Train','s.min':'min','s.added':'Added spots',
 'd.search.ph':'Search by place (e.g. Kyoto, Seoul)','d.all':'All',
 'sh.closed':'🔒 Private share','sh.closed.note':'Only invited members can see this','sh.invite':'Invite link','sh.copy':'Copy','sh.members':'Members',
 'sh.itin':'Itinerary','sh.album':'Album','sh.split':'Split bills','sh.addphoto':'+ Add photos','sh.paypay':'PayPay link','sh.paypay.note':'Auto-import code payments','sh.auto':'Auto-imported from PayPay',
 'sh.total':'Total','sh.per':'Per person','sh.settle':'Settlement','sh.settlebtn':'Request via PayPay','sh.addexp':'+ Add expense','sh.noexp':'No expenses yet. Payments via PayPay are added automatically.',
 'tips.title':'Travel tips','tips.pr':'PR',
 'toast.copied':'Invite link copied','toast.liked':'Liked','toast.unliked':'Like removed','toast.bm':'Bookmarked','toast.unbm':'Bookmark removed',
 'toast.addplan':(n)=>`Added "${n}" to your plan`,'toast.start':(n)=>`Started your ${n} trip. Journal created`,'toast.settle':'Sent a ¥4,040 request to Yui (demo)','toast.paypay.on':'PayPay auto-import ON','toast.paypay.off':'PayPay auto-import OFF','toast.exp':'Expense added','toast.photo':'Photos added',
 'reason.kw':(k)=>`Matches "${k}"`,'reason.type':(t)=>`Popular for ${t}`,'reason.dest':'Your destination','reason.near':'Matches your wishes',
 'people':(n)=>`${n} people`,'nights.label':(n)=>n===0?'Day trip':`${n+1} days`,
}};
const state={lang:'ja',screen:'plan',form:{dest:'',vague:'',from:'',to:'',tbd:false,type:'',people:2,budget:'',license:'',overseas:false,must:''},results:null,disType:'all',disQuery:'',shioriTab:'itin',paypayOn:true};
const t=(k,...a)=>{const v=T[state.lang][k];return typeof v==='function'?v(...a):v};
const L=(o)=>o[state.lang]||o.ja;
const yen=(n)=>'¥'+n.toLocaleString('ja-JP');
const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
const esc=(s)=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ================= データ ================= */
const TYPE_META={activity:{ja:'アクティビティ',en:'Activity',icon:'🛶'},scenery:{ja:'景色',en:'Scenery',icon:'🏔'},food:{ja:'食事',en:'Food',icon:'🍜'},cafe:{ja:'カフェ',en:'Café',icon:'☕'},hotel:{ja:'宿',en:'Stay',icon:'🏨'}};
const TRIP_TYPES=[{id:'grad',ja:'🎓 卒業旅行',en:'🎓 Grad trip'},{id:'honeymoon',ja:'💒 ハネムーン',en:'💒 Honeymoon'},{id:'girls',ja:'👭 女子旅',en:'👭 Girls trip'},{id:'doki',ja:'🏢 同期旅行',en:'🏢 Work friends'},{id:'propose',ja:'💍 プロポーズ',en:'💍 Proposal'},{id:'date',ja:'💑 デート',en:'💑 Date'},{id:'solo',ja:'🚶 ひとり旅',en:'🚶 Solo'},{id:'family',ja:'👨‍👩‍👧 家族旅行',en:'👨‍👩‍👧 Family'}];
const AFFINITY={honeymoon:['hawaii','paris','okinawa'],propose:['paris','singapore','hawaii','hakone'],grad:['seoul','taipei','okinawa'],girls:['seoul','taipei','kanazawa'],doki:['okinawa','taipei','hakone'],date:['kamakura','hakone','kyoto'],solo:['kyoto','kanazawa','taipei'],family:['okinawa','hakone','singapore']};
const BUDGETS=[{id:'b1',label:'〜¥20,000',max:20000},{id:'b2',label:'¥20,000〜50,000',max:50000},{id:'b3',label:'¥50,000〜100,000',max:100000},{id:'b4',label:'¥100,000〜',max:9e9}];
const KW=[{kw:['温泉','onsen','hot spring','spa'],feat:'onsen',ja:'温泉',en:'hot springs'},{kw:['海','ビーチ','beach'],feat:'beach',ja:'海',en:'the beach'},{kw:['夜景','night view','night'],feat:'night',ja:'夜景',en:'night views'},{kw:['グルメ','食べ','food','eat'],feat:'food',ja:'グルメ',en:'food'},{kw:['絶景','scenery','view'],feat:'view',ja:'絶景',en:'scenic views'},{kw:['カフェ','cafe','coffee'],feat:'cafe',ja:'カフェ',en:'cafés'},{kw:['文化','寺','神社','culture','temple'],feat:'culture',ja:'文化',en:'culture'}];
const FEAT_LABEL={onsen:{ja:'♨ 温泉',en:'♨ Onsen'},beach:{ja:'🏖 海',en:'🏖 Beach'},night:{ja:'🌃 夜景',en:'🌃 Night view'},food:{ja:'🍜 グルメ',en:'🍜 Food'},view:{ja:'🏔 絶景',en:'🏔 Scenery'},cafe:{ja:'☕ カフェ',en:'☕ Café'},culture:{ja:'⛩ 文化',en:'⛩ Culture'}};

const DESTS=[
{id:'kyoto',ja:'京都',en:'Kyoto',country:'jp',grad:'g-kyoto',emoji:'⛩',feat:['culture','view','food','cafe'],needCar:false,base:28000,
 transport:{ja:'新幹線（東京⇄京都 往復）',en:'Shinkansen (Tokyo⇄Kyoto rt)',price:26640},hotel:{ja:'THE GATE HOTEL 京都高瀬川',en:'THE GATE HOTEL Kyoto',price:24000},act:{ja:'茶道体験（和菓子付き）',en:'Tea ceremony w/ sweets',price:4500},
 spots:[{ja:'清水寺',en:'Kiyomizu-dera',type:'scenery',dur:90},{ja:'二年坂・三年坂さんぽ',en:'Ninenzaka walk',type:'activity',dur:60},{ja:'祇園ランチ',en:'Gion lunch',type:'food',dur:60},{ja:'％ Arabica 嵐山',en:'% Arabica Arashiyama',type:'cafe',dur:40},{ja:'伏見稲荷大社',en:'Fushimi Inari',type:'scenery',dur:90},{ja:'錦市場 食べ歩き',en:'Nishiki Market bites',type:'food',dur:60},{ja:'嵐山 竹林の小径',en:'Arashiyama bamboo grove',type:'scenery',dur:60},{ja:'鴨川 夕方さんぽ',en:'Kamo River sunset walk',type:'activity',dur:40},{ja:'先斗町ディナー',en:'Pontocho dinner',type:'food',dur:90}]},
{id:'hakone',ja:'箱根',en:'Hakone',country:'jp',grad:'g-onsen',emoji:'♨',feat:['onsen','view'],needCar:false,base:30000,
 transport:{ja:'ロマンスカー（往復）',en:'Romancecar (rt)',price:4800},hotel:{ja:'客室露天風呂の宿',en:'Ryokan w/ private onsen',price:32000},act:{ja:'海賊船＋ロープウェイ',en:'Pirate ship + ropeway',price:6000},
 spots:[{ja:'大涌谷',en:'Owakudani',type:'scenery',dur:60},{ja:'芦ノ湖 海賊船',en:'Lake Ashi cruise',type:'activity',dur:60},{ja:'箱根神社',en:'Hakone Shrine',type:'scenery',dur:45},{ja:'彫刻の森美術館',en:'Open-Air Museum',type:'activity',dur:90},{ja:'温泉街 食べ歩き',en:'Onsen town bites',type:'food',dur:60},{ja:'日帰り湯でひと休み',en:'Day-use onsen',type:'activity',dur:90},{ja:'湖畔カフェ',en:'Lakeside café',type:'cafe',dur:40},{ja:'旅館の会席ディナー',en:'Kaiseki dinner',type:'food',dur:90},{ja:'朝風呂と朝食',en:'Morning bath & breakfast',type:'activity',dur:60}]},
{id:'kusatsu',ja:'草津温泉',en:'Kusatsu Onsen',country:'jp',grad:'g-onsen',emoji:'♨',feat:['onsen'],needCar:true,base:26000,
 transport:{ja:'特急＋バス（往復）',en:'Express + bus (rt)',price:6800},hotel:{ja:'湯畑前の旅館',en:'Ryokan by Yubatake',price:18000},act:{ja:'湯もみショー',en:'Yumomi show',price:700},
 spots:[{ja:'湯畑',en:'Yubatake',type:'scenery',dur:45},{ja:'熱乃湯 湯もみショー',en:'Yumomi show',type:'activity',dur:45},{ja:'温泉まんじゅう食べ歩き',en:'Onsen manju bites',type:'food',dur:40},{ja:'西の河原公園',en:'Sainokawara Park',type:'scenery',dur:60},{ja:'裏草津カフェ',en:'Ura-Kusatsu café',type:'cafe',dur:40},{ja:'夜の湯畑ライトアップ',en:'Yubatake night lights',type:'scenery',dur:30},{ja:'大滝乃湯',en:'Otakinoyu bath',type:'activity',dur:90},{ja:'旅館の朝ごはん',en:'Ryokan breakfast',type:'food',dur:45},{ja:'お土産さんぽ',en:'Souvenir stroll',type:'activity',dur:40}]},
{id:'okinawa',ja:'沖縄',en:'Okinawa',country:'jp',grad:'g-beach',emoji:'🏖',feat:['beach','view'],needCar:true,base:52000,
 transport:{ja:'飛行機（羽田⇄那覇 往復）',en:'Flight (HND⇄OKA rt)',price:32000},hotel:{ja:'ビーチリゾートホテル',en:'Beach resort hotel',price:26000},act:{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling',price:5500},
 spots:[{ja:'美ら海水族館',en:'Churaumi Aquarium',type:'activity',dur:120},{ja:'古宇利大橋ドライブ',en:'Kouri Bridge drive',type:'scenery',dur:45},{ja:'沖縄そばランチ',en:'Okinawa soba lunch',type:'food',dur:50},{ja:'瀬底ビーチ',en:'Sesoko Beach',type:'activity',dur:120},{ja:'万座毛サンセット',en:'Manzamo sunset',type:'scenery',dur:40},{ja:'国際通り',en:'Kokusai Street',type:'activity',dur:90},{ja:'海カフェ',en:'Ocean café',type:'cafe',dur:50},{ja:'ステーキディナー',en:'Steak dinner',type:'food',dur:80},{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling',type:'activity',dur:120}]},
{id:'kanazawa',ja:'金沢',en:'Kanazawa',country:'jp',grad:'g-alley',emoji:'🍵',feat:['culture','food','cafe'],needCar:false,base:30000,
 transport:{ja:'北陸新幹線（往復）',en:'Hokuriku Shinkansen (rt)',price:28000},hotel:{ja:'香林坊のホテル',en:'Korinbo hotel',price:15000},act:{ja:'金箔貼り体験',en:'Gold leaf workshop',price:3000},
 spots:[{ja:'兼六園',en:'Kenrokuen Garden',type:'scenery',dur:90},{ja:'ひがし茶屋街',en:'Higashi Chaya district',type:'activity',dur:60},{ja:'近江町市場 海鮮丼',en:'Omicho seafood bowl',type:'food',dur:60},{ja:'金箔ソフト',en:'Gold leaf ice cream',type:'cafe',dur:30},{ja:'21世紀美術館',en:'21st Century Museum',type:'activity',dur:90},{ja:'主計町 夜さんぽ',en:'Kazuemachi night walk',type:'scenery',dur:40},{ja:'おでん横丁',en:'Oden alley dinner',type:'food',dur:80},{ja:'長町武家屋敷跡',en:'Nagamachi samurai district',type:'scenery',dur:60},{ja:'町家カフェ',en:'Machiya café',type:'cafe',dur:40}]},
{id:'kamakura',ja:'鎌倉',en:'Kamakura',country:'jp',grad:'g-view',emoji:'🌊',feat:['view','cafe','beach'],needCar:false,base:12000,
 transport:{ja:'電車（往復）',en:'Train (rt)',price:2000},hotel:{ja:'由比ヶ浜のゲストハウス',en:'Yuigahama guesthouse',price:9000},act:{ja:'座禅体験',en:'Zazen meditation',price:2000},
 spots:[{ja:'鶴岡八幡宮',en:'Tsurugaoka Hachimangu',type:'scenery',dur:60},{ja:'小町通り 食べ歩き',en:'Komachi Street bites',type:'food',dur:60},{ja:'鎌倉大仏',en:'Great Buddha',type:'scenery',dur:45},{ja:'江ノ電で長谷へ',en:'Enoden ride to Hase',type:'activity',dur:30},{ja:'由比ヶ浜サンセット',en:'Yuigahama sunset',type:'scenery',dur:40},{ja:'海辺カフェ',en:'Seaside café',type:'cafe',dur:50},{ja:'報国寺 竹の庭',en:'Hokokuji bamboo garden',type:'scenery',dur:45},{ja:'しらす丼ランチ',en:'Shirasu bowl lunch',type:'food',dur:50},{ja:'御成通りさんぽ',en:'Onari Street stroll',type:'activity',dur:40}]},
{id:'taipei',ja:'台北',en:'Taipei',country:'tw',grad:'g-night',emoji:'🏮',feat:['food','night','cafe'],needCar:false,base:58000,
 transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:42000},hotel:{ja:'中山エリアのホテル',en:'Zhongshan hotel',price:12000},act:{ja:'九份・十分ツアー',en:'Jiufen & Shifen tour',price:6500},
 spots:[{ja:'九份 提灯の街',en:'Jiufen lantern streets',type:'scenery',dur:120},{ja:'小籠包ランチ',en:'Xiaolongbao lunch',type:'food',dur:60},{ja:'士林夜市',en:'Shilin Night Market',type:'food',dur:90},{ja:'永康街カフェ',en:'Yongkang St. café',type:'cafe',dur:50},{ja:'中正紀念堂',en:'CKS Memorial Hall',type:'scenery',dur:60},{ja:'象山から夜景',en:'Elephant Mtn night view',type:'scenery',dur:80},{ja:'タピオカ食べ比べ',en:'Bubble tea tasting',type:'cafe',dur:40},{ja:'迪化街さんぽ',en:'Dihua Street stroll',type:'activity',dur:60},{ja:'マンゴーかき氷',en:'Mango shaved ice',type:'food',dur:40}]},
{id:'seoul',ja:'ソウル',en:'Seoul',country:'kr',grad:'g-city',emoji:'🌆',feat:['food','cafe','night'],needCar:false,base:55000,
 transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:38000},hotel:{ja:'明洞のホテル',en:'Myeongdong hotel',price:14000},act:{ja:'韓服レンタル',en:'Hanbok rental',price:3500},
 spots:[{ja:'景福宮',en:'Gyeongbokgung Palace',type:'scenery',dur:90},{ja:'益善洞 韓屋カフェ',en:'Ikseondong hanok café',type:'cafe',dur:50},{ja:'サムギョプサル',en:'Samgyeopsal dinner',type:'food',dur:80},{ja:'明洞ショッピング',en:'Myeongdong shopping',type:'activity',dur:90},{ja:'Nソウルタワー夜景',en:'N Seoul Tower night view',type:'scenery',dur:70},{ja:'広蔵市場 食べ歩き',en:'Gwangjang Market bites',type:'food',dur:60},{ja:'漢江ピクニック',en:'Han River picnic',type:'activity',dur:80},{ja:'聖水洞カフェ巡り',en:'Seongsu café hop',type:'cafe',dur:60},{ja:'東大門ナイトショッピング',en:'Dongdaemun night shopping',type:'activity',dur:60}]},
{id:'singapore',ja:'シンガポール',en:'Singapore',country:'sg',grad:'g-marina',emoji:'🌴',feat:['night','view'],needCar:false,base:98000,
 transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:65000},hotel:{ja:'マリーナ地区のホテル',en:'Marina district hotel',price:26000},act:{ja:'ナイトサファリ',en:'Night Safari',price:6000},
 spots:[{ja:'マーライオン公園',en:'Merlion Park',type:'scenery',dur:40},{ja:'ガーデンズ・バイ・ザ・ベイ',en:'Gardens by the Bay',type:'scenery',dur:120},{ja:'ホーカーズで昼食',en:'Hawker centre lunch',type:'food',dur:60},{ja:'マリーナベイ夜景',en:'Marina Bay night view',type:'scenery',dur:60},{ja:'チキンライス',en:'Hainanese chicken rice',type:'food',dur:50},{ja:'セントーサ島',en:'Sentosa Island',type:'activity',dur:180},{ja:'アラブストリート',en:'Arab Street',type:'activity',dur:60},{ja:'カヤトーストの朝食',en:'Kaya toast breakfast',type:'cafe',dur:40},{ja:'ナイトサファリ',en:'Night Safari',type:'activity',dur:150}]},
{id:'hawaii',ja:'ハワイ',en:'Hawaii',country:'us',grad:'g-beach',emoji:'🌺',feat:['beach','view'],needCar:false,base:220000,
 transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:150000},hotel:{ja:'ワイキキのホテル',en:'Waikiki hotel',price:45000},act:{ja:'ダイヤモンドヘッド登山',en:'Diamond Head hike',price:2000},
 spots:[{ja:'ワイキキビーチ',en:'Waikiki Beach',type:'activity',dur:150},{ja:'ダイヤモンドヘッド朝登山',en:'Diamond Head sunrise hike',type:'activity',dur:120},{ja:'ガーリックシュリンプ',en:'Garlic shrimp lunch',type:'food',dur:50},{ja:'カイルアタウン',en:'Kailua town',type:'activity',dur:120},{ja:'サンセットクルーズ',en:'Sunset cruise',type:'scenery',dur:120},{ja:'アサイーボウルの朝食',en:'Açaí bowl breakfast',type:'cafe',dur:40},{ja:'アラモアナSC',en:'Ala Moana Center',type:'activity',dur:120},{ja:'タンタラスの丘 夜景',en:'Tantalus night view',type:'scenery',dur:60},{ja:'ポケ丼ランチ',en:'Poke bowl lunch',type:'food',dur:50}]},
{id:'paris',ja:'パリ',en:'Paris',country:'fr',grad:'g-paris',emoji:'🗼',feat:['culture','night','cafe'],needCar:false,base:260000,
 transport:{ja:'飛行機（往復）',en:'Flight (rt)',price:180000},hotel:{ja:'オペラ地区のホテル',en:'Opéra district hotel',price:38000},act:{ja:'ルーヴル優先入場チケット',en:'Louvre priority ticket',price:3000},
 spots:[{ja:'エッフェル塔',en:'Eiffel Tower',type:'scenery',dur:90},{ja:'ルーヴル美術館',en:'Louvre Museum',type:'activity',dur:180},{ja:'マレ地区のカフェ',en:'Le Marais café',type:'cafe',dur:60},{ja:'セーヌ川クルーズ',en:'Seine river cruise',type:'scenery',dur:70},{ja:'モンマルトルさんぽ',en:'Montmartre stroll',type:'activity',dur:90},{ja:'ビストロディナー',en:'Bistro dinner',type:'food',dur:90},{ja:'夜のエッフェル塔',en:'Eiffel Tower at night',type:'scenery',dur:40},{ja:'パン屋巡りの朝',en:'Boulangerie morning',type:'food',dur:50},{ja:'オルセー美術館',en:'Musée d\'Orsay',type:'activity',dur:120}]},
];
const destById=(id)=>DESTS.find(d=>d.id===id);

const DISCOVER=[
{id:1,title:{ja:'夕暮れの二年坂',en:'Ninenzaka at dusk'},dest:'kyoto',type:'scenery',likes:1243,bm:210,grad:'g-kyoto',emoji:'⛩',video:true},
{id:2,title:{ja:'九份、提灯がともる時間',en:'Jiufen lantern hour'},dest:'taipei',type:'scenery',likes:2871,bm:642,grad:'g-night',emoji:'🏮',video:true},
{id:3,title:{ja:'青の洞窟シュノーケル',en:'Blue Cave snorkeling'},dest:'okinawa',type:'activity',likes:1698,bm:388,grad:'g-beach',emoji:'🤿',video:true},
{id:4,title:{ja:'益善洞の韓屋カフェ',en:'Ikseondong hanok café'},dest:'seoul',type:'cafe',likes:980,bm:301,grad:'g-city',emoji:'☕'},
{id:5,title:{ja:'錦市場 食べ歩き5選',en:'5 bites at Nishiki Market'},dest:'kyoto',type:'food',likes:1512,bm:455,grad:'g-food',emoji:'🍡',video:true},
{id:6,title:{ja:'客室露天から芦ノ湖',en:'Private onsen, Lake Ashi'},dest:'hakone',type:'hotel',likes:2034,bm:812,grad:'g-onsen',emoji:'♨'},
{id:7,title:{ja:'ガーデンズの夜ショー',en:'Gardens light show'},dest:'singapore',type:'scenery',likes:3120,bm:701,grad:'g-marina',emoji:'🌴',video:true},
{id:8,title:{ja:'由比ヶ浜サンセットSUP',en:'Yuigahama sunset SUP'},dest:'kamakura',type:'activity',likes:764,bm:159,grad:'g-view',emoji:'🏄',video:true},
{id:9,title:{ja:'広蔵市場の屋台グルメ',en:'Gwangjang street food'},dest:'seoul',type:'food',likes:1877,bm:392,grad:'g-food',emoji:'🥟',video:true},
{id:10,title:{ja:'兼六園、朝の静けさ',en:'Kenrokuen, quiet morning'},dest:'kanazawa',type:'scenery',likes:689,bm:143,grad:'g-alley',emoji:'🍵'},
{id:11,title:{ja:'ワイキキ朝サーフィン',en:'Waikiki morning surf'},dest:'hawaii',type:'activity',likes:2456,bm:534,grad:'g-beach',emoji:'🌺',video:true},
{id:12,title:{ja:'マレ地区のパン屋巡り',en:'Le Marais bakery hop'},dest:'paris',type:'food',likes:1322,bm:377,grad:'g-paris',emoji:'🥐'},
];
const disState={};DISCOVER.forEach(d=>disState[d.id]={liked:false,bmed:false});

const TIPS=[
{id:'pack',cat:'prep',icon:'🎒',title:{ja:'パッキングの基本テク',en:'Packing basics'},body:{
 ja:['衣類は畳まず「巻く」とシワになりにくく容量も2割減','ポーチは「機内で使う」「宿で使う」「毎日使う」の3分割','液体は100均のミニボトルに詰め替え。国際線は100ml以下×透明袋','帰りのお土産用に、バッグの3割は空けておく'],
 en:['Roll clothes instead of folding — fewer wrinkles, ~20% less volume','Split pouches by use: in-flight / at hotel / daily','Decant liquids into mini bottles. Int\'l flights: under 100ml in a clear bag','Keep 30% of your bag empty for souvenirs']}},
{id:'items',cat:'items',icon:'🧳',pr:true,title:{ja:'旅がラクになる持ち物5選',en:'5 items that make travel easier'},body:{
 ja:['圧縮バッグ：衣類が半分のサイズに','モバイルバッテリー（10,000mAh）：ナビ・翻訳・決済の命綱','速乾タオル：温泉・ビーチ・急な雨に','ネックピロー＆アイマスク：機内・バス移動の質が変わる','スマホストラップ：撮影中の落下・置き忘れ防止'],
 en:['Compression bags: halve your clothes volume','Power bank (10,000mAh): lifeline for maps, translation, payments','Quick-dry towel: onsen, beach, sudden rain','Neck pillow & eye mask: transforms flights and bus rides','Phone strap: prevents drops and leave-behinds']}},
{id:'safety',cat:'safety',icon:'⚠️',title:{ja:'渡航前の安全チェック',en:'Safety check before you go'},body:{
 ja:['外務省「海外安全ホームページ」で渡航先の危険レベル（1〜4）を確認','レベル2以上は旅行の再検討を。レベル3・4は渡航中止・退避','「たびレジ」に登録すると現地の安全情報がメールで届く','パスポートのコピーと緊急連絡先は紙でも持つ','夜間の一人歩きエリアは事前にホテルで確認'],
 en:['Check your destination\'s risk level (1–4) on the MOFA safety site','Level 2+: reconsider travel. Level 3–4: cancel or evacuate','Register with "Tabi-Reji" for local safety alerts by email','Carry paper copies of your passport and emergency contacts','Ask your hotel which areas to avoid at night']}},
{id:'plug',cat:'abroad',icon:'🔌',title:{ja:'変換プラグ、買うべき？',en:'Do you need a plug adapter?'},body:{
 ja:['台湾・アメリカ・ハワイ：日本と同じAタイプ → 不要','韓国：SE/Cタイプ → 必要','シンガポール・香港：BFタイプ → 必要','ヨーロッパ：Cタイプ中心 → 必要','迷ったら全世界対応のマルチ変換プラグが1つあれば安心（電圧はスマホ充電器ならほぼ対応済み）'],
 en:['Taiwan, USA, Hawaii: same Type A as Japan → not needed','South Korea: Type SE/C → needed','Singapore, Hong Kong: Type BF → needed','Europe: mostly Type C → needed','When unsure, one universal adapter covers everything (phone chargers handle voltage)']}},
{id:'esim',cat:'abroad',icon:'📶',title:{ja:'海外の通信、どうする？',en:'Staying connected abroad'},body:{
 ja:['eSIM：出発前に購入→現地到着で即開通。短期旅行の第一候補','空港SIM：その場で買えるが行列と割高に注意','海外ローミング：設定不要だが料金は最も高い','ホテル・カフェのWi-Fiだけでも意外といける（地図はオフライン保存）'],
 en:['eSIM: buy before departure, activates on arrival. Best for short trips','Airport SIM: instant but queues and markups','Roaming: zero setup but the priciest','Hotel/café Wi-Fi can be enough (save offline maps)']}},
{id:'money',cat:'abroad',icon:'💳',title:{ja:'現金・カード・両替のコツ',en:'Cash, cards & exchange tips'},body:{
 ja:['基本はタッチ決済対応のクレカ2枚（VISA/Master各1枚が安心）','両替は空港より街中の両替所、またはATMキャッシングが高レート','屋台・ローカル市場用に少額の現金は必須','割り勘はアプリで記録して帰国後まとめて精算がラク'],
 en:['Carry 2 contactless credit cards (one VISA, one Mastercard)','Exchange in town or via ATM — better rates than airports','Keep small cash for street food and local markets','Track shared costs in-app and settle after the trip']}},
];
const TIP_CATS=[{id:'all',ja:'すべて',en:'All'},{id:'prep',ja:'準備',en:'Prep'},{id:'items',ja:'持ち物',en:'Packing'},{id:'safety',ja:'安全',en:'Safety'},{id:'abroad',ja:'海外',en:'Abroad'}];
let tipCat='all';

/* ================= アクティブな旅（しおり） ================= */
function buildDays(dest,dayCount){const times=['09:30','11:30','13:30','15:30','18:30'];const perDay=3;const days=[];
 for(let d=0;d<dayCount;d++){const day=[];for(let i=0;i<perDay;i++){const s=dest.spots[(d*perDay+i)%dest.spots.length];day.push({time:times[i+(d===0?1:0)]||times[i],...s})}days.push(day)}return days}
let activeTrip={destId:'kyoto',title:{ja:'京都旅行',en:'Kyoto Trip'},dates:'7/18 (Sat) – 7/20 (Mon)',members:['Koki','Yui'],days:buildDays(destById('kyoto'),3),extra:[],invite:'tabi.app/t/KYO-8264',
 album:[{grad:'g-kyoto',emoji:'⛩',label:{ja:'DAY1 清水寺',en:'Day 1 Kiyomizu'}},{grad:'g-food',emoji:'🍡',label:{ja:'DAY1 祇園',en:'Day 1 Gion'}},{grad:'g-alley',emoji:'🏮',label:{ja:'DAY2 先斗町',en:'Day 2 Pontocho'}},{grad:'g-view',emoji:'🌇',label:{ja:'DAY2 鴨川',en:'Day 2 Kamo River'}}],
 expenses:[{name:{ja:'新幹線（2人分 往復）',en:'Shinkansen (2 rt)'},payer:'Koki',amount:53280,src:'paypay'},{name:{ja:'ホテル 2泊',en:'Hotel, 2 nights'},payer:'Yui',amount:48000,src:'card'},{name:{ja:'祇園ランチ',en:'Gion lunch'},payer:'Koki',amount:4600,src:'paypay'},{name:{ja:'タクシー',en:'Taxi'},payer:'Yui',amount:1800,src:'paypay'}]};
let shioriDay=0;

/* ================= 検索（擬似AI） ================= */
function parseNights(){const f=state.form;
 if(f.from&&f.to){const n=Math.round((new Date(f.to)-new Date(f.from))/864e5);if(n>=0)return Math.min(n,3)}
 const m=f.vague.match(/(\d)\s*泊/);if(m)return Math.min(+m[1],3);
 if(/日帰り|day\s*trip/i.test(f.vague))return 0;
 return 2}
function searchPlans(){const f=state.form;const nights=parseNights();const days=nights+1;
 const kws=KW.filter(k=>k.kw.some(w=>(f.vague+' '+f.must).toLowerCase().includes(w)));
 const typed=f.dest.trim().toLowerCase();
 const destHit=typed?DESTS.find(d=>d.ja.includes(f.dest.trim())||d.en.toLowerCase().includes(typed)):null;
 let cands=[];
 if(destHit){const themes=[
   {title:{ja:`${destHit.ja}満喫 王道プラン`,en:`Classic ${destHit.en} highlights`},mult:1,reason:t('reason.dest'),off:0},
   {title:kws[0]?{ja:`${L(kws[0])}を味わうプラン`,en:`A trip for ${kws[0].en}`}:{ja:'レトロ＆カフェめぐりプラン',en:'Retro & café plan'},mult:.92,reason:kws[0]?t('reason.kw',L(kws[0])):t('reason.near'),off:2},
   {title:{ja:'のんびり余白プラン',en:'Slow & easy plan'},mult:1.12,reason:t('reason.near'),off:4}];
  cands=themes.map(th=>({dest:destHit,title:th.title,reason:th.reason,price:Math.round(destHit.base*th.mult/100)*100,nights,days,off:th.off}));
 }else{
  const budget=BUDGETS.find(b=>b.id===f.budget);
  const scored=DESTS.map(d=>{let s=1,reason=t('reason.near');
   kws.forEach(k=>{if(d.feat.includes(k.feat)){s+=3;reason=t('reason.kw',L(k))}});
   if(f.type&&(AFFINITY[f.type]||[]).includes(d.id)){s+=2.5;reason=t('reason.type',L(TRIP_TYPES.find(x=>x.id===f.type)).replace(/^[^ ]+ /,''))}
   if(!f.overseas&&d.country!=='jp')s=-99;
   if(f.license==='no'&&d.needCar)s-=4;
   if(f.license==='yes'&&d.needCar)s+=1;
   if(budget){if(d.base<=budget.max)s+=1.5;else s-=3}
   s+=(d.id.length%3)*.1;
   return{d,s,reason}}).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
  cands=scored.map(x=>({dest:x.d,title:{ja:`${x.d.ja}への旅`,en:`Trip to ${x.d.en}`},reason:x.reason,price:x.d.base,nights,days,off:0}));
 }
 state.results={cands,nights,days};render()}

/* ================= 画面レンダリング ================= */
const chips=(items,sel,group,extra='')=>items.map(i=>`<button class="chip ${sel===i.id?'active':''}" data-act="chip" data-group="${group}" data-val="${i.id}" ${extra}>${L(i)}</button>`).join('');
const featTags=(d)=>d.feat.slice(0,3).map(f=>`<span>${L(FEAT_LABEL[f])}</span>`).join('');

function screenPlan(){const f=state.form;const tt=activeTrip;
 const myTrip=`<div class="trip-card" data-act="goto" data-val="shiori"><div class="trip-cover ${destById(tt.destId).grad}"><span class="cover-emoji">${destById(tt.destId).emoji}</span><span class="badge-lime">${t('plan.active')}</span></div>
  <div class="trip-info"><b>${L(tt.title)}</b><small>${tt.dates} · ${tt.members.join(', ')}</small></div><span class="go">→</span></div>`;
 const results=state.results?`<section class="block" id="results"><h2>${t('r.title')}</h2><div class="cands">${state.results.cands.map((c,i)=>`
  <div class="cand ${c.dest.grad}" data-act="open-plan" data-val="${i}"><div class="cand-top"><span class="cand-emoji">${c.dest.emoji}</span><span class="cand-reason">✦ ${c.reason}</span></div>
   <div class="cand-body"><h3>${L(c.title)}</h3><p>${L(c.dest)} · ${t('r.nights',c.nights)}</p><div class="cand-tags">${featTags(c.dest)}</div></div>
   <div class="cand-foot"><b>${yen(c.price)}〜</b><span class="mini-btn">${t('r.detail')} →</span></div></div>`).join('')}</div></section>`:'';
 return `<section class="block"><h2>${t('plan.mytrips')}</h2>${myTrip}</section>
 <section class="block" id="searchCard"><div class="card">
  <div class="card-head"><span class="spark">✦</span><div><h2>${t('plan.search.title')}</h2><p>${t('plan.search.sub')}</p></div></div>
  <label class="f-label">${t('f.dest')}</label>
  <div class="f-row"><input class="f-input" id="fDest" data-field="dest" value="${esc(f.dest)}" placeholder="${t('f.dest.ph')}">
   <button class="chip ${f.overseas?'active':''}" data-act="toggle-overseas">${t('f.overseas')}</button></div>
  <label class="f-label">${t('f.vague')}</label>
  <textarea class="f-input" rows="2" data-field="vague" placeholder="${t('f.vague.ph')}">${esc(f.vague)}</textarea>
  <label class="f-label">${t('f.dates')}</label>
  <div class="f-row dates"><input type="date" class="f-input" data-field="from" value="${f.from}" ${f.tbd?'disabled':''}><input type="date" class="f-input" data-field="to" value="${f.to}" ${f.tbd?'disabled':''}><button class="chip ${f.tbd?'active':''}" data-act="toggle-tbd">${t('f.dates.tbd')}</button></div>
  <label class="f-label">${t('f.type')}</label><div class="chips">${chips(TRIP_TYPES,f.type,'type')}</div>
  <div class="f-grid">
   <div><label class="f-label">${t('f.people')}</label><div class="stepper"><button data-act="people" data-val="-1">−</button><b>${t('people',f.people)}</b><button data-act="people" data-val="1">＋</button></div></div>
   <div><label class="f-label">${t('f.license')}</label><div class="chips">${chips([{id:'yes',ja:t('f.license.yes'),en:t('f.license.yes')},{id:'no',ja:t('f.license.no'),en:t('f.license.no')}],f.license,'license')}</div></div>
  </div>
  <label class="f-label">${t('f.budget')}</label><div class="chips">${chips(BUDGETS.map(b=>({id:b.id,ja:b.label,en:b.label})),f.budget,'budget')}</div>
  <label class="f-label">${t('f.must')}</label><input class="f-input" data-field="must" value="${esc(f.must)}" placeholder="${t('f.must.ph')}">
  <button class="primary-btn" data-act="search"><span>${t('f.search')}</span><b>→</b></button>
 </div></section>${results}`}

function screenDiscover(){const q=state.disQuery.toLowerCase();
 const items=DISCOVER.filter(d=>{const dest=destById(d.dest);
  const hitQ=!q||L(d.title).toLowerCase().includes(q)||dest.ja.includes(state.disQuery)||dest.en.toLowerCase().includes(q);
  const hitT=state.disType==='all'||d.type===state.disType;return hitQ&&hitT});
 const typeChips=[`<button class="chip ${state.disType==='all'?'active':''}" data-act="dis-type" data-val="all">${t('d.all')}</button>`,
  ...Object.entries(TYPE_META).map(([k,v])=>`<button class="chip ${state.disType===k?'active':''}" data-act="dis-type" data-val="${k}">${v.icon} ${L(v)}</button>`)].join('');
 return `<section class="block"><input class="f-input dis-search" id="disSearch" value="${esc(state.disQuery)}" placeholder="${t('d.search.ph')}">
 <div class="chips scroll-x">${typeChips}</div>
 <div class="dis-grid" id="disGrid">${items.map(d=>{const s=disState[d.id];const dest=destById(d.dest);return `
  <div class="dis-card"><div class="dis-cover ${d.grad}"><span class="cover-emoji">${d.emoji}</span>${d.video?'<span class="play">▶</span>':''}<span class="dis-type">${TYPE_META[d.type].icon} ${L(TYPE_META[d.type])}</span></div>
   <div class="dis-body"><b>${L(d.title)}</b><small>⌖ ${L(dest)}</small>
    <div class="dis-actions"><button class="pill ${s.liked?'on':''}" data-act="like" data-val="${d.id}">${s.liked?'♥':'♡'} ${(d.likes+(s.liked?1:0)).toLocaleString()}</button>
     <button class="pill ${s.bmed?'on':''}" data-act="bm" data-val="${d.id}">${s.bmed?'▰':'▱'} ${d.bm+(s.bmed?1:0)}</button>
     <button class="pill add" data-act="add-spot" data-val="${d.id}">＋</button></div></div></div>`}).join('')||'<p class="empty">🔍</p>'}</div></section>`}

function settleInfo(){const list=activeTrip.expenses.filter(x=>state.paypayOn||x.src!=='paypay');
 const total=list.reduce((s,x)=>s+x.amount,0);const mem=activeTrip.members;const per=Math.round(total/mem.length);
 const paid={};mem.forEach(m=>paid[m]=0);list.forEach(x=>paid[x.payer]+=x.amount);
 const debt=mem.map(m=>({m,d:per-paid[m]})).sort((a,b)=>b.d-a.d);
 const transfer=debt[0]&&debt[0].d>0?{from:debt[0].m,to:debt[debt.length-1].m,amt:debt[0].d}:null;
 return{list,total,per,transfer}}
function screenShiori(){const tt=activeTrip;const dest=destById(tt.destId);
 const head=`<div class="sh-head ${dest.grad}"><div class="sh-head-in"><span class="badge-lock">${t('sh.closed')}</span><h2>${L(tt.title)}</h2><p>${tt.dates}</p>
  <div class="sh-members">${tt.members.map(m=>`<span class="avatar sm">${m[0]}</span>`).join('')}<small>${tt.members.join(' · ')}</small></div></div></div>
 <div class="invite-row"><div><small>${t('sh.invite')} · ${t('sh.closed.note')}</small><b>${tt.invite}</b></div><button class="mini-btn" data-act="copy-invite">${t('sh.copy')}</button></div>`;
 const tabs=`<div class="seg">${[['itin',t('sh.itin')],['album',t('sh.album')],['split',t('sh.split')]].map(([id,l])=>`<button class="${state.shioriTab===id?'active':''}" data-act="sh-tab" data-val="${id}">${l}</button>`).join('')}</div>`;
 let body='';
 if(state.shioriTab==='itin'){const dayChips=tt.days.map((_,i)=>`<button class="chip ${shioriDay===i?'active':''}" data-act="sh-day" data-val="${i}">DAY ${i+1}</button>`).join('');
  const evs=tt.days[shioriDay].map(s=>`<div class="ev"><time>${s.time}</time><i></i><div><b>${L(s)}</b><small>${TYPE_META[s.type].icon} ${L(TYPE_META[s.type])} · ${s.dur}${t('s.min')}</small></div></div>`).join('');
  const extra=tt.extra.length?`<div class="extra"><small>✦ ${t('s.added')}</small>${tt.extra.map(x=>`<span class="chip">＋ ${L(x.title)}</span>`).join('')}</div>`:'';
  body=`<div class="chips">${dayChips}</div><div class="timeline">${evs}</div>${extra}`}
 if(state.shioriTab==='album'){body=`<div class="album">${tt.album.map(a=>`<div class="al-tile ${a.grad}"><span>${a.emoji}</span><small>${L(a.label)}</small></div>`).join('')}
  <button class="al-add" data-act="add-photo">${t('sh.addphoto')}</button></div>`}
 if(state.shioriTab==='split'){const si=settleInfo();
  const rows=si.list.length?si.list.map(x=>`<div class="exp"><span class="b-icon sm">${x.src==='paypay'?'📱':'💳'}</span><div><b>${L(x.name)}</b><small>${x.payer}${x.src==='paypay'?` · <em>${t('sh.auto')}</em>`:''}</small></div><b>${yen(x.amount)}</b></div>`).join(''):`<p class="empty-note">${t('sh.noexp')}</p>`;
  body=`<div class="pp-row"><div><b>${t('sh.paypay')}</b><small>${t('sh.paypay.note')}</small></div><button class="switch ${state.paypayOn?'on':''}" data-act="paypay"><i></i></button></div>
  <div class="exp-list">${rows}</div><button class="outline-btn" data-act="add-exp">${t('sh.addexp')}</button>
  <div class="settle"><div class="s-row"><span>${t('sh.total')}</span><b>${yen(si.total)}</b></div><div class="s-row"><span>${t('sh.per')}（×${activeTrip.members.length}）</span><b>${yen(si.per)}</b></div>
   ${si.transfer?`<div class="s-row hl"><span>${t('sh.settle')}</span><b>${si.transfer.from} → ${si.transfer.to} ${yen(si.transfer.amt)}</b></div>`:''}
   <button class="primary-btn paypay" data-act="settle"><span>${t('sh.settlebtn')}</span><b>→</b></button></div>`}
 return `<section class="block">${head}${tabs}<div class="card soft">${body}</div></section>`}

function screenTips(){const items=TIPS.filter(x=>tipCat==='all'||x.cat===tipCat);
 return `<section class="block"><h2>${t('tips.title')}</h2>
 <div class="chips scroll-x">${TIP_CATS.map(c=>`<button class="chip ${tipCat===c.id?'active':''}" data-act="tip-cat" data-val="${c.id}">${L(c)}</button>`).join('')}</div>
 <div class="tips">${items.map(x=>`<details class="tip"><summary><span class="b-icon">${x.icon}</span><b>${L(x.title)}${x.pr?` <em class="pr">${t('tips.pr')}</em>`:''}</b><span class="chev">▾</span></summary>
  <ul>${L(x.body).map(li=>`<li>${li}</li>`).join('')}</ul></details>`).join('')}</div></section>`}

function render(){const app=$('#app');
 app.innerHTML={plan:screenPlan,discover:screenDiscover,shiori:screenShiori,tips:screenTips}[state.screen]();
 $$('.tabbar .tab').forEach(b=>b.classList.toggle('active',b.dataset.screen===state.screen));
 $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
 $('#langBtn').textContent=state.lang==='ja'?'EN':'日本語';
 document.documentElement.lang=state.lang;}

/* ================= プラン詳細シート ================= */
let sheet={cand:null,tab:'itin',day:0};
function openPlanSheet(i){sheet={cand:state.results.cands[i],tab:'itin',day:0};renderSheet();$('#planSheet').classList.add('open')}
function renderSheet(){const c=sheet.cand;if(!c)return;const d=c.dest;const days=buildDays(d,c.days);const f=state.form;
 const dayChips=days.map((_,i)=>`<button class="chip ${sheet.day===i?'active':''}" data-act="sheet-day" data-val="${i}">DAY ${i+1}</button>`).join('');
 let body='';
 if(sheet.tab==='itin'){body=`<div class="chips">${dayChips}</div><div class="timeline">${days[sheet.day].map(s=>`<div class="ev"><time>${s.time}</time><i></i><div><b>${L(s)}</b><small>${TYPE_META[s.type].icon} ${L(TYPE_META[s.type])} · ${s.dur}${t('s.min')}</small></div></div>`).join('')}</div>`}
 if(sheet.tab==='route'){const day=days[sheet.day];const modes=[t('s.walk'),d.country==='jp'?t('s.bus'):t('s.train'),t('s.walk')];
  body=`<div class="chips">${dayChips}</div><div class="route">${day.map((s,i)=>`<div class="r-stop"><span class="r-pin">${i+1}</span><b>${L(s)}</b></div>${i<day.length-1?`<div class="r-leg"><i></i><small>${modes[i%3]} · ${(i*7+13)%20+6}${t('s.min')}</small></div>`:''}`).join('')}
  <div class="r-sum">Σ ${day.length} spots · ${day.reduce((s,x)=>s+x.dur,0)}${t('s.min')}</div></div>`}
 if(sheet.tab==='book'){const nights=Math.max(c.nights,1);const rows=[
   {icon:'🎫',name:L(d.transport),qty:`×${f.people}`,amt:d.transport.price*f.people},
   {icon:'🏨',name:L(d.hotel),qty:`×${c.nights||1}${state.lang==='ja'?'泊':'n'}`,amt:d.hotel.price*nights},
   {icon:'🎟',name:L(d.act),qty:`×${f.people}`,amt:d.act.price*f.people}];
  const total=rows.reduce((s,r)=>s+r.amt,0);
  body=`<p class="note">✦ ${t('s.booknote')}</p>${rows.map(r=>`<div class="exp"><span class="b-icon sm">${r.icon}</span><div><b>${r.name}</b><small>${r.qty}</small></div><b>${yen(r.amt)}</b></div>`).join('')}
  <div class="settle"><div class="s-row hl"><span>${t('s.total')}</span><b>${yen(total)}</b></div></div>`}
 $('#planSheet').innerHTML=`<div class="sheet-card">
  <div class="sheet-cover ${d.grad}"><button class="close" data-act="close-sheet">×</button><span class="cover-emoji big">${d.emoji}</span>
   <div class="sheet-title"><small>${L(d)} · ${t('r.nights',c.nights)}</small><h2>${L(c.title)}</h2><b>${yen(c.price)}〜 <small>/ ${state.lang==='ja'?'人':'person'}</small></b></div></div>
  <div class="seg">${[['itin',t('s.itin')],['route',t('s.route')],['book',t('s.book')]].map(([id,l])=>`<button class="${sheet.tab===id?'active':''}" data-act="sheet-tab" data-val="${id}">${l}</button>`).join('')}</div>
  <div class="sheet-body">${body}</div>
  <div class="sheet-foot"><button class="primary-btn" data-act="start-trip"><span>${t('s.start')}</span><b>→</b></button></div></div>`}

/* ================= イベント ================= */
const toast=(m)=>{const el=$('#toast');el.querySelector('p').textContent=m;el.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>el.classList.remove('show'),2200)};

document.addEventListener('input',(e)=>{const fld=e.target.dataset.field;if(fld)state.form[fld]=e.target.value;
 if(e.target.id==='disSearch'){state.disQuery=e.target.value;const g=$('#disGrid');if(g){const html=screenDiscover();const tmp=document.createElement('div');tmp.innerHTML=html;g.innerHTML=tmp.querySelector('#disGrid').innerHTML}}});
document.addEventListener('change',(e)=>{const fld=e.target.dataset.field;if(fld)state.form[fld]=e.target.value});

document.addEventListener('click',(e)=>{const el=e.target.closest('[data-act],.tab');if(!el)return;
 if(el.classList.contains('tab')&&el.dataset.screen){state.screen=el.dataset.screen;render();window.scrollTo({top:0});return}
 const act=el.dataset.act,val=el.dataset.val;
 switch(act){
  case 'chip':{const g=el.dataset.group;state.form[g]=state.form[g]===val?'':val;render();break}
  case 'toggle-overseas':state.form.overseas=!state.form.overseas;render();break;
  case 'toggle-tbd':state.form.tbd=!state.form.tbd;if(state.form.tbd){state.form.from='';state.form.to=''}render();break;
  case 'people':state.form.people=Math.min(9,Math.max(1,state.form.people+ +val));render();break;
  case 'search':searchPlans();setTimeout(()=>{const r=$('#results');if(r)r.scrollIntoView({behavior:'smooth'})},50);break;
  case 'open-plan':openPlanSheet(+val);break;
  case 'sheet-tab':sheet.tab=val;renderSheet();break;
  case 'sheet-day':sheet.day=+val;renderSheet();break;
  case 'close-sheet':$('#planSheet').classList.remove('open');break;
  case 'start-trip':{const c=sheet.cand;const d=c.dest;
   activeTrip={destId:d.id,title:{ja:`${d.ja}旅行`,en:`${d.en} Trip`},dates:state.form.from&&state.form.to?`${state.form.from} – ${state.form.to}`:(state.lang==='ja'?'日程未定':'Dates TBD'),
    members:['Koki','Yui'],days:buildDays(d,c.days),extra:[],invite:`tabi.app/t/${d.id.slice(0,3).toUpperCase()}-${1000+Math.floor(Math.random()*9000)}`,
    album:[],expenses:[]};shioriDay=0;
   $('#planSheet').classList.remove('open');toast(t('toast.start',L(d)));state.screen='shiori';state.shioriTab='itin';render();window.scrollTo({top:0});break}
  case 'goto':state.screen=val;render();window.scrollTo({top:0});break;
  case 'dis-type':state.disType=val;render();break;
  case 'like':{const s=disState[+val];s.liked=!s.liked;toast(t(s.liked?'toast.liked':'toast.unliked'));render();break}
  case 'bm':{const s=disState[+val];s.bmed=!s.bmed;toast(t(s.bmed?'toast.bm':'toast.unbm'));render();break}
  case 'add-spot':{const d=DISCOVER.find(x=>x.id===+val);activeTrip.extra.push(d);toast(t('toast.addplan',L(d.title)));break}
  case 'sh-tab':state.shioriTab=val;render();break;
  case 'sh-day':shioriDay=+val;render();break;
  case 'copy-invite':{if(navigator.clipboard)navigator.clipboard.writeText('https://'+activeTrip.invite).catch(()=>{});toast(t('toast.copied'));break}
  case 'paypay':state.paypayOn=!state.paypayOn;toast(t(state.paypayOn?'toast.paypay.on':'toast.paypay.off'));render();break;
  case 'add-exp':{activeTrip.expenses.push({name:{ja:'お土産',en:'Souvenirs'},payer:activeTrip.members[activeTrip.expenses.length%activeTrip.members.length],amount:2400,src:'manual'});toast(t('toast.exp'));render();break}
  case 'settle':toast(t('toast.settle'));break;
  case 'add-photo':{activeTrip.album.push({grad:'g-food',emoji:'📷',label:{ja:`DAY${(activeTrip.album.length%3)+1} 追加`,en:`Day ${(activeTrip.album.length%3)+1} new`}});toast(t('toast.photo'));render();break}
  case 'tip-cat':tipCat=val;render();break;
 }});
$('#langBtn').addEventListener('click',()=>{state.lang=state.lang==='ja'?'en':'ja';render();if($('#planSheet').classList.contains('open'))renderSheet()});
$('#fabBtn').addEventListener('click',()=>{state.screen='plan';render();setTimeout(()=>$('#searchCard').scrollIntoView({behavior:'smooth'}),50)});
render();
