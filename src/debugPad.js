// On-screen gamepad debug overlay. Enabled by adding `?debugPad=1` to
// the URL. Lives entirely in DOM so it survives WebGL context loss and
// is readable even on a phone screen where you can't open DevTools.
//
// Shows:
//   - Whether the bridge is loaded and which detection path activated it
//   - How many __nativeGamepadUpdate calls have arrived (proves Swift is
//     pumping data)
//   - The raw last payload from the wrapper (so we can see the format
//     Swift is sending, not just our interpretation of it)
//   - The first connected pad's parsed buttons + axes (what game code
//     actually sees through navigator.getGamepads())
//
// This is a diagnostic tool, not a permanent UI. Keep it out of users'
// way by gating on the query param.

import { isBridgeAvailable } from './bridge.js';

export function createDebugPad() {
  const enabled = new URLSearchParams(window.location.search).get('debugPad') === '1';
  if (!enabled) return { update() {} };

  const root = document.createElement('div');
  root.id = 'debug-pad';
  Object.assign(root.style, {
    position: 'fixed',
    top: '8px',
    left: '8px',
    zIndex: '9999',
    background: 'rgba(0,0,0,0.78)',
    color: '#9af0a0',
    font: '11px ui-monospace, Menlo, Consolas, monospace',
    padding: '8px 10px',
    maxWidth: 'min(92vw, 520px)',
    maxHeight: '60vh',
    overflow: 'auto',
    border: '1px solid #3a3',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
    pointerEvents: 'none',
    lineHeight: '1.35',
  });
  document.body.appendChild(root);

  function snap() {
    const bridge = isBridgeAvailable();
    const detection = bridge
      ? (window.__p5NativeHost === true ? '__p5NativeHost=true' : 'webkit.messageHandlers')
      : '(none — desktop / non-wrapper)';
    const ready = window.__nativeGamepadBridgeReady === true;
    const updates = window.__nativeGamepadUpdateCount || 0;
    const raw = window.__nativeGamepadLastRaw;
    const pads = (typeof navigator.getGamepads === 'function')
      ? navigator.getGamepads()
      : [];
    const pad = pads && pads[0];
    let padLine = '(no pad)';
    if (pad) {
      const pressedIdx = [];
      for (let i = 0; i < pad.buttons.length; i++) {
        if (pad.buttons[i] && pad.buttons[i].pressed) pressedIdx.push(i);
      }
      padLine = `id=${JSON.stringify(pad.id)}\n` +
                `mapping=${pad.mapping}\n` +
                `axes=[${pad.axes.map((n) => n.toFixed(2)).join(', ')}]\n` +
                `pressed buttons=[${pressedIdx.join(', ') || '(none)'}]`;
    }
    return [
      `=== gamepad debug ===`,
      `bridge available: ${bridge}  (${detection})`,
      `bridge module ready: ${ready}`,
      `__nativeGamepadUpdate calls: ${updates}`,
      `last raw payload: ${raw ? JSON.stringify(raw).slice(0, 240) : '(none yet)'}`,
      ``,
      `--- navigator.getGamepads()[0] ---`,
      padLine,
    ].join('\n');
  }

  return {
    update() { root.textContent = snap(); },
  };
}
