// Draw the whole world to a file, using exactly the code the game's map
// uses. Handy for looking at the shape of the continent without opening
// the game.
//
//   node tools/worldstudy/map-preview.mjs out.ppm [pixels]
import { writeFileSync } from 'node:fs';
import { createTerrain, WORLD_HALF_X, WORLD_HALF_Z } from '../../src/world/terrain.js';
import { drawMap } from '../../src/world/mapImage.js';

const out = process.argv[2] ?? 'world.ppm';
const W = Number(process.argv[3] ?? 900);
const H = Math.round((W * WORLD_HALF_Z) / WORLD_HALF_X);
const t0 = Date.now();
const { pixels } = drawMap({
  terrain: createTerrain(), width: W, height: H,
  minX: -WORLD_HALF_X, maxX: WORLD_HALF_X, minZ: -WORLD_HALF_Z, maxZ: WORLD_HALF_Z,
});
const rgb = Buffer.alloc(W * H * 3);
for (let i = 0, j = 0; i < pixels.length; i += 4, j += 3) {
  rgb[j] = pixels[i]; rgb[j + 1] = pixels[i + 1]; rgb[j + 2] = pixels[i + 2];
}
writeFileSync(out, Buffer.concat([Buffer.from(`P6\n${W} ${H}\n255\n`), rgb]));
console.log(`${W}x${H} in ${((Date.now() - t0) / 1000).toFixed(1)}s -> ${out}`);
