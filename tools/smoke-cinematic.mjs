// Cinematic smoke. Two scenarios:
//
//   1. Skip path: load the page, press Space, assert the cinematic
//      DOM is removed AND we land on the title card without auto-
//      starting the game.
//   2. End-to-end run: don't press anything; wait long enough for the
//      cinematic to play through (~25s), assert the title card is now
//      visible. (Skipped by default to keep CI fast; enable with
//      SMOKE_FULL=1.)
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const FULL = process.env.SMOKE_FULL === '1';
const NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
const browser = await launchBrowser();
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

// --- Scenario 1: skip --------------------------------------------------
console.log('--- Scenario 1: skip path ---');
await page.waitForSelector('#cinematic', { state: 'visible', timeout: 4000 });
const initialTitleVisible = await page.evaluate(() => {
  const el = document.getElementById('title-card');
  // While the cinematic plays we set inline opacity:0; we treat
  // opacity 0 as "hidden" here.
  return el && el.style.opacity !== '0';
});
check('title card hidden while cinematic plays', initialTitleVisible === false);

await page.keyboard.press('Space');
await page.waitForSelector('#cinematic', { state: 'detached', timeout: 2000 });
await page.waitForTimeout(120);

const afterSkip = await page.evaluate(() => {
  const tc = document.getElementById('title-card');
  return {
    cinematicGone: !document.getElementById('cinematic'),
    titleVisible: tc && tc.style.opacity !== '0' && !tc.classList.contains('title-card--hidden'),
    gameStarted: tc == null, // titleCard.dismiss() removes the element
  };
});
check('cinematic DOM removed after skip', afterSkip.cinematicGone === true);
check('title card is visible after skip', afterSkip.titleVisible === true);
check('game did NOT auto-start from the skip key', afterSkip.gameStarted === false);

// Confirm the actual "press any key" still starts the game.
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });
console.log('PASS  game starts when player presses key after cinematic skip');

// --- Scenario 3: gamepad button skip + title dismiss -------------------
// Regression for "I press a button when skipping and the title won't
// dismiss". Two passes: a quick tap (release between), and a held
// button (where the title must NOT dismiss until release+repress).
console.log('--- Scenario 3: pad-button skip ---');
async function withPadPage() {
  const ctx2 = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await ctx2.addInitScript(`
    Object.defineProperty(window, '__p5NativeHost', { value: true, writable: false });
  `);
  const p = await ctx2.newPage();
  await p.goto(URL, { waitUntil: 'load' });
  await p.waitForSelector('#cinematic');
  await p.evaluate(() => window.__nativeGamepadConnection(true));
  return p;
}
async function padPress(p, ms = 80) {
  await p.evaluate(() => window.__nativeGamepadUpdate({
    buttons: [{ p: true, v: 1 }, ...Array(16).fill({ p: false, v: 0 })],
    axes: [0, 0, 0, 0],
  }));
  await p.waitForTimeout(ms);
  await p.evaluate(() => window.__nativeGamepadUpdate({
    buttons: Array(17).fill({ p: false, v: 0 }),
    axes: [0, 0, 0, 0],
  }));
  await p.waitForTimeout(100);
}

const p1 = await withPadPage();
await padPress(p1);
const padTitleVisible = await p1.evaluate(() => {
  const el = document.getElementById('title-card');
  return !!el && el.style.opacity !== '0' && !el.classList.contains('title-card--hidden');
});
check('pad skip: cinematic gone after A press', await p1.evaluate(() => !document.getElementById('cinematic')));
check('pad skip: title visible (game did NOT auto-start)', padTitleVisible === true);
await padPress(p1);
// titleCard.dismiss() waits 500ms before removing the element so the
// fade can play out — wait past that.
await p1.waitForTimeout(700);
const padDismissed = await p1.evaluate(() => !document.getElementById('title-card'));
check('pad skip: 2nd A press dismisses the title', padDismissed === true);
await p1.context().close();

const p2 = await withPadPage();
// Hold A continuously through the skip — title must NOT dismiss.
await p2.evaluate(() => new Promise((resolve) => {
  const t0 = performance.now();
  const tick = () => {
    window.__nativeGamepadUpdate({
      buttons: [{ p: true, v: 1 }, ...Array(16).fill({ p: false, v: 0 })],
      axes: [0, 0, 0, 0],
    });
    if (performance.now() - t0 > 1500) resolve();
    else setTimeout(tick, 16);
  };
  tick();
}));
const holdState = await p2.evaluate(() => ({
  cinGone: !document.getElementById('cinematic'),
  titleStill: !!document.getElementById('title-card'),
}));
check('pad hold: cinematic still gets skipped on edge press', holdState.cinGone === true);
check('pad hold: held button does NOT bleed-dismiss the title', holdState.titleStill === true);
await p2.context().close();

// --- Scenario 2: full play-through (opt-in) ----------------------------
if (FULL) {
  console.log('--- Scenario 2: full play-through ---');
  // Reload and wait it out.
  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForSelector('#cinematic', { state: 'visible' });
  await page.waitForSelector('#cinematic', { state: 'detached', timeout: 35000 });
  const titleVisible = await page.evaluate(() => {
    const el = document.getElementById('title-card');
    return el && el.style.opacity !== '0';
  });
  check('cinematic completes and title card appears', titleVisible === true);
} else {
  console.log('(skipping full play-through; SMOKE_FULL=1 to enable)');
}

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
