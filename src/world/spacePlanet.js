// A Nova Astra planet as seen from space: a painted globe, a thin glow
// of atmosphere round its edge, and — for Sahrun — its moons.
//
// The globe's picture is painted once at load from noise, into a canvas
// wrapped round a sphere. The noise is sampled at each pixel's point ON
// THE SPHERE rather than at its latitude and longitude, so there is no
// seam where the picture's left and right edges meet, and nothing
// pinches at the poles.
import * as THREE from 'three';
import { makeNoise } from './terrain.js';

const TEX_W = 384;
const TEX_H = 192;

function lerpPalette(palette, t, out) {
  t = Math.max(0, Math.min(1, t));
  for (let i = 1; i < palette.length; i++) {
    const [p1, c1] = palette[i];
    if (t <= p1) {
      const [p0, c0] = palette[i - 1];
      const k = (t - p0) / (p1 - p0 || 1);
      out.setHex(c0).lerp(new THREE.Color(c1), k);
      return out;
    }
  }
  return out.setHex(palette[palette.length - 1][1]);
}

/** Paint the globe: its colour map, and a glow map for anything that shines. */
function paintGlobe(def, seed) {
  const n1 = makeNoise(seed);
  const n2 = makeNoise(seed + 7);
  const canvas = document.createElement('canvas');
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(TEX_W, TEX_H);
  let glowCanvas = null;
  let glowImg = null;
  if (def.cracks) {
    glowCanvas = document.createElement('canvas');
    glowCanvas.width = TEX_W;
    glowCanvas.height = TEX_H;
    glowImg = glowCanvas.getContext('2d').createImageData(TEX_W, TEX_H);
  }
  const col = new THREE.Color();
  const glow = def.cracks ? new THREE.Color(def.cracks) : null;

  // 3-D noise from 2-D: two samples on planes through the point.
  const n3 = (noise, x, y, z, f) => (noise(x * f + z * 0.73 * f, y * f) + noise(z * f, (x + y) * 0.81 * f)) * 0.5;

  for (let j = 0; j < TEX_H; j++) {
    const lat = (j / (TEX_H - 1) - 0.5) * Math.PI;
    const cy = Math.sin(lat);
    const cr = Math.cos(lat);
    for (let i = 0; i < TEX_W; i++) {
      const lon = (i / TEX_W) * Math.PI * 2;
      const x = Math.cos(lon) * cr;
      const z = Math.sin(lon) * cr;
      let v = 0;
      let amp = 1;
      let norm = 0;
      for (let o = 0; o < 4; o++) {
        v += n3(n1, x, cy, z, 2.2 * 2 ** o) * amp;
        norm += amp;
        amp *= 0.5;
      }
      v = 0.5 + (v / norm) * 0.75;
      // Desert: wind bands round the equator, broken up by the noise.
      if (def.bands) v = v * 0.7 + (0.5 + 0.5 * Math.sin(cy * 14 + v * 4)) * 0.3;
      lerpPalette(def.palette, v, col);
      // Jungle: swirls of white cloud over the top.
      if (def.clouds) {
        const c = n3(n2, x, cy, z, 3.5);
        if (c > 0.25) col.lerp(new THREE.Color(0xf2fff8), Math.min(0.75, (c - 0.25) * 2));
      }
      const k = (j * TEX_W + i) * 4;
      img.data[k] = col.r * 255;
      img.data[k + 1] = col.g * 255;
      img.data[k + 2] = col.b * 255;
      img.data[k + 3] = 255;
      if (glowImg) {
        // Lava: thin bright lines where a second noise crosses zero.
        const r = Math.abs(n3(n2, x, cy, z, 4.5));
        const lit = r < 0.05 ? 1 - r / 0.05 : 0;
        glowImg.data[k] = glow.r * 255 * lit;
        glowImg.data[k + 1] = glow.g * 255 * lit;
        glowImg.data[k + 2] = glow.b * 255 * lit;
        glowImg.data[k + 3] = 255;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  let emissiveMap = null;
  if (glowCanvas) {
    glowCanvas.getContext('2d').putImageData(glowImg, 0, 0);
    emissiveMap = new THREE.CanvasTexture(glowCanvas);
    emissiveMap.colorSpace = THREE.SRGBColorSpace;
  }
  return { map, emissiveMap };
}

/**
 * @param {object} planet  one of novaAstra.js's PLANETS
 */
export function createSpacePlanet(planet) {
  const def = planet.globe;
  const group = new THREE.Group();
  group.position.copy(planet.position);
  group.name = `planet-${planet.id}`;

  const { map, emissiveMap } = paintGlobe(def, planet.seed);
  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(planet.radius, 64, 40),
    new THREE.MeshStandardMaterial({
      map,
      roughness: 0.9,
      metalness: 0,
      emissive: emissiveMap ? 0xffffff : 0x000000,
      emissiveMap,
      emissiveIntensity: emissiveMap ? 1.3 : 0,
    }),
  );
  group.add(globe);

  // The atmosphere: a slightly bigger sphere drawn from the inside, so
  // only its rim shows, glowing round the planet's edge.
  const air = new THREE.Mesh(
    new THREE.SphereGeometry(planet.radius * 1.045, 48, 32),
    new THREE.MeshBasicMaterial({
      color: def.atmosphere,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  group.add(air);

  const moons = (def.moons ?? []).map((m, k) => {
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(m.radius, 2),
      new THREE.MeshStandardMaterial({ color: m.color, roughness: 1, flatShading: true }),
    );
    group.add(mesh);
    return { ...m, mesh, angle: k * 2.4 };
  });

  return {
    group,
    planet,
    update(dt) {
      globe.rotation.y += dt * 0.02;
      for (const m of moons) {
        m.angle += dt * m.speed;
        m.mesh.position.set(Math.cos(m.angle) * m.distance, Math.sin(m.angle * 0.7) * m.distance * 0.18,
          Math.sin(m.angle) * m.distance);
      }
    },
  };
}
