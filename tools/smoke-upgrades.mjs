// Upgrades-screen smoke: scrolling and getting back out.
//
//   1. The card scrolls — with the left stick, the D-pad, and a finger.
//   2. B closes it (and Esc on the keyboard), landing back on the
//      Tablet rather than on a bare flight view.
//
// The pad is faked by overriding `navigator.getGamepads()` in the page,
// which is exactly the seam `native-gamepad-bridge.js` uses on iOS.
//
// Run while `npm run dev` is up.
import { chromium, devices } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const NOISE = [
  /GPU stall due to ReadPixels/i,
  /CONTEXT_LOST_WEBGL/i,
  /loseContext/i,
  /non-standard mapping/i,
];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
let failed = false;

function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await chromium.launch();
// A landscape phone: the viewport where the list actually overflows.
const ctx = await browser.newContext({
  ...devices['iPhone 13'],
  isMobile: true,
  hasTouch: true,
  viewport: { width: 844, height: 390 },
});
const page = await ctx.newPage();
page.on('console', (msg) => {
  const t = msg.text();
  if (isNoise(t)) return;
  if (msg.type() === 'error') errors.push(t);
  if (msg.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

// Install the fake pad before any page script runs.
await page.addInitScript(() => {
  const state = {
    axes: [0, 0, 0, 0],
    buttons: Array.from({ length: 16 }, () => ({ pressed: false, value: 0 })),
  };
  window.__pad = {
    setAxis(i, v) { state.axes[i] = v; },
    press(i) { state.buttons[i] = { pressed: true, value: 1 }; },
    release(i) { state.buttons[i] = { pressed: false, value: 0 }; },
    releaseAll() {
      state.buttons = state.buttons.map(() => ({ pressed: false, value: 0 }));
      state.axes = [0, 0, 0, 0];
    },
  };
  navigator.getGamepads = () => [{
    id: 'smoke-pad', index: 0, connected: true, mapping: 'standard',
    axes: state.axes, buttons: state.buttons, timestamp: performance.now(),
  }];
});

await page.goto(`${URL}/?skipIntro=1`, { waitUntil: 'load' });
await page.waitForSelector('#title-card');
await page.touchscreen.tap(422, 195);
await page.waitForSelector('#title-card', { state: 'detached', timeout: 5000 });

const CARD = '#screen-upgrades .screen-card';
// The Tablet is hidden while flying, so the screen is opened the way a
// player does it: the pad's Y button (index 3), or U on a keyboard.
async function openUpgrades() {
  await page.evaluate(() => window.__pad.press(3));
  await page.waitForTimeout(120);
  await page.evaluate(() => window.__pad.release(3));
  await page.waitForSelector('#screen-upgrades:not([hidden])', { timeout: 5000 });
}
const scrollTop = () => page.$eval(CARD, (el) => el.scrollTop);
const isOpen = () => page.$eval('#screen-upgrades', (el) => !el.hidden);
const tabletVisible = () =>
  page.$eval('#tablet', (el) => getComputedStyle(el).display !== 'none');

await openUpgrades();
await page.waitForTimeout(200);

// --- 1: the card overflows and can be scrolled ------------------------------
const metrics = await page.$eval(CARD, (el) => ({
  scrollH: el.scrollHeight, clientH: el.clientHeight,
}));
check(
  'upgrades card overflows the phone screen (so scrolling is needed)',
  metrics.scrollH > metrics.clientH,
  `content=${metrics.scrollH}px window=${metrics.clientH}px`,
);

// Left stick down.
await page.evaluate(() => window.__pad.setAxis(1, 1));
await page.waitForTimeout(400);
await page.evaluate(() => window.__pad.setAxis(1, 0));
const afterStick = await scrollTop();
check('left stick scrolls the list down', afterStick > 0, `scrollTop=${afterStick}`);

// Stick up returns to the top.
await page.evaluate(() => window.__pad.setAxis(1, -1));
await page.waitForTimeout(500);
await page.evaluate(() => window.__pad.setAxis(1, 0));
const afterStickUp = await scrollTop();
check('left stick scrolls back up', afterStickUp < afterStick, `scrollTop=${afterStickUp}`);

// D-pad down (button 13).
await page.evaluate(() => window.__pad.press(13));
await page.waitForTimeout(400);
await page.evaluate(() => window.__pad.release(13));
const afterDpad = await scrollTop();
check('D-pad scrolls the list', afterDpad > afterStickUp, `scrollTop=${afterDpad}`);

// Finger swipe — the game canvas eats gestures, so this proves the card
// opted back in with touch-action: pan-y.
await page.evaluate((sel) => { document.querySelector(sel).scrollTop = 0; }, CARD);
await page.touchscreen.tap(422, 195); // ensure no pad edge is pending
await page.evaluate((sel) => {
  const el = document.querySelector(sel);
  const r = el.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const opts = { bubbles: true, cancelable: true };
  const mk = (type, y) => new TouchEvent(type, {
    ...opts,
    touches: type === 'touchend' ? [] : [new Touch({ identifier: 1, target: el, clientX: x, clientY: y })],
    changedTouches: [new Touch({ identifier: 1, target: el, clientX: x, clientY: y })],
  });
  el.dispatchEvent(mk('touchstart', r.bottom - 20));
  el.dispatchEvent(mk('touchmove', r.top + 20));
  el.dispatchEvent(mk('touchend', r.top + 20));
}, CARD);
const cardTouchAction = await page.$eval(CARD, (el) => getComputedStyle(el).touchAction);
check('card allows finger scrolling', cardTouchAction.includes('pan-y'), `touch-action: ${cardTouchAction}`);

// --- 2: getting back out ----------------------------------------------------
await page.evaluate(() => window.__pad.press(1)); // B
await page.waitForTimeout(150);
await page.evaluate(() => window.__pad.release(1));
await page.waitForTimeout(200);
check('B closes the upgrades screen', !(await isOpen()));
check('B lands back on the Tablet', await tabletVisible());

// Esc does the same on a keyboard.
await openUpgrades();
await page.waitForTimeout(150);
await page.keyboard.press('Escape');
await page.waitForTimeout(200);
check('Esc closes the upgrades screen', !(await isOpen()));

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
