// M3 smoke. Three scenarios:
//
//   1. Collision: spawn the ship on top of an asteroid (move it
//      programmatically) and assert the physics step pushes it back
//      out so distance ≥ shipR + astR.
//   2. Fast travel: press F, wait WARP_DURATION_S, assert the ship's
//      z is past the asteroid belt (i.e. > 500 in world coords).
//   3. Audio context started after a user gesture, no autoplay error.
//
// Plus: no console errors / warnings (with the usual headless allowlist).
//
// Run while `npm run dev` is up.
import { chromium } from 'playwright';
import { withSkipIntro } from './smokeUrl.mjs';

const URL = withSkipIntro(process.env.SMOKE_URL ?? 'http://127.0.0.1:5173');
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

// Expose a small test-only helper hook on window so the test can poke
// into ship state without us shipping prod debug APIs.
await page.addInitScript(() => { window.__test = {}; });
await page.evaluate(() => {
  // Re-execute the same hook in this realm; addInitScript only fires
  // on new navigations. Goto already happened above so we set here too.
  window.__test = window.__test || {};
});

let failed = false;
function check(label, ok, extra = '') {
  if (ok) console.log(`PASS  ${label}` + (extra ? `  (${extra})` : ''));
  else { failed = true; console.error(`FAIL  ${label}` + (extra ? `  (${extra})` : '')); }
}

// Title card → FLY.
await page.waitForSelector('#title-card');
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });

// --- Scenario 1: collision -------------------------------------------------
console.log('--- Scenario 1: collision bounce ---');
// We do this by waiting one frame for the modules to be running, then
// running a script that finds the nearest asteroid and moves the ship
// onto its center. The next physics step must push it out.
const bounceResult = await page.evaluate(async () => {
  // Wait two RAFs to ensure ship + asteroids are initialized.
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  // Reach into the renderer's scene to pull state out. We attach a
  // test-only handle via a script injected in main.js... but we don't
  // want to ship that. Instead, walk the THREE scene via the renderer
  // canvas's __r3f hook? Not present. We rely on `window.__superVexo`
  // which main.js exposes during dev only.
  const svr = window.__superVexo;
  if (!svr) return { error: '__superVexo handle missing — wire it up in main.js' };

  // Pick the asteroid closest to the ship's current spawn (z>0).
  const ship = svr.ship;
  const asts = svr.asteroids.instances;
  let nearest = asts[0];
  let nd = Infinity;
  for (const a of asts) {
    const dz = a.position.z - 0; // ship spawn at origin
    const d = a.position.lengthSq();
    if (d < nd && a.position.z > 40) { nd = d; nearest = a; }
  }

  // Teleport ship exactly onto the asteroid's center.
  ship.mesh.position.copy(nearest.position);
  ship.velocity.set(0, 0, 8); // moving "into" the asteroid

  // Wait two frames so the physics step resolves it.
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  const dx = ship.mesh.position.x - nearest.position.x;
  const dy = ship.mesh.position.y - nearest.position.y;
  const dz = ship.mesh.position.z - nearest.position.z;
  const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
  const minDist = svr.physics.SHIP_RADIUS + nearest.radius;
  return { dist, minDist, vAfter: ship.velocity.toArray() };
});

if (bounceResult.error) {
  check('collision: __superVexo dev handle present', false, bounceResult.error);
} else {
  check(
    'collision: ship pushed outside asteroid',
    bounceResult.dist >= bounceResult.minDist - 0.01,
    `dist=${bounceResult.dist.toFixed(2)} minDist=${bounceResult.minDist.toFixed(2)}`,
  );
}

// --- Scenario 2: fast travel -----------------------------------------------
console.log('--- Scenario 2: fast travel ---');
// Press F, wait for the warp to complete (~1.2s + a margin), check the
// ship is past the asteroid belt.
await page.evaluate(() => { window.__superVexo.ship.mesh.position.set(0, 0, 0); });
await page.keyboard.press('KeyF');
await page.waitForTimeout(1500);
const ftZ = await page.evaluate(() => window.__superVexo.ship.mesh.position.z);
check('fast travel: ship z past the belt (>500)', ftZ > 500, `z=${ftZ.toFixed(1)}`);

// --- Scenario 3: audio context ---------------------------------------------
console.log('--- Scenario 3: audio ---');
const audioRunning = await page.evaluate(() => window.__superVexo.audio.running);
check('audio: context started after user gesture', audioRunning === true);

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
