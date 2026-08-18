// Earth: home base. Vexo's training flight starts here, so the planet
// sits *behind* the spawn point — turn around and you're looking at
// home, fly forward and you're heading out to the belt and Mars.
//
// Like Mars, every pixel is painted at runtime on a 2D canvas: no asset
// files. Earth gets three extra tricks Mars doesn't have:
//   1. Real-ish continents, drawn from hand-typed longitude/latitude
//      outlines instead of random blobs — so it reads as *our* planet.
//   2. A separate cloud sphere that spins slightly faster than the
//      ground, which is what makes weather look alive.
//   3. A soft blue atmosphere shell around the rim.
//
// The texture is "equirectangular": longitude runs left→right across
// the image, latitude runs top→bottom. Three.js wraps that rectangle
// around the sphere for us.
import * as THREE from 'three';

// Behind the spawn point (the ship starts at the origin facing +Z) and
// pushed off-axis so it doesn't sit dead-center on the Sun sprite —
// this way you see the planet AND the sun glow beside it when you look
// back.
export const EARTH_POSITION = new THREE.Vector3(-90, 25, -330);
// Mars is 60. The real Earth is about 1.9x Mars's radius; keeping that
// ratio makes the two planets feel like part of one solar system.
export const EARTH_RADIUS = 112;

const TEX_W = 2048;
const TEX_H = 1024;

// Clouds live on their own slightly larger sphere. 1.5% is enough to
// avoid z-fighting with the surface without looking like a shell.
const CLOUD_SCALE = 1.015;
const ATMO_SCALE = 1.035;

// Rotation. Earth turns once every 24h; that's invisible at game
// scale, so we speed it up until the motion reads on screen. Clouds
// drift a little faster than the ground beneath them.
const SPIN_RATE = 0.03;        // rad/s
const CLOUD_SPIN_RATE = 0.042; // rad/s

// --- Continent outlines -----------------------------------------------------
// Coarse [longitude, latitude] traces. Nowhere near survey-accurate —
// just enough vertices that the silhouettes are recognizable from
// orbit. Longitude: -180 (west) .. +180 (east). Latitude: +90 (north
// pole) .. -90 (south pole).
const CONTINENTS = [
  // North America
  [[-168, 65], [-150, 61], [-130, 54], [-124, 40], [-117, 32], [-105, 22],
   [-97, 16], [-83, 9], [-78, 19], [-81, 26], [-70, 42], [-60, 47],
   [-55, 52], [-64, 60], [-80, 70], [-95, 69], [-125, 70], [-155, 71]],
  // South America
  [[-80, 8], [-70, 11], [-60, 8], [-50, 0], [-35, -5], [-38, -15], [-48, -25],
   [-58, -35], [-63, -42], [-73, -52], [-75, -47], [-71, -33], [-71, -18],
   [-79, -6], [-80, 2]],
  // Africa
  [[-17, 15], [-10, 25], [0, 32], [10, 34], [25, 32], [35, 30], [43, 12],
   [51, 12], [42, -2], [40, -15], [35, -25], [25, -34], [18, -33], [12, -18],
   [9, -2], [5, 5], [-8, 5]],
  // Eurasia (Europe + Asia as one landmass, India included)
  [[-9, 37], [0, 40], [12, 45], [24, 40], [30, 36], [36, 37], [45, 40],
   [50, 30], [57, 25], [68, 24], [77, 8], [81, 16], [89, 22], [95, 16],
   [100, 13], [106, 10], [110, 20], [120, 32], [122, 40], [130, 43],
   [136, 50], [142, 54], [160, 60], [170, 66], [178, 68], [168, 72],
   [140, 75], [110, 76], [90, 76], [70, 73], [58, 70], [48, 68], [38, 66],
   [30, 70], [24, 66], [17, 62], [11, 58], [4, 57], [-2, 51], [0, 47],
   [-5, 43]],
  // Australia
  [[113, -22], [122, -18], [130, -12], [137, -12], [142, -11], [147, -19],
   [153, -25], [150, -35], [145, -38], [137, -35], [129, -32], [118, -34],
   [114, -28]],
  // Greenland
  [[-45, 60], [-30, 68], [-24, 75], [-35, 82], [-55, 82], [-60, 75], [-55, 65]],
];

// Small stuff: [longitude, latitude, radius-in-degrees]. Islands too
// small to bother outlining, stamped as circles.
const ISLANDS = [
  [-4, 54, 4],    // British Isles
  [138, 37, 4],   // Japan
  [47, -20, 5],   // Madagascar
  [174, -41, 4],  // New Zealand
  [110, -3, 6],   // Borneo
  [102, -2, 5],   // Sumatra
  [122, 12, 4],   // Philippines
  [-19, 65, 3],   // Iceland
  [80, 8, 2.5],   // Sri Lanka
  [-78, 21, 3],   // Cuba
];

