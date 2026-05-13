// M4 smoke: gameplay loop end-to-end.
//
// Scenarios:
//   1. Hack one rover — teleport ship next to it at low velocity, hold H
//      for ~2.3s, assert rover.fixed === true and credits went up by the
//      rover's value.
//   2. Fix all rovers — programmatically mark all-but-one as fixed
//      (test helper, not gameplay shortcut), then hack the last and
//      assert mission state flips to COMPLETE plus the bonus is applied.
//   3. Buy one upgrade — assert shipConfig changes and credits drop.
//
// Also confirms no console errors / warnings. Run while `npm run dev`
// is up.
import { chromium } from 'playwright';

const BASE = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const URL = BASE.includes('?') ? `${BASE}&skipIntro=1` : `${BASE}?skipIntro=1`;
const NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();
page.on('console', (msg) => {
  const t = msg.text();
  if (isNoise(t)) return;
  if (msg.type() === 'error') errors.push(t);
  if (msg.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

await page.goto(URL, { waitUntil: 'load' });

let failed = false;
function check(label, ok, extra = '') {
  if (ok) console.log(`PASS  ${label}` + (extra ? `  (${extra})` : ''));
  else { failed = true; console.error(`FAIL  ${label}` + (extra ? `  (${extra})` : '')); }
}

// Title → FLY.
await page.waitForSelector('#title-card');
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });

// --- Scenario 1: hack one rover -------------------------------------------
console.log('--- Scenario 1: hack one rover ---');
const before1 = await page.evaluate(() => {
  const svr = window.__superVexo;
  const target = svr.rovers.rovers.find((r) => !r.fixed);
  // Teleport ship to ~1 unit from the rover, stop velocity.
  svr.ship.mesh.position.set(target.position.x + 1, target.position.y, target.position.z);
  svr.ship.velocity.set(0, 0, 0);
  return { credits: svr.mission.credits, name: target.name, value: target.creditValue };
});

await page.keyboard.down('KeyH');
await page.waitForTimeout(2400);
await page.keyboard.up('KeyH');
await page.waitForTimeout(80);

const after1 = await page.evaluate((name) => {
  const svr = window.__superVexo;
  const r = svr.rovers.rovers.find((x) => x.name === name);
  return { fixed: r.fixed, credits: svr.mission.credits };
}, before1.name);

check('rover fixed after 2s hack', after1.fixed === true, `rover=${before1.name}`);
check(
  'credits increased by rover value',
  after1.credits === before1.credits + before1.value,
  `before=${before1.credits} after=${after1.credits} delta=${before1.value}`,
);

// --- Scenario 2: complete the mission -------------------------------------
console.log('--- Scenario 2: complete the mission ---');
const before2 = await page.evaluate(() => {
  const svr = window.__superVexo;
  const unfixed = svr.rovers.rovers.filter((r) => !r.fixed);
  // markFixed is the test-friendly shortcut: skip the hold-to-hack for
  // all but the last rover so we can test the COMPLETE transition fast.
  for (let i = 1; i < unfixed.length; i++) svr.rovers.markFixed(unfixed[i]);
  const last = unfixed[0];
  svr.ship.mesh.position.set(last.position.x + 1, last.position.y, last.position.z);
  svr.ship.velocity.set(0, 0, 0);
  return { credits: svr.mission.credits, lastName: last.name, lastValue: last.creditValue };
});

await page.keyboard.down('KeyH');
await page.waitForTimeout(2400);
await page.keyboard.up('KeyH');
await page.waitForTimeout(200);

const after2 = await page.evaluate(() => {
  const svr = window.__superVexo;
  return {
    state: svr.mission.state,
    remaining: svr.mission.remaining(),
    credits: svr.mission.credits,
    completeVisible: !document.getElementById('screen-complete').hidden,
  };
});

check('all rovers fixed', after2.remaining === 0, `remaining=${after2.remaining}`);
check('mission state COMPLETE', after2.state === 'complete', `state=${after2.state}`);
// expected: before2.credits + lastValue (60) + completion bonus (100)
check(
  'completion bonus credited',
  after2.credits === before2.credits + before2.lastValue + 100,
  `before=${before2.credits} after=${after2.credits} expected=${before2.credits + before2.lastValue + 100}`,
);
check('mission-complete overlay visible', after2.completeVisible === true);

// --- Scenario 3: buy an upgrade -------------------------------------------
console.log('--- Scenario 3: buy throttle upgrade ---');
const result3 = await page.evaluate(() => {
  const svr = window.__superVexo;
  svr.missionScreens.hideAll();
  const before = svr.shipConfig.maxThrottleAccel;
  const beforeCredits = svr.mission.credits;
  const ok = svr.upgrades.buy('throttle', svr.mission);
  return {
    ok,
    before,
    after: svr.shipConfig.maxThrottleAccel,
    beforeCredits,
    afterCredits: svr.mission.credits,
  };
});

check('throttle upgrade purchase succeeded', result3.ok === true);
check(
  'shipConfig.maxThrottleAccel increased after purchase',
  result3.after > result3.before,
  `before=${result3.before.toFixed(2)} after=${result3.after.toFixed(2)}`,
);
check(
  'credits dropped by upgrade cost',
  result3.afterCredits < result3.beforeCredits,
  `before=${result3.beforeCredits} after=${result3.afterCredits}`,
);

// --- Scenario 4: reset --------------------------------------------------
console.log('--- Scenario 4: reset ---');
const before4 = await page.evaluate(() => {
  const svr = window.__superVexo;
  return {
    credits: svr.mission.credits,        // already > 0 from earlier scenarios
    shipZ: svr.ship.mesh.position.z,
    fixedCount: svr.rovers.rovers.filter((r) => r.fixed).length,
  };
});
await page.keyboard.press('KeyR');
await page.waitForTimeout(80);
const after4 = await page.evaluate(() => {
  const svr = window.__superVexo;
  return {
    credits: svr.mission.credits,
    shipZ: svr.ship.mesh.position.z,
    shipVX: svr.ship.velocity.x,
    shipVY: svr.ship.velocity.y,
    shipVZ: svr.ship.velocity.z,
    fixedCount: svr.rovers.rovers.filter((r) => r.fixed).length,
    state: svr.mission.state,
    upgrades: svr.upgrades.upgrades.map((u) => u.bought),
    throttleAccel: svr.shipConfig.maxThrottleAccel,
    throttleDefault: svr.shipConfigDefaults.maxThrottleAccel,
  };
});

check('R: credits reset to 0',          after4.credits === 0, `was=${before4.credits} now=${after4.credits}`);
check('R: ship position reset to origin', after4.shipZ === 0, `wasZ=${before4.shipZ.toFixed(0)} nowZ=${after4.shipZ}`);
check('R: ship velocity zeroed',        after4.shipVX === 0 && after4.shipVY === 0 && after4.shipVZ === 0);
check('R: rovers unfixed',              after4.fixedCount === 0, `wasFixed=${before4.fixedCount} nowFixed=${after4.fixedCount}`);
check('R: mission state ACTIVE',        after4.state === 'active', `state=${after4.state}`);
check('R: upgrades cleared',            after4.upgrades.every((b) => b === false), `bought=${after4.upgrades}`);
check('R: shipConfig restored to defaults', after4.throttleAccel === after4.throttleDefault,
  `accel=${after4.throttleAccel} default=${after4.throttleDefault}`);

await browser.close();

if (errors.length) {
  console.error('\nCONSOLE ERRORS:');
  for (const e of errors) console.error('  -', e);
  failed = true;
}
if (warnings.length) {
  console.error('\nCONSOLE WARNINGS:');
  for (const w of warnings) console.error('  -', w);
  failed = true;
}

if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
