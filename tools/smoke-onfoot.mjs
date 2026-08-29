// On-foot smoke: fly into Castel Maggiore, press L to get out, watch the
// ship land itself and Vexo climb down, walk him around, and put him
// back in.
//
// The numbers here are the ones that go wrong quietly. A ladder that
// stops a metre above the grass, a ship parked with its nose in a hill,
// a walk speed that drifts when the gait code is touched, a man who can
// stroll through a wall — none of those throw, and none of them show up
// in a screenshot taken from the wrong angle.
//
// Run while `npm run dev` is up.
import { launchBrowser } from './lib/browser.mjs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const NOISE = [/GPU stall due to ReadPixels/i, /CONTEXT_LOST_WEBGL/i, /loseContext/i];
const isNoise = (t) => NOISE.some((re) => re.test(t));

const errors = [];
const warnings = [];
let failed = false;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failed = true;
}

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 900, height: 640 } });
// Watch any <audio> the game builds, so the sprint theme can be checked
// without the audio module having to expose itself for the test.
await page.addInitScript(() => {
  window.__audio = { made: [], plays: 0, el: null };
  const Real = window.Audio;
  window.Audio = function (src) {
    const el = new Real(src);
    window.__audio.made.push(el.src);
    window.__audio.el = el;
    const play = el.play.bind(el);
    el.play = () => { window.__audio.plays += 1; return play(); };
    return el;
  };
});
page.on('console', (m) => {
  const t = m.text();
  if (isNoise(t)) return;
  if (m.type() === 'error') errors.push(t);
  if (m.type() === 'warning') warnings.push(t);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

/** Wait for the disembark state machine to reach a state. */
async function waitForState(want, timeoutMs = 12000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const s = await page.evaluate(() => window.__superVexo.onFoot.state);
    if (s === want) return true;
    await page.waitForTimeout(80);
  }
  return false;
}

const state = () => page.evaluate(() => {
  const g = window.__superVexo;
  const f = g.onFoot;
  return {
    state: f.state,
    gait: f.vexo.gait,
    pos: f.position.toArray(),
    parked: g.surface.parked,
    shipScale: g.ship.mesh.scale.x,
    ladder: f.ladder.extension,
  };
});

// `peaceful=1` empties the camps. This file measures walking speeds,
// stamina and ladders over several hundred lines, and a bokoblin
// catching him halfway through spoils all three at once — a knockback
// reads as a faster sprint, a hit empties the stamina wheel, and the
// last heart leaves him on the floor where the ladder used to be. The
// camps have their own file.
await page.goto(`${URL}/?land=1&skipIntro=1&peaceful=1`, { waitUntil: 'load' });
await page.waitForTimeout(700);
// Dismiss the title card — `?land=1` drops us into town on the way out.
await page.keyboard.press('Space');
await page.waitForTimeout(600);

const inTown = await page.evaluate(() => {
  const g = window.__superVexo;
  return { surface: g.surface.active, scale: g.ship.mesh.scale.x };
});
check('landing puts the ship in town', inTown.surface);
// A 2.6-unit ship next to a 1.8 m man is a go-kart. See surface.js.
check('the ship grows to fighter size on the surface', inTown.scale === 4,
  `${inTown.scale}x`);

// --- Getting out, from wherever the ship is ----------------------------------
// Landing is not disembarking: put the ship down on the grass and it
// stays a ship, so you can look at something and take off again without
// a ladder every time you touch the ground.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.ship.mesh.position.y -= 60;
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(700);
check('landing alone does not throw the pilot out',
  (await state()).state === 'off', (await state()).state);

// Back up into the air: the offer stands anywhere over the town, and the
// ship flies itself down when you take it.
await page.evaluate(() => {
  const g = window.__superVexo;
  g.ship.mesh.position.y += 55;
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(400);
const aloft = await page.evaluate(() => ({
  alt: Math.round(window.__superVexo.surface.altitude(window.__superVexo.ship)),
  state: window.__superVexo.onFoot.state,
  prompt: (() => {
    const el = document.getElementById('foot-prompt');
    return el && !el.hidden ? el.textContent : null;
  })(),
}));
check('the way out is offered in the air, not just on the ground',
  /climb out/i.test(aloft.prompt ?? ''), `${aloft.alt}m up: ${aloft.prompt ?? 'no prompt'}`);

await page.keyboard.press('KeyL');
check('L starts the sequence from the air', await waitForState('settle', 2000));
const camePartWayDown = await page.evaluate(async () => {
  const g = window.__superVexo;
  const before = g.surface.altitude(g.ship);
  await new Promise((r) => setTimeout(r, 600));
  return { before: Math.round(before), after: Math.round(g.surface.altitude(g.ship)) };
});
check('the ship flies itself down rather than teleporting',
  camePartWayDown.after < camePartWayDown.before - 5,
  `${camePartWayDown.before}m → ${camePartWayDown.after}m in 0.6s`);
// Generous: pressing L at 60 m buys a three-and-a-half second descent
// before the ladder is even out, and this runs at headless frame rates.
check('the ladder deploys', await waitForState('deploy', 9000));
check('Vexo climbs down it', await waitForState('down', 6000));
check('control passes to him at the bottom', await waitForState('walk', 8000));

const onFoot = await state();
check('the ship is parked while he is out', onFoot.parked);
check('the ladder is fully out', onFoot.ladder === 1, `extension ${onFoot.ladder}`);

// --- The parked rig ----------------------------------------------------------
const rig = await page.evaluate(() => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const ship = g.ship.mesh;
  ship.updateWorldMatrix(true, true);
  const Vec = ship.position.constructor;
  const v = new Vec();
  let lowest = Infinity;
  ship.traverse((o) => {
    if (!o.isMesh) return;
    const p = o.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      o.localToWorld(v);
      if (v.y < lowest) lowest = v.y;
    }
  });
  // Ground under the hull, in world Y. The ship parks on the HIGHEST
  // ground under its own footprint (onFoot.js explains why), so that is
  // the number the belly has to be measured against — on a slope the
  // ground under the centre can be most of a metre lower.
  const town = g.surface.world;
  const ORIGIN_Y = -20000;
  const groundAt = (x, z) => ORIGIN_Y + town.groundHeightAt(x, z);
  const yaw = new (ship.rotation.constructor)().setFromQuaternion(ship.quaternion, 'YXZ').y;
  const fx = Math.sin(yaw); const fz = Math.cos(yaw);
  let gShip = groundAt(ship.position.x, ship.position.z);
  for (const [along, across] of [[1.4, 0], [-1.25, 0], [0, 0.9], [0, -0.9]]) {
    const x = ship.position.x + (fx * along + fz * across) * ship.scale.x;
    const z = ship.position.z + (fz * along - fx * across) * ship.scale.x;
    gShip = Math.max(gShip, groundAt(x, z));
  }
  const base = f.ladder.group.position;
  const gLadder = ORIGIN_Y + town.groundHeightAt(base.x, base.z);
  return {
    bellyAboveGround: +(lowest - gShip).toFixed(2),
    ladderFootGap: +((base.y - f.ladder.height) - gLadder).toFixed(2),
    feetAboveGround: +(f.position.y
      - (ORIGIN_Y + town.groundHeightAt(f.position.x, f.position.z))).toFixed(3),
    ladderHeight: +f.ladder.height.toFixed(2),
    level: +Math.abs(ship.rotation.x).toFixed(3) + Math.abs(ship.rotation.z),
  };
});
// Parked, not buried and not hovering: the hull sits within a metre of
// the ground it came down on.
check('the ship rests on the ground', rig.bellyAboveGround > -0.05 && rig.bellyAboveGround < 0.5,
  `belly ${rig.bellyAboveGround}m above the highest ground under the hull`);
check('the ladder reaches the street', Math.abs(rig.ladderFootGap) < 0.05,
  `foot ${rig.ladderFootGap}m off the ground, ${rig.ladderHeight}m of ladder`);
check('he stands on the ground, not in it', Math.abs(rig.feetAboveGround) < 0.02,
  `feet at ${rig.feetAboveGround}m`);

// --- Walking ------------------------------------------------------------------
async function walkFor(ms, { run = false } = {}) {
  if (run) await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyW');
  // Measured against the game's OWN clock, not the wall clock. The loop
  // caps dt at 100ms per frame (main.js), so at the frame rates a
  // headless browser manages, a second of wall time can be two thirds of
  // a second of game time — and the same walk then reads 2.4 m/s on one
  // run and 1.5 on the next.
  const moved = await page.evaluate(async (ms) => {
    const f = window.__superVexo.onFoot;
    const from = { x: f.position.x, z: f.position.z };
    let simulated = 0;
    let last = performance.now();
    const t0 = last;
    while (performance.now() - t0 < ms) {
      await new Promise((r) => requestAnimationFrame(r));
      const now = performance.now();
      simulated += Math.min((now - last) / 1000, 0.1);
      last = now;
    }
    return {
      distance: Math.hypot(f.position.x - from.x, f.position.z - from.z),
      simulated,
    };
  }, ms);
  await page.keyboard.up('KeyW');
  if (run) await page.keyboard.up('ShiftLeft');
  return moved.simulated > 0.1 ? moved.distance / moved.simulated : 0;
}

// Stand him in open ground before timing anything. He steps off the
// ladder wherever the ship happened to park, which is often a few metres
// from a wall — and a walk speed measured into a wall is the wall's
// speed, not his. (The block that used to be here computed a clear
// direction and then threw it away, so the timing came out different
// every run.)
const openGround = await page.evaluate(() => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const town = g.surface.world;
  let best = null;
  for (let x = -200; x <= 200; x += 4) {
    for (let z = -200; z <= 200; z += 4) {
      if (!town.isClear(x, z, 14)) continue;
      const d = Math.hypot(x - g.ship.mesh.position.x, z - g.ship.mesh.position.z);
      if (d > 40 && (best === null || d < best.d)) best = { x, z, d };
    }
  }
  if (best) {
    f.position.x = best.x;
    f.position.z = best.z;
  }
  return best;
});
check('there is open ground to walk in', openGround != null,
  openGround ? `14m clear at ${openGround.x},${openGround.z}` : 'none found');
