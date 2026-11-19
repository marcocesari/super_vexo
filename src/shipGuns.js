// The ship's guns: two laser cannons on the wingtips, and the cockpit
// view you shoot them from.
//
// Pressing fire in the air (R2, or Space) cuts the camera from behind
// the ship to Vexo's eyes in the cockpit. The crosshair is the middle of
// the screen — straight down the ship's nose — and all he sees of his
// ship is the two cannons, low at either edge of the frame, the way
// Marco drew it: everything else is hidden, so it is the world through
// the glass and two guns. The view stays there while he keeps shooting and for a few
// seconds after, then eases back behind the tail: the same rule as the
// pistol on foot.
//
// Aiming is flying. There is no separate aim stick in the cockpit: you
// point the ship. That is the whole appeal of a nose-mounted gun.
//
// What a shot hits is decided the instant it is fired, along the line
// through the crosshair (a "hitscan"); the bolts are what you SEE, and
// a rock only breaks when its bolt actually reaches it, so the picture
// and the result agree. Both cannons aim at the same point — wherever
// the crosshair line meets something, or a long way out if it meets
// nothing — so the two bolts converge on the target instead of flying
// parallel past either side of it.
import * as THREE from 'three';

// Where the cockpit camera sits, in ship units (multiplied by the
// ship's scale): Vexo's eyes. A little further back than the canopy's
// middle — the cannons are out on the wingtips, level with the canopy,
// and from its very centre they would be too far round to the side to
// be on screen. With the rest of the ship hidden nobody can tell, and
// from here the two guns sit at the lower edges of the frame.
const COCKPIT_LOCAL = new THREE.Vector3(0, 0.3, -0.42);
// No tilt: the crosshair is exactly where the nose points, so flying
// the ship at something is aiming at it. (Being above the cannons is
// what puts them low in the frame.)
const COCKPIT_TILT = 0;
// A wider lens in the cockpit, so both wingtips fit.
const COCKPIT_FOV_SCALE = 1.22;

const SHOT_INTERVAL = 0.17;     // seconds between pairs of bolts
const HOLSTER_AFTER = 4;        // seconds without firing before the view returns
// Into the cockpit is a CUT, not a glide: a quarter of a second of the
// camera sliding forward read as lag, and the first shot waited for it.
// Back out behind the tail eases, because by then nothing is urgent.
const BLEND_OUT = 0.2;

// Ranges and speeds are per world, because the two are not the same
// size: space is measured in game units around a ship two units long,
// the surface in metres around one scaled up four times.
const SPACE = { range: 520, speed: 200, length: 3.2, thick: 0.13, hitPad: 0.8 };
// (All of these are multiplied by the ship's scale, which is 4 on the
// surface: 380 here is about 1.5 km/s, quick but still a visible streak.)
const SURFACE = { range: 240, speed: 380, length: 4, thick: 0.13, hitPad: 3 };

const POOL = 32;
const BOLT_COLOR = 0x7dff9a;    // the green of Vexo's suit circuits

const _fwd = new THREE.Vector3();
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _tilt = new THREE.Quaternion();
const _flip = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
const _X = new THREE.Vector3(1, 0, 0);
const _Z = new THREE.Vector3(0, 0, 1);

function alphaFor(dt, halflife) {
  return 1 - Math.pow(2, -dt / halflife);
}

/**
 * @param {object} deps
 * @param {THREE.Scene} deps.scene
 * @param {THREE.PerspectiveCamera} deps.camera
 * @param {ReturnType<import('./ship.js').createShip>} deps.ship
 * @param {{ instances: Array<{position: THREE.Vector3, radius: number}>,
 *           destroy: (i: number) => void }} deps.asteroids
 * @param {object} deps.monsters
 * @param {{ active: boolean }} deps.surface
 * @param {(hit: object) => void} [deps.onMonsterHit]
 * @param {(hit: boolean) => void} [deps.onFire]
 */
