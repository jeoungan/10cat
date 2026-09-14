import { OUTFITS,outfitById } from './wardrobe.js';
/** The small, persistent simulation behind 나의 작은 고양이집. */
export const SAVE_KEY = 'little-cat-house.v1';
export const STORY_AFFECTION = 24;
export const GAME_MINUTES_PER_SECOND = 1;

const story = (title, subtitle, lines) => ({ title, subtitle, lines });
const PREFERRED_CARE = {
  bori: { action: 'play', response: '보리는 깃털을 따라 폴짝 뛰더니 햇살 속에서 꼬리를 높이 세웠어요.' },
  mochi: { action: 'brush', response: '모찌는 빗이 닿을 때마다 구름 같은 털을 맡기며 눈을 스르르 감았어요.' },
  luna: { action: 'pet', response: '루나는 손등에 뺨을 살짝 기대고 아주 천천히 눈을 깜빡였어요.' },
  nabi: { action: 'play', response: '나비는 상자 뒤에 숨어 있다가 의기양양하게 장난감을 덮쳤어요.' },
  siru: { action: 'pet', response: '시루는 파란 눈을 가늘게 접고 당신의 손바닥에 턱을 올렸어요.' },
  oreo: { action: 'play', response: '오레오는 하얀 양말발로 장난감을 톡톡 건드리며 한 번 더 놀자고 했어요.' },
  miso: { action: 'play', response: '미소는 날렵하게 마지막 깃털을 잡고 작은 사냥꾼처럼 가슴을 폈어요.' },
  hodu: { action: 'brush', response: '호두는 커다란 앞발을 가지런히 모으고 작은 새 같은 소리로 답했어요.' },
  byeol: { action: 'water', response: '별이는 새 물을 찹찹 마신 뒤 고맙다는 듯 긴 울음소리를 들려주었어요.' },
  bam: { action: 'pet', response: '밤이는 조심스럽게 한 걸음 다가와 검은 꼬리로 당신의 손목을 감쌌어요.' },
};
export const CATS = [
  {
    id: 'bori', name: '보리', breed: '코리안 쇼트헤어 · 치즈 태비', personality: '햇살 같은 장난꾸러기',
    description: '햇볕이 가장 먼저 닿는 자리에는 언제나 보리가 있어요. 호기심이 많고, 당신이 하는 모든 일에 앞발을 보탭니다.',
    likes: '깃털 장난감, 따뜻한 창가', color: '#c99456', portrait: 'assets/cats/bori.png',
    story: story('햇살을 나누는 방법', '보리와의 첫 번째 기억', [
      { speaker: '나', text: '오후의 햇살이 바닥에 작은 네모를 만들었다. 보리는 그 한가운데서 꼬리를 살랑거렸다.' },
      { speaker: '보리', text: '냐아… 야옹.' },
      { speaker: '나', text: '내가 다가가자 보리는 몸을 조금 옮겼다. 마치 내 자리도 남겨 두었다는 것처럼.', choices: [{ text: '옆에 앉아 함께 햇볕을 쬔다', affection: 5, response: '옆자리에 앉자 보리가 길게 기지개를 켜고 내 무릎에 앞발을 살포시 얹었다.' }, { text: '손을 내밀고 보리가 다가오길 기다린다', affection: 5, response: '가만히 기다리자 보리가 손끝 냄새를 맡더니 스스로 이마를 내 손바닥에 밀어 넣었다.' }] },
      { speaker: '나', text: '따뜻한 털이 손등에 닿았다. 작고 조용한 골골송. 이 집이 조금 더 집처럼 느껴진 순간이었다.' },
    ]),
  },
  {
    id: 'mochi', name: '모찌', breed: '페르시안 · 화이트', personality: '느긋한 작은 구름',
    description: '폭신한 쿠션과 정갈한 털을 사랑하는 고양이. 서두르지 않고 기다려 주면 모찌만의 속도로 마음을 열어요.',
    likes: '부드러운 빗질, 폭신한 쿠션', color: '#baaab7', portrait: 'assets/cats/mochi.png',
    story: story('구름 한 조각의 무게', '모찌와의 첫 번째 기억', [
      { speaker: '나', text: '빗을 꺼내자 모찌는 못 본 척 고개를 돌렸다. 하지만 꼬리 끝은 조심스럽게 내 쪽을 향하고 있었다.' },
      { speaker: '모찌', text: '므르르…' },
      { speaker: '나', text: '오늘은 어떻게 시작하면 좋을까?', choices: [{ text: '빗 냄새부터 맡게 해 준다', affection: 5, response: '빗을 낮게 내밀자 모찌가 분홍 코를 가까이 대고 킁킁거리더니 빗등에 뺨을 비볐다.' }, { text: '옆에서 편해질 때까지 기다린다', affection: 5, response: '빗을 내려놓고 기다리는 동안 모찌의 꼬리 끝의 움직임이 잦아들었고, 이내 하얀 앞발이 내 쪽으로 뻗어 왔다.' }] },
      { speaker: '나', text: '잠시 뒤, 모찌가 내 무릎에 턱을 올렸다. 가벼운 구름 한 조각이 마음 위에 내려앉았다.' },
    ]),
  },
  {
    id: 'luna', name: '루나', breed: '브리티시 쇼트헤어 · 블루', personality: '조용하고 다정한 관찰자',
    description: '조금 떨어진 곳에서 당신을 지켜보지만, 방을 옮기면 어느새 따라와 있어요. 곁을 내어 주는 방식이 수줍을 뿐이에요.',
    likes: '조용한 독서 시간, 천천히 눈 깜빡이기', color: '#85939e', portrait: 'assets/cats/luna.png',
    story: story('달빛 아래의 인사', '루나와의 첫 번째 기억', [
      { speaker: '나', text: '책장을 넘기는 소리만 들리는 밤. 루나가 맞은편 의자에 앉아 나를 바라보았다.' },
      { speaker: '루나', text: '…냐.' },
      { speaker: '나', text: '루나의 눈이 천천히 감겼다.', choices: [{ text: '나도 천천히 눈을 깜빡인다', affection: 5, response: '눈을 느리게 감았다 뜨자 루나도 다시 눈을 가늘게 접으며 수염의 힘을 풀었다.' }, { text: '작은 목소리로 잘 자라고 말한다', affection: 5, response: '잘 자라는 속삭임에 루나의 귀가 내 쪽으로 향했고, 목 안에서 짧고 낮은 대답이 흘러나왔다.' }] },
      { speaker: '나', text: '루나는 눈을 감고 식빵처럼 앞발을 접었다. 서로에게 건넨 인사 하나로도 충분한 밤이었다.' },
    ]),
  },
  {
    id: 'nabi', name: '나비', breed: '코리안 쇼트헤어 · 삼색', personality: '당당한 집 안의 탐험가',
    description: '새로운 상자는 꼭 직접 검사해야 직성이 풀려요. 당당하게 집을 탐험하다가도 낯선 소리가 나면 당신 뒤로 숨어요.',
    likes: '종이 상자, 숨바꼭질', color: '#ba8169', portrait: 'assets/cats/nabi.png',
    story: story('상자 속 작은 우주', '나비와의 첫 번째 기억', [
      { speaker: '나', text: '비어 있는 택배 상자가 어느새 나비의 새 집이 되었다. 둥근 눈 두 개가 상자 밖을 살폈다.' },
      { speaker: '나비', text: '냐앙!' },
      { speaker: '나', text: '앞발이 상자 가장자리를 톡톡 두드린다.', choices: [{ text: '상자 옆에 종이 공을 굴린다', affection: 5, response: '굴러가는 종이 공을 향해 하얀 앞발이 쏙 나왔다. 나비는 공을 상자 안으로 끌어안고 눈을 반짝였다.' }, { text: '입구에 작은 담요를 놓아 준다', affection: 5, response: '담요를 내려놓자 나비가 앞발로 꾹꾹 눌러 보더니 상자 안쪽으로 조금씩 끌어당겼다.' }] },
      { speaker: '나', text: '나비는 상자 안에서 느긋하게 몸을 뒤집었다. 우주가 이렇게 작아도, 안심할 곳이 있으면 충분한 모양이다.' },
    ]),
  },
  {
    id: 'siru', name: '시루', breed: '랙돌 · 실 포인트 바이컬러', personality: '곁에 머무는 순한 친구',
    description: '파란 눈으로 당신의 하루를 궁금해하는 고양이. 가까이 앉아 있는 것을 좋아하고, 부드럽게 불러 주면 귀를 쫑긋해요.',
    likes: '함께 쉬기, 턱 아래 쓰다듬기', color: '#93adb4', portrait: 'assets/cats/siru.png',
    story: story('오늘도 수고했어', '시루와의 첫 번째 기억', [
      { speaker: '나', text: '길었던 하루가 끝나고 소파에 앉았다. 시루는 내 표정을 한참 살피더니 천천히 다가왔다.' },
      { speaker: '시루', text: '먀아…' },
      { speaker: '나', text: '작은 이마가 내 손에 살짝 닿았다.', choices: [{ text: '턱 아래를 조심스럽게 쓰다듬는다', affection: 5, response: '손끝이 턱 아래에 닿자 시루가 고개를 살짝 들고 목을 맡겼다. 손바닥으로 낮은 진동이 전해졌다.' }, { text: '오늘 있었던 일을 조용히 들려준다', affection: 5, response: '하루 이야기를 작은 목소리로 꺼내자 시루가 옆에 몸을 누이고 내 말소리 쪽으로 귀를 기울였다.' }] },
      { speaker: '나', text: '시루는 대답 대신 눈을 가늘게 접었다. 누군가 곁에 있다는 사실만으로 하루가 부드러워졌다.' },
    ]),
  },
  {
    id: 'oreo', name: '오레오', breed: '코리안 쇼트헤어 · 턱시도', personality: '호기심 많은 꼬마 신사',
    description: '하얀 양말을 신고 집 안을 바쁘게 누벼요. 물건을 떨어뜨린 뒤 모른 척하는 연기는 아직 서툴지만 애교만큼은 능숙해요.',
    likes: '움직이는 깃털, 수도꼭지 구경', color: '#797a80', portrait: 'assets/cats/oreo.png',
    story: story('작은 신사의 선물', '오레오와의 첫 번째 기억', [
      { speaker: '나', text: '책상 아래에서 바스락 소리가 났다. 오레오가 장난감 쥐를 물고 당당하게 걸어 나왔다.' },
      { speaker: '오레오', text: '므앙!' },
      { speaker: '나', text: '내 발 앞에 놓인 작은 선물. 기대하는 눈빛이 반짝였다.', choices: [{ text: '고맙다고 말하고 함께 논다', affection: 5, response: '장난감 쥐를 살짝 굴리자 오레오가 몸을 낮추고 달려들었다. 곧 다시 내 앞에 가져다 놓았다.' }, { text: '선물을 쓰다듬고 오레오를 칭찬한다', affection: 5, response: '소중히 장난감을 어루만지며 고맙다고 하자 오레오가 꼬리를 세우고 내 손등에 코를 톡 댔다.' }] },
      { speaker: '나', text: '하얀 양말이 신나게 바닥을 디뎠다. 오레오가 건넨 것은 장난감보다 조금 더 큰 마음이었다.' },
    ]),
  },
  {
    id: 'miso', name: '미소', breed: '벵갈 · 브라운 스폿', personality: '에너지가 넘치는 운동 선수',
    description: '높은 곳에서 세상을 내려다보는 것을 좋아해요. 충분히 뛰어놀고 나면 누구보다 만족스러운 얼굴로 잠이 들어요.',
    likes: '낚싯대 놀이, 높은 캣타워', color: '#ac8956', portrait: 'assets/cats/miso.png',
    story: story('우리만의 정글', '미소와의 첫 번째 기억', [
      { speaker: '나', text: '캣타워 꼭대기의 미소가 몸을 낮췄다. 깃털이 움직일 때마다 어깨가 작게 들썩였다.' },
      { speaker: '미소', text: '카카… 냥!' },
      { speaker: '나', text: '마지막 사냥감을 향해 눈이 반짝인다.', choices: [{ text: '깃털을 잡게 해 주고 놀이를 마친다', affection: 5, response: '가까이 내려놓은 깃털을 미소가 두 앞발로 꼭 붙잡았다. 장난감을 가만히 두자 바쁘던 꼬리도 천천히 멈췄다.' }, { text: '바닥으로 유도해 안전하게 잡게 한다', affection: 5, response: '깃털을 낮게 움직이자 미소가 캣타워의 낮은 발판을 차례로 내려왔다. 바닥에 도착한 앞발이 깃털을 덮쳤다.' }] },
      { speaker: '나', text: '사냥에 성공한 미소가 기지개를 켰다. 정글의 작은 맹수도 오늘은 내 곁에서 낮잠을 자고 싶단다.' },
    ]),
  },
  {
    id: 'hodu', name: '호두', breed: '메인쿤 · 브라운 태비', personality: '듬직하고 상냥한 거인',
    description: '커다란 몸에 작은 목소리를 가진 다정한 고양이. 긴 꼬리를 살랑거리며 집 안 친구들의 소란을 느긋하게 지켜봐요.',
    likes: '넓은 방석, 긴 털 빗질', color: '#9d806c', portrait: 'assets/cats/hodu.png',
    story: story('커다란 마음의 자리', '호두와의 첫 번째 기억', [
      { speaker: '나', text: '새 방석을 펼치기도 전에 호두가 다가왔다. 커다란 앞발로 폭신함을 꼼꼼히 확인한다.' },
      { speaker: '호두', text: '삐르르…' },
      { speaker: '나', text: '호두가 방석 한쪽을 비워 두고 나를 올려다본다.', choices: [{ text: '옆에 앉아 긴 털을 정돈해 준다', affection: 5, response: '결을 따라 긴 털을 살살 정돈하자 호두가 턱을 들었다. 커다란 꼬리 끝이 방석을 느긋하게 쓸었다.' }, { text: '따뜻한 손을 옆에 가만히 놓는다', affection: 5, response: '방석 위에 손을 편 채 기다리자 호두가 넓은 앞발을 그 옆에 나란히 놓고 손끝 냄새를 맡았다.' }] },
      { speaker: '나', text: '커다란 몸이 손끝에 조심스럽게 기대었다. 호두는 자신의 크기보다 더 넓은 자리를 마음에 내어 주었다.' },
    ]),
  },
  {
    id: 'byeol', name: '별이', breed: '샴 · 실 포인트', personality: '할 말이 많은 수다쟁이',
    description: '눈을 맞추면 꼭 이야기를 들려줘요. 당신의 대답이 마음에 들면 꼬리를 높이 세우고 자랑스럽게 앞장서요.',
    likes: '대화하기, 함께 집 구경하기', color: '#a18f85', portrait: 'assets/cats/byeol.png',
    story: story('세상에서 작은 대화', '별이와의 첫 번째 기억', [
      { speaker: '나', text: '물을 갈아 주는 동안 별이는 오늘 있었던 일을 쉴 새 없이 이야기했다. 적어도 내게는 그렇게 들렸다.' },
      { speaker: '별이', text: '야옹, 먀아앙. 냥!' },
      { speaker: '나', text: '별이가 대답을 기다리며 고개를 기울였다.', choices: [{ text: '그랬구나, 하고 다정하게 대답한다', affection: 5, response: '그랬구나, 하고 대답하자 별이가 고개를 더 기울였다. 짧은 야옹 하나가 우리의 말 사이를 이었다.' }, { text: '눈을 맞추고 이야기를 끝까지 듣는다', affection: 5, response: '부드럽게 시선을 맞추고 기다리자 별이의 긴 울음이 짧아졌다. 마지막 냥 소리 뒤로 꼬리가 둥글게 휘었다.' }] },
      { speaker: '나', text: '별이는 만족스러운 소리를 내며 내 발에 뺨을 비볐다. 서로의 언어를 몰라도 나눌 수 있는 이야기가 있다.' },
    ]),
  },
  {
    id: 'bam', name: '밤이', breed: '봄베이 · 블랙', personality: '천천히 다가오는 다정함',
    description: '검은 벨벳 같은 털과 금빛 눈을 가진 고양이. 처음에는 숨지만 익숙한 목소리가 들리면 조용히 모습을 드러내요.',
    likes: '아늑한 숨숨집, 조용한 밤', color: '#696576', portrait: 'assets/cats/bam.png',
    story: story('어둠 속의 금빛 별', '밤이와의 첫 번째 기억', [
      { speaker: '나', text: '불을 하나만 남겨 둔 거실. 숨숨집 안에서 밤이의 금빛 눈이 반짝였다.' },
      { speaker: '밤이', text: '…미야.' },
      { speaker: '나', text: '오늘은 앞발 하나가 밖으로 나와 있었다.', choices: [{ text: '거리를 두고 바닥에 조용히 앉는다', affection: 5, response: '조금 떨어져 앉아 시선을 낮추자 숨숨집 밖으로 두 번째 앞발이 나왔다. 밤이가 멈췄다 걷기를 반복하며 가까워졌다.' }, { text: '작은 목소리로 이름을 불러 준다', affection: 5, response: '익숙한 이름을 낮게 부르자 어둠 속 귀가 쫑긋 섰다. 밤이가 짧게 울고는 목소리가 들리는 쪽으로 조심조심 걸어왔다.' }] },
      { speaker: '나', text: '얼마나 지났을까. 검은 꼬리가 내 발목을 감쌌다. 기다림 끝에 찾아온 작은 용기가 오래도록 따뜻했다.' },
    ]),
  },
].map(cat => ({ ...cat, storyUnlockAffection: STORY_AFFECTION, preferredAction: PREFERRED_CARE[cat.id].action, preferredResponse: PREFERRED_CARE[cat.id].response }));

