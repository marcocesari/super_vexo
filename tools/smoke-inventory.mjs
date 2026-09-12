// Inventory smoke: E (or "+" on a pad) opens the gear screen, his kit is
// listed down the left, and Vexo stands on the right where you can turn
// him round.
//
// The figure is the awkward part to test and the one most likely to
// break quietly. He is drawn by the renderer into a scissored rectangle
// of the game's own canvas, which means any DOM background over that
// rectangle hides him completely — which is exactly what happened the
// first time, and a screenshot of the panel looked perfectly fine
// because everything else was there. So this reads the actual pixels.
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

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

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 900, height: 560 } });
// A pad with the standard layout, so the stick click (L3, button 10)
// and B (button 1) can be pressed from here.
await page.addInitScript(() => {
  window.__pad = {
    buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })),
    axes: [0, 0, 0, 0],
    id: 'Standard Pad (Vendor: 0000 Product: 0002)',
    index: 0, connected: true, mapping: 'standard', timestamp: 0,
  };
  navigator.getGamepads = () => [window.__pad];
  window.__press = (i, down) => {
    window.__pad.buttons[i] = { pressed: down, value: down ? 1 : 0 };
    window.__pad.timestamp++;
  };
  window.__axis = (i, v) => { window.__pad.axes[i] = v; window.__pad.timestamp++; };
  window.dispatchEvent(new Event('gamepadconnected'));
});
const tap = async (button) => {
  await page.evaluate((i) => window.__press(i, true), button);
  await page.waitForTimeout(120);
  await page.evaluate((i) => window.__press(i, false), button);
  await page.waitForTimeout(120);
};
const L3 = 10;
const B = 1;
const A = 0;
// A flick of the left stick: over the line, hold a couple of frames,
// back to rest. Standard mapping — axis 0 is LX (+right), axis 1 LY
// (+down).
const flick = async (dir) => {
  const [i, v] = { left: [0, -1], right: [0, 1], up: [1, -1], down: [1, 1] }[dir];
  await page.evaluate(([a, b]) => window.__axis(a, b), [i, v]);
  await page.waitForTimeout(120);
  await page.evaluate(([a]) => window.__axis(a, 0), [i]);
  await page.waitForTimeout(120);
};
const where = () => page.evaluate(() => {
  const inv = window.__superVexo.inventory;
  return { tab: inv.tab, focus: inv.focus, cursor: inv.cursor };
});
page.on('console', (m) => {
  const t = m.text();
  if (isNoise(t)) return;
  if (m.type() === 'error') errors.push(t);
  if (m.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(`${URL}/?skipIntro=1`, { waitUntil: 'load' });
await page.waitForTimeout(900);
await page.keyboard.press('Space');       // past the title card
await page.waitForTimeout(600);

check('it starts closed', !(await page.evaluate(() => window.__superVexo.inventory.isOpen)));

await page.keyboard.press('KeyT');
await page.waitForTimeout(500);
check('T opens it', await page.evaluate(() => window.__superVexo.inventory.isOpen));

const listed = await page.evaluate(() => {
  const items = [...document.querySelectorAll('.inventory__item')];
  return items.map((li) => li.textContent.replace(/\s+/g, ' ').trim());
});
check('his weapons are listed', listed.length > 0 && /sidearm/i.test(listed.join(' ')),
  listed.join(' | '));

// --- The Items tab ----------------------------------------------------------------
// What he has collected. Nothing at first; then a perk from a shop and an
// upgrade from the Tablet, taken directly off the ledgers the way a
// purchase would put them there, and both should be on the list without
// the tab being told.
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(200);
check('→ steps to the Items tab',
  (await page.evaluate(() => window.__superVexo.inventory.tab)) === 'items');
const bare = await page.evaluate(() =>
  [...document.querySelectorAll('.inventory__item')].map((li) => li.textContent.replace(/\s+/g, ' ').trim()));
check('which is empty to begin with',
  bare.length === 1 && /nothing collected/i.test(bare[0]), bare.join(' | '));
await page.evaluate(() => {
  const g = window.__superVexo;
  g.perks.take('heart');
  g.perks.take('heart');
  g.upgrades.buyFree('throttle');
});
await page.keyboard.press('ArrowLeft');
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(200);
const loot = await page.evaluate(() =>
  [...document.querySelectorAll('.inventory__item')].map((li) => li.textContent.replace(/\s+/g, ' ').trim()));
check('and lists what he has collected, stacked',
  loot.length === 2 && /vital patch\s*×2/i.test(loot[0]) && /boost throttle/i.test(loot[1]),
  loot.join(' | '));
await page.keyboard.press('ArrowLeft');
await page.waitForTimeout(200);
check('← steps back to Weapons',
  (await page.evaluate(() => window.__superVexo.inventory.tab)) === 'weapons');

// --- The cursor, TotK's way ----------------------------------------------------
// The left stick walks the menu, not the man. Up in the tabs row it
// changes category; down drops into the list, where up and down pick a
// thing and A takes it.
let at = await where();
check('the cursor starts on the tabs', at.focus === 'tabs' && at.tab === 'weapons');
await flick('down');
at = await where();
check('stick down drops into the list', at.focus === 'list' && at.cursor === 0,
  JSON.stringify(at));
check('and the picked entry is marked', await page.evaluate(
  () => /sidearm/i.test(document.querySelector('.inventory__item.is-picked')?.textContent ?? '')));
await flick('right');
at = await where();
check('left and right do nothing down in the list', at.tab === 'weapons' && at.focus === 'list',
  JSON.stringify(at));
await flick('up');
at = await where();
check('stick up climbs back to the tabs', at.focus === 'tabs', JSON.stringify(at));
await flick('right'); await flick('right'); await flick('right');
at = await where();
check('stick right along the tabs reaches System', at.tab === 'system' && at.focus === 'tabs',
  JSON.stringify(at));
await flick('down');
await flick('down');
at = await where();
check('down twice on System stands on the music button', at.focus === 'list' && at.cursor === 1
  && await page.evaluate(() => document.querySelector('[data-music]').classList.contains('is-picked')),
  JSON.stringify(at));
const musicBefore = await page.evaluate(() => document.querySelector('[data-music]').textContent);
await tap(A);
const musicAfter = await page.evaluate(() => document.querySelector('[data-music]').textContent);
check('and A presses it', musicBefore !== musicAfter, `${musicBefore} → ${musicAfter}`);
await flick('up'); await flick('up');
await flick('left'); await flick('left'); await flick('left');
at = await where();
check('and the way back to Weapons', at.tab === 'weapons' && at.focus === 'tabs', JSON.stringify(at));

// --- Is he actually on screen? --------------------------------------------------
// Read the canvas where the figure is meant to be. Anything that hides
// him — a background over the hole, a viewport off the canvas, a camera
// pointed at nothing — leaves the rectangle at its flat clear colour.
const pixels = await page.evaluate(() => {
  const g = window.__superVexo;
  const gl = g.renderer.getContext();
  const box = document.querySelector('.inventory__figure').getBoundingClientRect();
  const dpr = g.renderer.getPixelRatio();
  // Draw the panel, then read it back before the next frame clears it.
  g.inventory.render();
  const w = 40;
  const h = 60;
  const x = Math.round((box.left + box.width / 2) * dpr - w / 2);
  const y = Math.round((gl.drawingBufferHeight) - (box.top + box.height * 0.55) * dpr);
  const buf = new Uint8Array(w * h * 4);
  gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
  let distinct = new Set();
  let lit = 0;
  for (let i = 0; i < buf.length; i += 4) {
    distinct.add(`${buf[i] >> 4},${buf[i + 1] >> 4},${buf[i + 2] >> 4}`);
    if (buf[i] + buf[i + 1] + buf[i + 2] > 90) lit += 1;
  }
  return { shades: distinct.size, litFraction: +(lit / (w * h)).toFixed(2), box: Math.round(box.width) };
});
// A flat rectangle is one shade. A man standing in it is many.
check('Vexo is actually drawn in the panel', pixels.shades > 4 && pixels.litFraction > 0.15,
  `${pixels.shades} shades, ${(pixels.litFraction * 100).toFixed(0)}% of the sample lit`);

// --- Turning him ----------------------------------------------------------------
const turned = await page.evaluate(() => window.__superVexo.inventory.vexo.group.parent.rotation.y);
await page.keyboard.down('KeyA');
await page.waitForTimeout(700);
await page.keyboard.up('KeyA');
const after = await page.evaluate(() => window.__superVexo.inventory.vexo.group.parent.rotation.y);
check('A and D turn him round', Math.abs(after - turned) > 0.4,
  `${turned.toFixed(2)} → ${after.toFixed(2)} rad`);
await page.evaluate(() => window.__axis(0, 1));
await page.waitForTimeout(500);
await page.evaluate(() => window.__axis(0, 0));
const afterStick = await page.evaluate(() => window.__superVexo.inventory.vexo.group.parent.rotation.y);
check('but the stick does not — it is the cursor', Math.abs(afterStick - after) < 0.01,
  `${after.toFixed(3)} → ${afterStick.toFixed(3)} rad with the stick held right`);

const dragged = await page.evaluate(async () => {
  const inv = window.__superVexo.inventory;
  const el = document.querySelector('.inventory__figure');
  const box = el.getBoundingClientRect();
  const before = inv.vexo.group.parent.rotation.y;
  const at = (x) => ({ clientX: x, clientY: box.top + box.height / 2, bubbles: true });
  el.dispatchEvent(new PointerEvent('pointerdown', at(box.left + 40)));
  window.dispatchEvent(new PointerEvent('pointermove', at(box.left + 140)));
  window.dispatchEvent(new PointerEvent('pointerup', at(box.left + 140)));
  await new Promise((r) => requestAnimationFrame(r));
  return { moved: inv.vexo.group.parent.rotation.y - before };
});
check('and dragging turns him too', Math.abs(dragged.moved) > 0.3,
  `${dragged.moved.toFixed(2)} rad from a 100px drag`);

// --- Spinning him ---------------------------------------------------------------
// He stays where he was put: no drifting round on his own. Clicking the
// left stick sets him going, and B stops him — WITHOUT closing the
// screen, which is what B does the rest of the time.
const yawOf = () => page.evaluate(() => window.__superVexo.inventory.vexo.group.parent.rotation.y);
const parked = await yawOf();
await page.waitForTimeout(600);
check('he does not turn on his own', Math.abs((await yawOf()) - parked) < 0.01,
  `${parked.toFixed(3)} → ${(await yawOf()).toFixed(3)} rad over 600 ms`);
await tap(L3);
await page.waitForTimeout(600);
const spun = await yawOf();
check('clicking the left stick sets him spinning',
  await page.evaluate(() => window.__superVexo.inventory.spinning) && Math.abs(spun - parked) > 0.3,
  `${parked.toFixed(2)} → ${spun.toFixed(2)} rad`);
check('and it did not reset the game', await page.evaluate(() => window.__superVexo.inventory.isOpen));
await tap(B);
const held = await yawOf();
await page.waitForTimeout(500);
check('B stops him', !(await page.evaluate(() => window.__superVexo.inventory.spinning))
  && Math.abs((await yawOf()) - held) < 0.01,
  `${held.toFixed(3)} → ${(await yawOf()).toFixed(3)} rad after B`);
check('without closing the screen', await page.evaluate(() => window.__superVexo.inventory.isOpen));

// --- It takes the controls over --------------------------------------------------
const flying = await page.evaluate(async () => {
  const g = window.__superVexo;
  const before = g.ship.velocity.length();
  return { before };
});
await page.keyboard.down('KeyW');
await page.waitForTimeout(700);
await page.keyboard.up('KeyW');
const stillParked = await page.evaluate(() => window.__superVexo.ship.velocity.length());
check('the ship does not fly while it is open', stillParked <= flying.before + 0.01,
  `${flying.before.toFixed(2)} → ${stillParked.toFixed(2)} m/s`);

// --- Closing ---------------------------------------------------------------------
await page.keyboard.press('Escape');
await page.waitForTimeout(400);
check('Escape closes it', !(await page.evaluate(() => window.__superVexo.inventory.isOpen)));
await page.keyboard.press('KeyT');
await page.waitForTimeout(300);
await page.keyboard.press('KeyT');
await page.waitForTimeout(300);
check('and T is a toggle', !(await page.evaluate(() => window.__superVexo.inventory.isOpen)));

// The canvas has to be handed back whole: a viewport left where the
// panel was would draw the next frame of the game into that corner.
const restored = await page.evaluate(() => {
  // Straight from GL rather than through a Vector4 this file would have
  // to conjure up: [x, y, width, height] in device pixels.
  const gl = window.__superVexo.renderer.getContext();
  const v = gl.getParameter(gl.VIEWPORT);
  return { w: v[2], h: v[3], bufferW: gl.drawingBufferWidth, bufferH: gl.drawingBufferHeight };
});
check('the viewport is given back',
  restored.w === restored.bufferW && restored.h === restored.bufferH,
  `${restored.w}x${restored.h} of ${restored.bufferW}x${restored.bufferH}`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
