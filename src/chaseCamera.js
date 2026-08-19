// The chase camera — a camera on a gimbal, mounted behind the ship.
//
// Two jobs:
//
//   1. FOLLOW. The camera sits at a fixed offset in the ship's local
//      frame (behind and slightly above) and springs toward it, so it
//      lags a hair when the ship turns. That lag reads as motion.
//
//   2. LOOK. The right stick swings the camera AROUND the ship — yaw
//      to either side, pitch above and below — without touching the
//      ship's heading. This is the "gyroscope": stick deflection is an
//      ANGLE, not a rate, so letting go always drops the view straight
//      back behind the tail. Nothing to re-centre by hand.
//
// The one invariant, in both jobs: the camera always looks *exactly* at
// the ship's origin, so the ship never leaves the centre of the frame.
// That's why the look target isn't smoothed the way the position is —
// smoothing it would let the ship drift off-centre while accelerating.
import * as THREE from 'three';

// Where the camera rides when the look stick is centred: behind (-Z is
// aft, the ship's nose is +Z) and a little above.
export const CAM_OFFSET_LOCAL = new THREE.Vector3(0, 1.4, -5.5);

// Full stick deflection swings the view this far around the ship. Yaw
// goes the whole way round — stick hard over to either side puts the
// camera on the nose, looking the ship straight in the face — so every
// angle of the ship is reachable: sweep the stick from one side to the
// other and the view circles it completely. Pitch stops just short of
// straight up / straight down, where "which way is up" stops meaning
// anything and the picture would spin on its own.
export const LOOK_YAW_MAX = THREE.MathUtils.degToRad(180);
export const LOOK_PITCH_MAX = THREE.MathUtils.degToRad(85);

// "Half-life" of each spring in seconds: lower = snappier, floatier.
// The follow spring is very short so the camera tracks the ship's
// rotation almost instantly — the player should always see the ship
// from behind, even mid-manoeuvre. The orbit spring is a touch longer
// so a flicked look-stick sweeps rather than snaps.
const POS_HALFLIFE = 0.04;
const ORBIT_HALFLIFE = 0.09;

const AXIS_X = new THREE.Vector3(1, 0, 0);
const AXIS_Y = new THREE.Vector3(0, 1, 0);

function clamp1(v) { return v < -1 ? -1 : (v > 1 ? 1 : v); }

/** Frame-rate-independent smoothing factor for a given half-life. */
function alphaFor(dt, halflife) {
  // After `halflife` seconds we have closed exactly half the remaining
  // distance, whatever dt happens to be.
  return 1 - Math.pow(2, -dt / halflife);
}

/**
 * @param {THREE.PerspectiveCamera} camera
 */
export function createChaseCamera(camera) {
  // Current (smoothed) gimbal angles, in radians, relative to "directly
  // behind the ship".
  let orbitYaw = 0;
  let orbitPitch = 0;
  let initialized = false;

  const _offset = new THREE.Vector3();
  const _targetPos = new THREE.Vector3();
  const _up = new THREE.Vector3();

  return {
    /** Current gimbal angles in radians — for the HUD / tests. */
    get orbit() { return { yaw: orbitYaw, pitch: orbitPitch }; },

    /** Snap the gimbal back behind the tail (used by resetGame). */
    reset() {
      orbitYaw = 0;
      orbitPitch = 0;
      initialized = false;
    },

    /**
     * @param {{mesh: THREE.Object3D}} ship
     * @param {{x: number, y: number}} look  right stick, [-1, 1] each.
     *        x: +1 = swing the view right. y: +1 = swing the view up.
     * @param {number} dt seconds
     */
    update(ship, look, dt) {
      // Stick → target angle. Pushing the view UP means the camera drops
      // BELOW the ship and tilts up at it, so the pitch angle is negated:
      // a positive rotation about local X lifts the camera.
      const wantYaw = clamp1(look?.x ?? 0) * LOOK_YAW_MAX;
      const wantPitch = -clamp1(look?.y ?? 0) * LOOK_PITCH_MAX;

      const aOrbit = alphaFor(dt, ORBIT_HALFLIFE);
      orbitYaw += (wantYaw - orbitYaw) * aOrbit;
      orbitPitch += (wantPitch - orbitPitch) * aOrbit;

      // Swing the mount point around the ship, then carry the whole thing
      // into world space with the ship's rotation.
      _offset.copy(CAM_OFFSET_LOCAL)
        .applyAxisAngle(AXIS_X, orbitPitch)
        .applyAxisAngle(AXIS_Y, orbitYaw)
        .applyQuaternion(ship.mesh.quaternion);
      _targetPos.copy(ship.mesh.position).add(_offset);

      if (!initialized) {
        camera.position.copy(_targetPos);
        initialized = true;
      } else {
        camera.position.lerp(_targetPos, alphaFor(dt, POS_HALFLIFE));
      }

      // Roll the camera with the ship so banked turns feel right, and
      // swing "up" with the gimbal too — otherwise looking steeply up or
      // down would line the up-vector up with the view direction and the
      // picture would spin.
      _up.set(0, 1, 0)
        .applyAxisAngle(AXIS_X, orbitPitch)
        .applyAxisAngle(AXIS_Y, orbitYaw)
        .applyQuaternion(ship.mesh.quaternion);
      camera.up.copy(_up);

      // Dead centre, every frame, no smoothing. This is the invariant.
      camera.lookAt(ship.mesh.position);
    },
  };
}
