// Bokoblin camps.
//
// Laid out the way Tears of the Kingdom lays them out: a fire, some
// crates, three or four monsters milling about it and one bigger one in
// charge. You can see a camp from a distance and decide whether to go
// round it, which is the whole point of putting them in camps rather
// than scattering them — a wandering monster is a jump scare, a camp is
// a decision.
//
// Each monster is a small state machine:
//
//   idle   → mills about its camp, facing roughly outward
//   alert  → has seen him: rears up, roars, and the camp comes with it
//   chase  → runs him down at 4.5 m/s, between Vexo's jog and his sprint
//   attack → in reach: winds up, swings, and hurts him if he is still there
//   stagger→ took a bullet, reeling for a moment
//   dead   → falls over and stays there
//
// The speed is the design. They are faster than a jog and slower than a
// sprint, so outrunning them costs stamina and standing still does not
// work — which is what makes the wheel we built last week matter.
import * as THREE from 'three';
import { createBokoblin, BOKO_HEIGHT } from './world/bokoblin.js';

const CAMPS = 4;
const PER_CAMP = 3;                 // plus the boss

// Senses. A generous cone in front, plus a smaller circle for "heard
// something", so you cannot walk up behind one and stand there forever.
const SIGHT_RANGE = 24;
const SIGHT_COS = Math.cos(1.1);    // ~63 degrees either side of its nose
const HEARING_RANGE = 7;
const GIVE_UP_S = 8;
const LEASH = 55;                   // gives up outright beyond this

const CHASE_SPEED = 4.5;
const WANDER_SPEED = 0.9;
const TURN_RATE = 3.4;

// Only this many of a camp may be swinging at once. The rest close in
// and wait their turn, which is what every game with more than two
// enemies does — four monsters all swinging freely killed Vexo in about
// four seconds, and it doesn't look like a fight, it looks like a mob.
const MAX_ATTACKERS = 2;
const CIRCLE_RANGE = 3.2;           // where the ones waiting hang back

const REACH = 1.9;                  // how close it has to be to swing
const WINDUP_S = 0.42;
const SWING_S = 0.22;
const RECOVER_S = 0.9;
const STAGGER_S = 0.45;

/**
 * @param {object} deps
 * @param {THREE.Scene} deps.scene
 * @param {*} deps.town        the neighbourhood, for ground height and clear space
 * @param {THREE.Vector3} deps.origin   where the town sits in world space
 */
