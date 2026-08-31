# journal.md — autoresearch loop log

Most recent entries on top.

## 2026-08-31 (later) — A world with places in it, and a fast airship

Marco: look at how Tears of the Kingdom's map is organised — a desert
here, ice there, something unmistakable in the middle — and arrange this
world that way, *without* copying that arrangement. And make the airship
do 1000 km/h, 2000 with the boost.

- **Two sessions were on this request at once.** The speed half was
  already sitting uncommitted in his folder from the other one; the file
  the layout had to go in had been saved four minutes earlier. Told him
  before touching anything: last time two of us wrote the same files, the
  game ended up importing a module nobody had written. He said to carry
  on, so the layout is mine and the speed work is the other session's,
  verified rather than rewritten.
- **The climate is laid out by hand now.** It was three fields of noise,
  which gives a world with everything in it and no arrangement to it —
  nowhere can be learned because there is nowhere to learn. There are ten
  PROVINCES, each a place with a climate of its own; every point takes a
  weighted average of the ones near it. Ice and high snow in the
  north-east, a sand sea filling the east, canyon country south-east,
  forest along the south, open moor west, ash and bare stone north-west.
- The first attempt came out flat and samey, and the reason is worth
  remembering: with a gentle falloff and ten provinces contributing,
  every point lands near the average of the lot — the desert only a
  little drier than the forest, the mountains never rising. The weight
  has to be nearly "nearest wins" (1/(d⁶+ε)) for a province to reach its
  own climate in the middle.
- **The Spire.** A volcano in the exact centre, 1.4 km tall with a
  crater, snow on its shoulders and gullies down its flanks — the thing
  everything else is placed around. It had to IMPOSE its shape rather
  than be added to the ground: piled on top, the hills underneath moved
  the summit by hundreds of metres and filled the crater in, so the one
  unmistakable thing in the world was a different shape from every side.
  The gullies come from the survey — Etna is the most radially
  symmetrical thing on that list and its one decoration is a fan of
  channels cut straight down it. Without them it rendered as a smooth
  white dome: a snowy hill, not a mountain that erupted.
- **Then the Spire broke two things, both found by testing rather than
  by looking.** The game started the player ON it — the old rule wanted
  flat ground and the rim of a crater is flat, so the ship landed on a
  snowfield 1155 m up. And the ceiling that sends you back to space was
  1500 m, below the crater rim: flying over the one landmark in the world
  put you in orbit.
- **The horizon had to move.** The ground was drawn to 12 km and the haze
  closed at 11, which was plenty at 30 m/s with nothing to look at. The
  ship now does 280 m/s and the Spire is meant to be visible from most of
  the continent, so: nine rings instead of seven (49 km — the outer ones
  are the cheapest there are, same triangles for sixteen times the
  ground) and the haze out to 34 km.
- The speed work checks out: 1000 km/h on the nose cruising, 2000 with
  the boost, and the ground keeps up — 16.6 ms a frame, worst 21.9, with
  the build queue running about 80 tiles behind at full boost, all of it
  in the far rings, because the queue builds nearest-first.
- The world grew to 130 × 86 km, Marco's call, once he saw that at
  1000 km/h you cross it in seven minutes.

## 2026-08-31 — The Tablet moves in, and the world gets a map

Marco: the Tablet *is* the inventory, so put its features in there; the
button becomes T / +; and M / − should show the map — "the full map,
every single inch of the world you created".

- **Half of it was already in his folder**, from a session on the 29th:
  the Tablet moved into the inventory as a tab, the buttons rebound, the
  map's text and styling written. But `src/map.js` and
  `src/world/mapImage.js` were never written, and `main.js` already
  imported one of them — so the game would not load at all. Worse,
  `tools/lib/browser.mjs` had been deleted, which ten smoke files import.
  Restored, and the missing halves written rather than the whole thing
  started again.
- **The world has edges now.** "Every single inch" only means something
  if there is a last inch, so — Marco's choice — one continent, 120 km
  by 80, with open sea all round it. Getting it to look like a continent
  took three goes: at 34 km, the continent noise gave an archipelago; a
  heavier land bias turned it into a sponge, because the ground's own
  dips fall below sea level everywhere and each one became a lake; what
  fixed it was LIFTING the interior a hundred and twenty metres clear of
  the water, with the lift fading to nothing at the shoreline.
