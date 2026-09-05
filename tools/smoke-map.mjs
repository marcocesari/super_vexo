// The map, on M or "−": the whole world on one screen.
//
// Marco asked for "the full map, every single inch of the world", which
// is why the world was given edges — a last inch to draw up to. So what
// this checks, above everything else, is that the map really is the
// WHOLE world: land in the middle, sea all the way round the outside,
// and the arrow that says where you are standing in the right place.
//
// It reads the pixels rather than trusting the code that drew them. A
// map that renders as a blue rectangle would pass every check that only
// asked whether it had finished.
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

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 1000, height: 640 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(600);

// --- It draws itself, without being asked ---------------------------------------
const started = Date.now();
let drawn = false;
while (Date.now() - started < 30000) {
  if (await page.evaluate(() => window.__superVexo.map.progress >= 1)) { drawn = true; break; }
  await page.waitForTimeout(200);
}
check('the world draws itself in the background', drawn,
  `${((Date.now() - started) / 1000).toFixed(1)}s, without anyone opening it`);

// --- M opens it -----------------------------------------------------------------
check('it starts closed', !(await page.evaluate(() => window.__superVexo.map.isOpen)));
await page.keyboard.press('KeyM');
await page.waitForTimeout(500);
check('M opens the map', await page.evaluate(() => window.__superVexo.map.isOpen));

const head = await page.evaluate(() => ({
  title: document.querySelector('.map-title')?.textContent.trim(),
  scale: document.querySelector('.map-scale')?.textContent.trim(),
  building: !document.querySelector('.map-building').hidden,
}));
check('it says what it is', /world/i.test(head.title ?? ''), head.title);
// The scale line is the promise that this is the whole thing and not a
// window onto part of it.
check('and how big the world is', /\d+ × \d+ km/.test(head.scale ?? ''), head.scale);
check('and it is finished drawing', !head.building);

// --- Is it actually a world? -----------------------------------------------------
const picture = await page.evaluate(() => {
  const c = document.querySelector('.map-canvas');
  const g = c.getContext('2d');
  const d = g.getImageData(0, 0, c.width, c.height).data;
  // Where the map itself sits inside the canvas: it is fitted, so there
  // are bars either side. Find them by looking for the first column that
  // is not the page's backdrop.
  const at = (x, y) => {
    const i = (y * c.width + x) * 4;
    return [d[i], d[i + 1], d[i + 2], d[i + 3]];
  };
  let left = 0;
  while (left < c.width && at(left, c.height >> 1)[3] === 0) left++;
  let right = c.width - 1;
  while (right > 0 && at(right, c.height >> 1)[3] === 0) right--;
  let top = 0;
  while (top < c.height && at(c.width >> 1, top)[3] === 0) top++;
  let bottom = c.height - 1;
  while (bottom > 0 && at(c.width >> 1, bottom)[3] === 0) bottom--;

  const w = right - left;
  const h = bottom - top;
  const isSea = (p) => p[2] > p[0] + 12 && p[2] > p[1];
  let sea = 0;
  let land = 0;
  let shades = new Set();
  for (let j = 2; j < 60; j++) {
    for (let i = 2; i < 60; i++) {
      const p = at(left + Math.round((i / 60) * w), top + Math.round((j / 60) * h));
      if (isSea(p)) sea++; else land++;
      shades.add(`${p[0] >> 4},${p[1] >> 4},${p[2] >> 4}`);
    }
  }
  // The rim: every edge of the world must be water.
  let rimSea = 0;
  let rimTotal = 0;
  for (let k = 0; k < 40; k++) {
    const t = k / 39;
    for (const p of [
      at(left + Math.round(t * w), top + 2),
      at(left + Math.round(t * w), bottom - 2),
      at(left + 2, top + Math.round(t * h)),
      at(right - 2, top + Math.round(t * h)),
    ]) {
      rimTotal++;
      if (isSea(p)) rimSea++;
    }
  }
  return { seaShare: sea / (sea + land), shades: shades.size, rimSea, rimTotal, w, h };
});
check('the map is a picture of a world, not a flat rectangle',
  picture.shades > 40, `${picture.shades} distinct shades`);
check('with land in it and sea round it',
  picture.seaShare > 0.05 && picture.seaShare < 0.6,
  `${Math.round(picture.seaShare * 100)}% of it is water`);
// This is the check that the world really does end: if the continent ran
// off the edge of the map, the map would not be the whole world.
check('and the world ends in every direction',
  picture.rimSea / picture.rimTotal > 0.92,
  `${picture.rimSea} of ${picture.rimTotal} points round the rim are sea`);
check('the world is not stretched to fit the frame',
  Math.abs(picture.w / picture.h - 1.5) < 0.06,
  `${picture.w}×${picture.h} on screen for a 120×80 km world`);

