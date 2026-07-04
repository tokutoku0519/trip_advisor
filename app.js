const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
const toast=(message)=>{const el=$('#toast');el.querySelector('p').textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2200)};
const yen=(n)=>'¥'+n.toLocaleString('ja-JP');

/* ---- プランナー：タブ切り替え ---- */
const tabOrder=['basic','detail','extra'];
$$('.ptab').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.ptab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  tabOrder.forEach(t=>$(`#tab-${t}`).classList.toggle('hidden',t!==btn.dataset.tab));
  $('#stepPill').textContent=`${tabOrder.indexOf(btn.dataset.tab)+1} / 3`;
}));

/* ---- チップ選択（data-single=単一選択 / それ以外=複数選択） ---- */
$$('.chips').forEach(group=>group.querySelectorAll('.chip').forEach(chip=>chip.addEventListener('click',()=>{
  if(group.hasAttribute('data-single')){group.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));chip.classList.add('active')}
  else chip.classList.toggle('active');
})));
const picked=(sel)=>$$(sel+' .chip.active').map(c=>c.textContent.replace(/^[^ ]+ /,'').trim());

/* ---- 人数・日程 ---- */
let people=2;const setPeople=(n)=>{people=Math.min(9,Math.max(1,n));$('#peopleLabel').textContent=`${people}人`;renderBooking()};
$('#peopleMinus').addEventListener('click',()=>setPeople(people-1));$('#peoplePlus').addEventListener('click',()=>setPeople(people+1));
const dates=['7月18日 — 20日（2泊3日）','8月8日 — 10日（2泊3日）','9月21日 — 23日（2泊3日）','10月10日 — 11日（1泊2日）'];let dateI=0;
$('#dateBtn').addEventListener('click',()=>{$('#dateLabel').textContent=dates[++dateI%dates.length]});
const places=['京都','金沢','鎌倉','尾道','高山'];let placeIndex=0;$('#randomPlace').addEventListener('click',()=>{$('#destination').value=places[++placeIndex%places.length];toast('行き先候補を更新しました')});

/* ---- 条件の収集 ---- */
function readConditions(){return{
  area:$('#destination').value.trim()||'京都',
  date:$('#dateLabel').textContent,
  people,
  age:picked('#ageChips')[0]||'20代',
  budget:picked('#budgetChips')[0]||'¥20,000〜40,000',
  use:picked('#useChips')[0]||'デート',
  purposes:picked('#purposeChips'),
  transport:picked('#transportChips')[0]||'電車・バス',
  must:$('#mustVisit').value.trim(),
  request:$('#freeRequest').value.trim(),
}}

