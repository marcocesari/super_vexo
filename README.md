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
- **Space / X** — shoot. He draws the pistol off his thigh and holsters it again
  a few seconds after the last shot
- **T, or + on a pad** — the inventory. A row of tabs, weapons down the left,
  and Vexo on the right: drag him, or hold A / D, to turn him round and look at
  his kit from any side. He's a real model in a real scene, drawn into that
  corner of the game's own canvas, so he can never go stale the way a picture of
  him would. **← → , or L / R on a pad**, walks along the tabs: **Weapons**,
  the **Tablet** — which used to be an overlay with a button of its own and is a
  page of this screen now — and **System** at the far right, where the save
  button is. Escape or B closes it
- **M, or − on a pad** — the map. See *The map*, below
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

`?peaceful=1` empties the camps, for measuring how he moves without a
bokoblin interrupting — which is what the on-foot tests run with.

## The world

The ground is not a model of anywhere. It is generated — endlessly, in
every direction — from rules taken off real ground by measuring it.

Twenty places on Earth were surveyed with `tools/worldstudy/survey.py`:
their actual elevations downloaded from public terrain tiles, and the
satellite imagery with them. The Dolomites, Mont Blanc, Annapurna, the
Appalachians, the Jura, Etna; Erg Chebbi, Sossusvlei, Badwater,
Monument Valley, the Bardenas, the Namib gravel plain; the Mississippi's
meanders, a glacial outwash plain, a Norwegian fjord, the Grand Canyon;
the Po valley, the Serengeti, Finnish lake country, the chalk cliffs at
Étretat. Three findings shaped everything:

**Ridges come every three kilometres.** Dolomites 3.5 km, Mont Blanc
3.4, Annapurna 3.7, Appalachians 3.5, Jura 3.6, fjord 3.3, Grand Canyon
3.1 — utterly different mountains, made in utterly different ways, all
repeating at about the same distance. Dune fields are finer, at 2.0–2.2
km.

**Slope tells one kind of ground from another.** Median slope runs
0.3–0.7° on a floodplain, 3.4° on savanna, 6–9° in hills, 4–11° across
dunes, 22–32° in mountains, with the steepest twentieth reaching 50–63°
in the Alps and the Grand Canyon.

**Real land is much smoother than fractal noise.** Its power spectrum
measures 1/f³·² to 1/f⁵·⁶. The textbook recipe for procedural terrain
gives 1/f², and that one number is why so much of it looks like crumpled
foil.

The world is built six times smaller than Earth but at *exactly* the
same angles — a valley every 3 km means five minutes of walking before
anything changes, while slope is the thing you actually feel underfoot.
Colours were sampled from the satellite imagery rather than chosen, and
the surprise there is how drab real ground is: the Sahara reads #a87647,
not orange; alpine meadow #536641; a salt pan #efe2c2.

`src/world/terrain.js` holds the rules and is pure arithmetic — no
Three.js — so the very function the game draws with can be run by a tool
and measured against the real thing:

```bash
node tools/worldstudy/tune.mjs      # generated vs Earth, side by side
python3 tools/worldstudy/survey.py out/   # re-measure the real places
```

There is no town any more: Castel Maggiore, its streets and the Le
Piazze mall were deleted along with the rest of the old world. Landing
sets you down on open ground, and where that is depends on where you
came down. Leave and come back and you return to the same spot.

`src/world/planet.js` draws it, in seven rings of tiles that travel with
the player: 64 m tiles with a vertex every 4 m under his feet, each ring
out twice the size of the last, to 4 km tiles on the horizon. Twelve
kilometres of world for about 40,000 triangles.

The rings are **hollow** — a ring doesn't draw what the finer ring inside
it already covers — and that isn't an optimisation, it's what stops the
ground flickering. Four sheets of ground lying on top of one another look
fine on a plain and fall apart on a hill, because a coarse sheet joins
two points 16 m apart with a straight line, and in a hollow that line
passes above the fine ground it's meant to be under. New tiles are built
a few milliseconds at a time rather than all at once, so crossing a
boundary at speed doesn't cost a frame.

