// Distant Sun: a 2D billboard sprite behind the player. Using a sprite
// (not a 3D sphere) means it always faces the camera regardless of how
// the ship is oriented. We also paint a soft radial glow so it reads
// as a light source, not a dot.
//
// The sun is far down -Z so the player flies *away* from it toward Mars
// at +Z. From the chase camera (which sits at the ship's local -Z),
// the sun is initially "behind the camera" — to actually see it,
// glance back. We re-center the sun's position on the camera each
// frame (skybox trick) so it stays infinitely far away no matter where
// the ship flies.
import * as THREE from 'three';

const GLOW_TEX_SIZE = 256;
const SUN_OFFSET_FROM_CAMERA = new THREE.Vector3(0, 0, -2000);
const SUN_SCALE = 350;

function makeGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = GLOW_TEX_SIZE;
  canvas.height = GLOW_TEX_SIZE;
  const ctx = canvas.getContext('2d');
  const c = GLOW_TEX_SIZE / 2;
  const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
  grad.addColorStop(0.0, 'rgba(255, 245, 220, 1)');
  grad.addColorStop(0.08, 'rgba(255, 230, 180, 0.95)');
  grad.addColorStop(0.25, 'rgba(255, 200, 130, 0.45)');
  grad.addColorStop(0.55, 'rgba(255, 170, 100, 0.15)');
  grad.addColorStop(1.0, 'rgba(255, 150, 90, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, GLOW_TEX_SIZE, GLOW_TEX_SIZE);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSun() {
  const map = makeGlowTexture();
  const mat = new THREE.SpriteMaterial({
    map,
    depthWrite: false,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.setScalar(SUN_SCALE);

  // Re-center on the camera so the sun feels infinitely far away,
  // exactly like a skybox.
  function update(camera) {
    sprite.position.copy(camera.position).add(SUN_OFFSET_FROM_CAMERA);
  }

  return { sprite, update };
}
