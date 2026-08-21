# Super Vexo and the Mystery of the System

> *A space adventure across the Solar System, starring a hacker hero with a very powerful tablet.*

## The Story

You play as **Vexo**, captain of the Royal Space Guard — and a professional hacker. The kingdom of Astra lives in peace, until one day **Lord Draxos**, the kingdom's worst enemy, attacks the royal castle with an army of monsters, kidnaps Princess Astra, and escapes into deep space.

The Scientists rush to Vexo's room and tell him what happened. They ask: *can you save the princess?*

If you say yes, they hand you a special device — the **Super Mega Tablet**. With it you can:
- 🔓 Hack any technological device you find
- 🌍 Fast-travel across the surface of a planet
- 🌌 Make long space journeys much shorter — like bending time itself

They also remind you of your pilot training. After a practice flight around Earth, they give you the keys to a high-performance spaceship (name TBD — Marco picks) and send you off.

Your first destination is **Mars**. The planet's rovers are all broken, and you need to fix them before pushing deeper into the Solar System. Planet by planet, you'll get closer to Draxos — and to the Princess.

Along the way you earn credits and buy better **weapons**, **armor**, and **ship upgrades**.

What is the **Mystery of the System**? You'll have to play to find out.

## Cast

- **Vexo** — the player. Royal Space Guard captain. Elite hacker.
- **Princess Astra** — kidnapped by Draxos. The reason you're flying.
- **Lord Draxos** — the kingdom's worst enemy. Commands an army of monsters.
- **The Scientists** — Vexo's mentors. They built the Tablet.

## Made by

A project by Marco (age 13).
Built in JavaScript with [Three.js](https://threejs.org).

## Vexo himself

`?character=1` swaps the game for a turntable of the character — drag to spin
him, arrow keys to tilt. He's built from primitives in `src/world/vexo.js`
(1.8 m tall, feet at y = 0, so he can stand in the town at its real scale)
from the concept art in `vexo_character.jpg`.

`npm run character-sheet` renders a full revolution as one contact sheet.

He is posed by hand rather than animated from clips — one phase angle drives an
idle, a walk and a ladder climb (`setGait`). If you would rather see a modelled
character, `?character=1&model=/some-model.glb` loads a rigged glTF/GLB instead:
it is scaled to 1.8 m, stood on the floor, and any `Idle` clip in the file is
played through an `AnimationMixer`. Without a model file the built-in Vexo is
what you get, and a model that fails to load leaves him standing there.

## Running the game

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

**Keyboard controls** (work everywhere):
- **W / S** — throttle forward / back
- **A / D** — yaw left / right
- **↑ / ↓** — pitch up / down
- **Q / E** — roll left / right

**On foot** (see below):
- **L** — climb out, from anywhere over the town; and climb back in when
  you're standing at the ladder
- **W / S** — walk forward / back, **A / D** — turn
- **Shift** — run

**Gamepad controls** (USB / Bluetooth pad on desktop, or the native iOS wrapper):
- **Left stick** — fly the ship: push up to thrust, left / right to turn
- **Right stick** — swing the camera around the ship. It's a gimbal, not a
  turn: the ship keeps its heading, stays dead-centre in frame, and the view
  drops back behind the tail the moment you let go. It goes the whole way
  round — hard over to either side puts you on the nose, looking the ship in
  the face — so you can see it from any angle
- **D-pad** — pitch (up / down) and roll (left / right)

**Gyroscope** does two jobs on a phone. It adds a little fine pitch / yaw to the
flight axes (20%), and it drives the camera the way the right stick does — the
view goes where you tilt it, so tilting the right edge down swings the view
right and tilting the top away swings it up. A full 35° tilt is about 80° of
swing, and letting the phone come level drops the view back behind the tail on
its own. It works the same standing on the street as it does flying.

## Landing on Earth

Turn around at the spawn point, fly into the planet, and the game puts you down
on a real street: **Via Giuseppe Impastato, Castel Maggiore (Bologna)**, built
life-size at one game unit per metre. The blue ring and beacon mark number 28.
Climb back above 620 m and you're in orbit again.

There's no button to press: touching the atmosphere lands you. The blue glow
around the planet is the atmosphere shell at 116 units, and the landing fires
at 134 — so if you ever fly *through* Earth and see blue, you're running a
build without this feature.

To go straight there without the flight out, add `?land=1` to the URL
(`http://localhost:5173/?skipIntro=1&land=1`).

The street layout and building footprints come from OpenStreetMap; heights,
colours and materials were matched to what Street View shows on the ground.
Re-scan the same place (or a different one) with:

```bash
node tools/fetch-osm.mjs --lat 44.5691968 --lon 11.3524384 \
  --radius 500 --slug castel-maggiore --name "Via Giuseppe Impastato"
```

Keep the radius generous: at 300 m the scan cut Centro Commerciale Le Piazze
in half and most of the mall was missing from the game.

The long residential blocks stand on small hills; the shopping centre and the
shorter houses sit on the flat. Roads and paths drape over the terrain, so the
service road climbs its hill.

Map data © OpenStreetMap contributors, [ODbL](https://osm.org/copyright).

## Getting out of the ship

Press **L** (or **A** on a pad) anywhere over the town. The ship flies itself
down to the street below it and parks: the nose levels, a ladder unfolds beside
the canopy, and Vexo climbs down it while the camera watches from the side. Any
button skips the sequence. From 300 m up it's a long landing; from the deck
it's almost immediate.

You don't have to land first, and landing on its own doesn't get you out — you
can put down on a lawn to look at something and take off again without a ladder
every time you touch the grass.

From then on the stick walks him instead of flying the ship — buildings, walls
and tree trunks are solid, and the ground under him is the same terrain the
roads drape over, so he walks up the hills. Stand on the glowing ring at the
foot of the ladder and press **L** again to climb back in.

If the ship is sitting somewhere with no room for a ladder on either side — in
the middle of a building, say, since the ship doesn't collide with them — it
says so and stays shut.

The ship is **four times its space size** while it is down here. In space
nothing has a known size so its 2.6 units mean nothing, but the town is real
Castel Maggiore at a metre per unit and Vexo is a real 1.8 m — at 1× he would
be climbing out of a spacecraft shorter than he is tall. Landing scales it to a
believable 10.5 m fighter; leaving the atmosphere puts it back.

The soft floor follows the highest ground under the whole hull rather than the
ground under its centre, so a 10.5 m aircraft coming down on one of the hills
doesn't bury its nose in the slope in front of it — and it parks at exactly
that height, so climbing back in doesn't pop the ship into the air.

```bash
npm run smoke:onfoot     # flies down, climbs out, walks, hits a wall, boards
```
