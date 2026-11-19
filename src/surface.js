// Landing on a world.
//
// Fly into the planet and the game drops you onto real ground instead of
// bouncing you off a sphere. Space and the surface share one scene and
// one camera — swapping between them is a matter of moving the ship
// somewhere else and changing the weather.
//
// Why a teleport rather than a second scene: the world is life-size
// (1 unit = 1 metre) and has no edges, while the whole game Earth is
// only 112 units wide. The two cannot coexist at the same scale — so
// the world lives far below the solar system, out past the camera's far
// plane, where nothing from space can be seen. Landing moves the ship
// down to it; climbing out moves the ship back. From the player's seat
// it reads as descending through cloud.
//
// The ground itself is generated and endless (see world/terrain.js), so
// this module no longer owns a place. It owns a POSITION in a world that
// carries on in every direction, and it remembers where you left off.
import * as THREE from 'three';
import { createPlanet } from './world/planet.js';
import { EARTH_POSITION, EARTH_RADIUS } from './world/earth.js';
import { SPACE_FOG_NEAR, SPACE_FOG_FAR } from './scene.js';
import { PLANETS, SYSTEM_NAME } from './world/novaAstra.js';
import { strings } from './strings.js';

// Where the world sits. Far enough below that nothing in space can be
// seen from down there, and vice versa.
export const SURFACE_ORIGIN = new THREE.Vector3(0, -20000, 0);

// Touch the atmosphere this close to the surface and you land.
const LANDING_BAND = 22;
// Climb this high above the ground and you're back in orbit. It has to
// clear the tallest ground in the world with room to spare — and the
// tallest is now the Spire, whose crater rim stands about 1300 m up, so
// a 1500 m ceiling meant flying over the one landmark in the world sent
// you into space.
export const LEAVE_ALTITUDE = 2800;
// The ship never sinks below this — a soft floor instead of a crash.
// It is also exactly where the ship sits when parked (PARK_CLEARANCE,
// below): if the floor were higher, boarding would pop the ship into
// the air the instant the disembark sequence handed it back.
const FLOOR_ALTITUDE = 1.0;

// The ship is 2.6 units long, and out in space that is the only scale
// there is — nothing up there is a known size, so the number means
// nothing. Down here everything has a real size: the streets are the
// real streets at a metre per unit, the houses are 8.5 m, and Vexo is
// 1.8 m tall because that is how tall a person is. At 1x he would
// climb out of a spacecraft shorter than he is, so the ship is scaled
// to a believable 10.5 m fighter for as long as it is down here.
export const SURFACE_SHIP_SCALE = 4;

// Where the ship's origin sits when parked, in metres above the street.
// The hull's lowest point is 0.22 ship units, which at the scale above
// is 0.88 m, so this leaves the belly a hand's width off the ground.
export const PARK_CLEARANCE = 1.0;

const SKY_COLOR = 0x9dc9ef;
// Air haze. Far enough out to show a mountain range on the horizon —
// the old figures were built for a town 1.5 km across and would now
// buried the whole world in fog a field away.
const HAZE_NEAR = 1600;
const HAZE_FAR = 34000;
// While we are down here the camera has to see much further than it does
// in space. This is a uniform, not a #define, so changing it is free —
// unlike the number of lights, which recompiles every shader in the game.
const SURFACE_CAMERA_FAR = 24000;

/**
 * @param {THREE.Scene} scene
 * @param {THREE.Object3D[]} spaceObjects things to hide while landed
 * @param {() => void} [onTeleport] called whenever the ship is moved
 *        discontinuously, so the chase camera can cut instead of
 *        flying the 20 km between space and the surface itself.
 */
