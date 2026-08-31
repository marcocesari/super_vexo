// Landing smoke: flying into the planet puts you on real ground, and
// climbing out puts you back in space.
//
// Covers the whole round trip because it is a state swap with a lot of
// moving parts — scene background, fog, two sets of lights, the camera
// far plane, every space object's visibility, and a 20 km teleport that
// the chase camera must cut to rather than fly.
//
// The ground itself is generated and endless (src/world/terrain.js), so
// what is checked here is that a WORLD arrives: varied ground, ground
// that follows the ship as it flies, and ground solid enough to stand
// a spacecraft on.
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
await page.keyboard.press('Space');
await page.waitForTimeout(400);

// --- The world itself -------------------------------------------------------
const world = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  // Sample the WHOLE world — it has edges now, 120 km by 80 — rather
  // than a five-kilometre square around the origin. A continent that
  // stands a hundred metres clear of the sea has no ocean in it at all
  // at that scale, which is how this check came to fail on a world that
  // is mostly coastline.
  const heights = [];
  const biomes = new Map();
  const HALF_X = 60000;
  const HALF_Z = 40000;
  for (let j = -14; j <= 14; j++) {
    for (let i = -14; i <= 14; i++) {
      const x = (i / 14) * HALF_X;
      const z = (j / 14) * HALF_Z;
      heights.push(w.groundHeightAt(x, z));
      const b = w.info.biomeAt(x, z);
      biomes.set(b, (biomes.get(b) ?? 0) + 1);
    }
  }
  heights.sort((a, b) => a - b);
  const at = (q) => heights[Math.floor(q * (heights.length - 1))];
  return {
    kinds: [...biomes.keys()],
    biggest: [...biomes.entries()].sort((a, b) => b[1] - a[1])[0],
    lowest: Math.round(heights[0]),
    highest: Math.round(heights[heights.length - 1]),
    median: Math.round(at(0.5)),
    reach: w.info.reach,
  };
});
// A world of one kind of ground everywhere is a bug that looks like a
// working game until you fly for a minute.
check('the world has many kinds of ground', world.kinds.length >= 6,
  world.kinds.join(', '));
check('and none of them covers everything',
  world.biggest[1] / (29 * 29) < 0.6,
  `${world.biggest[0]} is ${Math.round((world.biggest[1] / (29 * 29)) * 100)}% of it`);
check('there are mountains and there is sea',
  world.highest > 200 && world.lowest < -20,
  `${world.lowest}m to ${world.highest}m`);
check('the ground reaches to the horizon', world.reach > 8000, `${world.reach}m`);

// --- Ground you can put a ship down on ---------------------------------------
const clear = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  let found = 0;
  let tried = 0;
  for (let i = 1; i < 400; i++) {
    const r = 60 * Math.sqrt(i);
    const x = Math.cos(i * 0.7) * r;
    const z = Math.sin(i * 0.7) * r;
    tried++;
    if (w.isClear(x, z, 3)) found++;
  }
  return { found, tried, spawn: [w.spawn.x, w.spawn.y, w.spawn.z].map(Math.round) };
});
check('there is somewhere to land', clear.found > 30,
  `${clear.found} of ${clear.tried} spots flat and dry`);
check('and the world picked a starting one above the water', clear.spawn[1] > 0,
  `spawn at ${clear.spawn}`);


// --- Flying into Earth lands you ---------------------------------------------
const landed = await page.evaluate(async () => {
  const sv = window.__superVexo;
  sv.ship.mesh.position.set(-30, 65, -240); // inside Earth's landing band
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise((r) => setTimeout(r, 350));
  return {
    active: sv.surface.active,
    altitude: Math.round(sv.surface.altitude(sv.ship)),
    camDist: +sv.camera.position.distanceTo(sv.ship.mesh.position).toFixed(2),
    shipScale: sv.ship.mesh.scale.x,
    banner: !document.getElementById('landing-banner').hidden,
    street: document.querySelector('.landing-banner__street')?.textContent ?? '',
    worldVisible: sv.surface.world.group.visible,
    tiles: sv.surface.world.info.tilesBuilt,
    far: sv.camera.far,
  };
});
check('flying into the planet lands the ship', landed.active);
check('you arrive hovering over the ground', landed.altitude > 10 && landed.altitude < 220,
  `${landed.altitude}m up`);
