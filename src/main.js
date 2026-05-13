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
import { createRovers } from './world/rovers.js';
import { createRepairEffect } from './world/repairEffect.js';
import * as physics from './physics.js';
const { resolveAsteroidCollisions } = physics;
import { createInput } from './input/index.js';
import { createHud } from './hud.js';
import { createTitleCard } from './titleCard.js';
import { createFastTravel } from './fastTravel.js';
import { createAudio } from './audio.js';
import { createMission } from './mission.js';
import { createUpgrades } from './upgrades.js';
import { createMissionScreens } from './missionScreens.js';
import { shipConfig, DEFAULTS as shipConfigDefaults, resetShipConfig } from './shipConfig.js';
import { createCinematic } from './cinematic.js';

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
const roverApi = createRovers();
const repairFx = createRepairEffect();

scene.add(ship.mesh);
scene.add(starfield);
scene.add(asteroids.mesh);
scene.add(mars.mesh);
scene.add(sun.sprite);
for (const r of roverApi.rovers) scene.add(r.mesh);
scene.add(repairFx.points);

// Hide the ship during the title state so it doesn't show up behind the
// title card. It pops in on the first keypress.
ship.mesh.visible = false;

// --- Input + UI -------------------------------------------------------------
const input = createInput();
const hud = createHud();
const titleCard = createTitleCard();
const fastTravel = createFastTravel(document.body);
const audio = createAudio();
const upgrades = createUpgrades();
const mission = createMission(roverApi);
const missionScreens = createMissionScreens({ upgrades, mission, audio });

mission.setOnRepaired((rover) => {
  repairFx.fire(rover.mesh.position);
  audio.chirp();
});
mission.setOnComplete(() => {
  audio.fanfare();
  missionScreens.show('complete');
});

// HUD button → kick off a warp. Same effect as pressing F.
hud.onFastTravel(() => { tryBeginWarp(); });
hud.onUpgradesClick(() => { missionScreens.show('upgrades'); });

/**
 * Reset the entire game state without reloading the page. Required by
 * the program.md quality bar. Restores the ship, mission, rovers, and
 * shipConfig to their initial values, closes any open overlay, and
 * cancels an in-flight warp.
 *
 * Audio is **not** torn down: re-creating the AudioContext would
 * require another user gesture (autoplay policy), which we already
 * spent at the title-card keypress. So audio just keeps playing
 * across resets.
 */
function resetGame() {
  ship.mesh.position.set(0, 0, 0);
  ship.velocity.set(0, 0, 0);
  ship.mesh.quaternion.identity();
  ship.arcadeDamping = false;

  mission.reset();
  roverApi.reset();
  upgrades.reset();
  resetShipConfig();

  missionScreens.hideAll();
}

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
  if (cinematic) cinematic.onResize();
}
window.addEventListener('resize', onResize);

// --- State machine ----------------------------------------------------------
// Three states: CINEMATIC (opening intro) → TITLE → FLY.
const STATE = { CINEMATIC: 'cinematic', TITLE: 'title', FLY: 'fly' };

// `?skipIntro=1` jumps straight to TITLE without ever building the
// cinematic. Used by the smoke harness and convenient for dev cycles
// when you don't want to wait through the intro.
const skipIntroParam = new URLSearchParams(window.location.search).get('skipIntro');
const shouldShowCinematic = skipIntroParam !== '1';

let state = shouldShowCinematic ? STATE.CINEMATIC : STATE.TITLE;

// Build the cinematic only when we plan to show it. When skipped we
// never construct the second Three.js scene, saving the texture and
// geometry cost entirely.
const cinematic = shouldShowCinematic
  ? createCinematic({
      renderer,
      onDone: () => {
        state = STATE.TITLE;
        // Bring the title card and the Tablet HUD back from their
        // pre-cinematic hidden state; drain any leftover keypress so
        // the same tap that skipped doesn't also start the game on
        // the next frame.
        if (titleCardRoot) titleCardRoot.style.opacity = '';
        hud.show();
        input.clearJustPressed();
      },
    })
  : null;

