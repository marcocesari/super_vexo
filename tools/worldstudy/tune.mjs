// The fast loop.
//
// `sample-world.mjs` + `compare.py` are the careful comparison — same
// grid, same code, same measurements as the twenty real places. They
// take minutes. This is the version for tuning a constant and looking
// again: a coarse grid, the numbers that matter, and the Earth figure
// each one is being aimed at printed beside it.
//
//   node tools/worldstudy/tune.mjs [gridSize]
import { createTerrain, BIOME } from '../../src/world/terrain.js';

const N = Number(process.argv[2] ?? 168);
const SHRINK = 6;
const SPAN = 10000 / SHRINK;          // a real 10 km patch, shrunk
const STEP = SPAN / N;

// What the real ground measured, from tools/worldstudy/findings.
// median slope, p95 slope, relief in real metres.
const TARGET = {
  [BIOME.MOUNTAIN]: { med: 21.7, p95: 50.0, relief: 1809, like: 'dolomites' },
  [BIOME.SNOW]: { med: 32.3, p95: 53.8, relief: 3709, like: 'mont-blanc' },
  [BIOME.HILLS]: { med: 7.5, p95: 23.0, relief: 475, like: 'jura/appalachians' },
  [BIOME.FOREST]: { med: 5.8, p95: 21.1, relief: 482, like: 'jura' },
  [BIOME.PLAIN]: { med: 0.7, p95: 1.9, relief: 25, like: 'po-plain' },
  [BIOME.SAVANNA]: { med: 3.4, p95: 13.2, relief: 466, like: 'serengeti' },
  [BIOME.DUNES]: { med: 7.4, p95: 24.6, relief: 330, like: 'erg/sossusvlei' },
  [BIOME.STONE_DESERT]: { med: 6.7, p95: 23.0, relief: 566, like: 'namib-gravel' },
  [BIOME.SALT]: { med: 4.1, p95: 40.4, relief: 1835, like: 'badwater' },
  [BIOME.BADLANDS]: { med: 1.9, p95: 12.3, relief: 238, like: 'bardenas' },
  [BIOME.MESA]: { med: 2.3, p95: 28.9, relief: 554, like: 'monument-valley' },
  [BIOME.BEACH]: { med: 0.0, p95: 10.4, relief: 143, like: 'etretat' },
};

const terrain = createTerrain();
const pct = (a, p) => a[Math.min(a.length - 1, Math.max(0, Math.floor(p * a.length)))];

// --- The world as a whole -------------------------------------------------------
{
  const M = 200;
  const WIDE = 90000;
  const counts = new Map();
  for (let j = 0; j < M; j++) {
    for (let i = 0; i < M; i++) {
      const b = terrain.biomeAt((i - M / 2) * (WIDE / M), (j - M / 2) * (WIDE / M));
      counts.set(b, (counts.get(b) ?? 0) + 1);
    }
  }
  const total = M * M;
  console.log('the world, 90 km across:');
  console.log('  ' + [...counts.entries()].sort((a, b) => b[1] - a[1])
    .map(([b, n]) => `${b} ${((100 * n) / total).toFixed(0)}%`).join('  '));
}

// --- Each kind of ground, measured ----------------------------------------------
/**
 * Find a patch that is mostly one kind of ground.
 *
 * Checked over the WHOLE patch, not a box in the middle of it. Sampling
 * five points 500 m apart and calling the answer a plain is how the
 * measurements first came back with a plain that had 1377 m of relief:
 * the middle was a plain and the rest of it was a mountain range.
 */
function findBiome(want, purity = 0.75) {
  let best = null;
  for (let i = 1; i < 9000; i++) {
    const r = 90 * Math.sqrt(i);
    const x = Math.cos(i * 0.7) * r;
    const z = Math.sin(i * 0.7) * r;
    if (terrain.biomeAt(x, z) !== want) continue;
    let agree = 0;
    const K = 6;
    for (let a = 0; a < K; a++) {
      for (let b = 0; b < K; b++) {
        const px = x + ((a + 0.5) / K - 0.5) * SPAN;
        const pz = z + ((b + 0.5) / K - 0.5) * SPAN;
        if (terrain.biomeAt(px, pz) === want) agree++;
      }
    }
    const share = agree / (K * K);
    if (share >= purity) return { x, z, share };
    if (!best || share > best.share) best = { x, z, share };
  }
  return best;
}

console.log(`\n${'ground'.padEnd(9)} ${'med°'.padStart(6)} ${'p95°'.padStart(6)} `
  + `${'relief'.padStart(7)}   vs Earth`);
for (const name of Object.values(BIOME)) {
  if (name === BIOME.SEA) continue;
  const target = TARGET[name];
  const at = findBiome(name);
  if (!at) { console.log(`${name.padEnd(9)}  — nowhere in the world`); continue; }
  const purity = ` ${Math.round(at.share * 100)}%`;
  const h = new Float64Array(N * N);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      h[j * N + i] = terrain.heightAt(at.x + (i - N / 2) * STEP, at.z + (j - N / 2) * STEP);
    }
  }
  const slopes = [];
  let lo = Infinity;
  let hi = -Infinity;
  for (let j = 1; j < N - 1; j++) {
    for (let i = 1; i < N - 1; i++) {
      const dx = (h[j * N + i + 1] - h[j * N + i - 1]) / (2 * STEP);
      const dz = (h[(j + 1) * N + i] - h[(j - 1) * N + i]) / (2 * STEP);
      slopes.push((Math.atan(Math.hypot(dx, dz)) * 180) / Math.PI);
      const v = h[j * N + i];
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
  }
  slopes.sort((a, b) => a - b);
  // Angles are the same at any scale; heights are six times smaller.
  const line = `${name.padEnd(9)} ${pct(slopes, 0.5).toFixed(1).padStart(6)} `
    + `${pct(slopes, 0.95).toFixed(1).padStart(6)} ${((hi - lo) * SHRINK).toFixed(0).padStart(7)}`;
  console.log(target
    ? `${line}${purity}   ${target.med.toFixed(1).padStart(5)} ${target.p95.toFixed(1).padStart(5)} `
      + `${String(target.relief).padStart(6)}  ${target.like}`
    : line + purity);
}
