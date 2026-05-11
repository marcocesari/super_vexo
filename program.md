# program.md — Super Vexo and the Mystery of the System

> A project by Marco (age 12). Browser-based 3D space game inspired by Frontier Elite II, with a narrative designed by Marco.
> Primary target: iOS Safari (via existing native wrapper). Also runs on desktop browsers.
> This document is the source of truth for **technical direction**. The narrative and player-facing copy live in `README.md`.
> If anything here conflicts with a casual chat instruction, **ask before deviating**.

---

## Vision

A space flight game playable on iPhone using a Bluetooth gamepad + gyroscope. The player is Vexo, a Royal Space Guard captain and hacker on a mission to rescue Princess Astra from Lord Draxos. The narrative drives the progression: Earth training → Mars rover rescue → planet-by-planet pursuit through the Solar System. Educational for Marco: he should understand the math (vectors, rotations) and the structure (game loop, state, input handling) of what's being built.

## Narrative ↔ milestone mapping

The story (see `README.md`) maps onto the milestones below. When a milestone has narrative content, it is called out. Keep player-facing strings in a single `src/strings.js` module so they can be edited without touching game code.

| Milestone | Story beat |
| --- | --- |
| M0 | (none — pure setup) |
| M1 | Earth training flight |
| M2 | (none — input plumbing) |
| M3 | Crossing the asteroid belt, Mars on the horizon |
| M4 | The Mars Rover Mission |
| M5+ | Other planets, ship upgrades, eventual showdown with Draxos |

Design conventions for the narrative:
- The **Tablet** is the player's in-game UI. Pause menu, fast-travel screen, upgrade shop, and (later) hacking mini-games all render as "apps" on the tablet. Build the HUD/menu framework with this in mind from M1.
- **"Time travel"** as Marco describes it is mechanically *fast travel*: a tablet screen that warps the player between destinations with a wormhole effect. Do not attempt literal time-rewind mechanics.
- The opening castle-attack cinematic is **deferred to M5+ or beyond**. At M0–M4 the game opens on a title card with text.

## Stack (locked decisions — do not change without asking)

- **Three.js** for 3D rendering (NOT p5.js)
- **Vanilla JS** with ES modules, no React/Vue/framework
- **Vite** for dev server and bundling
- **HTTPS** required for production (needed for `DeviceOrientationEvent.requestPermission` inside the wrapper)

## Runtime environments (the web app must work in BOTH)

This repo contains **only the web app**. The native iOS wrapper lives in a separate repo and is out of scope for Claude Code — never touch it, but you can see how another "wrappable" js game handles controls in a way that works with the wrapper in ../new_super_mario_bros_2d_all_stars/ and if needed you can copy the bridge so that this repo is compatible with the native iOS wrapper too.

1. **Standalone browser** (Chrome/Safari on Mac, any desktop): keyboard only. No gamepad, no gyro. This is the development environment and a valid deployment.
2. **Inside the native iOS wrapper**: the wrapper's WKWebView loads this web app and injects gamepad + gyro state through a JS bridge. The web app must detect the bridge and use it when present.

Hard rules:
- The web app **must never assume the bridge exists**. All bridge-dependent code lives behind capability detection.
- The web app **must always work with keyboard alone** at every milestone. Adding gamepad/gyro never removes keyboard.
- Bridge detection should be a single source of truth: e.g. check for `window.__nativeBridge` (or whatever convention you settle on in M2 — document it in `BRIDGE.md`).
- The integration point with the wrapper is M1 → M2: after M1 ships, the wrapper team imports the web app build into their repo. M2 then wires up the bridge inside this repo against the wrapper's protocol.

## Workflow — autoresearch loop

Between human-reviewed milestones, work in this loop autonomously:

1. **Plan.** Pick the smallest meaningful step toward the current milestone's acceptance criteria. Write a one-line proposal in `journal.md` with a timestamp.
2. **Execute.** Implement. Small, reversible changes.
3. **Evaluate.** Smoke tests: page loads, no console errors/warnings, FPS ≥ 60 on dev hardware. For visual/gameplay correctness, describe expected vs actual — use Playwright or a screenshot if needed.
4. **Keep or revert.** If the step's criteria are met, `git commit` with a descriptive message. If not, document why in `journal.md` and either iterate (max 2 retries) or revert.
5. **Repeat** until the milestone's full acceptance checklist passes. Then **STOP** and surface to human for review. Do not start the next milestone autonomously.

### Hard rules during autonomous loops

