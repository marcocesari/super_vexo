// Estronic and the two villages.
//
// Marco drew a capital in the middle of Continent Alpha and a village at
// either side of it. What this checks is that they are PLACES rather
// than decoration: standing on level ground, where he drew them, with
// walls you cannot walk through and streets you can.
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
const page = await browser.newPage({ viewport: { width: 940, height: 560 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(900);

// --- They are there, where he drew them ------------------------------------------
const towns = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  return w.info.settlements.map((s) => {
    let triangles = 0;
    s.group.traverse((o) => {
      if (!o.isMesh) return;
      triangles += o.geometry.index
        ? o.geometry.index.count / 3
        : o.geometry.attributes.position.count / 3;
    });
    // How level is the site? Sample right across it.
    const slopes = [];
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const r = s.radius * (k % 2 ? 0.8 : 0.4);
      slopes.push(w.terrain.sampleAt(s.x + Math.cos(a) * r, s.z + Math.sin(a) * r, 6).slopeDeg);
    }
    return {
      name: s.name,
      kind: s.kind,
      x: Math.round(s.x),
      z: Math.round(s.z),
      level: Math.round(s.level),
      triangles: Math.round(triangles),
      buildings: s.footprints.length,
      worstSlope: +Math.max(...slopes).toFixed(1),
      biome: w.info.biomeAt(s.x, s.z),
    };
  });
});
check('all three of his places are built', towns.length === 3,
  towns.map((t) => t.name).join(', '));
check('and one of them is the capital',
  towns.filter((t) => t.kind === 'capital').length === 1,
  towns.find((t) => t.kind === 'capital')?.name);
for (const t of towns) {
  check(`${t.name} is actually built`, t.triangles > 250 && t.buildings >= 14,
    `${t.triangles} triangles, ${t.buildings} buildings`);
  // A street that runs up and down a hillside is a street nobody would
  // lay out, and a house on a slope stands on one corner.
  check(`${t.name} stands on level ground`, t.worstSlope < 6,
    `worst slope across the site ${t.worstSlope}°, at ${t.level}m`);
}
// The capital is the biggest thing, and it is in the middle of the world.
const capital = towns.find((t) => t.kind === 'capital');
check('the capital is in the middle of the continent',
  Math.hypot(capital.x, capital.z) < 6000, `${capital.x}, ${capital.z}`);
check('and it is bigger than the villages',
  towns.every((t) => t === capital || t.triangles < capital.triangles),
  towns.map((t) => `${t.name.split(' ')[0]} ${t.triangles}`).join(', '));

// --- Walls are solid, streets are not ---------------------------------------------
const walking = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  const town = w.info.settlements.find((s) => s.kind === 'capital');
  const out = [0, 0];
  // Stood in the middle of a house.
  const f = town.footprints.find((p) => Math.hypot(p.x - town.x, p.z - town.z) > 40);
  w.resolveWalk(f.x, f.z, 0.4, out);
  const shoved = Math.hypot(out[0] - f.x, out[1] - f.z);
  const stillInside = Math.abs(out[0] - f.x) < f.halfX && Math.abs(out[1] - f.z) < f.halfZ;
  // And stood in the square, which is open ground.
  const open = [0, 0];
  w.resolveWalk(town.x + 26, town.z + 26, 0.4, open);
  return {
    shoved: +shoved.toFixed(1),
    stillInside,
    openMoved: +Math.hypot(open[0] - town.x - 26, open[1] - town.z - 26).toFixed(2),
    canLandOnAHouse: w.isClear(f.x, f.z, 3),
  };
});
check('a wall is solid', walking.shoved > 1 && !walking.stillInside,
  `pushed ${walking.shoved}m out of the house`);
check('and the square is not', walking.openMoved === 0,
  `moved ${walking.openMoved}m standing in the open`);
check('the ship cannot set down on a roof', !walking.canLandOnAHouse);

// --- Out of sight, out of the way --------------------------------------------------
const distance = await page.evaluate(async () => {
  const w = window.__superVexo.surface.world;
  const town = w.info.settlements.find((s) => s.kind === 'capital');
  w.setFocus(town.x, town.z);
  const near = town.group.visible;
  w.setFocus(town.x + 40000, town.z);
  const far = town.group.visible;
  w.setFocus(town.x, town.z);
  return { near, far };
});
check('a town shows when you are near it', distance.near);
check('and is put away when you are not', !distance.far);

// --- Named on the map ---------------------------------------------------------------
for (let i = 0; i < 90; i++) {
  if (await page.evaluate(() => window.__superVexo.map.progress >= 1)) break;
  await page.waitForTimeout(250);
}
await page.keyboard.press('KeyM');
await page.waitForTimeout(700);
const onMap = await page.evaluate(() => {
  const c = document.querySelector('.map-canvas');
  const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
  // The town marks are the palest thing on the map by some way.
  let pale = 0;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i] > 235 && d[i + 1] > 225 && d[i + 2] > 190) pale++;
  }
  return pale;
});
check('the towns are marked on the map', onMap > 200, `${onMap} pixels of mark and lettering`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
