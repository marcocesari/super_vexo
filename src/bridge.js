// Single source of truth for "are we inside the native iOS wrapper?"
// (See program.md M2 rules and BRIDGE.md.)
//
// Anything that wants to gate behavior on the wrapper's presence calls
// `isBridgeAvailable()` — never reads the globals directly.

export function isBridgeAvailable() {
  if (typeof window === 'undefined') return false;
  if (window.__p5NativeHost === true) return true;
  if (window.webkit && window.webkit.messageHandlers) return true;
  return false;
}
