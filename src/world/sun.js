// Nova, the star at the heart of Nova Astra.
//
// It used to be a glow pinned 2 km behind the camera wherever the ship
// went — a skybox trick, so it always looked infinitely far away. That
// also meant you could never fly toward it: it backed away exactly as
// fast as you came. Now it is a real body at a real place (novaAstra.js)
// that grows as you approach, with the planets set out around it.
//
// Three layers, all self-lit:
//   1. the star itself, a white-hot sphere;
//   2. a tight bright corona, a sprite just bigger than the sphere;
//   3. a wide soft glow, a much bigger sprite that reads as light
//      spilling into space from across the whole system.
// The sprites always face the camera, so the glow is round from every
// side. Additive, so they brighten whatever is behind them rather than
// covering it.
import * as THREE from 'three';
import { STAR } from './novaAstra.js';

const GLOW_TEX_SIZE = 256;

function makeGlowTexture(stops) {
  const canvas = document.createElement('canvas');
  canvas.width = GLOW_TEX_SIZE;
  canvas.height = GLOW_TEX_SIZE;
  const ctx = canvas.getContext('2d');
  const c = GLOW_TEX_SIZE / 2;
  const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
  for (const [at, colour] of stops) grad.addColorStop(at, colour);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, GLOW_TEX_SIZE, GLOW_TEX_SIZE);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSun() {
  const group = new THREE.Group();
  group.name = 'sun';
  group.position.copy(STAR.position);

  const star = new THREE.Mesh(
    new THREE.SphereGeometry(STAR.radius, 48, 32),
    // Unlit: a star is the light, not something lit by it. Fog off, so
    // nothing ever greys it out.
    new THREE.MeshBasicMaterial({ color: STAR.color, fog: false }),
  );
  group.add(star);

  const glowMat = (stops) => new THREE.SpriteMaterial({
    map: makeGlowTexture(stops),
    depthWrite: false,
    transparent: true,
    blending: THREE.AdditiveBlending,
    fog: false,
  });
  const corona = new THREE.Sprite(glowMat([
    [0.0, 'rgba(255, 250, 230, 1)'],
    [0.42, 'rgba(255, 236, 190, 0.95)'],
    [0.5, 'rgba(255, 210, 140, 0.55)'],
    [0.75, 'rgba(255, 180, 110, 0.15)'],
    [1.0, 'rgba(255, 160, 90, 0)'],
  ]));
  corona.scale.setScalar(STAR.radius * 4.2);
  group.add(corona);

  const halo = new THREE.Sprite(glowMat([
    [0.0, 'rgba(255, 220, 160, 0.55)'],
    [0.2, 'rgba(255, 190, 120, 0.25)'],
    [0.5, 'rgba(255, 160, 100, 0.08)'],
    [1.0, 'rgba(255, 140, 90, 0)'],
  ]));
  halo.scale.setScalar(STAR.radius * 14);
  group.add(halo);

  return {
    group,
    // The old name, for the list of things hidden while landed.
    sprite: group,
    update(_camera, dt = 0) {
      // A slow pulse, so it reads as burning rather than painted on.
      const t = performance.now() * 0.001;
      corona.scale.setScalar(STAR.radius * (4.2 + Math.sin(t * 0.8) * 0.12));
      star.rotation.y += dt * 0.01;
    },
  };
}
