// The controller setup screen.
//
// Four questions, one per stick direction the game reads, and a live
// readout at the end so the answer can be seen to be right rather than
// taken on trust. The thinking about WHY a pad needs this at all, and
// what comes out of it, is in `src/input/padCalibration.js`; this file
// is only the screen.
//
// It offers itself once, unprompted, when a controller the game cannot
// read is plugged in — because the failure it fixes is a stick that
// does nothing, and a player holding a dead stick has no reason to go
// looking through menus for the cure. Say no and it is not asked again
// for that controller; it stays in the inventory's System tab for
// whenever it is wanted.
//
// Nothing here uses the sticks to navigate, for the obvious reason:
// this is the screen you are on BECAUSE the sticks do not work. Esc,
// any pad button, or the mouse.
import { strings } from './strings.js';
import { createCalibrator, STEPS, savePad, skipPad } from './input/padCalibration.js';

export function createPadSetup({ input }) {
  const root = document.createElement('div');
  root.id = 'pad-setup';
  root.className = 'screen-overlay';
  root.hidden = true;
  root.innerHTML = `
    <div class="screen-card screen-card--wide pad-setup">
      <h2 class="screen-card__title">${strings.padSetup.title}</h2>
      <p class="pad-setup__id" data-id></p>
      <p class="pad-setup__prompt" data-prompt></p>
      <p class="pad-setup__aside" data-aside></p>
      <ul class="pad-setup__steps" data-steps></ul>
      <div class="pad-setup__bars" data-bars hidden></div>
      <div class="screen-card__actions">
        <button class="screen-btn" data-skip type="button">${strings.padSetup.skipStep}</button>
        <button class="screen-btn" data-cancel type="button">${strings.padSetup.cancel}</button>
      </div>
      <p class="screen-card__hint">${strings.padSetup.hint}</p>
    </div>
  `;
  document.body.appendChild(root);
  const idEl = root.querySelector('[data-id]');
  const promptEl = root.querySelector('[data-prompt]');
  const asideEl = root.querySelector('[data-aside]');
  const stepsEl = root.querySelector('[data-steps]');
  const barsEl = root.querySelector('[data-bars]');
  const skipBtn = root.querySelector('[data-skip]');
  const cancelBtn = root.querySelector('[data-cancel]');

  // One row per axis in the "try it" readout at the end. Built once;
  // only the widths move.
  const barFills = {};
  for (const s of STEPS) {
    const row = document.createElement('div');
    row.className = 'pad-setup__bar';
    row.innerHTML = `
      <span class="pad-setup__bar-label">${strings.padSetup.labels[s.id]}</span>
      <span class="pad-setup__bar-track"><i data-fill></i></span>
    `;
    barFills[s.id] = row.querySelector('[data-fill]');
    barsEl.appendChild(row);
  }

  let open = false;
  let calibrator = null;
  let padId = null;
  let finished = false;
  let savedNote = '';

  function drawSteps() {
    stepsEl.innerHTML = '';
    const answers = calibrator ? calibrator.answers : STEPS.map((s) => ({ id: s.id, binding: null }));
    for (const [i, a] of answers.entries()) {
      const li = document.createElement('li');
      const current = calibrator && !finished && i === calibrator.stepIndex;
      li.className = 'pad-setup__step'
        + (a.binding ? ' pad-setup__step--done' : '')
        + (current ? ' pad-setup__step--now' : '');
      const value = a.binding
        ? strings.padSetup.axis
          .replace('{n}', String(a.binding.axisIndex))
          .replace('{dir}', a.binding.sign > 0 ? '+' : '−')
        : strings.padSetup.waiting;
      li.innerHTML = `
        <span class="pad-setup__step-label">${strings.padSetup.labels[a.id]}</span>
        <span class="pad-setup__step-value">${value}</span>
      `;
      stepsEl.appendChild(li);
    }
  }

  function draw() {
    if (!calibrator) return;
    if (finished) {
      promptEl.textContent = strings.padSetup.done;
      asideEl.textContent = savedNote;
      barsEl.hidden = false;
      skipBtn.hidden = true;
      cancelBtn.textContent = strings.padSetup.close;
      drawSteps();
      return;
    }
    const phase = calibrator.phase;
    if (phase === 'neutral') {
      promptEl.textContent = strings.padSetup.neutral;
      asideEl.textContent = strings.padSetup.intro;
    } else {
      const step = calibrator.step;
      promptEl.textContent = step ? strings.padSetup.prompts[step.id] : '';
      asideEl.textContent = phase === 'releasing'
        ? strings.padSetup.release
        : strings.padSetup.hold;
    }
    drawSteps();
  }

  /** Take the finished answers into use and remember them. */
  function finish() {
    finished = true;
    const bindings = calibrator.bindings;
    input.gamepad.useCalibration(bindings);
    const ok = Object.keys(bindings).length > 0 ? savePad(padId, bindings) : true;
    savedNote = ok ? strings.padSetup.saved : strings.padSetup.saveFailed;
    draw();
  }

  function close(declined) {
    if (!open) return false;
    open = false;
    root.hidden = true;
    // Saying "not now" is an answer: remember it, so a controller the
    // player is happy to use as-is stops asking on every load.
    if (declined && padId) {
      skipPad(padId);
      input.gamepad.noteSetupDeclined();
    }
    calibrator = null;
    return false;
  }

  function onKey(e) {
    if (!open) return;
    if (e.code === 'Escape') {
      e.preventDefault();
      if (finished) close(false); else skipStep();
    }
  }
  window.addEventListener('keydown', onKey);

  function skipStep() {
    if (!calibrator || finished) return;
    if (calibrator.phase === 'neutral') { close(true); return; }
    calibrator.skipStep();
    if (calibrator.phase === 'done') finish(); else draw();
  }

  skipBtn.addEventListener('click', skipStep);
  cancelBtn.addEventListener('click', () => close(!finished));

  return {
    get isOpen() { return open; },
    /** For tests: what the screen has worked out so far. */
    get bindings() { return calibrator ? calibrator.bindings : null; },
    get isFinished() { return finished; },

    open() {
      open = true;
      finished = false;
      savedNote = '';
      barsEl.hidden = true;
      skipBtn.hidden = false;
      cancelBtn.textContent = strings.padSetup.cancel;
      padId = input.gamepad.padId;
      calibrator = createCalibrator();
      idEl.textContent = padId ?? strings.padSetup.noPad;
      // Whatever button opened this screen is probably still down; it
      // must not immediately count as "skip this step".
      input.gamepad.suppressCurrentlyPressed();
      root.hidden = false;
      draw();
      return true;
    },

    close() { return close(false); },

    update(dt) {
      if (!open) return;
      if (finished) {
        // The live readout: the sticks, read through what we just
        // learned. Nothing is asked of the player here — this exists so
        // they can see for themselves that it took.
        const v = input.gamepad.readThrough(calibrator.bindings);
        for (const s of STEPS) {
          const val = Math.max(-1, Math.min(1, v[s.id] ?? 0));
          barFills[s.id].style.width = `${Math.abs(val) * 50}%`;
          barFills[s.id].style.left = val >= 0 ? '50%' : `${50 - Math.abs(val) * 50}%`;
          barFills[s.id].classList.toggle('pad-setup__bar-fill--neg', val < 0);
        }
        return;
      }
      // Any button on the pad skips the step in front of us — the way
      // out for a player with no keyboard, which on a phone or a
      // console-style setup is everybody.
      if (input.gamepad.consumeAnyJustPressed()) { skipStep(); return; }
      const before = calibrator.phase;
      const stepBefore = calibrator.stepIndex;
      calibrator.update(input.gamepad.rawAxes(), dt);
      if (calibrator.phase === 'done') { finish(); return; }
      if (calibrator.phase !== before || calibrator.stepIndex !== stepBefore) draw();
    },

    dispose() {
      window.removeEventListener('keydown', onKey);
      root.remove();
    },
  };
}