- Two consequences worth writing down. The snowline is measured from the
  sea, so raising the land put snow on the fields until it was raised to
  match. And regions had to grow from 7 km to 20 km: seven kilometres was
  chosen when the world had no edges and no map, and on a 120 km
  continent it made a carpet of speckles with no geography in it.
- **The map is not a picture anybody made.** `world/mapImage.js` runs the
  same terrain rules the ground is built from over every square kilometre
  of the world and shades it as though the sun were low in the
  north-west. It takes a couple of seconds, so it draws a few rows at a
  time from the moment the game loads; press M sooner and you watch the
  world appear. The same code writes a file from
  `tools/worldstudy/map-preview.mjs`, so what the tool shows is exactly
  what the player sees.
- **A real bug, found while chasing a failing test.** The ground's rings
  were overlapping between 9% and 34% depending on where you stood —
  pure luck of alignment, because each ring snapped to its own grid. Six
  tiles across a ring is an even number, so the tiles straddle its
  centre; for the hole cut in a ring to line up with the ring inside it,
  both have to be snapped to an ODD multiple of their own tile. Snapped
  that way it is zero, everywhere. `smoke:world` now demands exactly
  that rather than "under a third".
- **And two tests that were wrong rather than two bugs.** `smoke:character`
  called the Tablet visible while it sat in a closed menu with zero
  width, because it asked the element about its own style rather than
  whether it was on the screen. `smoke:build` waited for the Tablet's
  readout to appear on its own, which stopped being true the moment the
  Tablet became a page of the inventory. Both now check the thing they
  meant to.
- **Two suites were still opening a software-rendering browser** —
  `smoke:gameover` and `smoke:world`, the two I wrote before the shared
  launcher existed. The game runs about seven times slow that way, and
  with the map now drawing itself in the background as well, the climb
  down the ladder stopped finishing inside the timeout. Both ask for the
  GPU now, and the backlog `smoke:world` measures went from 160 tiles to
  28.
- **And `smoke:onfoot` failed about one run in three** for the same
  family of reason: it held a key for 450 ms of wall clock and expected a
  fixed amount of turning, but the game advances by the frame, so a busy
  machine turns him less. It waits for the turn now instead of hoping for
  it. What that check is for is the DIRECTION — the first walk code had A
  turning him right — and the direction does not care how long it took.
- **One more, found because a test flickered rather than failed.** The
  Tablet showed in the corner of the screen for a frame or two at load,
  before the inventory took it in — long enough that `smoke:character`
  caught it about one run in ten and called the game UI untidy. It was
  right. The Tablet starts hidden now and the screen that owns it shows
  it.
- `smoke:map` is new: sixteen checks, and it reads the pixels rather than
  trusting the code that drew them — a map that came out as a blue
  rectangle would pass every check that only asked whether it had
  finished. It counts water round the rim to prove the world really does
  end in every direction, and follows the green arrow across the map as
  the ship flies east.

## 2026-08-29 — The lag while flying, and a test that had been lying

Marco: *"when I fly around with the airship, I see that the game lags
sometimes."* Measured before touching anything, over 700 frames of
flight, with the three things that do bursts of work timed separately.

- **It was the monster camps.** Up to 48 milliseconds in a single frame,
  the ground almost nothing. The camps live on a grid of squares and the
  game works out where the camp in each square stands by searching for
  flat ground — up to 160 probes, five terrain lookups each — and it did
  that for all forty-nine squares within reach every time the player
  moved sixty metres. Which at flying speed is every two seconds, and is
  exactly "sometimes".
- The answer never changes, so it is now worked out once per square and
  kept; the search is forty probes rather than a hundred and sixty; and
  no more than two new squares are examined in a frame, except the very
  first time, when the whole job is done at once under cover of the
  landing. Worst frame while flying: 66 ms before, 22 ms after, and
  nothing at all over 25 ms in 700 frames.

Chasing it turned up three other things.

- **The first shot of a burst came out of his chest.** There was a
  deliberate fallback for it — he may not have drawn yet — and that
  fallback was the bug it was meant to work around. He now draws first
  and fires when the gun is in his hand, a tenth of a second later. The
  tracer starts 1 mm from the muzzle.