// --- The arrow follows you --------------------------------------------------------
const moved = await page.evaluate(async () => {
  const g = window.__superVexo;
  const canvas = document.querySelector('.map-canvas');
  const shot = () => {
    const ctx = canvas.getContext('2d');
    const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    // Where the green arrow is. Nothing else on the map is that colour.
    let sx = 0; let sy = 0; let n = 0;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 1] > 200 && d[i] < 160 && d[i + 2] < 190 && d[i + 2] > 100) {
        const p = i / 4;
        sx += p % canvas.width;
        sy += Math.floor(p / canvas.width);
        n++;
      }
    }
    return n ? { x: sx / n, y: sy / n, n } : null;
  };
  const before = shot();
  // Fly a good distance east and see the arrow go with it.
  g.ship.mesh.position.x += 9000;
  await new Promise((r) => requestAnimationFrame(r));
  await new Promise((r) => requestAnimationFrame(r));
  const after = shot();
  return { before, after };
});
check('you are on the map', moved.before != null && moved.before.n > 8,
  moved.before ? `${moved.before.n} pixels of arrow` : 'no arrow found');
check('and the arrow moves when you do',
  moved.before && moved.after && moved.after.x - moved.before.x > 20,
  moved.before && moved.after
    ? `${Math.round(moved.before.x)} → ${Math.round(moved.after.x)} px across`
    : 'lost the arrow');

// --- Zooming ------------------------------------------------------------------------
// Marco asked for the left stick — up to come closer, down to pull back —
// and W and S on the keyboard, which is the same axis.
//
// What is checked here is not the number in `zoom` but the picture: the
// world has to actually get bigger, and it has to come closer to YOU
// rather than to the middle of the ocean.
const arrowAt = async () => page.evaluate(() => {
  const canvas = document.querySelector('.map-canvas');
  const d = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
  let sx = 0; let sy = 0; let n = 0; let covered = 0;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 8) covered++;
    if (d[i + 1] > 200 && d[i] < 160 && d[i + 2] < 190 && d[i + 2] > 100) {
      const p = i / 4;
      sx += p % canvas.width;
      sy += Math.floor(p / canvas.width);
      n++;
    }
  }
  return {
    x: n ? sx / n : null,
    y: n ? sy / n : null,
    // How much of the frame the world covers. Letterboxed at ×1.
    covered: covered / (canvas.width * canvas.height),
    w: canvas.width,
    h: canvas.height,
    zoom: window.__superVexo.map.zoom,
  };
});

// Stand in the middle of the world, so nothing is clamped by an edge.
await page.evaluate(() => {
  window.__superVexo.ship.mesh.position.x = 0;
  window.__superVexo.ship.mesh.position.z = 0;
});
await page.waitForTimeout(200);
const wide = await arrowAt();
check('the map opens on the whole world', Math.abs(wide.zoom - 1) < 0.001,
  `×${wide.zoom.toFixed(2)}`);

// Held down until it gets there, rather than for a fixed 900 ms: how
// far it zooms in that time depends on how many frames the machine
// managed, and a check that fails when the laptop is busy is a check
// nobody believes.
await page.keyboard.down('KeyW');
for (let i = 0; i < 40; i++) {
  if (await page.evaluate(() => window.__superVexo.map.zoom) > 1.8) break;
  await page.waitForTimeout(100);
}
await page.keyboard.up('KeyW');
await page.waitForTimeout(200);
const close = await arrowAt();
check('W zooms in', close.zoom > 1.8, `×${wide.zoom.toFixed(2)} → ×${close.zoom.toFixed(2)}`);
check('and the world really is drawn bigger', close.covered > wide.covered + 0.05,
  `${Math.round(wide.covered * 100)}% → ${Math.round(close.covered * 100)}% of the frame`);
check('and it comes closer to you, not to the middle of the sea',
  close.x != null && Math.abs(close.x - close.w / 2) < close.w * 0.06
    && Math.abs(close.y - close.h / 2) < close.h * 0.06,
  close.x != null
    ? `arrow ${Math.round(close.x)},${Math.round(close.y)} of ${close.w}x${close.h}`
    : 'lost the arrow');

await page.keyboard.down('KeyS');
for (let i = 0; i < 40; i++) {
  if (await page.evaluate(() => window.__superVexo.map.zoom) <= 1.0001) break;
  await page.waitForTimeout(100);
}
await page.keyboard.up('KeyS');
await page.waitForTimeout(200);
const back = await arrowAt();
check('S zooms out again, and stops at the whole world',
  Math.abs(back.zoom - 1) < 0.001, `×${back.zoom.toFixed(2)}`);