await page.waitForTimeout(500);   // let the camera settle behind him
const walkSpeed = await walkFor(1200);
// Three speeds, as in Tears of the Kingdom: how far the stick is pushed
// picks between a walk and a jog, and sprinting is a button that spends
// stamina. A keyboard has no half-press, so W alone is the jog.
check('the stick hard over is a jog', walkSpeed > 2.8 && walkSpeed < 3.8,
  `${walkSpeed.toFixed(2)} m/s`);

// A gentle push is a walk. Driven through update() directly, because a
// keyboard cannot press a stick halfway.
const gentle = await page.evaluate(async () => {
  const f = window.__superVexo.onFoot;
  const axes = { yaw: 0, throttle: 0, stickYaw: 0, stickThrottle: 0.35, lookX: 0, lookY: 0 };
  for (let i = 0; i < 25; i++) f.update(0.016, axes);      // reach speed
  const from = { x: f.position.x, z: f.position.z };
  for (let i = 0; i < 60; i++) f.update(0.016, axes);      // ~1s of walking
  return Math.hypot(f.position.x - from.x, f.position.z - from.z) / (60 * 0.016);
});
check('a gentle push is a walk', gentle > 0.7 && gentle < 1.8, `${gentle.toFixed(2)} m/s`);

const runSpeed = await walkFor(1000, { run: true });
check('and Shift sprints', runSpeed > 5.2 && runSpeed < 7.0,
  `${runSpeed.toFixed(2)} m/s vs ${walkSpeed.toFixed(2)} jogging`);