/* ---- 条件からプラン候補を組み立てる（デモ用の擬似AI） ---- */
const budgetBase={'〜¥20,000':16800,'¥20,000〜40,000':28600,'¥40,000〜80,000':52800,'¥80,000〜':98000};
const purposePlan={
  'カメラ旅':{title:'光を追いかける<br>フォト旅',desc:'夕景と路地。撮影ゴールデンアワー設計。',badge:'PHOTO TRIP'},
  '思い出旅':{title:'思い出をたどる<br>アルバム旅',desc:'あとで見返したくなる場所だけを。',badge:'MEMORY'},
  'プロポーズ':{title:'忘れられない夜の<br>プロポーズ旅',desc:'夜景・個室・サプライズ手配まで。',badge:'SPECIAL DAY'},
  '温泉':{title:'湯けむりと<br>癒しの温泉旅',desc:'名湯と静かな宿で、何もしない贅沢。',badge:'ONSEN'},
  'グルメ':{title:'朝から夜まで<br>食いしん坊の旅',desc:'おいしい記憶を、持ち帰る。',badge:'FOOD LOVER'},
  '絶景':{title:'絶景を追いかける<br>感動の旅',desc:'いちばん美しい時間に、いちばんの場所へ。',badge:'SCENIC'},
  '穴場めぐり':{title:'路地裏と穴場の<br>ローカル旅',desc:'ガイドブックにない静けさに会いに行く。',badge:'LOCAL PICK'},
};
function buildPlans(c){
  const base=budgetBase[c.budget]||28600;const nights=(c.date.match(/（(.+?)）/)||[])[1]||'2泊3日';
  const walk=c.transport==='車を運転する'||c.transport==='レンタカー'?'ドライブ中心':'徒歩ほどよく';
  const p1=purposePlan[c.purposes[0]]||{title:'レトロ&カフェ<br>めぐり旅',desc:'静かな時間を、ゆっくりと。',badge:'RELAX'};
  const planC=(c.transport==='車を運転する'||c.transport==='レンタカー')
    ?{title:'車で自由に<br>まわるドライブ旅',desc:'郊外の名所まで、思いのままに。',badge:'DRIVE'}
    :c.use==='家族旅行'?{title:'みんなのペースで<br>家族のんびり旅',desc:'移動少なめ。子どもも大人も楽しく。',badge:'FAMILY'}
    :{title:'癒しの自然と<br>温泉の旅',desc:'頑張らない日程で、心をほどく。',badge:'HEALING'};
  return[
    {small:'PLAN A',badge:`BEST MATCH · ${94+Math.min(c.purposes.length,4)}%`,title:`${c.area}満喫<br>王道プラン`,desc:c.must?`「${c.must}」を軸に、定番も網羅。`:'定番も、小さな発見も。',meta:[nights,walk,yen(base)+'〜'],featured:true},
    {small:'PLAN B',badge:p1.badge,title:p1.title,desc:p1.desc,meta:[nights,c.use,yen(Math.round(base*0.92/100)*100)+'〜']},
    {small:'PLAN C',badge:planC.badge,title:planC.title,desc:planC.desc,meta:[nights,'ゆったり',yen(Math.round(base*1.15/100)*100)+'〜']},
  ]}
function renderPlans(c){
  const cards=$$('.plan-card');buildPlans(c).forEach((p,i)=>{const card=cards[i];if(!card)return;
    card.querySelector('.badge').textContent=p.badge;
    card.querySelector('.photo-caption small').textContent=p.small;
    card.querySelector('.photo-caption h3').innerHTML=p.title;
    card.querySelector('.photo-caption p').textContent=p.desc;
    card.querySelector('.meta').innerHTML=p.meta.map(m=>`<span>${m}</span>`).join('');
    card.dataset.plan=p.title.replace('<br>','');
  });
  const tags=[`⌖ ${c.area} · ${c.date}`,`♙ ${c.people}人 · ${c.age}`,`💰 ${c.budget}`,`🎯 ${c.use}`,...c.purposes.map(p=>`✦ ${p}`),`🚄 ${c.transport}`];
  if(c.must)tags.push(`★ ${c.must}`);if(c.request)tags.push(`✎ ${c.request.length>15?c.request.slice(0,15)+'…':c.request}`);
  $('#matchTags').innerHTML=tags.map(t=>`<span>${t}</span>`).join('');
}

/* ---- モーダル ---- */
const modal=$('#modal');let modalCb=null;
function showModal({title,text,doneTitle,doneText,action,cb,wait=1400}){
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  $('#modalAction').style.display='none';$('.loading').style.display='flex';
  $('#modalTitle').textContent=title;$('#modalText').textContent=text;modalCb=cb;
  setTimeout(()=>{$('.loading').style.display='none';$('#modalTitle').textContent=doneTitle;$('#modalText').textContent=doneText;$('#modalAction').innerHTML=action;$('#modalAction').style.display='flex'},wait)}
$('#modalClose').addEventListener('click',()=>modal.classList.remove('open'));$('.modal-backdrop').addEventListener('click',()=>modal.classList.remove('open'));
$('#modalAction').addEventListener('click',()=>{modal.classList.remove('open');if(modalCb)modalCb()});

