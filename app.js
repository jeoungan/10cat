import { CATS, ACTIONS, SHOP_ITEMS, createGame } from './game.js';
import { MOTION_ACTIONS,createMotionPlayer,resolveMotion } from './motion.js';
import { OUTFITS,outfitById,dressedPortrait } from './wardrobe.js';

const game = createGame();
const $ = (s, root = document) => root.querySelector(s);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons = {
 ribbon:'<path d="M10 10C1 0 0 15 10 13m4-3c9-10 10 5 0 3M10 10h4v4h-4Zm1 4-3 8-3-3m8-5 3 8 3-3"/>',
 paw:'<ellipse cx="12" cy="16" rx="6" ry="4.5"/><ellipse cx="5" cy="10" rx="2" ry="3"/><ellipse cx="10" cy="5.5" rx="2" ry="3"/><ellipse cx="16" cy="6" rx="2" ry="3"/><ellipse cx="20" cy="11" rx="2" ry="3"/>',
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
 cat:'<path d="M4 10V3l6 4h4l6-4v7c6 16-22 16-16 0Z"/><path d="M8 12h.01M16 12h.01m-6 4q2 2 4 0"/>',
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
 album:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1"/><path d="m3 16 5-5 4 4 3-3 6 5"/>',
 bag:'<path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
 book:'<path d="M12 5C9 3 5 3 2 4v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-3-1-7-1-10 1v15"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z"/>',
 leaf:'<path d="M20 3C3 2 2 11 6 16s14 3 14-13Z"/><path d="M4 21 15 10"/>',
 coin:'<circle cx="12" cy="12" r="9"/><path d="M14.5 8h-4a2 2 0 0 0 0 4h3a2 2 0 0 1 0 4h-4m2.5-10v12"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
 settings:'<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2-6h4l1 3 3 1 3 2-1 4 1 4-3 2-3 1-1 3h-4l-1-3-3-1-3-2 1-4-1-4 3-2 3-1 1-3Z"/>',
 arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 bowl:'<path d="M3 12h18c0 7-18 7-18 0Zm2 8h14M7 3c-3 3 3 4 0 7m5-7c-3 3 3 4 0 7m5-7c-3 3 3 4 0 7"/>',
 water:'<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
 toy:'<path d="m3 21 9-11m0 0c-5-5 4-9 5-6s4 5 3 8-5 2-8-2Z"/><path d="m16 8 5-5"/>',
 hand:'<path d="M8 12V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v9c0 8-10 9-14 4l-4-5c-2-3 1-5 3-3l3 3"/>',
 brush:'<path d="m15 3 6 6-8 8-6-6Zm-8 8-4 4 6 6 4-4M5 13l6 6m-8-3 5 5"/>',
 sparkle:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
 sound:'<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
 gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13m0-13C3 8 6 0 10 4l2 4c9 0 6-8 2-4l-2 4Z"/>'
};
const icon = (name, cls='') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.paw}</svg>`;
const actionInfo = {
 feed:{label:'밥 주기',icon:'bowl',hint:'든든한 한 끼',color:'peach'}, water:{label:'물 갈아주기',icon:'water',hint:'신선한 물',color:'blue'},
 play:{label:'놀아주기',icon:'toy',hint:'사냥 본능 톡톡',color:'sage'}, pet:{label:'쓰다듬기',icon:'hand',hint:'조심조심, 다정하게',color:'pink'},
 brush:{label:'빗질하기',icon:'brush',hint:'보송보송한 털',color:'lilac'}, clean:{label:'화장실 청소',icon:'sparkle',hint:'깨끗하고 편안하게',color:'sage'},
 sleep:{label:'쉬게 하기',icon:'moon',hint:'포근한 낮잠',color:'lilac'}, treat:{label:'간식 주기',icon:'heart',hint:'작은 행복 한 입',color:'peach'},
 blink:{label:'천천히 눈인사',icon:'heart',hint:'눈빛으로 전하는 안심',color:'pink'},call:{label:'이름 불러주기',icon:'bell',hint:'익숙하고 다정한 목소리',color:'sage'},stretch:{label:'함께 기지개',icon:'sun',hint:'앞발을 쭉, 느긋하게',color:'lilac'}
};
const rooms = {'living-room':{name:'햇살 거실',sub:'햇살이 가장 먼저 인사하는 곳',icon:'sun',asset:'living-room.png'},bedroom:{name:'포근한 침실',sub:'나란히 꾸는 달콤한 꿈',icon:'moon',asset:'bedroom.png'},terrace:{name:'초록빛 테라스',sub:'바람과 나뭇잎의 작은 합주',icon:'leaf',asset:'terrace.png'}};
const memoryIllustrations={
 bori:{source:'assets/backgrounds/bori-memory.png',alt:'보리와 햇살을 나눈 추억'},
 mochi:{source:'assets/backgrounds/mochi-memory.png',alt:'무릎에 턱을 올린 모찌와 나눈 포근한 추억',position:'46% center'},
 luna:{source:'assets/backgrounds/luna-memory.png',alt:'달빛 아래 의자에서 눈을 감고 앞발을 접은 루나의 추억',position:'58% center'},
};
let view = 'home', filter = 'all', toastTimer, selectedAction = '', actionTimer, lastFocus, playCount=0, playCatId=null,playSession=0;
const modal = $('#modal');
let motionPlayer=null,motionReturn='home',motionSession=0,motionCareContext={};
let previewOutfit='ribbon';
function focusKey(el=document.activeElement) {
 if(!el || el===document.body || el.closest('#modal'))return null;
 for(const key of ['data-action','data-view','data-select-cat','data-room','data-command','data-story','data-filter','data-purchase','data-cat-open','data-moment','data-outfit','data-wardrobe-cat']) {
  if(el.hasAttribute(key)){const selector=`${el.tagName.toLowerCase()}[${key}="${CSS.escape(el.getAttribute(key))}"]`;return {selector,index:[...document.querySelectorAll(selector)].indexOf(el)};}
 }
 return null;
}
function restoreFocus(key){if(key)document.querySelectorAll(key.selector)[key.index]?.focus({preventScroll:true});}

function catData(id = game.state.selectedCat) { return CATS.find(c=>c.id===id) || CATS[0]; }
function statusText(s) { return s.resting ? '꿈나라 여행 중' : s.hunger < 35 ? '배가 고파요' : s.water < 35 ? '목이 말라요' : s.health < 55 ? '세심한 돌봄이 필요해요' : s.energy < 30 ? '조금 졸려요' : s.cleanliness < 35 ? '깨끗한 곳이 좋아요' : s.happiness < 40 ? '함께 있고 싶어요' : '기분이 좋아요'; }
function relationship(s) { return s.affection >= 75 ? '서로의 가장 좋은 친구' : s.affection >= 45 ? '마음이 가까워지는 중' : s.affection >= 24 ? '조금씩 마음을 여는 중' : '조심스러운 첫인사'; }
function timeText() { const n = Math.floor(game.state.minute); return `${String(Math.floor(n/60)%24).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`; }
function needsHelp(s) { return s.health<55||['hunger','water','energy','cleanliness','happiness'].some(k=>s[k]<40); }
function portrait(cat, cls='', loading='lazy',outfitOverride) {
 const outfit=outfitOverride??game.state.cats[cat.id]?.outfit;
 if(outfitById(outfit))return dressedPortrait(cat.id,outfit,cls,`${cat.name} · ${outfitById(outfit).name}를 입은 일러스트`);
 return `<img class="cat-portrait ${cls}" src="${esc(cat.portrait)}" alt="${esc(cat.name)} · ${esc(cat.breed)} 일러스트" loading="${loading}" draggable="false">`;
}

function render() {
 const focus=focusKey();
 const s = game.state, cat=catData();
 document.documentElement.classList.toggle('reduced-motion', !!s.settings.reducedMotion);
 $('#app').innerHTML = `<aside class="sidebar"><a class="brand" href="#" data-view="home" aria-label="나른한 오후 홈">${icon('cat')}<span>나른한 오후<small>THE PURRFECT DAYS</small></span></a><div class="sidebar-caption">우리의 작은 세상</div><nav aria-label="주 메뉴">${[['home','home','우리 집'],['cats','paw','고양이들'],['album','album','추억 앨범'],['shop','bag','작은 상점'],['wardrobe','ribbon','작은 옷장'],['journal','book','돌봄 일기']].map(([id,i,label])=>`<button class="nav-item ${view===id?'active':''}" data-view="${id}" aria-label="${label}" ${view===id?'aria-current="page"':''}>${icon(i)}<span>${label}</span>${id==='cats'?'<small>10</small>':id==='album'&&s.album.length?`<small>${s.album.length}</small>`:''}</button>`).join('')}</nav><div class="sidebar-bottom"><div class="little-note">${icon('heart')}<p>서두르지 않아도 괜찮아요.<br>우리에게는, 긴 오후가 있으니까.</p><span>one small purr at a time</span></div><button class="nav-item" data-command="settings" aria-label="환경 설정">${icon('settings')}<span>환경 설정</span></button><div class="save-status">${icon('check')} 자동으로 기록하고 있어요</div></div></aside>
 <main class="main"><header class="topbar"><div class="breadcrumb">우리의 작은 세상 <span>/</span> <b>${{home:'우리 집',cats:'고양이들',album:'추억 앨범',shop:'작은 상점',wardrobe:'작은 옷장',journal:'돌봄 일기'}[view]}</b></div><div class="top-actions"><span class="day-pill">${icon('sun')} 함께한 <b>${s.day}일째</b></span><button class="coin-pill" data-view="shop" aria-label="작은 상점, ${s.coins} 코인">${icon('coin')} ${s.coins.toLocaleString()}</button><button class="icon-button" data-command="help" aria-label="게임 도움말">${icon('book')}</button><button class="avatar" data-command="settings" aria-label="집사 설정">${icon('cat')}</button></div></header>
 <div class="page-content">${view==='home'?homeView(cat):view==='cats'?catsView():view==='album'?albumView():view==='shop'?shopView():view==='wardrobe'?wardrobeView():journalView()}</div>
 <footer class="footer"><span>${icon('paw')} 작은 발자국으로 채워지는, 우리의 하루</span><span>나른한 오후 <i>·</i> made for slow days</span></footer></main>`;
 if(game.saveStatus?.ok===false){const status=$('.save-status');status.innerHTML=`${icon('book')} 이 브라우저에서는 저장이 어려워요`;}
 restoreFocus(focus);
 if(s.dialogue) renderDialogue();
}

function heading(kicker,title,description,extra='') { return `<section class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${description}</p></div>${extra}</section>`; }
function featuredMoment(catId){
 const outfitId=game.state.cats[catId].outfit||'none';
 return ['groom','pet'].find(action=>resolveMotion(catId,action,outfitId).kind==='sequence')||'groom';
}
function homeView(cat) {
 const s=game.state, room=rooms[s.room]||rooms['living-room'],moment=featuredMoment(cat.id);
 return `${heading('A LITTLE HOME, A LOT OF LOVE','오늘도, 나른한 오후', '창가에 내려앉은 햇살처럼, 오늘도 너와 천천히.',`<div class="weather">${icon('sun')}<div><b>맑음, 포근한 하루</b><small>집 안은 언제나 23°C</small></div></div>`)}
 <div class="home-grid"><section class="home-left"><div class="room-heading"><div class="room-tabs" role="group" aria-label="방 선택">${Object.entries(rooms).map(([id,r])=>`<button data-room="${id}" class="${s.room===id?'active':''}" aria-pressed="${s.room===id}">${icon(r.icon)}${r.name}</button>`).join('')}</div><button class="subtle-button" data-command="scene-photo">${icon('expand')} 크게 보기</button></div>
 <div class="room-scene ${s.room} ${Math.floor(s.minute/60)>=19||Math.floor(s.minute/60)<6?'night':''}" aria-label="${room.name}, 고양이를 누르면 확대 일러스트가 열립니다"><img class="room-background" src="assets/backgrounds/${room.asset}" alt="${room.name}의 따뜻한 손그림 배경" fetchpriority="high"><div class="scene-vignette"></div><div class="scene-label">${icon(room.icon)} ${room.name}<span>${room.sub}</span></div><div class="scene-clock">${icon('sun')}<span>${timeText()}</span></div><div class="dust dust-one"></div><div class="dust dust-two"></div>${sceneCats(cat)}<div class="scene-caption">${icon('hand')} 고양이를 눌러 눈을 맞춰 보세요</div><button class="scene-sound ${s.settings.sound?'on':''}" data-command="sound" aria-label="효과음 ${s.settings.sound?'끄기':'켜기'}" aria-pressed="${!!s.settings.sound}">${icon('sound')}</button></div>
 <div class="care-tray"><div class="care-tray-title"><span>${icon('heart')} <b>${cat.name}</b>와 함께하기</span><small>사료 ${s.inventory.food} · 간식 ${s.inventory.treats}</small></div><div class="care-actions">${['feed','play','pet','brush'].map(a=>actionButton(a)).join('')}</div><div class="care-secondary">${['water','clean','sleep','treat'].map(a=>`<button data-action="${a}" ${a==='sleep'?`aria-pressed="${!!s.cats[cat.id].resting}"`:''}>${icon(actionInfo[a].icon)} ${a==='sleep'&&s.cats[cat.id].resting?'깨워주기':actionInfo[a].label}</button>`).join('')}</div></div><div class="social-actions" role="group" aria-label="다정한 교감">${['blink','call','stretch'].map(actionButton).join('')}</div><button class="moment-discovery" data-moment="${moment}"><span>${icon('paw')}<span><b>${cat.name}의 작은 몸짓</b><small>${moment==='groom'?'앞발을 핥고, 얼굴을 쓱쓱':'다정한 손길에 눈이 사르르'}</small></span></span><span>${moment==='groom'?'그루밍 보기':'쓰다듬기 보기'} ${icon('arrow')}</span></button><button class="closet-link" data-command="wardrobe">${icon('ribbon')} ${cat.name}의 작은 옷장 <span>오늘은 어떤 모습으로? ${icon('arrow')}</span></button></section>
 <aside class="home-right">${profileCard(cat)}${questCard()}</aside></div>
 <section class="cats-section"><div class="section-title"><div><h2>함께 사는 작은 친구들 <span>10</span></h2><p>각자의 속도로, 서로에게 가까워지는 중이에요.</p></div><button class="subtle-button" data-view="cats">모두 보기 ${icon('arrow')}</button></div><div class="cat-strip">${CATS.map(c=>catCard(c)).join('')}</div></section>`;
}
function sceneCats(cat) {
 const other=CATS.filter(c=>c.id!==cat.id); const peers=[other[0],cat,other[1]];
 return peers.map((c,i)=>`<button class="scene-cat cat-position-${i} ${c.id===cat.id?'selected':''} ${game.state.cats[c.id].resting?'resting':''} ${selectedAction && c.id===cat.id?'acting-'+selectedAction:''}" data-cat-open="${c.id}" aria-label="${c.name} 만나기 · 일러스트 크게 보기" style="--cat-delay:${i*0.7}s"><span class="cat-ground"></span>${portrait(c,'','eager')}<span class="cat-name-bubble">${c.id===cat.id?icon('heart'):''}${c.name}<small>${game.state.cats[c.id].resting?'z Z':c.id===cat.id?'나랑 같이 있을래?':'…'}</small></span></button>`).join('');
}
function actionButton(a) { const t=actionInfo[a]; return `<button class="care-button ${t.color}" data-action="${a}"><span class="action-icon">${icon(t.icon)}</span><span><b>${t.label}</b><small>${t.hint}</small></span></button>`; }
function profileCard(cat) {
 const c=game.state.cats[cat.id];
 return `<section class="profile-card"><div class="card-overline">지금, 나의 곁에 <span class="live-dot"></span></div><button class="profile-portrait" data-cat-open="${cat.id}" style="--cat-color:${cat.color||'#f2e7d5'}" aria-label="${cat.name}의 일러스트 감상하기">${portrait(cat,'','eager')}<span>${icon('expand')}</span></button><div class="profile-name"><h2>${cat.name}</h2><span>${esc(cat.personality)}</span></div><p class="breed">${esc(cat.breed)}</p><div class="mood-pill">${icon('leaf')} ${statusText(c)}</div><div class="affection-row"><span>${icon('heart')} ${relationship(c)}</span><b>${Math.round(c.affection)}<small> / 100</small></b></div><div class="meter affection"><span style="width:${c.affection}%"></span></div><div class="needs-grid">${[['hunger','포만감','bowl','peach'],['water','수분','water','blue'],['energy','에너지','sun','sage'],['happiness','행복','heart','pink'],['cleanliness','청결','sparkle','lilac'],['health','건강','leaf','sage']].map(([key,label,i,color])=>`<div class="need"><div>${icon(i)}<span>${label}</span><b>${Math.round(c[key])}</b></div><div class="meter ${color}" role="progressbar" aria-label="${cat.name} ${label}" aria-valuenow="${Math.round(c[key])}" aria-valuemin="0" aria-valuemax="100"><span style="width:${c[key]}%"></span></div></div>`).join('')}</div><button class="story-button" data-story="${cat.id}">${icon('book')} ${c.affection >= (cat.storyUnlockAffection||24)?'우리의 이야기를 만나기':'첫 이야기를 기다리는 중'} ${icon('arrow')}</button></section>`;
}
function questCard() {
 const quests=game.state.quests||[];
 return `<section class="quest-card"><div class="section-title"><h3>${icon('sun')} 오늘의 작은 약속</h3><span>${quests.filter(q=>q.completed || q.progress>=q.target).length} / ${quests.length}</span></div>${quests.slice(0,3).map(q=>`<div class="quest-row ${q.completed||q.progress>=q.target?'done':''}"><span class="quest-check">${q.completed||q.progress>=q.target?icon('check'):''}</span><span>${esc(q.title)}<em>${esc(q.description)}</em></span><small>${Math.min(q.progress||0,q.target||1)}/${q.target||1}</small></div>`).join('')}<button class="daily-reward" data-command="daily" ${game.state.dailyRewardClaimed?'disabled':''}>${icon(game.state.dailyRewardClaimed?'check':'gift')} ${game.state.dailyRewardClaimed?'오늘의 선물을 받았어요':'오늘의 선물 받기'} ${icon('chevron')}</button></section>`;
}
function catCard(cat,large=false) {
 const c=game.state.cats[cat.id];
 return `<button class="cat-card ${cat.id===game.state.selectedCat?'active':''} ${large?'large':''}" data-select-cat="${cat.id}" style="--cat-color:${cat.color||'#efe9df'}" aria-label="${cat.name} 선택, ${statusText(c)}" aria-pressed="${cat.id===game.state.selectedCat}"><span class="cat-card-image">${portrait(cat)}${needsHelp(c)?'<i class="attention-dot" title="돌봄이 필요해요"></i>':''}${cat.id===game.state.selectedCat?`<span class="selected-tick">${icon('check')}</span>`:''}</span><span class="cat-card-name">${cat.name} ${icon('heart')}</span><small>${large?esc(cat.breed):esc(cat.personality)}</small>${large?`<span class="cat-card-status">${statusText(c)} · 친밀도 ${Math.round(c.affection)}</span>`:''}</button>`;
}
function catsView() {
 const cats=filter==='needs'?CATS.filter(c=>needsHelp(game.state.cats[c.id])):CATS;
 return `${heading('TEN LITTLE PERSONALITIES','열 가지 마음, 열 마리의 친구','서로 다른 울음소리와 취향. 하나씩 알아가는 즐거움.')}<div class="filter-row"><button class="filter-chip ${filter==='all'?'active':''}" data-filter="all">모두 함께 <b>10</b></button><button class="filter-chip ${filter==='needs'?'active':''}" data-filter="needs">돌봄이 필요한 친구</button></div><div class="cats-gallery">${cats.map(c=>catCard(c,true)).join('')||'<div class="empty-state">모두 편안한 시간을 보내고 있어요. 잠깐 함께 쉬어도 좋겠네요.</div>'}</div><div class="info-note">${icon('heart')} 친구를 선택하면 우리 집에서 돌볼 수 있어요. 방 안의 고양이를 누르면 큰 일러스트와 이야기가 열려요.</div>`;
}
function albumView() {
 return `${heading('MOMENTS TO KEEP','우리의 추억 앨범','평범해서 더 소중한 순간들을, 여기에 모아 두었어요.',`<span class="collection-count">${game.state.album.length}<small> / 10 stories</small></span>`)}<div class="album-grid">${CATS.map((c,i)=>{ const unlocked=game.state.cats[c.id].affection>=(c.storyUnlockAffection||24),memory=game.state.album.find(a=>a.catId===c.id),art=memoryIllustrations[c.id]; return `<button class="memory-card ${memory?'collected':''}" data-story="${c.id}"><div class="memory-art" style="--cat-color:${c.color}">${memory&&art?`<img class="memory-cg" src="${art.source}" alt="${esc(art.alt)}">`:portrait(c)}<span class="memory-number">${String(i+1).padStart(2,'0')}</span>${memory?`<span class="memory-tag">${icon('check')} 간직한 추억</span>`:''}</div><div class="memory-copy"><span>${c.name}의 이야기</span><h3>${esc(c.story?.title||'햇살 아래 첫인사')}</h3><p>${memory?`함께한 ${memory.day}일째에 담은 순간`:unlocked?'새로운 이야기가 기다리고 있어요':`친밀도 ${c.storyUnlockAffection||24}에 열리는 작은 마음`}</p></div>${icon(unlocked?'arrow':'heart')}</button>`;}).join('')}</div>`;
}
function shopView() {
 const items=Array.isArray(SHOP_ITEMS)?SHOP_ITEMS:Object.values(SHOP_ITEMS);
 return `${heading('LITTLE THINGS, BIG HAPPINESS','골목 끝, 작은 상점','고양이의 하루를 조금 더 행복하게 만드는 것들.')}<div class="shop-banner"><div>${icon('bag')}<span><b>다정함을 채우는 장바구니</b><small>돌봄과 오늘의 약속으로 코인을 모을 수 있어요.</small></span></div><strong>${icon('coin')} ${game.state.coins.toLocaleString()}</strong></div><div class="shop-grid">${items.map((item,i)=>`<article class="shop-card"><div class="shop-art ${['peach','pink','sage','lilac'][i%4]}">${icon(item.id?.includes('food')?'bowl':item.id?.includes('toy')?'toy':'heart')}</div><div class="eyebrow">FOR YOUR LITTLE FRIEND</div><h2>${esc(item.name||item.label)}</h2><p>${esc(item.description||'좋아하는 친구에게 작은 행복을 선물해요.')}</p><button data-purchase="${esc(item.id)}" class="primary-button">${icon('coin')} ${item.price} <span>구매하기 ${icon('arrow')}</span></button></article>`).join('')}</div><div class="inventory-box"><h3>우리 집 수납장</h3><span>${icon('bowl')} 사료 <b>${game.state.inventory.food}</b></span><span>${icon('heart')} 간식 <b>${game.state.inventory.treats}</b></span><span>${icon('toy')} 장난감 <b>${game.state.inventory.toys}</b></span></div>`;
}
function journalView() {
 return `${heading('EVERY ORDINARY DAY','다정한 돌봄 일기','잘 먹고, 잘 놀고, 서로를 알아간 오늘의 기록.')}<div class="journal-layout"><section class="journal-list">${game.state.journal.slice(0,60).map(j=>`<article class="journal-entry"><span class="journal-icon">${icon('paw')}</span><div><small>함께한 ${j.day||game.state.day}일째 ${j.minute!=null?`· ${String(Math.floor(j.minute/60)).padStart(2,'0')}:${String(Math.floor(j.minute%60)).padStart(2,'0')}`:''}</small><p>${esc(j.text||j.message)}</p></div>${icon('heart')}</article>`).join('')||'<div class="empty-state">첫 페이지가 기다리고 있어요.<br>고양이에게 다정하게 인사를 건네 볼까요?</div>'}</section><aside class="journal-note">${icon('book')}<h2>작은 일상이<br>추억이 되는 곳.</h2><p>급하게 친해지지 않아도 괜찮아요.<br>곁에 머무는 것만으로도<br>고양이는 당신을 기억할 거예요.</p></aside></div>`;
}

function wardrobeView(){
 const cat=catData(),worn=game.state.cats[cat.id].outfit||'none',selected=outfitById(previewOutfit),owned=previewOutfit==='none'||game.state.wardrobe.owned.includes(previewOutfit);
 return `${heading('A LITTLE DRESSING ROOM','오늘의 작은 멋','리본 하나, 포근한 옷 한 벌. 우리만의 취향을 골라 봐요.')}<div class="wardrobe-cats" role="group" aria-label="옷을 입힐 고양이">${CATS.map(c=>`<button data-wardrobe-cat="${c.id}" aria-pressed="${c.id===cat.id}" class="${c.id===cat.id?'active':''}">${portrait(c,'','lazy')}<span>${c.name}</span></button>`).join('')}</div><div class="wardrobe-layout"><section class="wardrobe-preview"><span class="wardrobe-preview-tag">${icon('ribbon')} 미리 입어보기</span><span class="wardrobe-sparkle">✧</span><div class="wardrobe-cat-stage">${portrait(cat,'wardrobe-cat','eager',previewOutfit)}</div><div class="wardrobe-caption"><small>TODAY’S LITTLE MUSE</small><h2>${cat.name}</h2><p>${selected?.name||'있는 그대로, 사랑스러운 모습'}</p></div></section><section class="wardrobe-collection"><div class="wardrobe-section-title"><div><span class="eyebrow">OUR SHARED CLOSET</span><h2>어떤 모습이 잘 어울릴까요?</h2></div><span class="wardrobe-owned">${game.state.wardrobe.owned.length} / ${OUTFITS.length}</span></div><p class="wardrobe-intro">마음에 드는 옷을 미리 보고 골라 주세요.<br>한 번 들인 옷은 열 마리 모두에게 입힐 수 있어요.</p><div class="outfit-grid">${OUTFITS.map(item=>`<button class="outfit-card ${item.id===previewOutfit?'active':''}" data-outfit="${item.id}" aria-pressed="${item.id===previewOutfit}" style="--outfit-color:${item.color}"><span class="outfit-art">${portrait(cat,'','lazy',item.id)}</span><span class="outfit-category">${item.category}</span><b>${item.shortName}</b><span class="outfit-card-footer"><small>${item.fabric}</small><span>${game.state.wardrobe.owned.includes(item.id)?`${icon('check')} 보유 중`:`${icon('coin')} ${item.price}`}</span></span></button>`).join('')}</div><button class="natural-look ${previewOutfit==='none'?'active':''}" data-outfit="none" aria-pressed="${previewOutfit==='none'}">${icon('cat')} 원래 모습도 좋아요 ${previewOutfit==='none'?icon('check'):''}</button><div class="wardrobe-selection"><p>${esc(selected?.description||'가벼운 발걸음과 보드라운 털, 너다운 모습.')}</p><span>지금 입은 옷 · ${outfitById(worn)?.shortName||'장신구 없음'}</span><button class="primary-button wardrobe-apply" data-command="${owned?'equip-outfit':'buy-outfit'}" ${owned&&worn===previewOutfit?'disabled':''}>${icon(owned?'ribbon':'coin')} ${owned?worn===previewOutfit?'지금 이 모습이에요':previewOutfit==='none'?'장신구 벗겨주기':`${cat.name}에게 입혀주기`:`${selected.price}코인으로 옷장에 들이기`} ${icon('arrow')}</button></div><p class="wardrobe-note">${icon('heart')} 우리 집에서도, 다정한 손길을 나눌 때도. 골라 준 옷을 그대로 입고 함께해요.</p></section></div>`;
}

function openWardrobe(){previewOutfit=game.state.cats[game.state.selectedCat].outfit||'none';if(previewOutfit==='none')previewOutfit='ribbon';if(modal.open)closeModal();view='wardrobe';render();window.scrollTo({top:0,behavior:'instant'});}

function toast(message) {
 clearTimeout(toastTimer);
 // Native dialogs occupy the top layer; feedback must live inside it while open.
 const host=modal.open?modal:document.body;host.append($('#toast'));
 $('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast')?.classList.remove('visible'),3800);
}
function sound(kind='soft') {
 if(!game.state.settings.sound) return;
 try { const ctx=sound.ctx||(sound.ctx=new AudioContext()); ctx.resume(); const now=ctx.currentTime; [kind==='purr'?145:523.25,kind==='purr'?148:659.25].forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=f;o.connect(g);g.connect(ctx.destination);g.gain.setValueAtTime(0,now);g.gain.linearRampToValueAtTime(.025,now+.025+i*.07);g.gain.exponentialRampToValueAtTime(.0001,now+.6+i*.07);o.start(now);o.stop(now+.8);}); } catch {}
}
function hearts(target) {
 if(game.state.settings.reducedMotion) return;
 const r=target?.getBoundingClientRect()||{left:innerWidth/2,top:innerHeight/2,width:0};
 for(let i=0;i<7;i++) {const e=document.createElement('span');e.className='floating-heart';e.innerHTML=icon(i%3?'heart':'sparkle');e.style.cssText=`left:${r.left+r.width/2+(Math.random()-.5)*80}px;top:${r.top+30}px;--drift:${(Math.random()-.5)*120}px;animation-delay:${i*.08}s;`;$('#effects').append(e);setTimeout(()=>e.remove(),1800);}
}
function care(action) {
 const name=catData().name,wasResting=game.state.cats[game.state.selectedCat].resting,result=game.act(game.state.selectedCat,action);
 if(result.ok) {sound(action==='pet'?'purr':'soft');hearts($('.scene-cat.selected')||$('.modal-cat-art'));selectedAction=action;clearTimeout(actionTimer);actionTimer=setTimeout(()=>{selectedAction='';if(!modal.open)render();},1700);}
 render();
 const motionAction=({pet:'pet',brush:'brush',feed:'feed',treat:'feed',water:wasResting?null:'drink',stretch:'stretch',sleep:wasResting?'stretch':null})[action];
 if(result.ok&&motionAction)openMoment(motionAction,{message:result.message,storyUnlocked:result.storyUnlocked});
 else if(result.ok&&(action==='blink'||action==='call'))openBondMoment(action,result);
 else {if(modal.open&&modal.dataset.mode==='portrait')renderPortrait(catData());toast(result.message);}
 if(result.storyUnlocked&&!motionAction&&action!=='blink'&&action!=='call')setTimeout(()=>toast(`${name}의 새로운 이야기가 열렸어요. ‘우리의 이야기’를 만나 보세요.`),1600);
}
function openBondMoment(action,result){
 const cat=catData(),room=rooms[game.state.room];
 openModal(`<button class="modal-close" data-command="close" aria-label="순간 닫기">${icon('close')}</button><div class="bond-art"><img class="bond-background" src="assets/backgrounds/${room.asset}" alt=""><span class="bond-kicker">A LITTLE CLOSER TO YOU</span>${portrait(cat,'bond-cat','eager')}</div><div class="bond-copy"><div class="eyebrow">${cat.name}와 마음을 나누는 시간</div><h2 id="modal-title">${action==='blink'?'말없이 전하는, 다정한 인사':'네 이름을 부르는 오후'}</h2><p>${esc(result.message)}</p>${result.storyUnlocked?'<p class="bond-unlocked">새로운 이야기가 열렸어요. 우리 집에서 만나 보세요.</p>':''}<button class="primary-button" data-command="close">${cat.name} 곁으로 ${icon('arrow')}</button></div>`,'bond');
}
function keepToast(){const node=$('#toast');if(node&&modal.contains(node))document.body.append(node);}
function stopMoment(){motionSession++;motionPlayer?.destroy();motionPlayer=null;}
function openModal(content,mode) { if(!modal.open)lastFocus=focusKey();stopMoment();keepToast();modal.dataset.mode=mode;modal.className='modal '+mode+'-modal';modal.innerHTML=content;if(!modal.open)modal.showModal();modal.querySelector('button')?.focus(); }
function closeModal() { if(modal.dataset.mode==='dialogue')game.closeDialogue?.();if(modal.dataset.mode==='play')playSession++;stopMoment();keepToast();modal.close();modal.innerHTML='';render();restoreFocus(lastFocus); }
function openMoment(action,{message='',storyUnlocked=false}={}){
 if(!Object.hasOwn(MOTION_ACTIONS,action))return;
 const cat=catData(),spec=MOTION_ACTIONS[action],outfitId=game.state.cats[cat.id].outfit||'none';
 const moment=resolveMotion(cat.id,action,outfitId),outfit=outfitById(outfitId),illustratedStill=moment.kind==='portrait';
 const title=illustratedStill?'너와 함께, 포근한 오후':spec.title;
 const caption=illustratedStill?`${outfit.shortName} 차림으로, 오늘도 네 곁에서`:spec.caption;
 const description=illustratedStill?`${outfit.shortName} 차림의 ${cat.name}. 함께 보낸 다정한 시간을 한 장의 그림으로 간직해요.`:spec.description;
 const availableActions=Object.entries(MOTION_ACTIONS).filter(([id])=>resolveMotion(cat.id,id,outfitId).kind==='sequence');
 const returnTo=modal.open&&modal.dataset.mode==='portrait'?'portrait':modal.open&&modal.dataset.mode==='motion'?motionReturn:'home';
 openModal(`<button class="modal-close" data-command="close" aria-label="장면 닫기">${icon('close')}</button><section class="motion-visual ${illustratedStill?'motion-still':''}"><canvas class="motion-canvas" role="img" aria-label="${cat.name}${outfit?` · ${outfit.shortName}`:''}의 ${illustratedStill?'착용 일러스트':spec.label}"></canvas><span class="motion-stamp">${icon('heart')} LITTLE MOMENTS WITH ${cat.id.toUpperCase()}</span><p class="motion-frame-caption">${caption}</p><div class="motion-loader" role="status">${icon('paw')}<span>다정한 순간을 준비하고 있어요…</span></div></section><section class="motion-details"><div class="eyebrow">EVERY LITTLE MOVE, EVERY LITTLE LOVE</div><div class="motion-cat-name">${portrait(cat,'','eager')}<span>${cat.name}<small>${esc(cat.personality)}</small></span></div><h2 id="modal-title">${title}</h2>${outfit?`<span class="motion-outfit-label">${icon('ribbon')} ${outfit.shortName}</span>`:''}<p class="motion-description">${description}</p><div class="motion-benefit">${icon(message?'heart':'leaf')}${esc(message||'곁에서 바라보는, 고양이의 작고 다정한 일상.')}${storyUnlocked?'<br>새로운 이야기도 열렸어요. 우리 집에서 만나 보세요.':''}</div><button class="motion-retry" data-command="motion-retry" hidden>${icon('sun')} 그림 다시 불러오기</button><div class="motion-divider"></div><div class="motion-other-actions" role="group" aria-label="다른 동작 감상">${availableActions.map(([id,info])=>`<button data-moment="${id}" class="${id===action?'active':''}" aria-pressed="${id===action}">${icon(info.icon)}${info.label}</button>`).join('')}</div><button class="motion-return" data-command="motion-return">${icon('arrow')} ${returnTo==='portrait'?`${cat.name} 곁으로`:'우리 집으로'}</button></section>`,'motion');
 motionReturn=returnTo;
 motionCareContext={message,storyUnlocked};
 const session=motionSession,reducedMotion=game.state.settings.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches;
 motionPlayer=createMotionPlayer($('.motion-canvas',modal),{catId:cat.id,action,outfitId,reducedMotion,onUpdate:state=>{
   if(session!==motionSession||!modal.open||modal.dataset.mode!=='motion')return;
   const loader=$('.motion-loader',modal),retry=$('[data-command="motion-retry"]',modal);
   loader.hidden=state.ready;
   retry.hidden=!state.error;
   if(state.error){$('span',loader).textContent=state.error;return;}

 }});
}
function returnFromMoment(){if(motionReturn==='portrait'){stopMoment();renderPortrait(catData());}else closeModal();}
function renderPortrait(cat) {
 const c=game.state.cats[cat.id];const room=rooms[game.state.room]||rooms['living-room'];
 const html=`<button class="modal-close" data-command="close" aria-label="닫기">${icon('close')}</button><div class="portrait-stage"><img class="portrait-background" src="assets/backgrounds/${room.asset}" alt=""><span class="portrait-kicker">A MOMENT WITH ${cat.id.toUpperCase()}</span><button class="portrait-touch" data-action="pet" aria-label="${cat.name} 쓰다듬기">${portrait(cat,'modal-cat-art','eager')}</button><span class="portrait-tip">${icon('hand')} 살며시 눌러 쓰다듬어 주세요</span></div><div class="portrait-details"><div class="eyebrow">HELLO, MY LITTLE FRIEND</div><h2 id="modal-title">${cat.name}<span>${esc(cat.breed)}</span></h2><p>${esc(cat.description)}</p><div class="personality-tags"><span>${esc(cat.personality)}</span><span>${esc(Array.isArray(cat.likes)?cat.likes.join(' · '):cat.likes)}</span></div><div class="portrait-mood">${icon('heart')} ${relationship(c)} <b>${Math.round(c.affection)} / 100</b></div><div class="modal-actions">${['pet','feed','play','brush'].map(actionButton).join('')}</div><button class="primary-button" data-story="${cat.id}">${icon('book')} 우리의 이야기 <span>${icon('arrow')}</span></button><button class="portrait-closet" data-command="wardrobe">${icon('ribbon')} ${cat.name} 꾸며주기 ${icon('arrow')}</button><button class="portrait-moments" data-moment="${featuredMoment(cat.id)}">${icon('paw')} 움직이는 작은 순간들 ${icon('arrow')}</button></div>`;
 if(modal.open && modal.dataset.mode==='portrait'){const prev=document.activeElement?.dataset.action;keepToast();modal.innerHTML=html;if(prev)modal.querySelector(`[data-action="${prev}"]`)?.focus({preventScroll:true});}else openModal(html,'portrait');
}
function openStory(id) {const result=game.unlockStory(id);if(!result.ok) {toast(result.message);return;} sound();renderDialogue();}
function renderDialogue() {
 const d=game.state.dialogue;if(!d)return;const cat=catData(d.catId),line=d.lines[d.index];if(!line)return;
 const memory=d.index===d.lines.length-1?memoryIllustrations[cat.id]:null;
 const source=memory?.source||`assets/backgrounds/${(rooms[game.state.room]||rooms['living-room']).asset}`;
 const content=`<button class="modal-close" data-command="close" aria-label="이야기 나가기">${icon('close')}</button><img class="cutscene-background" src="${source}" alt="${esc(memory?.alt||`${cat.name}와 함께하는 순간`)}" style="object-position:${memory?.position||'center'}"><div class="cutscene-film"></div><div class="cutscene-title"><span>${esc(cat.name)}의 이야기</span><h2 id="modal-title">${esc(cat.story.title)}</h2></div>${memory?'':portrait(cat,'cutscene-cat','eager')}<div class="dialogue-box"><div class="dialogue-speaker">${esc(line.speaker||cat.name)}</div><p class="dialogue-text">${esc(line.text)}</p>${line.choices?.length?`<div class="dialogue-choices">${line.choices.map((c,i)=>`<button data-choice="${i}">${esc(c.text)} ${icon('arrow')}</button>`).join('')}</div>`:`<button class="dialogue-next" data-command="dialogue-next">${d.index===d.lines.length-1?'이 순간을 간직하기':'다음'} ${icon('arrow')}</button>`}<span class="dialogue-page">${String(d.index+1).padStart(2,'0')} / ${String(d.lines.length).padStart(2,'0')}</span></div>`;
 if(modal.open&&modal.dataset.mode==='dialogue') {keepToast();modal.innerHTML=content;modal.querySelector('[data-choice],.dialogue-next')?.focus();} else openModal(content,'dialogue');
}
function advanceStory(choice) {const result=game.advanceDialogue(choice);if(result?.message)toast(result.message);if(!game.state.dialogue){closeModal();sound();}else renderDialogue();}
function startPlay() {
 const cat=catData(),c=game.state.cats[cat.id];
 if(c.resting||c.energy<25||c.hunger<18||c.stimulation>=78){care('play');return;}
 playSession++;playCount=0;playCatId=cat.id;
 openModal(`<button class="modal-close" data-command="close" aria-label="놀이 나가기">${icon('close')}</button><img class="play-background" src="assets/backgrounds/${rooms[game.state.room].asset}" alt=""><div class="play-heading"><div class="eyebrow">A LITTLE HUNTING ADVENTURE</div><h2 id="modal-title">${cat.name}와 깃털 사냥</h2><p>움직이는 깃털을 세 번 눌러 함께 잡아 주세요.</p><span class="play-progress">${[0,1,2].map(i=>`<i data-catch-dot="${i}">${icon('paw')}</i>`).join('')}</span></div><div class="play-cat">${portrait(cat,'','eager')}</div><button class="feather-target" data-command="catch-toy" aria-label="깃털 잡기, 3번 중 1번째" style="left:70%;top:45%">${icon('toy')}<span>잡았다냥!</span></button><div class="play-hint">${icon('hand')} 마지막에는 꼭 사냥에 성공하게 해 주세요.</div>`,'play');
 modal.querySelector('.feather-target').focus();
}
function catchToy(){
 if(modal.dataset.mode!=='play'||playCount>=3)return;
 playCount++;sound();modal.querySelector(`[data-catch-dot="${playCount-1}"]`).classList.add('caught');
 const pos=[[28,55],[65,61],[50,45]][playCount-1],target=modal.querySelector('.feather-target'),cat=modal.querySelector('.play-cat');
 target.style.left=pos[0]+'%';target.style.top=pos[1]+'%';target.setAttribute('aria-label',`깃털 잡기, 3번 중 ${Math.min(3,playCount+1)}번째`);
 cat.style.left=(pos[0]-18)+'%';cat.classList.remove('pouncing');void cat.offsetWidth;cat.classList.add('pouncing');
 if(playCount===3){const session=playSession;target.disabled=true;modal.querySelector('.play-heading p').textContent='잡았다! 함께해서 더 즐거운 사냥이었어요.';setTimeout(()=>{if(!modal.open||modal.dataset.mode!=='play'||playSession!==session||playCount!==3)return;closeModal();game.selectCat(playCatId);care('play');},650);}
}
function settings() {openModal(`<button class="modal-close" data-command="close" aria-label="닫기">${icon('close')}</button><div class="eyebrow">MAKE YOURSELF AT HOME</div><h2 id="modal-title">우리 집의 작은 설정</h2><p class="settings-intro">당신에게 편안한 오후를 만들어 보세요.</p><label class="setting-row"><span>${icon('sound')} 돌봄 효과음 <small>작고 부드러운 알림 소리</small></span><input type="checkbox" data-setting="sound" ${game.state.settings.sound?'checked':''}></label><label class="setting-row"><span>${icon('leaf')} 움직임 줄이기 <small>고양이와 화면 효과를 차분하게</small></span><input type="checkbox" data-setting="reducedMotion" ${game.state.settings.reducedMotion?'checked':''}></label><div class="settings-save">${icon('check')} ${game.saveStatus?.ok===false?'지금은 브라우저 저장 공간을 사용할 수 없어요.<br>브라우저를 닫으면 진행 상황이 사라질 수 있어요.':'진행 상황은 이 브라우저에 자동으로 저장돼요.<br>잠시 자리를 비워도 고양이들은 당신을 기다려요.'}</div><button class="primary-button" data-command="save">지금 저장하기 ${icon('check')}</button>`,'settings');}
function help() {openModal(`<button class="modal-close" data-command="close" aria-label="닫기">${icon('close')}</button><div class="eyebrow">A SLOW BEGINNING</div><h2 id="modal-title">우리, 천천히 친해져요.</h2><div class="help-steps"><p><b>01 · 친구를 골라 주세요</b>아래 고양이 카드에서 함께할 친구를 선택해요. 방 안의 고양이를 누르면 일러스트를 크게 볼 수 있어요.</p><p><b>02 · 마음과 몸을 살펴 주세요</b>밥과 물, 놀이와 휴식, 빗질과 청소. 수치가 낮아지면 그에 맞는 돌봄을 해 주세요. 졸릴 땐 충분히 쉬도록 기다려요.</p><p><b>03 · 우리만의 이야기를 만나요</b>다정한 돌봄으로 친밀도 24를 채우면 이야기가 열려요. 선택지를 골라 대화하고 추억을 앨범에 간직해요.</p><p><b>04 · 내일도, 함께해요</b>시간은 천천히 흐르고, 기록은 자동 저장돼요. 오늘의 약속과 선물로 코인을 받아 필요한 물건을 살 수 있어요.</p></div><button class="primary-button" data-command="close">친구들 만나러 가기 ${icon('arrow')}</button>`,'settings');}

document.addEventListener('click',e=>{
 const el=e.target.closest('button,a[data-view]');if(!el)return;
 if(el.dataset.view){e.preventDefault();if(el.dataset.view==='wardrobe'){openWardrobe();return;}view=el.dataset.view;render();window.scrollTo({top:0,behavior:'instant'});return;}
 if(el.dataset.room){game.setRoom(el.dataset.room);render();return;}
 if(el.dataset.selectCat){game.selectCat(el.dataset.selectCat);view='home';render();sound();return;}
 if(el.dataset.catOpen){game.selectCat(el.dataset.catOpen);render();renderPortrait(catData());return;}
 if(el.dataset.action){if(el.dataset.action==='play')startPlay();else care(el.dataset.action);return;}
 if(el.dataset.moment){openMoment(el.dataset.moment);return;}
 if(el.dataset.wardrobeCat){game.selectCat(el.dataset.wardrobeCat);render();return;}
 if(el.dataset.outfit){if(el.dataset.outfit==='none'||outfitById(el.dataset.outfit)){previewOutfit=el.dataset.outfit;render();}return;}
 if(el.dataset.story){openStory(el.dataset.story);return;}
 if(el.dataset.purchase){const r=game.purchase(el.dataset.purchase);toast(r.message);if(r.ok)sound();render();return;}
 if(el.dataset.filter){filter=el.dataset.filter;render();return;}
 if(el.dataset.choice!==undefined){advanceStory(Number(el.dataset.choice));return;}
 switch(el.dataset.command){
 case 'wardrobe':openWardrobe();break;
 case 'buy-outfit':{const result=game.purchaseOutfit(previewOutfit);render();toast(result.message);if(result.ok){$('.wardrobe-apply')?.focus({preventScroll:true});sound();}break;}
 case 'equip-outfit':{const result=game.equipOutfit(game.state.selectedCat,previewOutfit);render();toast(result.message);if(result.ok)sound();break;}
 case 'motion-retry':if(motionPlayer?.state.error)openMoment(motionPlayer.state.action,motionCareContext);break;
 case 'motion-return':returnFromMoment();break;
 case 'catch-toy':catchToy();break;case 'close':closeModal();break;case 'settings':settings();break;case 'help':help();break;
 case 'save':{const result=game.save();toast(result?.ok===false?'저장 공간을 확인해 주세요. 지금은 화면 안에서 계속 플레이할 수 있어요.':'우리의 하루를 안전하게 기록했어요.');break;}
 case 'daily':{const r=game.claimDailyReward();toast(r.message);if(r.ok)sound();render();break;}
 case 'sound':game.setSetting('sound',!game.state.settings.sound);sound();render();break;
 case 'scene-photo':openModal(`<button class="modal-close" data-command="close" aria-label="닫기">${icon('close')}</button><h2 class="sr-only" id="modal-title">${rooms[game.state.room].name} 크게 보기</h2><div class="room-scene full-scene"><img class="room-background" src="assets/backgrounds/${rooms[game.state.room].asset}" alt="${rooms[game.state.room].name}">${sceneCats(catData())}</div>`,'scene');break;
 case 'dialogue-next':advanceStory();break;
 }
});
document.addEventListener('change',e=>{if(e.target.dataset.setting){game.setSetting(e.target.dataset.setting,e.target.checked);document.documentElement.classList.toggle('reduced-motion',game.state.settings.reducedMotion);sound();}});
modal.addEventListener('cancel',e=>{e.preventDefault();closeModal();});
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});
document.addEventListener('keydown',e=>{if(modal.open&&modal.dataset.mode==='dialogue'&&(e.key===' '||e.key==='Enter')&&e.target===document.body&&!game.state.dialogue.lines[game.state.dialogue.index].choices){e.preventDefault();advanceStory();}});
let lastTick=performance.now(),renderElapsed=0;
setInterval(()=>{const now=performance.now(),elapsed=now-lastTick;lastTick=now;if(document.hidden||modal.open)return;game.tick(Math.min(elapsed,5000));renderElapsed+=elapsed;if(renderElapsed>=10000){renderElapsed=0;render();}else {const clock=$('.scene-clock span');if(clock)clock.textContent=timeText();}},1000);
document.addEventListener('visibilitychange',()=>{lastTick=performance.now();if(document.hidden)game.save();});
window.addEventListener('pagehide',()=>game.save());
window.render_game_to_text=()=>JSON.stringify({view,room:game.state.room,day:game.state.day,time:timeText(),selectedCat:game.state.selectedCat,cat:game.state.cats[game.state.selectedCat],coins:game.state.coins,inventory:game.state.inventory,wardrobe:game.state.wardrobe,previewOutfit:view==='wardrobe'?previewOutfit:null,quests:game.state.quests,album:game.state.album,dialogue:game.state.dialogue?{cat:game.state.dialogue.catId,index:game.state.dialogue.index}:null,play:modal.open&&modal.dataset.mode==='play'?{catId:playCatId,catches:playCount}:null,motion:motionPlayer?.state||null,modal:modal.open?modal.dataset.mode:null,coordinateSystem:'DOM: origin top-left, x right, y down; click cat cards to select and room cats for illustration'});
window.advanceTime=ms=>{if(modal.open&&modal.dataset.mode==='motion')motionPlayer?.advance(ms);else{game.tick(ms);render();}return window.render_game_to_text();};
render();
