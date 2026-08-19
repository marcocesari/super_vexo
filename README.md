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

A project by Marco (age 12).
Built in JavaScript with [Three.js](https://threejs.org).

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

**Gamepad controls** (USB / Bluetooth pad on desktop, or the native iOS wrapper):
- **Left stick** — fly the ship: push up to thrust, left / right to turn
- **Right stick** — swing the camera around the ship. It's a gimbal, not a
  turn: the ship keeps its heading, stays dead-centre in frame, and the view
  drops back behind the tail the moment you let go. It goes the whole way
  round — hard over to either side puts you on the nose, looking the ship in
  the face — so you can see it from any angle
- **D-pad** — pitch (up / down) and roll (left / right)

**Gyroscope** adds a little fine pitch / yaw on a phone, on top of the sticks.

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
  --radius 300 --slug castel-maggiore --name "Via Giuseppe Impastato"
```

Map data © OpenStreetMap contributors, [ODbL](https://osm.org/copyright).