// The sprint theme. Checked through a wrapped Audio constructor rather
// than by listening, and it matters that it is LAZY: nothing should be
// downloaded until the first sprint.
const music = await page.evaluate(() => {
  const a = window.__audio;
  const el = a.el;
  return {
    made: a.made.length, plays: a.plays, src: a.made[0] ?? '',
    playing: el ? !el.paused : false,
    volume: el ? +el.volume.toFixed(2) : 0,
    loops: el ? el.loop : false,
    failed: el?.error?.code ?? null,
  };
});
check('sprinting starts the theme', music.plays > 0 && music.playing,
  `${music.plays} play(s), ${music.playing ? 'playing' : 'silent'}`);
check('the theme is the right file and it loaded',
  /invincibility_theme/.test(music.src) && music.failed === null,
  music.failed === null ? music.src.split('/').pop() : `media error ${music.failed}`);
// Just the loop flag: the volume here is whatever the fade happens to
// be passing through when the sample lands, and asserting on that made
// this flap between 0.18 and 0.32.
check('and it loops while he runs', music.loops, `loop=${music.loops}`);

await page.waitForTimeout(900);   // let the fade-out finish
const musicAfter = await page.evaluate(() => {
  const el = window.__audio.el;
  return { paused: el ? el.paused : true, volume: el ? +el.volume.toFixed(2) : 0 };
});
check('and it stops when he stops sprinting',
  musicAfter.paused && musicAfter.volume === 0,
  `${musicAfter.paused ? 'paused' : 'still playing'} at volume ${musicAfter.volume}`);

