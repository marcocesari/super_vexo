// Drawing the world as a map.
//
// A map is not a photograph of the ground. It is a drawing that answers
// "where am I and what is out there", so this leans on the two things
// that carry that: the SHAPE of the land, shown by shading it as though
// the sun were low in the north-west, and the KIND of ground, shown by
// colour. The colours are the same ones the ground itself is painted
// with — sampled off satellite pictures of twenty real places (see
// terrain.js) — brightened a little, because a map read at a glance
// wants more contrast than a landscape looked at from inside it.
//
// No DOM and no Three.js here on purpose: `src/map.js` puts this on a
// canvas in the game, and `tools/worldstudy/map-preview.mjs` writes it
// to a file, and both use exactly the same code, so what the tool shows
// is what the player sees.
import { BIOME, GROUND_COLOR, SEA_LEVEL, fromReal } from './terrain.js';

// The sun for the shading: low, in the north-west, which is where map
// makers have put it for two hundred years because it is the direction
// that makes a valley read as a valley rather than as a ridge.
const SUN_FROM = Math.PI * 1.25;
const SUN_HEIGHT = 0.55;

// How far apart to sample the slow climate fields. They change over
// kilometres, so asking at every pixel of a map whose pixels are a
// hundred metres wide is a hundred times more work for the same answer.
const REGION_EVERY = 8;

const rgb = (hex) => [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];

const SEA_SHALLOW = rgb(0x2f6480);
const SEA_DEEP = rgb(0x0b2033);
const SHORE = rgb(0xe0d3ae);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const mix = (a, b, t) => a + (b - a) * t;

/**
 * What colour a piece of land is on the map, before it is shaded.
 *
 * Blended from the climate rather than looked up per biome, exactly as
 * the ground is: a classifier draws a hard line wherever it changes its
 * mind, and on a map of a whole continent those lines look like borders
 * on a political atlas.
 */
function landColour(terrain, x, z, height, region, out) {
  const dryness = 1 - region.moisture;
  const { sandy, plateau } = terrain.styleAt(region);
  const set = (hex) => {
    const c = rgb(hex);
    out[0] = c[0]; out[1] = c[1]; out[2] = c[2];
  };
  const towards = (hex, t) => {
    if (t <= 0) return;
    const c = rgb(hex);
    out[0] = mix(out[0], c[0], t);
    out[1] = mix(out[1], c[1], t);
    out[2] = mix(out[2], c[2], t);
  };
  const smooth = (a, b, v) => {
    const t = clamp01((v - a) / (b - a));
    return t * t * (3 - 2 * t);
  };

  set(GROUND_COLOR[BIOME.FOREST]);
  towards(GROUND_COLOR[BIOME.PLAIN], smooth(0.28, 0.44, dryness));
  towards(GROUND_COLOR[BIOME.SAVANNA], smooth(0.42, 0.58, dryness));
  towards(GROUND_COLOR[BIOME.STONE_DESERT], smooth(0.55, 0.68, dryness));
  towards(GROUND_COLOR[BIOME.MESA], plateau * 0.85);
  towards(GROUND_COLOR[BIOME.DUNES], sandy);

  // Snow on the tops, and bare rock below it, which is what makes a
  // range read as a range on a map rather than as a green smudge.
  const snowline = terrain.snowlineAt(x, z);
  towards(0x8d8779, smooth(snowline * 0.55, snowline * 0.9, height));
  towards(GROUND_COLOR[BIOME.SNOW], smooth(snowline * 0.86, snowline * 1.15, height));

  // The shoreline: a pale rim, so the coast can be traced by eye.
  if (height < fromReal(70)) {
    const t = 1 - clamp01(height / fromReal(70));
    out[0] = mix(out[0], SHORE[0], t * t * 0.6);
    out[1] = mix(out[1], SHORE[1], t * t * 0.6);
    out[2] = mix(out[2], SHORE[2], t * t * 0.6);
  }
}

/**
 * A map being drawn, a few rows at a time.
 *
 * Drawing a whole continent is a second or two of arithmetic — far too
 * long to do between two frames — so this hands out the work in bands
 * and reports how far it has got. The game starts it at load and it is
 * finished long before anyone presses M.
 *
 * @param {object} o
 * @param {*} o.terrain          from createTerrain()
 * @param {number} o.width       pixels
 * @param {number} o.height      pixels
 * @param {number} o.minX,o.maxX,o.minZ,o.maxZ  the ground it covers, in metres
 */
