// The shape of the world.
//
// This file is pure arithmetic: give it a point and it tells you how
// high the ground is there, what kind of ground it is, and which way it
// faces. No Three.js, no meshes, no state — so the same function that
// draws the world can be run by a tool and MEASURED against the real
// thing (see tools/worldstudy/).
//
// Everything in here was built to numbers taken off real ground rather
// than to taste. Twenty places on Earth were surveyed — their actual
// elevations downloaded and measured — and three findings drove the
// whole design:
//
//   1. RIDGES COME EVERY THREE KILOMETRES. Dolomites 3.5 km, Mont Blanc
//      3.4, Annapurna 3.7, the Appalachians 3.5, the Jura 3.6, a
//      Norwegian fjord 3.3, the Grand Canyon 3.1. Utterly different
//      mountains — glaciated limestone, granite, folded sandstone, a
//      river-cut plateau — and all of them repeat at about the same
//      distance. Dunes are finer: 2.0-2.2 km.
//
//   2. SLOPE IS WHAT TELLS ONE KIND OF GROUND FROM ANOTHER. Median
//      slope: plains 0.3-0.7°, savanna 3.4°, hills 6-9°, dune fields
//      4-11°, mountains 22-32°. The steepest twentieth: 2° on a
//      floodplain, 50-63° in the Alps and the Grand Canyon.
//
//   3. WATER WRITES THE SHAPE, EVEN WHERE THERE IS NONE. Every
//      landform photographed from above is a drainage pattern —
//      branching valleys cut into whatever was there before. Deserts
//      included: the stony ground around Erg Chebbi is covered in dry
//      channels. So the mountains here are not lumps of noise; they are
//      what is LEFT between valleys.
//
// SIX TIMES SMALLER, SAME ANGLES. Real spacing is kept in proportion
// but divided by six, because a valley every 3 km means five minutes of
// walking before anything changes. Heights are divided by six too, so
// every SLOPE stays exactly what it measures on Earth — and slope is
// the thing you feel when you walk up it. A 3.7 km alpine relief
// becomes 620 m over 1.7 km, which is still a mountain and is still
// 32° steep.
const SHRINK = 6;

// The world is Marco's drawing. Everything below that decides WHERE
// something is reads its position out of continentAlpha.js, which is his
// map traced off the photograph: his kingdoms, his rivers, his lake, his
// capital in the middle.

import {
  KINGDOMS, RIVERS, LAKE, RIDGES, SPIRE_AT,
} from './continentAlpha.js';

/** Real-world metres to world metres. */
export const fromReal = (m) => m / SHRINK;

// --- The measured constants ---------------------------------------------------
// Ridge to ridge, from finding 1.
const RIDGE_SPACING = fromReal(3400);      // ~570 m
const DUNE_SPACING = fromReal(2100);       // ~350 m
// Tallest ground, from Annapurna and Mont Blanc (3.7 km of relief).
const MOUNTAIN_RELIEF = fromReal(3100);    // ~517 m
const HILL_RELIEF = fromReal(480);         // the Jura and the Appalachians
const PLAIN_RELIEF = fromReal(25);         // the Po plain: 25 m over ten km
const DUNE_HEIGHT = fromReal(300);         // Sossusvlei's big dunes

// How big a region of one kind of ground is. This one is NOT from the
// survey: real deserts are a thousand kilometres across, and a world
// where you must fly for an hour to see a different colour is a worse
// world. Twenty kilometres is the compromise — six or seven regions
// across the continent, so a desert is somewhere you fly INTO and spend
// a while in, rather than a patch you cross without noticing. It was
// 7 km while the world had no edges and no map, and at that size the
// whole continent came out as a carpet of speckles with no geography in
// it at all.
const REGION_SIZE = 20000;
// Big enough that the continent is one thing. At 34 km — the figure
// from when the world had no edges — a 120 km world got four cells of
// coastline across it and came out as an archipelago: pretty, but not
// the one continent it is meant to be.
const CONTINENT_SIZE = 62000;

// How high the ground is where the Spire's flanks meet the country
// round them — the lift the whole continent stands at, below.
const SPIRE_FOOT = 127;

// How wide the things he drew are, on the ground. A pencil line on a
// sheet of paper is about a kilometre wide at this scale, so a river is
// a valley you can see across rather than a stream you step over.
const RIVER_REACH = 620;
// Just below the waterline, so his rivers actually hold water: the sea
// is one plane across the whole world, and anything cut below it fills.
const RIVER_LEVEL = -6;
const RIDGE_REACH = 4200;
const RIDGE_HEIGHT = 300;

// The world has edges now: one continent, 130 km by 86 km, with open sea
// all round it. It went on for ever before, which is a fine thing for
// ground to do and a useless thing to draw a map of — "every single inch
// of the world" only means something if there is a last inch. At the
// ship's 30 m/s it is a bit over an hour from one coast to the other.
//
// The edge is not a wall. The land simply runs out: the coastline
// wanders in and out as any coastline does, and past it there is water
// for as far as anyone cares to fly.
export const WORLD_HALF_X = 65000;
export const WORLD_HALF_Z = 43000;
// How much of the way out the land starts giving way to sea. Inside
// this the continent is whatever the noise says; outside it, the sea
// wins by degrees, so the coast is a coast and not a cut edge.
const SHELF_FROM = 0.80;