- Never skip ahead to a future milestone.
- Out-of-scope feature ideas → write them in `BACKLOG.md` and move on.
- Every commit must be runnable (`npm run dev` works, page loads).
- After every 5 commits, self-review the cumulative diff: "Is this still on track for the current milestone?" Log the answer in `journal.md`.
- If stuck >2 attempts on the same problem, stop and surface to human with a summary of what was tried.
- The native iOS wrapper is in a separate repo. Never modify it, never assume access to its source.

## Quality bar

- 60 fps on iPhone 12 or newer
- Zero console errors, zero warnings
- Game state resettable without page reload
- Code readable by a 12-year-old: clear names, comments on math-heavy parts (quaternions, vector projections, deltaTime usage)
- No magic numbers — name your constants

## Educational goals

Each milestone teaches 1–2 new concepts. Document them in `LEARNINGS.md` as short explanations a kid can follow:
- M1: 3D vectors, frame-rate-independent movement, the game loop
- M2: event-driven input, sensor fusion (gyro + stick)
- M3: instanced meshes, simple collision detection
- M4: state machines, basic AI or basic economy
- Quaternions vs Euler angles — introduce when M1 hits gimbal lock

---

## Milestones

### M0 — Project skeleton

**Goal:** Three.js scene with a rotating cube, served by Vite.

- [ ] `npm create vite@latest` scaffolded, dependencies installed
- [ ] Three.js scene with one rotating cube, perspective camera, basic light
- [ ] Window resize handled
- [ ] `npm run dev` works, http://localhost:5173 shows the cube
- [ ] 60 fps, zero console output beyond expected
- [ ] Git initialized, first commit
- [ ] `README.md` explains run instructions

### M1 — Earth Training Flight (keyboard only) — **WRAPPER HANDOFF**

**Goal:** Free 6DOF flight in a starfield using keyboard. Narratively this is Vexo's pre-mission practice flight; mechanically it's the foundation of every later level. At the end of M1 the web app is handed to the wrapper team to integrate into the iOS shell.

- [ ] Title card on load: "Super Vexo and the Mystery of the System" + a "Press any key to start" prompt
- [ ] Starfield (particle system or skybox, 10k+ stars, no perf hit)
- [ ] Ship: cube or cone is fine, or load a free glTF from kenney.nl
- [ ] Chase camera with smoothed lag behind the ship
- [ ] Keyboard: W/S throttle, A/D yaw, ArrowUp/Down pitch, Q/E roll
- [ ] Frame-rate-independent movement (`deltaTime`)
- [ ] Inertia (ship coasts when input stops). Optional arcade-damping toggle.
- [ ] Use **quaternions** for rotation — no Euler-angle gimbal lock
- [ ] HUD overlay rendered as a "Tablet" frame (top corner or side panel): velocity, orientation, fps. This is the seed of the in-game tablet UI used throughout the game.
- [ ] `src/strings.js` exists and holds the title and HUD labels
- [ ] `npm run build` produces a static bundle that loads from `file://` and from a local web server without errors (the wrapper will load it from a bundled path)
- [ ] No assumptions about being on a specific origin, no hard-coded URLs
- [ ] Works in Chrome on macOS with no devtools warnings

### M2 — Native gamepad + gyro bridge

**Goal:** When running inside the iOS wrapper, the player can fly with pad + gyro. Standalone browser still works on keyboard, unchanged.

**Preconditions:** the wrapper team has imported the M1 build and supplied a bridge protocol. Before starting M2, ask the human for the bridge spec (message names, payload shape, injection mechanism). Document what you receive in `BRIDGE.md` before writing any code.

- [ ] `BRIDGE.md` documents the wrapper's protocol verbatim (what messages it sends, on which channel, payload shape)
- [ ] Capability detection: a single `isBridgeAvailable()` function used everywhere
- [ ] Keyboard input path is **completely unchanged** in standalone mode — verify by running in Chrome with no regression
- [ ] Gamepad: left stick = yaw + pitch, right stick = roll + throttle (configurable in code)
- [ ] Gyro: contributes a small fraction (default 20%) to fine pitch/yaw
- [ ] Dead zone applied to sticks (default 0.15)
- [ ] Calibration: hold device at "neutral" for 1s on session start, captures gyro zero
- [ ] HUD shows active input source: `KB`, `PAD`, `GYRO`, or combinations
- [ ] When bridge is absent (Chrome on Mac), no errors, no console warnings, HUD shows `KB` only

### M3 — Crossing the Asteroid Belt to Mars

**Goal:** Vexo's first interplanetary journey. The player flies through an asteroid field with Mars visibly growing larger on approach. Space starts to feel like a place.