export function createMonsters({ scene, town, origin }) {
  const group = new THREE.Group();
  group.visible = false;
  scene.add(group);

  const fireMat = new THREE.MeshStandardMaterial({
    color: 0xff9a3c, emissive: 0xff7a1c, emissiveIntensity: 1.6, roughness: 0.6,
  });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x53381f, roughness: 0.95 });
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x6d5433, roughness: 0.9 });

  const monsters = [];
  const camps = [];

  /** Ground height in world Y at a town-local point. */
  const groundAt = (x, z) => origin.y + town.groundHeightAt(x, z);

  // --- Build the camps ----------------------------------------------------------
  // Spread around the neighbourhood at fixed bearings, then nudged to the
  // nearest patch of ground with room for a fire and four monsters. Fixed
  // rather than random so a camp is always in the same place: you learn
  // where they live, which you cannot do if they move every reload.
  const SITES = [
    [130, 60], [-120, 90], [40, -150], [-90, -120],
  ];
  for (const [i, [wantX, wantZ]] of SITES.entries()) {
    if (camps.length >= CAMPS) break;
    const site = findClearGround(wantX, wantZ, 7);
    if (!site) continue;
    const camp = { x: site.x, z: site.z, members: [] };
    camps.push(camp);
    buildCampProps(camp);
    for (let m = 0; m < PER_CAMP; m++) {
      const a = (m / PER_CAMP) * Math.PI * 2 + i;
      spawn(camp, camp.x + Math.sin(a) * 2.6, camp.z + Math.cos(a) * 2.6,
        m === 0 ? 'blue' : 'red', false);
    }
    // The one in charge: black, bigger, and worth avoiding.
    spawn(camp, camp.x - 1.4, camp.z - 1.4, 'black', true);
  }

  /** The nearest point to (x, z) with `radius` metres of clear ground. */
  function findClearGround(x, z, radius) {
    if (town.isClear(x, z, radius)) return { x, z };
    for (let ring = 6; ring <= 60; ring += 6) {
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        const px = x + Math.sin(a) * ring;
        const pz = z + Math.cos(a) * ring;
        if (town.isClear(px, pz, radius)) return { x: px, z: pz };
      }
    }
    return null;
  }

  function buildCampProps(camp) {
    const y = groundAt(camp.x, camp.z);
    // Fire: a ring of stones with a cone of flame in it. Emissive rather
    // than a light — a light per camp would recompile every shader in
    // the game the first time one came into view.
    const stones = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.13, 6, 12), woodMat,
    );
    stones.rotation.x = Math.PI / 2;
    stones.position.set(camp.x + origin.x, y + 0.1, camp.z + origin.z);
    group.add(stones);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.8, 7), fireMat);
    flame.position.set(camp.x + origin.x, y + 0.5, camp.z + origin.z);
    group.add(flame);
    camp.flame = flame;

    for (const [i, [dx, dz]] of [[2.4, 1.2], [-2.1, 1.9], [1.1, -2.4]].entries()) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.62, 0.7), crateMat);
      crate.position.set(camp.x + dx + origin.x, groundAt(camp.x + dx, camp.z + dz) + 0.31,
        camp.z + dz + origin.z);
      crate.rotation.y = i * 0.8;
      group.add(crate);
    }
  }

  function spawn(camp, x, z, tier, boss) {
    const boko = createBokoblin({ tier });
    if (boss) boko.group.scale.setScalar(1.35);
    const m = {
      boko,
      camp,
      home: new THREE.Vector2(x, z),
      pos: new THREE.Vector2(x, z),
      heading: Math.random() * Math.PI * 2,
      state: 'idle',
      timer: 0,
      hp: boko.maxHp * (boss ? 2 : 1),
      boss,
      phase: Math.random() * 10,
      lastSeen: 0,
      hitCooldown: 0,
    };
    group.add(boko.group);
    monsters.push(m);
    camp.members.push(m);
    place(m);
    return m;
  }

  const _v = new THREE.Vector3();

  function place(m) {
    m.boko.group.position.set(
      m.pos.x + origin.x,
      groundAt(m.pos.x, m.pos.y) ,
      m.pos.y + origin.z,
    );
    m.boko.group.rotation.y = m.heading;
  }

  /** Can this one see him from where it is standing? */
  function senses(m, targetLocal) {
    const dx = targetLocal.x - m.pos.x;
    const dz = targetLocal.y - m.pos.y;
    const dist = Math.hypot(dx, dz);
    if (dist > SIGHT_RANGE) return false;
    if (dist < HEARING_RANGE) return true;      // heard, whichever way it faces
    const fx = Math.sin(m.heading);
    const fz = Math.cos(m.heading);
    return (dx * fx + dz * fz) / (dist || 1) > SIGHT_COS;
  }

  function alertCamp(camp, at) {
    for (const other of camp.members) {
      if (other.state === 'dead' || other.state === 'chase') continue;
      other.state = 'alert';
      other.timer = 0.35 + Math.random() * 0.25;
      other.lastSeen = at;
    }
  }

  /** Walk one monster toward a point, and face the way it is going. */
  function stepToward(m, tx, tz, speed, dt) {
    const dx = tx - m.pos.x;
    const dz = tz - m.pos.y;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.05) return dist;
    const want = Math.atan2(dx, dz);
    let turn = want - m.heading;
    while (turn > Math.PI) turn -= Math.PI * 2;
    while (turn < -Math.PI) turn += Math.PI * 2;
    m.heading += Math.max(-TURN_RATE * dt, Math.min(TURN_RATE * dt, turn));
    const step = Math.min(dist, speed * dt);
    // Only move once it is roughly pointing the right way, so they turn
    // to face you rather than crab sideways.
    if (Math.abs(turn) < 1.2) {
      const nx = m.pos.x + Math.sin(m.heading) * step;
      const nz = m.pos.y + Math.cos(m.heading) * step;
      if (town.isClear(nx, nz, 0.45)) {
        m.pos.x = nx;
        m.pos.y = nz;
      } else {
        // Walled in: slide along rather than grinding into the corner.
        m.heading += 0.8 * dt * TURN_RATE;
      }
    }
    return dist;
  }

  /** Legs and arms, driven off distance covered rather than a timer. */
  function animate(m, moving, dt) {
    const boko = m.boko;
    m.phase += dt * (moving ? 9 : 1.6);
    const swing = Math.sin(m.phase);
    if (m.state === 'dead') return;
    for (const [i, leg] of boko.legs.entries()) {
      leg.group.rotation.x = moving ? swing * (i ? -0.7 : 0.7) : 0;
    }
    for (const [i, arm] of boko.arms.entries()) {
      const base = 0.18 + (m.state === 'chase' ? 0.35 : 0);
      arm.group.rotation.x = base + (moving ? swing * (i ? 0.5 : -0.5) : swing * 0.05);
      arm.group.rotation.z = arm.side * 0.2;
    }
    // The club arm does something else entirely mid-swing.
    if (m.state === 'attack') {
      const t = m.timer;
      const raised = t < WINDUP_S
        ? -(t / WINDUP_S) * 2.2                       // over the head
        : -2.2 + ((t - WINDUP_S) / SWING_S) * 3.4;    // and down
      boko.arms[0].group.rotation.x = Math.min(1.2, raised);
    }
    if (m.state === 'alert') {
      // Rears up: arms out, head back.
      boko.arms[0].group.rotation.x = -1.4;
      boko.arms[1].group.rotation.x = -1.2;
      boko.body.rotation.x = -0.18;
    } else {
      boko.body.rotation.x = m.state === 'chase' ? 0.16 : 0;
    }
  }

  /** How many of this camp are mid-swing right now. */
  function attackersIn(camp) {
    let n = 0;
    for (const other of camp.members) if (other.state === 'attack') n += 1;
    return n;
  }

  const _target2 = new THREE.Vector2();

  return {
    group,
    monsters,
    camps,

    /** Show them only while the player is down in the town. */
    setActive(on) { group.visible = on; },

    /**
     * @param {number} dt
     * @param {THREE.Vector3|null} target  Vexo in world space, or null
     *        when he is in the ship and nobody is hunting anybody.
     * @param {(damage: number) => void} onHit  called when a swing lands
     */
    update(dt, target, onHit) {
      if (!group.visible) return;
      // Fire flicker: cheap, and it is what makes a camp read as alive
      // from across the neighbourhood.
      for (const camp of camps) {
        camp.flame.scale.setScalar(0.85 + Math.sin(performance.now() * 0.006 + camp.x) * 0.12);
      }

      const hunting = target != null;
      if (hunting) _target2.set(target.x - origin.x, target.z - origin.z);

      for (const m of monsters) {
        m.timer += dt;
        if (m.hitCooldown > 0) m.hitCooldown -= dt;
        let moving = false;

        switch (m.state) {
          case 'idle': {
            // Mill about near the fire.
            const a = m.phase * 0.35 + m.home.x;
            const tx = m.home.x + Math.sin(a) * 1.4;
            const tz = m.home.y + Math.cos(a) * 1.4;
            moving = stepToward(m, tx, tz, WANDER_SPEED, dt) > 0.3;
            if (hunting && senses(m, _target2)) {
              alertCamp(m.camp, 0);
            }
            break;
          }
          case 'alert': {
            if (m.timer >= 0.55) {
              m.state = 'chase';
              m.timer = 0;
            }
            break;
          }
          case 'chase': {
            if (!hunting) { m.state = 'idle'; m.timer = 0; break; }
            const dist = stepToward(m, _target2.x, _target2.y, CHASE_SPEED, dt);
            moving = true;
            if (senses(m, _target2)) m.lastSeen = 0;
            else m.lastSeen += dt;
            if (dist <= REACH && attackersIn(m.camp) < MAX_ATTACKERS) {
              m.state = 'attack';
              m.timer = 0;
            } else if (dist < CIRCLE_RANGE && attackersIn(m.camp) >= MAX_ATTACKERS) {
              // Someone else is mid-swing: hang back at the edge of the
              // ring rather than piling in.
              stepToward(m, m.pos.x + (m.pos.x - _target2.x) * 0.4,
                m.pos.y + (m.pos.y - _target2.y) * 0.4, CHASE_SPEED * 0.5, dt);
            } else if (m.lastSeen > GIVE_UP_S || dist > LEASH) {
              m.state = 'return';
              m.timer = 0;
            }
            break;
          }
          case 'attack': {
            if (m.timer >= WINDUP_S && m.timer < WINDUP_S + dt) {
              // The moment the club comes down.
              if (hunting) {
                const reach = Math.hypot(_target2.x - m.pos.x, _target2.y - m.pos.y);
                if (reach <= REACH + 0.5) {
                  onHit(m.boss ? 2 : 1, m.pos.x + origin.x, m.pos.y + origin.z);
                }
              }
            }
            if (m.timer >= WINDUP_S + SWING_S + RECOVER_S) {
              m.state = hunting ? 'chase' : 'return';
              m.timer = 0;
            }
            break;
          }
          case 'stagger': {
            if (m.timer >= STAGGER_S) {
              m.state = hunting ? 'chase' : 'return';
              m.timer = 0;
            }
            break;
          }
          case 'return': {
            const dist = stepToward(m, m.home.x, m.home.y, WANDER_SPEED * 1.8, dt);
            moving = dist > 0.4;
            if (!moving) { m.state = 'idle'; m.timer = 0; }
            if (hunting && senses(m, _target2)) alertCamp(m.camp, 0);
            break;
          }
          default: break;   // dead
        }

        animate(m, moving, dt);
        if (m.state !== 'dead') place(m);
      }
    },

    /**
     * The nearest monster within a cone in front of `from`, or null.
     *
     * This is the soft lock. Vexo shoots where he FACES, and on a phone
     * with a thumb on a stick, facing a monster that is circling you at
     * four metres a second is more dexterity than this game should ask
     * for. So a shot looks for something within about thirty degrees and
     * goes to it; miss the cone entirely and you miss the shot.
     */
    aimAt(from, heading, cone = 0.55, range = 45) {
      const fx = Math.sin(heading);
      const fz = Math.cos(heading);
      const cosCone = Math.cos(cone);
      let best = null;
      let bestScore = -Infinity;
      for (const m of monsters) {
        if (m.state === 'dead') continue;
        const dx = m.pos.x + origin.x - from.x;
        const dz = m.pos.y + origin.z - from.z;
        const dist = Math.hypot(dx, dz);
        if (dist > range || dist < 0.001) continue;
        const along = (dx * fx + dz * fz) / dist;
        if (along < cosCone) continue;
        // Prefer things that are both close and near the middle of the
        // cone; a monster dead ahead at ten metres beats one at the edge
        // of vision at three.
        const score = along * 2 - dist / range;
        if (score > bestScore) {
          bestScore = score;
          best = m;
        }
      }
      if (!best) return null;
      _v.set(best.pos.x + origin.x, groundAt(best.pos.x, best.pos.y) + BOKO_HEIGHT * 0.55,
        best.pos.y + origin.z);
      return _v;
    },

    /**
     * Shoot along a ray. Returns the monster hit, or null.
     *
     * A capsule test rather than raycasting the meshes: they are merged
     * geometries with a few hundred triangles each and there is no need
     * to know WHERE on a bokoblin the shot landed, only that it did.
     */
    shoot(from, direction, range = 60, radius = 0.55) {
      let best = null;
      let bestT = range;
      for (const m of monsters) {
        if (m.state === 'dead') continue;
        _v.set(m.pos.x + origin.x, groundAt(m.pos.x, m.pos.y) + BOKO_HEIGHT * 0.55,
          m.pos.y + origin.z).sub(from);
        const along = _v.dot(direction);
        if (along <= 0 || along > bestT) continue;
        const perp = Math.sqrt(Math.max(0, _v.lengthSq() - along * along));
        if (perp > radius * (m.boss ? 1.5 : 1)) continue;
        best = m;
        bestT = along;
      }
      if (!best) return null;
      best.hp -= 1;
      if (best.hp <= 0) {
        best.state = 'dead';
        best.timer = 0;
        // Falls flat on its face and stays there.
        best.boko.group.rotation.x = -Math.PI / 2.2;
        best.boko.group.position.y = groundAt(best.pos.x, best.pos.y) + 0.25;
      } else {
        best.state = 'stagger';
        best.timer = 0;
      }
      return best;
    },

    /** Everything back where it started — used when the player dies. */
    reset() {
      for (const m of monsters) {
        m.pos.copy(m.home);
        m.state = 'idle';
        m.timer = 0;
        m.hp = m.boko.maxHp * (m.boss ? 2 : 1);
        m.boko.group.rotation.set(0, m.heading, 0);
        place(m);
      }
    },
  };
}
