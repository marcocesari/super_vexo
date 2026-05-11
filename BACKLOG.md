# BACKLOG.md

Parked ideas that came up during a milestone but are out of scope. Pull
from here when starting a new milestone.

## Out of scope for M2

- **Non-standard desktop gamepad calibration.** `src/input/gamepad.js`
  assumes `pad.mapping === 'standard'`. On-device this is guaranteed
  (the native bridge synthesizes a standard pad), but some desktop
  USB / Bluetooth pads (e.g. certain 8BitDo / GameSir USB modes) report
  `mapping: ''` with sticks on different indices. Build a one-time
  per-controller calibration: ask the player to push throttle / yaw /
  pitch / roll, record `{axis, sign}` for each, persist by `pad.id` in
  `localStorage`. Skipped at M2 because the iOS wrapper path is the
  production target and already works.

## Out of scope for M1

- Glow / bloom post-processing on the ship engine (visual polish).
- Sound: thrust whoosh, ambient hum. Slated for M3 per program.md.
- Loading a kenney.nl glTF ship model instead of the cone (kept the
  cone for M1 — it's enough to verify flight and the wrapper handoff).
- Touch-screen controls (will be designed alongside the wrapper).
