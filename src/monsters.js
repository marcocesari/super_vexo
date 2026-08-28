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
 * @param {*} deps.world       the ground, for height and for clear space
 * @param {THREE.Vector3} deps.origin   where the world sits in world space
 */
export function createMonsters({ scene, world, origin }) {
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
  // Where a camp's crates sit, relative to its fire.
  const CRATE_SPOTS = [[2.4, 1.2], [-2.1, 1.9], [1.1, -2.4]];

  /** Ground height in world Y at a world-local point. */
  const groundAt = (x, z) => origin.y + world.groundHeightAt(x, z);

  // --- The camps ----------------------------------------------------------------
  // The world has no edges, so the camps cannot be a list of places. They
  // are a GRID instead: every CAMP_CELL metres square either holds a camp
  // or does not, decided by hashing the square's coordinates. That makes
  // them spread across the whole world and yet fixed — the same square
  // always holds the same camp, at the same spot, so you can learn where
  // they live and come back to a fight you left.
  //
  // Only the nearest few are ever built. Four camps' worth of monsters
  // travel with the player and are re-pitched onto whichever squares are
  // closest, which keeps the cost the same whether you are standing in
  // the one place or flying across a continent.
  const CAMP_CELL = 620;
  for (let i = 0; i < CAMPS; i++) {
    const camp = { x: 0, z: 0, cell: null, members: [] };
    camps.push(camp);
    buildCampProps(camp);
    for (let m = 0; m < PER_CAMP; m++) spawn(camp, 0, 0, m === 0 ? 'blue' : 'red', false);
    // The one in charge: black, bigger, and worth avoiding.
    spawn(camp, 0, 0, 'black', true);
  }

  /** A stable number in [0, 1) for a pair of whole numbers. */
  function hash2(i, j, salt = 0) {
    let h = Math.imul(i | 0, 0x27d4eb2d) ^ Math.imul(j | 0, 0x165667b1) ^ Math.imul(salt, 0x9e3779b1);
    h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }

  /**
   * Where the camp in this square of the world stands, or null if that
   * square has none.
   *
   * Rather more squares are empty than full: a monster camp behind every
   * hill is a chore, and the whole point of a camp is that you can see it
   * from a distance and decide.
   */
  function siteForCell(i, j) {
    if (hash2(i, j, 7) > 0.42) return null;
    const x = (i + 0.2 + hash2(i, j, 11) * 0.6) * CAMP_CELL;
    const z = (j + 0.2 + hash2(i, j, 13) * 0.6) * CAMP_CELL;
    return findClearGround(x, z, 7);
  }

  /**
   * Pitch the camps on the nearest squares that have one.
   *
   * A camp already standing where it should be is left alone, fight and
   * all — walking away from a battle and back again must not reset it.
   */
  function ensureCampsNear(x, z) {
    const ci = Math.floor(x / CAMP_CELL);
    const cj = Math.floor(z / CAMP_CELL);
    const wanted = [];
    const REACH = 3;
    for (let dj = -REACH; dj <= REACH; dj++) {
      for (let di = -REACH; di <= REACH; di++) {
        const site = siteForCell(ci + di, cj + dj);
        if (!site) continue;
        wanted.push({
          key: `${ci + di},${cj + dj}`, site,
          d2: (site.x - x) ** 2 + (site.z - z) ** 2,
        });
      }
    }
    wanted.sort((a, b) => a.d2 - b.d2);
    const keep = wanted.slice(0, CAMPS);
    const keepKeys = new Set(keep.map((w) => w.key));
    const free = camps.filter((c) => !keepKeys.has(c.cell));
    for (const w of keep) {
      if (camps.some((c) => c.cell === w.key)) continue;
      const camp = free.pop();
      if (!camp) break;
      pitchCamp(camp, w.key, w.site.x, w.site.z);
    }
  }

  /** Move a camp, its fire, its crates and its monsters somewhere new. */
  function pitchCamp(camp, cell, x, z) {
    camp.cell = cell;
    camp.x = x;
    camp.z = z;
    placeCampProps(camp);
    for (const [i, m] of camp.members.entries()) {
      const a = (i / camp.members.length) * Math.PI * 2 + hash2(x | 0, z | 0) * 6;
      const r = m.boss ? 1.9 : 2.6;
      m.home.set(x + Math.sin(a) * r, z + Math.cos(a) * r);
      m.pos.copy(m.home);
      m.state = 'idle';
      m.timer = 0;
      m.hp = m.boko.maxHp * (m.boss ? 2 : 1);
      m.boko.group.rotation.set(0, m.heading, 0);
      m.boko.group.visible = true;
      place(m);
    }
  }

  /** The nearest point to (x, z) with `radius` metres of clear ground. */
  function findClearGround(x, z, radius) {
    if (world.isClear(x, z, radius)) return { x, z };
    for (let ring = 6; ring <= 60; ring += 6) {
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        const px = x + Math.sin(a) * ring;
        const pz = z + Math.cos(a) * ring;
        if (world.isClear(px, pz, radius)) return { x: px, z: pz };
      }
    }
    return null;
  }

  /** Build a camp's fire and crates once. They are moved, never remade. */
  function buildCampProps(camp) {
    // Fire: a ring of stones with a cone of flame in it. Emissive rather
    // than a light — a light per camp would recompile every shader in
    // the game the first time one came into view.
    const stones = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.13, 6, 12), woodMat);
    stones.rotation.x = Math.PI / 2;
    group.add(stones);
    camp.stones = stones;
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.8, 7), fireMat);
    group.add(flame);
    camp.flame = flame;
    camp.crates = CRATE_SPOTS.map((_, i) => {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.62, 0.7), crateMat);
      crate.rotation.y = i * 0.8;
      group.add(crate);
      return crate;
    });
  }

  /** Set a camp's things down on the ground wherever it now stands. */
  function placeCampProps(camp) {
    const y = groundAt(camp.x, camp.z);
    camp.stones.position.set(camp.x + origin.x, y + 0.1, camp.z + origin.z);
    camp.flame.position.set(camp.x + origin.x, y + 0.5, camp.z + origin.z);
    for (const [i, [dx, dz]] of CRATE_SPOTS.entries()) {
      camp.crates[i].position.set(
        camp.x + dx + origin.x,
        groundAt(camp.x + dx, camp.z + dz) + 0.31,
        camp.z + dz + origin.z,
      );
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
  const lastFocus = new THREE.Vector2(Infinity, Infinity);

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
      if (world.isClear(nx, nz, 0.45)) {
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
     * Where the player is, so the camps can be pitched around them.
     * Cheap to call every frame: it only does anything when the nearest
     * squares of the world change, which is every few hundred metres.
     */
    focus(x, z) {
      if (Math.abs(x - lastFocus.x) < 60 && Math.abs(z - lastFocus.y) < 60) return;
      lastFocus.set(x, z);
      ensureCampsNear(x, z);
    },

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

    /**
     * Put one down without shooting it — used when a save is restored
     * and the camps have to be put back the way they were left.
     */
    kill(m) {
      m.state = 'dead';
      m.timer = 0;
      m.hp = 0;
      m.boko.group.rotation.x = -Math.PI / 2.2;
      m.boko.group.position.y = groundAt(m.pos.x, m.pos.y) + 0.25;
    },

    /**
     * Which camps have been cleared, and how battered the rest are.
     *
     * Keyed by the square of the world a camp stands on, not by its
     * place in an array: the camps travel with the player now, so the
     * third camp in the list is a different camp an hour later. The
     * square is the only thing about a camp that does not move.
     */
    snapshot() {
      return camps.filter((c) => c.cell).map((c) => ({
        cell: c.cell,
        hp: c.members.map((m) => (m.state === 'dead' ? 0 : m.hp)),
      }));
    },

    /** Put a saved state back onto whichever camps are pitched now. */
    restore(saved) {
      if (!Array.isArray(saved)) return;
      const byCell = new Map(saved.map((c) => [c.cell, c]));
      for (const camp of camps) {
        const was = byCell.get(camp.cell);
        if (!was) continue;
        for (const [i, m] of camp.members.entries()) {
          const hp = was.hp[i];
          if (hp === undefined) continue;
          m.hp = hp;
          if (hp <= 0) this.kill(m);
        }
      }
    },

    /** Everything back where it started — used when the player dies. */
    reset() {
      for (const camp of camps) camp.cell = null;
      lastFocus.set(Infinity, Infinity);
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
