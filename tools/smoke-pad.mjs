// An unfamiliar controller, and what the game does about it.
//
// The pad this drives is deliberately the awkward kind: it reports
// `mapping: ''`, its sticks are nowhere near axes 0-3, and axis 1 — the
// one the game reads as throttle by default — is a trigger sitting at
// -1, which without calibration reads as full throttle for ever. That
// is the bug in its worst form: not only does the stick do nothing, the
// ship flies off on its own.
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

// Where this pad really keeps its sticks.
const LY = 3;   // left stick, up/down
const LX = 4;   // left stick, left/right
const RX = 0;   // right stick, left/right
const RY = 5;   // right stick, up/down

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 940, height: 560 } });
await page.addInitScript(() => {
  const axes = [0, -1, 0, 0, 0, 0];   // axis 1 is a trigger, resting at -1
  window.__pad = {
    buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })),
    axes,
    id: 'Awkward Pad (Vendor: 0000 Product: 0001)',
    index: 0, connected: true, mapping: '', timestamp: 0,
  };
  navigator.getGamepads = () => [window.__pad];
  window.__axis = (i, v) => { window.__pad.axes[i] = v; window.__pad.timestamp++; };
  window.dispatchEvent(new Event('gamepadconnected'));
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

const push = async (axis, value, ms = 420) => {
  await page.evaluate(([i, v]) => window.__axis(i, v), [axis, value]);
  await page.waitForTimeout(ms);
};
const release = async (axis, rest = 0, ms = 300) => {
  await page.evaluate(([i, v]) => window.__axis(i, v), [axis, rest]);
  await page.waitForTimeout(ms);
};

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.evaluate(() => { try { localStorage.removeItem('super-vexo/pads'); } catch {} });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(700);

// --- It offers itself ---------------------------------------------------------------
check('a pad the game cannot read gets offered the setup, unasked',
  await page.evaluate(() => window.__superVexo.padSetup.isOpen));
check('and the screen is on the screen',
  await page.evaluate(() => !document.getElementById('pad-setup').hidden));

// The neutral sample has to finish before a push counts — it is what
// teaches the game that axis 1 is a trigger and not a stick at full tilt.
await page.waitForTimeout(700);

// --- Four pushes ----------------------------------------------------------------------
await push(LY, -1);            // fly forward
await release(LY);
await push(LX, -1);            // turn left
await release(LX);
await push(RX, 1);             // look right
await release(RX);
await push(RY, -1);            // look up
await release(RY);
await page.waitForTimeout(300);

const found = await page.evaluate(() => window.__superVexo.padSetup.bindings);
check('it finds the stick the player actually pushed',
  found?.throttle?.axisIndex === LY && found?.throttle?.sign === -1,
  `throttle → axis ${found?.throttle?.axisIndex} ${found?.throttle?.sign > 0 ? '+' : '−'}`);
check('and the one beside it', found?.yaw?.axisIndex === LX && found?.yaw?.sign === -1,
  `yaw → axis ${found?.yaw?.axisIndex}`);
check('and both halves of the look stick',
  found?.lookX?.axisIndex === RX && found?.lookY?.axisIndex === RY,
  `look → axes ${found?.lookX?.axisIndex}, ${found?.lookY?.axisIndex}`);
check('the trigger resting at -1 is left well alone',
  ![found?.throttle, found?.yaw, found?.lookX, found?.lookY].some((b) => b?.axisIndex === 1));
check('the screen says it is done',
  await page.evaluate(() => window.__superVexo.padSetup.isFinished));

// --- And it is remembered ------------------------------------------------------------
const stored = await page.evaluate(() => {
  try { return JSON.parse(localStorage.getItem('super-vexo/pads')); } catch { return null; }
});
const entry = stored?.['Awkward Pad (Vendor: 0000 Product: 0001)'];
check('written down against this controller', !!entry?.bindings,
  entry ? Object.keys(entry.bindings).join(', ') : 'nothing stored');

// --- The sticks now do what they say --------------------------------------------------
await page.evaluate(() => window.__superVexo.padSetup.close());
await page.waitForTimeout(200);

const idle = await page.evaluate(() => window.__superVexo.input.sample());
check('a trigger at rest is not full throttle any more', Math.abs(idle.throttle) < 0.01,
  `throttle ${idle.throttle.toFixed(2)}`);