export const SEA_LEVEL = 0;

// THE SPIRE: one volcano in the middle of the world, and the reason the
// map has a middle at all. Tears of the Kingdom puts something
// unmistakable at the centre and arranges everything else around it;
// this is ours. It stands about eleven hundred metres over ground that
// is barely a hundred, with snow on the top half and a crater in it, and
// it can be seen from most of the continent.
export const SPIRE = {
  // Where he drew volcanoes: with the Rock People, in the north-east.
  // It stood in the middle of the world before his map arrived, and the
  // middle is Estronic now — his capital, which wants level ground.
  x: (SPIRE_AT[0] - 0.5) * 2 * 65000,
  z: (SPIRE_AT[1] - 0.5) * 2 * 43000,
  radius: 5200, height: 1450, craterR: 520, craterDepth: 320,
};
// Sand sits at the angle of repose and no steeper — 33° for dry sand,
// which is why every dune on Earth has the same slipface angle.
const REPOSE = Math.tan((33 * Math.PI) / 180);

// --- Noise ---------------------------------------------------------------------
// Simplex noise, seeded. Written out rather than pulled from a package
// because the whole file has to run in a plain Node script with no
// bundler, and because a game this size should not take a dependency to
// get one function.
function mulberry32(a) {
  return function rnd() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GRAD2 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [0, 1], [0, -1],
];
const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;