function storyLinesFor(cat, choiceIndex = null) {
  const choicePage = cat.story.lines.findIndex(line => line.choices);
  const response = Number.isInteger(choiceIndex) ? cat.story.lines[choicePage]?.choices[choiceIndex]?.response : null;
  // Build each reading from trusted story data; never change the shared story or use saved text.
  return cat.story.lines.map((line, index) => response && index === choicePage + 1
    ? { ...line, text: `${response} ${line.text}` }
    : { ...line });
}

export const ACTIONS = [
  { id: 'feed', label: '밥 주기', icon: 'bowl', description: '균형 잡힌 한 끼 · 사료 1개' },
  { id: 'water', label: '물 갈아주기', icon: 'water', description: '깨끗한 물로 갈증을 달래요' },
  { id: 'play', label: '함께 놀기', icon: 'toy', description: '깃털을 잡으며 신나게 놀아요' },
  { id: 'pet', label: '쓰다듬기', icon: 'heart', description: '고양이의 반응을 보며 살살' },
  { id: 'brush', label: '빗질하기', icon: 'brush', description: '엉킨 털을 부드럽게 정돈해요' },
  { id: 'clean', label: '화장실 청소', icon: 'sparkle', description: '청결한 화장실로 편안하게' },
  { id: 'sleep', label: '재워주기', icon: 'moon', description: '조용하고 편안한 휴식' },
  { id: 'treat', label: '간식 주기', icon: 'treat', description: '작은 즐거움 · 간식 1개' },
  { id: 'blink', label: '천천히 눈인사', icon: 'heart', description: '시선을 부드럽게, 작은 안심을 건네요' },
  { id: 'call', label: '이름 불러주기', icon: 'bell', description: '익숙한 목소리로 다정하게 불러요' },
  { id: 'stretch', label: '함께 기지개', icon: 'sun', description: '느긋하게 몸을 쭉 펴는 시간' },
];
const SOCIAL_COOLDOWNS={blink:30,call:25,stretch:45};