await push(LY, -1, 250);
const flying = await page.evaluate(() => window.__superVexo.input.sample());
await release(LY, 0, 150);
check('pushing the stick forward is forward thrust', flying.throttle > 0.9,
  `throttle ${flying.throttle.toFixed(2)}`);

await push(LX, -1, 250);
const turning = await page.evaluate(() => window.__superVexo.input.sample());
await release(LX, 0, 150);
check('pushing it left turns left', turning.yaw > 0.9, `yaw ${turning.yaw.toFixed(2)}`);

await push(RX, 1, 250);
const looking = await page.evaluate(() => window.__superVexo.input.sample());
await release(RX, 0, 150);
check('and the right stick looks right', looking.lookX > 0.9, `lookX ${looking.lookX.toFixed(2)}`);

// --- Which is what Marco was actually complaining about -------------------------------
await page.keyboard.press('KeyM');
await page.waitForTimeout(400);
check('the map opens on the whole world',
  await page.evaluate(() => window.__superVexo.map.isOpen && window.__superVexo.map.zoom < 1.01));
await page.evaluate(() => window.__axis(3, -1));
await page.waitForFunction(() => window.__superVexo.map.zoom > 1.4, null, { timeout: 4000 })
  .catch(() => {});
const zoom = await page.evaluate(() => window.__superVexo.map.zoom);
await page.evaluate(() => window.__axis(3, 0));
check('and the stick zooms it — the whole point of the exercise', zoom > 1.4,
  `×${zoom.toFixed(2)}`);
await page.keyboard.press('KeyM');
await page.waitForTimeout(200);

// --- Asked once per controller, not once per session ----------------------------------
await page.reload({ waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(700);
check('a controller it has already been taught is not asked again',
  await page.evaluate(() => !window.__superVexo.padSetup.isOpen));
await push(LY, -1, 250);
const afterReload = await page.evaluate(() => window.__superVexo.input.sample());
await release(LY, 0, 150);
check('and the same stick still flies it after a reload', afterReload.throttle > 0.9,
  `throttle ${afterReload.throttle.toFixed(2)}`);

// --- A different controller asks again, and "not now" is an answer --------------------
await page.evaluate(() => { window.__pad.id = 'Another Awkward Pad'; window.__pad.timestamp++; });
await page.waitForTimeout(400);
check('a controller it has never seen does get asked',
  await page.evaluate(() => window.__superVexo.padSetup.isOpen));
await page.click('#pad-setup [data-cancel]');
await page.waitForTimeout(500);
check('saying not-now closes it',
  await page.evaluate(() => !window.__superVexo.padSetup.isOpen));
await page.waitForTimeout(600);
check('and it stays closed rather than asking again next frame',
  await page.evaluate(() => !window.__superVexo.padSetup.isOpen));
const skipped = await page.evaluate(() => {
  try { return JSON.parse(localStorage.getItem('super-vexo/pads'))?.['Another Awkward Pad']; }
  catch { return null; }
});
check('with the refusal written down, so it does not nag on the next load',
  skipped?.skipped === true);

// --- And the way back in ---------------------------------------------------------------
await page.keyboard.press('KeyT');
await page.waitForTimeout(500);
// One tab at a time, with a frame between: the game reads a key press
// once per frame, and two presses inside one frame are one press.
for (let i = 0; i < 4 && await page.evaluate(
  () => window.__superVexo.inventory.tab !== 'system'); i++) {
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(400);
}
check('the System tab is where it lives',
  await page.evaluate(() => window.__superVexo.inventory.tab === 'system'));
check('and it names the controller it can see',
  /Another Awkward Pad/.test(await page.evaluate(
    () => document.querySelector('#inventory [data-pad]').textContent)),
  await page.evaluate(() => document.querySelector('#inventory [data-pad]').textContent));
await page.click('#inventory [data-controller]');
await page.waitForTimeout(300);
check('the button opens the setup again',
  await page.evaluate(() => window.__superVexo.padSetup.isOpen
    && !window.__superVexo.inventory.isOpen));

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
console.log(failed ? '\nSMOKE FAILED' : '\nSMOKE PASSED');
process.exit(failed ? 1 : 0);
