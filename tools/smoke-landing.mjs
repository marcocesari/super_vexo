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
    homeHeight: Math.round(t.home.y),
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

// --- Trees stand on the verge, not in the road -------------------------------
// They're scattered procedurally along the streets, so the only thing
// keeping them out of the carriageway is the clearance test in
// neighborhood.js. Check every single one against every road.
const trees = await page.evaluate(() => {
  const t = window.__superVexo.surface.town;
  return { count: t.trees.length, sample: t.trees.slice(0, 400) };
});
const place = JSON.parse(
  await (await fetch(`${URL}/src/world/places/castel-maggiore.json`)).text(),
);
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