// --- Shots come out of the gun ------------------------------------------------
// They used to start at a point on his chest, because that is what the
// code picked when it needed somewhere to draw from. Nothing about
// aiming fixes where a line STARTS, and it is obvious the moment you
// fire: a tracer out of his sternum.
await page.keyboard.down('Space');
const shotFrom = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const V = f.position.constructor;
  const muzzle = new V();
  let start = null;
  let atMuzzle = null;
  // Tracers live 90ms, so watch a few frames rather than sampling one.
  for (let i = 0; i < 120 && !start; i++) {
    await new Promise((r) => requestAnimationFrame(r));
    for (const line of g.tracers.group.children) {
      if (!line.visible || start) continue;
      const p = line.geometry.attributes.position;
      start = new V(p.getX(0), p.getY(0), p.getZ(0));
      atMuzzle = f.vexo.getMuzzle(muzzle) ? muzzle.clone() : null;
    }
  }
  if (!start || !atMuzzle) return null;
  const chest = f.position.clone();
  chest.y += 1.12;
  return {
    fromMuzzle: +start.distanceTo(atMuzzle).toFixed(3),
    fromChest: +start.distanceTo(chest).toFixed(3),
  };
});
await page.keyboard.up('Space');
check('the shot comes out of the muzzle',
  shotFrom != null && shotFrom.fromMuzzle < 0.05,
  shotFrom ? `${shotFrom.fromMuzzle}m from the barrel` : 'no tracer seen');
check('and not out of his chest',
  shotFrom != null && shotFrom.fromChest > 0.3,
  shotFrom ? `${shotFrom.fromChest}m from where it used to start` : '');

// --- The stamina wheel --------------------------------------------------------
const stamina = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const wheel = () => {
    const el = document.getElementById('stamina-wheel');
    return el && !el.hidden;
  };
  const walking = { yaw: 0, throttle: 0, stickYaw: 0, stickThrottle: 1, lookX: 0, lookY: 0 };
  // Let it top up first, then sprint it dry. Shift is held by the
  // caller; `update` reads the real keyboard for the sprint button.
  for (let i = 0; i < 120; i++) f.update(0.016, walking);
  const full = f.stamina;
  const wheelWhenFull = wheel();
  return { full, wheelWhenFull };
});
check('the wheel fills up and then gets out of the way',
  stamina.full > 0.99 && !stamina.wheelWhenFull,
  `level ${stamina.full.toFixed(2)}, wheel ${stamina.wheelWhenFull ? 'shown' : 'hidden'}`);

await page.keyboard.down('ShiftLeft');
const spent = await page.evaluate(async () => {
  const f = window.__superVexo.onFoot;
  const sprinting = { yaw: 0, throttle: 0, stickYaw: 0, stickThrottle: 1, lookX: 0, lookY: 0 };
  for (let i = 0; i < 60; i++) f.update(0.016, sprinting);        // ~1s
  const afterASecond = f.stamina;
  const shown = !document.getElementById('stamina-wheel').hidden;
  // …and keep going until it is gone.
  let dry = 0;
  for (let i = 0; i < 600 && !f.winded; i++) { f.update(0.016, sprinting); dry = i; }
  const windedNow = f.winded;
  // Winded: how fast can he move now? Give the momentum from the sprint
  // time to bleed off first, or this measures the deceleration.
  for (let i = 0; i < 45; i++) f.update(0.016, sprinting);
  const from = { x: f.position.x, z: f.position.z };
  for (let i = 0; i < 60; i++) f.update(0.016, sprinting);
  const speedWinded = Math.hypot(f.position.x - from.x, f.position.z - from.z) / (60 * 0.016);
  return { afterASecond, shown, dry, windedNow, speedWinded };
});
await page.keyboard.up('ShiftLeft');
check('sprinting spends the wheel', spent.afterASecond < 0.85,
  `${spent.afterASecond.toFixed(2)} left after a second`);