export const SHOP_ITEMS = [
  { id: 'food_pack', name: '든든한 한 끼', description: '균형 잡힌 고양이 사료 5개', price: 20, icon: 'bowl', item: 'food', quantity: 5 },
  { id: 'treat_pack', name: '작은 행복 간식', description: '고양이가 좋아하는 간식 3개', price: 25, icon: 'treat', item: 'treats', quantity: 3 },
  { id: 'feather_toy', name: '살랑살랑 깃털', description: '새 장난감 1개 · 놀이 보너스', price: 45, icon: 'toy', item: 'toys', quantity: 1 },
];

const CAT_IDS = new Set(CATS.map(cat => cat.id));
const ROOMS = new Set(['living-room', 'bedroom', 'terrace']);
const ACTION_IDS = new Set(ACTIONS.map(action => action.id));
const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));
const number = (value, fallback, min = 0, max = 100) => Number.isFinite(value) ? clamp(value, min, max) : fallback;
const questsForDay = () => [
  { id: 'feed', title: '따뜻한 세 끼', description: '고양이들에게 밥 3번 주기', target: 3, progress: 0, reward: 30, completed: false, claimed: false },
  { id: 'play', title: '오늘도 신나게', description: '고양이들과 2번 놀기', target: 2, progress: 0, reward: 25, completed: false, claimed: false },
  { id: 'clean', title: '보송보송 우리 집', description: '화장실 1번 청소하기', target: 1, progress: 0, reward: 20, completed: false, claimed: false },
];

