// Things that grow on the ground.
//
// What this checks is that the world is now GROWN rather than painted:
// that a forest has trees in it and a salt pan does not, that the same
// wood is there when you come back to it, that you cannot walk through
// a trunk, and that none of it costs more than the ground it stands on.
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
const page = await browser.newPage({ viewport: { width: 900, height: 540 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => {
  if (m.type() === 'error' && !/404|ReadPixels|CONTEXT_LOST/i.test(m.text())) errors.push(m.text());
});

await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(1400);
await page.keyboard.press('Space');
await page.waitForTimeout(1600);

/** Put the ship down over a point and let what grows there catch up. */
async function standAt(x, z, height = 12, settle = 2600) {
  await page.evaluate(([px, pz, h]) => {
    const g = window.__superVexo;
    const y = g.surface.world.groundHeightAt(px, pz);
    g.ship.mesh.position.set(px, -20000 + y + h, pz);
    g.ship.velocity.set(0, 0, 0);
  }, [x, z, height]);
  await page.waitForTimeout(settle);
  return page.evaluate(() => {
    const w = window.__superVexo.surface.world;
    const f = w.info.flora;
    return {
      live: f.live, counts: { ...f.counts }, patches: f.patches, visible: f.visible,
      fade: f.fade, build: f.build, triangles: Math.round(f.triangles()),
    };
  });
}

// --- Somewhere for each kind of ground, well clear of the towns ---------------------
const spots = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  const t = w.terrain;
  const found = {};
  for (let i = 0; i < 6000; i++) {
    const a = i * 0.618 * Math.PI * 2;
    const r = 300 + 12 * i;
    const x = w.spawn.x + Math.cos(a) * r;
    const z = w.spawn.z + Math.sin(a) * r;
    if (w.info.settlements.some((s) => Math.hypot(s.x - x, s.z - z) < s.radius + 2000)) continue;
    const s = t.sampleAt(x, z, 4);
    if (s.height < 6 || s.slopeDeg > 10) continue;
    if (!found[s.biome]) found[s.biome] = { x: Math.round(x), z: Math.round(z) };
  }
  return found;
});
check('the world has forest, plain and desert to stand in',
  !!(spots.forest && spots.plain && (spots.salt || spots.dunes)),
  Object.keys(spots).join(', '));

// --- A forest has trees in it ------------------------------------------------------
const forest = await standAt(spots.forest.x, spots.forest.z);
const trees = forest.counts.conifer + forest.counts.broadleaf + forest.counts.acacia;
check('a forest is made of trees', trees > 120, `${trees} standing`);
check('and there is grass under them', forest.counts.grass > 100,
  `${forest.counts.grass} tufts`);

// --- A desert is not ---------------------------------------------------------------
const bare = spots.dunes ?? spots.salt;
const desert = await standAt(bare.x, bare.z);
check('nothing grows on a sand sea or a salt pan', desert.live < 40,
  `${desert.live} things standing`);

// --- Savanna is scattered trees, which is the whole point of the word ---------------
if (spots.savanna) {
  const sav = await standAt(spots.savanna.x, spots.savanna.z);
  const some = sav.counts.acacia;
  check('dry grassland is scattered acacias, not woods', some > 20 && some < 700,
    `${some} trees`);
}

// --- The same wood, every time you come back to it ----------------------------------
const first = await standAt(spots.forest.x, spots.forest.z);
const away = await standAt(spots.plain.x, spots.plain.z);
const back = await standAt(spots.forest.x, spots.forest.z);
check('a wood you walk away from is the same wood when you come back',
  Math.abs(first.live - back.live) <= 2 && away.live !== first.live,
  `${first.live} → ${away.live} elsewhere → ${back.live}`);

// --- It stops at the town's edge ----------------------------------------------------
const inTown = await page.evaluate(async () => {
  const w = window.__superVexo.surface.world;
  const capital = w.info.settlements.find((s) => s.kind === 'capital');
  const f = w.info.flora;
  // Straight through the middle of the capital: paved, and built on.
  let onPaving = 0;
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    const x = capital.x + Math.cos(a) * capital.paved * 0.5;
    const z = capital.z + Math.sin(a) * capital.paved * 0.5;
    if (f.solidNear(x, z, 6)) onPaving++;
  }
  return { onPaving, paved: Math.round(capital.paved) };
});
check('nothing grows through the capital\'s concrete', inTown.onPaving === 0,
  `${inTown.onPaving} of 40 points on the paving, out to ${inTown.paved} m`);

