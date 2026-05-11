// Entry point. Renderer + game loop + assembly.
// Story-wise this is Vexo's pre-mission practice flight (M1: Earth
// training). Mechanically it's the 6DOF flight foundation every later
// milestone builds on.
import * as THREE from 'three';
import './style.css';

// Bridge module: monkey-patches `navigator.getGamepads()` IFF we're
// inside the native iOS wrapper. NO-OP on desktop. Import it before any
// input code so a connected pad is visible from the first frame.
import './native-gamepad-bridge.js';

import { createScene, createCamera } from './scene.js';
import { createShip, updateShip } from './ship.js';
import { createStarfield, updateStarfield } from './world/starfield.js';
import { createAsteroids } from './world/asteroids.js';
import { createMars } from './world/mars.js';
import { createSun } from './world/sun.js';
import * as physics from './physics.js';
const { resolveAsteroidCollisions } = physics;
import { createInput } from './input/index.js';
import { createHud } from './hud.js';
import { createTitleCard } from './titleCard.js';
import { createFastTravel } from './fastTravel.js';
import { createAudio } from './audio.js';

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

const asteroids = createAsteroids();
const mars = createMars();
const sun = createSun();

scene.add(ship.mesh);
scene.add(starfield);
scene.add(asteroids.mesh);
scene.add(mars.mesh);
scene.add(sun.sprite);

// Hide the ship during the title state so it doesn't show up behind the
// title card. It pops in on the first keypress.
ship.mesh.visible = false;

// --- Input + UI -------------------------------------------------------------
const input = createInput();
const hud = createHud();
const titleCard = createTitleCard();
const fastTravel = createFastTravel(document.body);
const audio = createAudio();

// HUD button → kick off a warp. Same effect as pressing F.
hud.onFastTravel(() => { tryBeginWarp(); });

function tryBeginWarp() {
  if (fastTravel.active) return;
  hud.setFastTravelActive(true);
  fastTravel.begin(ship, {
    onDone: () => hud.setFastTravelActive(false),
  });
}

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
      ship.mesh.visible = true;
      titleCard.dismiss();
      hud.showFastTravel();
      // First user gesture → safe to ask for gyro permission on iOS
      // AND to start the audio context (autoplay policy gate).
      input.enableGyro().catch(() => {});
      audio.start();
    }
    // Starfield + camera still update behind the title card.
  } else {
    // Toggle arcade damping with X.
    if (input.keyboard.consumeJustPressed(['KeyX'])) {
      ship.arcadeDamping = !ship.arcadeDamping;
    }
    // F triggers a warp (same effect as the HUD button).
    if (input.keyboard.consumeJustPressed(['KeyF'])) {
      tryBeginWarp();
    }

    if (fastTravel.suppressInput) {
      // During a warp the ship is on rails; ignore controls.
    } else {
      const axes = input.sample();
      updateShip(ship, axes, dt);
      audio.setThrottle(axes.throttle);
      // Resolve collisions AFTER moving the ship this frame.
      resolveAsteroidCollisions(
        { position: ship.mesh.position, velocity: ship.velocity },
        asteroids.instances,
      );
    }
  }

  fastTravel.update(dt);
  audio.update(dt);
  asteroids.update(dt);
  mars.update(dt);
  sun.update(camera);
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

// Dev-only handle for the smoke harness. Stripped in production builds:
// Vite replaces `import.meta.env.DEV` with `false` at build time and the
// dead branch is removed.
if (import.meta.env.DEV) {
  window.__superVexo = { ship, asteroids, audio, fastTravel, physics };
}