function makeNoise(seed) {
  const rnd = mulberry32(seed);
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = p[i]; p[i] = p[j]; p[j] = t;
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  /** Simplex noise in [-1, 1]. */
  return function noise2(xin, yin) {
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const x0 = xin - (i - t);
    const y0 = yin - (j - t);
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    let n = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 > 0) {
      const g = GRAD2[perm[ii + perm[jj]] & 7];
      t0 *= t0;
      n += t0 * t0 * (g[0] * x0 + g[1] * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 > 0) {
      const g = GRAD2[perm[ii + i1 + perm[jj + j1]] & 7];
      t1 *= t1;
      n += t1 * t1 * (g[0] * x1 + g[1] * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 > 0) {
      const g = GRAD2[perm[ii + 1 + perm[jj + 1]] & 7];
      t2 *= t2;
      n += t2 * t2 * (g[0] * x2 + g[1] * y2);
    }
    return 70 * n;
  };
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smoothstep = (a, b, v) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const mix = (a, b, t) => a + (b - a) * t;

/** What kind of ground this is. */
export const BIOME = {
  SEA: 'sea',
  BEACH: 'beach',
  PLAIN: 'plain',          // farmland, the Po valley
  SAVANNA: 'savanna',      // grass, scattered trees
  FOREST: 'forest',
  HILLS: 'hills',
  MOUNTAIN: 'mountain',    // bare rock above the treeline
  SNOW: 'snow',
  DUNES: 'dunes',          // a sand sea
  STONE_DESERT: 'stone',   // hamada: flat, dark, swept
  SALT: 'salt',            // a playa, dead flat and pale
  BADLANDS: 'badlands',    // rills and gullies, nothing growing
  MESA: 'mesa',            // layered plateau, cliffs and talus
};

// Colours sampled off the real satellite imagery of those twenty
// places, not chosen by eye. The striking thing about the numbers is
// how DRAB they are: the Sahara reads as #a87647, not orange; alpine
// meadow is olive #536641; a salt pan is #efe2c2, not white. Nothing on
// Earth is saturated, and a world painted from imagination always is.
export const GROUND_COLOR = {
  [BIOME.SEA]: 0x1d3b4d,
  [BIOME.BEACH]: 0xcdba92,
  [BIOME.PLAIN]: 0x5c6b43,
  [BIOME.SAVANNA]: 0x84755a,
  [BIOME.FOREST]: 0x394d2e,
  [BIOME.HILLS]: 0x536641,
  [BIOME.MOUNTAIN]: 0x7d7a6c,
  [BIOME.SNOW]: 0xe8ecf0,
  [BIOME.DUNES]: 0xa87647,
  [BIOME.STONE_DESERT]: 0x707255,
  [BIOME.SALT]: 0xefe2c2,
  [BIOME.BADLANDS]: 0x8a7253,
  [BIOME.MESA]: 0xa37e5b,
};

/**
 * @param {{seed?: number}} opts
 */
export function createTerrain({ seed = 20260827 } = {}) {
  const n1 = makeNoise(seed);
  const n2 = makeNoise(seed + 101);
  const n3 = makeNoise(seed + 202);
  const n4 = makeNoise(seed + 303);

  /**
   * Fractal noise — but with real land's falloff, not the textbook one.
   *
   * The usual recipe halves the amplitude each time it doubles the
   * frequency, which gives a power spectrum of 1/f². Measuring twenty
   * real places gave 3.2 to 5.6, never 2: actual ground is far SMOOTHER
   * at small scale than fractal noise is. That one number is why
   * procedural terrain so often looks like crumpled foil, and dropping
   * the gain to 0.38 is the whole fix.
   */
  function fbm(noise, x, z, octaves, wavelength, gain = 0.38) {
    let sum = 0;
    let amp = 1;
    let norm = 0;
    let f = 1 / wavelength;
    for (let o = 0; o < octaves; o++) {
      sum += noise(x * f, z * f) * amp;
      norm += amp;
      amp *= gain;
      f *= 2.02;   // not exactly 2, so octaves never line up into a grid
    }
    return sum / norm;
  }

  /**
   * Ridged noise: the shape mountains actually are.
   *
   * Ordinary noise makes hills — round tops, round bottoms. Real
   * mountains are the opposite: sharp crests and flat-floored valleys,
   * because water cuts the valleys and leaves the ridges standing
   * between them (finding 3). Folding the noise about zero — 1 - |n| —
   * turns every zero crossing into a crest, which is exactly what a
   * watershed is.
   */
  function ridged(noise, x, z, octaves, wavelength, gain = 0.42) {
    let sum = 0;
    let amp = 1;
    let norm = 0;
    let f = 1 / wavelength;
    let weight = 1;
    for (let o = 0; o < octaves; o++) {
      let n = 1 - Math.abs(noise(x * f, z * f));
      n *= n;
      // Detail only survives where the ridge under it already is:
      // without this, fine noise sprays across the valley floors too
      // and the whole range turns to gravel.
      n *= weight;
      weight = clamp01(n * 2.2);
      sum += n * amp;
      norm += amp;
      amp *= gain;
      f *= 2.02;
    }
    return sum / norm;
  }

  /**
   * Bend the coordinates before sampling.
   *
   * Straight ridged noise gives ridges that all run the same way, like
   * corrugated iron. Real ranges wander, fork and rejoin. Warping the
   * input by a slower noise does that, for two extra noise samples.
   */
  function warp(x, z, amount, wavelength) {
    return [
      x + fbm(n3, x, z, 2, wavelength) * amount,
      z + fbm(n4, x, z, 2, wavelength) * amount,
    ];
  }

  // --- The regional fields ------------------------------------------------------
  // Four slow fields decide what part of the world you are standing in.
  // They are kept deliberately broad — a field that saturates at 0 and 1
  // gives a world of nothing but extremes, which was the first version's
  // mistake: 57% ocean and mountains everywhere else.

  /** Above zero is land. About seven parts land to three of sea. */
  function continentField(x, z) {
    // Weighted well above the waterline: inland is land, and the sea
    // gets in only as bays, gulfs and the odd inland sea.
    // Land, all of it. His drawing is a continent that fills the sheet
    // with water only round the outside and one lake in it, so the noise
    // here only roughens the coast — it is not allowed to open bays
    // through the middle any more, which it was doing right across the
    // country he had drawn as the Dwellers' and the wizards'.
    const inland = fbm(n1, x, z, 4, CONTINENT_SIZE, 0.42) * 0.30 + 1.0;
    // How far out towards the edge of the world this is: 0 in the middle,
    // 1 at the border. Measured as the greater of the two axes so the
    // continent is bounded by a rectangle of sea rather than an oval.
    const out = Math.max(Math.abs(x) / WORLD_HALF_X, Math.abs(z) / WORLD_HALF_Z);
    // The last fifth is the continental shelf, sloping away. Beyond the
    // border it keeps falling, so there is no line where the sea stops
    // being sea.
    const shelf = smoothstep(SHELF_FROM, 1.02, out) * 2.4 + Math.max(0, out - 1) * 3;
    return inland - shelf;
  }

  /**
   * WHERE THINGS ARE — off Marco's map.
   *
   * The climate was noise once, which gave a world with everything in it
   * and no arrangement to it. Then it was ten provinces I laid out. Now
   * it is his: the kingdoms he drew, where he drew them, each with the
   * ground its name asks for. Every point takes a weighted average of
   * the kingdoms near it, so borders are gradients rather than lines.
   *
   * The weight falls off as 1/((d/r)^6 + a bit), which is very nearly
   * "the nearest wins" while still blending where two of them meet. A
   * gentler falloff makes a world with no places in it: with nine
   * kingdoms all contributing, every point comes out near the average of
   * the lot, so the desert is only a little drier than the forest and
   * the mountains never rise.
   */
  // His kingdoms, in metres. The drawing gives fractions of the sheet:
  // u across from the west, v down from the north.
  const provinces = KINGDOMS.map((k) => ({
    x: (k.at[0] - 0.5) * 2 * WORLD_HALF_X,
    z: (k.at[1] - 0.5) * 2 * WORLD_HALF_Z,
    rr: (k.r * 2 * WORLD_HALF_X) ** 2,
    uplift: k.uplift,
    moisture: k.moisture,
    heat: k.heat,
  }));

  // --- What he drew on it: rivers, a lake, ridges -------------------------------
  //
  // These are lines and shapes on a sheet of paper, and the ground needs
  // to know, at any point, how far the nearest one is. Asking that
  // directly would mean testing sixty-odd line segments per lookup, and
  // the ground is looked up millions of times to draw one map.
  //
  // So they are rasterised ONCE into a coarse grid and turned into a
  // distance field by two sweeps over it — the standard chamfer
  // transform, which costs one pass forwards and one back rather than
  // comparing every cell with every line. Reading it afterwards is two
  // multiplications.
  const DRAWN_W = 512;
  const DRAWN_H = 340;
  const DRAWN_CELL_X = (WORLD_HALF_X * 2) / DRAWN_W;
  const DRAWN_CELL_Z = (WORLD_HALF_Z * 2) / DRAWN_H;
  let drawn = null;

  function buildDrawn() {
    const river = new Float32Array(DRAWN_W * DRAWN_H).fill(1e9);
    const ridge = new Float32Array(DRAWN_W * DRAWN_H).fill(1e9);
    const lake = new Uint8Array(DRAWN_W * DRAWN_H);

    const put = (grid, u, v) => {
      const i = Math.round(u * DRAWN_W);
      const j = Math.round(v * DRAWN_H);
      if (i < 0 || j < 0 || i >= DRAWN_W || j >= DRAWN_H) return;
      grid[j * DRAWN_W + i] = 0;
    };
    /** Walk a line of the drawing, marking every cell it passes through. */
    const stroke = (grid, points) => {
      for (let k = 0; k < points.length - 1; k++) {
        const [u0, v0] = points[k];
        const [u1, v1] = points[k + 1];
        const steps = Math.ceil(Math.hypot((u1 - u0) * DRAWN_W, (v1 - v0) * DRAWN_H)) + 1;
        for (let t = 0; t <= steps; t++) {
          put(grid, u0 + ((u1 - u0) * t) / steps, v0 + ((v1 - v0) * t) / steps);
        }
      }
    };
    for (const r of RIVERS) stroke(river, r.points);
    for (const r of RIDGES) stroke(ridge, r.points);

    // The lake: everything inside the outline he drew round it.
    for (let j = 0; j < DRAWN_H; j++) {
      const v = (j + 0.5) / DRAWN_H;
      for (let i = 0; i < DRAWN_W; i++) {
        const u = (i + 0.5) / DRAWN_W;
        let inside = false;
        for (let k = 0, n = LAKE.points.length, m = n - 1; k < n; m = k++) {
          const [ax, ay] = LAKE.points[k];
          const [bx, by] = LAKE.points[m];
          if ((ay > v) !== (by > v) && u < ((bx - ax) * (v - ay)) / (by - ay) + ax) {
            inside = !inside;
          }
        }
        if (inside) lake[j * DRAWN_W + i] = 1;
      }
    }

    // Two sweeps turn "zero on the line" into "distance from the line".
    const sweep = (grid) => {
      const DX = DRAWN_CELL_X;
      const DZ = DRAWN_CELL_Z;
      const DD = Math.hypot(DX, DZ);
      for (let j = 0; j < DRAWN_H; j++) {
        for (let i = 0; i < DRAWN_W; i++) {
          const at = j * DRAWN_W + i;
          let best = grid[at];
          if (i > 0) best = Math.min(best, grid[at - 1] + DX);
          if (j > 0) best = Math.min(best, grid[at - DRAWN_W] + DZ);
          if (i > 0 && j > 0) best = Math.min(best, grid[at - DRAWN_W - 1] + DD);
          if (i < DRAWN_W - 1 && j > 0) best = Math.min(best, grid[at - DRAWN_W + 1] + DD);
          grid[at] = best;
        }
      }
      for (let j = DRAWN_H - 1; j >= 0; j--) {
        for (let i = DRAWN_W - 1; i >= 0; i--) {
          const at = j * DRAWN_W + i;
          let best = grid[at];
          if (i < DRAWN_W - 1) best = Math.min(best, grid[at + 1] + DX);
          if (j < DRAWN_H - 1) best = Math.min(best, grid[at + DRAWN_W] + DZ);
          if (i < DRAWN_W - 1 && j < DRAWN_H - 1) best = Math.min(best, grid[at + DRAWN_W + 1] + DD);
          if (i > 0 && j < DRAWN_H - 1) best = Math.min(best, grid[at + DRAWN_W - 1] + DD);
          grid[at] = best;
        }
      }
    };
    sweep(river);
    sweep(ridge);
    return { river, ridge, lake };
  }

  /** Read one of the drawn fields at a point, smoothly. */
  function drawnAt(grid, x, z) {
    const u = ((x + WORLD_HALF_X) / (WORLD_HALF_X * 2)) * DRAWN_W - 0.5;
    const v = ((z + WORLD_HALF_Z) / (WORLD_HALF_Z * 2)) * DRAWN_H - 0.5;
    const i = Math.floor(u);
    const j = Math.floor(v);
    if (i < 0 || j < 0 || i >= DRAWN_W - 1 || j >= DRAWN_H - 1) return 1e9;
    const fu = u - i;
    const fv = v - j;
    const a = grid[j * DRAWN_W + i];
    const b = grid[j * DRAWN_W + i + 1];
    const c = grid[(j + 1) * DRAWN_W + i];
    const d = grid[(j + 1) * DRAWN_W + i + 1];
    return mix(mix(a, b, fu), mix(c, d, fu), fv);
  }

  const _climate = { uplift: 0.5, moisture: 0.5, heat: 0.5 };

  /**
   * The climate at a point: every province, weighted by how near it is.
   *
   * The weight falls off as 1/((d/r)^6 + a bit), which is very nearly
   * "the nearest province wins" while still blending smoothly where two
   * of them meet. A gentler falloff was the first attempt and it made a
   * world with no places in it: with ten provinces all contributing,
   * every point came out near the average of the lot, so the desert was
   * only a little drier than the forest and the mountains never rose.
   * A province has to be able to reach its own climate in the middle.
   */
  function climateAt(x, z) {
    // Bend the point first, so borders wander the way real ones do
    // instead of arcing neatly around each province.
    const wobble = REGION_SIZE * 0.55;
    const wx = x + fbm(n2, x, z, 2, REGION_SIZE * 2.2) * wobble;
    const wz = z + fbm(n3, x, z, 2, REGION_SIZE * 2.2) * wobble;
    let wu = 0;
    let wm = 0;
    let wh = 0;
    let total = 0;
    for (const p of provinces) {
      const d2 = ((wx - p.x) ** 2 + (wz - p.z) ** 2) / p.rr;
      const w = 1 / (d2 * d2 * d2 + 0.02);
      wu += p.uplift * w;
      wm += p.moisture * w;
      wh += p.heat * w;
      total += w;
    }
    _climate.uplift = wu / total;
    _climate.moisture = wm / total;
    _climate.heat = wh / total;
    return _climate;
  }

  /**
   * How mountainous this part of the world is: 0 flat, 1 alpine.
   *
   * The province decides; the noise only roughens the edges, so a range
   * does not stop dead on a circle.
   */
  function upliftField(x, z) {
    return clamp01(climateAt(x, z).uplift
      + fbm(n2, x + 4000, z - 9000, 3, REGION_SIZE * 0.8, 0.45) * 0.22);
  }

  /** How wet: 0 desert, 1 rainforest. */
  function moistureField(x, z) {
    return clamp01(climateAt(x, z).moisture
      + fbm(n3, x - 21000, z + 12000, 3, REGION_SIZE * 0.7, 0.45) * 0.20);
  }

  /** How warm: 0 polar, 1 tropical. */
  function heatField(x, z) {
    return clamp01(climateAt(x, z).heat
      + fbm(n4, x * 0.3 + 7000, z, 2, REGION_SIZE * 1.6, 0.45) * 0.14);
  }

  // --- The ground ---------------------------------------------------------------
  /**
   * Layered rock: cliff, ledge, cliff, ledge.
   *
   * Monument Valley and the Grand Canyon are flat-lying rock of
   * different hardnesses, so they wear into steps rather than slopes —
   * 44% of Monument Valley is under 2° and 5% is over 30°, with very
   * little in between. Rounding the height onto steps, with a short
   * ramp between them, reproduces that distribution.
   */
  function terrace(h, step, sharpness) {
    const k = h / step;
    const i = Math.floor(k);
    const f = k - i;
    return (i + smoothstep(0, 1, Math.min(1, f * sharpness))) * step;
  }

  /**
   * A dune's cross-section: a long gentle back, a short steep face.
   *
   * Sand cannot stand steeper than about 33° — the angle of repose — so
   * the wind pushes grains up a shallow windward slope and they
   * avalanche down the far side at exactly that angle, every time.
   * DUNE_HEIGHT is therefore not a free choice: it is whatever makes
   * the slipface come out at 33° for the spacing measured at Erg Chebbi
   * and Sossusvlei.
   */
  const SLIPFACE = 0.22;                 // the steep quarter of the wave
  const DUNE_H = DUNE_SPACING * SLIPFACE * REPOSE;
  function duneProfile(phase) {
    const p = phase - Math.floor(phase);
    const crest = 1 - SLIPFACE;
    if (p < crest) {
      const t = p / crest;
      return t * t * (3 - 2 * t);        // windward: gentle, convex
    }
    return 1 - (p - crest) / SLIPFACE;   // slipface: straight, at repose
  }

  /** Everything slow about a place, worked out once. */
  function regionAt(x, z) {
    return {
      continent: continentField(x, z),
      uplift: upliftField(x, z),
      moisture: moistureField(x, z),
      heat: heatField(x, z),
    };
  }

  const PAN_LEVEL = fromReal(150);

  /**
   * How rough the ground is close up, in metres.
   *
   * Not the same everywhere: a salt pan is polished flat, a dune field
   * has ripples a hand deep, and a mountainside is all loose rock. The
   * flat places must stay flat or the measurements that took so long to
   * get right are thrown away for the sake of texture.
   */
  function biomeRoughness(h, uplift, dryness) {
    if (h < PAN_LEVEL * 0.8 && dryness > 0.5) return 0.05;   // pan: nearly polished
    // Half a metre, at most. The first attempt used two and a half, and
    // a man is 1.8 m tall: the bumps swallowed him whole, so the camera
    // behind him spent half of every walk looking at the back of a
    // hummock. Texture underfoot must stay smaller than the things
    // standing on it.
    return 0.12 + uplift * 0.45;
  }

  /**
   * Which process shaped this ground — ice, water on flat rock, or wind.
   *
   * Worked out once and asked by both the height and the biome, so the
   * two can never disagree. They did in the third version: plateau tops
   * that rose above the treeline were called MOUNTAIN, so "mountain"
   * measured a median slope of 0.0° — dead flat rock at altitude. The
   * ground was right and the label was wrong.
   */
  function styleAt(region) {
    const { uplift, moisture } = region;
    const dryness = 1 - moisture;
    return {
      alpine: smoothstep(0.56, 0.92, uplift) * (1 - smoothstep(0.42, 0.62, dryness)),
      plateau: smoothstep(0.58, 0.72, dryness) * smoothstep(0.36, 0.52, uplift)
        * (1 - smoothstep(0.66, 0.84, uplift)),
      sandy: smoothstep(0.64, 0.84, dryness) * (1 - smoothstep(0.34, 0.6, uplift)),
    };
  }

  /**
   * How high the ground is, in metres.
   *
   * Order matters, and it is the order the real ones happen in: the
   * bones first, then what lies ON them (sand, salt), then what CUTS
   * them (rivers, the sea). That order is why Erg Chebbi's sand stops
   * against the stone in a hard line instead of fading out — the sand
   * is a blanket over a surface that carries on underneath.
   */
  function heightAt(x, z, region) {
    const r = region ?? regionAt(x, z);
    const { continent, uplift, moisture } = r;
    const dryness = 1 - moisture;

    // WHICH LANDFORM, not all of them at once. An earlier version added
    // mountains, hills, terraces and dunes on top of one another
    // everywhere, and every kind of ground then measured the same:
    // steep. Real country is made by ONE process winning — ice cut the
    // Alps, water cut the Grand Canyon, wind built the Sahara — so
    // these are blended between, not summed.
    const { alpine, plateau, sandy } = styleAt(r);

    // --- Lowland: the shape almost everywhere is -----------------------------
    // A slow swell with hills on it. Even the flattest country has some:
    // the Po plain carries 25 m of relief over ten kilometres.
    let h = fbm(n1, x, z, 3, REGION_SIZE * 0.9) * fromReal(90);
    // Squared, not linear. Flat country has to be genuinely flat — the
    // Po plain is 0.7° of median slope and 96% of it is under 2° — and
    // a term that only halves as the uplift halves leaves gentle hills
    // everywhere, which is what kept the plains at 5.6°.
    h += fbm(n2, x, z, 3, RIDGE_SPACING * 3.2) * HILL_RELIEF * (0.04 + uplift * uplift * 1.6);

    // --- Alpine: ridges, and valleys between them ----------------------------
    if (alpine > 0.001) {
      const [wx, wz] = warp(x, z, RIDGE_SPACING * 0.75, RIDGE_SPACING * 6);
      // The base wavelength is the whole RANGE, not one ridge: the 570 m
      // ridge-to-ridge spacing measured on Earth then falls out of the
      // third octave at the right amplitude, instead of being forced in
      // at full height and standing the mountains on end.
      let m = ridged(n1, wx, wz, 5, RIDGE_SPACING * 4);
      m = Math.pow(m, 1.25);
      h = mix(h, h + m * MOUNTAIN_RELIEF, alpine);
    }

    // --- Plateau: flat on top, and cut to the bone --------------------------
    // Monument Valley is 44% dead flat and 5% nearly vertical, with very
    // little in between, because flat-lying rock of different hardnesses
    // wears back in steps instead of sloping. So: a level top, canyons
    // cut into it, and both edges terraced.
    if (plateau > 0.01) {
      const top = fromReal(1500) * (0.45 + uplift * 0.8)
        + fbm(n2, x, z, 2, RIDGE_SPACING * 6) * fromReal(260);
      const [cx, cz] = warp(x, z, RIDGE_SPACING * 0.8, RIDGE_SPACING * 5);
      const canyon = smoothstep(0.55, 0.92, ridged(n4, cx, cz, 3, RIDGE_SPACING * 3));
      const cut = canyon * fromReal(1100);
      h = mix(h, terrace(top - cut, fromReal(170), 3.2), plateau);
    }

    // The Spire. It REPLACES the ground it stands on rather than being
    // added to it: a volcano builds its own mountain out of what it
    // throws up, and — more to the point — a landmark has to be the same
    // shape every time you see it. Added on top, the hills underneath
    // moved the summit about by hundreds of metres and filled the crater
    // in, so the one unmistakable thing in the world was a different
    // shape depending on where it was measured.
    const spireD = Math.hypot(x - SPIRE.x, z - SPIRE.z);
    if (spireD < SPIRE.radius) {
      const t = 1 - spireD / SPIRE.radius;
      // Raised to a power so the flanks are gentle and the shoulders
      // steepen towards the top, which is the shape a cone of ash and
      // lava settles into.
      // Gullies running down the flanks. Etna, in the survey, is the
      // most radially symmetrical thing on the whole list and its one
      // decoration is a fan of channels cut straight down the sides by
      // the water and ash coming off the top. Without them a volcano
      // renders as a smooth white dome — which is exactly what the first
      // Spire looked like: a snowy hill, not a mountain that erupted.
      // Strongest halfway down, fading out at the summit and the foot,
      // because that is where the water has picked up speed and not yet
      // spread out.
      const angle = Math.atan2(z - SPIRE.z, x - SPIRE.x);
      const gully = Math.sin(angle * 17 + fbm(n2, x, z, 2, 900) * 2.2)
        * 34 * t * (1 - t) * 4;
      const cone = SPIRE_FOOT + Math.pow(t, 1.6) * SPIRE.height
        - smoothstep(SPIRE.craterR, SPIRE.craterR * 0.3, spireD) * SPIRE.craterDepth
        - Math.abs(gully)
        // And a little of the ground's own roughness, so the flanks are
        // rock rather than glass.
        + fbm(n4, x, z, 3, 120, 0.5) * 9;
      // Taking over gradually at the foot, so it grows out of the
      // country around it instead of standing on a shelf.
      h = mix(h, cone, smoothstep(0, 0.34, t));
    }

    // --- What lies on top ---------------------------------------------------
    if (sandy > 0.001) {
      // Dunes march in ranks, all facing the wind's way, the ranks
      // themselves bending slowly across the sand sea. Sand is a
      // BLANKET: it is added to whatever was underneath, which is why
      // Erg Chebbi ends against the stone in a hard line rather than
      // fading out.
      const windAngle = fbm(n2, x, z, 2, REGION_SIZE * 2) * 0.9;
      const along = x * Math.cos(windAngle) + z * Math.sin(windAngle);
      const wander = fbm(n3, x, z, 2, DUNE_SPACING * 5) * DUNE_SPACING * 0.5;
      const big = duneProfile((along + wander) / DUNE_SPACING);
      const small = duneProfile((along * 2.7 - wander) / DUNE_SPACING);
      h += (big * 0.78 + small * 0.22) * DUNE_H * sandy;
    }

    // Salt pans. A dry basin with no way out fills dead flat, which is
    // why a third of Badwater lies under 2° of slope with a mountain
    // front nearly two kilometres high on one side of it.
    if (dryness > 0.5 && h < PAN_LEVEL && continent > 0.12) {
      const pan = smoothstep(0.5, 0.72, dryness) * smoothstep(PAN_LEVEL, fromReal(20), h);
      h = mix(h, PAN_LEVEL * 0.55, pan * 0.95);
    }

    // --- What cuts it -------------------------------------------------------
    // Valleys, everywhere water runs. Wide and shallow rather than
    // narrow and deep: the first version cut 60 m over a 20 m run, which
    // is not a valley but a quarry, and it put 70° walls into country
    // whose real median slope is under 4°.
    const [rx, rz] = warp(x, z, RIDGE_SPACING * 1.2, RIDGE_SPACING * 7);
    const channel = ridged(n3, rx, rz, 3, RIDGE_SPACING * 5);
    const cutting = smoothstep(0.5, 0.98, channel);
    if (cutting > 0.001) {
      h -= cutting * fromReal(340) * (0.06 + uplift * uplift * 1.1) * (1 - plateau * 0.8);
    }

    // --- Texture underfoot --------------------------------------------------
    // The 0.38 gain above is what makes the shape right at the scale a
    // satellite sees, and it is measured. But it also sands the ground
    // perfectly smooth at the scale a man walks over, and real ground is
    // never smooth: there are always tussocks, stones, small gullies.
    // This is a metre of roughness at fifteen metres' wavelength — far
    // too fine to shift any of the measurements, and the difference
    // between walking on ground and walking on a duvet.
    const rough = biomeRoughness(h, uplift, dryness);
    if (rough > 0.01) {
      h += fbm(n4, x, z, 3, 17, 0.5) * rough;
    }

    // --- The sea, and the lift that keeps the continent above it ------------
    // Inland stands well clear of the water. Without this the ground's
    // own dips and valleys — twenty or thirty metres of them, everywhere
    // — fall below sea level, and a continent comes out as a sponge:
    // land and lake speckled together at every scale, which is not what
    // any coast on Earth looks like. The lift fades to nothing at the
    // shoreline, so the coast is still where the land runs out rather
    // than a step down into the sea.
    const lift = fromReal(760) * smoothstep(-0.05, 0.55, continent);
    // A coast is a slope, not a wall: the ground carries on down a good
    // way before it reaches any depth.
    const land = smoothstep(-0.10, 0.14, continent);
    const seabed = mix(-fromReal(900), fromReal(10), smoothstep(-0.6, 0.14, continent));
    let ground = mix(seabed, h + lift, land);

    // --- And what he drew on it ---------------------------------------------
    //
    // AFTER the lift, not before. Cutting a river to the waterline and
    // then lifting the whole continent a hundred and twenty metres puts
    // the river back on the hilltop: the first attempt carved Astro Lake
    // and every river he drew, and not one of them held a drop of water.
    if (!drawn) drawn = buildDrawn();

    // Ridges: the heavy bands he drew across the lower half, many
    // strokes on top of one another, which is how anybody draws hills.
    const ridgeD = drawnAt(drawn.ridge, x, z);
    if (ridgeD < RIDGE_REACH) {
      ground += smoothstep(RIDGE_REACH, 0, ridgeD) * RIDGE_HEIGHT * land;
    }

    // Rivers, where he drew them. Pulled down to a level rather than
    // grooved, so each has banks and a floor to run along.
    // Sampled off a bent coordinate, so a river traced as five straight
    // hops between points on a photograph comes out wandering. It still
    // goes where he drew it — it just stops looking ruled.
    const riverD = drawnAt(drawn.river,
      x + fbm(n2, x, z, 2, 2600) * 520,
      z + fbm(n3, x, z, 2, 2600) * 520);
    if (riverD < RIVER_REACH && land > 0.01) {
      // All the way down in the middle of the channel. At nine tenths
      // the floor came out seven metres ABOVE the waterline, which on a
      // map is a brown line where a river should be.
      const near = smoothstep(RIVER_REACH, 0, riverD);
      ground = mix(ground, Math.min(ground, RIVER_LEVEL), Math.min(1, near * 1.25) * land);
    }

    // Astro Lake: inside the outline he drew, the ground is under water.
    const lakeI = Math.round(((x + WORLD_HALF_X) / (WORLD_HALF_X * 2)) * DRAWN_W);
    const lakeJ = Math.round(((z + WORLD_HALF_Z) / (WORLD_HALF_Z * 2)) * DRAWN_H);
    if (lakeI >= 0 && lakeJ >= 0 && lakeI < DRAWN_W && lakeJ < DRAWN_H
        && drawn.lake[lakeJ * DRAWN_W + lakeI]) {
      ground = Math.min(ground, -fromReal(160));
    } else if (lakeI >= 1 && lakeJ >= 1 && lakeI < DRAWN_W - 1 && lakeJ < DRAWN_H - 1) {
      // Just outside it, the shore wanders in and out instead of
      // following the straight edges of the outline he drew.
      let neighbours = 0;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        neighbours += drawn.lake[(lakeJ + dj) * DRAWN_W + lakeI + di];
      }
      if (neighbours > 0 && fbm(n3, x, z, 2, 1400) > 0.1) {
        ground = Math.min(ground, -fromReal(60));
      }
    }

    return ground;
  }

  /**
   * Everything about a point: how high, how steep, which way it faces,
   * and what kind of ground it is.
   *
   * The step is four metres because that is about the spacing of the
   * mesh the player actually walks on. Measuring slope finer than the
   * ground is drawn reports cliffs that nobody can see.
   */
  function sampleAt(x, z, step = 4) {
    const region = regionAt(x, z);
    const h = heightAt(x, z, region);
    const hx = heightAt(x + step, z) - heightAt(x - step, z);
    const hz = heightAt(x, z + step) - heightAt(x, z - step);
    const slope = Math.atan(Math.hypot(hx, hz) / (2 * step));
    return {
      height: h,
      slope,
      slopeDeg: (slope * 180) / Math.PI,
      region,
      biome: biomeFrom(x, z, h, slope, region),
    };
  }

  /**
   * Which kind of ground.
   *
   * Decided by height, then steepness, then climate — which is the
   * order it works in outdoors. Snow lies above a line whatever the
   * rock; nothing grows on a cliff whatever the weather; and the same
   * hillside is forest on the wet side of a range and desert on the dry.
   */
  function biomeFrom(x, z, h, slope, region) {
    if (h <= SEA_LEVEL) return BIOME.SEA;
    const { uplift, moisture, heat } = region;
    const dryness = 1 - moisture;
    const slopeDeg = (slope * 180) / Math.PI;
    const { alpine, plateau, sandy } = styleAt(region);

    // The snowline falls as the world gets colder, exactly as it falls
    // with latitude on Earth. Above it, nothing else matters.
    const snowline = mix(fromReal(1500), fromReal(6400), heat);
    if (h > snowline && !(plateau > alpine)) return BIOME.SNOW;
    const treeline = snowline * 0.62;

    if (h < fromReal(40) && slopeDeg < 3 && dryness < 0.55) return BIOME.BEACH;

    // Plateau country wins over height: a flat top a kilometre up is
    // still a plateau, and calling it a mountain was what made
    // "mountain" measure flat.
    if (plateau > 0.35 && plateau >= alpine) {
      if (h < PAN_LEVEL * 0.8 && slopeDeg < 2.5) return BIOME.SALT;
      // Soft rock with nothing growing on it wears into rills and
      // gullies; hard flat-lying rock wears back in steps.
      return uplift > 0.44 ? BIOME.MESA : BIOME.BADLANDS;
    }

    if (sandy > 0.35 && sandy >= alpine) {
      if (h < PAN_LEVEL * 0.8 && slopeDeg < 2.5) return BIOME.SALT;
      return BIOME.DUNES;
    }

    if (dryness > 0.58) {
      if (h < PAN_LEVEL * 0.8 && slopeDeg < 2.5) return BIOME.SALT;
      if (slopeDeg > 30 || h > treeline) return BIOME.MOUNTAIN;
      return BIOME.STONE_DESERT;
    }

    // Wet country. Nothing grows on rock too steep to hold soil, nor
    // above the treeline, whatever the weather.
    if (slopeDeg > 30 || h > treeline) return BIOME.MOUNTAIN;
    if (moisture < 0.5) return BIOME.SAVANNA;
    if (uplift > 0.62 || slopeDeg > 13) return BIOME.HILLS;
    if (moisture > 0.66) return BIOME.FOREST;
    return BIOME.PLAIN;
  }

  /** Which kind of ground, from nothing but a point. */
  function biomeAt(x, z) {
    return sampleAt(x, z).biome;
  }

  return {
    heightAt,
    sampleAt,
    biomeAt,
    regionAt,
    continentField,
    upliftField,
    moistureField,
    heatField,
    styleAt,
    /**
     * Height above which snow lies, at this point.
     *
     * Measured from the sea, like a real snowline. It had to go up when
     * the continent did — the land stands a hundred metres clear of the
     * water everywhere, and a snowline set for a world at sea level put
     * snow on the fields — and then the cold end had to come back down,
     * because the ice province in the north-east came out green: a
     * snowline of 450 m is above almost all of it, so nothing lay.
     */
    snowlineAt(x, z) {
      return mix(fromReal(1500), fromReal(6400), heatField(x, z));
    },
    seaLevel: SEA_LEVEL,
    /** For tools and tests that want to know what it was built to. */
    constants: {
      SHRINK, RIDGE_SPACING, DUNE_SPACING, MOUNTAIN_RELIEF, HILL_RELIEF,
      PLAIN_RELIEF, DUNE_HEIGHT, REGION_SIZE, REPOSE,
    },
  };
}