function freshState() {
  return {
    version: 1, selectedCat: 'bori', room: 'living-room', coins: 160, day: 1, minute: 540,
    cats: Object.fromEntries(CATS.map((cat, i) => [cat.id, {
      hunger: 66 + i % 4 * 4, water: 73 + i % 3 * 5, energy: 74 + i % 4 * 4,
      cleanliness: 72 + i % 5 * 4, happiness: 72 + i % 3 * 6, health: 96,
      affection: i === 0 ? 22 : 14 + i % 4 * 2, resting: false, stimulation: 0,
      interactions: 0, treatsToday: 0, outfit:'none', socialCooldowns:{blink:0,call:0,stretch:0},
    }])),
    inventory: { food: 15, treats: 6, toys: 1 }, wardrobe:{owned:['ribbon']}, quests: questsForDay(), album: [],
    journal: [{ id: 'welcome', type: 'welcome', catId: 'bori', day: 1, minute: 540, text: '열 마리의 작은 가족과 함께하는 첫날. 보리가 반갑게 다가왔어요.' }],
    dialogue: null, settings: { sound: false, reducedMotion: false }, dailyRewardClaimed: false, pantrySupportClaimed: false,
    totalInteractions: 0, lastSaved: Date.now(),
  };
}

function restoreState(raw) {
  const base = freshState();
  if (!raw || raw.version !== 1 || typeof raw.cats !== 'object') return base;
  base.selectedCat = CAT_IDS.has(raw.selectedCat) ? raw.selectedCat : base.selectedCat;
  base.room = ROOMS.has(raw.room) ? raw.room : base.room;
  base.coins = number(raw.coins, base.coins, 0, 999999);
  base.day = Math.floor(number(raw.day, 1, 1, 999999));
  base.minute = number(raw.minute, 540, 0, 1439.99999);
  base.wardrobe.owned=['ribbon',...OUTFITS.filter(item=>item.id!=='ribbon'&&Array.isArray(raw.wardrobe?.owned)&&raw.wardrobe.owned.includes(item.id)).map(item=>item.id)];
  for (const id of CAT_IDS) {
    const saved = raw.cats?.[id];
    if (!saved || typeof saved !== 'object') continue;
    for (const key of ['hunger', 'water', 'energy', 'cleanliness', 'happiness', 'health', 'affection', 'stimulation']) {
      base.cats[id][key] = number(saved[key], base.cats[id][key]);
    }
    base.cats[id].resting = saved.resting === true;
    base.cats[id].interactions = Math.floor(number(saved.interactions, 0, 0, 999999));
    base.cats[id].treatsToday = Math.floor(number(saved.treatsToday, 0, 0, 3));
    base.cats[id].outfit=base.wardrobe.owned.includes(saved.outfit)?saved.outfit:'none';
    for(const action of Object.keys(SOCIAL_COOLDOWNS))base.cats[id].socialCooldowns[action]=number(saved.socialCooldowns?.[action],0,0,SOCIAL_COOLDOWNS[action]);
  }
  for (const key of ['food', 'treats', 'toys']) base.inventory[key] = Math.floor(number(raw.inventory?.[key], base.inventory[key], 0, 9999));
  for (const quest of base.quests) {
    const saved = Array.isArray(raw.quests) && raw.quests.find(item => item?.id === quest.id);
    quest.progress = Math.floor(number(saved?.progress, 0, 0, quest.target));
    quest.completed = quest.progress >= quest.target;
    quest.claimed = quest.completed;
  }
  if (Array.isArray(raw.album)) {
    base.album = [...new Map(raw.album.filter(item => item && CAT_IDS.has(item.catId)).map(item => [item.catId, {
      catId: item.catId, title: CATS.find(cat => cat.id === item.catId).story.title,
      unlockedAt: number(item.unlockedAt, Date.now(), 0, Number.MAX_SAFE_INTEGER),
      day: number(item.day, 1, 1, 999999),
    }])).values()];
  }
  if (Array.isArray(raw.journal)) {
    const safe = raw.journal.filter(entry => entry && typeof entry.text === 'string').slice(0, 60).map((entry, index) => ({
      id: typeof entry.id === 'string' ? entry.id.slice(0, 100) : `restored-${index}`,
      type: typeof entry.type === 'string' ? entry.type.slice(0, 30) : 'care',
      catId: CAT_IDS.has(entry.catId) ? entry.catId : null,
      day: number(entry.day, 1, 1, 999999), minute: number(entry.minute, 540, 0, 1440), text: entry.text.slice(0, 500),
    }));
    if (safe.length) base.journal = safe;
  }
  base.settings.sound = raw.settings?.sound === true;
  base.settings.reducedMotion = raw.settings?.reducedMotion === true;
  base.dailyRewardClaimed = raw.dailyRewardClaimed === true;
  base.pantrySupportClaimed = raw.pantrySupportClaimed === true;
  base.totalInteractions = Math.floor(number(raw.totalInteractions, 0, 0, 999999));
  base.lastSaved = number(raw.lastSaved, Date.now(), 0, Number.MAX_SAFE_INTEGER);
  // Restore the current page, but never trust saved dialogue content or replay its choices.
  if (raw.dialogue && CAT_IDS.has(raw.dialogue.catId)) {
    const cat = CATS.find(item => item.id === raw.dialogue.catId);
    if (base.cats[cat.id].affection >= STORY_AFFECTION || base.album.some(item => item.catId === cat.id)) {
      const index = Math.floor(number(raw.dialogue.index, 0, 0, cat.story.lines.length - 1));
      const choicePage = cat.story.lines.findIndex(line => line.choices);
      const savedChoice = raw.dialogue.choiceIndex;
      const choiceIndex = index > choicePage && Number.isInteger(savedChoice) && cat.story.lines[choicePage]?.choices[savedChoice]
        ? savedChoice : null;
      base.dialogue = { catId: cat.id, index, lines: storyLinesFor(cat, choiceIndex), title: cat.story.title, replay: base.album.some(item => item.catId === cat.id), pendingAffection: number(raw.dialogue.pendingAffection, 0, 0, 5), choiceIndex };
    }
  }
  return base;
}

