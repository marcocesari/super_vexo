// Landing on Earth.
//
// Fly into the planet and the game drops you onto the real streets of
// Castel Maggiore instead of bouncing you off a sphere. Space and the
// surface share one scene and one camera — swapping between them is a
// matter of moving the ship somewhere else and changing the weather.
//
// Why a teleport rather than a second scene: the town is life-size
// (1 unit = 1 metre) and 1.5 km across, while the whole game Earth is
// only 112 units wide. The two simply cannot coexist at the same
// scale — so the town lives far below the solar system, out past the
// camera's far plane, where nothing from space can be seen. Landing
// moves the ship down to it; climbing out moves the ship back. From
// the player's seat it reads as descending through cloud.
import * as THREE from 'three';
import { createNeighborhood } from './world/neighborhood.js';
import { EARTH_POSITION, EARTH_RADIUS } from './world/earth.js';
import { SPACE_FOG_NEAR, SPACE_FOG_FAR } from './scene.js';
import { strings } from './strings.js';

// Where the town sits. Far enough below that FAR (5000) can't reach
// anything in space from down there, and vice versa.
export const SURFACE_ORIGIN = new THREE.Vector3(0, -20000, 0);

// Touch the atmosphere this close to the surface and you land.
const LANDING_BAND = 22;
// Climb this high above the street and you're back in orbit.
export const LEAVE_ALTITUDE = 620;
// The ship never sinks below this — a soft floor instead of a crash.
const FLOOR_ALTITUDE = 2.5;

const SKY_COLOR = 0x9dc9ef;
const HAZE_NEAR = 260;
const HAZE_FAR = 1250;

/**
 * @param {THREE.Scene} scene
 * @param {THREE.Object3D[]} spaceObjects things to hide while landed
 * @param {() => void} [onTeleport] called whenever the ship is moved
 *        discontinuously, so the chase camera can cut instead of
 *        flying the 20 km between space and the surface itself.
 */
export function createSurface(scene, spaceObjects, onTeleport = () => {}) {
  // Built once at load: ~30 buildings, the streets and a few hundred
  // trees. Doing it here costs a beat on startup, where nobody minds;
  // doing it on the first landing would hitch mid-flight.
  const town = createNeighborhood();
  town.group.position.copy(SURFACE_ORIGIN);
  town.group.visible = false;
  scene.add(town.group);

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
  // town from underneath. Aim it at the town instead.
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

  let active = false;
  let bannerTimer = 0;
  const spaceReturn = new THREE.Vector3();
  const savedBackground = scene.background;
  const spaceFogColor = scene.fog.color.clone();

  /** True when the ship is deep enough into Earth's air to land. */
  function shouldLand(ship) {
    return ship.mesh.position.distanceTo(EARTH_POSITION) < EARTH_RADIUS + LANDING_BAND;
  }

  /** Metres above the street. */
  function altitude(ship) {
    return ship.mesh.position.y - SURFACE_ORIGIN.y;
  }

  function enter(ship) {
    if (active) return;
    active = true;

    // Remember where to pop back out: just outside the atmosphere, on
    // the line from Earth's centre through wherever we went in.
    spaceReturn.copy(ship.mesh.position).sub(EARTH_POSITION)
      .setLength(EARTH_RADIUS + 60).add(EARTH_POSITION);

    town.group.visible = true;
    sunLight.intensity = SUN_INTENSITY;
    skyLight.intensity = SKY_INTENSITY;
    for (const o of spaceObjects) o.visible = false;
    scene.background = new THREE.Color(SKY_COLOR);
    // Move the existing fog in rather than creating one — see
    // createScene(): swapping the fog object recompiles every shader.
    scene.fog.color.setHex(SKY_COLOR);
    scene.fog.near = HAZE_NEAR;
    scene.fog.far = HAZE_FAR;

    ship.mesh.position.copy(town.spawn).add(SURFACE_ORIGIN);
    ship.mesh.quaternion.setFromEuler(new THREE.Euler(0, town.heading, 0, 'YXZ'));
    ship.velocity.set(0, 0, 0);
    onTeleport();

    banner.hidden = false;
    banner.classList.remove('landing-banner--fading');
    bannerTimer = 6;
  }

  function exit(ship) {
    if (!active) return;
    active = false;

    town.group.visible = false;
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
    const away = spaceReturn.clone().sub(EARTH_POSITION).normalize();
    ship.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), away);
    ship.velocity.set(0, 0, 0);
    onTeleport();

    banner.hidden = true;
  }

  return {
    get active() { return active; },
    /** The town's group, for tests and screenshots. */
    town,
    enter,
    exit,
    altitude,

    /**
     * Compile the surface's shaders, upload its textures, and draw the
     * town once for real — all while the game is still loading.
     *
     * Three steps, and all three turned out to be necessary:
     *
     *   1. `renderer.compile()` links the programs.
     *   2. Drivers defer their real work until a program is used in a
     *        draw call, so the town is actually rendered once.
     *   3. That render must go to the CANVAS, not to an offscreen
     *        target. The canvas is multisampled (antialias: true) and
     *        an 8x8 plain target is not, so a draw there specialises
     *        the wrong framebuffer format and the stall comes straight
     *        back — measured at 1.5s on the first landing.
     *
     * The canvas is composited once, after this whole task finishes, so
     * painting the town and then painting space over it inside the same
     * function is invisible: only the last state is ever shown.
     */
    prewarm(renderer, camera) {
      town.group.visible = true;
      sunLight.intensity = SUN_INTENSITY;
      skyLight.intensity = SKY_INTENSITY;
      renderer.compile(scene, camera);

      const probe = new THREE.PerspectiveCamera(60, camera.aspect, 0.1, 5000);
      probe.position.copy(SURFACE_ORIGIN).add(new THREE.Vector3(0, 140, 300));
      probe.lookAt(SURFACE_ORIGIN);
      renderer.render(scene, probe);

      town.group.visible = false;
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
        if (shouldLand(ship)) enter(ship);
        return;
      }

      town.update(dt);

      // Soft floor: skim the rooftops all you like, but the street
      // itself stops you. No crash — this is a kid's flight sim.
      const alt = altitude(ship);
      if (alt < FLOOR_ALTITUDE) {
        ship.mesh.position.y = SURFACE_ORIGIN.y + FLOOR_ALTITUDE;
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
