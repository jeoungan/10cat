import test from 'node:test';
import assert from 'node:assert/strict';
import { CATS, SAVE_KEY, createGame } from '../game.js';

const memoryStorage = () => {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
};

test('ten distinct cats are available immediately with healthy bounded needs', () => {
  const game = createGame(null);
  assert.equal(CATS.length, 10);
  assert.equal(new Set(CATS.map(cat => cat.id)).size, 10);
  assert.equal(Object.keys(game.state.cats).length, 10);
  for (const cat of Object.values(game.state.cats)) {
    for (const key of ['hunger', 'water', 'energy', 'cleanliness', 'happiness', 'health', 'affection']) assert.ok(cat[key] >= 0 && cat[key] <= 100);
  }
});

test('feeding consumes food and full cats refuse overfeeding without consuming more', () => {
  const game = createGame(null);
  const food = game.state.inventory.food;
  assert.equal(game.act('bori', 'feed').ok, true);
  assert.equal(game.state.inventory.food, food - 1);
  assert.equal(game.state.cats.bori.hunger, 94);
  assert.equal(game.act('bori', 'feed').ok, false);
  assert.equal(game.state.inventory.food, food - 1);
});

test('an overstimulated cat refuses petting and recovers with quiet time', () => {
  const game = createGame(null);
  for (let i = 0; i < 3; i++) assert.equal(game.act('bori', 'pet').ok, true);
  const affection = game.state.cats.bori.affection;
  assert.equal(game.act('bori', 'pet').ok, false);
  assert.equal(game.state.cats.bori.affection, affection);
  game.tick(120000);
  assert.equal(game.act('bori', 'pet').ok, true);
});

test('each cat has a distinct preferred-care response with a modest relationship bonus', () => {
  const base = { play: { affection: 4, happiness: 20 }, brush: { affection: 3, happiness: 6 }, pet: { affection: 3, happiness: 10 }, water: { affection: 1, happiness: 0 } };
  const preferences = { bori: 'play', mochi: 'brush', luna: 'pet', nabi: 'play', siru: 'pet', oreo: 'play', miso: 'play', hodu: 'brush', byeol: 'water', bam: 'pet' };
  assert.equal(new Set(CATS.map(cat => cat.preferredResponse)).size, 10);
  for (const meta of CATS) {
    const game = createGame(null);
    assert.equal(meta.preferredAction, preferences[meta.id]);
    const result = game.act(meta.id, meta.preferredAction);
    assert.equal(result.ok, true);
    assert.equal(result.preferredCare, true);
    assert.equal(result.effects.affection, base[meta.preferredAction].affection + 1);
    assert.equal(result.effects.happiness, base[meta.preferredAction].happiness + 2);
    assert.ok(result.message.includes(meta.preferredResponse));
  }
  const ordinaryCare = createGame(null).act('bori', 'pet');
  assert.equal(ordinaryCare.preferredCare, false);
  assert.equal(ordinaryCare.effects.affection, 3);
  assert.equal(ordinaryCare.effects.happiness, 10);
});

test('a favorite activity still respects overstimulation and refusal grants no bonus', () => {
  const game = createGame(null);
  for (let i = 0; i < 3; i++) assert.equal(game.act('bam', 'pet').preferredCare, true);
  const before = JSON.stringify(game.state);
  assert.equal(game.act('bam', 'pet').ok, false);
  assert.equal(JSON.stringify(game.state), before);
});

test('sleep restores energy over time and sleeping cats are protected from interaction', () => {
  const game = createGame(null);
  game.act('bori', 'play');
  const tiredEnergy = game.state.cats.bori.energy;
  assert.equal(game.act('bori', 'sleep').ok, true);
  assert.equal(game.act('bori', 'play').ok, false);
  game.tick(60000);
  assert.ok(game.state.cats.bori.energy > tiredEnergy);
  assert.equal(game.act('bori', 'sleep').ok, true);
  assert.equal(game.state.cats.bori.resting, false);
});

test('water, hunger and cleanliness decay; no stat becomes negative during absence', () => {
  const game = createGame(null);
  const water = game.state.cats.bori.water;
  game.tick(60000);
  assert.ok(game.state.cats.bori.water < water);
  for (let i = 0; i < 10; i++) game.tick(900000);
  for (const cat of Object.values(game.state.cats)) {
    for (const key of ['hunger', 'water', 'energy', 'cleanliness', 'health', 'happiness']) assert.ok(cat[key] >= 0 && cat[key] <= 100);
    assert.ok(cat.health >= 25);
  }
});

