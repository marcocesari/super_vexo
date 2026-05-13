// Lord Draxos's ship — a menacing, angular silhouette. Built from
// primitives: a stretched octahedron for the hull, a glowing red core,
// and two swept-back wings.
import * as THREE from 'three';

const HULL_LENGTH = 14;
const HULL_WIDTH = 4.5;
const CORE_RADIUS = 0.9;

export function createDraxosShip() {
  const group = new THREE.Group();

  // Hull: an octahedron stretched along Z for a dagger-like shape.
  const hullGeom = new THREE.OctahedronGeometry(1, 0);
  hullGeom.scale(HULL_WIDTH, HULL_WIDTH, HULL_LENGTH * 0.5);
  const hullMat = new THREE.MeshStandardMaterial({
    color: 0x3a1a24,
    roughness: 0.45,
    metalness: 0.6,
    // Brighter emissive so the hull stays visible even when no light
    // hits it directly — the ship should silhouette against the
    // starfield, not vanish into it.
    emissive: 0x301018,
    flatShading: true,
  });
  const hull = new THREE.Mesh(hullGeom, hullMat);
  group.add(hull);

  // Glowing red "eye" at the front of the ship.
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xff3030,
  });
  const core = new THREE.Mesh(new THREE.SphereGeometry(CORE_RADIUS, 12, 8), coreMat);
  core.position.set(0, 0, HULL_LENGTH * 0.55);
  group.add(core);

  // A soft halo around the core via additive sprite — gives it
  // presence at a distance.
  const haloCanvas = document.createElement('canvas');
  haloCanvas.width = haloCanvas.height = 128;
  {
    const ctx = haloCanvas.getContext('2d');
    const c = 64;
    const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
    grad.addColorStop(0, 'rgba(255, 60, 60, 1)');
    grad.addColorStop(0.3, 'rgba(255, 30, 30, 0.6)');
    grad.addColorStop(1, 'rgba(255, 30, 30, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
  }
  const haloTex = new THREE.CanvasTexture(haloCanvas);
  haloTex.colorSpace = THREE.SRGBColorSpace;
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: haloTex,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }));
  halo.position.copy(core.position);
  halo.scale.setScalar(5.5);
  group.add(halo);

  // Two swept-back wings — thin tapered boxes mirrored on X.
  const wingGeom = new THREE.BoxGeometry(0.35, 1.4, 6);
  wingGeom.translate(0, 0, -1.5); // attachment near the back
  const wingMat = new THREE.MeshStandardMaterial({
    color: 0x1c0a12,
    roughness: 0.6,
    metalness: 0.5,
    emissive: 0x200810,
    flatShading: true,
  });
  for (const sign of [-1, 1]) {
    const wing = new THREE.Mesh(wingGeom, wingMat);
    wing.position.set(sign * 2.6, 0, -2.5);
    wing.rotation.z = sign * 0.25; // angle outward
    wing.rotation.y = sign * 0.2;  // sweep back
    group.add(wing);
  }

  return { group, hull, core, halo };
}
