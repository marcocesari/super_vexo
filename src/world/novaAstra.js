// Nova Astra — the solar system Vexo flies in.
//
// Named after Princess Astra: this is her kingdom's sky, and somewhere
// in it is where Draxos took her. One star, Nova, which is now a real
// thing at a real place you can fly toward rather than a glow pinned
// behind the camera. Around it:
//
//   * Earth     — home, the world Marco drew (earth.js / terrain.js)
//   * Mars      — the broken rovers, in orbit (mars.js)
//   * Pyrox     — a lava world close to the star
//   * Glacius   — an ice world out in the cold
//   * Sahrun    — a desert world with two moons
//   * Verdania  — an alien jungle
//
// Every new planet can be landed on and explored, exactly the way Earth
// can: fly into its atmosphere and the ground comes up to meet you. What
// makes each one itself is its PROFILE below — how its ground is shaped,
// what colour it is, what the sky is like, what grows, and which of
// Draxos's monsters camp there. alienTerrain.js turns the shape into
// heights; planet.js and flora.js draw it; surface.js lands you on it.
import * as THREE from 'three';
import { BIOME } from './terrain.js';
import {
  buildObsidian, buildCharred, buildBasalt,
  buildCrystalSpire, buildCrystalCluster, buildIceBoulder,
  buildCactus, buildPalm, buildSandstone, buildThornbush,
  buildMushroom, buildFernTree, buildUmbrellaTree, buildBulbPlant, buildMossRock,
} from './alienFlora.js';

export const SYSTEM_NAME = 'Nova Astra';

// --- The star ---------------------------------------------------------------------
// Behind the start, the way the old sun glow was, so the opening view
// toward Mars is unchanged — but a real place now. Within the camera's
// 5 km reach from anywhere in the system, so it is always on the sky.
export const STAR = {
  name: 'Nova',
  position: new THREE.Vector3(0, 90, -2300),
  radius: 170,
  color: 0xfff1c8,
  glow: 0xffc27a,
};

const smooth = (a, b, v) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const _c2 = new THREE.Color();
function blend(out, hex, t) {
  if (t > 0) out.lerp(_c2.setHex(hex), Math.min(1, t));
  return out;
}

// --- The planets --------------------------------------------------------------------
// Heights are in metres on the ground, like the home world: sea level is
// 0, the tallest peaks a few hundred metres. `shape` drives
// alienTerrain.js; `biome` says what kind of ground a point is (which
// decides what grows there — see flora.js); `paint` colours it.

