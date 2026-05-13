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
import { chromium } from 'playwright';

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
