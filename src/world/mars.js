// Mars: a large textured sphere far down +Z (the ship's natural
// forward direction). The texture is procedurally generated on a 2D
// canvas — no asset files. The point is to teach Marco that "textures"
// are just pixel data; you can paint your own from JS.
//
// Surface look: rust-orange base with darker iron-oxide patches and a
// few brighter highlands. We blob simple noise rather than running a
// proper Perlin — close enough for "looks like Mars from space".
import * as THREE from 'three';

export const MARS_POSITION = new THREE.Vector3(0, 0, 700);
export const MARS_RADIUS = 60;

function makeMarsTexture() {
  const W = 1024;
  const H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Base wash.
  const base = ctx.createLinearGradient(0, 0, 0, H);
  base.addColorStop(0, '#c97648');
  base.addColorStop(0.5, '#b15a30');
  base.addColorStop(1, '#7a3a1c');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);

  // Splatter darker iron-oxide blotches (maria-like).
  for (let i = 0; i < 320; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = 8 + Math.random() * 80;
    const alpha = 0.05 + Math.random() * 0.18;
    const dark = Math.random() < 0.65;
    ctx.beginPath();
    ctx.fillStyle = dark
      ? `rgba(70, 30, 15, ${alpha})`
      : `rgba(240, 180, 130, ${alpha})`;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Polar caps: pale blue-white near the texture's top/bottom.
  for (const yCenter of [0, H]) {
    const grad = ctx.createRadialGradient(W / 2, yCenter, 0, W / 2, yCenter, H * 0.35);
    grad.addColorStop(0, 'rgba(230, 240, 245, 0.85)');
    grad.addColorStop(1, 'rgba(230, 240, 245, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createMars() {
  const geom = new THREE.SphereGeometry(MARS_RADIUS, 64, 32);
  const mat = new THREE.MeshStandardMaterial({
    map: makeMarsTexture(),
    roughness: 0.95,
    metalness: 0,
  });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.copy(MARS_POSITION);

  // Spin slowly so it doesn't look frozen on long approaches. Real
  // Mars rotates ~24h; this is sped up for visible motion.
  const SPIN_RATE = 0.02; // rad/s
  function update(dt) {
    mesh.rotation.y += SPIN_RATE * dt;
  }

  return { mesh, update };
}
