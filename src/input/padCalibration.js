// Teaching the game an unfamiliar controller.
//
// `gamepad.js` reads the sticks off fixed axis numbers — throttle on
// axis 1, yaw on 0, the look stick on 2 and 3 — because that is what the
// Web Gamepad API's "standard mapping" promises, and it is exactly what
// the iOS wrapper synthesises. Plenty of desktop USB and Bluetooth pads
// promise nothing of the sort: they report `mapping: ''` and put their
// sticks wherever the manufacturer felt like. On one of those, pushing
// the stick moves an axis nobody is reading, and the game looks broken
// in the most confusing way there is — a control that does nothing at
// all.
//
// So we ask. Four pushes, one per axis the game cares about, and we
// watch which axis actually moved and which way. What comes out is the
// same little `{axisIndex, sign}` records `gamepad.js` already uses,
// plus a resting value, and it is stored against the pad's id so it is
// asked once per controller and never again.
//
// WHY A RESTING VALUE. A stick sits at 0 when nobody is touching it;
// a trigger pressed into an axis slot sits at -1. Without recording
// where an axis rests, a pad that puts a trigger on axis 1 reads as
// full throttle for ever, which is its own kind of broken. Everything
// is measured as a deviation from rest and rescaled so that a full push
// still reads 1.

const KEY = 'super-vexo/pads';

/** How far an axis must move from rest before we believe it was pushed. */
export const PUSH = 0.55;
/** …and how close to rest it must come back before the next step arms. */
export const RELEASE = 0.25;
/** How long a push must hold, in seconds, before it counts. */
export const HOLD = 0.18;
/** How long we watch an untouched pad to learn where its axes rest. */
export const NEUTRAL_TIME = 0.5;

// The four axes the game reads, in the order we ask for them, each with
// the direction the player is asked to push. The prompts live in
// `strings.js`; these ids are the link between the two.
export const STEPS = [
  { id: 'throttle', stick: 'left' },
  { id: 'yaw', stick: 'left' },
  { id: 'lookX', stick: 'right' },
  { id: 'lookY', stick: 'right' },
];

// --- Storage -------------------------------------------------------------------
//
// localStorage can throw — a private window, a browser with site data
// switched off — and a game that white-screens because it cannot
// remember a controller is a worse bug than one that asks twice.

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeAll(all) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
    return true;
  } catch {
    return false;
  }
}

/** What we know about this pad: its bindings, or that it was skipped. */
export function loadPad(padId) {
  if (!padId) return null;
  const entry = readAll()[padId];
  return entry && typeof entry === 'object' ? entry : null;
}

/** Remember a finished calibration. */
export function savePad(padId, bindings) {
  if (!padId) return false;
  const all = readAll();
  all[padId] = { bindings, at: Date.now() };
  return writeAll(all);
}

/**
 * Remember that the player was offered the setup and said no. Stored
 * rather than held in memory so the offer doesn't reappear on every
 * reload — being nagged by a game you have already told to leave you
 * alone is its own annoyance.
 */
export function skipPad(padId) {
  if (!padId) return false;
  const all = readAll();
  all[padId] = { skipped: true, at: Date.now() };
  return writeAll(all);
}

/** Forget a pad, so the setup can be run again from the System tab. */
export function forgetPad(padId) {
  if (!padId) return false;
  const all = readAll();
  delete all[padId];
  return writeAll(all);
}

// --- The calibrator ------------------------------------------------------------

/**
 * A little state machine driven by raw axis readings, one call per
 * frame. It knows nothing about the DOM: the screen in `padSetup.js`
 * asks it what to say and it answers.
 *
 * Phases: `neutral` (watching an untouched pad to learn where its axes
 * rest) → one phase per step, each of which is either `waiting` for a
 * push or `releasing` after one → `done`.
 */