check('and the wheel shows while it drains', spent.shown);
check('running it dry leaves him winded', spent.windedNow);
// Winded is the whole point of the wheel: he can't sprint out of trouble.
check('winded means walking pace, button or no button',
  spent.speedWinded < 2.0, `${spent.speedWinded.toFixed(2)} m/s while blown`);

const recovered = await page.evaluate(async () => {
  const f = window.__superVexo.onFoot;
  const still = { yaw: 0, throttle: 0, stickYaw: 0, stickThrottle: 0, lookX: 0, lookY: 0 };
  for (let i = 0; i < 300; i++) f.update(0.016, still);     // ~5s standing
  return { level: f.stamina, winded: f.winded };
});
check('and it comes back when he stops', recovered.level > 0.9 && !recovered.winded,
  `${recovered.level.toFixed(2)} after five seconds`);

// Which way is left? Not a matter of opinion: the camera's own +X axis,
// straight out of its world matrix, is the right of the screen. Hold a
// key, see which side his nose swings toward. This exists because the
// first version had the sign backwards — A turned him right and D
// turned him left, and nothing else in this file could tell.
async function turnDirection(key) {
  const before = await page.evaluate(() => {
    const g = window.__superVexo;
    const m = g.camera.matrixWorld.elements;
    const y = g.onFoot.vexo.group.rotation.y;
    return { right: [m[0], m[2]], forward: [Math.sin(y), Math.cos(y)] };
  });
  await page.keyboard.down(key);
  await page.waitForTimeout(450);
  await page.keyboard.up(key);
  await page.waitForTimeout(250);
  const after = await page.evaluate(() => {
    const y = window.__superVexo.onFoot.vexo.group.rotation.y;
    return [Math.sin(y), Math.cos(y)];
  });
  const dx = after[0] - before.forward[0];
  const dz = after[1] - before.forward[1];
  const towardScreenRight = dx * before.right[0] + dz * before.right[1];
  return { side: towardScreenRight > 0 ? 'right' : 'left', amount: Math.abs(towardScreenRight) };
}
const leftTurn = await turnDirection('KeyA');
const rightTurn = await turnDirection('KeyD');
check('A turns him left', leftTurn.side === 'left' && leftTurn.amount > 0.2,
  `${leftTurn.side} (${leftTurn.amount.toFixed(2)})`);
check('D turns him right', rightTurn.side === 'right' && rightTurn.amount > 0.2,
  `${rightTurn.side} (${rightTurn.amount.toFixed(2)})`);

// He carries a step or so past the key release now — the velocity eases
// down rather than switching off — so give the momentum time to run out
// before asking whether he has stopped.
await page.waitForTimeout(600);
const gaits = await page.evaluate(() => ({ still: window.__superVexo.onFoot.vexo.gait }));
check('he comes to rest when the stick is centred', gaits.still === 'idle', gaits.still);

// --- The walk cycle keeps him on the ground ----------------------------------
// The body's height through the cycle is derived from the leg angles
// (vexo.js: lowestSole), not authored, precisely so the stance foot
// stays planted. If that maths ever disagrees with the geometry he
// wades through the pavement or trots along above it — and at a glance,
// mid-stride, neither is obvious.
const soleTrack = [];
await page.keyboard.down('KeyW');
for (let i = 0; i < 10; i++) {
  await page.waitForTimeout(90);
  soleTrack.push(await page.evaluate(() => {
    const g = window.__superVexo;
    const f = g.onFoot;
    const root = f.vexo.group;
    root.updateWorldMatrix(true, true);
    const V = root.position.constructor;
    const v = new V();
    let lowest = Infinity;
    root.traverse((o) => {
      if (!o.isMesh) return;
      const p = o.geometry.attributes.position;
      for (let k = 0; k < p.count; k++) {
        v.fromBufferAttribute(p, k);
        o.localToWorld(v);
        if (v.y < lowest) lowest = v.y;
      }
    });
    const town = g.surface.world;
    const ground = -20000 + town.groundHeightAt(f.position.x, f.position.z);
    return +(lowest - ground).toFixed(3);
  }));
}
await page.keyboard.up('KeyW');
const worstSink = Math.min(...soleTrack);
const worstFloat = Math.max(...soleTrack);
check('his feet stay on the road while he walks',
  worstSink > -0.06 && worstFloat < 0.06,
  `sole between ${worstSink}m and ${worstFloat}m of the ground over ${soleTrack.length} frames`);
