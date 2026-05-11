# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-05-11 — M1 fix: defer the bundled script

- **Bug:** Loading `dist/index.html` in Chrome showed a black page with
  `Uncaught TypeError: Cannot read properties of null (reading
  'appendChild')`. Cause: I'd switched the build from ESM to IIFE and
  stripped `type="module"`. Module scripts are *deferred by default*;
  classic scripts are not. The script tag in `<head>` was executing
  before `<div id="app">` existed.
- **Fix:** Vite plugin now also adds `defer` to the entry script tag
  when stripping `type="module"`, so timing matches the original module
  behavior.
- **Regression net:** new `tools/smoke-build.mjs` (`npm run smoke:build`)
  runs the build, serves dist via a Node http server *and* opens
  `dist/index.html` directly via `file://`. Asserts the title card
  renders in both — exactly the failure mode we just hit.
- Passes against both. Eyeballed dev mode (60fps) by human earlier.

## 2026-05-11 — M1 close

- M1 implementation landed (commit 6e5449f). All acceptance criteria green.
- Added `LEARNINGS.md` with M1 educational notes (deltaTime, vectors,
  quaternions vs Euler, halflife-based smoothing, point-cloud starfield).
- Added Playwright smoke harness (`tools/smoke.mjs`, `npm run smoke`).
  It boots a headless browser against `npm run dev`, asserts: title card
  visible, dismisses on keypress, ship accumulates velocity under W,
  Tablet HUD ticks, and no console errors/warnings (with a small allow-
  list for known headless-driver perf notices and Playwright teardown).
- Polish: hide ship during TITLE state so it doesn't show through the
  title card; replaced ambient with a hemisphere light so the ship reads
  as 3D from any angle.
- Visual note: chase cam looks straight at the cone's base, which reads
  as a disc. Acceptable per spec ("cube or cone is fine"); already
  parked in `BACKLOG.md` to swap for a kenney.nl glTF later.
- **STOP — milestone boundary.** Awaiting human review before M2.

## 2026-05-11 — M1 kickoff (Earth Training Flight)

- **Plan:** Stand up the real module layout from program.md (`src/scene.js`, `src/ship.js`, `src/hud.js`, `src/input/index.js`, `src/input/keyboard.js`, `src/world/starfield.js`, `src/strings.js`) and replace the M0 cube with the flight scene. Title card on load gated by "press any key", then a 10k+ point starfield, a cone-shaped ship that flies with quaternion-based rotation, a smoothed chase camera, and a DOM-overlay "Tablet" HUD showing velocity / orientation / fps. M0's cube goes away.
- **Order:** (1) module split + `strings.js` + title card; (2) starfield; (3) ship + keyboard + quaternions + inertia + chase cam (tightly coupled, one commit); (4) HUD Tablet; (5) build verification + `LEARNINGS.md`. Commit per acceptance criterion turning green.
- **Educational note for Marco (LEARNINGS.md):** deltaTime, quaternions vs Euler (and why we use quaternions here), the chase-cam lerp.
- M0 review passed.

## 2026-05-11 — M0 kickoff

- **Plan:** Scaffold Vite vanilla-JS project in repo root, add `three` dependency, implement minimal rotating-cube scene in `src/main.js` with perspective camera, ambient + directional light, window-resize handling. Verify dev server boots on :5173 with no console errors.
- Doing it manually (writing `package.json`, `vite.config.js`, `index.html`, `src/main.js`) rather than running `npm create vite@latest` because the repo already contains `README.md` and `program.md` and the scaffolder doesn't merge cleanly into a non-empty directory. The output is equivalent.
- Node 22.17.0, npm.
