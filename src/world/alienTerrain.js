// The ground of the Nova Astra planets.
//
// The home world's terrain.js is built off Marco's drawn continent —
// his kingdoms, rivers and lake decide where everything is. The new
// planets have no map, so their ground comes from noise alone, steered
// by each planet's `shape` (see novaAstra.js):
//
//   base, relief   how high the land sits, and how far continents rise
//                  above and fall below the sea
//   mountain, ridge  ridged ranges, as on the home world: sharp crests,
//                  flat-floored valleys, and the spacing between them
//   hills          rolling ground on top of everything
//   dunes          a sand sea of long crests (Sahrun)
//   terraces       stepped mesas where the ground is uplifted (Sahrun)
//   channels       winding rivers cut below sea level, which on Pyrox
//                  fill with lava
//   floor          a level the ground never goes below — Glacius's
//                  frozen sea, flat ice where the water would be
//
// It answers the same questions terrain.js does — heightAt, sampleAt,
// biomeAt, regionAt — so planet.js, flora.js, the monsters and the map
// can stand on it without knowing which world they are on.
import { makeNoise, SEA_LEVEL } from './terrain.js';
import * as THREE from 'three';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (a, b, v) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const mix = (a, b, t) => a + (b - a) * t;

/**
 * @param {object} profile  one of novaAstra.js's PLANETS
 */
export function createAlienTerrain(profile) {
  const S = profile.shape;
  const seed = profile.seed;
  const n1 = makeNoise(seed);
  const n2 = makeNoise(seed + 101);
  const n3 = makeNoise(seed + 202);
  const n4 = makeNoise(seed + 303);

  function fbm(noise, x, z, octaves, wavelength, gain = 0.4) {
    let sum = 0;
    let amp = 1;
    let norm = 0;
    let f = 1 / wavelength;
    for (let o = 0; o < octaves; o++) {
      sum += noise(x * f, z * f) * amp;
      norm += amp;
      amp *= gain;
      f *= 2.02;
    }
    return sum / norm;
  }

  // Sharp crests and flat valleys — see terrain.js for why mountains
  // are ridged noise rather than plain noise.
  function ridged(noise, x, z, octaves, wavelength) {
    let sum = 0;
    let amp = 1;
    let norm = 0;
    let f = 1 / wavelength;
    let weight = 1;
    for (let o = 0; o < octaves; o++) {
      let n = 1 - Math.abs(noise(x * f, z * f));
      n *= n;
      n *= weight;
      weight = clamp01(n * 2.2);
      sum += n * amp;
      norm += amp;
      amp *= 0.45;
      f *= 2.02;
    }
    return sum / norm;
  }

  /** The climate: slow fields kilometres across, all in [0, 1] except continent. */
  function regionAt(x, z) {
    return {
      continent: fbm(n1, x, z, 3, 9000),
      uplift: clamp01(0.5 + fbm(n2, x + 5000, z - 3000, 2, 7000) * 0.9),
      moisture: clamp01(0.5 + fbm(n4, x - 7000, z + 1000, 2, 5200) * 0.95),
      heat: clamp01(0.5 + fbm(n3, x + 2000, z + 9000, 2, 11000) * 0.8),
    };
  }

  function heightAt(x, z, region = regionAt(x, z)) {
    let h = S.base + region.continent * S.relief;

    // Ranges where the ground is uplifted. The coordinates are bent
    // first so the ridges wander instead of lying in parallel rows.
    const wx = x + fbm(n3, x, z, 2, 2400) * 600;
    const wz = z + fbm(n3, z, x, 2, 2400) * 600;
    h += ridged(n2, wx, wz, 4, S.ridge) * S.mountain * smooth(0.35, 0.8, region.uplift);
    h += fbm(n4, x, z, 3, 300) * S.hills;

    if (S.dunes) {
      // Long crests across the wind, gently curving, only where it is
      // dry and low: a sand sea, not sand on the mountains.
      const sand = smooth(0.55, 0.38, region.moisture) * (1 - smooth(0.45, 0.65, region.uplift));
      if (sand > 0) {
        const a = 0.6 + fbm(n1, x, z, 2, 6000) * 0.5;
        const d = (x * Math.cos(a) + z * Math.sin(a)) / S.dunes.spacing
          + fbm(n3, x, z, 2, 900) * 1.6;
        const crest = Math.pow(0.5 + 0.5 * Math.sin(d * Math.PI * 2), 2.2);
        h += crest * S.dunes.height * sand;
      }
    }

    if (S.terraces) {
      // Mesas: the uplifted ground climbs in steps — a flat top, a cliff,
      // a flat top — which is what layered rock does as it wears away.
      const mesa = smooth(0.45, 0.65, region.uplift);
      if (mesa > 0 && h > 0) {
        const step = S.terraces;
        const k = Math.floor(h / step);
        const t = h / step - k;
        const terraced = (k + smooth(0.7, 0.95, t)) * step;
        h = mix(h, terraced, mesa);
      }
    }

    if (S.channels) {
      // Rivers: where a slow noise crosses zero, a channel is cut below
      // the sea, so it fills with whatever the sea is made of.
      const v = Math.abs(fbm(n3, x + 900, z - 400, 2, S.channels.wavelength));
      const k = smooth(S.channels.width, 0, v) * (1 - smooth(120, 260, h));
      if (k > 0) h = mix(h, -S.channels.depth * 0.3, k);
    }

    if (S.floor !== undefined) {
      // Never below the frozen sea: flat ice, very faintly rippled.
      const floor = S.floor + n4(x / 140, z / 140) * 1.5;
      if (h < floor) h = mix(floor, h, smooth(floor - 30, floor, h) * 0.15);
    }
    return h;
  }

  function sampleAt(x, z, step = 4) {
    const region = regionAt(x, z);
    const h = heightAt(x, z, region);
    const hx = heightAt(x + step, z) - heightAt(x - step, z);
    const hz = heightAt(x, z + step) - heightAt(x, z - step);
    const slope = Math.atan(Math.hypot(hx, hz) / (2 * step));
    const slopeDeg = (slope * 180) / Math.PI;
    return {
      height: h,
      slope,
      slopeDeg,
      region,
      biome: profile.biome(h, slopeDeg, region),
    };
  }

  const _col = new THREE.Color();
  const seaHex = profile.sea?.color ?? 0x1d3b4d;

  return {
    heightAt,
    sampleAt,
    regionAt,
    biomeAt: (x, z) => sampleAt(x, z).biome,
    // The home world's style fields mean nothing here; the planet paints
    // itself (see `paint`), so these only need to be harmless.
    styleAt: () => ({ sandy: 0, plateau: 0, alpine: 0 }),
    snowlineAt: () => Infinity,
    towns: [],
    seaLevel: SEA_LEVEL,

    /** Ground colour at a point, into a THREE.Color. */
    paint(x, z, height, slopeDeg, region, out) {
      return profile.paint(height, slopeDeg, region, x, z, out);
    },

    /** Map colour, as 0-255 RGB into `out`. Sea included. */
    mapPaint(x, z, height, region, out) {
      if (height <= SEA_LEVEL && profile.sea) {
        _col.setHex(seaHex);
        if (!profile.sea.emissive) _col.multiplyScalar(1 - clamp01(-height / 120) * 0.5);
      } else {
        profile.paint(height, 0, region, x, z, _col);
      }
      out[0] = _col.r * 255;
      out[1] = _col.g * 255;
      out[2] = _col.b * 255;
    },
  };
}
