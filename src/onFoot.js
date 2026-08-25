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
import { createStaminaWheel } from './staminaWheel.js';
import { createHearts } from './hearts.js';
import { SURFACE_ORIGIN, PARK_CLEARANCE } from './surface.js';
import { BUTTONS } from './input/gamepad.js';
import { strings } from './strings.js';

// --- On foot ----------------------------------------------------------------
// Three speeds, the way Link has them: how far the stick is pushed
// chooses between a walk and a jog, and sprinting is a BUTTON — hold it
// and he goes, at the cost of stamina.
const WALK_SPEED = 1.5;         // m/s — 5.4 km/h, an actual walking pace
const JOG_SPEED = 3.3;          // the default with the stick hard over
const SPRINT_SPEED = 6.2;
// Below this much stick he walks; above it he jogs. A keyboard has no
// in-between, so W alone is a jog and the walk belongs to the stick.
const WALK_STICK = 0.55;

// --- Stamina ------------------------------------------------------------------
// One wheel, as in Tears of the Kingdom, and the same three rules that
// make it interesting rather than just a timer:
//
//   * Emptying it is PUNISHED. Run it dry and he is winded — no sprint,
//     walking pace only, for a couple of seconds — and it then refills
//     more slowly than if he had let off in time.
//   * The last quarter drains at HALF rate, so a nearly-empty wheel
//     stretches further than you expect and there is a reason to gamble.
//   * Tapping costs more than holding: every fresh press takes a bite
//     out of the wheel, so feathering the button is worse than
//     committing to the sprint.
const STAMINA_DRAIN = 0.2;      // per second sprinting: ~5s from full
const STAMINA_REFILL = 0.62;    // per second once he stops spending it
const STAMINA_TIRED_REFILL = 0.3;   // …and after running it dry
const STAMINA_LOW = 0.25;       // the last quarter, which drains at half
const STAMINA_TAP_COST = 0.05;  // taken on each fresh press of the button
const WINDED_TIME = 2.2;        // seconds of no sprint after emptying
// How quickly the velocity catches up with the stick, and how quickly he
// turns to face it. Both are half-lives in seconds rather than a
// per-frame fraction, so the feel doesn't change with the frame rate.
const ACCEL_HALFLIFE = 0.11;
const TURN_HALFLIFE = 0.08;
// Below this he is standing, not walking — with momentum in the
// velocity there is no longer a clean moment when movement stops.
const IDLE_SPEED = 0.15;
// How fast the camera drifts back behind him after he changes direction.
// Slow on purpose: it is a follow, not a leash.
const CAM_RECENTRE_HALFLIFE = 0.75;
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

// Looking around on foot.
//
// The stick is a RATE, not a deflection: push it and the camera keeps
// turning, let go and it stays where you left it. That is how every
// third-person camera works, and the alternative — deflection as an
// angle, which is what the flight camera does and what this used to
// copy — springs the view back the instant you let go, so you can never
// leave it pointing anywhere.
//
// The gyro adds to the same angle, also as a rate: `axes.lookTurnX/Y`
// is how far the phone turned this frame. Motion control is a
// displacement, not a posture.
const FOOT_LOOK_RATE = 2.4;               // rad/s at full stick
const FOOT_PITCH_RATE = 1.3;
const FOOT_LOOK_PITCH = Math.PI * 0.19;   // ~34 degrees up or down

// The camera boom on foot, and how much of it can be given up before a
// wall or the ship's own hull. A 10 m ship with a 7 m wingspan is easy
// to end up inside of: he steps off facing away from it, which puts the
// camera between him and the fuselage.
const BOOM_LENGTH = 4.6;
const BOOM_MIN = 2.0;
const SHIP_CAM_CLEAR = 6.2;

const CONTROLS_HINT_TIME = 5;