- **The tests were drawing in software at three frames a second.** A
  headless browser uses no GPU unless asked, and the world is now heavy
  enough for that to matter: 3 fps against 60. The game caps its clock at
  50 ms a frame so a stutter cannot teleport anyone, so at 3 fps the game
  runs six times slower than the wall clock — and every wait in every
  suite began timing out. Eleven checks in `smoke:onfoot` were failing
  and nothing was wrong with the game. All the suites now open a browser
  with a GPU (`tools/lib/browser.mjs`), and fall back with a warning.
- **`smoke:build` had been testing a build from May.** It served `dist/`,
  and the build has gone to `docs/` since GitHub Pages needed it there.
  Pointed at the real thing, it immediately found two genuine faults: a
  404 for `/favicon.ico` (there is a real one now) and an assertion that
  the Tablet is on screen from the start, which stopped being true months
  ago. A test that checks the wrong artefact is worse than no test,
  because it reports success.

## 2026-08-28 — "the land moves in a glitchy way"

Marco flew across the new world and said the ground glitched as it
moved. He was right, and it was not one fault but five. Each was
invisible in the code and obvious the moment it was measured.

- **Lighting broke at every seam.** The normals came from
  `computeVertexNormals()`, which works a vertex's normal out from the
  triangles around it — and a tile knows nothing about its neighbours,
  so every vertex on a tile's edge got a normal from half its triangles.
  Hard lines of wrong lighting along every seam, sliding about as the
  tiles recycled. Normals now come from the terrain itself, which gives
  the same answer on both sides of any join.
- **The rings all covered the same ground.** Four sheets deep. A coarse
  sheet joins two points 16 m apart with a straight line, and in a
  hollow that line passes ABOVE the fine ground it is supposed to be
  under — so patches of the wrong surface showed through, lens-shaped,
  flickering. The rings are hollow now: a ring does not draw what the
  finer ring inside it already covers. That needed the rings to DOUBLE
  in size rather than quadruple, because at four times the size the
  inner ring covers less than two tiles of the outer one and there is
  nothing worth cutting out.
- **The hole never moved when the ring inside it did.** A ring was only
  recomputed when its own centre changed, and the hole belongs to the
  ring inside, which moves twice as often. So ring 1 went on drawing
  tiles that ring 0 had already moved over.
- **The queue filled with duplicates.** New tiles are built a few
  milliseconds at a time rather than all at once; a square still missing
  was queued again on every frame it was missing. Not merely wasted
  work: each duplicate built ANOTHER tile on ground that already had
  one, so a ring ended up drawing its whole pool of 48 tiles instead of
  30, on top of each other — the very overlap all of this was meant to
  stop. Measured: 100% of sampled points drawn twice. Now 24%, all of it
  the unavoidable band where a coarse tile straddles the hole's rim.
- **And it juddered.** Crossing a tile boundary at speed built every new
  tile in one frame: 209 ms, worst case. Two fixes. The work is now done
  on a 3 ms budget per frame, with a few spare tiles per ring so nothing
  is taken away before its replacement is ready. And filling a tile got
  four times cheaper: the heights are sampled once onto a grid with a
  two-vertex border, and the normals and the steepness are read back off
  that grid instead of costing five more terrain lookups per vertex.
  In the game: worst frame 19.1 ms, and the build queue empty while
  flying at full speed.

`smoke:world` is new and exists so none of this can come back. It paints
the sky magenta and counts anything showing through the ground (holes),
counts how much ground is drawn more than once (overlap), and measures
the time spent building — not the frame time, which on a browser drawing
in software says more about the browser than about this code.

Two of its checks were wrong the first time and passed for the wrong
reason, which is worth remembering: the hole test measured nothing at
all until the scene's own sky was taken away, and the overlap test
counted the sea — a plane that covers everything — so every point looked
as though it were drawn twice whatever the rings did.

## 2026-08-28 — A new world, measured off the real one

- Marco: delete the world and build a whole new one — but *"you should
  not copy the world, you just analyse how mountains are made, how
  deserts are made and other stuff"*, at the scale of **the whole
  world**, with everything else the game has kept and put in different
  places.
- **The yellow man is half blocked.** Street View panorama tiles come
  back `403 PERMISSION_DENIED` to a script. The panorama can be found —
  the snap lands on the official one outside Centro Commerciale Le
  Piazze — but Google will not serve the pixels, so the picture is
  black. User-uploaded photospheres do render (Big Ben came through
  fine). So: satellite from above, which is Marco's own stated fallback,
  plus something better.