export function createSurface(scene, spaceObjects, camera, onTeleport = () => {},
  onWorldChange = () => {}) {
  // Everything in Nova Astra you can land on: home, and the four new
  // planets (see world/novaAstra.js). Each gets its own world, built the
  // first time anybody lands there — home at load, because it is where
  // the game starts and its shaders are warmed up below.
  const HOME_SKY = {
    color: SKY_COLOR, hazeNear: HAZE_NEAR, hazeFar: HAZE_FAR,
    sun: 0xfff3e0, sunIntensity: 1.6, skyTop: 0xbcdcff, skyGround: 0x6a7b52, skyIntensity: 0.9,
  };
  const bodies = [
    { id: 'home', name: null, position: EARTH_POSITION, radius: EARTH_RADIUS, profile: null, sky: HOME_SKY },
    ...PLANETS.map((p) => ({
      id: p.id, name: p.name, position: p.position, radius: p.radius, profile: p, sky: p.sky,
    })),
  ];
  for (const b of bodies) {
    b.world = null;
    // Where the ship was standing when it last left this world's ground.
    // A world has no edges and no landmarks to come back to, so leaving
    // and returning should put you where you were.
    b.lastPlace = null;
  }
  const bodyById = new Map(bodies.map((b) => [b.id, b]));

  function worldOf(body) {
    if (!body.world) {
      // Nothing is built until somebody asks for a piece of it, so this
      // costs little — the ground appears as the ship approaches.
      body.world = createPlanet(body.profile ? { profile: body.profile } : {});
      body.world.group.position.copy(SURFACE_ORIGIN);
      body.world.group.visible = false;
      scene.add(body.world.group);
    }
    return body.world;
  }

  // Which body's ground is the current one. Home until you land elsewhere.
  let body = bodies[0];
  let cur = worldOf(body);

  // --- Getting a planet ready before you arrive -----------------------------
  // Landing on a planet whose ground has not been built is a freeze: every
  // tile round the landing spot, and everything growing on them, made in
  // one go — measured at 130-145 ms on each Nova Astra planet, which with
  // the entry haze on screen looked exactly like a loading screen. So the
  // work is moved earlier and cut into slices too thin to notice:
  //
  //   * each planet's world is CREATED a little after the game loads,
  //     one at a time in idle moments (about 15 ms apiece);
  //   * its ground is BUILT while the ship is diving toward it, a few
  //     milliseconds a frame round the spot it will come down on —
  //     well under a second's worth, over a dive that takes several;
  //
  // so by the time the ship touches the air there is nothing left to do.
  const PREPARE_WITHIN = 3;   // planet radii above the surface
  const idle = (fn) => (typeof requestIdleCallback === 'function'
    ? requestIdleCallback(fn, { timeout: 3000 })
    : setTimeout(fn, 200));
  const createQueue = bodies.filter((b) => !b.world);
  function createNext() {
    const next = createQueue.shift();
    if (!next) return;
    worldOf(next);
    setTimeout(() => idle(createNext), 600);
  }
  setTimeout(() => idle(createNext), 2500);

  /** Build the ground round where the ship will come down on the planet it is diving at. */
  function prepare(ship) {
    let near = null;
    for (const b of bodies) {
      const depth = ship.mesh.position.distanceTo(b.position) - b.radius;
      if (!near || depth < near.depth) near = { body: b, depth };
    }
    if (!near || near.depth > near.body.radius * PREPARE_WITHIN) return;
    const w = worldOf(near.body);
    const site = near.body.lastPlace ?? w.spawn;
    // A few milliseconds of tiles (setFocus does a slice of the queue),
    // and of what grows on them.
    w.setFocus(site.x, site.z);
    w.update(0, site.x, site.z, null);
  }

  // The world as the rest of the game sees it: ONE object that always
  // answers for whichever planet you are on. The walker, the monsters
  // and the map each took a reference to `surface.world` when they were
  // made, long before anybody landed anywhere; this is what lets the
  // planet underneath change without any of them having to be told.
  const world = {
    get group() { return cur.group; },
    get terrain() { return cur.terrain; },
    get spawn() { return cur.spawn; },
    get heading() { return cur.heading; },
    get info() { return cur.info; },
    setFocus: (x, z) => cur.setFocus(x, z),
    flush: () => cur.flush(),
    update: (dt, x, z, y) => cur.update(dt, x, z, y),
    groundHeightAt: (x, z) => cur.groundHeightAt(x, z),
    isClear: (x, z, r) => cur.isClear(x, z, r),
    resolveWalk: (x, z, r, out) => cur.resolveWalk(x, z, r, out),
    nearestPerson: (x, z) => cur.nearestPerson(x, z),
    findLandingSite: () => cur.findLandingSite(),
  };

  const spaceCameraFar = camera.far;

  // Daylight for the surface. Space is lit for drama — one hard sun and
  // a dim blue fill — which on a summer afternoon in Emilia-Romagna
  // would look like a power cut, so landing brings its own lights.
  //
  // These two are added ONCE and never hidden. How many lights a scene
  // holds is baked into every shader as a #define, so switching a light
  // off and on recompiles every material in the game — the same 2
  // second freeze that scene.fog used to cause. Instead they live here
  // permanently at zero intensity, which is a uniform and free, and
  // landing just turns them up.
  const SUN_INTENSITY = 1.6;
  const SKY_INTENSITY = 0.9;
  const sunLight = new THREE.DirectionalLight(0xfff3e0, 0);
  sunLight.position.set(-260, 420, 180).add(SURFACE_ORIGIN);
  // A directional light points at its TARGET, which defaults to the
  // world origin — 20 km straight up from here, which would light the
  // ground from underneath. Aim it at the world instead.
  sunLight.target.position.copy(SURFACE_ORIGIN);
  scene.add(sunLight.target);
  scene.add(sunLight);
  const skyLight = new THREE.HemisphereLight(0xbcdcff, 0x6a7b52, 0);
  skyLight.position.copy(SURFACE_ORIGIN);
  scene.add(skyLight);

  // Banner naming the place you just landed in.
  const banner = document.createElement('div');
  banner.id = 'landing-banner';
  banner.hidden = true;
  banner.innerHTML = `
    <div class="landing-banner__town"></div>
    <div class="landing-banner__street"></div>
    <div class="landing-banner__hint"></div>
  `;
  document.body.appendChild(banner);
  banner.querySelector('.landing-banner__town').textContent = strings.surface.town;
  banner.querySelector('.landing-banner__street').textContent = strings.surface.street;
  banner.querySelector('.landing-banner__hint').textContent = strings.surface.leaveHint;

  const _euler = new THREE.Euler();

  let active = false;
  let parked = false;
  // Where the world is being looked at from, when that is not the ship:
  // on foot Vexo walks away from where he parked, and the town's crowd
  // is drawn around whoever is there to see it.
  let watchX = null;
  let watchZ = null;
  let watchY = null;
  let bannerTimer = 0;
  const spaceReturn = new THREE.Vector3();
  const savedBackground = scene.background;
  const spaceFogColor = scene.fog.color.clone();

  /** The body whose air the ship is deep enough into to land, or null. */
  function landingOn(ship) {
    for (const b of bodies) {
      if (ship.mesh.position.distanceTo(b.position) < b.radius + LANDING_BAND) return b;
    }
    return null;
  }

  /** Put the weather, the haze and the light of this body's sky up. */
  function applySky(sky) {
    sunLight.color.setHex(sky.sun);
    sunLight.intensity = sky.sunIntensity;
    skyLight.color.setHex(sky.skyTop);
    skyLight.groundColor.setHex(sky.skyGround);
    skyLight.intensity = sky.skyIntensity;
    scene.background = new THREE.Color(sky.color);
    // Move the existing fog in rather than creating one — see
    // createScene(): swapping the fog object recompiles every shader.
    scene.fog.color.setHex(sky.color);
    scene.fog.near = sky.hazeNear;
    scene.fog.far = sky.hazeFar;
  }

  /** Metres above the street. */
  function altitude(ship) {
    return ship.mesh.position.y - SURFACE_ORIGIN.y;
  }

  // How far out to sample the ground under the ship, in SHIP units:
  // nose, tail and both wingtips. Multiplied by the ship's scale, which
  // is 4 down here.
  const HULL_SAMPLES = [[0, 0], [1.4, 0], [-1.25, 0], [0, 0.9], [0, -0.9]];

  /**
   * The HIGHEST ground under the ship's footprint, in metres above the
   * street — not the ground under its centre.
   *
   * The ship is 10.5 m long with a 7.3 m span down here and the world is
   * all slopes, so a floor that only knows about the centre lets the
   * nose sink into the hill in front of it. This is also exactly
   * where the ship parks, which is what keeps boarding from popping it
   * into the air.
   */
  function hullGround(ship) {
    const euler = _euler.setFromQuaternion(ship.mesh.quaternion, 'YXZ');
    const fx = Math.sin(euler.y);
    const fz = Math.cos(euler.y);
    const scale = ship.mesh.scale.x;
    let best = -Infinity;
    for (const [along, across] of HULL_SAMPLES) {
      const x = ship.mesh.position.x + (fx * along + fz * across) * scale;
      const z = ship.mesh.position.z + (fz * along - fx * across) * scale;
      const g = world.groundHeightAt(x - SURFACE_ORIGIN.x, z - SURFACE_ORIGIN.z);
      if (g > best) best = g;
    }
    return best;
  }

  /**
   * Land. `onto` is a body's id — given when a save puts you back on a
   * particular planet; otherwise it is whichever one the ship flew into.
   */
  function enter(ship, onto = null) {
    if (active) return;
    const target = (onto && bodyById.get(onto)) || landingOn(ship) || bodies[0];
    active = true;

    // A different planet from last time: swap the ground underneath, and
    // tell whoever cares (the camps, the map).
    if (target !== body) {
      cur.group.visible = false;
      body = target;
      cur = worldOf(body);
      onWorldChange(body.id);
    }

    // Remember where to pop back out: just outside the atmosphere, on
    // the line from the planet's centre through wherever we went in.
    spaceReturn.copy(ship.mesh.position).sub(body.position);
    if (spaceReturn.lengthSq() < 1e-6) spaceReturn.set(0, 1, 0);
    spaceReturn.setLength(body.radius + 60).add(body.position);

    world.group.visible = true;
    ship.mesh.scale.setScalar(SURFACE_SHIP_SCALE);
    for (const o of spaceObjects) o.visible = false;
    applySky(body.sky);

    // Come down where you left off, or — the first time — at a flat, dry
    // spot the world picked out for you.
    const site = body.lastPlace ?? world.spawn;
    // Build the ground BEFORE the ship is put on it: the height under
    // the ship is asked for on the same frame, and an empty world
    // answers zero, which drops you into the sea. `flush` because the
    // ground is normally built a few milliseconds at a time, and
    // arriving is the one moment that cannot wait.
    world.setFocus(site.x, site.z);
    world.flush();
    ship.mesh.position.set(
      site.x, world.groundHeightAt(site.x, site.z) + 90, site.z,
    ).add(SURFACE_ORIGIN);
    ship.mesh.quaternion.setFromEuler(new THREE.Euler(0, world.heading, 0, 'YXZ'));
    ship.velocity.set(0, 0, 0);
    camera.far = SURFACE_CAMERA_FAR;
    camera.updateProjectionMatrix();
    onTeleport();

    // The banner: the planet's name (with the system's), and the kind of
    // ground you came down on, in that planet's own words if it has them.
    banner.querySelector('.landing-banner__town').textContent = body.name
      ? `${SYSTEM_NAME} · ${body.name}` : strings.surface.town;
    const biome = world.info.biomeAt(site.x, site.z);
    banner.querySelector('.landing-banner__street').textContent =
      world.info.groundName?.(biome) ?? strings.surface.ground[biome] ?? strings.surface.street;
    banner.hidden = false;
    banner.classList.remove('landing-banner--fading');
    bannerTimer = 6;
  }

  function exit(ship) {
    if (!active) return;
    active = false;
    parked = false;
    ship.mesh.scale.setScalar(1);
    body.lastPlace = new THREE.Vector3(
      ship.mesh.position.x - SURFACE_ORIGIN.x, 0, ship.mesh.position.z - SURFACE_ORIGIN.z,
    );
    camera.far = spaceCameraFar;
    camera.updateProjectionMatrix();

    world.group.visible = false;
    sunLight.intensity = 0;
    skyLight.intensity = 0;
    for (const o of spaceObjects) o.visible = true;
    scene.background = savedBackground;
    scene.fog.color.copy(spaceFogColor);
    scene.fog.near = SPACE_FOG_NEAR;
    scene.fog.far = SPACE_FOG_FAR;

    ship.mesh.position.copy(spaceReturn);
    // Point the nose away from the planet so the climb-out continues
    // outward instead of dropping you straight back in.
    const away = spaceReturn.clone().sub(body.position).normalize();
    ship.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), away);
    ship.velocity.set(0, 0, 0);
    onTeleport();

    banner.hidden = true;
  }

  return {
    /** Watch from here instead of from the ship. Null goes back to it. */
    watchFrom(x, z, y = null) {
      watchX = x;
      watchZ = z;
      // How high the watcher is matters as well as where: what grows on
      // the ground is not drawn from up in the air (see world/flora.js).
      watchY = y;
    },

    get active() { return active; },
    /** Which body's ground is current: 'home', or a planet's id. */
    get bodyId() { return body.id; },
    /** The current body's sky — its colour, haze and light. */
    get sky() { return body.sky; },
    /**
     * The landable body nearest the ship in space, and how far above its
     * surface the ship is (in space units). For the approach effects in
     * atmosphereEntry.js.
     */
    bodyNear(ship) {
      let best = null;
      for (const b of bodies) {
        const depth = ship.mesh.position.distanceTo(b.position) - b.radius;
        if (!best || depth < best.depth) best = { body: b, depth };
      }
      return best;
    },
    /** Everything you can land on, for the space side of the game. */
    bodies,
    /**
     * True while the ship is sitting on its skids with the player out of
     * it (or on the way out). Parking freezes the flight side of this
     * module: no soft floor, no climb-out to space.
     */
    get parked() { return parked; },
    /** The world: its ground, and everything that can be asked of it. */
    world,
    enter,
    exit,
    altitude,
    /** World Y of the highest ground under the hull. See hullGround(). */
    hullGroundY(ship) { return SURFACE_ORIGIN.y + hullGround(ship); },

    /** Hand the ship over to the disembark sequence, and take it back. */
    park() { parked = true; },
    unpark() { parked = false; },

    /**
     * Compile the surface's shaders, upload its textures, and draw the
     * ground once for real — all while the game is still loading.
     *
     * Three steps, and all three turned out to be necessary:
     *
     *   1. `renderer.compile()` links the programs.
     *   2. Drivers defer their real work until a program is used in a
     *        draw call, so the ground is actually rendered once.
     *   3. That render must go to the CANVAS, not to an offscreen
     *        target. The canvas is multisampled (antialias: true) and
     *        an 8x8 plain target is not, so a draw there specialises
     *        the wrong framebuffer format and the stall comes straight
     *        back — measured at 1.5s on the first landing.
     *
     * The canvas is composited once, after this whole task finishes, so
     * painting the ground and then painting space over it inside the same
     * function is invisible: only the last state is ever shown.
     */
    prewarm(renderer, camera) {
      world.setFocus(world.spawn.x, world.spawn.z);
      world.flush();
      world.group.visible = true;
      sunLight.intensity = SUN_INTENSITY;
      skyLight.intensity = SKY_INTENSITY;
      renderer.compile(scene, camera);

      const probe = new THREE.PerspectiveCamera(60, camera.aspect, 0.1, SURFACE_CAMERA_FAR);
      probe.position.copy(SURFACE_ORIGIN).add(world.spawn)
        .add(new THREE.Vector3(0, 160, 320));
      probe.lookAt(new THREE.Vector3().copy(SURFACE_ORIGIN).add(world.spawn));
      renderer.render(scene, probe);

      world.group.visible = false;
      sunLight.intensity = 0;
      skyLight.intensity = 0;
      // Leave the canvas showing space, not a frozen town.
      renderer.render(scene, camera);
    },

    /**
     * Called every frame while flying. Handles both directions of the
     * transition and keeps the ship out of the ground.
     */
    update(ship, dt) {
      if (!active) {
        if (landingOn(ship)) enter(ship);
        else prepare(ship);
        return;
      }

      // Whoever is looking. Out on foot that is the walker, who can be
      // a long way from where the ship is parked.
      world.update(dt,
        watchX ?? ship.mesh.position.x - SURFACE_ORIGIN.x,
        watchZ ?? ship.mesh.position.z - SURFACE_ORIGIN.z,
        watchY ?? ship.mesh.position.y - SURFACE_ORIGIN.y);
      // The ground travels with the ship. Only the tiles that changed
      // place are rebuilt, so this is nearly free while hovering and
      // costs a few tiles a second at full speed.
      world.setFocus(
        ship.mesh.position.x - SURFACE_ORIGIN.x,
        ship.mesh.position.z - SURFACE_ORIGIN.z,
      );

      // Parked: the ship belongs to the disembark sequence, which is
      // holding it still on the ground. Nothing here may move it.
      if (parked) {
        if (bannerTimer > 0) {
          bannerTimer -= dt;
          if (bannerTimer <= 0) banner.classList.add('landing-banner--fading');
        }
        return;
      }

      // Soft floor: skim the rooftops all you like, but the ground
      // itself stops you. No crash — this is a kid's flight sim. The
      // floor follows the terrain, so the hills under the long blocks
      // hold the ship up rather than letting it fly through them.
      const alt = altitude(ship);
      const terrain = hullGround(ship);
      if (alt < terrain + FLOOR_ALTITUDE) {
        ship.mesh.position.y = SURFACE_ORIGIN.y + terrain + FLOOR_ALTITUDE;
        if (ship.velocity.y < 0) ship.velocity.y = 0;
      }

      if (alt > LEAVE_ALTITUDE) exit(ship);

      if (bannerTimer > 0) {
        bannerTimer -= dt;
        if (bannerTimer <= 0) banner.classList.add('landing-banner--fading');
      }
    },

    /** Reset hook: back to space, banner cleared. */
    reset(ship) {
      exit(ship);
    },
  };
}