// --- Fighting back --------------------------------------------------------------
// He has a pistol on his thigh; this is what draws it. Aim is where he
// is FACING, not where the camera points: the camera can be swung round
// to look at him, and a shot that came out of the back of his head
// because the player was admiring the view would be indefensible.
const MAX_HEARTS = 5;
const SHOT_INTERVAL = 0.32;     // seconds between shots
const SHOT_RANGE = 55;
const AIM_CONE = 0.7;           // radians either side of his nose (~40 degrees)
const HOLSTER_AFTER = 4;        // seconds of peace before he puts it away
// A mercy window after a hit, and a shove away from whatever landed it.
// Both exist for the same reason: without them a ring of monsters is not
// a fight you can lose well, it is a fight you cannot leave.
const HURT_INVULNERABLE = 1.5;
const KNOCKBACK = 3.4;          // m/s, away from the blow
const DYING_TIME = 2.4;         // collapse, then wake up in the ship
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

function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

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
export function createOnFoot({
  scene, camera, ship, surface, input, renderer,
  monsters = null, onShot = () => {},
}) {
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
  const ladder = createLadder();

  // Neither of them is in the scene while the player is flying.
  //
  // Hiding them would be enough to stop them being DRAWN — the renderer
  // gives up on an invisible object before it recurses — but not enough
  // to stop them costing anything: updateMatrixWorld walks the whole
  // graph every frame regardless of visibility, and that is 120-odd
  // matrices for a man nobody can see. Attaching them for the sequence
  // and detaching afterwards costs nothing at the join, because the
  // renderer caches its compiled programs against the materials, which
  // are never disposed.
  let attached = false;
  function attach() {
    if (attached) return;
    scene.add(vexo.group);
    scene.add(ladder.group);
    attached = true;
  }
  function detach() {
    if (!attached) return;
    scene.remove(vexo.group);
    scene.remove(ladder.group);
    attached = false;
  }

  // Prompt line: doubles as the skip hint during the cutscene and the
  // board hint on the ground.
  const prompt = document.createElement('div');
  prompt.id = 'foot-prompt';
  prompt.hidden = true;
  document.body.appendChild(prompt);

  const staminaWheel = createStaminaWheel();
  const hearts = createHearts();
  const _screen = new THREE.Vector3();
  const _muzzle = new THREE.Vector3();
  const _aim = new THREE.Vector3();

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

  // The direction the camera looks along, in world radians, and how far
  // it is tilted. It has its own yaw rather than being welded behind him
  // so that a held stick direction keeps meaning the same direction on
  // screen — and now, so that a view the player aimed stays aimed.
  let camPitch = 0;
  // The stamina wheel, 0 to 1, and the seconds left of being winded
  // after running it dry.
  let stamina = 1;
  let winded = 0;
  let sprintWasHeld = false;
  let sprintingNow = false;
  // Health, the pistol, and dying.
  let heartsLeft = MAX_HEARTS;
  let hurtCooldown = 0;
  let shotCooldown = 0;
  let drawnFor = 0;               // seconds since the pistol was last used
  let dying = 0;
  let camYaw = 0;
  // Metres per second across the ground, eased toward the stick.
  const vel = new THREE.Vector3();
  const _target = new THREE.Vector3();

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

  // The prompt is touched every frame, so remember what is on it and
  // write nothing when it hasn't changed. Assigning the same value back
  // to the DOM sixty times a second is a waste even when the browser is
  // clever enough to skip the style invalidation.
  let promptText = null;
  function setPrompt(text) {
    if (text === promptText) return;
    promptText = text;
    if (!text) {
      prompt.hidden = true;
      return;
    }
    prompt.textContent = text;
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
    attach();
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
      const reach = boom * Math.cos(camPitch);
      const rise = boom * Math.sin(camPitch);
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
    // Opposite the way the camera is looking. Not "behind him": the
    // camera has its own yaw, so a held stick direction keeps meaning
    // the same direction on screen and an aimed view stays aimed.
    const base = camYaw + Math.PI;
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

  /** A club landed. `fromX/fromZ` is who swung it, for the knockback. */
  function takeHit(damage, fromX = null, fromZ = null) {
    if (state !== 'walk' || hurtCooldown > 0 || dying > 0) return;
    hurtCooldown = HURT_INVULNERABLE;
    if (fromX != null) {
      const dx = foot.x - fromX;
      const dz = foot.z - fromZ;
      const d = Math.hypot(dx, dz) || 1;
      vel.x = (dx / d) * KNOCKBACK;
      vel.z = (dz / d) * KNOCKBACK;
    }
    heartsLeft = Math.max(0, heartsLeft - damage);
    hearts.set(heartsLeft, MAX_HEARTS);
    hearts.flash();
    // Being hit knocks the wind out of him: the wheel empties, so you
    // cannot simply sprint away from a mistake.
    stamina = 0;
    winded = WINDED_TIME;
    if (heartsLeft <= 0) {
      dying = DYING_TIME;
      vexo.setGait('idle');
      setPrompt(strings.onFoot.down);
    }
  }

  /** Out cold, and waking up back in the ship with everything reset. */
  function revive() {
    heartsLeft = MAX_HEARTS;
    hearts.set(heartsLeft, MAX_HEARTS);
    stamina = 1;
    winded = 0;
    if (monsters) monsters.reset();
    // Straight back into the seat: the ladder folds and the ship is his
    // again. Nothing else in this game has a losing screen and this is
    // not the place to introduce one.
    state = 'stow';
    phaseT = 0;
    vexo.group.visible = false;
    setPrompt(null);
  }

  function enterWalk() {
    state = 'walk';
    phaseT = 0;
    stamina = 1;
    winded = 0;
    sprintingNow = false;
    heartsLeft = MAX_HEARTS;
    hurtCooldown = 0;
    dying = 0;
    hearts.set(heartsLeft, MAX_HEARTS);
    camPitch = 0;
    camYaw = heading;
    vel.set(0, 0, 0);
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
    // Keep the camera behind him as he turns, so control is handed over
    // with the stick's "forward" pointing where he is already facing.
    camYaw = heading;
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
      sprintingNow = false;
      staminaWheel.hide();
      hearts.hide();
      detach();
    }
  }

  function updateWalk(dt, axes) {
    // --- Looking around -------------------------------------------------------
    // Stick as a rate, gyro as a displacement, both into the same angle.
    // Nothing here springs back: where you point it is where it stays.
    const lookX = clamp1(axes?.lookX ?? 0);
    const lookY = clamp1(axes?.lookY ?? 0);
    const turnX = axes?.lookTurnX ?? 0;
    const turnY = axes?.lookTurnY ?? 0;
    camYaw += lookX * FOOT_LOOK_RATE * dt + turnX;
    camPitch = clamp(
      camPitch - lookY * FOOT_PITCH_RATE * dt - turnY,
      -FOOT_LOOK_PITCH, FOOT_LOOK_PITCH,
    );
    const looking = Math.abs(lookX) > 0.05 || Math.abs(turnX) > 0.0015;

    // --- Where the stick points, he goes ------------------------------------
    // Not tank controls: the stick is a DIRECTION in the frame the player
    // is looking at, and he turns to face wherever that is. Push left and
    // he walks left across the screen, rather than pivoting on the spot.
    //
    // The input pair is normalised, so a diagonal isn't 1.41 times faster
    // than a straight line — and analog sticks keep their magnitude, so
    // a half-pushed stick is a stroll.
    // The stick WITHOUT the gyro mixed in (see input/index.js): on a
    // phone the gyro is swinging the camera, and a tilt to look around
    // must not walk him sideways.
    const moveX = clamp1(axes?.stickYaw ?? axes?.yaw ?? 0);       // + is left
    const moveZ = clamp1(axes?.stickThrottle ?? axes?.throttle ?? 0); // + is away
    let push = Math.hypot(moveX, moveZ);
    if (push > 1) push = 1;

    // --- Sprint and stamina ---------------------------------------------------
    // Hold Shift, or B on the pad — the bottom face button, where Link's
    // is. A is already the climb-out, so B is the one next to it.
    const sprintHeld = input.keyboard.isDown('ShiftLeft')
      || input.keyboard.isDown('ShiftRight')
      || input.gamepad.isButtonDown(BUTTONS.B);
    const wantsSprint = sprintHeld && push > 0.15;
    if (sprintHeld && !sprintWasHeld && stamina > 0 && winded <= 0) {
      // Tapping is dearer than holding.
      stamina = Math.max(0, stamina - STAMINA_TAP_COST);
    }
    sprintWasHeld = sprintHeld;

    if (winded > 0) winded -= dt;
    const sprinting = wantsSprint && winded <= 0 && stamina > 0;
    sprintingNow = sprinting;
    if (sprinting) {
      // The last quarter goes at half rate: a nearly empty wheel lasts
      // longer than it looks, which is what makes running it close
      // worth doing.
      const rate = stamina < STAMINA_LOW ? STAMINA_DRAIN * 0.5 : STAMINA_DRAIN;
      stamina -= rate * dt;
      if (stamina <= 0) {
        stamina = 0;
        winded = WINDED_TIME;
      }
    } else {
      stamina = Math.min(1, stamina
        + (winded > 0 ? STAMINA_TIRED_REFILL : STAMINA_REFILL) * dt);
    }

    // How far the stick is pushed picks the pace, in two bands: up to
    // WALK_STICK it ramps from a standstill to a walk, and beyond it
    // from a walk to a jog. Two bands rather than a step, or the pace
    // doubles between one hundredth of stick and the next.
    const paced = push < WALK_STICK
      ? WALK_SPEED * (push / WALK_STICK)
      : WALK_SPEED + (JOG_SPEED - WALK_SPEED)
        * ((push - WALK_STICK) / (1 - WALK_STICK));
    // Winded means a walk, whatever the stick says.
    const topSpeed = winded > 0
      ? Math.min(paced, WALK_SPEED)
      : (sprinting ? SPRINT_SPEED : paced);

    if (push > 0.05) {
      // Rotate the stick into the world by the camera's yaw, then aim
      // both the walk and the man himself down that line.
      const want = camYaw + Math.atan2(moveX, moveZ);
      // `topSpeed` already has the stick's push in it, except for the
      // sprint — a sprint is a sprint, not something you can half-press
      // your way into.
      _target.set(Math.sin(want), 0, Math.cos(want)).multiplyScalar(topSpeed);
      // Shortest way round, so facing +179 and wanting -179 is a two
      // degree turn rather than a 358 degree spin.
      heading += angleDelta(heading, want) * alphaFor(dt, TURN_HALFLIFE);
    } else {
      _target.set(0, 0, 0);
    }

    // Momentum. Easing the velocity toward the target rather than
    // snapping to it is most of what "fluid" means here: he leans into a
    // start and carries a step into a stop instead of switching between
    // stopped and full speed on a key edge.
    const aVel = alphaFor(dt, ACCEL_HALFLIFE);
    vel.x += (_target.x - vel.x) * aVel;
    vel.z += (_target.z - vel.z) * aVel;

    const speed = Math.hypot(vel.x, vel.z);
    if (speed > 0.05) {
      foot.x += vel.x * dt;
      foot.z += vel.z * dt;

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
    }
    // The gait runs off the speed he is actually moving at, so the walk
    // cycle winds up and down with the momentum above rather than
    // switching on with the key.
    if (speed > IDLE_SPEED) vexo.setGait('walk', speed);
    else vexo.setGait('idle');

    // The camera drifts back behind whichever way he ended up facing —
    // but only while he is going roughly forward and nobody is looking
    // around. This is the re-centre: the gyro literature is against a
    // dedicated reset button, on the grounds that the player already
    // has better ways to say "put it back", and walking forward is
    // exactly such a way.
    //
    // Chasing him unconditionally is a feedback loop: hold left, he
    // turns left, the camera follows, so "left" now points somewhere
    // else, so he turns again. Measured before this gate went in, a held
    // left key walked him round a circle about a metre across, for ever.
    // Gated, he sets off across the screen in a straight line and the
    // camera only closes up once he is heading away from it again.
    const goingForward = Math.abs(moveX) < 0.4 && push > 0.05;
    if (!looking && goingForward) {
      camYaw += angleDelta(camYaw, heading) * alphaFor(dt, CAM_RECENTRE_HALFLIFE);
      camPitch += (0 - camPitch) * alphaFor(dt, CAM_RECENTRE_HALFLIFE * 2);
    }

    // Follow the ground, hills included.
    foot.y = groundAt(foot.x, foot.z);
    applyVexoTransform();

    // The wheel rides beside him: project his shoulder into the frame
    // and offer that point to the ring. Behind the camera it hides
    // itself rather than drawing a wheel over nothing.
    _screen.copy(foot).addScaledVector(UP, VEXO_HEIGHT * 0.75).project(camera);
    const onScreen = _screen.z < 1 && Math.abs(_screen.x) < 1.4 && Math.abs(_screen.y) < 1.4;
    staminaWheel.update(stamina, winded > 0, dt, onScreen ? {
      x: (_screen.x * 0.5 + 0.5) * window.innerWidth + 52,
      y: (-_screen.y * 0.5 + 0.5) * window.innerHeight,
    } : null);

    // --- Shooting -------------------------------------------------------------
    if (shotCooldown > 0) shotCooldown -= dt;
    if (drawnFor > 0) drawnFor -= dt;
    const firing = input.keyboard.isDown('Space')
      || input.gamepad.isButtonDown(BUTTONS.R2)
      || input.gamepad.isButtonDown(BUTTONS.X);
    if (firing && shotCooldown <= 0 && monsters) {
      shotCooldown = SHOT_INTERVAL;
      drawnFor = HOLSTER_AFTER;
      // From the END OF THE BARREL, which the gun can be asked for.
      // Taking a point on his chest instead — which is what this did —
      // draws every tracer out of his sternum, and no amount of aiming
      // fixes where a line starts.
      //
      // He may not have the gun up yet on the first shot of a burst, so
      // fall back to the chest for that one frame rather than skipping
      // the shot.
      if (!vexo.getMuzzle(_muzzle)) {
        _muzzle.copy(foot).addScaledVector(UP, VEXO_HEIGHT * 0.62);
      }
      // Soft lock: anything within thirty degrees of where he is facing
      // gets shot AT, rather than requiring the player to line a moving
      // target up with a thumbstick.
      const locked = monsters.aimAt(_muzzle, heading, AIM_CONE, SHOT_RANGE);
      if (locked) {
        _aim.copy(locked).sub(_muzzle).normalize();
        // And he turns to it, so the shot doesn't come out sideways.
        heading += angleDelta(heading, Math.atan2(_aim.x, _aim.z)) * 0.6;
      } else {
        _aim.set(Math.sin(heading), 0, Math.cos(heading));
      }
      const hit = monsters.shoot(_muzzle, _aim, SHOT_RANGE);
      vexo.fire();                      // muzzle flash on the gun itself
      onShot(_muzzle, _aim, hit);
    }
    // Pistol out while he is shooting or has just shot; away otherwise.
    vexo.setArmed(drawnFor > 0, heading);

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
    /** The stamina wheel: 0 to 1, and whether he has run himself out. */
    get stamina() { return stamina; },
    get winded() { return winded > 0; },
    /** True only while he is actually sprinting — moving, and spending. */
    get sprinting() { return sprintingNow; },
    /** Hearts left, for the HUD and the tests. */
    get hearts() { return heartsLeft; },
    get maxHearts() { return MAX_HEARTS; },
    /** True while he is flat on his back after losing the last one. */
    get down() { return dying > 0; },
    /** Where the monsters should hunt, or null if he is not out here. */
    get quarry() { return state === 'walk' && dying <= 0 ? foot : null; },
    /** A club landed on him. */
    takeHit,

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

      if (hurtCooldown > 0) hurtCooldown -= dt;
      if (dying > 0) {
        dying -= dt;
        if (dying <= 0) revive();
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
      sprintingNow = false;
      staminaWheel.hide();
      hearts.hide();
      detach();
    },
  };
}