// A walk that never lifts a foot is a shuffle: the swing foot has to
// leave the ground, so the two ends of that range must differ.
check('and one foot actually lifts', worstFloat - worstSink > 0.005,
  `${((worstFloat - worstSink) * 100).toFixed(1)}cm of movement`);

// --- Looking around on foot --------------------------------------------------
// Two things to prove, and the second is the one that matters: the
// camera turns when the phone turns, and it STAYS THERE when the phone
// stops. Driven through real DeviceOrientationEvents, so this covers the
// whole chain: sensor → input.sample() → camera.
const gyroLook = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  // Open ground first: the boom swings wide to see past a wall or the
  // ship, and a camera that isn't behind him has nothing to say about
  // which way "behind him" moved.
  const town = g.surface.world;
  let best = null;
  for (let x = -200; x <= 200; x += 4) {
    for (let z = -200; z <= 200; z += 4) {
      if (!town.isClear(x, z, 14)) continue;
      const d = Math.hypot(x - g.ship.mesh.position.x, z - g.ship.mesh.position.z);
      if (d > 40 && (best === null || d < best.d)) best = { x, z, d };
    }
  }
  if (best) { f.position.x = best.x; f.position.z = best.z; }
  await new Promise((r) => setTimeout(r, 1800));

  const fire = (beta, gamma) => window.dispatchEvent(
    new DeviceOrientationEvent('deviceorientation', { alpha: 0, beta, gamma }),
  );
  const hold = async (beta, gamma, ms) => {
    const t0 = performance.now();
    while (performance.now() - t0 < ms) {
      fire(beta, gamma);
      await new Promise((r) => setTimeout(r, 40));
    }
  };
  const swing = () => {
    const cam = g.camera.position;
    const p = f.position;
    const a = Math.atan2(cam.x - p.x, cam.z - p.z);
    let d = a - (f.vexo.group.rotation.y + Math.PI);
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    return d;
  };
  await hold(0, 0, 700);
  const level = swing();
  // Turn the phone 30 degrees to the right, in steps, then hold it there.
  for (let deg = 0; deg <= 30; deg += 3) await hold(0, deg, 60);
  const turned = swing();
  // Keep holding it at 30: a rate control does nothing more, an absolute
  // one would sit at whatever the tilt maps to.
  await hold(0, 30, 1200);
  const held = swing();
  return { level, turned, held };
});
check('level, the walking camera sits behind him',
  Math.abs(gyroLook.level) < 0.15, `${gyroLook.level.toFixed(2)} rad off`);
check('turning the phone turns the camera',
  Math.abs(gyroLook.turned - gyroLook.level) > 0.3,
  `${gyroLook.level.toFixed(2)} → ${gyroLook.turned.toFixed(2)} rad`);
check('and it stays there while the phone is held still',
  Math.abs(gyroLook.held - gyroLook.turned) < 0.12,
  `${gyroLook.turned.toFixed(2)} → ${gyroLook.held.toFixed(2)} rad after a second`);