// Marco said the zoom did nothing, and the first thing wrong with a
// control you cannot find is that there is nothing on the screen saying
// it is there. So: a bar that fills, buttons to press, and every key
// anybody might try.
const barAt = () => page.evaluate(() =>
  parseFloat(document.querySelector('.map-zoom__fill')?.style.height) || 0);
check('there is a zoom bar, empty at the whole world', (await barAt()) < 1);

await page.click('.map-zoom__btn[data-in]');
await page.waitForTimeout(250);
const clicked = await page.evaluate(() => window.__superVexo.map.zoom);
check('the + button zooms in', clicked > 1.2, `×${clicked.toFixed(2)}`);
check('and the bar fills as it goes', (await barAt()) > 10, `${Math.round(await barAt())}% full`);

await page.mouse.move(500, 320);
await page.mouse.wheel(0, -240);
await page.waitForTimeout(250);
const wheeled = await page.evaluate(() => window.__superVexo.map.zoom);
check('the mouse wheel zooms too', wheeled > clicked, `×${clicked.toFixed(2)} → ×${wheeled.toFixed(2)}`);

await page.keyboard.down('ArrowUp');
for (let i = 0; i < 30; i++) {
  if (await page.evaluate(() => window.__superVexo.map.zoom) > wheeled * 1.2) break;
  await page.waitForTimeout(100);
}
await page.keyboard.up('ArrowUp');
const arrowKeyed = await page.evaluate(() => window.__superVexo.map.zoom);
check('and so do the arrow keys', arrowKeyed > wheeled, `×${arrowKeyed.toFixed(2)}`);

// Scrolling, which is the other half of a map you can zoom into.
const scrolled = await page.evaluate(async () => {
  const g = window.__superVexo;
  const before = { ...g.map.view };
  for (let i = 0; i < 30; i++) {
    g.map.panBy(1, 0, 0.016);
    await new Promise((r) => requestAnimationFrame(r));
  }
  const after = { ...g.map.view };
  g.map.recentre();
  await new Promise((r) => requestAnimationFrame(r));
  return { before, after, home: { ...g.map.view } };
});
check('the map scrolls east when you push it east',
  scrolled.after.panX > scrolled.before.panX + 100,
  `${Math.round(scrolled.before.panX)} → ${Math.round(scrolled.after.panX)} m`);
check('and comes back to you when asked',
  Math.abs(scrolled.home.panX) < 0.001);

// All the way out forgets the scrolling, or you open the map next time
// looking at the sea.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.map.panBy(1, 1, 0.5);
  for (let i = 0; i < 60; i++) g.map.zoomBy(-1, 0.1);
});
const zeroed = await page.evaluate(() => ({ ...window.__superVexo.map.view, zoom: window.__superVexo.map.zoom }));
check('and zooming all the way out puts the whole world back, centred',
  Math.abs(zeroed.zoom - 1) < 0.001 && zeroed.panX === 0 && zeroed.panZ === 0,
  `×${zeroed.zoom.toFixed(2)}, pan ${zeroed.panX},${zeroed.panZ}`);

// --- Closing, and the other button --------------------------------------------------
await page.keyboard.press('KeyM');
await page.waitForTimeout(300);
check('M closes it again', !(await page.evaluate(() => window.__superVexo.map.isOpen)));

// The Tablet lives in the inventory now, and the inventory is on T.
await page.keyboard.press('KeyT');
await page.waitForTimeout(500);
const gear = await page.evaluate(() => ({
  open: window.__superVexo.inventory.isOpen,
  tabs: [...document.querySelectorAll('.inventory__tab')].map((t) => t.textContent.trim()),
}));
check('T opens the gear screen', gear.open);
check('and the Tablet is one of its pages',
  gear.tabs.some((t) => /tablet/i.test(t)), gear.tabs.join(' | '));

// Walk to the Tablet page with a real key press. A synthetic
// KeyboardEvent dispatched at the document does not reach the game: it
// listens on the window, and the event is untrusted besides.
for (let i = 0; i < 4; i++) {
  if (await page.evaluate(() => window.__superVexo.inventory.tab) === 'tablet') break;
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(220);
}
const tabletShown = await page.evaluate(() => {
  const page_ = document.querySelector('.inventory__tablet');
  const tablet = page_?.querySelector('#tablet');
  return {
    tab: window.__superVexo.inventory.tab,
    hasTablet: !!tablet,
    visible: page_ ? !page_.hidden : false,
    velocity: document.querySelector('#tablet [data-velocity]')?.textContent,
  };
});
check('the Tablet page shows the Tablet',
  tabletShown.hasTablet && tabletShown.visible,
  `tab "${tabletShown.tab}", velocity reads ${tabletShown.velocity}`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
