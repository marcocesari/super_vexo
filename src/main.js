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
import { createEarth } from './world/earth.js';
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
import { BUTTONS } from './input/gamepad.js';
import { createDebugPad } from './debugPad.js';
import { createViewport } from './viewport.js';
import { createChaseCamera } from './chaseCamera.js';
import { createSurface } from './surface.js';
import { createFrameScaler } from './perf.js';
import { createCharacterViewer } from './characterViewer.js';

// --- URL switches -----------------------------------------------------------
// Read before anything is built, because half the setup below branches
// on them.
//   ?skipIntro=1   jump past the opening cinematic
//   ?land=1        start parked over Via Giuseppe Impastato, Castel Maggiore
//   ?character=1   show the Vexo turntable instead of the game
//   ?debugPad=1    on-screen gamepad diagnostics
const params = new URLSearchParams(window.location.search);
const skipIntro = params.get('skipIntro') === '1';
const startLanded = params.get('land') === '1';
const characterMode = params.get('character') === '1';

// --- Renderer ---------------------------------------------------------------
const container = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
container.appendChild(renderer.domElement);
// The canvas is stretched over the whole screen by CSS; `viewport.js`
// watches that element and tells us its real size. Sizing is applied in
// `applyViewportSize` below, once every consumer of it exists.

// --- World ------------------------------------------------------------------
const scene = createScene();
const camera = createCamera();
const ship = createShip();
const starfield = createStarfield();

const asteroids = createAsteroids();
const mars = createMars();
const earth = createEarth();
const sun = createSun();
const roverApi = createRovers();
const repairFx = createRepairEffect();

scene.add(ship.mesh);
scene.add(starfield);
scene.add(asteroids.mesh);
scene.add(mars.mesh);
scene.add(earth.mesh);
scene.add(sun.sprite);
for (const r of roverApi.rovers) scene.add(r.mesh);
scene.add(repairFx.points);

// Ship is visible from the title screen onward — the player should
// always see Vexo's craft from behind. (Cinematic state uses its own
// scene so the ship isn't rendered there anyway.)
ship.mesh.visible = true;

// Landing site. Fly into Earth and the game swaps space for the real
// streets of Castel Maggiore; everything in `spaceObjects` is hidden
// while you're down there. See src/surface.js for why it's a teleport.
const surface = createSurface(
  scene,
  [
    starfield, asteroids.mesh, mars.mesh, earth.mesh, sun.sprite,
    repairFx.points, ...roverApi.rovers.map((r) => r.mesh),
  ],
  // Landing and taking off move the ship 20 km in one frame; without
  // this the camera would spend the next few seconds flying there.
  () => chaseCamera.reset(),
);

// --- Input + UI -------------------------------------------------------------
const input = createInput();
const hud = createHud();
// A phone screen is too small to show the title card and the Tablet at
// the same time without them colliding, so on small screens the Tablet
// stays out of the way until the player starts flying.
const smallScreen = window.matchMedia('(max-height: 480px), (max-width: 480px)');
if (smallScreen.matches) {
  hud.hide();
  hud.setHintVisible(false);
}
const titleCard = createTitleCard();
if (characterMode) {
  titleCard.hide();
  hud.hide();
  hud.setHintVisible(false);
}
const fastTravel = createFastTravel(document.body);
const audio = createAudio();
const upgrades = createUpgrades();
const mission = createMission(roverApi);
const missionScreens = createMissionScreens({
  upgrades, mission, audio,
  // Closing a screen from its own button lands back on the Tablet.
  onClose: () => hud.show(),
});

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
  // Take off first: leaving the surface repositions the ship, so it has
  // to happen BEFORE we put the ship back at the origin.
  surface.reset(ship);

  ship.mesh.position.set(0, 0, 0);
  ship.velocity.set(0, 0, 0);
  ship.mesh.quaternion.identity();
  ship.arcadeDamping = false;

  mission.reset();
  roverApi.reset();
  upgrades.reset();
  resetShipConfig();

  missionScreens.hideAll();
  chaseCamera.reset();
}

function tryBeginWarp() {
  if (fastTravel.active) return;
  // No warping while landed — the rails run straight through the houses.
  if (surface.active) return;
  hud.setFastTravelActive(true);
  fastTravel.begin(ship, {
    onDone: () => hud.setFastTravelActive(false),
  });
}

// --- Chase camera -----------------------------------------------------------
// Lives in `chaseCamera.js`: it trails the ship, keeps it dead-centre in
// frame, and lets the right stick swing the view around it.
const chaseCamera = createChaseCamera(camera);
// Right-stick look for this frame. Only the FLY state writes it; the
// cinematic and title card leave the camera parked behind the tail.
const look = { x: 0, y: 0 };

