// Landing smoke: flying into Earth puts you on the real streets of
// Castel Maggiore, and climbing out puts you back in space.
//
// Covers the whole round trip because it's a state swap with a lot of
// moving parts — scene background, fog, two sets of lights, every
// space object's visibility, and a 20 km teleport that the chase
// camera must cut to rather than fly.
//
// Run while `npm run dev` is up.
import { chromium } from 'playwright';

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

const browser = await chromium.launch();
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

// --- The town itself --------------------------------------------------------
const town = await page.evaluate(() => {
  const t = window.__superVexo.surface.town;
  return {
    buildings: t.info.buildings,
    town: t.info.town,
    homeFromAddress: Math.round(Math.hypot(t.home.x, t.home.z)),
    homeHeight: Math.round(t.info.homeStoreyHeight),
    homeGround: +t.info.homeGround.toFixed(1),
    hills: t.info.hills,
    meshes: t.group.children.length,
  };
});
check('the neighbourhood is built', town.buildings >= 25 && town.meshes >= 6,
  `${town.buildings} buildings, ${town.meshes} meshes`);
// The address point should fall inside (or right beside) the home block —
// that's the whole promise of the marker.
check('home block sits on the address', town.homeFromAddress <= 30,
  `${town.homeFromAddress}m from Via Giuseppe Impastato 28`);
check('home block is a four-storey condo', town.homeHeight >= 12 && town.homeHeight <= 14,
  `${town.homeHeight}m`);
// The first scan was 300m and clipped Centro Commerciale Le Piazze in
// half — most of the mall's units fell outside it and simply weren't
// there. The radius is 500m now; this is the guard against shrinking it.
check('the whole neighbourhood is in range', town.buildings >= 50,
  `${town.buildings} buildings`);

const place = JSON.parse(
  await (await fetch(`${URL}/src/world/places/castel-maggiore.json`)).text(),
);
await page.evaluate((p) => { window.__place = p; }, place);

// --- The long blocks stand on hills ------------------------------------------
check('the long blocks got their hills', town.hills >= 5, `${town.hills} hills`);
check('home stands on one of them', town.homeGround > 2, `${town.homeGround}m above the flat`);

// Roads drape over the terrain rather than being trimmed around it —
// six of the seven long blocks have a service road within a metre of
// the wall, so a hill always has a road on it. The invariant is that no
// road vertex ends up buried under the ground it lies on.
const roadDrape = await page.evaluate(() => {
  const t = window.__superVexo.surface.town;
  let worstBelow = 0;
  let checked = 0;
  for (const mesh of t.group.children) {
    if (mesh.name !== 'roads' && mesh.name !== 'paths') continue;
    const pos = mesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i += 3) {   // one vertex per triangle is plenty
      const below = t.groundHeightAt(pos.getX(i), pos.getZ(i)) - pos.getY(i);
      if (below > worstBelow) worstBelow = below;
      checked++;
    }
  }
  return { worstBelow: +worstBelow.toFixed(2), checked };
});
check('roads climb the hills instead of sinking into them',
  roadDrape.worstBelow < 0.2 && roadDrape.checked > 100,
  `deepest road vertex is ${roadDrape.worstBelow}m under the terrain, ${roadDrape.checked} checked`);

// --- Trees stand on the verge, not in the road -------------------------------
// They're scattered procedurally along the streets, so the only thing
// keeping them out of the carriageway is the clearance test in
// neighborhood.js. Check every single one against every road.
const trees = await page.evaluate(() => {
  const t = window.__superVexo.surface.town;
  return { count: t.trees.length, sample: t.trees.slice(0, 400) };
});
function distToSegment(px, pz, x1, z1, x2, z2) {
  const dx = x2 - x1; const dz = z2 - z1;
  const lenSq = dx * dx + dz * dz;
  if (lenSq < 1e-9) return Math.hypot(px - x1, pz - z1);
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (pz - z1) * dz) / lenSq));
  return Math.hypot(px - (x1 + t * dx), pz - (z1 + t * dz));
}
let worstTree = Infinity;
for (const [x, z] of trees.sample) {
  for (const r of place.roads) {
    for (let i = 0; i < r.pts.length - 1; i++) {
      const d = distToSegment(x, z, r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1]);
      worstTree = Math.min(worstTree, d - r.w / 2);
    }
  }
}
check('the town has street trees', trees.count > 40, `${trees.count} trees`);
check('no tree stands in a road', worstTree > 1.5,
  `closest tree is ${worstTree.toFixed(1)}m from the nearest kerb`);

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
    banner: !document.getElementById('landing-banner').hidden,
    street: document.querySelector('.landing-banner__street')?.textContent ?? '',
    townVisible: sv.surface.town.group.visible,
  };
});
check('flying into Earth lands the ship', landed.active);
check('you arrive hovering over the street', landed.altitude > 10 && landed.altitude < 120,
  `${landed.altitude}m up`);
check('the town is rendered', landed.townVisible);
check('the banner names the street', /Impastato/.test(landed.street), landed.street);
// The teleport is 20 km; without the camera cut you'd spend seconds
// watching the ship shrink into the distance.
check('the chase camera cuts to the new position, not flies', landed.camDist < 8,
  `camera ${landed.camDist} units behind`);

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

// And that floor follows the hills, rather than letting the ship fly
// through a five-metre rise.
const hilltop = await page.evaluate(async () => {
  const sv = window.__superVexo;
  const t = sv.surface.town;
  sv.ship.mesh.position.set(t.home.x, -20000 + 1, t.home.z);
  sv.ship.velocity.set(0, -30, 0);
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  return {
    alt: +sv.surface.altitude(sv.ship).toFixed(2),
    ground: +t.groundHeightAt(t.home.x, t.home.z).toFixed(2),
  };
});
check('the ship rests on the hill, not inside it', hilltop.alt > hilltop.ground,
  `altitude ${hilltop.alt}m over ${hilltop.ground}m of hill`);

// --- Climbing out returns you to space ---------------------------------------
const space = await page.evaluate(async () => {
  const sv = window.__superVexo;
  sv.ship.mesh.position.y += 900;
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise((r) => setTimeout(r, 250));
  const earthDist = sv.ship.mesh.position.distanceTo(
    sv.surface.town.group.position.clone().set(-90, 25, -330),
  );
  return {
    active: sv.surface.active,
    y: Math.round(sv.ship.mesh.position.y),
    earthDist: Math.round(earthDist),
    townVisible: sv.surface.town.group.visible,
    banner: !document.getElementById('landing-banner').hidden,
  };
});
check('climbing high enough leaves the atmosphere', !space.active);
check('you come out above the planet, not inside it', space.earthDist > 112,
  `${space.earthDist} units from Earth's centre`);
check('the town is hidden again', !space.townVisible);
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