$('#generateBtn').addEventListener('click',()=>{const c=readConditions();renderPlans(c);
  showModal({title:'旅をつくっています',text:`${c.people}人 · ${c.age} · ${c.use}。${c.purposes.join('・')||'あなたの好み'}に合わせて、${c.area}のプランを組み立てています。`,
    doneTitle:'3つの旅ができました',doneText:`${c.area}の${c.use}にぴったりのプランです。気に入った旅を選ぶと、予約まで一気に進めます。`,action:'プランを見る →',cb:()=>$('#plans').scrollIntoView({behavior:'smooth'})})});
$('#regenerateBtn').addEventListener('click',()=>$('#planner').scrollIntoView({behavior:'smooth'}));

/* ---- 予約・チケット購入 ---- */
const catalogs={
  domestic:[
    {group:'交通',items:[{icon:'🚄',name:'新幹線 のぞみ（往復）',sub:'東京 ⇄ 京都 · 座席指定済み',price:26640,unit:'/人',per:'people'},{icon:'🚌',name:'地下鉄・バス1日券',sub:'QRコードでそのまま乗車',price:800,unit:'/人',per:'people'}]},
    {group:'宿泊',items:[{icon:'🏨',name:'THE GATE HOTEL 京都高瀬川',sub:'スーペリアツイン · 朝食付き',price:24000,unit:'/泊',qty:2}]},
    {group:'体験・チケット',items:[{icon:'🍵',name:'茶道体験（和菓子付き）',sub:'10:30–12:00 · 日本語/英語OK',price:4500,unit:'/人',per:'people'},{icon:'⛩',name:'清水寺 拝観チケット',sub:'当日入場OK · スマホ提示',price:400,unit:'/人',per:'people'}]},
  ],
  overseas:[
    {group:'交通（当日でも買える）',items:[{icon:'🚇',name:'MRT 1日乗車券',sub:'シンガポール · 当日その場で購入OK',price:600,unit:'/人',per:'people'},{icon:'🚄',name:'空港エクスプレス 当日乗車券',sub:'チャンギ空港 → 市内 · 即時QR発券',price:1400,unit:'/人',per:'people'}]},
    {group:'宿泊',items:[{icon:'🏨',name:'マリーナベイ・サンズ',sub:'デラックスルーム · シティビュー',price:52000,unit:'/泊',qty:2}]},
    {group:'体験・チケット',items:[{icon:'🌳',name:'ガーデンズ・バイ・ザ・ベイ',sub:'入場チケット · 即時発券',price:3200,unit:'/人',per:'people'}]},
    {group:'通信',items:[{icon:'📶',name:'eSIM 5GB / 7日間',sub:'購入後すぐ開通 · 設定ガイド付き',price:1900,unit:'',qty:1}]},
  ],
};
let bookingMode='domestic';let cart=[];
function initCart(){cart=[];catalogs[bookingMode].forEach(g=>g.items.forEach(item=>cart.push({...item,group:g.group,qty:item.per==='people'?people:(item.qty||1)})))}
function renderBooking(){if(!$('#bookingList'))return;initCart();
  let html='';let last='';cart.forEach((item,i)=>{
    if(item.group!==last){html+=`<div class="booking-group">${item.group}</div>`;last=item.group}
    html+=`<div class="booking-row"><span class="b-icon">${item.icon}</span><div class="b-info"><b>${item.name}</b><small>${item.sub}</small></div><div class="b-price"><b>${yen(item.price)}</b><small>${item.unit}</small></div><div class="b-qty"><button data-i="${i}" data-d="-1">−</button><span id="qty-${i}">${item.qty}</span><button data-i="${i}" data-d="1">＋</button></div></div>`});
  $('#bookingList').innerHTML=html;
  $$('#bookingList .b-qty button').forEach(btn=>btn.addEventListener('click',()=>{const it=cart[+btn.dataset.i];it.qty=Math.max(0,it.qty+ +btn.dataset.d);$(`#qty-${btn.dataset.i}`).textContent=it.qty;renderSummary()}));
  renderSummary()}
