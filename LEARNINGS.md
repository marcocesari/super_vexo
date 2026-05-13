# LEARNINGS.md

Short notes per milestone on the new ideas the code uses. Written for
Marco — read top to bottom.

---

## M5+ — Opening cinematic

### 1. Easing functions

A linear animation feels mechanical. Easing functions take a "raw
progress" number `t ∈ [0, 1]` and bend it into a curve so motion
**accelerates and decelerates** like real physical things.

We use two in `cinematic.js`:

    smoothstep(t)       = t² (3 - 2t)
    easeInOutCubic(t)   = t < .5 ? 4t³ : 1 - (-2t + 2)³ / 2

Both start slow, speed up in the middle, and end slow. The difference
is shape — cubic is more aggressive in the middle. Try graphing them
on a calculator if you want to see the curves.

When you use them is straightforward:

    const start = 200;
    const end = 70;
    ship.x = start + (end - start) * smoothstep(local01);

`local01` is "how far into this scene we are, 0 to 1". The easing
function makes the ship enter the frame with a satisfying decelerating
arc rather than a constant drift.

### 2. A second Three.js scene

The cinematic doesn't share the game's scene — it builds its own,
with its own camera, its own lights, its own starfield. Both scenes
exist in memory at once; the game loop renders **whichever one the
state machine asks for**. When the cinematic finishes, the renderer
switches to the game scene and the cinematic scene is just left there
(it's small; garbage-collecting it doesn't earn anything).

Why this matters: a renderer can render any scene any frame. They're
just bags of objects + a camera. Once you internalize that, things
like "split screen" or "picture in picture" or "minimap" stop feeling
mysterious — they're just multiple `renderer.render(...)` calls per
frame.

### 3. One keystroke, two effects — the "consume" pattern

When the player presses Space during the cinematic, two things could
react:
- The cinematic's skip handler (skip the intro).
- The keyboard wrapper's `justPressed` queue (which the title-card
  step reads to start the game).

If we did nothing, ONE Space would skip the cinematic AND immediately
start the game — the player would never see the title.

Fix: after the skip handler runs, call `input.clearJustPressed()`.
This drains the queue so the next title-card frame sees an empty
buffer and waits for a fresh press.

This is the **consume** pattern in event-driven UIs everywhere:
whoever handles an event removes it from any shared queue so no other
handler reacts to the same event. The same pattern is why M1's
`consumeJustPressed(['KeyX'])` is named "consume" — it both reads the
press and removes it so later code in the frame can't double-fire.

---

## M4 — The Mars Rover Mission

### 1. State machines

A **state machine** is a tiny rule book: the program is always in one
state, and only certain rules let it move to other states. In M4 we
have two of them.

**Per rover**:

    untouched ──ship enters range──> in-range
    in-range  ──holding H──>          repairing
    repairing ──progress = 100%──>    fixed
    repairing ──holds released──>     in-range (resets to 0)

**Top-level mission**:

    ACTIVE ──last rover fixed──> COMPLETE

The big idea: instead of scattering "did we fix this rover yet?" flags
all over the code, we keep the state in *one* place (`src/mission.js`)
and have everything else *ask* it. The HUD asks "what should I draw?";
the audio asks "should I chirp?"; the upgrade screen asks "how many
credits?". One source of truth, many readers. That makes bugs almost
impossible — a state can't be "fixed in the HUD but not in the
audio".

### 2. A tiny economy

Earn → spend → keep playing. Credits are awarded per rover (60 each)
and on mission complete (100 bonus). Upgrades cost 80–100 credits.

Two design rules we follow:

1. **All mutation goes through `mission.spendCredits()`.** Even the
   Upgrades app doesn't deduct credits itself; it asks the mission.
   Reason: same as the state-machine rule — if anyone could decrement
   `credits`, debugging would be a nightmare.
2. **Upgrades mutate `shipConfig` directly.** The ship reads `shipConfig.maxSpeed`
   every frame, so a purchase takes effect immediately, no extra
   plumbing. The trade-off: if you ever want to *undo* an upgrade,
   you'd need to store the original values somewhere. We don't, on
   purpose — there's no refund button.

### 3. Hold-to-act with grace

Holding H for 2 seconds is a tiny game design problem in disguise:

