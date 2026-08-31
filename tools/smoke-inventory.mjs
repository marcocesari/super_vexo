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
