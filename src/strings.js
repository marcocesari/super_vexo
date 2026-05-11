// All player-facing text lives here so it can be edited without touching
// game code (program.md: "keep player-facing strings in a single
// src/strings.js module"). Keys are stable; values can change freely.

export const strings = {
  title: 'Super Vexo and the Mystery of the System',
  pressAnyKey: 'Press any key to start',

  hud: {
    appName: 'Tablet',
    velocity: 'VEL',
    orientation: 'ORI',
    fps: 'FPS',
    inputSource: 'IN',
    dampingOn: 'damping: ON',
    dampingOff: 'damping: OFF',
    fastTravelButton: 'FAST TRAVEL',
    fastTravelHint: 'F',
    fastTravelActive: 'warping…',
  },
};
