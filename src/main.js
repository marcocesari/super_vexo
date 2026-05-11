// Entry point. M0: a rotating cube to prove the renderer + game loop are wired up.
import * as THREE from 'three';

const container = document.getElementById('app');

// --- Renderer ---------------------------------------------------------------
// Cap pixel ratio at 2: on a 3x Retina display the cost of rendering 9x the
// pixels is not worth the difference your eyes can see.
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// --- Scene + camera ---------------------------------------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05060a);

const FOV_DEG = 60;
const NEAR = 0.1;
const FAR = 1000;
const camera = new THREE.PerspectiveCamera(
  FOV_DEG,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR,
);
camera.position.set(0, 0, 4);

// --- Lights -----------------------------------------------------------------
// Ambient gives every face a baseline so nothing is pitch-black; the
// directional light adds shape so the cube reads as a cube.
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 1.0);
sun.position.set(3, 5, 4);
scene.add(sun);

// --- Cube -------------------------------------------------------------------
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x4aa3ff, roughness: 0.4, metalness: 0.1 }),
);
scene.add(cube);

const ROT_SPEED_X = 0.6; // radians per second
const ROT_SPEED_Y = 0.9;

// --- Resize -----------------------------------------------------------------
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener('resize', onResize);

// --- Game loop --------------------------------------------------------------
// deltaTime in seconds keeps motion frame-rate independent: 60fps and 120fps
// machines see the cube spin at the same speed.
let lastT = performance.now();
function frame(now) {
  const dt = (now - lastT) / 1000;
  lastT = now;

  cube.rotation.x += ROT_SPEED_X * dt;
  cube.rotation.y += ROT_SPEED_Y * dt;

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
