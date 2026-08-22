// Monster smoke: the bokoblin camps, and the fight.
//
// Almost nothing here shows up in a screenshot. A monster that never
// notices you, one that notices you through a building, a camp that
// alerts as one when it should, a mercy window that isn't there, a shot
// that passes through a bokoblin — all of it looks identical to a
// working game until you play it for a while.
//
// Run while `npm run dev` is up.
import { chromium } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const NOISE = [/GPU stall due to ReadPixels/i, /CONTEXT_LOST_WEBGL/i, /loseContext/i];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
let failed = false;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 820, height: 520 } });
page.on('console', (m) => {
  const t = m.text();
  if (isNoise(t)) return;
  if (m.type() === 'error') errors.push(t);
  if (m.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(`${URL}/?land=1&skipIntro=1`, { waitUntil: 'load' });
await page.waitForTimeout(900);
await page.keyboard.press('Space');
await page.waitForTimeout(700);

// --- The camps ----------------------------------------------------------------
const built = await page.evaluate(() => {
  const g = window.__superVexo;
  const m = g.monsters;
  const town = g.surface.town;
  return {
    camps: m.camps.length,
    monsters: m.monsters.length,
    bosses: m.monsters.filter((x) => x.boss).length,
    // Nobody should have been dropped inside a building.
    inWalls: m.monsters.filter((x) => !town.isClear(x.pos.x, x.pos.y, 0.4)).length,
    spread: (() => {
      let worst = Infinity;
      for (let i = 0; i < m.camps.length; i++) {
        for (let j = i + 1; j < m.camps.length; j++) {
          worst = Math.min(worst, Math.hypot(
            m.camps[i].x - m.camps[j].x, m.camps[i].z - m.camps[j].z));
        }
      }
      return Math.round(worst);
    })(),
  };
});
check('there are camps', built.camps === 4, `${built.camps} camps`);
check('each has a gang and a boss', built.monsters === 16 && built.bosses === 4,
  `${built.monsters} monsters, ${built.bosses} bosses`);
check('none of them stands inside a building', built.inWalls === 0,
  `${built.inWalls} in walls`);
// Camps you can choose to go round have to be far enough apart to be
// separate places rather than one long fight.
check('the camps are spread out', built.spread > 60, `nearest pair ${built.spread}m apart`);

/** Get out of the ship next to a camp, and wait for control. */
async function landAtCamp(index, offset) {
  await page.evaluate(([index, offset]) => {
    const g = window.__superVexo;
    const camp = g.monsters.camps[index];
    g.monsters.reset();
    g.ship.mesh.position.set(camp.x + offset, g.ship.mesh.position.y, camp.z + offset);
    if (g.surface.altitude(g.ship) > 20) g.ship.mesh.position.y -= 55;
    g.ship.velocity.set(0, 0, 0);
  }, [index, offset]);
  await page.waitForTimeout(500);
  if ((await page.evaluate(() => window.__superVexo.onFoot.state)) === 'off') {
    await page.keyboard.press('KeyL');
  }
  const started = Date.now();
  while (Date.now() - started < 14000) {
    if ((await page.evaluate(() => window.__superVexo.onFoot.state)) === 'walk') return true;
    await page.waitForTimeout(120);
  }
  return false;
}

check('you can get out beside a camp', await landAtCamp(0, 34));

// --- Being noticed --------------------------------------------------------------
// Far enough away, they should be going about their business.
const asleep = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const camp = g.monsters.camps[0];
  g.monsters.reset();
  f.position.x = camp.x + 40;
  f.position.z = camp.z + 40;
  await new Promise((r) => setTimeout(r, 900));
  return camp.members.map((m) => m.state);
});
check('they ignore him from forty metres', asleep.every((s) => s === 'idle'),
  asleep.join(','));

const spotted = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const camp = g.monsters.camps[0];
  f.position.x = camp.x + 12;
  f.position.z = camp.z + 12;
  await new Promise((r) => setTimeout(r, 1500));
  return camp.members.map((m) => m.state);
});
// One sees him and the camp comes with it — that is the horn.
check('walk into the camp and the whole camp comes',
  spotted.filter((s) => s === 'chase' || s === 'alert' || s === 'attack').length >= 3,
  spotted.join(','));

// --- Getting hit ----------------------------------------------------------------
const fight = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const start = f.hearts;
  const t0 = performance.now();
  let firstHitAt = null;
  let secondHitAt = null;
  let last = start;
  while (performance.now() - t0 < 9000) {
    await new Promise((r) => requestAnimationFrame(r));
    if (f.hearts < last) {
      if (firstHitAt == null) firstHitAt = performance.now();
      else if (secondHitAt == null) { secondHitAt = performance.now(); break; }
      last = f.hearts;
    }
  }
  return {
    start,
    now: f.hearts,
    gapMs: firstHitAt && secondHitAt ? Math.round(secondHitAt - firstHitAt) : null,
  };
});
check('they can actually hurt him', fight.now < fight.start,
  `${fight.start} → ${fight.now} hearts`);
// The mercy window is what stops a ring of them deleting him instantly.
check('and two hits cannot land on top of each other',
  fight.gapMs === null || fight.gapMs > 1200,
  fight.gapMs === null ? 'only one hit landed' : `${fight.gapMs}ms apart`);

// --- Shooting back ----------------------------------------------------------------
const shooting = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const camp = g.monsters.camps[1];
  g.monsters.reset();
  // Put the camp straight in front of wherever he happens to be facing.
  // Aiming is still his job; this only decides where the fight is.
  const h = f.vexo.group.rotation.y;
  f.position.x = camp.x - Math.sin(h) * 13;
  f.position.z = camp.z - Math.cos(h) * 13;
  await new Promise((r) => setTimeout(r, 1200));
  return camp.members.map((m) => m.hp);
});
await page.keyboard.down('Space');
await page.waitForTimeout(2600);
await page.keyboard.up('Space');
const shot = await page.evaluate(() => {
  const camp = window.__superVexo.monsters.camps[1];
  return {
    hp: camp.members.map((m) => m.hp),
    dead: camp.members.filter((m) => m.state === 'dead').length,
    bossHp: camp.members.find((m) => m.boss).hp,
  };
});
check('the pistol kills them', shot.dead > 0,
  `${shot.dead} down, hp now ${shot.hp.join('/')} (was ${shooting.join('/')})`);
// A boss is meant to be a decision, not a speed bump.
check('the boss takes more killing', shot.bossHp > 1, `${shot.bossHp} left`);

// --- Losing ---------------------------------------------------------------------
const defeat = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  // Straight to the last heart, then let them finish it: waiting out
  // five hits with a mercy window between each takes fifteen seconds.
  f.takeHit(f.hearts - 1);
  const camp = g.monsters.camps[1];
  f.position.x = camp.x;
  f.position.z = camp.z;
  const t0 = performance.now();
  while (performance.now() - t0 < 20000) {
    await new Promise((r) => requestAnimationFrame(r));
    if (f.state === 'off') break;
  }
  return {
    state: f.state,
    hearts: f.hearts,
    monstersReset: g.monsters.monsters.every((m) => m.state !== 'chase'),
    parked: g.surface.parked,
  };
});
check('losing the last heart puts him back in the ship', defeat.state === 'off',
  `state ${defeat.state}`);
check('with his hearts back', defeat.hearts === 5, `${defeat.hearts} hearts`);
check('and the camps back where they were', defeat.monstersReset);
check('the ship is his again', !defeat.parked);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