export function createMapDrawing({ terrain, width, height, minX, maxX, minZ, maxZ }) {
  const pixels = new Uint8ClampedArray(width * height * 4);
  const stepX = (maxX - minX) / width;
  const stepZ = (maxZ - minZ) / height;
  // Two rows of heights: the one being drawn and the one below it, so a
  // pixel can be shaded from the lie of the land around it.
  const rowA = new Float64Array(width + 1);
  const rowB = new Float64Array(width + 1);
  const colour = [0, 0, 0];
  let regions = null;
  let regionRow = -1;
  // One climate, worked out between the two nearest samples. Reading the
  // nearest one instead drew the map in eight-pixel blocks, like a badly
  // scaled photograph — the fields change over kilometres, but a hard
  // edge every eight pixels is visible however slowly the thing behind
  // it moves.
  const here = { continent: 0, uplift: 0, moisture: 0, heat: 0 };
  let row = 0;

  const heightsInto = (into, z) => {
    for (let i = 0; i <= width; i++) into[i] = terrain.heightAt(minX + i * stepX, z);
  };

  /** The climate along one row, sampled every REGION_EVERY pixels. */
  const regionsFor = (z) => {
    const n = Math.ceil(width / REGION_EVERY) + 1;
    if (!regions) regions = new Array(n);
    for (let k = 0; k < n; k++) regions[k] = terrain.regionAt(minX + k * REGION_EVERY * stepX, z);
    return regions;
  };

  return {
    pixels,
    width,
    height,
    get done() { return row >= height; },
    get progress() { return row / height; },

    /** Draw the next `bands` rows. Returns true when there is no more. */
    drawRows(bands = 8) {
      for (let n = 0; n < bands && row < height; n++, row++) {
        const z = minZ + row * stepZ;
        if (row === 0) heightsInto(rowA, z);
        else rowA.set(rowB);
        heightsInto(rowB, z + stepZ);
        if (regionRow !== row) {
          regionsFor(z);
          regionRow = row;
        }
        for (let i = 0; i < width; i++) {
          const h = rowA[i];
          const k = (row * width + i) * 4;
          pixels[k + 3] = 255;
          if (h <= SEA_LEVEL) {
            // Deeper water, darker. The shelf around the continent
            // shows as a paler rim, which is what makes the coast
            // legible from across the room.
            const deep = clamp01(-h / fromReal(700));
            pixels[k] = mix(SEA_SHALLOW[0], SEA_DEEP[0], deep);
            pixels[k + 1] = mix(SEA_SHALLOW[1], SEA_DEEP[1], deep);
            pixels[k + 2] = mix(SEA_SHALLOW[2], SEA_DEEP[2], deep);
            continue;
          }
          const x = minX + i * stepX;
          const f = i / REGION_EVERY;
          const k0 = Math.floor(f);
          const t = f - k0;
          const a = regions[k0];
          const b = regions[k0 + 1] ?? a;
          here.continent = mix(a.continent, b.continent, t);
          here.uplift = mix(a.uplift, b.uplift, t);
          here.moisture = mix(a.moisture, b.moisture, t);
          here.heat = mix(a.heat, b.heat, t);
          landColour(terrain, x, z, h, here, colour);

          // Shading. The two slopes are read straight off the rows we
          // already have, so this costs nothing beyond the heights.
          const dx = (rowA[i + 1] - h) / stepX;
          const dz = (rowB[i] - h) / stepZ;
          const lit = clamp01(
            (SUN_HEIGHT + Math.cos(SUN_FROM) * dx * 6 + Math.sin(SUN_FROM) * dz * 6)
            / Math.sqrt(1 + (dx * dx + dz * dz) * 36) + 0.42,
          );
          const shade = 0.55 + lit * 0.75;
          pixels[k] = colour[0] * shade;
          pixels[k + 1] = colour[1] * shade;
          pixels[k + 2] = colour[2] * shade;
        }
      }
      return row >= height;
    },
  };
}

/** The whole map in one go. For tools, where waiting is fine. */
export function drawMap(opts) {
  const drawing = createMapDrawing(opts);
  while (!drawing.drawRows(64));
  return { pixels: drawing.pixels, width: drawing.width, height: drawing.height };
}