test('daily quests pay exactly once and new days replenish pantry', () => {
  const game = createGame(null);
  const coins = game.state.coins;
  for (const id of ['bori', 'mochi', 'luna']) assert.equal(game.act(id, 'feed').ok, true);
  assert.equal(game.state.coins, coins + 30);
  game.act('nabi', 'feed');
  assert.equal(game.state.coins, coins + 30);
  assert.equal(game.state.quests.find(quest => quest.id === 'feed').completed, true);
  const food = game.state.inventory.food;
  game.tick(900000);
  game.tick(900000);
  assert.equal(game.state.day, 2);
  assert.equal(game.state.inventory.food, food + 5);
  assert.equal(game.state.quests.find(quest => quest.id === 'feed').progress, 0);
});

test('treats have a per-cat daily limit', () => {
  const game = createGame(null);
  assert.equal(game.act('bori', 'treat').ok, true);
  assert.equal(game.act('bori', 'treat').ok, true);
  const treats = game.state.inventory.treats;
  assert.equal(game.act('bori', 'treat').ok, false);
  assert.equal(game.state.inventory.treats, treats);
});

test('shop purchases conserve coins and refuse insufficient funds', () => {
  const game = createGame(null);
  const coins = game.state.coins;
  const food = game.state.inventory.food;
  assert.equal(game.purchase('food_pack').ok, true);
  assert.equal(game.state.coins, coins - 20);
  assert.equal(game.state.inventory.food, food + 5);
  for (let i = 0; i < 10; i++) game.purchase('feather_toy');
  const remaining = game.state.coins;
  assert.equal(game.purchase('feather_toy').ok, false);
  assert.equal(game.state.coins, remaining);
  assert.ok(remaining >= 0);
});

test('an empty pantry with no coins gets daily emergency food and can earn its way back', () => {
  const storage = memoryStorage();
  const game = createGame(storage);
  game.state.inventory.food = 0;
  game.state.coins = 0;
  const result = game.act('bori', 'feed');
  assert.equal(result.ok, true);
  assert.equal(result.emergencySupply, true);
  assert.equal(game.state.inventory.food, 4);
  assert.equal(game.state.pantrySupportClaimed, true);
  game.act('mochi', 'feed'); game.act('luna', 'feed');
  assert.equal(game.state.coins, 30);
  assert.equal(game.purchase('food_pack').ok, true);
  assert.equal(game.state.inventory.food, 7);
  assert.equal(createGame(storage).state.pantrySupportClaimed, true);
});

test('emergency food is limited to once per day and does not replace affordable food purchases', () => {
  const game = createGame(null);
  game.state.inventory.food = 0;
  assert.equal(game.act('bori', 'feed').ok, false);
  assert.equal(game.state.pantrySupportClaimed, false);
  game.state.coins = 0;
  assert.equal(game.act('bori', 'feed').emergencySupply, true);
  game.state.inventory.food = 0;
  assert.equal(game.act('mochi', 'feed').ok, false);
  assert.equal(game.state.inventory.food, 0);
  game.tick(900000);
  assert.equal(game.state.pantrySupportClaimed, false);
});

test('a story requires relationship growth, choices and completion; replay grants no duplicate reward', () => {
  const game = createGame(null);
  assert.equal(game.unlockStory('bori').ok, false);
  assert.equal(game.act('bori', 'pet').storyUnlocked, true);
  const affection = game.state.cats.bori.affection;
  assert.equal(game.unlockStory('bori').ok, true);
  assert.equal(game.act('bori', 'feed').ok, false);
  game.advanceDialogue();
  game.advanceDialogue();
  assert.equal(game.advanceDialogue().ok, false);
  assert.equal(game.advanceDialogue(42).ok, false);
  assert.equal(game.advanceDialogue(0).ok, true);
  assert.equal(game.state.cats.bori.affection, affection);
  const coins = game.state.coins;
  assert.equal(game.advanceDialogue().complete, true);
  assert.equal(game.state.cats.bori.affection, affection + 5);
  assert.equal(game.state.album.length, 1);
  assert.equal(game.state.coins, coins + 20);
  game.unlockStory('bori');
  game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(1); game.advanceDialogue();
  assert.equal(game.state.album.length, 1);
  assert.equal(game.state.coins, coins + 20);
  assert.equal(game.state.cats.bori.affection, affection + 5);
});