- **The better thing: real elevation.** Public terrain tiles give the
  actual height of any ground on Earth. Twenty places were downloaded
  and measured — `tools/worldstudy/survey.py`, results in
  `findings/measurements.json`. Three findings ran the whole design:
  1. **Ridges come every three kilometres.** Dolomites 3.5 km, Mont
     Blanc 3.4, Annapurna 3.7, Appalachians 3.5, Jura 3.6, a Norwegian
     fjord 3.3, the Grand Canyon 3.1 — glaciated limestone, granite,
     folded sandstone, a river-cut plateau, all repeating at the same
     distance. Dunes are finer, 2.0-2.2 km.
  2. **Slope is what tells one kind of ground from another.** Median
     slope 0.3-0.7° on floodplains, 3.4° savanna, 6-9° hills, 4-11°
     dune fields, 22-32° mountains.
  3. **Real land is far SMOOTHER than fractal noise.** The measured
     power spectrum runs 1/f^3.2 to 1/f^5.6. Textbook fbm gives 1/f²,
     and that one number is why procedural terrain so often looks like
     crumpled foil. Dropping the gain from 0.5 to 0.38 fixed more than
     any other change.
- **Colours were sampled, not chosen.** k-means over the satellite
  close-ups. The striking thing is how drab they are: the Sahara reads
  #a87647, not orange; alpine meadow #536641; a salt pan #efe2c2.
- `src/world/terrain.js` is pure arithmetic — no Three.js — so the SAME
  function the game draws can be run by a tool and measured against
  Earth. `tools/worldstudy/tune.mjs` prints the generated numbers beside
  the real ones. Where it stands: dunes 6.4°/19.7° against Erg Chebbi
  and Sossusvlei's 7.4°/24.6° with 339 m of relief against their 330;
  stone desert 7.4°/25.7° against the Namib's 6.7°/23.0°; mesa country
  2.7° median against Monument Valley's 2.3°; snowfields 31.9° against
  Mont Blanc's 32.3°. Mountains come out at 34.8° — steeper than the
  Dolomites' 21.7°, nearer Mont Blanc.
- **Three mistakes worth keeping a note of.** (1) Everything was added
  on top of everything else, so every kind of ground measured the same:
  steep. Real country is made by ONE process winning — ice cut the Alps,
  water cut the Grand Canyon, wind built the Sahara — so the landforms
  are now blended between, not summed. (2) The height and the label
  disagreed: plateau tops that rose above the treeline were called
  mountain, so "mountain" measured a median slope of 0.0° — dead flat
  rock at altitude. Both now ask one function what shaped the ground.
  (3) The patch-finder checked five points 500 m apart and called the
  answer a plain; the plain had 1377 m of relief, because the middle was
  flat and the rest was a mountain range.
- `src/world/planet.js` draws it: four rings of tiles that follow the
  player, 64 m tiles at 4 m spacing under his feet out to 4 km tiles at
  the horizon, twenty kilometres of world for about 30k triangles and 60
  draw calls, at 60 fps. Moving one tile east rebuilds seven tiles, not
  forty-nine.
- Two bugs in the drawing, both invisible in code and obvious in a
  screenshot. The tile recycler keyed tiles by position in a Map, and a
  fresh ring's tiles all read "NaN,NaN" — so forty-nine collapsed into
  one entry and the first frame drew three islands in an empty sea. And
  the colour was computed from a slope measured at the ring's own
  spacing, so the same hillside came out two different colours either
  side of a ring boundary: every seam in the world showed as a staircase
  of pale steps.
- `tools/world-preview.html` (`npm run dev`, then /tools/world-preview.html)
  flies around it with none of the game in the way.
- **And then the swap.** Marco chose: Castel Maggiore gone completely,
  and the game's things spread across the world where they belong. So
  `world/neighborhood.js` (916 lines), the OSM place file and
  `tools/fetch-osm.mjs` are deleted, and `surface.js` now owns a
  POSITION in an endless world rather than a place. Leaving and coming
  back puts you where you left off.
- The camps could no longer be a list of addresses, so they became a
  GRID: every 620 m square of the world either holds a camp or does not,
  decided by hashing the square. Four camps' worth of monsters travel
  with the player and are re-pitched onto the nearest squares — the same
  square always holds the same camp, so you can still learn where they
  live and come back to a fight you left. Saves are keyed by square for
  the same reason.