```bash
npm run smoke:world      # holes, overlap, and the cost of building ground
``` To fly around it with none of the game in the way, start
`npm run dev` and open
[/tools/world-preview.html](http://localhost:5173/tools/world-preview.html)
— drag to look, W and S to fly, Shift to go faster.

## The map

**M**, or **−** on a pad, and the whole world is on the screen: one
continent, 130 km by 86, drawn all the way to its coasts. It isn't a
picture anybody made — it's the same terrain rules the ground itself is
built from (`src/world/terrain.js`), run over every square kilometre of
the world and shaded as though the sun were low in the north-west, which
is where mapmakers have put it for two centuries because it's the light
that makes a valley read as a valley.

Drawing a continent takes a couple of seconds, so it starts the moment
the game loads and draws a few rows at a time, a couple of milliseconds
per frame. By the time you press M it's been ready for minutes; press it
sooner and you watch the world appear. A green arrow shows where you
are and which way you're facing, and when you're out on foot a blue one
shows where you left the ship.

The world has edges because of this. It ran on for ever before, which is
a fine thing for ground to do and a useless thing to draw a map of —
"every single inch" only means something if there's a last inch. Fly
past the coast and there's open sea, not a wall.

### It is Marco's map

The world is his drawing. He drew **Continent Alpha** on a sheet of
paper — kingdoms, rivers, a lake, a capital in the middle — photographed
it, and said: use this, the lines are the rivers, keep everything exactly
like the drawing.

So the photograph was straightened out, the pencil lifted off the paper,
and the map traced into `src/world/continentAlpha.js` as fractions of
the sheet. What's on it:

| on the paper | in the game |
| --- | --- |
| **The Camelloo** (Camels Kindom), scribbled *"more sand"* | a sand sea across the north-west |
| **The Vulcans** (Rock People Kindom), with a *lava river* | bare volcanic rock, and the Spire |
| **The Dwellers** (Elfs Kindom) | deep forest through the south-west |
| **Dwellers Territory** | wooded hills in the middle-south |
| **The Magica Republic**, behind the *invisible barrier* | cold, stony, half-bare country |
| **Estronic**, capital of Continent Alpha | level open ground in the exact centre |
| **Astro Lake** | a lake, where he put it |
| every wandering line | a river, carved where he drew it |
| the heavy bands he shaded in | ranges of hills |

His rivers are traced as runs of points and then carved into the ground
along a distance field, so they hold water and wander instead of running
in straight hops between the points I read off the photograph.

### The three towns

**Estronic**, **West Village** and **Bobo Village** are built, where he
drew them (`src/world/settlement.js`). They're laid out rather than
scattered, because that's what makes a place read as somewhere people
live: you can tell which way is *in*.

- **Estronic**, capital of Continent Alpha — modern. A grid of paved
  streets, concrete blocks with window bands storey by storey, tallest in
  the middle and low at the edges, and one tower with a mast on it that
  can be seen from outside the city. On the south-east side is the
  **shipport**: a paved apron with four lit landing rings, two hangars
  and a control tower with a glass head. Set down on a ring.
- **West Village** — mud brick and reed, out where the Camelloo's sand
  begins.
- **Bobo Village** — basalt and ash, in the Rock People's country under
  the Spire.

The ground under each is levelled first, easing back into the country
over twice the town's radius — people flatten a site before they build
on it, and a street that follows a hillside up and down is a street
nobody would lay out. Walls are solid: you're pushed out of the nearest
side, so you slide along a wall rather than sticking to it, and the ship
won't set down on a roof.

Each town is merged into three meshes — walls, roofs, trim — so all
three cost six draw calls between them, and they're hidden until you're
within about four kilometres.

**People live there.** Sixteen in Estronic and three in each village,
walking from one spot on the street to another and standing about in
between. Walk up to one and the prompt names them; press **E** and they
tell you something about the world — where the Camelloo starts, what the
Rock People say about the Spire, why you should not cross the invisible
barrier uninvited. They stop and turn to face you while they talk, and
walking away ends it.

The whole crowd is three draw calls: a body and two legs, each an
instanced mesh, so the legs can still swing because an instance carries
its own matrix.

```bash
npm run smoke:towns
```

### The ground rules underneath

The climate used to be three fields of noise, which gave a world with
everything in it and no arrangement to it — nowhere could be learned,
because there was nowhere to learn. *Tears of the Kingdom* is organised:
a desert in one place, ice in another, and something unmistakable in the
middle that everything else is placed around. This world is put together
the same way, in an arrangement of its own:

```
                        north
       ash and bare stone  |  ice and high snow
                       ┌───┴───┐
    west  open moor    │ SPIRE │   the sand sea   east
                       └───┬───┘
       low south coast     |  canyon country
                        forest
                        south
```

Each of those is a **province** — a place on the map with a climate of
its own (`PROVINCES` in `src/world/terrain.js`). Every point takes a
weighted average of the provinces near it, so borders are gradients
rather than lines, and a little noise keeps them from being circles.

**The Spire** stands in the middle: a volcano 1.4 km tall with a crater
in its top, snow on its shoulders and gullies cut down its flanks — the
one thing you can see from most of the continent, and what everything
else is placed relative to. It imposes its own shape on the ground
rather than being piled on top of it, because a landmark has to look the
same every time you see it.

```bash
node tools/worldstudy/map-preview.mjs world.ppm 900   # the map, to a file
npm run smoke:map                                     # and the checks on it
```

## Bokoblins

Camps are spread across the whole world, laid out the way *Tears of the
Kingdom* lays them out: a fire, some crates, three monsters and a bigger one in
charge. Red, blue and black, in that order of nastiness, and the black ones are
the bosses — bigger, and worth four times the shooting. You can see a camp from
across a field and decide whether to go round it, which is the whole reason
they're in camps rather than scattered: a wandering monster is a jump scare, a
camp is a decision.

Since the world has no edges, the camps can't be a list of places. Every 620 m
square of it either holds a camp or doesn't, decided by hashing the square's
coordinates — so the same square always holds the same camp, in the same spot,
and you can learn where they live and come back to a fight you walked away
from. Only the nearest four are ever built; they travel with you, which costs
the same whether you stand still or fly across a continent. Saves record which
squares have been cleared.

They see about 24 m in a cone in front of them, and hear anything within 7 m
whichever way they're facing. One spotting you brings the whole camp — that's
the horn. They chase at 4.5 m/s, which is faster than your jog and slower than
your sprint, so escaping costs stamina and standing still doesn't work. They
give up after eight seconds of losing you and walk home.

If one reaches you it winds up and swings. That's a heart (two from a boss), a
shove backwards, and your stamina wheel emptied so you can't simply sprint out
of a mistake. There's a mercy window of a second and a half, and only two of a
camp may be swinging at once — without either, four of them delete you in about
four seconds, and that isn't a fight, it's a mob.

Lose all five hearts and he goes down properly — see *Game over*, below.

The pistol itself is `src/world/pistol.js`, built to a real compact pistol's
proportions — 181 mm long, 130 mm tall, 32 mm wide, with a 99 mm barrel — and
its parts carry their real names: slide, serrations, ejection port, barrel,
frame, accessory rail, trigger guard, trigger, grip at about twenty degrees off
vertical, magazine baseplate, and front and rear sights with a sight radius
between them. The sci-fi is only skin deep: a lit strip down each side of the
slide and a cell in the magazine well, in the same green as his suit. There is
exactly one gun — drawing it reparents that group from his thigh into his hand
rather than building a second one — and it flashes at the muzzle when it fires.

Shooting has a soft lock: anything within about forty degrees of where he's
facing gets shot at, and he turns to it. Aiming is still yours — a monster
circling behind you needs turning to — but lining up a moving target with a
thumbstick on a phone is more dexterity than this game should ask for.

```bash
npm run smoke:monsters   # camps, being spotted, being hit, shooting back, losing
```

## Game over, and saving

Lose the last heart and Vexo takes the hit, his knees give, and he goes over
backwards — about a second and a half of it, and nothing interrupts it, because
a sign that lands on top of the animation steals it. Then **GAME OVER**, Marco's
game-over music, and one question: continue from your last save, or back to the title screen. **← →** to
choose, **Enter** or **A** to take it. With nothing saved, the offer changes
rather than lying to you — *You have no saved game* — and only the title screen
is on the table.

Saving works the way it does in *Tears of the Kingdom*: there's a button you
press, and the game also saves on its own so that a bad five minutes never costs
you an hour. The button is in the inventory's **System** tab, the last tab on
the right, exactly where TotK keeps its own — hold R to the end of the row and
the cog is waiting. Underneath it, when the game last managed it.

The autosaves happen at the three moments worth coming back from:

| when | why |
| --- | --- |
| he climbs down the ladder | you got where you were going |
| he climbs back in | you got out alive |
| a camp is cleared | that took some doing |

A save records where the ship is and whether it's in town, which monsters are
dead and how battered the rest are, your credits, the upgrades you've bought and
the rovers you've fixed. It does *not* record his hearts: you come back in the
ship, and climbing down that ladder gives you a fresh five.

Two slots, manual and automatic, and Game Over offers whichever is newer — so
someone who saves religiously never loses more than they chose to, and someone
who never touches the button still has somewhere to go. It all lives in
`localStorage`, which can throw (a private window, a browser with site data
switched off), so every touch of it is wrapped: a game that can't save is a
shame, a game that white-screens because it can't save is a bug.

```bash
npm run smoke:gameover   # autosaves, the save button, dying, and both answers
```

`?character=1&who=boko` puts one on the turntable — `who=boko-blue`,
`boko-black` and `boko-silver` for the other tiers.
