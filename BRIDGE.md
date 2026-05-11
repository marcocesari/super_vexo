# BRIDGE.md — native iOS wrapper protocol

> The native iOS wrapper lives in a separate repo and is **out of scope**
> for this codebase. This document records the protocol Super Vexo
> expects, so the wrapper team has a single source of truth for what to
> inject and we have a single source of truth for what to consume.

This protocol is **shared verbatim** with `new_super_mario_bros_2d_all_stars`
so a single native shell can host either game without code changes.

---

## 1. Detection

The web app considers itself "inside the native wrapper" if **either**:

- `window.__p5NativeHost === true`, set by a `WKUserScript` injected at
  `WKUserScriptInjectionTimeAtDocumentStart` — i.e. before any of our
  modules run. **OR**
- `window.webkit && window.webkit.messageHandlers` exists (the default
  WKWebView surface).

The web app exposes one function as the single source of truth:

```js
isBridgeAvailable() // -> true if either condition above is met
```

Standalone browsers (Chrome on Mac, Safari on desktop) satisfy neither
condition, so `isBridgeAvailable()` returns `false` and the web app
falls back to keyboard + Web Gamepad API + DeviceOrientationEvent
without any wrapper involvement.

## 2. Gamepad — wrapper → JS

iOS / iPadOS will not pass many Bluetooth gamepads (e.g. GameSir G8)
through to `WKWebView` even though the system sees them via the
GameController framework. The wrapper reads the controller natively and
pushes state into the web app at ~60Hz via these globals:

### `window.__nativeGamepadUpdate(payload)`

Called every native tick. `payload` shape:

```js
{
  buttons: [{ p: boolean, v: number }, ...],   // up to 17 entries
  axes:    [number, number, number, number]    // float in [-1, 1]
}
```

- **Button indices** (standard mapping, extended): 0..16 →
  `A, B, X, Y, L1, R1, L2, R2, Select, Start, L3, R3, Up, Down, Left,
  Right, Home`. Vexo doesn't use all of them at M2 — only the sticks.
- **Axis indices**: 0=LX, 1=LY, 2=RX, 3=RY. Each in `[-1, 1]`.
  Positive Y values are **down** (Web Gamepad API convention).

### `window.__nativeGamepadConnection(connected)`

Boolean. Wrapper calls this when the controller connects or
disconnects. Triggers a synthetic `gamepadconnected` /
`gamepaddisconnected` event on `window`, matching the Web Gamepad API.

### How the web app reads this

The bridge module **monkey-patches `navigator.getGamepads()`** so that
when `__nativeGamepadUpdate` has been called, the next call to
`navigator.getGamepads()` returns a synthetic Gamepad object built from
the wrapper's payload. Game code therefore uses the **standard Web
Gamepad API** with no wrapper-specific calls — exactly the
"capability-detect, then use unmodified web APIs" pattern program.md
calls for.

Source: `src/native-gamepad-bridge.js`. Adapted from
`new_super_mario_bros_2d_all_stars/src/native-gamepad-bridge.js` —
**keep the global names identical to that file** so a single wrapper
build can host both games.

## 3. Gyro — standard `DeviceOrientationEvent`

The gyro path does **not** go through the bridge. The wrapper enables
the standard `DeviceOrientationEvent` in its `WKWebView` configuration;
the web app:

1. On the first user gesture (the title-card "press any key"), calls
   `DeviceOrientationEvent.requestPermission()` **if** the function
   exists (iOS 13+ requires it; macOS / desktop browsers don't have
   it). Capability-guarded.
2. On `deviceorientation` events, reads `alpha`, `beta`, `gamma` and
   subtracts the calibrated "neutral" values captured during the first
   1 second of the session.

This means there is **no wrapper-side gyro contract** to maintain.

### Mapping note

The synthetic gamepad the bridge serves always reports
`mapping: 'standard'` with axes `[LX, LY, RX, RY]`. The web app's input
code (`src/input/gamepad.js`) relies on this. **On a desktop browser**,
a USB / Bluetooth pad may instead report `mapping: ''` (non-standard)
with sticks on other axis indices — that case is logged once at
`console.info` and a calibration follow-up is parked in `BACKLOG.md`.
Inside the native wrapper the mapping is always standard, so the
production path is unaffected.

## 4. What the standalone browser sees

- `__p5NativeHost` is undefined → `isBridgeAvailable() === false`.
- `navigator.getGamepads()` is the **unpatched** browser implementation
  (so a USB / Bluetooth pad connected to a desktop still works via the
  same code path).
- `DeviceOrientationEvent.requestPermission` is undefined on desktop;
  we never call it.
- No console errors, no warnings.

## 5. HUD input-source labels

The HUD's `IN` field shows the active sources, joined with `+`:

- `KB` — at least one mapped key is held this frame
- `PAD` — a connected gamepad has any axis or button outside its
  deadzone this frame
- `GYRO` — `DeviceOrientationEvent`s are arriving **and** permission is
  granted

Outside the wrapper this is normally just `KB`.

## 6. Open items for the wrapper team

- Confirm `WKUserScriptInjectionTimeAtDocumentStart` for
  `window.__p5NativeHost = true`. (Mario's wrapper already does this.)
- Confirm `DeviceOrientationEvent` is enabled in the WKWebView config
  (Safari/WKWebView gates this behind `allowsAirPlayForMediaPlayback`
  and a `WKPreferences` flag depending on iOS version).
- No new wrapper work is required for Vexo to load with M2 features
  active — the contract is identical to the existing Mario integration.