check('the ground is rendered', landed.worldVisible);
check('and it was actually built', landed.tiles > 100, `${landed.tiles} tiles`);
// A camera that can only see 5 km cannot show a mountain range, and the
// whole point of the new world is the view.
check('the camera can see to the horizon down here', landed.far > 12000,
  `far plane ${landed.far}`);
check('the banner names the ground you are on', landed.street.length > 3, landed.street);
// The teleport is 20 km; without the camera cut you'd spend seconds
// watching the ship shrink into the distance. The boom is measured in
// ship lengths, and the ship is scaled up on the surface, so the bound
// scales with it — see chaseCamera.js.
check('the chase camera cuts to the new position, not flies',
  landed.camDist < 8 * landed.shipScale,
  `camera ${landed.camDist} units behind a ${landed.shipScale}x ship`);

// --- The ground stops you ----------------------------------------------------
const floor = await page.evaluate(async () => {
  const sv = window.__superVexo;
  sv.ship.mesh.position.y -= 300;      // dive at the street
  sv.ship.velocity.set(0, -40, 0);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return { altitude: +sv.surface.altitude(sv.ship).toFixed(2), vy: sv.ship.velocity.y };
});
check('the street is a floor, not a crash', floor.altitude > 0 && floor.vy >= 0,
  `alt=${floor.altitude}m vy=${floor.vy}`);

// And that floor follows the ground, rather than letting the ship fly
// through a hill.
const hilltop = await page.evaluate(async () => {
  const sv = window.__superVexo;
  const w = sv.surface.world;
  // Find some ground with a real slope on it and try to fly into it.
  let spot = null;
  for (let i = 1; i < 3000 && !spot; i++) {
    const r = 70 * Math.sqrt(i);
    const x = sv.ship.mesh.position.x + 20000 * 0 + Math.cos(i * 0.7) * r;
    const z = sv.ship.mesh.position.z + Math.sin(i * 0.7) * r;
    if (w.groundHeightAt(x, z) > 60) spot = { x, z };
  }
  if (!spot) return null;
  sv.ship.mesh.position.set(spot.x, -20000 + 1, spot.z);
  sv.ship.velocity.set(0, -30, 0);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return {
    alt: +sv.surface.altitude(sv.ship).toFixed(2),
    ground: +w.groundHeightAt(spot.x, spot.z).toFixed(2),
  };
});
check('the ship rests on the hill, not inside it',
  hilltop != null && hilltop.alt > hilltop.ground,
  hilltop ? `altitude ${hilltop.alt}m over ${hilltop.ground}m of hill` : 'no hill found');

// --- Climbing out returns you to space ---------------------------------------
const space = await page.evaluate(async () => {
  const sv = window.__superVexo;
  // Above LEAVE_ALTITUDE, which is 1500 m now: the ceiling had to clear
  // the tallest ground in the world, or crossing a mountain range would
  // throw you into space.
  sv.ship.mesh.position.y += 2200;
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise((r) => setTimeout(r, 250));
  // Earth sits at (-90, 25, -330) in the solar system; see world/earth.js.
  const earthDist = sv.ship.mesh.position.distanceTo(
    new (sv.ship.mesh.position.constructor)(-90, 25, -330),
  );
  return {
    active: sv.surface.active,
    y: Math.round(sv.ship.mesh.position.y),
    earthDist: Math.round(earthDist),
    worldVisible: sv.surface.world.group.visible,
    banner: !document.getElementById('landing-banner').hidden,
  };
});
check('climbing high enough leaves the atmosphere', !space.active);
check('you come out above the planet, not inside it', space.earthDist > 112,
  `${space.earthDist} units from Earth's centre`);
check('the ground is hidden again', !space.worldVisible);
check('the banner is gone', !space.banner);
check('the ship is back in the solar system', Math.abs(space.y) < 5000, `y=${space.y}`);

// --- Reset from the surface --------------------------------------------------
const afterReset = await page.evaluate(async () => {
  const sv = window.__superVexo;
  sv.ship.mesh.position.set(-30, 65, -240);   // land again
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  const landedAgain = sv.surface.active;
  sv.resetGame();
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return {
    landedAgain,
    active: sv.surface.active,
    pos: sv.ship.mesh.position.toArray().map((n) => Math.round(n)),
  };
});
check('you can land a second time', afterReset.landedAgain);
check('reset takes off before homing the ship', !afterReset.active
  && afterReset.pos.every((n) => n === 0), `ship at [${afterReset.pos}]`);

// --- Console ------------------------------------------------------------------
check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
