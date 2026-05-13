# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-05-11 — M5+ pick: Opening Cinematic

- Picked the opening castle-attack intro from program.md's M5+ menu —
  Marco's "polish pass before showing friends" option.
- **Plan:** 5–6 short scenes, ~20s total, fully skippable with any
  key. Mostly text-on-stylized-background with simple 3D vignettes
  for visual punch. State machine adds a new `CINEMATIC` state
  before `TITLE`.
- **Scenes:**
  1. "Long ago, in the kingdom of Astra…" — peaceful blue-green
     planet rotating in a dark starfield.
  2. "The kingdom lived in peace." — soft ambient particles.
  3. "Until Lord Draxos came." — dark angular ship enters from off
     screen, ominous red glow.
  4. "He kidnapped Princess Astra." — abduction beam from ship to
     planet.
  5. "And vanished into deep space." — warp-flash, both vanish.
  6. "The Scientists handed Vexo the Super Mega Tablet. Can you
     save her?" — Tablet shape in foreground, transitions into the
     normal title card.
- **Procedural assets:** new `world/kingdomPlanet.js` (green-blue
  earth-like sphere via canvas texture) and `world/draxosShip.js`
  (stretched octahedron + glowing red core). No asset files.
- **Audio:** dramatic stings via the existing `audio.chirp()` and
  `audio.fanfare()`. Two new helpers for low rumbles. Audio context
  starts on the first user gesture inside the cinematic (a
  "Press any key" skip prompt) just like M2's title-card behavior.
- **Educational note:** scene/state management + ease functions
  (cubic, smoothstep). Goes into LEARNINGS.
- **Test:** Playwright smoke verifies pressing Space during the
  cinematic skips it and arrives at the existing title card; no
  console errors.
- **Stop at boundary.** No commit until human confirms.

## 2026-05-11 — M4 close (approved by human)

- All M4 minimum criteria green, smoke passes 17/17 (M4 + reset), and
  the M1/M2/M3/build regressions are clean.
- Audited M0–M4 against `program.md`. Found and fixed:
  1. **Quality bar item**: "Game state resettable without page reload"
     was never implemented. Added R hotkey + `resetGame()` that
     restores ship, mission, rovers, upgrades, and `shipConfig`
     defaults; closes overlays. Audio context is preserved (autoplay
     gate is one-shot per user gesture).
  2. **Educational gap**: LEARNINGS.md had no M2 section. Wrote it —
     event-driven input, capability detection vs platform detection,
     monkey-patching the Web Gamepad API, sensor fusion (gyro+stick),
     calibration as "remember rest position".
  3. **M2 spec polish**: extracted gamepad axis mapping to
     `AXIS_BINDINGS` config table per "configurable in code" wording.
- Side fix encountered while smoking: Vite's dynamic `import()` of a
  module that's already been statically imported can return a
  different instance during HMR, making the smoke think upgrades
  didn't apply. Exposed `shipConfig` directly on the dev handle
  (`window.__superVexo.shipConfig`) so the smoke reads the
  canonical mutable instance.
- Not done (intentional): `src/world/station.js` and
  `public/{models,textures,sounds}/` from program.md's file layout —
  nothing in M0–M4 needs them; the project stays procedural.
- **STOP — milestone boundary.** Awaiting human direction on which
  M5+ option to start.

## 2026-05-11 — M4 kickoff (Mars Rover Mission)

- **Plan, in phases:**
  1. **Rovers.** Six rovers — Spirit, Opportunity, Curiosity,
     Perseverance, Sojourner, Zhurong — orbit Mars as "debris" around
     z=700, scattered ±40 each axis from the planet's center, kept
     outside Mars's radius. Each is a small `THREE.Group`: low-poly
     box body + 4 cylindrical wheels + a thin "antenna" line. Per-
     instance state: `{name, position, fixed, creditValue, repairProgress}`.
  2. **Mission state.** `src/mission.js`: rovers list, total credits,
     `remaining()`, `creditsForFix()`. Tablet adds a row for
     "Rovers: X/Y" and "Credits: N".
  3. **Approach detection.** Each frame, find the nearest unfixed
     rover within HACK_RADIUS (8) AND below HACK_MAX_SPEED (8). When
     present, surface in Tablet: "Hold H to hack: PERSEVERANCE".
  4. **Hold-to-repair.** Holding H accumulates `repairProgress` over
     2s on the in-range rover. Progress bar in Tablet. Release drops
     progress to 0 (no half-saves). On 100% → fixed, credits added,
     repair effect plays.
  5. **Repair effect.** Brief expanding-ring of sparkle particles via
     a small `Points` cloud at the rover's position; quick rising
     beep through the audio module's existing context (reuse, no
     new context). Rover material switches from grey to glowing cyan.
  6. **Mission complete.** When `remaining() === 0`: full-screen
     overlay like the title card, with completion bonus added to
     credits and a "Open Upgrades" button.
  7. **Upgrades app.** A second Tablet button "UPGRADES" toggles a
     full-screen panel with 3 options. Each costs credits and bumps a
     value in `src/ship.js` constants (or, cleaner, a `shipConfig`
     object the ship/physics reads through). Picks apply
     immediately, persist for the session.
