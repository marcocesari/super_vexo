// Coming down through a planet's atmosphere — and going back up.
//
// The planets in space are globes a hundred units across; the ground
// you land on is a life-size world far below the solar system (see
// surface.js for why they cannot be the same thing). Landing used to be
// a cut between the two: touch the air and you were simply ninety metres
// over a field. Marco wanted to SEE it: the planet coming up to fill the
// view, the air thickening, plunging through it and the land appearing
// underneath.
//
// So the cut is still there, but it happens inside a cloud:
//
//   1. APPROACH (space). From a little under a planet's radius out, the
//      view tints with that planet's sky, the nose glows with the heat
//      of entry and the camera starts to shake — harder the deeper you
//      go. By the time the ship touches the landing band the screen is
//      almost all sky-coloured haze.
//   2. THE SWAP. surface.js puts the ship into the world 1.5 km up, still
//      inside the haze — the overlay is the same colour as that world's
//      sky, so nothing visibly changes.
//   3. DESCENT (ground). The haze clears over two seconds, the ship
//      falls through a layer of cloud, the land opens out below, and it
//      glides down, nose low, and levels off a couple of hundred metres
//      up — where the controls are handed back.
//   4. CLIMB-OUT is the same thing backwards: above 1700 m the haze
//      thickens, at the ceiling the swap happens inside it, and space
//      clears around the ship with the planet behind it.
//
// The cloud layer stays up for as long as you are on a planet, between
// about 900 and 1400 m: you fly through it on the way down and up, and
// from the ground it is weather.
import * as THREE from 'three';
import { SURFACE_ORIGIN, LEAVE_ALTITUDE } from './surface.js';

// How far out a planet's air starts to show, as a fraction of its radius.
const ATMOSPHERE = 0.85;
// Coming down: where the ship arrives, where it levels off, and how long.
const ENTRY_ALT = 1500;          // metres above the ground it arrives over
const LEVEL_ALT = 220;           // …and where the controls come back
const DESCENT_TIME = 7.5;        // seconds from arrival to level flight
const GLIDE_SPEED = 210;         // m/s across the ground while descending
const CLEAR_TIME = 2.2;          // seconds for the haze to open up
// Going up: the haze starts thickening here (metres above the street).
const ASCENT_FADE_FROM = 1700;
const EMERGE_TIME = 1.4;         // seconds for space to clear after leaving

// The cloud layer.
const CLOUDS = 80;
const CLOUD_FIELD = 4200;        // metres across, kept centred on the ship
const CLOUD_LOW = 900;
const CLOUD_HIGH = 1400;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ease = (t) => t * t * (3 - 2 * t);
const mix = (a, b, t) => a + (b - a) * t;

function puffTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  // A few overlapping soft discs, so a puff is lumpy rather than a ball.
  for (const [x, y, r, a] of [[64, 70, 50, 0.9], [40, 66, 34, 0.7], [88, 64, 36, 0.7], [62, 48, 34, 0.6]]) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(255,255,255,${a})`);
    g.addColorStop(0.6, `rgba(255,255,255,${a * 0.45})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * @param {object} deps
 * @param {THREE.Scene} deps.scene
 * @param {THREE.PerspectiveCamera} deps.camera
 * @param {object} deps.ship
 * @param {ReturnType<import('./surface.js').createSurface>} deps.surface
 */
