# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-08-20 — Vexo in 3D: a turntable first

- Marco dropped `vexo_character.jpg` into the repo and asked for it in
  3D, starting with a 360° view. From the art: young pilot, dark
  gunmetal powered armour laced with green circuit traces, green visor
  with a headset and mic boom, messy brown hair, heavy plates on
  shoulders / chest / thighs / shins, cyan light rings in the soles.
- **`src/world/vexo.js`** builds him from primitives like everything
  else here — 63 pieces, 1.8 m tall, feet at y = 0 so he can stand in
  the town later at its 1-unit-per-metre scale. Two tricks carry the
  look: a canvas CIRCUIT TEXTURE used as an emissive map (modelling
  those traces as geometry would have cost hundreds of slivers), and
  armour PLATES laid over simple tapered limbs, which is where the
  silhouette comes from.
- **`src/characterViewer.js`** is the 360° view: `?character=1` swaps
  the game for a turntable on a lit pedestal — drag to spin, arrows to
  tilt. It borrows the renderer the same way the opening cinematic
  does, so nothing in the game had to learn about it.
- **`tools/character-sheet.mjs`** (`npm run character-sheet`) renders
  one revolution as a labelled contact sheet, captured from the live
  viewer so the sheet can't drift from what the game draws.
- **Three things the first renders exposed**, none of which I would
  have caught by reading the code:
    1. `metalness: 0.75` with no environment map renders as *black*. He
       looked like a man made of green light with a void for a body.
       Metals reflect their surroundings; with nothing to reflect there
       is nothing to see. Dropped to 0.35.
    2. Emissive intensity was roughly triple what it should be — the
       circuits drowned the armour they're supposed to decorate.
    3. His boots were buried in the pedestal: the leg chain hanging off
       a 0.8 m hip added up to more than 0.8 m. Now budgeted so the
       soles land exactly on y = 0, and `smoke-character.mjs` measures
       it.
- Next, when Marco wants it: put him somewhere in the game — standing
  on the street in Castel Maggiore, or in the cockpit on the title
  card.

## 2026-08-20 — The long blocks stand on hills

- Marco's call: the long buildings that aren't Le Piazze should sit on a
  small hill. Seven qualify — non-retail, spanning 40 m or more end to
  end, which is exactly the row of four-storey terraces including his
  own block.
- **Terrain, not decoration.** Each hill is a flat cap over the
  footprint plus 3.5 m, falling through a 12 m skirt (about 23°) to the
  flat. `groundHeightAt(x, z)` is the single source of truth for the
  shape, and everything that stands on the ground reads it: buildings
  start at their hill's height, trees stand on the slope, the home
  marker rides up with its block, and the ship's floor in surface.js
  follows the terrain so a five-metre rise stops the ship instead of
  being flown through.
- **Roads climb the hills.** The first design trimmed each hill's skirt
  so it stopped short of the nearest kerb — and the smoke test I wrote
  for that invariant immediately failed. Measuring the data explained
  why: six of the seven long blocks have a service road or footpath
  within a metre of the wall, so there is no hill here that a road
  doesn't touch. Roads now drape over the terrain instead — polylines
  resampled to 4 m so a ribbon tracks a slope rather than bridging it —
  which is what the access road does in life anyway.
- **A pure ordering bug worth remembering:** roads were still flat after
  the drape went in, because the pass that FILLS the hills array ran
  after the roads were built, so `groundHeightAt` returned 0 for all of
  them. The terrain now exists before anything is laid over it.
- Areas (lawns, the park) stay flat and are simply buried where a hill
  rises through them. They're green, the hills are green, and nothing
  reads as wrong.
- Tests: hills exist, home stands on one, no road vertex ends up buried
  under the terrain (13,036 checked), the ship rests on the hilltop
  rather than inside it.

## 2026-08-20 — The "lag" over Le Piazze was z-fighting, not frame rate

- Marco reported the grey retail area and Parco Lupicchio lagging while
  flying over them. Flew there and looked: the flat surfaces were
  covered in stippled speckle along every edge — classic depth
  fighting. It shimmers frame to frame as the camera moves, which is
  what reads as "lag" even when the frame rate is fine.