- **Educational note:** state machines (rover state: untouched →
  in-range → repairing → fixed) and a tiny economy (earn → spend).
  Goes into LEARNINGS.md.
- **Test plan:** Playwright smoke that teleports the ship onto a
  rover at low velocity, holds H, asserts the rover becomes fixed and
  credits go up; checks mission-complete overlay fires after fixing
  all of them; checks an upgrade purchase actually changes the value.
- **Stop at milestone boundary.** No commit until human confirms.

## 2026-05-11 — M3 close (approved by human)

- All acceptance criteria green; human eyeballed the dev build and gave
  the go-ahead. Audio hum + throttle noise audible; collision bounces
  cleanly; F key + HUD button both warp; sun visible looking back.
- Smokes: `smoke`, `smoke:m2`, `smoke:m3`, `smoke:build` all PASS.
- Lowered the smoke fps floor from 20 → 8: headless software-GL drops
  under 20 with 250 asteroids + Mars + sun. The floor only exists to
  detect a stalled loop; real-hardware fps is the human's check.
- Pre-existing `console.info` for non-standard desktop pads still
  fires when a USB pad is plugged in. Production target is unaffected.

## 2026-05-11 — M3 kickoff (Asteroid Belt → Mars)

- **Plan, in order:**
  1. **Mars + Sun.** Mars: textured sphere far down +Z (procedural canvas
     texture — no asset files). Sun: `THREE.Sprite` billboard behind
     the player at -Z with a radial-glow texture. Camera FAR is 5000;
     fine for both.
  2. **Asteroid field.** Single `InstancedMesh` over a low-poly
     Icosahedron, 250 instances. Volume: a box around the path
     z ∈ [80, 450], x/y ∈ [±60, ±40]. Store per-instance
     `{position, radius}` in a plain array for collision lookups.
  3. **Collision.** Ship vs asteroid sphere-sphere each frame. On
     overlap: push ship out along the contact normal and reflect the
     velocity component along that normal (elastic-ish; 80% restitution
     so it doesn't ping-pong forever).
  4. **Fast Travel.** Tablet button (also `F` key). On press: flash +
     star-streak effect for ~1s, then teleport the ship to z ≈ 530
     (just before Mars, past the belt). Reuses the title-card overlay
     pattern.
  5. **Audio.** Web Audio API only — pure synthesis:
     - Hum: two detuned `OscillatorNode`s through a low-pass filter
       at ~200Hz.
     - Thrust: `AudioBufferSourceNode` with white noise looped,
       through a band-pass, gain modulated by `|throttle|`.
     Started on the title-card keypress (audio context requires a
     user gesture).
  6. **LEARNINGS.md** entry covering instanced meshes, sphere-sphere
     collision, canvas-generated textures, Web Audio synthesis.
- **Test plan:** Playwright smokes for (a) ship-asteroid collision
  bounce (drive forward into a near-spawned asteroid, assert ship
  rebounds), (b) fast-travel teleport (press F, assert ship.z jumps
  past the belt). Plus existing smokes regression-clean.
- **Stop at milestone boundary.** Don't commit until human confirms.

## 2026-05-11 — M2 close (Native gamepad + gyro bridge)

- **Preconditions met:** Asked the human for the bridge spec; decided to
  reuse the sibling project's protocol verbatim (`window.__p5NativeHost`
  / `__nativeGamepadUpdate` / `__nativeGamepadConnection`) so a single
  wrapper build can host both Vexo and Mario. Documented in `BRIDGE.md`
  before writing any code (per program.md M2 rule).
- **Wrapper not yet imported.** Verification is desktop-only via
  Playwright: simulated `WKUserScriptInjectionTimeAtDocumentStart` by
  injecting `__p5NativeHost` through `addInitScript()`, then driving
  `__nativeGamepadUpdate` to push axis values. On-device verification
  happens after the wrapper team imports.
- **Gyro path:** standard `DeviceOrientationEvent`, no wrapper channel
  needed. Permission requested from the title-card keypress (user
  gesture, as iOS 13+ requires); capability-guarded so desktop never
  calls a missing API. 20% contribution to fine pitch/yaw, with 1s
  averaged neutral calibration on the first events.
- **Bug fix in the copied bridge:** original sibling code tried
  `new GamepadEvent(name, { gamepad: syntheticPad })`, which Chromium
  rejects because the `gamepad` member must be a real DOM Gamepad.
  Switched to a plain `Event` with the synthetic pad attached as a
  property — consumers re-read state via `navigator.getGamepads()`.
- **Desktop pad finding:** human's USB pad reports `mapping: ''`
  (non-standard) with right-stick Y on axis 2 and right-stick X on
  axis 5. `gamepad.js` assumes the standard layout, which is what
  the bridge synthesizes on-device — that's the production target.
  Logs a single `console.info` when a non-standard pad shows up,
  pointing at the BACKLOG calibration follow-up.
- All three smokes green: `npm run smoke`, `npm run smoke:m2` (both KB
  regression and simulated bridge), `npm run smoke:build` (http +
  file://). Human eyeballed: keyboard unchanged, USB pad partial
  (non-standard mapping), single info message, no warnings.
- **STOP — milestone boundary.** Awaiting review before M3.

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