export function createShipGuns({
  scene, camera, ship, asteroids, monsters, surface,
  onMonsterHit = () => {}, onFire = () => {},
}) {
  // --- Bolts --------------------------------------------------------------------
  // A pool of thin glowing slugs, added together so they read as light.
  const boltGeom = new THREE.BoxGeometry(1, 1, 1);
  const boltMat = new THREE.MeshBasicMaterial({
    color: BOLT_COLOR, transparent: true, opacity: 0.95,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const group = new THREE.Group();
  scene.add(group);
  const free = [];
  const live = [];
  for (let i = 0; i < POOL; i++) {
    const mesh = new THREE.Mesh(boltGeom, boltMat);
    mesh.visible = false;
    mesh.frustumCulled = false;
    group.add(mesh);
    free.push({ mesh, vel: new THREE.Vector3(), left: 0, rock: -1 });
  }

  function launch(from, dir, dist, scale, world, rock) {
    const b = free.pop() ?? live.shift();
    if (!b) return;
    b.mesh.position.copy(from);
    b.mesh.quaternion.setFromUnitVectors(_Z, dir);
    b.mesh.scale.set(world.thick * scale, world.thick * scale, world.length * scale);
    // Fired from a moving ship, a bolt keeps the ship's speed as well as
    // its own — or a ship at full throttle would overtake its own shots.
    b.vel.copy(dir).multiplyScalar(world.speed * scale);
    const along = ship.velocity.dot(dir);
    if (along > 0) b.vel.addScaledVector(dir, along);
    b.left = dist / b.vel.length();
    b.rock = rock;
    b.mesh.visible = true;
    live.push(b);
  }

  function updateBolts(dt) {
    for (let i = live.length - 1; i >= 0; i--) {
      const b = live[i];
      b.left -= dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      if (b.left > 0) continue;
      // Arrived. A rock it was sent at breaks now, not when it was fired.
      if (b.rock >= 0) asteroids.destroy(b.rock);
      b.mesh.visible = false;
      live.splice(i, 1);
      free.push(b);
    }
  }

  // --- Aiming -------------------------------------------------------------------
  /** Nearest asteroid along a ray, with a little forgiveness round each. */
  function rockAlong(from, dir, range, pad) {
    let best = -1;
    let bestT = range;
    const list = asteroids.instances;
    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      if (a.dead) continue;
      _v.subVectors(a.position, from);
      const t = _v.dot(dir);
      if (t <= 0 || t > bestT + a.radius) continue;
      const r = a.radius + pad;
      if (_v.lengthSq() - t * t > r * r) continue;
      const hitT = Math.max(0, t - a.radius);
      if (hitT < bestT) {
        bestT = hitT;
        best = i;
      }
    }
    return best < 0 ? null : { index: best, distance: bestT };
  }

  // --- The cannons --------------------------------------------------------------
  // The gold tips of the two barrels, found by walking the ship rather
  // than by copying numbers out of ship.js, so moving a cannon there
  // moves the shot with it.
  const muzzles = ship.cannonTips ?? [];
  const _muzzle = new THREE.Vector3();
  const _dir = new THREE.Vector3();
  const _aimPoint = new THREE.Vector3();
  const _camDir = new THREE.Vector3();
  const _eye = new THREE.Vector3();

  /** Where Vexo's eyes are and which way they look, this frame. */
  function cockpitPose(pos, quat) {
    pos.copy(COCKPIT_LOCAL).multiplyScalar(ship.mesh.scale.x)
      .applyQuaternion(ship.mesh.quaternion)
      .add(ship.mesh.position);
    // The camera looks down its own -Z; the ship's nose is +Z. Turn it
    // round, then tip it by the tilt.
    _tilt.setFromAxisAngle(_X, -COCKPIT_TILT);
    quat.copy(ship.mesh.quaternion).multiply(_flip).multiply(_tilt);
  }

  function fire() {
    const world = surface.active ? SURFACE : SPACE;
    const scale = ship.mesh.scale.x;
    const range = world.range * scale;
    // The crosshair: the middle of the screen, which in the cockpit is
    // the line Vexo's eyes look along. Worked out from the ship rather
    // than read off the camera, because on the first shot the camera is
    // still behind the tail — the cut to the cockpit happens this frame.
    cockpitPose(_eye, _cockpitQuat);
    _camDir.set(0, 0, -1).applyQuaternion(_cockpitQuat);
    let rock = -1;
    let dist = range;
    let hitMonster = null;
    if (surface.active) {
      // Over a planet: the camps. A bokoblin is a small thing from the
      // air, so the shot is a fat one.
      hitMonster = monsters?.shoot(_eye, _camDir, range, world.hitPad) ?? null;
      if (hitMonster) dist = hitMonster.hitDistance ?? dist;
    } else {
      const hit = rockAlong(_eye, _camDir, range, world.hitPad * scale);
      if (hit) {
        rock = hit.index;
        dist = hit.distance;
      }
    }
    _aimPoint.copy(_eye).addScaledVector(_camDir, dist);

    let first = true;
    for (const tip of muzzles) {
      tip.getWorldPosition(_muzzle);
      _dir.subVectors(_aimPoint, _muzzle);
      const d = _dir.length();
      _dir.divideScalar(d);
      // Only one of the pair breaks the rock, or it would be broken twice.
      launch(_muzzle, _dir, d, scale, world, first ? rock : -1);
      first = false;
    }
    if (hitMonster) onMonsterHit(hitMonster);
    onFire(rock >= 0 || !!hitMonster);
  }

  // --- The view -----------------------------------------------------------------
  const crosshair = document.createElement('div');
  crosshair.id = 'ship-crosshair';
  crosshair.className = 'crosshair';
  crosshair.hidden = true;
  crosshair.innerHTML = '<i class="ch-dot"></i><i class="ch-t"></i>'
    + '<i class="ch-b"></i><i class="ch-l"></i><i class="ch-r"></i>';
  document.body.appendChild(crosshair);

  let cooldown = 0;
  let drawnFor = 0;      // seconds of cockpit view left
  let blend = 0;         // 0 behind the tail, 1 in the cockpit
  let bloom = 0;
  let baseFov = null;
  const _chasePos = new THREE.Vector3();
  const _chaseQuat = new THREE.Quaternion();
  const _cockpitPos = new THREE.Vector3();
  const _cockpitQuat = new THREE.Quaternion();
  const hidden = ship.cockpitHide ?? [];

  function restoreFov() {
    if (baseFov === null) return;
    camera.fov = baseFov;
    camera.updateProjectionMatrix();
    baseFov = null;
  }

  return {
    /** True while the cockpit view is up, or on its way. */
    get cockpit() { return drawnFor > 0 || blend > 0.01; },
    get blend() { return blend; },
    get bolts() { return live.length; },

    /**
     * Read the trigger and fire. Call only while the player is flying
     * the ship — not on foot, not in a menu, not during a warp.
     * @param {number} dt
     * @param {boolean} trigger  fire is held this frame
     */
    update(dt, trigger) {
      if (cooldown > 0) cooldown -= dt;
      if (drawnFor > 0) drawnFor -= dt;
      if (trigger) {
        drawnFor = HOLSTER_AFTER;
        // Straight to his eyes, so the first pair leaves on this frame.
        blend = 1;
        if (cooldown <= 0) {
          cooldown = SHOT_INTERVAL;
          bloom = Math.min(1, bloom + 0.35);
          fire();
        }
      }
    },

    /** Whatever else happens, put the view back behind the ship. */
    stand() {
      drawnFor = 0;
    },

    /** Bolts keep flying whatever the player is doing. */
    tick(dt) {
      updateBolts(dt);
    },

    /**
     * Move the camera into (or toward) the cockpit. Called AFTER the
     * chase camera has placed it, so the two views are blended between
     * rather than cut — the chase camera keeps doing its job underneath
     * and this only bends its answer toward the cockpit.
     */
    updateCamera(dt) {
      const want = drawnFor > 0 ? 1 : 0;
      if (want) blend = 1;
      else blend += (0 - blend) * alphaFor(dt, BLEND_OUT);
      if (want === 0 && blend < 0.002) blend = 0;
      // In the cockpit only the cannons are drawn (see ship.cockpitHide).
      const inside = blend > 0.5;
      for (const m of hidden) m.visible = !inside;
      bloom = Math.max(0, bloom - 3 * dt);
      crosshair.hidden = !(blend > 0.85);
      if (!crosshair.hidden) {
        crosshair.style.setProperty('--spread', `${(4 + bloom * 10).toFixed(1)}px`);
      }
      if (blend <= 0) {
        restoreFov();
        return;
      }

      _chasePos.copy(camera.position);
      _chaseQuat.copy(camera.quaternion);

      cockpitPose(_cockpitPos, _cockpitQuat);

      camera.position.lerpVectors(_chasePos, _cockpitPos, blend);
      _q.copy(_chaseQuat).slerp(_cockpitQuat, blend);
      camera.quaternion.copy(_q);
      // Keep `up` honest for anybody who calls lookAt after us.
      camera.up.set(0, 1, 0).applyQuaternion(camera.quaternion);

      if (baseFov === null) baseFov = camera.fov;
      camera.fov = baseFov * (1 + (COCKPIT_FOV_SCALE - 1) * blend);
      camera.updateProjectionMatrix();
      // The forward direction, for anyone wanting the crosshair line.
      _fwd.set(0, 0, -1).applyQuaternion(camera.quaternion);
    },

    /** Put everything back — used when he climbs out or the game resets. */
    reset() {
      drawnFor = 0;
      blend = 0;
      crosshair.hidden = true;
      for (const m of hidden) m.visible = true;
      restoreFov();
    },
  };
}