export function createCalibrator() {
  let phase = 'neutral';
  let step = 0;
  let neutralFor = 0;
  /** @type {number[]} where each axis sits when nobody is touching it. */
  let rest = [];
  /** @type {Record<string, {axisIndex: number, sign: number, rest: number}>} */
  const found = {};
  // The axis currently being pushed, and for how long. A push has to
  // hold: an axis that flicks past on the way to another one should not
  // be able to claim a step.
  let holding = -1;
  let heldFor = 0;

  function usedAxes() {
    return new Set(Object.values(found).map((b) => b.axisIndex));
  }

  /**
   * The axis furthest from its resting place.
   *
   * `skipUsed` is the difference between the two questions we ask of
   * the sticks. Looking for the NEXT answer, an axis already spoken for
   * is not a candidate — pushing the left stick forward again must not
   * be able to answer "now push it left". Looking for the stick to come
   * home, every axis counts, including the one just recorded: that is
   * precisely the one the player is still holding.
   */
  function farthestAxis(axes, skipUsed) {
    const used = skipUsed ? usedAxes() : null;
    let best = -1;
    let bestDev = 0;
    for (let i = 0; i < axes.length; i++) {
      if (used?.has(i)) continue;
      const dev = (axes[i] ?? 0) - (rest[i] ?? 0);
      if (Math.abs(dev) > Math.abs(bestDev)) { best = i; bestDev = dev; }
    }
    return { axisIndex: best, dev: bestDev };
  }

  /** The axis being pushed for the current step, if one is far enough. */
  function pushedAxis(axes) {
    const f = farthestAxis(axes, true);
    return Math.abs(f.dev) >= PUSH ? f : null;
  }

  return {
    get phase() { return phase; },
    get stepIndex() { return step; },
    get step() { return STEPS[step] ?? null; },
    get bindings() { return { ...found }; },
    /** For the screen: which steps are answered, and with what. */
    get answers() { return STEPS.map((s) => ({ id: s.id, binding: found[s.id] ?? null })); },
    /** 0…1 through the neutral sample, for a progress line. */
    get neutralProgress() { return Math.min(1, neutralFor / NEUTRAL_TIME); },

    /**
     * @param {number[]} axes  the pad's raw axes this frame
     * @param {number} dt      seconds since the last frame
     * @returns {'neutral'|'waiting'|'releasing'|'done'} the phase after this frame
     */
    update(axes, dt) {
      if (phase === 'done' || !axes) return phase;

      if (phase === 'neutral') {
        // Learn where the axes sit. Taken as the LATEST reading rather
        // than an average: a pad polled before the browser has heard
        // from it reports all zeros for a frame or two, and averaging
        // that in drags a trigger's true -1 rest towards the middle.
        rest = axes.map((v) => v ?? 0);
        neutralFor += dt;
        if (neutralFor >= NEUTRAL_TIME) phase = 'waiting';
        return phase;
      }

      if (phase === 'releasing') {
        // Wait for the stick to come home, so one long push cannot
        // answer two questions in a row.
        const stillOut = Math.abs(farthestAxis(axes, false).dev) > RELEASE;
        if (!stillOut) phase = step >= STEPS.length ? 'done' : 'waiting';
        return phase;
      }

      const p = pushedAxis(axes);
      if (!p) { holding = -1; heldFor = 0; return phase; }
      if (p.axisIndex !== holding) { holding = p.axisIndex; heldFor = 0; }
      heldFor += dt;
      if (heldFor < HOLD) return phase;

      // Held long enough: this axis, pushed this way, is what the game
      // should read for this step. `sign` is chosen so that the push
      // the player was asked for comes out as +1 — the same convention
      // the built-in bindings in `gamepad.js` use.
      found[STEPS[step].id] = {
        axisIndex: p.axisIndex,
        sign: Math.sign(p.dev),
        rest: rest[p.axisIndex] ?? 0,
      };
      step += 1;
      holding = -1;
      heldFor = 0;
      phase = 'releasing';
      return phase;
    },

    /** Leave this step on its default binding and move to the next. */
    skipStep() {
      if (phase === 'done' || phase === 'neutral') return;
      step += 1;
      holding = -1;
      heldFor = 0;
      phase = step >= STEPS.length ? 'done' : 'releasing';
    },
  };
}
