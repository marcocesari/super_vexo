# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-05-11 — M0 kickoff

- **Plan:** Scaffold Vite vanilla-JS project in repo root, add `three` dependency, implement minimal rotating-cube scene in `src/main.js` with perspective camera, ambient + directional light, window-resize handling. Verify dev server boots on :5173 with no console errors.
- Doing it manually (writing `package.json`, `vite.config.js`, `index.html`, `src/main.js`) rather than running `npm create vite@latest` because the repo already contains `README.md` and `program.md` and the scaffolder doesn't merge cleanly into a non-empty directory. The output is equivalent.
- Node 22.17.0, npm.