- What if the player leaves range mid-hold?
- What if they switch to a different rover?
- What if they keep H pressed *forever*?

Our rules (see `mission.update()`):
- Leaving range → progress resets to 0. No half-saves.
- Holding H while approaching a *different* in-range rover → progress
  starts on the new one.
- Progress maxes at 1.0; further hold does nothing.

These aren't physics. They're *design decisions*. There's no "right
answer" — each one is a small judgment about how forgiving you want
the player experience to be. Marco will encounter many of these in
his own games. Write them down so future-you can change them on
purpose, not by accident.

### 4. `THREE.Group` for composite objects

A rover isn't one mesh — it's a body + 4 wheels + an antenna +
solar panel + a little red ball on top. We could merge them into one
geometry, but `THREE.Group` is simpler: parent everything under a
single Object3D, and now `group.position` moves the whole thing.

When the group rotates, the wheels rotate around the group's origin —
not their own. That's how parenting in 3D works everywhere (game
engines, Maya, Blender). You'll see this trick again when we attach
weapons or thrusters to the ship.

---

## M2 — Native gamepad + gyro bridge

### 1. Event-driven input

The keyboard in `src/input/keyboard.js` doesn't *ask* "is W pressed?"
every frame. The browser **tells** us when a key changes: it fires
`keydown` and `keyup` events.

We keep a set of currently-pressed keys, add codes on keydown, remove
them on keyup. When the game loop wants to know "is W down?" it asks
the set — instant, no overhead.

This is **event-driven** input. The alternative ("polling") would be
to check the keyboard's physical state every frame. Web browsers
won't even let you do that — there's no API for it. Events are the
only way, and once you get used to them, they're cleaner: you
respond to *changes*, not to *state*.

There's also a second set, `justPressed`, that holds keys pressed
*this frame*. The game loop reads it for one-shot actions (toggle
damping, fire warp, hack), then clears it. Without that
distinction, holding F would warp repeatedly.

### 2. Capability detection vs platform detection

The native iOS wrapper injects `window.__p5NativeHost = true`. Our
code does **not** check "are we on iOS?" — it asks "does the bridge
exist?" via `isBridgeAvailable()` in `src/bridge.js`.

That's an important rule: don't ask *who* the player is, ask *what
they can do*. The same web app could run on Android with a different
wrapper, in a future browser that supports gamepads better, or in
Safari without a wrapper at all. The capability check works in every
case; a platform check would have to be rewritten each time.

### 3. Bridge → standard API (monkey-patching)

The iOS wrapper bridge does something sneaky in `native-gamepad-bridge.js`:
it **replaces** `navigator.getGamepads()` with our own function that
returns a fake "synthetic gamepad" built from data Swift pushes in.

Why? Because the rest of the game code uses the **standard Web
Gamepad API** — `navigator.getGamepads()` — same as a desktop
browser. No iOS-specific calls anywhere. The bridge is invisible
to game code; we get a single input path that works in every
environment.

This trick is called **monkey-patching** — replacing a built-in
method with your own at runtime. Use sparingly. It's powerful but
makes debugging harder because the thing that *looks* like a
built-in is actually yours.

### 4. Sensor fusion (gyro + stick)

When two input sources both have an opinion on the same axis, how do
you combine them? That's **sensor fusion**, and it shows up
everywhere — VR headsets, drones, self-driving cars.

Our rule for pitch and yaw:

    final_axis = stick_input + GYRO_CONTRIBUTION * gyro_delta

The gamepad stick is the **primary** signal — big swings, deliberate
motion. The gyro is a **fine-tune** — small movements of the device
in the player's hands add a 20% correction on top. With more
weighting the controls feel "swimmy"; less and you can't feel the
device at all. 0.2 is the experimental sweet spot.

The math after that is just clamping the result back to `[-1, 1]`
so a player who maxes the stick AND tilts the device doesn't
suddenly get 120% input.

### 5. Calibration as "remember the rest position"

A phone never sits perfectly flat. When the player picks it up to
fly, "neutral" isn't the same physical orientation every time —
sometimes it's a couple of degrees tilted, sometimes a phone case
adds a curve. If we just used the raw `beta` and `gamma` values,
the ship would constantly veer in some direction depending on
how the player happens to be holding the device.