// --- Resize -----------------------------------------------------------------
// One place that reacts to the window changing shape — a phone rotating,
// a desktop window dragged, the iOS URL bar sliding away. We only resize
// the *drawing buffer* (`setSize(w, h, false)`); the canvas's on-screen
// size is CSS's job, so the two can never drift apart mid-rotation.
let lastViewport = null;
function applyViewportSize(size) {
  lastViewport = size;
  const { width, height, pixelRatio } = size;
  // `frameScaler` trims the pixel ratio when the device can't keep up
  // (see perf.js). At full speed its scale is 1 and this is a no-op.
  renderer.setPixelRatio(pixelRatio * frameScaler.scale);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  if (cinematic) cinematic.onResize(width, height);
  if (characterViewer) characterViewer.onResize(width, height);
}

// Re-applies the current viewport at a new render scale.
const frameScaler = createFrameScaler(() => {
  if (lastViewport) applyViewportSize(lastViewport);
});

// How fast the stick/D-pad scrolls an open menu, in pixels per second.
const MENU_SCROLL_SPEED = 900;

// --- State machine ----------------------------------------------------------
// CINEMATIC (opening intro) → TITLE → FLY. `?skipIntro=1` skips the cinematic.
const STATE = { CINEMATIC: 'cinematic', TITLE: 'title', FLY: 'fly' };

const characterViewer = characterMode ? createCharacterViewer({ renderer }) : null;
const cinematic = (skipIntro || characterMode) ? null : createCinematic({ renderer });
let state = cinematic ? STATE.CINEMATIC : STATE.TITLE;

if (cinematic) titleCard.hide();
// Tablet stays hidden until the player explicitly toggles it during
// FLY (with T or pad "−"). The title card stands alone over the ship.

const debugPad = createDebugPad();

// Size everything now that the cinematic exists, and keep it sized.
createViewport(renderer.domElement, applyViewportSize);

// Compile the landing site's shaders before anyone can fly there, so
// the first landing doesn't stutter while it builds them.
surface.prewarm(renderer, camera);

function onCinematicDone() {
  state = STATE.TITLE;
  titleCard.show();
  if (!smallScreen.matches) hud.show();
}

// --- Game loop --------------------------------------------------------------
let lastT = performance.now();
const _euler = new THREE.Euler();