// Deserts sit in two dry bands roughly 20–35 degrees north and south.
// [longitude, latitude, radius-in-degrees].
const DESERTS = [
  [10, 22, 18],   // Sahara
  [30, 25, 14],   // Sahara east / Arabia edge
  [45, 22, 12],   // Arabia
  [65, 28, 10],   // Iranian plateau
  [95, 40, 12],   // Gobi
  [132, -25, 14], // Australian outback
  [18, -22, 8],   // Kalahari
  [-110, 32, 8],  // American southwest
  [-68, -25, 6],  // Atacama
];

/** Longitude/latitude → pixel coordinates in the equirectangular texture. */
function lonLatToXY(lon, lat) {
  return {
    x: ((lon + 180) / 360) * TEX_W,
    y: ((90 - lat) / 180) * TEX_H,
  };
}

/** Degrees of latitude → pixels (same scale applies to longitude). */
function degToPx(deg) {
  return (deg / 180) * TEX_H;
}

/**
 * Append one closed, smooth-cornered polygon to the current path.
 *
 * Straight `lineTo` segments give jagged, obviously-hand-typed
 * coastlines. The fix is a classic: instead of drawing corner→corner,
 * draw *midpoint→midpoint* and use each original vertex as the control
 * point of a quadratic curve. The curve bulges toward the vertex
 * without passing through it, so every corner comes out smooth.
 */
function appendSmoothPolygon(ctx, lonLatPoints) {
  const pts = lonLatPoints.map(([lon, lat]) => lonLatToXY(lon, lat));
  const n = pts.length;
  const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

  const start = mid(pts[n - 1], pts[0]);
  ctx.moveTo(start.x, start.y);
  for (let i = 0; i < n; i++) {
    const ctrl = pts[i];
    const end = mid(pts[i], pts[(i + 1) % n]);
    ctx.quadraticCurveTo(ctrl.x, ctrl.y, end.x, end.y);
  }
  ctx.closePath();
}

/**
 * Append every landmass to the current path. Built once and reused for
 * two different jobs: filling the land green, and clipping so that all
 * the terrain detail lands on land and never spills into the ocean.
 */
function appendLandPath(ctx) {
  for (const outline of CONTINENTS) {
    appendSmoothPolygon(ctx, outline);
  }
  for (const [lon, lat, degR] of ISLANDS) {
    const { x, y } = lonLatToXY(lon, lat);
    const r = degToPx(degR);
    // moveTo the circle's start point first, otherwise the canvas draws
    // a connecting line from wherever the previous subpath ended.
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, Math.PI * 2);
  }
}

/**
 * Paint one soft-edged blob: opaque in the middle, fading to nothing at
 * the rim. Hard-edged `arc()` circles are what make a procedural planet
 * look like polka dots; a radial gradient reads as cloud, haze, or a
 * patch of terrain instead.
 */