export const PLANETS = [
  {
    id: 'pyrox',
    name: 'Pyrox',
    blurb: 'A lava world close to the star.',
    seed: 7101,
    position: new THREE.Vector3(760, -70, -1450),
    radius: 52,
    globe: {
      // From the dark crust to the glow in the cracks.
      palette: [[0, 0x1a1414], [0.45, 0x2e2420], [0.6, 0x4a2a1e], [0.75, 0x2a1f1c], [1, 0x3a2c26]],
      cracks: 0xff5a14,
      atmosphere: 0xff6a2a,
    },
    shape: {
      base: 40, relief: 170, mountain: 520, ridge: 560, hills: 30,
      // Rivers of lava cut through the ash.
      channels: { wavelength: 1500, width: 0.05, depth: 34 },
    },
    biome(h, slopeDeg, region) {
      if (h <= 0) return BIOME.SEA;               // lava
      if (slopeDeg > 30 || h > 320) return BIOME.MOUNTAIN;
      return region.moisture > 0.58 ? BIOME.BADLANDS : BIOME.STONE_DESERT;
    },
    paint(h, slopeDeg, region, x, z, out) {
      out.setHex(0x2b2624);                          // basalt
      blend(out, 0x4d4642, smooth(0.45, 0.75, region.moisture));   // pale ash fields
      blend(out, 0x5a2c20, smooth(20, 40, slopeDeg) * 0.8);        // rusty scarps
      blend(out, 0x1b1817, smooth(260, 420, h));                   // black peaks
      // Ground near the lava glows with its heat.
      if (h < 10) blend(out, 0x9a3412, (1 - h / 10) * 0.85);
      return out;
    },
    sea: { color: 0xff5a14, emissive: 0xff3a00, emissiveIntensity: 1.4, opacity: 1, roughness: 0.7 },
    sky: {
      color: 0x5e2a1c, hazeNear: 700, hazeFar: 15000,
      sun: 0xffb27a, sunIntensity: 1.3,
      skyTop: 0xff8a5a, skyGround: 0x2a1410, skyIntensity: 0.75,
    },
    flora: {
      species: { scrub: buildObsidian, conifer: buildCharred, rock: buildBasalt },
      rockColor: 0x2e2a28,
      grass: { [BIOME.STONE_DESERT]: { p: 0.08, color: 0xff7a2a } },   // ember tufts
    },
    tiers: { mooks: ['black', 'red'], boss: 'silver' },
    ground: {
      [BIOME.SEA]: 'a lava lake',
      [BIOME.MOUNTAIN]: 'the volcano slopes',
      [BIOME.BADLANDS]: 'the ash fields',
      [BIOME.STONE_DESERT]: 'the basalt plains',
    },
  },
  {
    id: 'glacius',
    name: 'Glacius',
    blurb: 'An ice world far from the star.',
    seed: 7202,
    position: new THREE.Vector3(-1550, 170, 1250),
    radius: 74,
    globe: {
      palette: [[0, 0x9cc9e6], [0.4, 0xd8ecf8], [0.6, 0xf4fbff], [0.8, 0xbfdcef], [1, 0xffffff]],
      atmosphere: 0xbfe8ff,
    },
    shape: {
      base: 130, relief: 150, mountain: 470, ridge: 620, hills: 45,
      // The low ground is a frozen sea: flat ice, never water.
      floor: 22,
    },
    biome(h, slopeDeg, region) {
      if (slopeDeg > 32) return BIOME.MOUNTAIN;
      if (h < 40) return BIOME.SNOW;                // the frozen sea
      if (region.moisture > 0.6 && h < 330) return BIOME.FOREST;   // crystal groves
      return slopeDeg > 14 ? BIOME.HILLS : BIOME.SNOW;
    },
    paint(h, slopeDeg, region, x, z, out) {
      out.setHex(0xeef5fb);                          // snow
      blend(out, 0x9fd0ec, smooth(46, 26, h));       // sea ice, blue and glassy
      blend(out, 0xd2e6f6, smooth(0.55, 0.7, region.moisture) * 0.7);
      blend(out, 0x7f8ea0, smooth(22, 42, slopeDeg) * 0.85);   // ice-cut rock
      return out;
    },
    sea: null,
    sky: {
      color: 0xcfe6f5, hazeNear: 1300, hazeFar: 24000,
      sun: 0xeaf4ff, sunIntensity: 1.45,
      skyTop: 0xdff0ff, skyGround: 0x8aa6c0, skyIntensity: 1.0,
    },
    flora: {
      species: { conifer: buildCrystalSpire, broadleaf: buildCrystalCluster, rock: buildIceBoulder },
      rockColor: 0xc4e4f4,
      grass: { [BIOME.FOREST]: { p: 0.18, color: 0xf2fbff } },   // frost tufts
    },
    tiers: { mooks: ['blue', 'blue'], boss: 'silver' },
    ground: {
      [BIOME.SNOW]: 'the snowfields',
      [BIOME.MOUNTAIN]: 'the ice cliffs',
      [BIOME.FOREST]: 'a crystal grove',
      [BIOME.HILLS]: 'the frozen hills',
    },
  },
  {
    id: 'sahrun',
    name: 'Sahrun',
    blurb: 'A desert world with two moons.',
    seed: 7303,
    position: new THREE.Vector3(1550, -90, 650),
    radius: 64,
    globe: {
      palette: [[0, 0x9a5a34], [0.35, 0xc47a44], [0.55, 0xe0a060], [0.75, 0xb06a3a], [1, 0xd89a5e]],
      bands: true,
      atmosphere: 0xffc890,
      moons: [{ radius: 9, distance: 120, speed: 0.12, color: 0xbab0a4 },
        { radius: 6, distance: 165, speed: -0.08, color: 0x9c8a7a }],
    },
    shape: {
      base: 95, relief: 110, mountain: 260, ridge: 700, hills: 22,
      dunes: { height: 24, spacing: 320 },
      terraces: 38,
    },
    biome(h, slopeDeg, region) {
      if (h <= 0) return BIOME.SEA;                   // an oasis pool
      if (h < 14 && region.moisture > 0.55) return BIOME.SAVANNA;   // oasis shore
      if (slopeDeg > 30) return BIOME.MESA;
      if (region.uplift > 0.55) return BIOME.MESA;
      return region.moisture < 0.5 ? BIOME.DUNES : BIOME.STONE_DESERT;
    },
    paint(h, slopeDeg, region, x, z, out) {
      out.setHex(0xd28a4a);                          // dune sand
      blend(out, 0x9c6a46, smooth(0.45, 0.6, region.moisture));    // stony flats
      // Layered rock on the mesas, banded by height like a canyon wall.
      const band = Math.sin(h / 9) * 0.5 + 0.5;
      blend(out, band > 0.5 ? 0xb4663a : 0x8a4a2a, smooth(0.45, 0.65, region.uplift) * 0.9);
      blend(out, 0x7a4630, smooth(26, 44, slopeDeg) * 0.8);
      if (h < 14) blend(out, 0x6f7a3a, (1 - h / 14) * smooth(0.5, 0.65, region.moisture));
      return out;
    },
    sea: { color: 0x2a8a8a, opacity: 0.85, roughness: 0.25 },
    sky: {
      color: 0xe9b98a, hazeNear: 1100, hazeFar: 21000,
      sun: 0xffe2b0, sunIntensity: 1.7,
      skyTop: 0xffd6a8, skyGround: 0x9a6a42, skyIntensity: 0.9,
    },
    flora: {
      species: { scrub: buildThornbush, acacia: buildPalm, rock: buildSandstone, conifer: buildCactus },
      rockColor: 0xb06a42,
      // Cactus country: the stony flats get the columns, not just bushes.
      trees: { [BIOME.STONE_DESERT]: { p: 0.07, kind: 'conifer' } },
      grass: { [BIOME.SAVANNA]: { p: 0.4, color: 0xc8b46a } },
    },
    tiers: { mooks: ['red', 'red'], boss: 'black' },
    ground: {
      [BIOME.DUNES]: 'the dune sea',
      [BIOME.MESA]: 'the mesas',
      [BIOME.STONE_DESERT]: 'the stony flats',
      [BIOME.SAVANNA]: 'an oasis',
      [BIOME.SEA]: 'an oasis pool',
    },
  },
  {
    id: 'verdania',
    name: 'Verdania',
    blurb: 'An alien jungle.',
    seed: 7404,
    position: new THREE.Vector3(-1350, -130, -450),
    radius: 70,
    globe: {
      palette: [[0, 0x1a5a6a], [0.42, 0x1f7a7a], [0.5, 0x3a2a6a], [0.7, 0x5a3a9a], [1, 0x2fa58a]],
      clouds: true,
      atmosphere: 0x8affc8,
    },
    shape: {
      base: 25, relief: 160, mountain: 380, ridge: 520, hills: 55,
    },
    biome(h, slopeDeg, region) {
      if (h <= 0) return BIOME.SEA;
      if (h < 10) return BIOME.BEACH;
      if (slopeDeg > 32) return BIOME.MOUNTAIN;
      if (h > 420) return BIOME.HILLS;
      return region.moisture > 0.42 ? BIOME.FOREST : BIOME.PLAIN;
    },
    paint(h, slopeDeg, region, x, z, out) {
      out.setHex(0x3a2a5a);                          // violet moss
      blend(out, 0x2a7a68, smooth(0.5, 0.36, region.moisture));    // teal meadows
      blend(out, 0x4a4560, smooth(26, 44, slopeDeg) * 0.85);       // wet rock
      if (h < 10) blend(out, 0xcabfe2, (1 - h / 10) * 0.8);        // lilac sand
      return out;
    },
    sea: { color: 0x14706e, opacity: 0.86, roughness: 0.2 },
    sky: {
      color: 0xb6e2c6, hazeNear: 800, hazeFar: 15000,
      sun: 0xf2ffd8, sunIntensity: 1.35,
      skyTop: 0xc8ffd8, skyGround: 0x3a2a5a, skyIntensity: 0.95,
    },
    flora: {
      species: {
        broadleaf: buildMushroom, conifer: buildFernTree, acacia: buildUmbrellaTree,
        scrub: buildBulbPlant, rock: buildMossRock,
      },
      rockColor: 0x5a6a62,
      // Meadows have umbrella trees, and the forest is thick.
      trees: { [BIOME.PLAIN]: { p: 0.12, kind: 'acacia' }, [BIOME.BEACH]: { p: 0.05, kind: 'scrub' } },
      grass: {
        [BIOME.FOREST]: { p: 0.45, color: 0x8a5ad0 },
        [BIOME.PLAIN]: { p: 0.6, color: 0x3fd0b0 },
      },
    },
    tiers: { mooks: ['blue', 'red'], boss: 'black' },
    ground: {
      [BIOME.FOREST]: 'the mushroom forest',
      [BIOME.PLAIN]: 'the teal meadows',
      [BIOME.BEACH]: 'a lilac shore',
      [BIOME.MOUNTAIN]: 'the cliffs',
      [BIOME.HILLS]: 'the high ridges',
      [BIOME.SEA]: 'the shallows',
    },
  },
];
