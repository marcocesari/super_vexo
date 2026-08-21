// Getting out of the ship.
//
// Press L anywhere over Castel Maggiore and this takes over: the ship
// flies itself down to the street below it, levels off, a ladder unfolds
// from one side, Vexo climbs down it, and control passes from the ship
// to the man. Walk back to the ladder and press L again to reverse the
// whole thing.
//
// You do not have to land first, and landing on its own does nothing —
// you can put down on a lawn to look at something and take off again
// without a ladder every time you touch the grass. Wherever the ship is
// over the town, L brings it down and gets you out.
//
// It is a small state machine, and the states are the shot list:
//
//   off     → flying, with the climb-out on offer
//   settle  → the ship descends to the street and levels off
//   deploy  → the ladder grows down to the street
//   down    → Vexo climbs, rung by rung
//   stepoff → he steps clear of the rails and turns to face the town
//   walk    → the player has him
//   up      → he climbs back in
//   stow    → the ladder folds away, the ship is handed back
//
// Everything from `settle` to `stepoff` is a cutscene: the camera flies
// its own path and input does nothing except skip. The player can press
// any button to jump straight to `walk` — see `skipToWalk()`.
//
// UNITS. Vexo, the ladder and the walking all happen in metres, in the
// town's own frame. The ship is scaled 4x down here (`surface.js`
// explains why), so anything measured off the ship gets multiplied by
// its scale before it is used as a distance on the ground.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { createVexo, VEXO_HEIGHT } from './world/vexo.js';
import { createLadder } from './world/ladder.js';
import { SURFACE_ORIGIN, PARK_CLEARANCE } from './surface.js';
import { BUTTONS } from './input/gamepad.js';
import { strings } from './strings.js';

// --- On foot ----------------------------------------------------------------
const WALK_SPEED = 2.4;         // m/s — a brisk walk
const RUN_SPEED = 5.4;
const BACK_SPEED = 1.3;
const TURN_RATE = 2.7;          // rad/s
const WALK_RADIUS = 0.38;       // his shoulders, for bumping into walls
const HULL_RADIUS = 1.7;        // he walks around the fuselage, not through it
const BOARD_RANGE = 2.6;        // how close to the ladder the prompt appears

// --- The sequence -----------------------------------------------------------
// The descent: a fixed beat for the levelling-off, plus however long the
// drop takes at this rate. Pressing L on the deck is nearly instant;
// pressing it at 300 m is a long, watchable landing rather than a
// teleport, and the cap keeps it from becoming a lift ride.
const SETTLE_TIME = 0.8;        // ship levelling, with nowhere to fall
const DESCENT_RATE = 22;        // m/s
const DESCENT_MAX = 4.5;        // seconds, whatever the altitude
const DEPLOY_TIME = 0.9;        // ladder unfolding
const CLIMB_SPEED = 1.3;        // m/s down the rungs
const STEPOFF_TIME = 0.55;
const STOW_TIME = 0.7;
// Ignore the skip button for a moment at the start, so the key that was
// flying the ship a frame ago doesn't skip the shot it just triggered.
const SKIP_LOCKOUT = 0.35;

// Where the ladder hangs, in SHIP units (multiplied by the ship's scale
// before use). Beside the canopy and just FORWARD of the wing's leading
// edge — where a real fighter's boarding ladder goes, and the only place
// on this hull where a vertical ladder doesn't grow through the wing.
// Aft of the wing works geometrically but puts the ladder at the
// engines, which is a strange place to climb out of an aircraft.
const LADDER_LOCAL_X = 0.5;
const LADDER_LOCAL_Y = 0.4;
const LADDER_LOCAL_Z = 0.55;
// How far out from the rails he stands while climbing / when he steps off.
const CLIMB_STANDOFF = 0.32;
const STEPOFF_DISTANCE = 2.0;

// How far the look axes swing the walking camera around him. The same
// axes the chase camera uses in flight — right stick, and the gyro on a
// phone — so tilting to look down the side of the ship works the same
// whether you are flying it or standing next to it. Less range than in
// flight: a camera that can swing all the way to his face would spend
// most of its time looking at the back of his head from the front.
const FOOT_LOOK_YAW = Math.PI * 0.62;     // ~112 degrees either way
const FOOT_LOOK_PITCH = Math.PI * 0.19;   // ~34 degrees up or down
const FOOT_LOOK_HALFLIFE = 0.09;

