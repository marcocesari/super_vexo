# LEARNINGS.md

Short notes per milestone on the new ideas the code uses. Written for
Marco — read top to bottom.

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
