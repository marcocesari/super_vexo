// The kingdom planet — Astra's home world, shown in the opening
// cinematic. Same canvas-texture trick as Mars, but with an
// Earth-ish palette: deep blue oceans + green continents +
// scattered white clouds. No asset files.
import * as THREE from 'three';

export const KINGDOM_RADIUS = 40;

function makeKingdomTexture() {
  const W = 1024;
  const H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Ocean base — a vertical gradient deep at the poles.
  const ocean = ctx.createLinearGradient(0, 0, 0, H);
  ocean.addColorStop(0, '#0c3a66');
  ocean.addColorStop(0.5, '#1b6aa3');
  ocean.addColorStop(1, '#0c3a66');
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, W, H);

  // Green continents as a small number of larger landmasses — fewer
  // and more distinct so the planet reads as Earth-like (mostly ocean)
  // rather than as a green moss-covered alien world.
  const continentCenters = [];
  for (let i = 0; i < 6; i++) {
    continentCenters.push({
      x: Math.random() * W,
      y: H * 0.25 + Math.random() * H * 0.5,
      r: 50 + Math.random() * 90,
    });
  }
  // Draw each continent as a cluster of overlapping blobs around its center.
  for (const c of continentCenters) {
    const blobs = 8 + Math.floor(Math.random() * 6);
    for (let i = 0; i < blobs; i++) {
      const ox = (Math.random() - 0.5) * c.r * 1.6;
      const oy = (Math.random() - 0.5) * c.r * 1.0;
      const r = 18 + Math.random() * 45;
      const dark = Math.random() < 0.35;
      ctx.beginPath();
      ctx.fillStyle = dark
        ? 'rgba(30, 70, 30, 0.85)'
        : 'rgba(70, 130, 55, 0.9)';
      ctx.arc(c.x + ox, c.y + oy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // White cloud wisps — thin and softer than continents.
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = 14 + Math.random() * 50;
    ctx.beginPath();
    ctx.fillStyle = `rgba(245, 250, 255, ${0.1 + Math.random() * 0.12})`;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Polar ice caps.
  for (const yCenter of [0, H]) {
    const grad = ctx.createRadialGradient(W / 2, yCenter, 0, W / 2, yCenter, H * 0.3);
    grad.addColorStop(0, 'rgba(240, 248, 255, 0.85)');
    grad.addColorStop(1, 'rgba(240, 248, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createKingdomPlanet() {
  const geom = new THREE.SphereGeometry(KINGDOM_RADIUS, 64, 32);
  const mat = new THREE.MeshStandardMaterial({
    map: makeKingdomTexture(),
    roughness: 0.85,
    metalness: 0,
    emissive: 0x000510,
  });
  const mesh = new THREE.Mesh(geom, mat);

  // A subtle atmosphere shell — a slightly larger, additively-blended
  // sphere with low opacity gives the planet a soft blue rim.
  const atmoMat = new THREE.MeshBasicMaterial({
    color: 0x6aaaff,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  });
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(KINGDOM_RADIUS * 1.05, 64, 32),
    atmoMat,
  );
  mesh.add(atmosphere);

  const SPIN_RATE = 0.05; // rad/s — a touch faster than Mars so the rotation reads on screen
  function update(dt) {
    mesh.rotation.y += SPIN_RATE * dt;
  }

  return { mesh, update };
}