// --- You cannot walk through a tree --------------------------------------------------
await standAt(spots.forest.x, spots.forest.z, 3);
const solid = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  const f = w.info.flora;
  const p = { x: window.__superVexo.ship.mesh.position.x, z: window.__superVexo.ship.mesh.position.z };
  // Find a trunk, then try to stand in the middle of it.
  for (let r = 1; r < 60; r += 0.8) {
    for (let k = 0; k < 32; k++) {
      const a = (k / 32) * Math.PI * 2;
      const x = p.x + Math.cos(a) * r;
      const z = p.z + Math.sin(a) * r;
      const hit = f.solidNear(x, z, 0.4);
      if (!hit) continue;
      const out = w.resolveWalk(hit.x, hit.z, 0.4, []);
      const pushed = Math.hypot(out[0] - hit.x, out[1] - hit.z);
      return { found: true, radius: +hit.r.toFixed(2), pushed: +pushed.toFixed(2),
        clear: !f.solidNear(out[0], out[1], 0.4) };
    }
  }
  return { found: false };
});
check('a trunk or a boulder is a solid thing', solid.found, solid.found ? `r = ${solid.radius} m` : 'no trunk found');
check('and walking into one pushes you out of it',
  solid.found && solid.pushed > 0.3 && solid.clear,
  solid.found ? `pushed ${solid.pushed} m, and out in the open` : '');

// --- The same wood from a kilometre up and from the doorstep --------------------------
//
// This is the one that matters about the tiers. Far away only every
// twenty-fifth candidate is planted; up close every one of them is. If
// the far ones were a DIFFERENT twenty-fifth, a wood would rearrange
// itself as you flew towards it, which is exactly the complaint —
// "trees that appear" — wearing a better disguise.
const subset = await page.evaluate(async ([x, z]) => {
  const g = window.__superVexo;
  const w = g.surface.world;
  const y = w.groundHeightAt(x, z);
  const sample = async (fromX, fromZ, height, waitMs) => {
    const gy = w.groundHeightAt(fromX, fromZ);
    g.ship.mesh.position.set(fromX, -20000 + gy + height, fromZ);
    g.ship.velocity.set(0, 0, 0);
    const until = performance.now() + waitMs;
    while (performance.now() < until) await new Promise((r) => requestAnimationFrame(r));
    // Always the same patch of ground, whoever is looking at it.
    return w.info.flora.trunksIn(x, z, 200);
  };
  // From a kilometre away, then from right on top of it.
  const far = await sample(x + 1150, z, 120, 3500);
  const near = await sample(x, z, 14, 3000);
  const key = (t) => `${t.x},${t.z}`;
  const nearSet = new Set(near.map(key));
  const kept = far.filter((t) => nearSet.has(key(t))).length;
  return { far: far.length, near: near.length, kept };
}, [spots.forest.x, spots.forest.z]);
check('a wood seen from a kilometre away is thinner, not different',
  subset.far > 0 && subset.near > subset.far && subset.kept === subset.far,
  `${subset.far} trees at 1150 m, all ${subset.kept} of them still there`
  + ` among the ${subset.near} you can see from inside it`);

// --- Climbing away from it ------------------------------------------------------------
const high = await standAt(spots.forest.x, spots.forest.z, 1200, 1600);
check('none of it is drawn from right up in the sky', !high.visible && high.live === 0,
  `${high.live} standing at 1200 m`);
const fading = await standAt(spots.forest.x, spots.forest.z, 830, 1600);
check('and on the way up it fades rather than switching off',
  fading.fade > 0.05 && fading.fade < 0.95, `drawn at ${fading.fade} of full size at 830 m`);
const low = await standAt(spots.forest.x, spots.forest.z, 12);
check('and it is all back when you come down again', low.live > 120, `${low.live} standing`);

// --- And it is cheap ------------------------------------------------------------------
// Estronic is 116,000 triangles. A forest that reaches a kilometre and
// a half in every direction has to come in under the city, or the
// cheapest thing in the world is the most expensive thing to draw.
check('a whole forest costs less than the city it stands outside',
  low.triangles < 110000, `${low.triangles} triangles`);
check('and it never spends more than its budget on a frame',
  low.build.ms <= 2.5, `${low.build.ms} ms`);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));

await browser.close();
console.log(failed ? '\nSMOKE FAILED' : '\nSMOKE PASSED');
process.exit(failed ? 1 : 0);
