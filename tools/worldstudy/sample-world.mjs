// Take the same measurements of the generated world as were taken of
// the real one.
//
// `survey.py` downloaded the actual heights of twenty places on Earth
// and measured them. This samples the game's terrain function over a
// patch of the same size — same pixel count, same ground distance once
// the six-times shrink is undone — and writes the heights out so the
// identical measurements can be run against them. What comes back is a
// straight answer to "is this ground shaped like real ground", in
// degrees and metres rather than in opinions.
//
//   node tools/worldstudy/sample-world.mjs out/patches [x z [name]]...
import { mkdirSync, writeFileSync } from 'node:fs';
import { createTerrain, BIOME } from '../../src/world/terrain.js';

const outDir = process.argv[2] ?? 'worldstudy/patches';
mkdirSync(outDir, { recursive: true });

const N = 768;                 // same grid as the real tiles
const SHRINK = 6;
const REAL_SPAN = 10000;       // the real patches were 10 km across
const SPAN = REAL_SPAN / SHRINK;
const STEP = SPAN / N;

const terrain = createTerrain();

// Where to look. Rather than guess coordinates, walk the world until
// each kind of ground turns up, so the patches are of what they claim.
function findBiome(want, tries = 4000) {
  let bestFallback = null;
  for (let i = 0; i < tries; i++) {
    // A spiral outwards, so early hits are near the origin.
    const t = i * 0.7;
    const r = 120 * Math.sqrt(i);
    const x = Math.cos(t) * r;
    const z = Math.sin(t) * r;
    const s = terrain.sampleAt(x, z, 4);
    if (s.biome !== want) continue;
    // Take the middle of a region, not its edge: sample the corners of
    // a patch-sized square and demand most of them agree.
    let agree = 0;
    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0]]) {
      if (terrain.biomeAt(x + dx * SPAN * 0.35, z + dz * SPAN * 0.35) === want) agree++;
    }
    if (agree >= 4) return { x, z, solid: true };
    if (!bestFallback && agree >= 2) bestFallback = { x, z, solid: false };
  }
  return bestFallback;
}

const wanted = process.argv.length > 3
  ? [{ name: process.argv[5] ?? 'spot', x: +process.argv[3], z: +process.argv[4] }]
  : Object.values(BIOME).map((b) => ({ name: b }));

const index = [];
for (const w of wanted) {
  let { x, z } = w;
  if (x === undefined) {
    const found = findBiome(w.name);
    if (!found) { console.log(`${w.name.padEnd(9)} not found anywhere`); continue; }
    ({ x, z } = found);
  }
  const heights = new Float32Array(N * N);
  const counts = new Map();
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const px = x + (i - N / 2) * STEP;
      const pz = z + (j - N / 2) * STEP;
      const h = terrain.heightAt(px, pz);
      heights[j * N + i] = h;
      if ((i % 8 === 0) && (j % 8 === 0)) {
        const b = terrain.biomeAt(px, pz);
        counts.set(b, (counts.get(b) ?? 0) + 1);
      }
    }
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  const mix = [...counts.entries()].sort((a, b) => b[1] - a[1])
    .map(([b, n]) => `${b} ${Math.round((n / total) * 100)}%`).slice(0, 3).join(', ');
  writeFileSync(`${outDir}/${w.name}.f32`, Buffer.from(heights.buffer));
  index.push({
    name: w.name, x: Math.round(x), z: Math.round(z), n: N,
    // Reported in REAL metres, so the numbers line up with the survey's.
    metresPerPixel: STEP * SHRINK, shrink: SHRINK, mix,
  });
  console.log(`${w.name.padEnd(9)} at ${Math.round(x)},${Math.round(z)}  ${mix}`);
}
writeFileSync(`${outDir}/index.json`, JSON.stringify(index, null, 1));