export function createGame(storage) {
  if (storage === undefined) {
    try { storage = globalThis.localStorage; } catch { storage = null; }
  }
  let state = freshState();
  let unsavedMs = 0;
  let logSerial = 0;
  let lastSaveResult = { ok: false, message: '아직 저장하지 않았어요.' };
  try {
    const raw = storage?.getItem(SAVE_KEY);
    if (raw) state = restoreState(JSON.parse(raw));
  } catch { /* Private browsing, malformed saves and storage limits must not stop play. */ }

  const fail = message => ({ ok: false, message });
  function addLog(text, catId = null, type = 'care') {
    state.journal.unshift({ id: `${Date.now()}-${++logSerial}`, text, catId, type, day: state.day, minute: state.minute });
    state.journal.length = Math.min(state.journal.length, 60);
  }
  function save() {
    try {
      if (typeof storage?.setItem !== 'function') {
        lastSaveResult = fail('이 브라우저에서는 저장 공간을 사용할 수 없어요. 지금은 계속 놀 수 있어요.');
        return lastSaveResult;
      }
      const savedAt = Date.now();
      storage.setItem(SAVE_KEY, JSON.stringify({ ...state, lastSaved: savedAt }));
      state.lastSaved = savedAt;
      lastSaveResult = { ok: true, message: '함께한 시간을 저장했어요.' };
    } catch { lastSaveResult = fail('이 브라우저에서는 저장 공간을 사용할 수 없어요. 지금은 계속 놀 수 있어요.'); }
    return lastSaveResult;
  }
  function changed(result) { save(); return result; }
  function nextDay() {
    state.day += 1;
    state.minute = 0;
    state.quests = questsForDay();
    state.dailyRewardClaimed = false;
    state.pantrySupportClaimed = false;
    for (const cat of Object.values(state.cats)) cat.treatsToday = 0;
    // A small daily pantry refill means care remains possible even when coins run out.
    state.inventory.food = Math.min(9999, state.inventory.food + 5);
    addLog(`새로운 ${state.day}일째 아침을 준비해요. 사료 5개가 도착했어요.`, null, 'day');
  }
  function simulate(minutes) {
    let remaining = minutes;
    while (remaining > 0.000001) {
      const step = Math.min(remaining, 1440 - state.minute, 30);
      for (const cat of Object.values(state.cats)) {
        for(const action of Object.keys(SOCIAL_COOLDOWNS)){
          const remaining=cat.socialCooldowns[action]-step;
          cat.socialCooldowns[action]=remaining<=1e-6?0:remaining;
        }
        cat.hunger = clamp(cat.hunger - step * 0.026);
        cat.water = clamp(cat.water - step * 0.032);
        cat.cleanliness = clamp(cat.cleanliness - step * 0.014);
        cat.happiness = clamp(cat.happiness - step * 0.01);
        cat.stimulation = clamp(cat.stimulation - step * 0.18);
        if (cat.resting) {
          cat.energy = clamp(cat.energy + step * 0.36);
          if (cat.energy >= 99) cat.resting = false;
        } else cat.energy = clamp(cat.energy - step * 0.018);
        const needsCare = cat.hunger < 22 || cat.water < 20 || cat.cleanliness < 18;
        cat.health = clamp(cat.health + step * (needsCare ? -0.008 : 0.006), 25, 100);
      }
      state.minute += step;
      remaining -= step;
      if (state.minute >= 1440 - 0.000001) nextDay();
    }
  }
  function progressQuest(action) {
    const quest = state.quests.find(item => item.id === action);
    if (!quest || quest.completed) return null;
    quest.progress = Math.min(quest.target, quest.progress + 1);
    if (quest.progress >= quest.target) {
      quest.completed = true;
      quest.claimed = true;
      state.coins = Math.min(999999, state.coins + quest.reward);
      addLog(`오늘의 약속 「${quest.title}」 완료! ${quest.reward}코인을 받았어요.`, null, 'quest');
      return quest;
    }
    return null;
  }
  function act(catId, action) {
    const cat = state.cats[catId];
    const meta = CATS.find(item => item.id === catId);
    if (!cat || !meta) return fail('함께할 고양이를 선택해 주세요.');
    if (!ACTION_IDS.has(action)) return fail('아직 할 수 없는 행동이에요.');
    if (state.dialogue) return fail('지금 나누고 있는 이야기를 먼저 마쳐 주세요.');
    if (cat.resting && action !== 'sleep' && action !== 'clean' && action !== 'water') return fail(`${meta.name}는 지금 쉬고 있어요. 잠깐 기다려 주세요.`);
    if(SOCIAL_COOLDOWNS[action]&&cat.socialCooldowns[action]>0)return fail(`${meta.name}와 방금 마음을 나눴어요. 조금 여유를 두고 다시 해 봐요.`);
    const before = cat.affection;
    let message;
    let effects = {};
    let emergencySupply = false;
    switch (action) {
      case 'feed':
        if (cat.hunger >= 90) return fail(`${meta.name}는 아직 배가 불러요. 조금 더 기다려 주세요.`);
        if (state.inventory.food < 1 && state.coins < 20 && !state.pantrySupportClaimed) {
          state.inventory.food = 5;
          state.pantrySupportClaimed = true;
          emergencySupply = true;
          addLog('사료가 부족해 이웃의 도움을 받았어요. 하루 한 번, 비상 사료 5개를 받을 수 있어요.', null, 'pantry');
        }
        if (state.inventory.food < 1) {
          if (state.coins >= 20) return fail('사료가 다 떨어졌어요. 상점에서 사료를 채워 주세요.');
          if (!state.dailyRewardClaimed) return fail('사료가 부족해요. 오늘의 선물 25코인을 받으면 상점에서 한 끼를 준비할 수 있어요.');
          if (state.quests.some(quest => !quest.completed && quest.id !== 'feed')) return fail('사료가 부족해요. 놀이와 청소 약속을 완료하면 사료를 살 코인을 받을 수 있어요.');
          return fail('오늘의 비상 사료까지 모두 먹었어요. 다음 날이 되면 사료 5개와 새로운 선물이 도착해요.');
        }
        state.inventory.food -= 1;
        effects = { hunger: 28, happiness: 4, health: 2, affection: 2 };
        message = `${meta.name}가 오독오독 맛있게 먹었어요. 든든한 한 끼 완료!`;
        if (emergencySupply) message = `이웃이 비상 사료 5개를 나눠 주었어요. ${meta.name}도 맛있게 한 끼를 먹었어요.`;
        break;
      case 'water':
        if (cat.water >= 96) return fail('물그릇이 아직 깨끗하고 충분해요. 조금 뒤에 다시 살펴봐요.');
        effects = { water: 45, health: 2, affection: 1 };
        message = `${meta.name}의 물그릇을 깨끗한 물로 채웠어요.`;
        break;
      case 'play':
        if (cat.energy < 25) return fail(`${meta.name}가 하품을 해요. 충분히 쉬고 나서 놀아요.`);
        if (cat.hunger < 18) return fail(`${meta.name}의 배가 고픈 것 같아요. 식사부터 챙겨 주세요.`);
        if (cat.stimulation >= 78) return fail(`${meta.name}가 꼬리를 빠르게 흔들어요. 혼자 쉴 시간을 주세요.`);
        effects = { energy: -16, hunger: -6, water: -5, happiness: 19 + Math.min(state.inventory.toys, 4), affection: 4, stimulation: 18 };
        message = `${meta.name}가 깃털을 톡! 잡았어요. 즐거운 사냥 놀이였어요.`;
        break;
      case 'pet':
        if (cat.stimulation >= 72) return fail(`${meta.name}가 몸을 살짝 피했어요. 만지는 건 잠시 쉬어 주세요.`);
        effects = { happiness: 10, affection: 3, stimulation: 24 };
        message = `${meta.name}가 눈을 가늘게 뜨고 골골송을 불러요.`;
        break;
      case 'brush':
        if (cat.stimulation >= 78) return fail(`${meta.name}가 오늘 빗질은 충분하대요. 조금 쉬게 해 주세요.`);
        if (cat.cleanliness >= 98) return fail(`${meta.name}의 털이 이미 보송보송해요.`);
        effects = { cleanliness: 20, happiness: 6, affection: 3, stimulation: 12 };
        message = `${meta.name}의 털을 살살 빗어 주었어요. 한결 보송보송해졌어요.`;
        break;
      case 'clean':
        if (cat.cleanliness >= 97) return fail('화장실과 주변이 아직 깨끗해요. 조금 뒤에 다시 살펴봐요.');
        effects = { cleanliness: 27, health: 3, happiness: 5, affection: 2 };
        message = `${meta.name}가 쓰는 화장실을 정리했어요. 쾌적한 공간이 되었어요.`;
        break;
      case 'sleep':
        if (cat.resting) {
          cat.resting = false;
          message = `${meta.name}가 기지개를 켜며 일어났어요.`;
        } else {
          cat.resting = true;
          effects = {};
          message = `${meta.name}가 편안하게 누웠어요. 쉬는 동안 기운을 회복해요.`;
        }
        break;
      case 'treat':
        if (state.inventory.treats < 1) return fail('간식이 다 떨어졌어요. 상점에서 준비해 주세요.');
        if (cat.treatsToday >= 2) return fail(`${meta.name}는 오늘 간식을 충분히 먹었어요. 내일 다시 나누어 주세요.`);
        if (cat.hunger >= 96) return fail(`${meta.name}는 지금 배가 불러요. 간식은 나중에 줘요.`);
        state.inventory.treats -= 1;
        cat.treatsToday += 1;
        effects = { hunger: 6, happiness: 12, affection: 4 };
        message = `${meta.name}에게 작은 간식을 주었어요. 기분 좋은 냠냠 소리!`;
        break;
      case 'blink':
        effects={happiness:6,affection:2,stimulation:-6};
        message=meta.id==='luna'? '눈을 느리게 감았다 뜨자 루나도 눈을 가늘게 접었어요. 조용한 인사가 오갔어요.':meta.id==='bam'?'조금 떨어져 눈을 천천히 감자 밤이의 어깨에 힘이 풀렸어요. 가까이 오지 않아도 괜찮아요.':`${meta.name}를 부드럽게 바라보며 눈을 천천히 감았어요. ${meta.name}도 편안한 눈인사로 답해요.`;
        break;
      case 'call':
        if(cat.stimulation>=72)return fail(`${meta.name}는 지금 혼자 쉬고 싶은가 봐요. 이름은 조금 뒤에 다시 불러요.`);
        effects={happiness:7,affection:2,stimulation:5};
        message=meta.id==='byeol'?'별아, 하고 부르자 긴 야옹이 돌아왔어요. 별이는 꼬리를 세우고 할 말이 많은 듯 다가왔어요.':meta.id==='bam'?'밤아, 하고 낮게 불렀어요. 귀가 쫑긋 움직이고, 조심스러운 한 걸음이 가까워졌어요.':`${meta.name}의 이름을 다정하게 불렀어요. 익숙한 목소리에 귀를 쫑긋하고 당신 쪽을 바라봐요.`;
        break;
      case 'stretch':
        if(cat.energy<20)return fail(`${meta.name}는 아직 졸려 보여요. 조금 더 쉬고 함께 몸을 펴요.`);
        if(cat.stimulation>=78)return fail(`${meta.name}에게 조용한 시간을 먼저 내어 주세요.`);
        effects={energy:-3,happiness:8,affection:2,stimulation:4};
        message=`곁에서 느긋하게 몸을 펴자 ${meta.name}도 앞발을 쭉 뻗었어요. 길게 기지개를 켜고는 편안하게 자리를 잡아요.`;
        break;
    }
    if(SOCIAL_COOLDOWNS[action])cat.socialCooldowns[action]=SOCIAL_COOLDOWNS[action];
    const preferredCare = action === meta.preferredAction;
    if (preferredCare) {
      effects.affection = (effects.affection ?? 0) + 1;
      effects.happiness = (effects.happiness ?? 0) + 2;
      message += ` ${meta.preferredResponse}`;
    }
    for (const [key, delta] of Object.entries(effects)) cat[key] = clamp(cat[key] + delta);
    cat.interactions += 1;
    state.totalInteractions += 1;
    addLog(message, catId);
    const quest = progressQuest(action);
    const storyUnlocked = before < STORY_AFFECTION && cat.affection >= STORY_AFFECTION;
    if (storyUnlocked) addLog(`${meta.name}가 마음을 열었어요. 새로운 이야기를 함께 나눌 수 있어요.`, catId, 'story-ready');
    return changed({ ok: true, message, effects, preferredCare, storyUnlocked, emergencySupply, questCompleted: quest?.id ?? null, reward: quest?.reward ?? 0 });
  }
  function tick(ms) {
    if (!Number.isFinite(ms) || ms < 0) return fail('올바른 시간이 아니에요.');
    // A tab suspended for a long time gets a gentle, bounded catch-up.
    const elapsed = Math.min(ms, 15 * 60 * 1000);
    simulate(elapsed / 1000 * GAME_MINUTES_PER_SECOND);
    unsavedMs += elapsed;
    if (unsavedMs >= 5000) { save(); unsavedMs = 0; }
    return { ok: true, message: '', elapsed };
  }
  function selectCat(id) {
    if (!CAT_IDS.has(id)) return fail('아직 만나지 못한 고양이에요.');
    state.selectedCat = id;
    return changed({ ok: true, message: `${CATS.find(cat => cat.id === id).name}와 함께해요.` });
  }
  function setRoom(room) {
    if (!ROOMS.has(room)) return fail('아직 갈 수 없는 공간이에요.');
    state.room = room;
    return changed({ ok: true, message: '다른 공간으로 이동했어요.' });
  }
  function purchase(itemId) {
    const item = SHOP_ITEMS.find(product => product.id === itemId);
    if (!item) return fail('준비되지 않은 물건이에요.');
    if (state.coins < item.price) return fail('코인이 조금 부족해요. 오늘의 약속을 완료하면 코인을 받아요.');
    if (state.inventory[item.item] + item.quantity > 9999) return fail('보관함에 이미 충분히 준비되어 있어요.');
    state.coins -= item.price;
    state.inventory[item.item] += item.quantity;
    const message = `${item.name} 구매 완료! 보관함에 넣어 두었어요.`;
    addLog(message, null, 'shop');
    return changed({ ok: true, message });
  }
  function unlockStory(catId) {
    const meta = CATS.find(cat => cat.id === catId);
    if (!meta) return fail('함께할 고양이를 선택해 주세요.');
    if (state.dialogue) return fail('지금 나누고 있는 이야기를 먼저 마쳐 주세요.');
    const replay = state.album.some(entry => entry.catId === catId);
    if (state.cats[catId].affection < STORY_AFFECTION && !replay) return fail(`친밀도 ${STORY_AFFECTION}에 ${meta.name}의 이야기가 열려요. 천천히 마음을 나누어요.`);
    state.selectedCat = catId;
    state.dialogue = { catId, index: 0, lines: storyLinesFor(meta), title: meta.story.title, replay, pendingAffection: 0, choiceIndex: null };
    return changed({ ok: true, message: `${meta.name}의 이야기가 시작돼요.` });
  }
  function purchaseOutfit(id){
    const item=outfitById(id);
    if(!item)return fail('아직 준비되지 않은 옷이에요.');
    if(state.wardrobe.owned.includes(id))return fail('이미 우리 옷장에 있는 옷이에요.');
    if(state.coins<item.price)return fail('코인이 조금 부족해요. 오늘의 약속과 선물로 모아 보세요.');
    state.coins-=item.price;state.wardrobe.owned.push(id);
    const message=`${item.name}를 작은 옷장에 넣었어요. 열 마리 모두에게 골라 입힐 수 있어요.`;
    addLog(message,null,'wardrobe');return changed({ok:true,message});
  }
  function equipOutfit(catId,id){
    const cat=state.cats[catId],meta=CATS.find(c=>c.id===catId);
    if(!cat||!meta)return fail('함께할 고양이를 선택해 주세요.');
    if(id!=='none'&&(!outfitById(id)||!state.wardrobe.owned.includes(id)))return fail('먼저 작은 옷장에 들여놓아 주세요.');
    if(cat.outfit===id)return {ok:true,message:'이미 이 모습으로 함께하고 있어요.'};
    if(id!=='none'&&(cat.resting||cat.stimulation>=72))return fail(`${meta.name}가 편안하게 쉬고 난 뒤 입혀 주세요. 지금은 미리 볼 수 있어요.`);
    cat.outfit=id;
    const message=id==='none'?`${meta.name}가 원래의 가벼운 모습으로 돌아왔어요.`:`${meta.name}에게 ${outfitById(id).shortName}를 살며시 입혔어요.`;
    addLog(message,catId,'wardrobe');return changed({ok:true,message});
  }
  function advanceDialogue(choiceIndex) {
    if (!state.dialogue) return fail('지금 진행 중인 이야기가 없어요.');
    const dialogue = state.dialogue;
    const line = dialogue.lines[dialogue.index];
    if (line.choices) {
      if (!Number.isInteger(choiceIndex) || !line.choices[choiceIndex]) return fail('마음을 전할 말을 골라 주세요.');
      if (!dialogue.replay) dialogue.pendingAffection = line.choices[choiceIndex].affection;
      dialogue.choiceIndex = choiceIndex;
      dialogue.lines = storyLinesFor(CATS.find(cat => cat.id === dialogue.catId), choiceIndex);
    }
    if (dialogue.index + 1 >= dialogue.lines.length) {
      if (!state.album.some(entry => entry.catId === dialogue.catId)) {
        state.cats[dialogue.catId].affection = clamp(state.cats[dialogue.catId].affection + dialogue.pendingAffection);
        state.album.push({ catId: dialogue.catId, title: dialogue.title, unlockedAt: Date.now(), day: state.day });
        state.coins = Math.min(999999, state.coins + 20);
        addLog(`「${dialogue.title}」을 추억 앨범에 담았어요.`, dialogue.catId, 'memory');
      }
      state.dialogue = null;
      return changed({ ok: true, message: '소중한 순간을 추억 앨범에 담았어요.', complete: true });
    }
    dialogue.index += 1;
    return changed({ ok: true, message: '', complete: false });
  }
  function claimDailyReward() {
    if (state.dailyRewardClaimed) return fail('오늘의 선물은 이미 받았어요. 내일 또 만나요.');
    state.dailyRewardClaimed = true;
    state.coins = Math.min(999999, state.coins + 25);
    addLog('오늘도 만나서 반가워요! 출석 선물 25코인을 받았어요.', null, 'reward');
    return changed({ ok: true, message: '오늘의 선물, 25코인을 받았어요!', reward: 25 });
  }
  function closeDialogue() {
    if (!state.dialogue) return fail('지금 진행 중인 이야기가 없어요.');
    state.dialogue = null;
    return changed({ ok: true, message: '이야기는 언제든 다시 나눌 수 있어요.' });
  }
  function setSetting(key, value) {
    if (!Object.hasOwn(state.settings, key) || typeof value !== 'boolean') return fail('변경할 수 없는 설정이에요.');
    state.settings[key] = value;
    return changed({ ok: true, message: '설정을 저장했어요.' });
  }
  function reset() { state = freshState(); unsavedMs = 0; return changed({ ok: true, message: '새로운 고양이집을 시작했어요.' }); }

  const offlineMs = Math.min(Math.max(0, Date.now() - state.lastSaved), 15 * 60 * 1000);
  if (offlineMs > 60000) {
    simulate(offlineMs / 1000 * GAME_MINUTES_PER_SECOND);
    addLog('다시 와 주었네요! 고양이들은 편안하게 기다리고 있었어요.', null, 'welcome-back');
  }
  save();
  return { get state() { return state; }, get saveStatus() { return lastSaveResult; }, act, tick, selectCat, setRoom, purchase, purchaseOutfit,equipOutfit,unlockStory, advanceDialogue, closeDialogue, claimDailyReward, setSetting, save, reset };
}