- [ ] Asteroid field, 200+ rocks via `InstancedMesh`
- [ ] Asteroids fill a defined volume the ship can fly through
- [ ] Sphere-sphere collision: ship bumps off asteroids, no damage yet
- [ ] **Mars** rendered as a large textured sphere ahead of the ship — visibly grows on approach, parallaxes correctly
- [ ] Distant Sun visible behind the player (simple billboard with glow)
- [ ] Tablet "Fast travel" button: when pressed at start, plays a brief warp/wormhole effect and places the ship on the far side of the asteroid belt near Mars. This is the wormhole-as-fast-travel mechanic from the narrative.
- [ ] Audio: ambient hum loop + thrust sound triggered by throttle

### M4 — The Mars Rover Mission

**Goal:** Vexo's first real quest. Find and repair the broken Mars rovers, earn credits, return to base, spend credits on one upgrade. This is the **first complete gameplay loop** — narrative → action → reward → progression.

**Minimum:**
- [ ] Mars orbit "level": ship arrives in low orbit above Mars after the M3 fast-travel sequence
- [ ] 5–7 broken rover objects placed in a defined volume (orbital debris, or low-altitude markers — pick whichever is easier to fly to)
- [ ] Each rover named after a real Mars rover (Spirit, Opportunity, Curiosity, Perseverance, Sojourner, Zhurong, Ingenuity) — bonus educational hit for Marco
- [ ] Approach detection: when ship is within X meters of a rover and below Y velocity, a "Hack to repair" prompt appears in the Tablet UI
- [ ] Interaction: hold a key/button for 2 seconds, progress bar fills in the Tablet, rover plays a small "fixed" particle/sound effect, counter increments
- [ ] Tablet HUD shows: rovers remaining, credits earned
- [ ] When all rovers are fixed: "Mission Complete" tablet screen + credits bonus
- [ ] A simple **upgrade screen** (tablet app): spend credits on one of 3 upgrades (e.g. faster throttle, sharper turn rate, larger hack range). Picks persist for the session.

**Stretch (only after minimum is shipped clean — work them as separate features after a human review):**
- [ ] Some rovers patrolled by Draxos drones — a light combat layer (projectile firing, simple hit detection)
- [ ] A "hacking" mini-game in place of the hold-to-repair (e.g. match a simple pattern on the Tablet)
- [ ] Save/restore of credits + upgrades via `localStorage`

### M5+ — Onward through the Solar System

After M4 ships, sit with Marco and pick the next direction. The narrative gives a clear menu of options — pick *one* per cycle, not all at once.

- **Next planet** (Jupiter, with its moons as a small region) — reuse M3/M4 patterns: travel sequence, new mission type. Each planet should introduce *one* new mechanic, not many.
- **The Tablet hacking mini-game** — a real puzzle interaction (pattern match, simple maze, signal alignment) used in place of the hold-to-repair from M4.
- **Combat layer** — projectile weapons + Draxos drone enemies, applied retroactively to Mars and forward to new planets.
- **Ship upgrades expanded** — armor, weapons, hyperdrive range; new economy.
- **The opening cinematic** — the castle-attack intro Marco described, as a polish pass.
- **The final confrontation with Lord Draxos and rescue of Princess Astra** — only attempt this once the surrounding systems (combat, mission state, upgrades) are solid. This is the game's climax and deserves a dedicated milestone of its own.

---

## File layout

```
space-game/
├── src/
│   ├── main.js           # entry, renderer + game loop
│   ├── scene.js          # scene, lighting, skybox
│   ├── ship.js           # ship class: physics, render
│   ├── input/
│   │   ├── index.js      # unified input state
│   │   ├── keyboard.js
│   │   ├── gamepad.js    # reads native bridge
│   │   └── gyro.js
│   ├── world/
│   │   ├── starfield.js
│   │   ├── asteroids.js
│   │   └── station.js
│   └── hud.js
├── public/
│   ├── models/           # glTF
│   ├── textures/
│   └── sounds/
├── index.html
├── vite.config.js
├── package.json
├── program.md            # this file — source of truth
├── journal.md            # autoresearch loop log
├── BACKLOG.md            # parked ideas
├── LEARNINGS.md          # educational notes per milestone
├── BRIDGE.md             # native wrapper protocol
└── README.md
```

## How to resume in a new Claude Code session

1. Read this `program.md` end to end.
2. Read `journal.md` (most recent entries first) and run `git log --oneline -20`.
3. Identify the current milestone from the most recent journal entries. If unclear, ask the human.
4. Read the current milestone's acceptance checklist.
5. Identify the next smallest step.
6. Begin the autoresearch loop above.
7. When the current milestone's checklist is fully ticked, STOP and ask the human to review before starting the next milestone.

---

*Last revised: project kickoff. Update this file only with explicit human approval.*