function frame(now) {
  // Cap dt at 100ms so a long pause (tab backgrounded) doesn't fling the
  // ship across the universe on resume.
  const rawDt = (now - lastT) / 1000;
  const dt = Math.min(rawDt, 0.1);
  lastT = now;

  // Frame-rate watchdog: drops the render resolution if the device is
  // struggling, restores it when it isn't.
  frameScaler.sample(rawDt);
  frameScaler.update(dt);

  // Character turntable takes over the whole frame — no ship, no world.
  if (characterViewer) {
    characterViewer.update(dt);
    characterViewer.render();
    requestAnimationFrame(frame);
    return;
  }

  // Refresh the diagnostic overlay every frame (no-op when ?debugPad=1
  // isn't set). Runs before the state branch so cinematic/title also
  // get live readings.
  debugPad.update();

  if (state === STATE.CINEMATIC) {
    if (input.consumeAnyJustPressed()) {
      cinematic.skip();
      // Don't let the same hold also dismiss the title card on the
      // very next frame — require a release + fresh press.
      input.gamepad.suppressCurrentlyPressed();
    }
    cinematic.update(dt);
    cinematic.render();
    if (!cinematic.active) onCinematicDone();
    requestAnimationFrame(frame);
    return;
  }

  if (state === STATE.TITLE) {
    if (input.consumeAnyJustPressed()) {
      state = STATE.FLY;
      titleCard.dismiss();
      hud.showFastTravel();
      hud.showUpgrades();
      hud.setMissionVisible(true);
      hud.showResetHint();
      // Start with the Tablet hidden; the hint banner tells the
      // player how to bring it up. Players who want flight data can
      // toggle it on with T or the pad's "−" (Select) button.
      hud.hide();
      // First user gesture → safe to ask for gyro permission on iOS
      // AND to start the audio context (autoplay policy gate).
      input.enableGyro().catch(() => {});
      audio.start();
      if (startLanded) surface.enter(ship);
    }
    // Starfield + camera still update behind the title card.
  } else {
    // Poll every input source once per frame — *including* while a menu
    // is open. The gamepad is polled, not event-driven: skip the poll
    // and its "just pressed" edges are never refreshed, which used to
    // leave every pad button dead inside the Upgrades screen (B could
    // not close what B was supposed to close). The axes are read here
    // but only applied to the ship further down, when flight input is
    // actually allowed.
    const axes = input.sample();
    // The camera gimbal is live whenever flight is: not on warp rails,
    // not behind a menu.
    const canLook = !fastTravel.suppressInput && !missionScreens.isOpen();
    look.x = canLook ? axes.lookX : 0;
    look.y = canLook ? axes.lookY : 0;

    // Toggle the Tablet: T key or pad "−" (Select).
    if (input.keyboard.consumeJustPressed(['KeyT']) || input.gamepad.consumeJustPressed(BUTTONS.Select)) {
      hud.toggle();
    }
    // Toggle arcade damping: X key or pad X-button.
    if (input.keyboard.consumeJustPressed(['KeyX']) || input.gamepad.consumeJustPressed(BUTTONS.X)) {
      ship.arcadeDamping = !ship.arcadeDamping;
    }
    // Warp: F key or pad R1.
    if (input.keyboard.consumeJustPressed(['KeyF']) || input.gamepad.consumeJustPressed(BUTTONS.R1)) {
      tryBeginWarp();
    }
    // Upgrades: U key or pad Y-button.
    if (input.keyboard.consumeJustPressed(['KeyU']) || input.gamepad.consumeJustPressed(BUTTONS.Y)) {
      if (missionScreens.isOpen()) {
        missionScreens.hideAll();
        hud.show();
      } else {
        missionScreens.show('upgrades');
      }
    }
    // Close a menu: B button, or Esc on the keyboard. Closing drops the
    // player back on the Tablet, which is where they opened it from.
    if (missionScreens.isOpen()
        && (input.gamepad.consumeJustPressed(BUTTONS.B)
            || input.keyboard.consumeJustPressed(['Escape']))) {
      missionScreens.hideAll();
      hud.show();
    }

    // Scroll the open screen: left stick or D-pad. The Upgrades list is
    // taller than a phone in landscape, so without this the bottom of
    // the list is unreachable with a pad. (Touch and the mouse wheel
    // scroll it natively.)
    if (missionScreens.isOpen()) {
      const dpad = (input.gamepad.isButtonDown(BUTTONS.Down) ? 1 : 0)
                 - (input.gamepad.isButtonDown(BUTTONS.Up) ? 1 : 0);
      // `throttle` is the left stick's Y axis, positive when pushed up.
      const stick = -axes.throttle;
      const dir = stick || dpad;
      if (dir) missionScreens.scrollBy(dir * MENU_SCROLL_SPEED * dt);
    }
    // Reset: R key or pad Start.
    if (input.keyboard.consumeJustPressed(['KeyR']) || input.gamepad.consumeJustPressed(BUTTONS.Start)) {
      resetGame();
    }

    if (fastTravel.suppressInput || missionScreens.isOpen()) {
      // Ship on rails (warp) or player is in a menu → ignore flight input.
      audio.setThrottle(0);
    } else {
      updateShip(ship, axes, dt);
      audio.setThrottle(axes.throttle);
      // Landing / take-off, and the ground itself while we're down.
      surface.update(ship, dt);
      // Resolve collisions AFTER moving the ship this frame.
      resolveAsteroidCollisions(
        { position: ship.mesh.position, velocity: ship.velocity },
        asteroids.instances,
      );
      // Definitive brake: with the stick not pushed forward the ship is
      // fully stopped — re-zero velocity so a collision bounce this frame
      // can't give it any residual motion.
      if (ship.braking) ship.velocity.set(0, 0, 0);
    }

    // Mission state: drive hack progress from H key OR pad L1.
    const holdHack = input.keyboard.isDown('KeyH') || input.gamepad.isButtonDown(BUTTONS.L1);
    mission.update({
      shipPos: ship.mesh.position,
      shipSpeed: ship.velocity.length(),
      holdActive: holdHack && !missionScreens.isOpen() && !fastTravel.suppressInput
        && !surface.active,
      dt,
    });
  }

  fastTravel.update(dt);
  audio.update(dt);
  asteroids.update(dt);
  mars.update(dt);
  earth.update(dt);
  sun.update(camera);
  roverApi.update(dt);
  repairFx.update(dt);
  updateStarfield(starfield, camera);
  chaseCamera.update(ship, look, dt);

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
    renderer, camera,
    rovers: roverApi, mission, upgrades, missionScreens, surface, frameScaler,
    characterViewer,
    shipConfig, shipConfigDefaults,
    resetGame,
  };
}
