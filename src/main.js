// Entry point. Renderer + game loop + assembly.
// Story-wise this is Vexo's pre-mission practice flight (M1: Earth
// training). Mechanically it's the 6DOF flight foundation every later
// milestone builds on.
import * as THREE from 'three';
import './style.css';

import { createScene, createCamera } from './scene.js';
import { createShip, updateShip } from './ship.js';
import { createStarfield, updateStarfield } from './world/starfield.js';
import { createInput } from './input/index.js';
import { createHud } from './hud.js';
import { createTitleCard } from './titleCard.js';

// --- Renderer ---------------------------------------------------------------
const container = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// --- World ------------------------------------------------------------------
const scene = createScene();
const camera = createCamera();
const ship = createShip();
const starfield = createStarfield();

scene.add(ship.mesh);
scene.add(starfield);

// --- Input + UI -------------------------------------------------------------
const input = createInput();
const hud = createHud();
const titleCard = createTitleCard();

// --- Chase camera -----------------------------------------------------------
// The camera trails the ship from a fixed offset in the ship's local frame:
// behind and slightly above. We lerp toward the target each frame so the
// camera has a little "spring" — it lags briefly when the ship turns, which
// reads as motion and feels more cinematic than a rigid mount.
const CAM_OFFSET_LOCAL = new THREE.Vector3(0, 1.4, -5.5); // behind & above
const CAM_LOOKAHEAD_LOCAL = new THREE.Vector3(0, 0, 4);  // look slightly past the nose
// "Half-life" of the spring in seconds: lower = snappier, higher = floatier.
const CAM_POS_HALFLIFE = 0.12;
const CAM_LOOK_HALFLIFE = 0.10;

const _camTargetPos = new THREE.Vector3();
const _camTargetLook = new THREE.Vector3();
const _camCurrentLook = new THREE.Vector3();
let camLookInitialized = false;

function updateChaseCamera(dt) {
  // Target position in world space = ship position + ship-rotated offset.
  _camTargetPos.copy(CAM_OFFSET_LOCAL)
    .applyQuaternion(ship.mesh.quaternion)
    .add(ship.mesh.position);

  _camTargetLook.copy(CAM_LOOKAHEAD_LOCAL)
    .applyQuaternion(ship.mesh.quaternion)
    .add(ship.mesh.position);

  if (!camLookInitialized) {
    camera.position.copy(_camTargetPos);
    _camCurrentLook.copy(_camTargetLook);
    camLookInitialized = true;
  } else {
    // Frame-rate-independent exponential smoothing.
    // alpha = 1 - 2^(-dt / halflife) means after `halflife` seconds we have
    // closed exactly half the remaining distance, regardless of dt.
    const aPos = 1 - Math.pow(2, -dt / CAM_POS_HALFLIFE);
    const aLook = 1 - Math.pow(2, -dt / CAM_LOOK_HALFLIFE);
    camera.position.lerp(_camTargetPos, aPos);
    _camCurrentLook.lerp(_camTargetLook, aLook);
  }

  camera.lookAt(_camCurrentLook);
  // Roll the camera with the ship so banked turns feel right.
  // (lookAt resets up; reapply ship up so we get the roll.)
  const shipUp = new THREE.Vector3(0, 1, 0).applyQuaternion(ship.mesh.quaternion);
  camera.up.copy(shipUp);
  camera.lookAt(_camCurrentLook);
}

// --- Resize -----------------------------------------------------------------
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener('resize', onResize);

// --- State machine ----------------------------------------------------------
// Two states for M1: TITLE (waiting for first keypress) and FLY.
const STATE = { TITLE: 'title', FLY: 'fly' };
let state = STATE.TITLE;

// --- Game loop --------------------------------------------------------------
let lastT = performance.now();
const _euler = new THREE.Euler();

function frame(now) {
  // Cap dt at 100ms so a long pause (tab backgrounded) doesn't fling the
  // ship across the universe on resume.
  const rawDt = (now - lastT) / 1000;
  const dt = Math.min(rawDt, 0.1);
  lastT = now;

  if (state === STATE.TITLE) {
    if (input.keyboard.consumeAnyJustPressed()) {
      state = STATE.FLY;
      titleCard.dismiss();
    }
    // Still render the scene behind the title card so it's not a blank gap.
  } else {
    // Toggle arcade damping with X.
    if (input.keyboard.consumeJustPressed(['KeyX'])) {
      ship.arcadeDamping = !ship.arcadeDamping;
    }
    updateShip(ship, input.sample(), dt);
  }

  updateStarfield(starfield, camera);
  updateChaseCamera(dt);

  renderer.render(scene, camera);

  // HUD reflects state every frame so values are live.
  _euler.setFromQuaternion(ship.mesh.quaternion, 'YXZ');
  hud.update({
    velocity: ship.velocity.length(),
    eulerDeg: {
      x: THREE.MathUtils.radToDeg(_euler.x),
      y: THREE.MathUtils.radToDeg(_euler.y),
      z: THREE.MathUtils.radToDeg(_euler.z),
    },
    dt,
    sources: input.activeSources(),
    dampingOn: ship.arcadeDamping,
  });

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