- **Why it was so bad here.** Every flat layer — ground, lawns, car
  parks, roads, footpaths — sits within a few centimetres of the
  others, and depth-buffer precision is governed by the RATIO far/near.
  At near = 0.1 and far = 5000 that ratio was 50,000:1, leaving almost
  no precision out where the ground is. Two fixes:
    1. `NEAR` 0.1 → 0.5 (ratio now 10,000:1). Nothing is ever drawn
       closer: the ship is 2.6 m long and the camera rides 5.5 m back.
    2. `polygonOffset` on every flat layer, biasing them in the
       rasteriser in a fixed order (ground 0, areas 1, roads 2, paths
       3) rather than letting them fight.
- **And a real cost cut while in there.** Those areas are exactly where
  the screen is filled by matte, flat, mostly untextured surfaces, so
  the whole town moved from `MeshStandardMaterial` to
  `MeshLambertMaterial`. Full PBR per pixel bought nothing on a car
  park. Parco Lupicchio went from needing render scale 0.5 to holding
  0.75; Le Piazze still asks for 0.5 in headless, which is software
  rasterisation, not a phone GPU.
- Worth remembering as a pattern: two of the three performance
  complaints in this project so far were not throughput at all. One was
  shader recompilation from a changed #define, this one was depth
  precision. Measure before optimising; the town has never been more
  than 39 draw calls.

## 2026-08-20 — Castel Maggiore fixes: the mall, the stutter, the trees

Three things Marco found while flying it.

- **Missing buildings at Le Piazze.** The scan radius was 300 m and the
  shopping centre sits 330 m out, so Overpass returned only the two
  units with a node inside the circle — the other eight were simply
  absent. Re-scanned at 500 m: 29 → 55 buildings. The mall units were
  then rendered as four-storey red-brick condos, because the height
  rule sorts by footprint area and a retail unit of 800–2300 m² is
  exactly the size of a block of flats. Fixed by classifying anything
  standing inside a `landuse=retail` polygon as retail regardless of
  size — the land it sits on, not how big it is.

- **The stutter.** Measured, not guessed: the first landing cost a
  **2517 ms frame**. Two causes, both the same shape — a state that
  Three.js bakes into shaders as a #define, changed at runtime, which
  recompiles EVERY material in the scene:
    1. `scene.fog` was created on landing. Fog now exists from the
       first frame, parked at near = 1e6 where it can't tint anything,
       and landing only changes its colour and distances (uniforms,
       free). This fixed the take-off hitch outright.
    2. The surface lights were toggled with `.visible`. The NUMBER of
       lights is also a #define, so this recompiled everything again.
       They're permanent now at zero intensity and landing turns them
       up.
  A third cost was the driver deferring its real work until a program
  is used in a draw call. `surface.prewarm()` now renders the town once
  at load — and it must render to the CANVAS, not an offscreen target,
  because the canvas is multisampled and an 8×8 plain target
  specialises the wrong framebuffer format (tried it; the stall came
  straight back). Worst frame: 2517 ms → 432 ms, and that remainder is
  SwiftShader's software rasteriser in headless, not a real GPU.
  Take-off and every landing after the first are clean.
  Also dropped `backdrop-filter` from the landing banner: a backdrop
  blur over a WebGL canvas forces a compositor readback, which is
  expensive on mobile Safari.

- **Sustained slowness** is now handled by `src/perf.js`: a frame
  watchdog that trims the render scale (never the detail) when the
  median frame time says the device is below ~26 fps, and restores it
  above ~52 fps. Verified end to end — it saw 20 fps on the surface in
  headless, dropped to 0.75, and the frame rate recovered without
  oscillating. Geometry was never the problem: the whole town is 39
  draw calls and 18k triangles.

- **Trees in the road.** They were offset from the road they were
  scattered along, but nothing stopped them landing on a *different*
  one at junctions and driveways. Now every candidate is tested
  against every road segment and every building wall, and the verge
  offset went from 2.6 m to 6.5 m. 198 trees, closest 2.8 m from a
  kerb, asserted in `smoke-landing.mjs`.

## 2026-08-19 — Landing on Earth: Via Giuseppe Impastato, Castel Maggiore

- **Marco's ask:** scan a real place with Street View's pegman and put
  it into the game's Earth. Starting address: Via Giuseppe Impastato 28,
  Castel Maggiore (Bologna) — geocoded to 44.5691968, 11.3524384.
- **Where the data comes from:** footprints, streets, paths and green
  space from OpenStreetMap via Overpass (`tools/fetch-osm.mjs` →
  `src/world/places/castel-maggiore.json`, 300 m radius: 29 buildings,
  83 ways, Parco Lupicchio, Centro Commerciale Le Piazze). Coordinates
  are converted to local metres on a tangent plane, so 1 game unit = 1
  real metre. OSM has NO height tags here, and no tree nodes.