// The stick is a rate too: push it and the camera keeps going, let go
// and it holds. It used to spring back to behind him the instant the
// stick was released, which is what Marco reported.
const stickLook = await page.evaluate(async () => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const swing = () => {
    const cam = g.camera.position;
    const p = f.position;
    const a = Math.atan2(cam.x - p.x, cam.z - p.z);
    let d = a - (f.vexo.group.rotation.y + Math.PI);
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    return d;
  };
  // Drive the look axis directly: no pad is attached to a headless
  // browser, and this is the same number a right stick would produce.
  // A fixed count of fixed-dt updates rather than a wall-clock loop —
  // at headless frame rates "hold it for 700ms" is however many frames
  // the machine felt like giving us, which made this flap.
  const before = swing();
  const held = { throttle: 0, yaw: 0, stickYaw: 0, stickThrottle: 0, lookX: 1, lookY: 0 };
  for (let i = 0; i < 40; i++) f.update(0.016, held);
  // Those 40 updates all landed in one tick, so the camera's own spring
  // is still catching up with where the stick put the goal. Let it
  // arrive before reading, or "it kept moving after I let go" is just
  // the spring finishing.
  await new Promise((r) => setTimeout(r, 500));
  const pushed = swing();
  await new Promise((r) => setTimeout(r, 900));   // released: does it spring back?
  const released = swing();
  return { before, pushed, released };
});
check('the look stick turns the camera',
  Math.abs(stickLook.pushed - stickLook.before) > 0.4,
  `${stickLook.before.toFixed(2)} → ${stickLook.pushed.toFixed(2)} rad`);
check('and the view stays where it was left',
  Math.abs(stickLook.released - stickLook.pushed) < 0.15,
  `${stickLook.pushed.toFixed(2)} → ${stickLook.released.toFixed(2)} rad after release`);

// --- Ground too steep to climb -------------------------------------------------
// There are no buildings in this world. What stops a walker now is the
// ground itself: anything past about 38° sheds him back down it, which
// is what keeps him off a dune's slipface and out of the mountains he
// has no business climbing.
const steep = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  for (let i = 1; i < 20000; i++) {
    const r = 40 * Math.sqrt(i);
    const x = Math.cos(i * 0.7) * r;
    const z = Math.sin(i * 0.7) * r;
    const s = w.terrain.sampleAt(x, z, 2);
    if (s.slopeDeg < 45 || s.height < 5) continue;
    const out = w.resolveWalk(x, z, 0.38, [0, 0]);
    return {
      at: [Math.round(x), Math.round(z)],
      slope: +s.slopeDeg.toFixed(1),
      moved: +Math.hypot(out[0] - x, out[1] - z).toFixed(2),
      // Pushed DOWNHILL, not just anywhere.
      downhill: w.groundHeightAt(out[0], out[1]) < s.height,
    };
  }
  return null;
});
check('ground too steep to climb pushes him back down',
  steep != null && steep.moved > 0.2 && steep.downhill,
  steep ? `${steep.slope}° at ${steep.at}, moved ${steep.moved}m downhill` : 'no cliff found');

// And gentle ground does not, or every walk would be a fight with the
// hillside.
const walkable = await page.evaluate(() => {
  const w = window.__superVexo.surface.world;
  for (let i = 1; i < 20000; i++) {
    const r = 40 * Math.sqrt(i);
    const x = Math.cos(i * 0.7) * r;
    const z = Math.sin(i * 0.7) * r;
    const s = w.terrain.sampleAt(x, z, 2);
    if (s.slopeDeg > 12 || s.height < 5) continue;
    const out = w.resolveWalk(x, z, 0.38, [0, 0]);
    return { moved: +Math.hypot(out[0] - x, out[1] - z).toFixed(3), slope: +s.slopeDeg.toFixed(1) };
  }
  return null;
});
check('and walkable ground leaves him alone',
  walkable != null && walkable.moved === 0, walkable ? `${walkable.slope}°, moved ${walkable.moved}m` : '');

// --- Boarding -----------------------------------------------------------------
await page.evaluate(() => {
  const g = window.__superVexo;
  const f = g.onFoot;
  const base = f.ladder.group.position;
  f.position.x = base.x + 1;
  f.position.z = base.z + 1;
});
await page.waitForTimeout(300);
const prompt = await page.evaluate(() => {
  const el = document.getElementById('foot-prompt');
  const g = window.__superVexo;
  const text = el && !el.hidden ? el.textContent : null;
  // If he is on the floor with no hearts left, a missing prompt is not
  // a prompt bug — it is a bokoblin having caught him somewhere in the
  // last four hundred lines of this file. Say which it was.
  return text ?? `no prompt (state ${g.onFoot.state}, ${g.onFoot.hearts} hearts,`
    + ` down ${g.onFoot.down}, sign ${g.gameOver.isOpen})`;
});
check('standing at the ladder offers a way back in', /climb back in/i.test(prompt ?? ''),
  prompt ?? 'no prompt');