export function createAtmosphereEntry({ scene, camera, ship, surface }) {
  // --- The screen: a tint of the sky, and the glow of the heat ------------------
  const tint = document.createElement('div');
  tint.id = 'entry-tint';
  document.body.appendChild(tint);
  const heatEl = document.createElement('div');
  heatEl.id = 'entry-heat';
  document.body.appendChild(heatEl);

  // --- The nose glow --------------------------------------------------------------
  // A hot orange bloom over the front of the ship. A child of the ship,
  // so it scales with it when the ship grows to its size on the ground.
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = 64;
  glowCanvas.height = 64;
  const gctx = glowCanvas.getContext('2d');
  const gg = gctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gg.addColorStop(0, 'rgba(255,240,200,1)');
  gg.addColorStop(0.35, 'rgba(255,150,60,0.8)');
  gg.addColorStop(1, 'rgba(255,80,20,0)');
  gctx.fillStyle = gg;
  gctx.fillRect(0, 0, 64, 64);
  const glowTex = new THREE.CanvasTexture(glowCanvas);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  const noseGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, fog: false,
  }));
  noseGlow.position.set(0, 0, 1.0);
  noseGlow.visible = false;
  ship.mesh.add(noseGlow);

  // --- The cloud layer ------------------------------------------------------------
  const clouds = new THREE.Group();
  clouds.name = 'clouds';
  clouds.visible = false;
  scene.add(clouds);
  const puffMat = new THREE.SpriteMaterial({
    map: puffTexture(), transparent: true, depthWrite: false, opacity: 0.85,
  });
  const puffs = [];
  for (let i = 0; i < CLOUDS; i++) {
    const s = new THREE.Sprite(puffMat);
    // Spread evenly-ish over the field, each at its own height and size.
    s.userData = {
      ox: (Math.random() - 0.5) * CLOUD_FIELD,
      oz: (Math.random() - 0.5) * CLOUD_FIELD,
      h: mix(CLOUD_LOW, CLOUD_HIGH, Math.random()),
    };
    const size = 260 + Math.random() * 380;
    s.scale.set(size * 1.6, size, 1);
    clouds.add(s);
    puffs.push(s);
  }

  /** Keep the field of puffs round the ship, wrapping them as it flies. */
  function placeClouds() {
    const sx = ship.mesh.position.x;
    const sz = ship.mesh.position.z;
    const half = CLOUD_FIELD / 2;
    for (const p of puffs) {
      const d = p.userData;
      // Each puff lives on a grid that repeats every CLOUD_FIELD metres,
      // so as the ship crosses the field, puffs behind reappear ahead.
      const x = sx + ((((d.ox - sx) % CLOUD_FIELD) + CLOUD_FIELD * 1.5) % CLOUD_FIELD) - half;
      const z = sz + ((((d.oz - sz) % CLOUD_FIELD) + CLOUD_FIELD * 1.5) % CLOUD_FIELD) - half;
      p.position.set(x, SURFACE_ORIGIN.y + d.h, z);
    }
  }

  // --- State ----------------------------------------------------------------------
  // 'idle' | 'descending' | 'emerging'
  let state = 'idle';
  let t = 0;
  let heat = 0;          // 0..1, the glow and the shake
  let haze = 0;          // 0..1, the screen tinted with the sky
  let hazeColor = new THREE.Color(0xffffff);
  let wasActive = surface.active;
  // How far above the nearest planet's air the ship was last frame, in
  // space. A landing only gets the full descent if the ship actually
  // FLEW in — it was just above the air a frame ago. Loading a save on
  // the ground, or starting the game landed (?land=1), also lands the
  // ship, and gliding down from 1.5 km would be wrong for both: a save
  // means to put you back exactly where you were.
  let lastDepth = Infinity;
  const FLEW_IN_WITHIN = 40;
  // The descent: where it started and which way it is going.
  const start = new THREE.Vector3();
  let heading = 0;
  let startGround = 0;
  const _e = new THREE.Euler(0, 0, 0, 'YXZ');
  const _shake = new THREE.Vector3();

  function groundY(x, z) {
    return SURFACE_ORIGIN.y + surface.world.groundHeightAt(x - SURFACE_ORIGIN.x, z - SURFACE_ORIGIN.z);
  }

  /** The ship has just been put on a planet: begin the descent. */
  function beginDescent() {
    state = 'descending';
    t = 0;
    _e.setFromQuaternion(ship.mesh.quaternion, 'YXZ');
    heading = _e.y;
    // surface.enter put us ninety metres over where we are coming down;
    // lift that to the top of the descent.
    startGround = groundY(ship.mesh.position.x, ship.mesh.position.z);
    start.copy(ship.mesh.position);
    start.y = startGround + ENTRY_ALT;
    ship.mesh.position.copy(start);
    ship.velocity.set(0, 0, 0);
    hazeColor.setHex(surface.sky.color);
    haze = Math.max(haze, 0.95);
  }

  /** Fly the ship down the glide path. */
  function descend(dt) {
    t += dt;
    const k = clamp01(t / DESCENT_TIME);
    const fx = Math.sin(heading);
    const fz = Math.cos(heading);
    // Across the ground at a steady speed, slowing a little at the end.
    const along = GLIDE_SPEED * DESCENT_TIME * (k - 0.18 * k * k);
    const x = start.x + fx * along;
    const z = start.z + fz * along;
    // Down on an S-curve: slow to start, steepest in the middle, flaring
    // out to level flight at the bottom.
    const alt = mix(ENTRY_ALT, LEVEL_ALT, ease(k));
    // Never closer to the ground under the ship than this, whatever hill
    // the path happens to cross.
    const y = Math.max(startGround + alt, groundY(x, z) + Math.min(alt, 160));
    const prevY = ship.mesh.position.y;
    const dxz = Math.max(1e-3, GLIDE_SPEED * (1 - 0.36 * k) * dt);
    ship.mesh.position.set(x, y, z);
    // Nose along the path: down while it is falling, level at the end.
    // (+X tips the nose down.)
    const pitch = Math.max(-0.2, Math.min(0.75, Math.atan2(prevY - y, dxz)));
    _e.set(t > dt ? pitch : 0.4, heading, 0, 'YXZ');
    ship.mesh.quaternion.setFromEuler(_e);
    ship.velocity.set(0, 0, 0);
    heat = Math.max(0, 1 - t / 3);
    haze = Math.min(haze, 0.95 * (1 - ease(clamp01(t / CLEAR_TIME))));
    if (k >= 1) {
      // Level, a couple of hundred metres up: over to the player.
      _e.set(0, heading, 0, 'YXZ');
      ship.mesh.quaternion.setFromEuler(_e);
      state = 'idle';
      heat = 0;
      haze = 0;
    }
  }

  return {
    /** True while the ship is flying itself down. */
    get suppressInput() { return state === 'descending'; },
    get state() { return state; },
    get haze() { return haze; },
    get heat() { return heat; },

    /** Every frame, after the ship and the surface have had their turn. */
    update(dt) {
      const active = surface.active;
      // Landed this frame: start the descent. Left this frame: let space clear.
      if (active && !wasActive && lastDepth < FLEW_IN_WITHIN) beginDescent();
      if (!active && wasActive) {
        state = 'emerging';
        t = 0;
      }
      wasActive = active;
      if (active) lastDepth = Infinity;

      if (state === 'descending') {
        descend(dt);
      } else if (!active) {
        // Space. How deep into the nearest planet's air the ship is.
        const near = surface.bodyNear(ship);
        let depth = 0;
        lastDepth = near ? near.depth : Infinity;
        if (near) {
          const thick = near.body.radius * ATMOSPHERE;
          depth = clamp01(1 - near.depth / thick);
          hazeColor.setHex(near.body.sky.color);
        }
        // The heat comes on early and builds; the haze holds off until
        // the ship is well into the air and then closes in fast, so the
        // planet is still in view for most of the dive.
        heat = Math.pow(depth, 1.2);
        let want = 0.95 * Math.pow(depth, 2.2);
        if (state === 'emerging') {
          t += dt;
          const fade = 0.95 * (1 - ease(clamp01(t / EMERGE_TIME)));
          want = Math.max(want, fade);
          if (t >= EMERGE_TIME) state = 'idle';
        }
        haze = want;
      } else {
        // On a planet, flying freely: the haze closes in near the ceiling.
        const alt = surface.altitude(ship);
        const up = clamp01((alt - ASCENT_FADE_FROM) / (LEAVE_ALTITUDE - ASCENT_FADE_FROM));
        haze = 0.95 * up * up;
        heat = 0;
        hazeColor.setHex(surface.sky.color);
      }

      // The weather, and the haze in it.
      clouds.visible = active;
      if (active) {
        placeClouds();
        puffMat.color.setHex(surface.sky.color).lerp(new THREE.Color(0xffffff), 0.75);
        const sky = surface.sky;
        // Thick haze while in the cloud: the far edge of the fog comes in
        // close, then opens out as the haze clears.
        scene.fog.near = mix(sky.hazeNear, 30, haze);
        scene.fog.far = mix(sky.hazeFar, 700, haze);
      }

      tint.style.background = `#${hazeColor.getHexString()}`;
      tint.style.opacity = haze.toFixed(3);
      heatEl.style.opacity = (heat * 0.7).toFixed(3);
      noseGlow.visible = heat > 0.02;
      if (noseGlow.visible) {
        const flick = 0.85 + Math.random() * 0.3;
        noseGlow.scale.setScalar((1.2 + heat * 2.2) * flick);
        noseGlow.material.opacity = heat;
      }
    },

    /** After the camera has been placed: shake it with the heat of entry. */
    updateCamera() {
      if (heat <= 0.01) return;
      const s = ship.mesh.scale.x * 0.05 * heat;
      const now = performance.now() * 0.001;
      _shake.set(
        Math.sin(now * 47) * s + Math.sin(now * 23) * s * 0.6,
        Math.sin(now * 53 + 1) * s,
        Math.sin(now * 41 + 2) * s * 0.5,
      );
      camera.position.add(_shake);
    },

    /** Put everything away (game reset). */
    reset() {
      state = 'idle';
      heat = 0;
      haze = 0;
      wasActive = surface.active;
      tint.style.opacity = '0';
      heatEl.style.opacity = '0';
      noseGlow.visible = false;
    },
  };
}
