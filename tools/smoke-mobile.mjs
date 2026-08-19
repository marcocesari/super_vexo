// Mobile smoke: the phone path through the game, in an iPhone-shaped
// browser context with touch enabled.
//
//   1. The intro and title prompts say "Tap", not "Press any button".
//   2. A tap skips the cinematic, and a second tap starts the game.
//   3. Rotating the phone (portrait ↔ landscape, both directions)
//      leaves the canvas filling the screen with a matching drawing
//      buffer and camera aspect. This is the regression net for the
//      "game doesn't rotate properly on iOS" bug: the old code sized
//      the canvas from window.innerWidth inside a resize listener,
//      which iOS reports stale mid-rotation.
//
// Plus: no console errors / warnings (usual headless allowlist).
//
// Run while `npm run dev` is up.
import { chromium, devices } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const PORTRAIT = { width: 390, height: 844 };
const LANDSCAPE = { width: 844, height: 390 };

const errors = [];
const warnings = [];
let failed = false;

function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  ...devices['iPhone 13'],
  isMobile: true,
  hasTouch: true,
  viewport: LANDSCAPE,
});
const page = await ctx.newPage();
page.on('console', (msg) => {
  const t = msg.text();
  if (isNoise(t)) return;
  if (msg.type() === 'error') errors.push(t);
  if (msg.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

await page.goto(URL, { waitUntil: 'load' });

// --- 1 + 2: tap through the intro and the title card ------------------------
const skipText = (await page.textContent('.cinematic__skip')) ?? '';
check('intro prompt is worded for touch', /tap/i.test(skipText), skipText);

const mid = { x: LANDSCAPE.width / 2, y: LANDSCAPE.height / 2 };
await page.touchscreen.tap(mid.x, mid.y);
await page.waitForSelector('#title-card', { timeout: 5000 });
check('tap skips the cinematic', true);

const startText = (await page.textContent('.title-card__prompt')) ?? '';
check('title prompt is worded for touch', /tap/i.test(startText), startText);

await page.touchscreen.tap(mid.x, mid.y);
await page.waitForSelector('#title-card', { state: 'detached', timeout: 5000 });
check('tap starts the game', true);

// --- 3: rotation ------------------------------------------------------------
async function checkOrientation(label, size) {
  await page.setViewportSize(size);
  // Give the ResizeObserver + settle timers a beat to land.
  await page.waitForTimeout(500);
  const info = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    const rect = canvas.getBoundingClientRect();
    return {
      window: [window.innerWidth, window.innerHeight],
      css: [Math.round(rect.width), Math.round(rect.height)],
      buffer: [canvas.width, canvas.height],
    };
  });
  const fills = info.css[0] === info.window[0] && info.css[1] === info.window[1];
  const cssAspect = info.css[0] / info.css[1];
  const bufAspect = info.buffer[0] / info.buffer[1];
  check(
    `rotate to ${label}`,
    fills && Math.abs(cssAspect - bufAspect) < 0.01,
    `window=${info.window} css=${info.css} buffer=${info.buffer}`,
  );
}

await checkOrientation('portrait', PORTRAIT);
await checkOrientation('landscape', LANDSCAPE);
await checkOrientation('portrait again', PORTRAIT);

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