**Calibration** fixes this. For the first 1 second of the session
(`gyro.js`), we average every event we receive. That average becomes
`neutral`. From then on, we report **deltas** from neutral:

    pitch_input = (current_beta - neutral_beta) / 35°

Hold the device exactly as you held it during calibration → input
is zero. Tilt it 35° forward → input is +1.

This is the same idea inertial sensors use everywhere — "tare" on a
scale, "level" on a stabilizer gimbal, "calibrate" on a VR headset.

---

## M3 — Asteroid Belt + Mars

### 1. `InstancedMesh` — many objects, one draw call

Drawing 250 asteroids the obvious way means asking the GPU 250 times
"please draw this geometry with this material at this position". Each
ask has overhead. The GPU is *very* fast at drawing — it's the *asks*
that get slow.

`THREE.InstancedMesh` lets us pack all 250 positions/rotations/scales
into a single buffer the GPU reads once, then draw them all in **one**
ask. Same geometry, same material, 250× variation, no per-asteroid
JavaScript per frame (beyond the one we choose to do for spin).

Each instance's `position + rotation + scale` is a **4×4 matrix**.
`THREE.Matrix4.compose(pos, quat, scale)` builds it. We call
`mesh.setMatrixAt(i, matrix)` for each instance and then say
`mesh.instanceMatrix.needsUpdate = true` — that uploads the new
buffer to the GPU.

### 2. Sphere-sphere collision

Two spheres overlap when the distance between their centers is less
than the sum of their radii:

    overlap = (r1 + r2) - distance(center1, center2)
    if overlap > 0 → they're hitting

To **resolve** the hit we do two things:

1. **Move things apart.** Push the smaller / movable body along the
   line between centers by `overlap` so the geometry no longer
   interpenetrates. In our case the ship is movable; the asteroid
   isn't.
2. **Bounce.** Reflect the part of the ship's velocity that points
   *into* the asteroid. The "into" direction is the **contact
   normal** — the same line between centers, but as a unit vector.
   Velocity along the tangent is untouched. The formula:

        v' = v - (1 + e) * (v · n) * n

   where `e` is the **restitution** (0 = perfectly squishy, sticks;
   1 = perfectly elastic, bounces forever). We use 0.55 so the ship
   loses a bit of energy every bump — feels natural and prevents
   ping-pong.

### 3. Canvas textures

A "texture" in 3D is just an image laid onto a surface. The image can
be anything — a PNG, a JPG, **or a `<canvas>` you painted yourself in
JavaScript**.

For Mars we make a 1024×512 canvas, paint a vertical gradient for the
overall hue, splatter darker/lighter blobs for surface variation, and
add a soft radial gradient at the poles for ice caps. Then we wrap
that canvas in `THREE.CanvasTexture` and assign it as the sphere's
`map`. No image file needed.

Why this matters: textures are *data*. If you can compute the data,
you can skip downloading it. Procedural content is what makes games
like Minecraft and No Man's Sky work.

### 4. Web Audio: synthesizing sound from math

`audio.js` doesn't load a single sound file. Every sound is made on
the fly:

- **Hum** — two `OscillatorNode`s tuned to 80Hz, one detuned by 18
  cents. When two close frequencies play together they create a slow
  "wow-wow-wow" pulse (a *beat*). Run through a low-pass filter to
  cut the harsh high end. That's the engine.
- **Thrust** — a 2.5-second buffer of random samples (white noise)
  looped forever, through a band-pass filter, with the gain
  modulated by how hard you press the throttle. Pushing the
  throttle also raises the filter frequency, so the "engine" pitch
  rises. Same trick most synth pads use.

Browsers won't start audio until the player makes some gesture
(click, keypress). That's why we call `audio.start()` from the
title-card "press any key" handler.

### 5. Sprites for skybox-style objects

`THREE.Sprite` is a 2D image that always faces the camera. We use one
for the distant Sun: a soft radial-gradient texture in a sprite,
positioned far behind the camera. Every frame we copy the camera's
position into the sprite's, with a fixed `(0, 0, -2000)` offset — same
trick the starfield uses. That way the sun feels infinitely far away;
the ship can fly forever and never reach it.

---

## M1 — Earth Training Flight

