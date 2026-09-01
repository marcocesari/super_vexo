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
// A pad the test can press. Talking is E on a keyboard and A on a pad,
// and A is also the button that climbs in and out of the ship, so both
// have to keep working.
await page.addInitScript(() => {
  window.__pad = {
    buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })),
    axes: [0, 0, 0, 0],
    id: 'test pad', index: 0, connected: true, mapping: 'standard', timestamp: 0,
  };
  navigator.getGamepads = () => [window.__pad];
  window.dispatchEvent(new Event('gamepadconnected'));
});
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

// --- The shipport ------------------------------------------------------------------
const port = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  const t = w.info.settlements.find((s) => s.kind === 'capital');
  return {
    pads: t.pads.length,
    // Every pad has to be somewhere the ship is actually allowed down.
    landable: t.pads.filter((p) => w.isClear(p.x, p.z, 3)).length,
    inTown: t.pads.every((p) => Math.hypot(p.x - t.x, p.z - t.z) < t.radius),
  };
});
check('the capital has a shipport', port.pads >= 4, `${port.pads} pads`);
check('and the ship can set down on every pad', port.landable === port.pads,
  `${port.landable} of ${port.pads}`);
check('which is inside the city', port.inTown);

// --- People, walking ------------------------------------------------------------------
// Bring the ship to the city first. They only walk while somebody is
// near enough to watch them, and setting the focus by hand does not
// count: the game moves it back to the ship on the very next frame.
await page.keyboard.press('KeyM');   // shut the map
await page.waitForTimeout(300);
await page.evaluate(() => {
  const g = window.__superVexo;
  const t = g.surface.world.info.settlements.find((s) => s.kind === 'capital');
  // On a landing pad, which is what they are for — and, in a city this
  // size, the difference between open ground and the middle of a block.
  const pad = t.pads[0];
  g.ship.mesh.position.set(pad.x, -20000 + t.level + 40, pad.z);
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(900);
const crowd = await page.evaluate(async () => {
  const w = window.__superVexo.surface.world;
  const t = w.info.settlements.find((s) => s.kind === 'capital');
  const before = t.people.folk.map((p) => ({ x: p.x, z: p.z }));
  const named = t.people.folk.every((p) => p.name && p.lines && p.lines.length);
  await new Promise((r) => setTimeout(r, 1800));
  const moved = t.people.folk.filter(
    (p, i) => Math.hypot(p.x - before[i].x, p.z - before[i].z) > 0.4,
  ).length;
  // And nobody may end up standing inside a building.
  const indoors = t.people.folk.filter(
    (p) => t.footprints.some((f) => Math.abs(p.x - f.x) < f.halfX && Math.abs(p.z - f.z) < f.halfZ),
  ).length;
  return { count: t.people.folk.length, moved, named, indoors };
});
check('there are people in the capital', crowd.count >= 10, `${crowd.count} of them`);
check('and they walk about', crowd.moved >= 3,
  `${crowd.moved} of ${crowd.count} moved in under two seconds`);
check('none of them is standing inside a building', crowd.indoors === 0,
  `${crowd.indoors} indoors`);
check('every one has a name and something to say', crowd.named);

// --- Talking to one -------------------------------------------------------------------
await page.keyboard.press('KeyL');
let onFoot = false;
for (let i = 0; i < 260; i++) {
  if (await page.evaluate(() => window.__superVexo.onFoot.state) === 'walk') { onFoot = true; break; }
  await page.waitForTimeout(100);
}
check('you can get out in the city', onFoot);

const met = await page.evaluate(() => {
  const g = window.__superVexo;
  const t = g.surface.world.info.settlements.find((s) => s.kind === 'capital');
  const p = t.people.folk[0];
  g.onFoot.position.x = p.x + 1.5;
  g.onFoot.position.z = p.z + 1.5;
  return p.name;
});
await page.waitForTimeout(500);
const prompt = await page.evaluate(() => document.getElementById('foot-prompt')?.textContent ?? '');
check('standing by somebody offers a word with them',
  prompt.toLowerCase().includes('talk') && prompt.includes(met), prompt);

await page.keyboard.press('KeyE');
await page.waitForTimeout(400);
const said = await page.evaluate(() => ({
  open: window.__superVexo.dialogue.isOpen,
  who: document.querySelector('.dialogue__who')?.textContent ?? '',
  line: document.querySelector('.dialogue__line')?.textContent ?? '',
  stopped: !window.__superVexo.surface.world.info.settlements
    .find((s) => s.kind === 'capital').people.folk[0].moving,
}));
check('and they answer', said.open && said.line.length > 20, `${said.who}: ${said.line.slice(0, 60)}…`);
check('by name', said.who === met, `${said.who} vs ${met}`);
check('and they stop walking to say it', said.stopped);

// Walking off ends it, which is what walking off means.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.onFoot.position.x += 30;
  g.onFoot.position.z += 30;
});
await page.waitForTimeout(500);
check('walking away ends the conversation',
  !(await page.evaluate(() => window.__superVexo.dialogue.isOpen)));

// --- And on a pad -------------------------------------------------------------------
const padPress = async (button) => {
  await page.evaluate((b) => {
    window.__pad.buttons[b] = { pressed: true, value: 1 };
    window.__pad.timestamp++;
  }, button);
  await page.waitForTimeout(120);
  await page.evaluate((b) => {
    window.__pad.buttons[b] = { pressed: false, value: 0 };
    window.__pad.timestamp++;
  }, button);
  await page.waitForTimeout(400);
};

const padWho = await page.evaluate(() => {
  const g = window.__superVexo;
  const t = g.surface.world.info.settlements.find((s) => s.kind === 'capital');
  const lad = g.onFoot.ladder.group.position;
  // Somebody well away from the ladder, so the two uses of A cannot be
  // confused with one another.
  const p = t.people.folk
    .filter((q) => Math.hypot(q.x - lad.x, q.z - lad.z) > 25)
    .sort((a, c) => Math.hypot(a.x - g.onFoot.position.x, a.z - g.onFoot.position.z)
      - Math.hypot(c.x - g.onFoot.position.x, c.z - g.onFoot.position.z))[0];
  g.onFoot.position.x = p.x + 1.5;
  g.onFoot.position.z = p.z + 1.5;
  return p.name;
});
await page.waitForTimeout(500);
const bothButtons = await page.evaluate(() => document.getElementById('foot-prompt')?.textContent ?? '');
check('the prompt names both buttons', /E/.test(bothButtons) && /A/.test(bothButtons), bothButtons);
await padPress(0);   // A
check('A on the pad talks to them too',
  await page.evaluate(() => window.__superVexo.dialogue.isOpen), `to ${padWho}`);

// A is also the button for the ship, and standing at the ladder it has
// to still be the ship: somebody wandering past must not be able to get
// between you and your own way home.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.dialogue.close();
  const lad = g.onFoot.ladder.group.position;
  g.onFoot.position.x = lad.x + 1.0;
  g.onFoot.position.z = lad.z + 1.0;
});
await page.waitForTimeout(500);
await padPress(0);
check('and at the ladder A still climbs aboard',
  await page.evaluate(() => window.__superVexo.onFoot.state) !== 'walk',
  await page.evaluate(() => window.__superVexo.onFoot.state));

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
