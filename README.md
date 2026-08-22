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
- **W A S D / left stick** — move. The stick is a *direction* in the frame
  you're looking at, not a steering wheel: push left and he walks left across
  the screen, turning to face the way he's going. Diagonals aren't faster, and
  he leans into a start and carries a step into a stop. How far you push picks
  the pace — a gentle push walks (1.5 m/s), hard over jogs (3.3). A keyboard
  has no half-press, so W alone is the jog
- **Shift / B (hold)** — sprint (6.2 m/s), for as long as your stamina lasts
- **Right stick, or turning the phone** — swing the camera around him. Push and
  it keeps turning; let go and it stays where you left it. Walking forward
  eases it back behind him on its own, so there's no button to press

**Gamepad controls** (USB / Bluetooth pad on desktop, or the native iOS wrapper):
- **Left stick** — fly the ship: push up to thrust, left / right to turn
- **Right stick** — swing the camera around the ship. It's a gimbal, not a
  turn: the ship keeps its heading, stays dead-centre in frame, and the view
  drops back behind the tail the moment you let go. It goes the whole way
  round — hard over to either side puts you on the nose, looking the ship in
  the face — so you can see it from any angle
- **D-pad** — pitch (up / down) and roll (left / right)

**Gyroscope** does two different jobs on a phone, and they work differently on
purpose.

*Steering* is a **tilt**: lean the phone the way you want to go and it adds a
little fine pitch / yaw to the flight axes (20%), on top of the stick. Leaning
into a turn is an absolute gesture, so an absolute reading is right for it.

*Looking* is a **turn**: the camera moves as far as the phone moves and then
stays there, exactly like a mouse — which reports how far it slid, not where it
sits on the desk. Turn the phone 20° right and the view comes 20° right and
holds; hold the phone anywhere you like and nothing drifts. This is how games
with good motion controls do it, and it means the view is never pinned to
however you happen to be holding the phone. Touching the right stick puts the
gyro's offset away, so the stick stays in charge and letting go of it still
drops the view behind the tail.

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

His walk cycle is keyframed from clinical gait data rather than a sine wave:
the cycle is 60% stance and 40% swing, the knee flexes twice (15° as the heel
lands, 60° through mid-swing), and the ankle rolls from heel strike to toe-off.
His body height isn't animated at all — it's derived from where the leg
geometry puts the soles, so the planted foot stays exactly on the road and the
rise and fall comes out for free.

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

### Stamina

Sprinting spends a wheel, the way Link's does in *Tears of the Kingdom*. It
appears beside Vexo when you start using it and fades out once it's full again,
so it isn't on screen while you're just walking about.

Three rules make it a decision rather than a timer, and all three are lifted
from TotK:

- **Emptying it is punished.** Run it dry and he's winded — walking pace only,
  no sprint, for a couple of seconds — and it then refills at half the rate it
  would have if you'd let off in time.
- **The last quarter drains at half rate**, so a nearly-empty wheel stretches
  further than it looks and running it close is worth doing.
- **Tapping costs more than holding.** Every fresh press takes a bite out of the
  wheel, so feathering the button is worse than committing.

A full wheel is about five seconds of sprinting, or nine if you spend the last
quarter of it.

Sprinting also plays `src/assets/invincibility_theme.mp3` — the first six
seconds of the track, from the top each time and looping, fading out over a
third of a second when he stops. A sprint lasts about five seconds, so the rest
was never going to be heard; cutting it took the download from 333 KB to 121 KB.
The whole track sits beside it as `invincibility_theme.source.mp3`, which
nothing imports, so it stays out of the build:

```bash
node tools/trim-mp3.mjs src/assets/invincibility_theme.source.mp3 \
                        src/assets/invincibility_theme.mp3 6
``` It's the
only sound in the game that isn't synthesised on the fly — everything else in
`src/audio.js` is oscillators and filtered noise. It's a plain `<audio>` element
rather than a node in the Web Audio graph, because routing it through the graph
needs `createMediaElementSource`, and a media element loaded from a `file://`
URL counts as cross-origin, which would silence it inside the iOS wrapper.

### Three gaits

Walk, jog and sprint are different animations, not one animation sped up. A
sprint is not a fast walk: stance shrinks to about 40% of the cycle, both feet
leave the ground twice per stride, the knee folds to around 110° to swing the
leg through, the foot lands forefoot-first, and the chest gets well ahead of the
hips. The two sets of joint curves are blended by speed, so he shades from one
into the other the way a person does when they pick up the pace.

```bash
npm run smoke:onfoot     # flies down, climbs out, walks, sprints, boards
```
