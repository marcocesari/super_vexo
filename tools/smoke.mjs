// Headless-Chromium smoke test:
//   1. Loads http://127.0.0.1:5173 (the dev server you start first).
//   2. Fails if any console.error / console.warning or page error fires.
//   3. Checks the title card is visible, presses a key, then asserts the
//      Tablet HUD ticks (velocity becomes non-zero after a throttle hold).
//   4. Measures FPS over 1.5s by counting requestAnimationFrame ticks.
//
// Usage:
//   Terminal A:   npm run dev
//   Terminal B:   node tools/smoke.mjs
//
// Or:            npm run smoke   (assumes dev server already running)
import { chromium } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';

const errors = [];
const warnings = [];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

// Filter out warnings that only ever come from the headless GL backend
// or from Playwright tearing the browser down — they don't appear in
// real Chrome on macOS and so don't reflect bugs in our code.
const HEADLESS_NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
];
function isNoise(text) {
  return HEADLESS_NOISE.some((re) => re.test(text));
}

page.on('console', (msg) => {
  const text = msg.text();
  if (isNoise(text)) return;
  if (msg.type() === 'error') errors.push(text);
  if (msg.type() === 'warning') warnings.push(text);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

await page.goto(URL, { waitUntil: 'load' });

// Title card visible?
await page.waitForSelector('#title-card', { state: 'visible' });
console.log('OK: title card rendered');

// Press a key to dismiss.
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });
console.log('OK: title card dismissed on keypress');

// Hold throttle for 1.5s, then check velocity is > 0 and FPS counts up.
const before = Date.now();
await page.keyboard.down('KeyW');
const rafCount = await page.evaluate(() => new Promise((resolve) => {
  let n = 0;
  const start = performance.now();
  function tick() {
    n++;
    if (performance.now() - start >= 1500) resolve(n);
    else requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}));
await page.keyboard.up('KeyW');
const elapsedMs = Date.now() - before;
const fps = Math.round((rafCount / elapsedMs) * 1000);
console.log(`OK: ${rafCount} frames in ${elapsedMs}ms → ${fps} fps`);

const velocity = await page.locator('[data-velocity]').innerText();
console.log(`HUD velocity after throttle hold: ${velocity}`);
if (parseFloat(velocity) <= 0) throw new Error('expected velocity > 0 after throttle hold');

// Check HUD shows KB.
const source = await page.locator('[data-source]').innerText();
console.log(`HUD input source: ${source}`);
if (!source.includes('KB')) throw new Error(`expected KB in input source, got: ${source}`);

await browser.close();

if (errors.length) {
  console.error('CONSOLE ERRORS:');
  for (const e of errors) console.error('  -', e);
}
if (warnings.length) {
  console.error('CONSOLE WARNINGS:');
  for (const w of warnings) console.error('  -', w);
}
if (errors.length || warnings.length) {
  console.error('FAIL: page produced console errors/warnings');
  process.exit(1);
}
// Headless Chromium uses a software GL backend, so 60+ fps is
// unrealistic and the absolute number is meaningless. This check is
// only "is the loop running at all?" — if it crashes mid-frame fps
// would be 0. Real-hardware fps must be eyeballed by a human in a
// real browser.
if (fps < 8) {
  console.error(`FAIL: fps ${fps} suggests the render loop stalled`);
  process.exit(1);
}
console.log('PASS: smoke test clean');