- **What Street View added** (the pegman pass, panorama
  `j2boMPBS-6smZchdqWzqBQ`, imagery Jul 2026): the north side of the
  street is four-storey red-brick condos with grey balcony slabs on
  every floor and round brick stair towers; the south side is
  two-storey brick townhouses with shallow tiled roofs, garden walls
  and hedges; the street is lined with young broadleaf saplings on
  grass verges with brick-paved footpaths. That's where the heights
  (`heightFor()` by footprint area), the brick palette, the balcony
  band in the wall texture and the scattered trees come from — none of
  it is in OSM. No Street View imagery is copied into the game; it was
  reference only.
- **How it's in the game** (`src/surface.js` + `src/world/neighborhood.js`):
  the town is life-size and 1.5 km across, but the game Earth is only
  112 units of radius — they can't share a scale. So the town lives at
  y = -20000, past the camera's far plane, and flying within 22 units
  of Earth's surface teleports the ship down to it (sky colour, fog,
  daylight rig, space objects hidden). Climb above 620 m and you're
  put back just outside the atmosphere. A soft floor at 2.5 m stops
  the ship instead of crashing it.
- **Two bugs worth remembering.** (1) A DirectionalLight aims at its
  *target*, which defaults to the world origin — 20 km straight up from
  the town, so the whole place was lit from underneath until the target
  was moved. (2) A 20 km teleport is not something a spring-follow
  camera should chase: it spent seconds flying down. Both landings and
  take-offs now call `chaseCamera.reset()` through an `onTeleport` hook.
- **Test:** `tools/smoke-landing.mjs` (`npm run smoke:landing`), 18
  checks — the town builds, the marker lands on the address (12 m), the
  round trip in and out of the atmosphere, the ground floor, the camera
  cut, and reset-from-the-surface.

## 2026-08-18 — Twin-stick rework: left stick flies, right stick looks

- **Marco's call:** left stick moves the ship, right stick is a
  "gyroscope" for the view, and *the ship must always be visible in the
  centre*. This overrides program.md M2's line "left stick = yaw +
  pitch, right stick = roll + throttle".
- **New mapping** (`src/input/gamepad.js`): LY throttle, LX yaw,
  RX/RY → `lookX`/`lookY`, which never touch the ship. Pitch and roll
  had to go somewhere, so they moved to the D-pad (Up/Down = nose,
  Left/Right = bank) — the D-pad's only other job is scrolling menus,
  and flight input is ignored while a menu is open.
- **New module `src/chaseCamera.js`**, lifted out of main.js. The look
  stick is an ANGLE, not a rate: full deflection = 150° of yaw / 65° of
  pitch around the ship, smoothed with the usual half-life spring, so
  releasing the stick always drifts the view back behind the tail with
  no re-centre button. The camera looks at the ship's origin every
  frame with NO smoothing on the look target — that's what keeps the
  ship exactly centred (the old lookahead point sat past the nose, so
  the ship rode below centre).
- **Test:** `tools/smoke-camera.mjs` (`npm run smoke:camera`), plain
  Node + three, no browser. Asserts the stick separation (left never
  moves the camera, right never rotates the ship), that the ship
  projects to NDC (0,0) at every look angle, constant orbit radius,
  the angle limits, and hands-off recentring. Eyeballed in the browser
  too (behind / left / right / up / down screenshots).
- **Follow-up the same day:** Marco reported the ship sliding off to
  one side during a 360° turn — but that was the stale `docs/` build
  (11:58) still running the *old* camera, which aimed at a point 4
  units past the nose and smoothed that aim point on its own clock.
  Rebuilt `docs/`. Also widened the gimbal to a full circle: yaw ±180°
  (stick hard over = nose-on view) and pitch ±85°, so every angle of
  the ship is reachable. The smoke now sweeps the stick side to side
  and separately spins the ship through a full 360°, asserting the
  ship never leaves NDC (0,0) in either.
- **Pre-existing red tests fixed while here** (broken by b5a10a7's
  "stop dead unless the stick is pushed forward", not by this work):
  `smoke.mjs` and `smoke-m2.mjs` read the HUD speed *after* releasing
  the throttle, which is now always 0 — they now read it while it's
  held. And `physics.js`'s degenerate "centres exactly coincide" branch
  picked a contact normal but never pushed the ship out; with the ship
  no longer drifting, it stayed stuck inside the rock forever
  (`smoke-m3.mjs`).

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
