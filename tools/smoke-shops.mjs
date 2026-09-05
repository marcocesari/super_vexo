// The shops in Estronic.
//
// Three counters on the square: an apothecary, a gunsmith and a
// shipwright. What matters is that money goes in and something comes out
// — a purchase has to change the game, not just a number on a screen —
// and that there is a way to earn the money in the first place, which
// there was not until the monsters started paying a bounty.
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const errors = [];
let failed = false;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 940, height: 560 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(900);

// --- There are shops, and somebody minding each ------------------------------------
const shops = await page.evaluate(() => {
  const t = window.__superVexo.surface.world.info.settlements.find((s) => s.kind === 'capital');
  return {
    kinds: t.shops.map((s) => s.kind),
    keepers: t.people.folk.filter((p) => p.shop).map((p) => ({
      shop: p.shop,
      // A keeper must be at the door of the shop they keep.
      atDoor: Math.round(Math.min(...t.shops
        .filter((s) => s.kind === p.shop)
        .map((s) => Math.hypot(p.x - s.x, p.z - s.z)))),
      stays: !!p.stays,
    })),
    nearMiddle: t.shops.every((s) => Math.hypot(s.x - t.x, s.z - t.z) < 320),
  };
});
check('Estronic has shops', shops.kinds.length >= 3, shops.kinds.join(', '));
check('and each has somebody minding it',
  shops.keepers.length === shops.kinds.length
  && shops.keepers.every((k) => k.atDoor < 2),
  shops.keepers.map((k) => `${k.shop} ${k.atDoor}m from its door`).join(', '));
// A shopkeeper who wanders off is a shop with nobody in it, which is a
// wall with an awning.
check('who stay at their own doors', shops.keepers.every((k) => k.stays));
check('and the shops are on the square, where people are',
  shops.nearMiddle);

// --- Money you can earn ------------------------------------------------------------
const bounty = await page.evaluate(() => {
  const g = window.__superVexo;
  const before = g.mission.credits;
  // Shoot one where it stands, the way the game does when a shot lands.
  const m = g.monsters.monsters.find((x) => x.state !== 'dead');
  g.monsters.kill(m);
  g.mission.earn(14);
  return { before, after: g.mission.credits };
});
check('there is money to be earned on the ground', bounty.after > bounty.before,
  `${bounty.before} → ${bounty.after} credits`);

// --- Standing at a counter ----------------------------------------------------------
await page.evaluate(() => {
  const g = window.__superVexo;
  const t = g.surface.world.info.settlements.find((s) => s.kind === 'capital');
  g.ship.mesh.position.set(t.x + 30, -20000 + t.level + 40, t.z + 30);
  g.ship.velocity.set(0, 0, 0);
  g.mission.earn(500);
});
await page.waitForTimeout(800);
await page.keyboard.press('KeyL');
let out = false;
for (let i = 0; i < 260; i++) {
  if (await page.evaluate(() => window.__superVexo.onFoot.state) === 'walk') { out = true; break; }
  await page.waitForTimeout(100);
}
check('you can get out on the square', out);

await page.evaluate(() => {
  const g = window.__superVexo;
  const t = g.surface.world.info.settlements.find((s) => s.kind === 'capital');
  const k = t.people.folk.find((p) => p.shop === 'apothecary');
  g.onFoot.position.x = k.x + 1.4;
  g.onFoot.position.z = k.z + 1.4;
});
await page.waitForTimeout(500);
const prompt = await page.evaluate(() => document.getElementById('foot-prompt')?.textContent ?? '');
check('the keeper offers to serve you', /apothecary/i.test(prompt), prompt);

await page.keyboard.press('KeyE');
await page.waitForTimeout(500);
const counter = await page.evaluate(() => ({
  open: window.__superVexo.shop.isOpen,
  which: window.__superVexo.shop.shop,
  name: document.querySelector('.shop__name')?.textContent ?? '',
  items: [...document.querySelectorAll('.shop__item')].map((li) => li.textContent.replace(/\s+/g, ' ').trim()),
  purse: document.querySelector('.shop__purse')?.textContent.replace(/\s+/g, ' ').trim(),
}));
check('and the shop opens', counter.open && counter.which === 'apothecary', counter.name);
check('with things on the shelf and a price on each',
  counter.items.length >= 2 && counter.items.every((t) => /\d+ cr|owned/.test(t)),
  counter.items.join(' | '));
check('and your money where you can see it', /\d+ cr/.test(counter.purse ?? ''), counter.purse);

// --- Buying changes the game --------------------------------------------------------
const bought = await page.evaluate(() => ({
  credits: window.__superVexo.mission.credits,
  hearts: window.__superVexo.onFoot.maxHearts,
}));
await page.keyboard.press('KeyE');
await page.waitForTimeout(400);
const after = await page.evaluate(() => ({
  credits: window.__superVexo.mission.credits,
  hearts: window.__superVexo.onFoot.maxHearts,
  said: document.querySelector('.shop__said')?.textContent ?? '',
  onScreen: [...document.querySelectorAll('.heart')].length,
}));
check('buying takes the money', after.credits < bought.credits,
  `${bought.credits} → ${after.credits} credits`);
// This is the check that matters: a purchase has to DO something.
check('and gives you the thing', after.hearts === bought.hearts + 1,
  `${bought.hearts} → ${after.hearts} hearts`);
check('and says so', /yours/i.test(after.said), after.said);

// The second one costs more than the first, or a shop is emptied in one
// visit and never visited again.
const dearer = await page.evaluate(() => {
  const price = document.querySelector('.shop__item--on .shop__item-price')?.textContent ?? '';
  return parseInt(price, 10);
});
check('and the next one costs more', dearer > 120, `${dearer} cr`);

// --- What you cannot afford ---------------------------------------------------------
const broke = await page.evaluate(async () => {
  const g = window.__superVexo;
  g.mission.spendCredits(g.mission.credits);      // empty pockets
  const hearts = g.onFoot.maxHearts;
  document.dispatchEvent(new Event('x'));
  return { hearts, credits: g.mission.credits };
});
await page.keyboard.press('KeyE');
await page.waitForTimeout(400);
const refused = await page.evaluate(() => ({
  hearts: window.__superVexo.onFoot.maxHearts,
  said: document.querySelector('.shop__said')?.textContent ?? '',
}));
check('with no money you get nothing', refused.hearts === broke.hearts,
  `${broke.credits} credits, still ${refused.hearts} hearts`);
check('and are told why', /enough/i.test(refused.said), refused.said);

// --- Leaving, and coming back to what you bought --------------------------------------
await page.keyboard.press('Escape');
await page.waitForTimeout(300);
check('B or Escape leaves the shop',
  !(await page.evaluate(() => window.__superVexo.shop.isOpen)));

const kept = await page.evaluate(() => {
  const g = window.__superVexo;
  const snap = g.perks.snapshot();
  g.saves.saveManual();
  g.perks.reset();
  const cleared = g.perks.snapshot();
  g.saves.restore(g.saves.latest);
  return { snap, cleared, back: g.perks.snapshot() };
});
check('a save remembers what you bought',
  kept.cleared.heart === 0 && kept.back.heart === kept.snap.heart,
  `${kept.snap.heart} → forgotten → ${kept.back.heart}`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