// The camera boom on foot, and how much of it can be given up before a
// wall or the ship's own hull. A 10 m ship with a 7 m wingspan is easy
// to end up inside of: he steps off facing away from it, which puts the
// camera between him and the fuselage.
const BOOM_LENGTH = 4.6;
const BOOM_MIN = 2.0;
const SHIP_CAM_CLEAR = 6.2;

const CONTROLS_HINT_TIME = 5;
// How long "no room here" stays up after a refused climb-out.
const REFUSED_TIME = 2.5;

// The same key gets you out and back in — E on the keyboard, A on a pad.
// E rolls the ship in flight, which is harmless here: the offer only
// stands while the ship is stopped on the ground.
const EXIT_KEYS = ['KeyL'];

const UP = new THREE.Vector3(0, 1, 0);

/** Frame-rate-independent smoothing, as in the chase camera. */
function alphaFor(dt, halflife) {
  return 1 - Math.pow(2, -dt / halflife);
}

function clamp1(v) { return v < -1 ? -1 : (v > 1 ? 1 : v); }

/** Shortest signed angle from a to b. */
function angleDelta(a, b) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/**
 * @param {object} deps
 * @param {THREE.Scene} deps.scene
 * @param {THREE.PerspectiveCamera} deps.camera
 * @param {{mesh: THREE.Object3D, velocity: THREE.Vector3}} deps.ship
 * @param {ReturnType<import('./surface.js').createSurface>} deps.surface
 * @param {ReturnType<import('./input/index.js').createInput>} deps.input
 * @param {THREE.WebGLRenderer} deps.renderer  only to pre-filter the
 *        environment his armour reflects; nothing here draws.
 */