function renderSummary(){const active=cart.filter(it=>it.qty>0);
  $('#summaryRows').innerHTML=active.map(it=>`<div class="summary-row"><span>${it.icon} ${it.name} × ${it.qty}</span><b>${yen(it.price*it.qty)}</b></div>`).join('')||'<p class="summary-empty">数量を選ぶと、ここに追加されます</p>';
  $('#summaryTotal').textContent=yen(active.reduce((s,it)=>s+it.price*it.qty,0))}
$$('.booking-tabs button').forEach(btn=>btn.addEventListener('click',()=>{$$('.booking-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');bookingMode=btn.dataset.mode;renderBooking()}));
$('#bookAllBtn').addEventListener('click',()=>{const active=cart.filter(it=>it.qty>0);if(!active.length)return toast('予約する項目を選んでください');
  showModal({title:'まとめて予約しています',text:`${active.length}件の予約・購入を処理しています。決済はアプリに登録済みのカードで行われます。`,
    doneTitle:'予約が完了しました',doneText:`${active.length}件 · 合計${$('#summaryTotal').textContent}。QRチケットと予約確認は「旅のしおり」に自動で追加されました。`,action:'旅のしおりを見る →',wait:1600,cb:()=>$('#journey').scrollIntoView({behavior:'smooth'})})});
renderBooking();

/* ---- そのほかの操作 ---- */
$$('.heart').forEach(heart=>heart.addEventListener('click',(e)=>{e.stopPropagation();heart.classList.toggle('active');heart.textContent=heart.classList.contains('active')?'♥':'♡';toast(heart.classList.contains('active')?'お気に入りに保存しました':'お気に入りから外しました')}));
$('#mobilePlan').addEventListener('click',()=>{$('#planner').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#destination').focus(),500)});
$$('.choose-plan').forEach(btn=>btn.addEventListener('click',()=>{$('#itinerary').scrollIntoView({behavior:'smooth'});toast(`${btn.closest('.plan-card').dataset.plan}を選びました`)}));
const spots=[{title:'夕暮れの二年坂',desc:'灯りがともる、少し前。\nいちばん美しい時間。'},{title:'朝の錦市場',desc:'湯気と声が行き交う、\n京都のおいしい台所。'},{title:'鴨川でひと休み',desc:'旅の途中に、何もしない\n贅沢な30分を。'}];let spot=0;function changeSpot(step){spot=(spot+step+spots.length)%spots.length;$('#videoPhone').animate([{opacity:.4,transform:'translateX(12px)'},{opacity:1,transform:'translateX(0)'}],{duration:320});$('#spotTitle').textContent=spots[spot].title;$('#spotDesc').innerHTML=spots[spot].desc.replace('\n','<br>')}
$('#nextSpot').addEventListener('click',()=>changeSpot(1));$('#prevSpot').addEventListener('click',()=>changeSpot(-1));$('#addSpotBtn').addEventListener('click',()=>toast(`${spots[spot].title}を旅程に追加しました`));
let playing=false;$('#playBtn').addEventListener('click',()=>{playing=!playing;$('#playBtn').textContent=playing?'❚❚':'▶';toast(playing?'スポット動画を再生中':'一時停止しました')});
$$('.day-tabs:not(.booking-tabs) button').forEach((btn,i)=>btn.addEventListener('click',()=>{$$('.day-tabs:not(.booking-tabs) button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');$('.schedule-head small').textContent=`7月${18+i}日（${['土','日','月'][i]}）`;toast(`DAY ${i+1} の旅程を表示しました`)}));
$('#navBtn').addEventListener('click',()=>toast('清水寺までのナビを開始します'));$('#detailBtn').addEventListener('click',()=>toast('旅程の詳細を開きました'));$('#shareBtn').addEventListener('click',()=>toast('共有リンクをコピーしました'));
$$('.desktop-nav a,.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{$$('.desktop-nav a,.mobile-nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));
