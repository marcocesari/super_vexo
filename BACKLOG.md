# BACKLOG.md

Parked ideas that came up during a milestone but are out of scope. Pull
from here when starting a new milestone.

## Parked while growing the world

- **Nothing that grows moves.** Grass that leans in the wind, and
  branches that sway, want either a vertex shader on the flora material
  or a matrix rewritten per instance per frame — and flora is already
  the most-instanced thing in the game (see `src/world/flora.js`). A
  shader that displaces by a noise of `(worldPos, time)` is the cheap
  way in and the one to try first.
- **Trees in town.** Flora stops at the capital's concrete and at its
  buildings, so Estronic has no street trees and no park. Both want
  placing deliberately, alongside the buildings in `settlement.js`,
  rather than scattering into the gaps and hoping.
- **Nothing casts a shadow.** The renderer has no shadow map at all
  (`scene.js` sets no `castShadow` anywhere), so a wood at noon reads
  flatter than it should. A single cascaded shadow map on the sun,
  limited to the near ring, would do it — and would help the towns and
  Vexo as much as the trees.
- **The rovers and the missions are all still in orbit around Mars.**
  Everything the player does on the ground — the towns, the shops, the
  camps — grew up on this world while the one MISSION in the game
  stayed in space. Spreading rover-style objectives across the
  continent is a design decision as much as a coding one, so it wants
  Marco's word on what they should be first.

## Out of scope for M1

- Glow / bloom post-processing on the ship engine (visual polish).
- Loading a kenney.nl glTF ship model instead of the cone (kept the
  cone for M1 — it's enough to verify flight and the wrapper handoff).

## Done since

- ~~Non-standard desktop gamepad calibration.~~ Built: a pad that does
  not report the standard layout is offered a four-push setup screen
  (`src/padSetup.js`, `src/input/padCalibration.js`), and what it
  learns is stored against that controller's id. `npm run smoke:pad`.