export function createOnFoot({ scene, camera, ship, surface, input, renderer }) {
  // Something for the armour to reflect. A small box of lit panels,
  // pre-filtered once at startup: his plates are 0.62 metal, and metal
  // with nothing to reflect is black. It belongs to his materials
  // alone, so the town and the ship look exactly as they did.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  // No suit light: a light appearing in the scene the first time he
  // steps out would recompile every shader in the game. See createVexo.
  const vexo = createVexo({ suitLight: false, environment });
  vexo.group.visible = false;
  scene.add(vexo.group);

  const ladder = createLadder();
  scene.add(ladder.group);

  // Prompt line: doubles as the skip hint during the cutscene and the
  // board hint on the ground.
  const prompt = document.createElement('div');
  prompt.id = 'foot-prompt';
  prompt.hidden = true;
  document.body.appendChild(prompt);

  let state = 'off';
  let phaseT = 0;               // seconds inside the current state
  let hintT = 0;
  let refusedT = 0;             // "no room here" message, seconds left
  let settleTime = SETTLE_TIME; // this landing's descent, seconds

  // The parked ship's frame, resolved once at touchdown and then held —
  // the ship does not move again until the player is back inside.
  let shipYaw = 0;
  const ladderBase = new THREE.Vector3();   // foot of the rails, on the ground
  const ladderTop = new THREE.Vector3();
  const outward = new THREE.Vector3();      // away from the ship, at the ladder
  const parkPos = new THREE.Vector3();
  const parkQuat = new THREE.Quaternion();
  const startPos = new THREE.Vector3();
  const startQuat = new THREE.Quaternion();

  // Where Vexo is and which way he faces. Kept here rather than read
  // back off the group so the walk maths never fights the renderer.
  const foot = new THREE.Vector3();
  let heading = 0;
  let climbY = 0;

  // Where the look axes have swung the walking camera, in radians off
  // straight-behind. Smoothed, like the chase camera's gimbal.
  let orbitYaw = 0;
  let orbitPitch = 0;

  const _camGoal = new THREE.Vector3();
  const _lookGoal = new THREE.Vector3();
  const _lookAt = new THREE.Vector3();
  const _v = new THREE.Vector3();
  const _walkOut = [0, 0];
  let camInit = false;

  const town = surface.town;

  /** Ground height in world Y at a point given in world coordinates. */
  function groundAt(x, z) {
    return SURFACE_ORIGIN.y + town.groundHeightAt(x - SURFACE_ORIGIN.x, z - SURFACE_ORIGIN.z);
  }

  function setPrompt(text) {
    if (!text) {
      prompt.hidden = true;
      return;
    }
    if (prompt.textContent !== text) prompt.textContent = text;
    prompt.hidden = false;
  }

  // --- Getting out -------------------------------------------------------------
  /**
   * Start the climb-out from wherever the ship happens to be over the
   * town: on the deck, or three hundred metres above it.
   */
  function begin() {
    if (state !== 'off' || !surface.active) return;

    // Level the ship, keeping only its heading: a fighter parked at 30
    // degrees of bank is a crash, not a landing.
    const euler = new THREE.Euler().setFromQuaternion(ship.mesh.quaternion, 'YXZ');
    shipYaw = euler.y;
    startPos.copy(ship.mesh.position);
    startQuat.copy(ship.mesh.quaternion);
    parkQuat.setFromEuler(new THREE.Euler(0, shipYaw, 0, 'YXZ'));
    // Park on the highest ground under the hull — the same rule the soft
    // floor uses, so a ship already sitting on the deck doesn't shift at
    // all when it parks.
    parkPos.set(startPos.x, surface.hullGroundY(ship) + PARK_CLEARANCE, startPos.z);

    // Which side to get out on. Port by default; starboard if port is
    // blocked and starboard isn't, so parking with one wing over a hedge
    // doesn't drop him inside it. If neither side has room — hovering
    // over a roof, or stopped in the middle of a building — say so and
    // stay in the ship, rather than posting a ladder into a wall.
    const scale = ship.mesh.scale.x;
    let side = -1;
    if (!sideIsClear(-1, scale)) {
      if (!sideIsClear(1, scale)) {
        refusedT = REFUSED_TIME;
        return;
      }
      side = 1;
    }

    // Committed: the ship belongs to the sequence from here.
    state = 'settle';
    phaseT = 0;
    // Long enough to watch, short enough not to be a lift ride.
    settleTime = Math.min(
      DESCENT_MAX,
      SETTLE_TIME + Math.max(0, startPos.y - parkPos.y) / DESCENT_RATE,
    );
    surface.park();
    placeLadder(side, scale);

    // Start him at the top of the rails, facing them.
    climbY = ladderTop.y;
    foot.copy(ladderBase).addScaledVector(outward, CLIMB_STANDOFF);
    foot.y = climbY;
    heading = Math.atan2(-outward.x, -outward.z);
    vexo.setGait('climb');
    applyVexoTransform();
    vexo.group.visible = false;

    ladder.setExtension(0);
    // Drain any key that was down while flying, so the shot isn't
    // skipped by the same press that landed the ship.
    input.consumeAnyJustPressed();
    setPrompt(strings.onFoot.skip);
  }

  /** Is there room on this side of the ship for a man and a ladder? */
  function sideIsClear(side, scale) {
    _v.set(side * LADDER_LOCAL_X, 0, LADDER_LOCAL_Z)
      .multiplyScalar(scale)
      .applyQuaternion(parkQuat)
      .add(parkPos);
    return town.isClear(_v.x - SURFACE_ORIGIN.x, _v.z - SURFACE_ORIGIN.z, 1.2);
  }

  /** Hang the ladder off the given side of the parked ship. */
  function placeLadder(side, scale) {
    ladderTop.set(side * LADDER_LOCAL_X, LADDER_LOCAL_Y, LADDER_LOCAL_Z)
      .multiplyScalar(scale)
      .applyQuaternion(parkQuat)
      .add(parkPos);
    // Outward, on the ground plane: the direction a climber faces away
    // from when on the rungs, and steps into when he reaches the street.
    outward.set(side, 0, 0).applyQuaternion(parkQuat).setY(0).normalize();

    const base = groundAt(ladderTop.x, ladderTop.z);
    ladderBase.set(ladderTop.x, base, ladderTop.z);

    ladder.group.position.copy(ladderTop);
    // The rails run down the group's -Y and the climber stands on +Z,
    // so turn the group to put its +Z along `outward`.
    ladder.group.rotation.set(0, Math.atan2(outward.x, outward.z), 0);
    ladder.setHeight(ladderTop.y - base);
    ladder.setExtension(0);
  }

  function applyVexoTransform() {
    vexo.group.position.copy(foot);
    vexo.group.rotation.y = heading;
  }

  // --- Camera -------------------------------------------------------------------
  /**
   * Where the camera wants to be for the current state, and what it is
   * looking at. Written into `_camGoal` / `_lookGoal`.
   *
   * The cutscene shots are all built off `outward` (the ladder's side of
   * the ship), so they work whichever way the ship happens to be facing
   * when it lands.
   */
  function cameraGoal() {
    if (state === 'walk' || state === 'stepoff') {
      // Over his shoulder: back along his heading, a head and a half up,
      // on however much boom there is room for.
      _lookGoal.copy(foot).addScaledVector(UP, VEXO_HEIGHT * 0.62);
      const { dx, dz, boom } = boomBehind();
      // Pitching the view up walks the camera down and back, the way a
      // boom on a gimbal moves — so looking up at him keeps him in
      // frame instead of sliding the picture off his head.
      const reach = boom * Math.cos(orbitPitch);
      const rise = boom * Math.sin(orbitPitch);
      _camGoal.set(dx, 0, dz)
        .multiplyScalar(reach)
        .add(_lookGoal)
        // A short boom means something is in the way — gain a little
        // height to see over it, but not so much that the shot turns
        // into a map view.
        .addScaledVector(UP, 1.15 + (BOOM_LENGTH - boom) * 0.2 + rise);
      keepAboveGround();
      return;
    }
    if (state === 'settle' || state === 'deploy') {
      // Wide: the whole ship from the ladder's side and a little ahead
      // of the wing, so the rails unfold across open sky. Framed off the
      // ship's LIVE position, not the parking spot, so a descent from
      // altitude is a shot of a ship coming down rather than a shot of
      // an empty field with something arriving in it late.
      _lookGoal.copy(ship.mesh.position).addScaledVector(UP, 0.9);
      _camGoal.copy(ship.mesh.position)
        .addScaledVector(outward, 11)
        .addScaledVector(UP, 3.4);
      _v.set(Math.sin(shipYaw), 0, Math.cos(shipYaw)).multiplyScalar(3.5);
      _camGoal.add(_v);
      keepAboveGround();
      return;
    }
    // Climbing, in either direction: in close on the port quarter,
    // riding down with him rather than watching from the top.
    _lookGoal.copy(foot).addScaledVector(UP, VEXO_HEIGHT * 0.5);
    // Abeam the rails and a little FORWARD of them, off the bow. Aft of
    // the ladder is the wing and its tip fin, and from there they fill
    // the frame with grey — the first cut of this shot was a close-up of
    // a wingtip with a man somewhere behind it.
    _camGoal.copy(ladderBase)
      .addScaledVector(outward, 5.6)
      .addScaledVector(UP, 2.2);
    _v.set(Math.sin(shipYaw), 0, Math.cos(shipYaw)).multiplyScalar(1.6);
    _camGoal.add(_v);
    _camGoal.y = Math.max(_camGoal.y, _lookGoal.y - 0.4);
    keepAboveGround();
  }

  /** Never let a shot end up underneath the street. */
  function keepAboveGround() {
    const floor = groundAt(_camGoal.x, _camGoal.z) + 0.7;
    if (_camGoal.y < floor) _camGoal.y = floor;
  }

  /** Is there room for the camera at this point on the ground plane? */
  function cameraFits(x, z) {
    if (surface.parked && Math.hypot(x - parkPos.x, z - parkPos.z) < SHIP_CAM_CLEAR) {
      return false;
    }
    return town.isClear(x - SURFACE_ORIGIN.x, z - SURFACE_ORIGIN.z, 0.5);
  }

  /**
   * Where to put the camera behind him.
   *
   * Straight back is the shot we want, but straight back is often a
   * wall — or, in the first seconds after he climbs down, the ship he
   * is standing beside, which is 10 m long with a 7 m wingspan. Swing
   * the boom around it before giving up any length: a full boom from a
   * few degrees off-axis reads far better than a stub from directly
   * behind, which turns the game into a map view.
   */
  function boomBehind() {
    // Straight behind him, plus wherever the look axes have swung it.
    const base = heading + Math.PI + orbitYaw;
    for (const swing of [0, 0.42, -0.42, 0.85, -0.85, 1.3, -1.3, 1.9, -1.9]) {
      const a = base + swing;
      const dx = Math.sin(a);
      const dz = Math.cos(a);
      if (cameraFits(foot.x + dx * BOOM_LENGTH, foot.z + dz * BOOM_LENGTH)) {
        return { dx, dz, boom: BOOM_LENGTH };
      }
    }
    // Boxed in on every side — back off along the heading as far as
    // there is room for.
    const dx = Math.sin(base);
    const dz = Math.cos(base);
    for (let boom = BOOM_LENGTH - 0.6; boom > BOOM_MIN; boom -= 0.6) {
      if (cameraFits(foot.x + dx * boom, foot.z + dz * boom)) return { dx, dz, boom };
    }
    return { dx, dz, boom: BOOM_MIN };
  }

  function updateCamera(dt) {
    cameraGoal();
    // The hand-over shot settles quickly; the cutscene shots drift.
    const halflife = state === 'walk' ? 0.13 : 0.34;
    // The descent is the one shot with no easing at all. The ship falls
    // at 22 m/s, and anything that eases toward a target moving that
    // fast trails it by metres — on a landing from altitude that slides
    // the ship out of the bottom of the frame and leaves the camera
    // watching an empty field. Locking the shot to the ship holds it
    // dead still while the town rises around it, which is the shot.
    // Starting it is a cut, and a cut is what a cutscene opens with.
    if (!camInit || state === 'settle') {
      camera.position.copy(_camGoal);
      _lookAt.copy(_lookGoal);
      camInit = true;
    } else {
      camera.position.lerp(_camGoal, alphaFor(dt, halflife));
      _lookAt.lerp(_lookGoal, alphaFor(dt, halflife));
    }
    // The chase camera rolls with the ship; on foot the horizon is the
    // horizon, so put `up` back before looking.
    camera.up.set(0, 1, 0);
    camera.lookAt(_lookAt);
  }

  // --- The states ---------------------------------------------------------------
  function skipToWalk() {
    ship.mesh.position.copy(parkPos);
    ship.mesh.quaternion.copy(parkQuat);
    ladder.setExtension(1);
    foot.copy(ladderBase).addScaledVector(outward, STEPOFF_DISTANCE);
    foot.y = groundAt(foot.x, foot.z);
    heading = Math.atan2(outward.x, outward.z);
    vexo.group.visible = true;
    vexo.setGait('idle');
    applyVexoTransform();
    enterWalk();
  }

  function enterWalk() {
    state = 'walk';
    phaseT = 0;
    orbitYaw = 0;
    orbitPitch = 0;
    hintT = CONTROLS_HINT_TIME;
    camInit = false;
  }

  function updateSettle() {
    const t = Math.min(1, phaseT / settleTime);
    // Ease out: it should look like weight coming to rest.
    const e = 1 - (1 - t) * (1 - t);
    ship.mesh.position.lerpVectors(startPos, parkPos, e);
    ship.mesh.quaternion.slerpQuaternions(startQuat, parkQuat, e);
    ship.velocity.set(0, 0, 0);
    if (t >= 1) {
      state = 'deploy';
      phaseT = 0;
    }
  }

  function updateDeploy() {
    const t = Math.min(1, phaseT / DEPLOY_TIME);
    ladder.setExtension(t);
    if (t >= 1) {
      state = 'down';
      phaseT = 0;
      vexo.group.visible = true;
      vexo.setGait('climb');
    }
  }

  function updateClimb(dt, down) {
    climbY += (down ? -1 : 1) * CLIMB_SPEED * dt;
    const bottom = ladderBase.y;
    const top = ladderTop.y - 0.15;
    // On the way up he starts wherever he was standing, so pull him onto
    // the rails as he goes rather than snapping him there.
    const onRails = _v.copy(ladderBase).addScaledVector(outward, CLIMB_STANDOFF);
    const a = alphaFor(dt, 0.12);
    foot.x += (onRails.x - foot.x) * a;
    foot.z += (onRails.z - foot.z) * a;
    heading += angleDelta(heading, Math.atan2(-outward.x, -outward.z)) * a;

    if (down) {
      foot.y = Math.max(bottom, climbY);
      if (climbY <= bottom) {
        climbY = bottom;
        state = 'stepoff';
        phaseT = 0;
        vexo.setGait('walk', WALK_SPEED * 0.7);
      }
    } else {
      foot.y = Math.min(top, climbY);
      if (climbY >= top) {
        climbY = top;
        state = 'stow';
        phaseT = 0;
        vexo.group.visible = false;
        setPrompt(null);
      }
    }
    applyVexoTransform();
  }

  function updateStepoff(dt) {
    const t = Math.min(1, phaseT / STEPOFF_TIME);
    const dist = CLIMB_STANDOFF + (STEPOFF_DISTANCE - CLIMB_STANDOFF) * t;
    foot.copy(ladderBase).addScaledVector(outward, dist);
    foot.y = groundAt(foot.x, foot.z);
    // Turn to face away from the ship, out into the street.
    const want = Math.atan2(outward.x, outward.z);
    heading += angleDelta(heading, want) * alphaFor(dt, 0.12);
    applyVexoTransform();
    if (t >= 1) enterWalk();
  }

  function updateStow() {
    ladder.setExtension(1 - Math.min(1, phaseT / STOW_TIME));
    if (phaseT >= STOW_TIME) {
      state = 'off';
      ladder.setExtension(0);
      surface.unpark();
      camInit = false;
    }
  }

  function updateWalk(dt, axes) {
    // Look axes → where the camera rides. Deflection is an ANGLE, not a
    // rate, exactly as in flight: let go and the view falls back behind
    // him on its own, with nothing to re-centre by hand.
    const wantYaw = clamp1(axes?.lookX ?? 0) * FOOT_LOOK_YAW;
    const wantPitch = -clamp1(axes?.lookY ?? 0) * FOOT_LOOK_PITCH;
    const aLook = alphaFor(dt, FOOT_LOOK_HALFLIFE);
    orbitYaw += (wantYaw - orbitYaw) * aLook;
    orbitPitch += (wantPitch - orbitPitch) * aLook;

    // Turning is a rate, walking is a speed — the same shape as the
    // flight controls, so the stick means roughly what it meant a
    // moment ago.
    //
    // A / stick-left gives yaw = +1, and turning left has to INCREASE
    // the heading. His forward is (sin h, cos h): raising h swings it
    // from +Z toward +X, and with the camera parked behind him looking
    // along +Z, world +X is the left of the screen. Subtracting here —
    // which is what this line did at first — sends A to the right and
    // D to the left, and looks like the keys are swapped.
    heading += (axes?.yaw ?? 0) * TURN_RATE * dt;

    const running = input.keyboard.isDown('ShiftLeft')
      || input.keyboard.isDown('ShiftRight')
      || input.gamepad.isButtonDown(BUTTONS.R1);
    const throttle = axes?.throttle ?? 0;
    const speed = throttle >= 0
      ? throttle * (running ? RUN_SPEED : WALK_SPEED)
      : throttle * BACK_SPEED;

    if (Math.abs(speed) > 0.02) {
      const step = speed * dt;
      foot.x += Math.sin(heading) * step;
      foot.z += Math.cos(heading) * step;

      // Walls and tree trunks.
      town.resolveWalk(
        foot.x - SURFACE_ORIGIN.x, foot.z - SURFACE_ORIGIN.z, WALK_RADIUS, _walkOut,
      );
      foot.x = _walkOut[0] + SURFACE_ORIGIN.x;
      foot.z = _walkOut[1] + SURFACE_ORIGIN.z;

      // And the ship he just climbed out of. Only the fuselage: the
      // circle is small enough that the ladder stays reachable.
      const dx = foot.x - parkPos.x;
      const dz = foot.z - parkPos.z;
      const d = Math.hypot(dx, dz);
      if (d < HULL_RADIUS && d > 1e-4) {
        foot.x = parkPos.x + (dx / d) * HULL_RADIUS;
        foot.z = parkPos.z + (dz / d) * HULL_RADIUS;
      }

      vexo.setGait('walk', Math.abs(speed));
    } else {
      vexo.setGait('idle');
    }

    // Follow the ground, hills included.
    foot.y = groundAt(foot.x, foot.z);
    applyVexoTransform();

    // Boarding.
    const nearLadder = Math.hypot(foot.x - ladderBase.x, foot.z - ladderBase.z) < BOARD_RANGE;
    if (nearLadder) {
      setPrompt(strings.onFoot.board);
      if (input.keyboard.consumeJustPressed(EXIT_KEYS)
          || input.gamepad.consumeJustPressed(BUTTONS.A)) {
        state = 'up';
        phaseT = 0;
        climbY = foot.y;
        vexo.setGait('climb');
        setPrompt(null);
      }
    } else if (hintT > 0) {
      setPrompt(strings.onFoot.controls);
    } else {
      setPrompt(null);
    }
  }

  return {
    /** True while this module owns the ship, the camera, or both. */
    get active() { return state !== 'off'; },
    /** True while the cutscene is playing and input does nothing. */
    get cutscene() {
      return state === 'settle' || state === 'deploy'
        || state === 'down' || state === 'stepoff';
    },
    get state() { return state; },
    /** For tests and screenshots. */
    vexo,
    ladder,
    get position() { return foot; },

    begin,

    /**
     * @param {number} dt
     * @param {{throttle: number, yaw: number}} axes  ignored during the cutscene
     */
    update(dt, axes) {
      if (state === 'off') {
        // Anywhere over the town: offer the way out, and take it if
        // asked. `axes === null` means the stick belongs to something
        // else this frame (a menu is open), so neither the prompt nor
        // the key applies.
        if (refusedT > 0) refusedT -= dt;
        if (axes && surface.active) {
          setPrompt(refusedT > 0 ? strings.onFoot.noRoom : strings.onFoot.climbOut);
          if (input.keyboard.consumeJustPressed(EXIT_KEYS)
              || input.gamepad.consumeJustPressed(BUTTONS.A)) {
            begin();
          }
        } else {
          setPrompt(null);
        }
        return;
      }
      phaseT += dt;
      if (hintT > 0) hintT -= dt;

      // Skip: any button, once the lockout has passed.
      if (this.cutscene) {
        if (phaseT > SKIP_LOCKOUT && input.consumeAnyJustPressed()) {
          skipToWalk();
          setPrompt(null);
        }
      }

      switch (state) {
        case 'settle': updateSettle(); break;
        case 'deploy': updateDeploy(); break;
        case 'down': updateClimb(dt, true); break;
        case 'stepoff': updateStepoff(dt); break;
        case 'walk': updateWalk(dt, axes); break;
        case 'up': updateClimb(dt, false); break;
        case 'stow': updateStow(); break;
        default: break;
      }

      vexo.update(dt);
      if (state !== 'off') updateCamera(dt);
      // The walk state decides its own line (board hint / controls);
      // every other state shows the skip hint or nothing at all.
      if (this.cutscene) setPrompt(strings.onFoot.skip);
      else if (state !== 'walk') setPrompt(null);
    },

    /**
     * Draw Vexo and the ladder once during startup so their shaders are
     * compiled and their textures uploaded before anybody lands. Same
     * three steps, and the same reasons, as `surface.prewarm()`.
     */
    prewarm(renderer, probeCamera) {
      const wasVexo = vexo.group.visible;
      vexo.group.position.copy(SURFACE_ORIGIN);
      vexo.group.visible = true;
      ladder.group.position.copy(SURFACE_ORIGIN);
      ladder.setHeight(2.6);
      ladder.setExtension(1);

      renderer.compile(scene, probeCamera);
      const probe = new THREE.PerspectiveCamera(50, probeCamera.aspect, 0.1, 5000);
      probe.position.copy(SURFACE_ORIGIN).add(new THREE.Vector3(3.5, 1.6, 4.5));
      probe.lookAt(SURFACE_ORIGIN.x, SURFACE_ORIGIN.y + 1, SURFACE_ORIGIN.z);
      renderer.render(scene, probe);

      vexo.group.visible = wasVexo;
      ladder.setExtension(0);
      renderer.render(scene, probeCamera);
    },

    /** Put everything away — used by resetGame(). */
    reset() {
      if (state !== 'off') surface.unpark();
      state = 'off';
      phaseT = 0;
      refusedT = 0;
      camInit = false;
      vexo.group.visible = false;
      ladder.setExtension(0);
      setPrompt(null);
    },
  };
}
