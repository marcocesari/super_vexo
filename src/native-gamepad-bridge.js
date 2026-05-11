// native-gamepad-bridge.js
// ------------------------------------------------------------------
// Bridge between a native iOS host app and a web game that uses the
// standard Web Gamepad API (`navigator.getGamepads()`).
//
// Why this exists: on iOS / iPadOS many Bluetooth gamepads (incl. the
// GameSir G8) are not propagated to WKWebView, even though the system
// sees them via the GameController framework. A Swift host app reads
// them with GCController, serialises to JSON, and calls in here via
// `webView.evaluateJavaScript(...)`. This script then "fakes" a
// standard Gamepad so the game code never knows the bridge exists.
//
// Wrapper-side contract:
//   - Before the page loads, inject `window.__p5NativeHost = true` via
//     a WKUserScript at `WKUserScriptInjectionTimeAtDocumentStart`.
//   - At ~60Hz, call
//        window.__nativeGamepadUpdate({ buttons, axes })
//     buttons: [{ p: bool, v: number }] (standard mapping, 0..16)
//     axes:    [number, number, number, number]  // LX LY RX RY
//   - On controller connect/disconnect, call
//        window.__nativeGamepadConnection(true | false)
//
// Outside a native host this file is a NO-OP: the standalone browser
// keeps using the unpatched `navigator.getGamepads()`.
//
// This file's global names (`__p5NativeHost`, `__nativeGamepadUpdate`,
// `__nativeGamepadConnection`) are intentionally identical to
// new_super_mario_bros_2d_all_stars/src/native-gamepad-bridge.js so a
// single wrapper build can host both games. See BRIDGE.md.
// ------------------------------------------------------------------

(function () {
  'use strict';

  var LOG_PREFIX = '[native-gamepad-bridge]';

  // Are we inside the iOS host app?
  //   1) The native bootstrap injected __p5NativeHost, OR
  //   2) We are in a WKWebView with messageHandlers available.
  var isNativeHost =
    (typeof window.__p5NativeHost !== 'undefined' && window.__p5NativeHost === true) ||
    (typeof window.webkit !== 'undefined' &&
      window.webkit &&
      window.webkit.messageHandlers);

  if (!isNativeHost) {
    // Plain browser: don't touch anything. The game uses
    // navigator.getGamepads() as-is.
    return;
  }

  // --- Internal state, populated by Swift ----------------------------------
  var state = {
    connected: false,
    timestamp: 0,
    buttons: [], // array of {p: bool, v: number}
    axes: [],    // array of floats
  };

  function emptyButton() {
    return { pressed: false, touched: false, value: 0 };
  }

  // Build a synthetic Gamepad object matching the Web Gamepad API shape.
  function buildSyntheticGamepad() {
    // 17 buttons: extended standard mapping
    // (A,B,X,Y,L1,R1,L2,R2,Select,Start,L3,R3,Up,Down,Left,Right,Home).
    var buttons = new Array(17);
    for (var i = 0; i < 17; i++) {
      var b = state.buttons && state.buttons[i];
      if (b) {
        var pressed = !!b.p;
        var value = typeof b.v === 'number' ? b.v : (pressed ? 1 : 0);
        buttons[i] = { pressed: pressed, touched: pressed, value: value };
      } else {
        buttons[i] = emptyButton();
      }
    }

    // 4 axes = left stick X/Y + right stick X/Y. If the native side sends
    // fewer, zero-fill (harmless).
    var axes = [0, 0, 0, 0];
    if (state.axes && state.axes.length) {
      for (var j = 0; j < Math.min(4, state.axes.length); j++) {
        var v = state.axes[j];
        axes[j] = typeof v === 'number' && !isNaN(v) ? v : 0;
      }
    }

    return {
      id: 'Native iOS Gamepad (GCController bridge)',
      index: 0,
      connected: state.connected,
      timestamp: state.timestamp,
      mapping: 'standard',
      axes: axes,
      buttons: buttons,
      vibrationActuator: null,
      hapticActuators: [],
    };
  }

  // --- APIs called by Swift ------------------------------------------------

  window.__nativeGamepadUpdate = function (incoming) {
    if (!incoming) return;
    state.buttons = Array.isArray(incoming.buttons) ? incoming.buttons : [];
    state.axes = Array.isArray(incoming.axes) ? incoming.axes : [];
    state.connected = true;
    state.timestamp = (typeof performance !== 'undefined' && performance.now)
      ? performance.now()
      : Date.now();
  };

  window.__nativeGamepadConnection = function (connected) {
    var wasConnected = state.connected;
    state.connected = !!connected;
    if (!state.connected) {
      state.buttons = [];
      state.axes = [];
    }
    // Always use a plain Event: the native `GamepadEvent` constructor
    // requires its `gamepad` member to be a real DOM Gamepad instance,
    // which we cannot fabricate from JS. Listeners that want the
    // current pad call `navigator.getGamepads()` (which we patch above);
    // they don't need a real Gamepad on the event itself.
    if (state.connected !== wasConnected) {
      var eventName = state.connected ? 'gamepadconnected' : 'gamepaddisconnected';
      var ev = new Event(eventName);
      ev.gamepad = buildSyntheticGamepad();
      window.dispatchEvent(ev);
    }
  };

  // --- Monkey-patch navigator.getGamepads ---------------------------------
  // getGamepads may be absent on some iOS versions. Build from scratch if
  // so; otherwise wrap the original.
  var originalGetGamepads = (typeof navigator.getGamepads === 'function')
    ? navigator.getGamepads.bind(navigator)
    : null;

  navigator.getGamepads = function patchedGetGamepads() {
    if (state.connected) {
      return [buildSyntheticGamepad(), null, null, null];
    }
    if (originalGetGamepads) {
      try {
        return originalGetGamepads();
      } catch (e) {
        return [null, null, null, null];
      }
    }
    return [null, null, null, null];
  };

  window.__nativeGamepadBridgeReady = true;
  console.log(LOG_PREFIX, 'active: iOS host detected');
})();
