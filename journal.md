# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-05-11 — M1 kickoff (Earth Training Flight)

- **Plan:** Stand up the real module layout from program.md (`src/scene.js`, `src/ship.js`, `src/hud.js`, `src/input/index.js`, `src/input/keyboard.js`, `src/world/starfield.js`, `src/strings.js`) and replace the M0 cube with the flight scene. Title card on load gated by "press any key", then a 10k+ point starfield, a cone-shaped ship that flies with quaternion-based rotation, a smoothed chase camera, and a DOM-overlay "Tablet" HUD showing velocity / orientation / fps. M0's cube goes away.
- **Order:** (1) module split + `strings.js` + title card; (2) starfield; (3) ship + keyboard + quaternions + inertia + chase cam (tightly coupled, one commit); (4) HUD Tablet; (5) build verification + `LEARNINGS.md`. Commit per acceptance criterion turning green.
- **Educational note for Marco (LEARNINGS.md):** deltaTime, quaternions vs Euler (and why we use quaternions here), the chase-cam lerp.
- M0 review passed.

## 2026-05-11 — M0 kickoff

- **Plan:** Scaffold Vite vanilla-JS project in repo root, add `three` dependency, implement minimal rotating-cube scene in `src/main.js` with perspective camera, ambient + directional light, window-resize handling. Verify dev server boots on :5173 with no console errors.
- Doing it manually (writing `package.json`, `vite.config.js`, `index.html`, `src/main.js`) rather than running `npm create vite@latest` because the repo already contains `README.md` and `program.md` and the scaffolder doesn't merge cleanly into a non-empty directory. The output is equivalent.
- Node 22.17.0, npm.