await page.keyboard.press('KeyL');
check('he climbs back up', await waitForState('up', 2000));
check('the sequence hands the ship back', await waitForState('off', 10000));

const after = await state();
check('the ladder is stowed', after.ladder === 0, `extension ${after.ladder}`);
check('the ship is flyable again', !after.parked);

// Boarding must not roll straight back into another climb-out: the ship
// is still parked, so the offer stands, but only a fresh press takes it.
await page.waitForTimeout(700);
check('it does not immediately throw him back out',
  (await state()).state === 'off', (await state()).state);
check('the way out is offered again once he is aboard',
  await page.evaluate(() => {
    const el = document.getElementById('foot-prompt');
    return !!el && !el.hidden && /climb out/i.test(el.textContent);
  }));

// --- Nowhere to put a ladder ---------------------------------------------------
// Sitting inside a building (the ship doesn't collide with them) there is
// no room for a ladder on either side, so the climb-out has to say so
// rather than posting Vexo into a wall.
const blocked = await page.evaluate(() => {
  const g = window.__superVexo;
  const town = g.surface.world;
  const ship = g.ship.mesh;
  const home = { x: ship.position.x, z: ship.position.z };
  const yaw = new (ship.rotation.constructor)()
    .setFromQuaternion(ship.quaternion, 'YXZ').y;
  const fx = Math.sin(yaw);
  const fz = Math.cos(yaw);
  const scale = ship.scale.x;
  for (let x = -300; x <= 300; x += 2) {
    for (let z = -300; z <= 300; z += 2) {
      let walls = 0;
      for (const side of [-1, 1]) {
        const lx = x + (fx * 0.55 + fz * side * 0.5) * scale;
        const lz = z + (fz * 0.55 - fx * side * 0.5) * scale;
        if (!town.isClear(lx, lz, 1.2)) walls++;
      }
      if (walls === 2) {
        ship.position.x = x;
        ship.position.z = z;
        g.ship.velocity.set(0, 0, 0);
        return { home, at: [x, z] };
      }
    }
  }
  return null;
});
await page.waitForTimeout(300);
await page.keyboard.press('KeyL');
await page.waitForTimeout(300);
const refused = await page.evaluate(() => ({
  state: window.__superVexo.onFoot.state,
  prompt: document.getElementById('foot-prompt')?.textContent ?? '',
}));
check('a ship with no room for a ladder says so', refused.state === 'off',
  `state ${refused.state} at ${blocked ? blocked.at : '?'}`);
check('and explains why', /no room/i.test(refused.prompt), refused.prompt);
// Put it back somewhere it can actually park.
await page.evaluate((home) => {
  const g = window.__superVexo;
  g.ship.mesh.position.x = home.x;
  g.ship.mesh.position.z = home.z;
  g.ship.velocity.set(0, 0, 0);
}, blocked.home);
await page.waitForTimeout(2700);        // let the message time out

// --- Skipping ------------------------------------------------------------------
await page.evaluate(() => {
  const g = window.__superVexo;
  g.ship.mesh.position.y += 30;      // climb away…
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const g = window.__superVexo;
  // …and fly back down into the floor. Not merely back to where it was
  // parked: parking sits on the highest ground under the hull, which on
  // a slope is above the soft floor, and the floor is what touchdown
  // watches.
  g.ship.mesh.position.y -= 34;
  g.ship.velocity.set(0, 0, 0);
});
await page.waitForTimeout(700);
await page.keyboard.press('KeyL');
check('it can be done a second time', await waitForState('settle', 4000));
await page.waitForTimeout(500);           // clear the skip lockout
await page.keyboard.press('Space');
check('any button skips the cutscene', await waitForState('walk', 2500));

check('no console errors', errors.length === 0, errors.slice(0, 3).join(' | '));
check('no console warnings', warnings.length === 0, warnings.slice(0, 3).join(' | '));

await browser.close();
if (failed) {
  console.error('\nSMOKE FAILED');
  process.exit(1);
}
console.log('\nSMOKE PASSED');