- **Vexo disappeared the first time he walked on it**, and the reason
  was worth the hour. He was in the scene, visible, 5 m in front of the
  camera, projecting to the middle of the screen — and the picture
  showed grass. The ground was in front of him: I had given the terrain
  2.5 m of fine roughness for texture underfoot, and a man is 1.8 m
  tall, so the bumps swallowed him. Two fixes, both right: the texture
  is now half a metre at most, and the camera lifts itself until the
  sight line clears every rise between it and him — which the old town,
  being flat, never needed.
- Other things the swap broke, all found by the tests: `resolveWalk`
  returned an array where the walker passes one IN to be filled, so
  every step teleported him to the origin; `CRATE_SPOTS` was used above
  where it was declared; and the ceiling for leaving the atmosphere was
  620 m, which is below the tops of the mountains.
- Every suite passes. `smoke:landing` now checks that a WORLD arrives —
  many kinds of ground, none of them covering everything, mountains and
  sea, somewhere to put a ship down — and `smoke:onfoot`'s "solid things
  are solid" became "ground too steep to climb pushes him back down",
  because there is nothing solid in this world any more except the
  ground.
- **Still to come:** nothing grows on it yet. Trees, rocks and grass are
  the next piece, and then the rovers and the missions want spreading
  across the world the way the camps now are.

## 2026-08-26 — Game over, and somewhere to come back to

- Marco: *"When the hearts end, there should be a animation where Vexo
  dies and then there will be a GAME OVER sign on, it will then ask the
  player if it wants to continue playing from last saved"* — plus: look
  at how Tears of the Kingdom builds its inventory, and put the save
  button at the far right, where TotK has it.
- Two questions asked before starting, because both change the shape of
  it: what NO means (**back to the title screen**), and whether the game
  should ever save by itself (**manual button plus autosave often**).
