// Character smoke: Vexo is built, stands on the floor rather than in
// it, and the turntable shows every side of him.
//
// The measurements matter more than they look. He's assembled from
// dozens of hand-placed primitives hanging off a hip height, so a
// tweak to one limb length quietly sinks his boots through the ground
// or leaves him hovering — which is exactly what the first turntable
// render showed.
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
const page = await browser.newPage({ viewport: { width: 700, height: 900 } });
page.on('console', (m) => {
  const t = m.text();
  if (isNoise(t)) return;
  if (m.type() === 'error') errors.push(t);
  if (m.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(`${URL}/?character=1`, { waitUntil: 'load' });
await page.waitForTimeout(900);

const build = await page.evaluate(() => {
  const viewer = window.__superVexo.characterViewer;
  const root = viewer.vexo.group;
  root.updateWorldMatrix(true, true);
  // The bounds are measured by hand rather than with THREE.Box3: the
  // page is a bundle, so `import('three')` can't resolve a bare
  // specifier here. A Vector3 is reachable through any object we
  // already have.
  const Vec = root.position.constructor;
  const v = new Vec();
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  let meshes = 0;
  root.traverse((o) => {
    if (!o.isMesh) return;
    meshes++;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      const p = [v.x, v.y, v.z];
      for (let a = 0; a < 3; a++) {
        if (p[a] < min[a]) min[a] = p[a];
        if (p[a] > max[a]) max[a] = p[a];
      }
    }
  });
  return {
    meshes,
    feet: +min[1].toFixed(3),
    top: +max[1].toFixed(3),
    width: +(max[0] - min[0]).toFixed(2),
    depth: +(max[2] - min[2]).toFixed(2),
    height: +(max[1] - min[1]).toFixed(2),
  };
});

check('Vexo is assembled', build.meshes > 30, `${build.meshes} pieces`);
// Feet on the floor: the pedestal top is y = 0, and he is placed to
// stand on it, not in it.
check('he stands on the floor', Math.abs(build.feet) < 0.03, `soles at y=${build.feet}m`);
check('he is roughly person-sized', build.height > 1.7 && build.height < 1.9,
  `${build.height}m tall`);
// A figure modelled too flat vanishes in profile — the first pass was
// almost a cardboard cut-out.
check('he has depth as well as width', build.depth > 0.25 && build.width > 0.45,
  `${build.width}m across, ${build.depth}m deep`);
check('shoulders are wider than he is deep', build.width > build.depth,
  `${build.width} vs ${build.depth}`);

// --- The turntable turns -----------------------------------------------------
const turning = await page.evaluate(async () => {
  const viewer = window.__superVexo.characterViewer;
  viewer.setAngle(0);
  const before = viewer.vexo.group.parent.rotation.y;
  viewer.setAngle(Math.PI);
  const after = viewer.vexo.group.parent.rotation.y;
  return { before: +before.toFixed(3), after: +after.toFixed(3) };
});
check('the turntable can be aimed at any angle',
  turning.before === 0 && Math.abs(turning.after - Math.PI) < 0.01,
  `${turning.before} → ${turning.after}`);

// --- It renders --------------------------------------------------------------
const drawn = await page.evaluate(() => {
  const r = window.__superVexo.renderer;
  window.__superVexo.characterViewer.render();
  return { calls: r.info.render.calls, triangles: r.info.render.triangles };
});
check('a frame actually draws him', drawn.calls > 20 && drawn.triangles > 500,
  `${drawn.calls} draw calls, ${drawn.triangles} triangles`);

// The game's own UI must not be showing through. Both the Tablet and
// the title card stay in the DOM — they're hidden with `display` and
// `opacity` rather than removed — so this asks what's actually visible.
const quiet = await page.evaluate(() => {
  const visible = (el) => {
    if (!el) return false;
    const style = getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden'
      && Number(style.opacity) > 0.01 && !el.hidden;
  };
  return {
    tablet: visible(document.getElementById('tablet')),
    title: visible(document.getElementById('title-card')),
    label: visible(document.getElementById('character-label')),
  };
});
check('the game UI stays out of the way', !quiet.tablet && !quiet.title,
  `tablet=${quiet.tablet} title=${quiet.title}`);
check('his name plate is on screen', quiet.label);

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