function paintSoftBlob(ctx, x, y, r, rgb, alpha, stretchX = 1, stretchY = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(stretchX, stretchY);
  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
  grad.addColorStop(0, `rgba(${rgb}, ${alpha})`);
  grad.addColorStop(0.55, `rgba(${rgb}, ${alpha * 0.55})`);
  grad.addColorStop(1, `rgba(${rgb}, 0)`);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function newCanvasCtx() {
  const canvas = document.createElement('canvas');
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  return canvas.getContext('2d');
}

function toTexture(ctx) {
  const tex = new THREE.CanvasTexture(ctx.canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeSurfaceTexture() {
  const ctx = newCanvasCtx();

  // --- Ocean ---------------------------------------------------------------
  // Deeper (darker) toward the poles, brighter through the tropics.
  const ocean = ctx.createLinearGradient(0, 0, 0, TEX_H);
  ocean.addColorStop(0.0, '#0a2c50');
  ocean.addColorStop(0.35, '#1259a0');
  ocean.addColorStop(0.5, '#1a72bd');
  ocean.addColorStop(0.65, '#1259a0');
  ocean.addColorStop(1.0, '#0a2c50');
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, TEX_W, TEX_H);

  // Mottle the water so it isn't a flat wash — deep basins and shallows.
  for (let i = 0; i < 700; i++) {
    const x = Math.random() * TEX_W;
    const y = Math.random() * TEX_H;
    const r = 20 + Math.random() * 110;
    const deep = Math.random() < 0.55;
    paintSoftBlob(
      ctx, x, y, r,
      deep ? '6, 28, 58' : '70, 165, 215',
      (deep ? 0.10 : 0.07) * (0.4 + Math.random() * 0.6),
      1.6, 0.7, // smeared along latitude, like ocean currents
    );
  }

  // --- Land ----------------------------------------------------------------
  // Continental shelf first: stroke the coastline with wide, soft bands
  // of paler blue *before* filling the land, so the strokes sit under
  // the continents and only their outer halves show. Shallow water
  // around every coast is a big part of why Earth reads as Earth.
  //
  // Canvas can't stroke a gradient across a line's width, so we fake it:
  // several passes, each narrower, brighter and slightly stronger than
  // the last. Stacked up they blend into a smooth shallow-to-deep ramp.
  const SHELF_PASSES = [
    { width: 52, color: 'rgba(30, 105, 165, 0.18)' },
    { width: 38, color: 'rgba(45, 130, 190, 0.20)' },
    { width: 26, color: 'rgba(65, 160, 205, 0.22)' },
    { width: 14, color: 'rgba(95, 190, 220, 0.25)' },
  ];
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  appendLandPath(ctx);
  for (const pass of SHELF_PASSES) {
    ctx.strokeStyle = pass.color;
    ctx.lineWidth = pass.width;
    ctx.stroke();
  }

  // Base green, then everything else painted *inside* a clip of the same
  // shapes so the ocean stays clean.
  ctx.fillStyle = '#3f7a3a';
  ctx.beginPath();
  appendLandPath(ctx);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  appendLandPath(ctx);
  ctx.clip();

  // Dark equatorial rainforest belt, light boreal north.
  const bands = ctx.createLinearGradient(0, 0, 0, TEX_H);
  bands.addColorStop(0.0, 'rgba(190, 205, 200, 0.55)'); // arctic tundra
  bands.addColorStop(0.22, 'rgba(60, 90, 60, 0.45)');   // taiga
  bands.addColorStop(0.5, 'rgba(30, 85, 35, 0.5)');     // jungle
  bands.addColorStop(0.78, 'rgba(70, 100, 55, 0.35)');
  bands.addColorStop(1.0, 'rgba(200, 215, 215, 0.6)');
  ctx.fillStyle = bands;
  ctx.fillRect(0, 0, TEX_W, TEX_H);

  // Deserts: sandy blobs with a soft edge.
  for (const [lon, lat, degR] of DESERTS) {
    const { x, y } = lonLatToXY(lon, lat);
    const r = degToPx(degR);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(200, 168, 105, 0.85)');
    grad.addColorStop(0.6, 'rgba(190, 158, 100, 0.55)');
    grad.addColorStop(1, 'rgba(180, 150, 95, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Terrain noise: patches of forest, dry grass and bare rock.
  for (let i = 0; i < 1400; i++) {
    const x = Math.random() * TEX_W;
    const y = Math.random() * TEX_H;
    const r = 5 + Math.random() * 30;
    const dark = Math.random() < 0.5;
    paintSoftBlob(
      ctx, x, y, r,
      dark ? '25, 52, 25' : '155, 148, 108',
      0.06 + Math.random() * 0.14,
      1 + Math.random(), 0.8,
    );
  }

  // Mountain ranges: short dark strokes with a pale highlight just
  // above them, which is enough to suggest a lit ridge line.
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * TEX_W;
    const y = Math.random() * TEX_H;
    const len = 40 + Math.random() * 160;
    const angle = (Math.random() - 0.5) * Math.PI;
    const dx = Math.cos(angle) * len;
    const dy = Math.sin(angle) * len * 0.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + dx * 0.5, y + dy * 0.5 - 18, x + dx, y + dy);
    ctx.strokeStyle = 'rgba(48, 42, 32, 0.30)';
    ctx.lineWidth = 6 + Math.random() * 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y - 5);
    ctx.quadraticCurveTo(x + dx * 0.5, y + dy * 0.5 - 23, x + dx, y + dy - 5);
    ctx.strokeStyle = 'rgba(200, 195, 175, 0.18)';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // Beaches: the same coastline stroke again, but clipped to land, so
  // only the inner half shows as a thin sandy edge.
  ctx.beginPath();
  appendLandPath(ctx);
  ctx.strokeStyle = 'rgba(214, 196, 142, 0.28)';
  ctx.lineWidth = 14;
  ctx.stroke();
  ctx.strokeStyle = 'rgba(224, 208, 158, 0.30)';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.restore();

  // --- Ice caps ------------------------------------------------------------
  // Antarctica is a solid cap; the Arctic is sea ice, so it's softer.
  const south = ctx.createLinearGradient(0, TEX_H * 0.86, 0, TEX_H);
  south.addColorStop(0, 'rgba(238, 246, 252, 0)');
  south.addColorStop(0.45, 'rgba(238, 246, 252, 0.9)');
  south.addColorStop(1, 'rgba(255, 255, 255, 1)');
  ctx.fillStyle = south;
  ctx.fillRect(0, TEX_H * 0.86, TEX_W, TEX_H * 0.14);

  const north = ctx.createLinearGradient(0, 0, 0, TEX_H * 0.1);
  north.addColorStop(0, 'rgba(240, 248, 255, 0.95)');
  north.addColorStop(1, 'rgba(240, 248, 255, 0)');
  ctx.fillStyle = north;
  ctx.fillRect(0, 0, TEX_W, TEX_H * 0.1);

  return toTexture(ctx);
}

function makeCloudTexture() {
  const ctx = newCanvasCtx();
  // Transparent base — anywhere we don't paint, you see the ground.
  ctx.clearRect(0, 0, TEX_W, TEX_H);

  // Real cloud cover is banded: a wet band at the equator, dry bands
  // around 30 degrees, storm tracks around 55 degrees. `bandDensity`
  // returns how likely a cloud is at a given latitude.
  function bandDensity(lat) {
    const equator = Math.exp(-((lat / 12) ** 2));
    const stormN = Math.exp(-(((lat - 55) / 16) ** 2));
    const stormS = Math.exp(-(((lat + 55) / 16) ** 2));
    return 0.25 + 0.75 * Math.max(equator, Math.max(stormN, stormS));
  }

  const CLUMPS = 600;
  for (let i = 0; i < CLUMPS; i++) {
    const lon = Math.random() * 360 - 180;
    const lat = Math.random() * 170 - 85;
    if (Math.random() > bandDensity(lat)) continue;

    const { x, y } = lonLatToXY(lon, lat);
    // Each "clump" is a scatter of small soft puffs, stretched
    // horizontally because winds smear weather along latitude lines.
    const puffs = 8 + Math.floor(Math.random() * 12);
    const spread = 16 + Math.random() * 50;
    for (let p = 0; p < puffs; p++) {
      const px = x + (Math.random() - 0.5) * spread * 2.6;
      const py = y + (Math.random() - 0.5) * spread * 0.7;
      const r = 5 + Math.random() * 14;
      paintSoftBlob(ctx, px, py, r, '255, 255, 255',
        0.18 + Math.random() * 0.28, 2.2 + Math.random(), 0.85);
    }
  }

  const tex = new THREE.CanvasTexture(ctx.canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createEarth() {
  const geom = new THREE.SphereGeometry(EARTH_RADIUS, 96, 48);
  const surface = makeSurfaceTexture();
  // Anisotropy keeps the texture sharp where the sphere curves away
  // from us — without it the edges of the disc turn to mush.
  surface.anisotropy = 8;
  const mat = new THREE.MeshStandardMaterial({
    map: surface,
    roughness: 0.9,
    metalness: 0,
    // The scene's "sun" light only comes from one side, so the far half
    // of the planet would go pure black. A faint blue self-glow keeps
    // the night side readable, like earthshine.
    emissive: 0x0a1626,
  });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.copy(EARTH_POSITION);
  // Tilt the axis 23.4 degrees, like the real thing. This is why Earth
  // has seasons — and it makes the spin look less like a spinning top.
  mesh.rotation.z = THREE.MathUtils.degToRad(23.4);

  // Cloud layer: its own sphere, parented to Earth so it inherits the
  // position and tilt but keeps an independent spin.
  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_RADIUS * CLOUD_SCALE, 96, 48),
    new THREE.MeshStandardMaterial({
      map: makeCloudTexture(),
      transparent: true,
      opacity: 0.85,
      depthWrite: false, // don't let clouds occlude the atmosphere shell
      roughness: 1,
      metalness: 0,
    }),
  );
  mesh.add(clouds);

  // Atmosphere: a slightly bigger sphere rendered inside-out
  // (BackSide) and added to whatever is behind it. You only see it
  // where the sphere is nearly edge-on, which is exactly where a real
  // atmosphere piles up — so you get a blue rim for almost free.
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(EARTH_RADIUS * ATMO_SCALE, 64, 32),
    new THREE.MeshBasicMaterial({
      color: 0x5fa8ff,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    }),
  );
  mesh.add(atmosphere);

  function update(dt) {
    mesh.rotation.y += SPIN_RATE * dt;
    // The cloud mesh is a child, so this is spin *relative to* the
    // ground — the extra drift on top of Earth's own rotation.
    clouds.rotation.y += (CLOUD_SPIN_RATE - SPIN_RATE) * dt;
  }

  return { mesh, clouds, atmosphere, update };
}