- **Where TotK actually keeps Save.** Nine tabs across the top, and the
  last one on the right is System, whose first entry is Save. Sources:
  the [Game UI Database's TotK
  pages](https://www.gameuidatabase.com/index.php?&set=1&title=27), and
  a [TheGamer piece on the pause
  menu](https://www.thegamer.com/zelda-tears-of-the-kingdom-best-worst-ui-design-choices/).
  So the row here is Weapons | System, System last, L / R (or ← →) to
  walk along it — and the tabs come from a list, so armour and key items
  can be dropped in beside them without touching the navigation.
- **The death.** `poseDying` in `vexo.js` is four beats over about a
  second and a half: the hit rocks him back, the knees give, the arms
  come up and then out, and he goes over. The sign waits for all of it —
  a GAME OVER that lands on top of the animation steals it.
- **The bug that animation always has.** The first version played for
  one frame and then stopped: `updateWalk` sets his gait from his speed
  every frame, and a standing-still man is `idle`, so it overwrote
  `dying` immediately. He fell over for 16 milliseconds. `updateWalk`
  now returns early while he is going down.
- **`src/save.js`.** Two localStorage slots, manual and auto, and Game
  Over offers whichever is newer. Autosaves on landing, on boarding, and
  on clearing a camp. What is stored: the ship's transform, whether it
  is in town, which monsters are dead and how hurt the rest are,
  credits, upgrades bought, rovers fixed. What is NOT stored: his
  hearts — you come back in the ship and the ladder gives you a fresh
  five, so a hearts field would be a number nothing ever reads.
- **A quieter bug, found by the test rather than by playing.** Choosing
  NO went to the title state and showed nothing: `titleCard.dismiss()`
  REMOVES the card from the document after its fade, and `show()` only
  reset the opacity. Fixed — `show()` re-attaches it and calls off any
  pending removal.
- `smoke:gameover` is 30 checks against localStorage itself rather than
  against the button that claims to have written to it. A save that
  never gets written looks exactly like one that does, right up until
  the moment the player needs it.
- **And a test that had been quietly lucky.** `smoke:onfoot` started
  failing four checks — sprint measured at 7.03 m/s, an unexpectedly
  empty stamina wheel, no ladder prompt. All one cause: a bokoblin
  caught him halfway through the file. It had presumably been happening
  for a while and the automatic revive hid it, putting him back in the
  ship as though nothing had. There is now a `?peaceful=1` flag that
  keeps the camps empty, and the on-foot file uses it — it measures
  walking, not fighting, and the camps have their own file.

## 2026-08-22 — Bokoblins, camps, and something to shoot them with

- Marco asked for monsters like Tears of the Kingdom's bokoblins, and
  answered the four questions that decide the shape: they chase AND hit,
  they live in camps, hearts with a real losing state, and Vexo draws
  the pistol he has been carrying since the kit went on.
- Sources for what a bokoblin is:
  [KeenGamer's creature guide](https://www.keengamer.com/articles/guides/tears-of-the-kingdom-creature-guide-bokoblins/)
  and [Zelda Dungeon](https://www.zeldadungeon.net/wiki/Bokoblin) —
  pig-snouted, hunched, one horn, ears out sideways, colour tiers red →
  blue → black → silver, camped round fires, and they flee or rally
  around a boss.
- **The model took three passes.** First was a pig-bear: small head on
  an enormous belly, upright. What fixed it was proportion and posture —
  a BIG head thrust FORWARD of the shoulders, a modest pot belly, skinny
  bow legs, and everything built round a spine that leans fifteen
  degrees. Then the eyes were invisible because the brow ridge stuck out
  further than they did.
- Six meshes a monster, merged by material, because sixteen of them at
  thirty pieces each is not a thing a phone should be asked to draw.
- **Balance was the real work.** First playable: four monsters swinging
  freely killed him in four seconds. Three things fixed it, all standard
  and all necessary — an ATTACK TOKEN (only two of a camp may swing at
  once, the rest circle), KNOCKBACK away from the blow, and a mercy
  window of a second and a half. It reads as a fight now rather than a
  mob.
- **And aiming.** He shoots where he FACES, and the first version put
  the shot exactly there — which meant standing in a ring of monsters
  and hitting none of them, because they circle. A soft lock takes
  anything within forty degrees and turns him to it. Measured before:
  eight shots, zero hits, nearest monster 54-72 degrees off the muzzle.
- `smoke:monsters` is 17 checks, because almost none of this shows up in
  a screenshot: a monster that never notices you, one that notices you
  through a wall, a camp that doesn't alert as one, a missing mercy
  window, a shot that passes through a bokoblin — all of it looks like a
  working game until you play it for a while.

## 2026-08-22 — Walk, jog, sprint, and a stamina wheel

- Marco asked for Vexo's movement to work like Link's in Tears of the
  Kingdom, and to go and read how it does. What TotK actually does:
  stick TILT chooses walk or jog, sprint is a separate button (hold B,
  which sheathes the weapon), and sprinting spends a stamina wheel that
  leaves Link winded and vulnerable for a few seconds if it empties.
  Two details that are easy to miss and are what make the wheel
  interesting: TAPPING the button drains faster than holding it, and
  the wheel refills faster if you let off BEFORE it empties. It also
  drains at half rate through its last quarter.
- Sources: [Zelda: Tears of the Kingdom – How to
  Run](https://gamerant.com/zelda-tears-of-the-kingdom-run-controls-sprint-guide/)
  for the controls and the winded state, and
  [ZeldaSpeedRuns](https://www.zeldaspeedruns.com/totk/tech/movement)
  for the tap-versus-hold drain.
- **Three speeds**: 1.5 m/s walking, 3.3 jogging, 6.2 sprinting, with
  the stick's push ramping between the first two in two bands (a step
  would double the pace between one hundredth of stick and the next).
  Sprint is Shift, or B on the pad — the bottom face button, where
  Link's is, since A is already the climb-out.
- **The wheel** is `src/staminaWheel.js`: an SVG ring that rides beside
  him rather than sitting in a corner, because it is a thing you watch
  WHILE running and running is when you can least afford to look
  anywhere else. It hides itself when full, and goes orange when he is
  blown. Full wheel is ~5 seconds of sprint, or ~9 if you spend the
  half-rate quarter.
- **Three gaits, not one sped up.** A sprint is a different gait: stance
  shrinks to about 40% of the cycle, the knee folds to ~110° instead of
  60, the foot lands forefoot-first so the ankle starts plantarflexed,
  and there is a FLIGHT PHASE where both feet are off the ground. That
  last one fought the foot-planting from last week — the plant pins the
  lowest sole to the road, which forbids flight outright — so the plant
  now sets a floor and a bounce lifts him off it, scaled by how much of
  a run it is. It can only ever raise him, so the planted foot still
  cannot sink through the road.
- The two sets of joint curves are blended by speed rather than switched,
  so he shades from one gait into the other. `smoke:onfoot` is up to 48
  checks, including that a gentle push walks, that the wheel drains and
  shows itself, that running it dry leaves him at walking pace whatever
  the button says, and that it comes back when he stops.

## 2026-08-21 — A spine, a neck, and the walk stops being rigid

- Marco, after the gait-analysis walk landed: "Vexo walks in a rigid
  way, change it by making him more humanoid." The joint angles were
  right by then — what was missing was everything above the waist.
- **The whole figure hung off one group**, so the chest, the head and
  the arms were welded to the hips: whatever the pelvis did, they did.
  There is a `upper` group pivoting at the waist now, and a `headPivot`
  inside it pivoting at the neck. Both are made by REPARENTING after the
  build rather than by rewriting sixty part positions to be relative to
  a joint, which is how you end up with a jaw two centimetres from a
  face. (One trap: the pose functions were still writing the torso's old
  absolute height every frame, which put it 1 m above his shoulders. He
  measured 2.54 m tall until that was chased down.)
- **Overlap.** The upper body now runs 5% of a cycle behind the legs and
  the elbows 4% behind the shoulders. Hips lead, spine follows,
  shoulders follow the spine, hands trail the arms. Every joint arriving
  on the same frame is the signature of a machine, and removing that is
  most of what "more humanoid" turned out to mean.
- Plus the things a body does that a rig doesn't: shoulders counter-
  rotating against the pelvis, the pelvis dropping on the swing side,
  a lean that grows with speed, arms swinging slightly across him,
  breathing that carries on while he walks and on its own clock, toes
  turned out seven degrees, and the head holding its line down the
  street while all of it goes on underneath.
- The head also drifts on periods (0.83, 0.61, 0.37 Hz) that share no
  factor with the stride, so the cycle never comes back to exactly the
  same pose. A loop that repeats precisely every 1.6 m is the last thing
  that gives a walk away.

## 2026-08-21 — A walk built from gait analysis, and two inverted controls

- Marco: "make Vexo walk more humanoid-like, look up on the internet and
  see how a human walks like." So the walk cycle is now keyframed from
  clinical gait data rather than from a sine wave. What the reading
  changed, in order of how much it shows:
  - **The cycle is not symmetric.** Stance is 60% of it and swing 40%,
    with about 20% spent in double support. A sine wave is symmetric,
    which is exactly why sine-wave walks read as marching.
  - **The knee flexes twice.** About 15° just after the heel lands, to
    absorb the impact, and about 60° through mid-swing to clear the
    ground. The old cycle had one flexion, which is a stilt.
  - **The ankle rolls, so he needed one.** He had no ankle joint at all
    — the boot was welded to the shin. Now: neutral at heel strike,
    plantarflexed as the foot slaps flat, ~10° dorsiflexed as the body
    passes over it, then ~20° of plantarflexion to push off.
  - Hip runs from ~28° flexion at contact to ~12° extension at terminal
    stance; arms swing opposite the legs at about half the amplitude,
    elbow folding on the way forward; pelvis and shoulders counter-rotate.
- Sources: [AAPM&R, Biomechanics of Normal
  Gait](https://now.aapmr.org/biomechanics-normal-gait/) for the phase
  percentages and double support; Perry's *Gait Analysis* values via
  [Physiopedia](https://www.physio-pedia.com/Joint_Range_of_Motion_During_Gait)
  and [Kenhub](https://www.kenhub.com/en/library/anatomy/gait-cycle) for
  the joint angles.
- **The body's height is no longer authored.** An animated bob sinks his
  boots into the road, because the walk controller plants his origin on
  the ground and any dip takes the feet with it. Two-link forward
  kinematics work out where the soles actually ended up for the current
  pose, and the body hangs off the lower one — so the rise and fall
  comes out of the leg geometry for free, highest over the stance leg
  and lowest at double support, with the planted foot exactly on the
  road. `smoke:onfoot` watches the sole through ten frames of walking:
  it stays within 5 cm of the ground and something lifts by 6 cm.

Also this session, two controls that were the wrong way round:

- **Walking turned the wrong way.** His forward is (sin h, cos h), so
  raising the heading swings his nose toward the left of the screen; the
  line subtracted, so A went right and D went left. The test that now
  guards it reads the camera's own +X axis out of its world matrix
  rather than trusting my arithmetic — and it only measures in open
  ground with the camera provably behind him, because the first version
  measured beside the ship, where the boom swings wide to see past the
  hull, and reported the exact opposite.
- **The gyro steered away from the lean.** Its yaw was added to a
  positive-is-left flight axis while the sensor reports positive for
  tilting the right edge down. It subtracts now. The gyro also drives
  the camera gimbal, at a 45% share against the 20% it gets for
  steering, and the walking camera gained the look axes so there is
  something for it to drive on foot.
- Two comments in the input layer described the opposite of what the
  code does, and both cost me time: keyboard.js claimed ArrowUp pitches
  the nose up (it dives — the axis is stick-forward-is-dive), and
  gyro.js had beta's sign backwards. Corrected in place, behaviour left
  alone.

## 2026-08-21 — Out of the ship, on foot in Castel Maggiore

- Marco asked for the character in the game: a ladder off the side of
  the ship, Vexo climbing down it, and then walking around. Answers to
  the design questions: buildings solid and the whole town open, board
  by walking back to the ladder, and a watch-it-happen cutscene you can
  skip. Two rounds of steering after the first build — first "a button
  instead of landing on the grass", then "wherever the ship is, the
  button is L".
- **`src/onFoot.js`** is the whole mode, as a state machine whose states
  are the shot list: `settle → deploy → down → stepoff → walk → up →
  stow`. L anywhere over the town flies the ship down to the street
  below it, parks it, unfolds the ladder, and walks the climb down; any
  button skips to the end. L at the foot of the ladder reverses it.
- **`src/world/ladder.js`** is the ladder, built in METRES rather than
  ship units and parked in world space — the ship is scaled down here
  and the man climbing it is not, so the arithmetic belongs in the same
  units as the climber.
- **THE SCALE PROBLEM.** The ship is 2.6 units long. In space that
  number means nothing, because nothing up there has a known size; in
  town, where the streets are the real streets at a metre per unit and
  Vexo is a real 1.8 m, it means he climbs out of a spacecraft shorter
  than he is tall. Landing now scales the ship 4x for as long as it is
  down here — a believable 10.5 m fighter — and leaving puts it back.
  The chase camera's boom is in ship lengths, so it scales too; without
  that the camera sits inside its own engines.
- **`vexo.js` grew joints.** He had a shoulder and a hip and nothing
  below them, which is enough to stand still and not enough to walk. Now
  an elbow and a knee group, and three gaits posed by hand off one phase
  angle: idle, walk (cadence from actual speed, so running takes faster
  steps, not longer slides) and a ladder climb. He also carries his own
  environment map in the game — the file already warned that 0.62 metal
  with nothing to reflect renders black, and it does.
- **Walking collision** lives in `neighborhood.js`, against the same
  polygons the walls were extruded from, plus tree trunks as circles.
  Brute force with a bounding-box reject: thirty buildings and two
  hundred trees a frame is nothing, and a grid would be one more thing
  to keep in step with the geometry.

Three faults the screenshots caught, all now covered by
`tools/smoke-onfoot.mjs` (31 checks):

- The soft floor only ever sampled the terrain under the ship's CENTRE.
  Survivable at 1x; a 10.5 m aircraft with a 7.3 m span puts its nose
  into the hill in front of it. It samples the whole hull now — and
  parks at exactly that height, so climbing back in doesn't pop the ship
  into the air.
- The first ladder hung aft of the wing, at the engines. Geometrically
  fine, nonsense as a way into an aircraft. It is beside the canopy now,
  forward of the leading edge — the only place on this hull where a
  vertical ladder doesn't grow through the wing.
- The descent shot eased toward a ship falling at 22 m/s and trailed it
  by ten metres, so the ship slid out of frame and the camera watched an
  empty field arrive. The landing shot is locked to the ship now, no
  easing: it holds dead still while the town rises around it.

Also this session, on the turntable side:

- **`src/world/characterModel.js`** loads a rigged glTF/GLB into the
  viewer (`?character=1&model=...`): shadows on, PBR roughness/metalness
  nudged off the export defaults, scaled to 1.8 m and stood on the
  floor, clips driven by an `AnimationMixer`. No model file in the repo,
  so the primitive Vexo is still what you get by default — and stays
  standing there if a model fails to load.
- The viewer was relit (ACES, soft shadows, key + ambient fill). Two
  lines from the recipe don't do what they look like on three r169:
  `outputEncoding`/`sRGBEncoding` were removed in r152 (it is
  `outputColorSpace` now), and `shadow.radius` reaches the shader only
  through the VSM blur pass, so it is inert under PCFSoftShadowMap.

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