test('all twenty story choices receive distinct responses while preserving endings and one-time rewards', () => {
  const responses = CATS.flatMap(cat => cat.story.lines[2].choices.map(choice => choice.response));
  assert.equal(new Set(responses).size, 20);
  assert.ok(responses.every(response => typeof response === 'string' && response.length > 20));
  for (const meta of CATS) {
    const originalEnding = meta.story.lines[3].text;
    for (const choiceIndex of [0, 1]) {
      const game = createGame(null);
      game.state.cats[meta.id].affection = 30;
      const coins = game.state.coins;
      game.unlockStory(meta.id);
      game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(choiceIndex);
      const dialogue = game.state.dialogue;
      assert.equal(dialogue.choiceIndex, choiceIndex);
      assert.equal(dialogue.lines.length, 4);
      assert.equal(dialogue.lines[3].text, `${meta.story.lines[2].choices[choiceIndex].response} ${originalEnding}`);
      assert.equal(game.state.cats[meta.id].affection, 30);
      assert.equal(game.state.coins, coins);
      game.advanceDialogue();
      assert.equal(game.state.cats[meta.id].affection, 35);
      assert.equal(game.state.coins, coins + 20);
      game.unlockStory(meta.id);
      assert.equal(game.state.dialogue.choiceIndex, null);
      game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(1 - choiceIndex);
      assert.ok(game.state.dialogue.lines[3].text.startsWith(meta.story.lines[2].choices[1 - choiceIndex].response));
      game.advanceDialogue();
      assert.equal(game.state.cats[meta.id].affection, 35);
      assert.equal(game.state.coins, coins + 20);
      assert.equal(game.state.album.length, 1);
      assert.equal(meta.story.lines[3].text, originalEnding);
    }
  }
});

test('every selected story branch survives reload and reconstructs text from trusted metadata', () => {
  for (const meta of CATS) {
    for (const choiceIndex of [0, 1]) {
      const storage = memoryStorage();
      const game = createGame(storage);
      game.state.cats[meta.id].affection = 30;
      game.unlockStory(meta.id);
      game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(choiceIndex);
      const raw = JSON.parse(storage.getItem(SAVE_KEY));
      raw.dialogue.lines = [{ text: 'untrusted saved content' }];
      raw.dialogue.title = 'untrusted saved title';
      storage.setItem(SAVE_KEY, JSON.stringify(raw));
      const restored = createGame(storage);
      assert.equal(restored.state.dialogue.index, 3);
      assert.equal(restored.state.dialogue.choiceIndex, choiceIndex);
      assert.equal(restored.state.dialogue.title, meta.story.title);
      assert.equal(restored.state.dialogue.lines[3].text, game.state.dialogue.lines[3].text);
      assert.equal(restored.state.cats[meta.id].affection, 30);
      assert.equal(restored.state.album.length, 0);
      assert.equal(restored.advanceDialogue().complete, true);
      assert.equal(restored.state.cats[meta.id].affection, 35);
      assert.equal(restored.state.album.length, 1);
      assert.equal(createGame(storage).state.cats[meta.id].affection, 35);
    }
  }
});

test('legacy and invalid saved choices fall back safely and cancelling clears the chosen branch', () => {
  const storage = memoryStorage();
  const game = createGame(storage);
  game.act('bori', 'pet'); game.unlockStory('bori');
  game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(1);
  const raw = JSON.parse(storage.getItem(SAVE_KEY));
  for (const invalid of [undefined, null, -1, 2, '1', 0.5, '__proto__']) {
    raw.dialogue.choiceIndex = invalid;
    storage.setItem(SAVE_KEY, JSON.stringify(raw));
    const restored = createGame(storage);
    assert.equal(restored.state.dialogue.choiceIndex, null);
    assert.equal(restored.state.dialogue.lines[3].text, CATS[0].story.lines[3].text);
  }
  raw.dialogue.index = 2;
  raw.dialogue.choiceIndex = 1;
  storage.setItem(SAVE_KEY, JSON.stringify(raw));
  const beforeChoice = createGame(storage);
  assert.equal(beforeChoice.state.dialogue.choiceIndex, null);
  assert.equal(beforeChoice.advanceDialogue(-1).ok, false);
  assert.equal(beforeChoice.state.dialogue.index, 2);
  beforeChoice.advanceDialogue(0);
  const affection = beforeChoice.state.cats.bori.affection;
  beforeChoice.closeDialogue(); beforeChoice.unlockStory('bori');
  assert.equal(beforeChoice.state.dialogue.choiceIndex, null);
  assert.equal(beforeChoice.state.dialogue.lines[3].text, CATS[0].story.lines[3].text);
  assert.equal(beforeChoice.state.cats.bori.affection, affection);
  assert.equal(beforeChoice.state.album.length, 0);
});

test('daily welcome gift is single use until a new day', () => {
  const game = createGame(null);
  const coins = game.state.coins;
  assert.equal(game.claimDailyReward().ok, true);
  assert.equal(game.claimDailyReward().ok, false);
  assert.equal(game.state.coins, coins + 25);
  game.tick(900000); game.tick(900000);
  assert.equal(game.claimDailyReward().ok, true);
});