### 1. The game loop and `deltaTime`

Every frame, the browser calls our `frame(now)` function via
`requestAnimationFrame`. The argument `now` is a high-precision
timestamp. We subtract the previous timestamp to get **deltaTime** (`dt`)
— the number of seconds that passed since the last frame.

Why do we care? Because computers run at different speeds:
- A new MacBook might render at 120 frames per second → `dt ≈ 0.008s`
- An old phone might render at 30 fps → `dt ≈ 0.033s`

If we wrote `cube.rotation.x += 0.01` directly, the cube would spin **4×
faster** on the fast machine. By writing `cube.rotation.x += SPEED * dt`,
the *amount per second* is the same everywhere. **Always multiply by
`dt` when you're applying motion or change over time.**

We also **clamp `dt` to 100ms max** in `main.js`. If you switch tabs for
10 seconds, the next frame would otherwise tell us "0.1s × 10s = 10
seconds passed!" and the ship would jump across the universe. Clamping
keeps the simulation sane.

### 2. 3D vectors

A 3D vector is just three numbers: `(x, y, z)`. We use them for
positions, velocities, and directions.

- **Position**: where something is. The ship's position is a point.
- **Velocity**: how fast and which way it's moving. Same three numbers,
  but interpreted as "per second".
- **Direction**: a unit vector (length = 1) that points somewhere.

In every frame we do `position += velocity × dt`. That's it — that's the
whole "physics" so far.

To find "where the ship is pointed", we take a known local direction
(forward is `(0, 0, 1)` in our ship's local frame) and **rotate it by
the ship's quaternion** — `_forward.set(0, 0, 1).applyQuaternion(...)`.
Now `_forward` is a world-space direction that always points along the
ship's nose.

### 3. Quaternions vs Euler angles

You might think rotation is easy: store three angles, "pitch yaw roll",
done. Those are called **Euler angles**. They work — until they don't.

The problem: at certain orientations (e.g. nose pointing straight up),
two of the three axes line up and you lose a degree of freedom. This is
called **gimbal lock**. Try imagining pitching up 90° and then yawing
— "yawing" no longer does what you expect.

**Quaternions** are a 4-number representation of rotation. They are
slightly weird math (the "i, j, k" cousins of complex numbers) but
they have two superpowers:

1. **No gimbal lock**, ever.
2. You can **smoothly interpolate** between any two rotations
   (`slerp`), which gimbal-locked Eulers can't do cleanly.

In `ship.js` we never write a quaternion by hand. We build a tiny
rotation for each axis (`setFromAxisAngle`) and **multiply it onto the
ship's current quaternion**. Multiplying quaternions composes rotations,
just like multiplying matrices.

Because we multiply on the **right**, each tiny rotation is applied in
the ship's **local frame**. That's why pitch always pitches the nose
regardless of how the ship is oriented in the world.

### 4. Exponential smoothing for the chase camera

We want the camera to follow the ship — but not rigidly. A rigid mount
feels static. We want it to **lag a little** so banking and turning
feels cinematic.

The classic move is "lerp toward target by some fraction each frame":

    pos = lerp(pos, target, 0.1)

But this is **frame-rate dependent**. At 60 fps it's "smooth"; at 120
fps it's twice as snappy.

Frame-rate-independent version: pick a **halflife** in seconds. After
`halflife` seconds, the camera should have closed exactly half the
distance to its target. The formula:

    alpha = 1 - 2^(-dt / halflife)
    pos.lerp(target, alpha)

Same closing speed on any machine. We use this trick for camera
position *and* its look-at point, with different halflives to tune feel.

### 5. The `THREE.Points` trick (starfield)

12,000 stars sound like a lot. But they're a single `THREE.Points`
object — one geometry, one material, **one draw call**. The GPU loves
this kind of thing.

We place each star uniformly on a sphere using the formula:

    theta = 2π × random()
    phi   = acos(2 × random() - 1)

The `acos` step is non-obvious: a naïve `phi = π × random()` would
clump stars at the poles. The `acos(2u - 1)` form fixes that. (Math
trivia: it samples the sphere's solid angle uniformly.)

Then each frame we **re-center the starfield on the camera** so the
ship never "flies past" the stars — they're meant to feel infinitely
far away, like a skybox.
