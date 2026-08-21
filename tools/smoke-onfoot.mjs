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
import { chromium } from 'playwright';

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

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 640 } });
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

await page.goto(`${URL}/?land=1&skipIntro=1`, { waitUntil: 'load' });
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
  const town = g.surface.town;
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
  const before = (await state()).pos;
  if (run) await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyW');
  await page.waitForTimeout(ms);
  await page.keyboard.up('KeyW');
  if (run) await page.keyboard.up('ShiftLeft');
  const after = (await state()).pos;
  return Math.hypot(after[0] - before[0], after[2] - before[2]) / (ms / 1000);
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
  const town = g.surface.town;
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
check('he walks at a walking pace', walkSpeed > 1.6 && walkSpeed < 2.7,
  `${walkSpeed.toFixed(2)} m/s`);
const runSpeed = await walkFor(1000, { run: true });
check('Shift makes him run', runSpeed > walkSpeed + 1.2,
  `${runSpeed.toFixed(2)} m/s vs ${walkSpeed.toFixed(2)}`);

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

const gaits = await page.evaluate(async () => {
  const f = window.__superVexo.onFoot;
  const still = f.vexo.gait;
  return { still };
});
check('he stands still when the stick is centred', gaits.still === 'idle', gaits.still);

// --- Walls --------------------------------------------------------------------
const walls = await page.evaluate(() => {
  const town = window.__superVexo.surface.town;
  // Find a point inside a building by sweeping the neighbourhood, then
  // ask the walk resolver to get us out of it.
  for (let x = -300; x <= 300; x += 3) {
    for (let z = -300; z <= 300; z += 3) {
      if (town.isClear(x, z, 0.38)) continue;
      const out = town.resolveWalk(x, z, 0.38, [0, 0]);
      return {
        found: [x, z],
        pushed: out.map((n) => +n.toFixed(2)),
        moved: +Math.hypot(out[0] - x, out[1] - z).toFixed(2),
        clearNow: town.isClear(out[0], out[1], 0.36),
      };
    }
  }
  return null;
});
check('solid things are solid', walls != null && walls.clearNow,
  walls ? `pushed ${walls.moved}m out of the wall at ${walls.found}` : 'no wall found');

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
  return el && !el.hidden ? el.textContent : null;
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
  const town = g.surface.town;
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