test('cancelling a story does not record an album entry or allow repeated choice rewards', () => {
  const game = createGame(null);
  game.act('bori', 'pet');
  const affection = game.state.cats.bori.affection;
  const coins = game.state.coins;
  for (let attempt = 0; attempt < 2; attempt++) {
    game.unlockStory('bori');
    game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(0);
    assert.equal(game.closeDialogue().ok, true);
  }
  assert.equal(game.state.album.length, 0);
  assert.equal(game.state.cats.bori.affection, affection);
  assert.equal(game.state.coins, coins);
});

test('selection, rooms, inventory, quests, stories and preferences survive reload', () => {
  const storage = memoryStorage();
  const game = createGame(storage);
  game.selectCat('bam'); game.setRoom('bedroom'); game.setSetting('sound', true);
  game.act('bori', 'pet'); game.unlockStory('bori');
  game.advanceDialogue(); game.advanceDialogue(); game.advanceDialogue(0); game.advanceDialogue();
  game.selectCat('bam');
  game.purchase('food_pack'); game.act('mochi', 'feed');
  const restored = createGame(storage);
  assert.equal(restored.state.selectedCat, 'bam');
  assert.equal(restored.state.room, 'bedroom');
  assert.equal(restored.state.settings.sound, true);
  assert.equal(restored.state.inventory.food, game.state.inventory.food);
  assert.equal(restored.state.album[0].catId, 'bori');
  assert.equal(restored.state.quests[0].progress, 1);
});

test('malformed and unavailable storage never prevents play', () => {
  const corrupt = memoryStorage(); corrupt.setItem(SAVE_KEY, '{bad json');
  assert.equal(createGame(corrupt).state.selectedCat, 'bori');
  const denied = { getItem() { throw new Error('denied'); }, setItem() { throw new Error('quota'); } };
  const game = createGame(denied);
  assert.equal(game.act('bori', 'pet').ok, true);
  assert.equal(game.save().ok, false);
});

test('absent or read-only storage reports save failure while allowing play', () => {
  for (const storage of [null, {}, { getItem() { return null; } }]) {
    const game = createGame(storage);
    assert.equal(game.saveStatus.ok, false);
    assert.equal(game.save().ok, false);
    assert.equal(game.act('bori', 'pet').ok, true);
    assert.equal(game.saveStatus.ok, false);
  }
});

test('save status reflects the latest write and remains outside persisted game data', () => {
  const backing = memoryStorage();
  let rejectWrites = false;
  const game = createGame({
    getItem: backing.getItem,
    setItem(key, value) {
      if (rejectWrites) throw new Error('quota');
      backing.setItem(key, value);
    },
  });
  assert.equal(game.saveStatus.ok, true);
  const previousSave = game.state.lastSaved;
  rejectWrites = true;
  assert.equal(game.act('bori', 'pet').ok, true);
  assert.equal(game.saveStatus.ok, false);
  assert.equal(game.state.lastSaved, previousSave);
  rejectWrites = false;
  assert.equal(game.save().ok, true);
  assert.equal(game.saveStatus.ok, true);
  assert.equal(Object.hasOwn(JSON.parse(backing.getItem(SAVE_KEY)), 'saveStatus'), false);
});

test('a browser localStorage getter that throws reports unavailable saving without crashing', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  try {
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new Error('SecurityError'); } });
    const game = createGame();
    assert.equal(game.saveStatus.ok, false);
    assert.equal(game.act('bori', 'pet').ok, true);
    assert.equal(game.save().ok, false);
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  }
});

test('invalid and hostile persisted values are repaired, with bounded offline decay', () => {
  const storage = memoryStorage();
  const original = createGame(null).state;
  original.cats.bori.hunger = -999;
  original.cats.bori.energy = 'invalid';
  original.inventory.food = -20;
  original.room = '__proto__';
  original.lastSaved = Date.now() - 30 * 24 * 60 * 60 * 1000;
  storage.setItem(SAVE_KEY, JSON.stringify(original));
  const game = createGame(storage);
  assert.equal(game.state.cats.bori.hunger, 0);
  assert.ok(game.state.cats.bori.energy > 0);
  assert.equal(game.state.inventory.food, 5);
  assert.equal(game.state.room, 'living-room');
  assert.equal(game.state.day, 2);
  assert.ok(game.state.cats.bori.health > 85);
});

test('invalid operations leave currency and selection intact', () => {
  const game = createGame(null);
  const coins = game.state.coins;
  assert.equal(game.act('missing', 'feed').ok, false);
  assert.equal(game.act('bori', 'invalid').ok, false);
  assert.equal(game.purchase('__proto__').ok, false);
  assert.equal(game.selectCat('missing').ok, false);
  assert.equal(game.setRoom('missing').ok, false);
  assert.equal(game.setSetting('__proto__', true).ok, false);
  assert.equal(game.tick(-1).ok, false);
  assert.equal(game.tick(Infinity).ok, false);
  assert.equal(game.state.coins, coins);
  assert.equal(game.state.selectedCat, 'bori');
});