// When the cinematic is skipped via ?skipIntro=1 we're already in
// TITLE — show the HUD immediately so it's visible behind the title
// card, matching the pre-M5 behavior.
if (!shouldShowCinematic) hud.show();

// Pressing a key during the cinematic skips it. We also drop the
// keyboard's `justPressed` queue so that *same* keystroke doesn't then
// bleed through into the title card's "press any key to start" gate.
// Without this, one tap skips the cinematic AND immediately starts the
// game — the player would never see the title.
function onCinematicSkipKey() {
  if (state === STATE.CINEMATIC) {
    cinematic.skip();
    input.clearJustPressed();
    window.removeEventListener('keydown', onCinematicSkipKey);
  }
}
if (shouldShowCinematic) window.addEventListener('keydown', onCinematicSkipKey);

// Hide the title card while the cinematic is playing so it doesn't
// stack on top. When we're skipping the intro entirely we leave the
// title visible from frame zero.
const titleCardRoot = document.getElementById('title-card');
if (titleCardRoot && shouldShowCinematic) titleCardRoot.style.opacity = '0';

// --- Game loop --------------------------------------------------------------
let lastT = performance.now();
const _euler = new THREE.Euler();

function frame(now) {
  // Cap dt at 100ms so a long pause (tab backgrounded) doesn't fling the
  // ship across the universe on resume.
  const rawDt = (now - lastT) / 1000;
  const dt = Math.min(rawDt, 0.1);
  lastT = now;

  if (state === STATE.CINEMATIC) {
    cinematic.update(dt);
    cinematic.render();
    requestAnimationFrame(frame);
    return;
  }

  if (state === STATE.TITLE) {
    if (input.keyboard.consumeAnyJustPressed()) {
      state = STATE.FLY;
      ship.mesh.visible = true;
      titleCard.dismiss();
      hud.showFastTravel();
      hud.showUpgrades();
      hud.setMissionVisible(true);
      hud.showResetHint();
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
    // U toggles the Upgrades screen.
    if (input.keyboard.consumeJustPressed(['KeyU'])) {
      if (missionScreens.isOpen()) missionScreens.hideAll();
      else missionScreens.show('upgrades');
    }
    // R resets the whole game without reloading the page.
    if (input.keyboard.consumeJustPressed(['KeyR'])) {
      resetGame();
    }

    if (fastTravel.suppressInput || missionScreens.isOpen()) {
      // Ship on rails (warp) or player is in a menu → ignore flight input.
      audio.setThrottle(0);
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

    // Mission state: drive hack progress from the H key.
    const holdHack = input.keyboard.isDown('KeyH');
    mission.update({
      shipPos: ship.mesh.position,
      shipSpeed: ship.velocity.length(),
      holdActive: holdHack && !missionScreens.isOpen() && !fastTravel.suppressInput,
      dt,
    });
  }

  fastTravel.update(dt);
  audio.update(dt);
  asteroids.update(dt);
  mars.update(dt);
  sun.update(camera);
  roverApi.update(dt);
  repairFx.update(dt);
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

  // Mission UI: rover counts + the (maybe-present) hack prompt.
  hud.updateMission({
    remaining: mission.remaining(),
    total: mission.totalRovers(),
    credits: mission.credits,
  });
  const target = mission.repairing ?? mission.inRange;
  hud.updateHack({
    name: target ? target.name : null,
    progress: target ? target.repairProgress : 0,
  });

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// Dev-only handle for the smoke harness. Stripped in production builds:
// Vite replaces `import.meta.env.DEV` with `false` at build time and the
// dead branch is removed.
if (import.meta.env.DEV) {
  window.__superVexo = {
    ship, asteroids, audio, fastTravel, physics,
    rovers: roverApi, mission, upgrades, missionScreens,
    shipConfig, shipConfigDefaults,
    resetGame,
  };
}
