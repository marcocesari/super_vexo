// M2 smoke. Two scenarios, run end-to-end:
//
//   1. KB-only (regression for M1): without the bridge, the desktop
//      keyboard path must be identical — title card dismisses, throttle
//      W raises HUD velocity, source shows `KB`.
//
//   2. Simulated bridge: inject `window.__p5NativeHost = true` BEFORE
//      the page loads, then call `__nativeGamepadConnection(true)` and
//      drive `__nativeGamepadUpdate` to push the right-stick Y axis up.
//      The ship's throttle should rise WITHOUT any keyboard input, and
//      the HUD source should report `PAD`.
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

async function withPage(initScript, body) {
  const errors = [];
  const warnings = [];
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  if (initScript) await ctx.addInitScript(initScript);
  const page = await ctx.newPage();
  page.on('console', (msg) => {
    const t = msg.text();
    if (isNoise(t)) return;
    if (msg.type() === 'error') errors.push(t);
    if (msg.type() === 'warning') warnings.push(t);
  });
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  await page.goto(URL, { waitUntil: 'load' });
  await body(page);
  await browser.close();
  return { errors, warnings };
}

let failed = false;
function check(label, ok, extra = '') {
  if (ok) {
    console.log(`PASS  ${label}` + (extra ? `  (${extra})` : ''));
  } else {
    console.error(`FAIL  ${label}` + (extra ? `  (${extra})` : ''));
    failed = true;
  }
}

// --- Scenario 1: KB-only (M1 regression) -----------------------------------
console.log('--- Scenario 1: KB-only ---');
const r1 = await withPage(null, async (page) => {
  await page.waitForSelector('#title-card');
  await page.keyboard.press('Space');
  await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });

  await page.keyboard.down('KeyW');
  await page.waitForTimeout(1000);
  // Sample the speed while W is still DOWN: letting go stops the ship
  // dead (the "clear forward push to fly" rule), so a reading taken
  // after keyup is always 0.
  const v = parseFloat(await page.locator('[data-velocity]').innerText());
  await page.keyboard.up('KeyW');
  await page.waitForTimeout(50);

  check('KB velocity rises with W held', v > 0.5, `vel=${v}`);
  const src = await page.locator('[data-source]').innerText();
  check('HUD source includes KB', src.includes('KB'), `src=${src}`);
  check('HUD source does NOT include PAD', !src.includes('PAD'), `src=${src}`);
});
check('KB scenario: no console errors', r1.errors.length === 0, r1.errors.join(' | '));
check('KB scenario: no console warnings', r1.warnings.length === 0, r1.warnings.join(' | '));

// --- Scenario 2: simulated bridge ------------------------------------------
console.log('--- Scenario 2: simulated bridge ---');
const initScript = `
  // Run BEFORE any of our modules: this is what
  // WKUserScriptInjectionTimeAtDocumentStart looks like in real life.
  Object.defineProperty(window, '__p5NativeHost', { value: true, writable: false });
`;

const r2 = await withPage(initScript, async (page) => {
  // The bridge should report itself active.
  const bridgeActive = await page.evaluate(
    () => window.__nativeGamepadBridgeReady === true,
  );
  check('bridge module activates when __p5NativeHost is set', bridgeActive);

  await page.waitForSelector('#title-card');
  await page.keyboard.press('Space');
  await page.waitForSelector('#title-card', { state: 'detached', timeout: 2000 });

  // Connect the synthetic pad and start pushing the LEFT-stick UP
  // (negative Y in Web Gamepad axes = stick up = forward throttle).
  await page.evaluate(() => window.__nativeGamepadConnection(true));
  const startVel = parseFloat(await page.locator('[data-velocity]').innerText());

  // Drive ~60Hz for 1.5s.
  const pushDuration = 1500;
  await page.evaluate((ms) => {
    return new Promise((resolve) => {
      const start = performance.now();
      function tick() {
        window.__nativeGamepadUpdate({
          buttons: [],
          axes: [0, -1, 0, 0],   // LX=0, LY=-1 → full forward throttle
        });
        if (performance.now() - start >= ms) resolve();
        else setTimeout(tick, 16);
      }
      tick();
    });
  }, pushDuration);

  // Same as the keyboard case: read the speed before releasing the
  // stick, because a centred stick brakes the ship to a stop.
  const v = parseFloat(await page.locator('[data-velocity]').innerText());

  // Stop pushing.
  await page.evaluate(() => window.__nativeGamepadUpdate({ buttons: [], axes: [0, 0, 0, 0] }));
  await page.waitForTimeout(50);

  check('PAD throttle raises velocity', v > startVel + 1, `start=${startVel} end=${v}`);
  const src = await page.locator('[data-source]').innerText();
  // After releasing the stick, sources will be empty → default to KB.
  // So we need to verify PAD during the push. Re-push briefly and re-read.
  await page.evaluate(() => window.__nativeGamepadUpdate({ buttons: [], axes: [0, -1, 0, 0] }));
  await page.waitForTimeout(80);
  const srcDuringPush = await page.locator('[data-source]').innerText();
  check('HUD source shows PAD during stick push',
        srcDuringPush.includes('PAD'),
        `src=${srcDuringPush}`);

  // KB still works alongside PAD (overlap).
  await page.keyboard.down('KeyA');
  await page.waitForTimeout(100);
  const srcOverlap = await page.locator('[data-source]').innerText();
  check('HUD source shows PAD+KB when both active',
        srcOverlap.includes('PAD') && srcOverlap.includes('KB'),
        `src=${srcOverlap}`);
  await page.keyboard.up('KeyA');
});
check('PAD scenario: no console errors', r2.errors.length === 0, r2.errors.join(' | '));
check('PAD scenario: no console warnings', r2.warnings.length === 0, r2.warnings.join(' | '));

if (failed) {
  console.error('SMOKE FAILED');
  process.exit(1);
}
console.log('SMOKE PASSED');
