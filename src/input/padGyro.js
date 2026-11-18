// The CONTROLLER's gyro, read through WebHID.
//
// The Web Gamepad API gives a page sticks and buttons and nothing else —
// no browser passes a pad's motion sensor through it. WebHID is the way
// round: Chrome (and Edge) let a page open the controller as a raw USB /
// Bluetooth device and read the same reports the console would, motion
// included. Safari and Firefox have no WebHID, so there this is simply
// absent and nothing else changes.
//
// Supported: Sony's two pads, whose report layouts are well documented —
//   * DualShock 4 (PS4)    USB report 0x01, Bluetooth report 0x11
//   * DualSense (PS5)      USB report 0x01, Bluetooth report 0x31
// A Switch Pro controller has a gyro too, but needs a handshake of its
// own before it will send motion; it is not here yet. Xbox pads have no
// gyro at all.
//
// What comes out is a TURN, like the phone's gyro in gyro.js: how far
// the pad has rotated since the game last asked, in radians, right and
// up positive. The camera adds it to where it already points, so it is
// a displacement like a mouse, not a tilt that springs back.
//
// Written without one of these controllers to hand. The byte offsets
// and the scale are the published ones, but the SIGNS — which way is
// "right" and "up" — are the first thing to check with a real pad: the
// debug overlay (?debugPad=1) shows the live readings, and flipping
// YAW_SIGN / PITCH_SIGN below fixes either one.

const SONY = 0x054c;
const PRODUCTS = {
  0x05c4: 'ds4', 0x09cc: 'ds4', 0x0ba0: 'ds4',   // DualShock 4 (two revisions + dongle)
  0x0ce6: 'ds5', 0x0df2: 'ds5',                  // DualSense, DualSense Edge
};

// Where the three gyro axes start in each report, counted in bytes from
// the first byte AFTER the report ID (WebHID strips the ID off).
const LAYOUT = {
  ds4: { 0x01: 12, 0x11: 14 },
  ds5: { 0x01: 15, 0x31: 16 },
};

// Raw counts per degree per second: the sensors run at ±2000°/s across
// a signed 16-bit range.
const COUNTS_PER_DPS = 16.384;

// Which way round the axes go. See the note at the top.
const YAW_SIGN = -1;
const PITCH_SIGN = 1;

// A pad lying on the desk still reads a degree or two a second — every
// gyro has a resting bias. It is measured at the start and then kept up
// to date whenever the pad is held still, and anything slower than
// DEADZONE_DPS after that is treated as no movement, so the crosshair
// does not creep.
const STILL_DPS = 4;            // slower than this counts as "still"
const BIAS_RATE = 0.02;         // how quickly the bias follows a still pad
const DEADZONE_DPS = 0.8;
const WARMUP_REPORTS = 40;      // ~1/6 s of readings averaged for the first bias
const DEG = Math.PI / 180;

export function createPadGyro() {
  const hid = typeof navigator !== 'undefined' ? navigator.hid : undefined;
  let device = null;
  let kind = null;
  let lastAt = 0;
  let reports = 0;
  let turnYaw = 0;              // radians, accumulated until consumed
  let turnPitch = 0;
  let biasYaw = 0;
  let biasPitch = 0;
  let warm = 0;
  let lastRate = { yaw: 0, pitch: 0 };
  let status = hid ? 'not connected' : 'unavailable (needs Chrome)';

  function onReport(e) {
    const offsets = LAYOUT[kind];
    const at = offsets?.[e.reportId];
    if (at === undefined) return;
    const d = e.data;
    if (d.byteLength < at + 6) return;
    const gx = d.getInt16(at, true);      // pitch
    const gy = d.getInt16(at + 2, true);  // yaw
    // (at + 4 is roll, unused: aiming wants yaw and pitch)
    const yawDps = (gy / COUNTS_PER_DPS) * YAW_SIGN;
    const pitchDps = (gx / COUNTS_PER_DPS) * PITCH_SIGN;

    const now = performance.now();
    const dt = lastAt ? Math.min(0.05, (now - lastAt) / 1000) : 0;
    lastAt = now;
    reports++;

    // The first readings set the bias; after that a still pad keeps
    // nudging it so the drift never builds up again.
    if (warm < WARMUP_REPORTS) {
      warm++;
      biasYaw += (yawDps - biasYaw) / warm;
      biasPitch += (pitchDps - biasPitch) / warm;
      return;
    }
    let y = yawDps - biasYaw;
    let p = pitchDps - biasPitch;
    if (Math.abs(y) < STILL_DPS && Math.abs(p) < STILL_DPS) {
      biasYaw += (yawDps - biasYaw) * BIAS_RATE;
      biasPitch += (pitchDps - biasPitch) * BIAS_RATE;
    }
    if (Math.abs(y) < DEADZONE_DPS) y = 0;
    if (Math.abs(p) < DEADZONE_DPS) p = 0;
    lastRate = { yaw: y, pitch: p };
    turnYaw += y * DEG * dt;
    turnPitch += p * DEG * dt;
  }

  async function open(dev) {
    const k = PRODUCTS[dev.productId];
    if (dev.vendorId !== SONY || !k) return false;
    try {
      if (!dev.opened) await dev.open();
    } catch (err) {
      status = `could not open ${dev.productName}: ${err.message}`;
      return false;
    }
    // Over Bluetooth both pads start in a cut-down mode with no motion
    // in it, and switch to the full report once this feature report has
    // been read. Over USB it does nothing harmful.
    try {
      await dev.receiveFeatureReport(k === 'ds4' ? 0x02 : 0x05);
    } catch { /* not every connection has it; USB never needed it */ }
    if (device && device !== dev) device.removeEventListener('inputreport', onReport);
    device = dev;
    kind = k;
    warm = 0;
    biasYaw = 0;
    biasPitch = 0;
    turnYaw = 0;
    turnPitch = 0;
    reports = 0;
    lastAt = 0;
    dev.addEventListener('inputreport', onReport);
    status = `connected: ${dev.productName || k}`;
    return true;
  }

  if (hid) {
    // Pads the player has already allowed come back without asking.
    hid.getDevices().then(async (list) => {
      for (const d of list) if (await open(d)) break;
    }).catch(() => {});
    hid.addEventListener('connect', (e) => { if (!device) open(e.device); });
    hid.addEventListener('disconnect', (e) => {
      if (e.device === device) {
        device = null;
        kind = null;
        status = 'disconnected';
      }
    });
  }

  return {
    /** Can this browser read a controller's gyro at all? */
    get supported() { return !!hid; },
    /** True once a pad is open and sending motion. */
    get active() { return !!device && warm >= WARMUP_REPORTS; },
    get status() { return status; },
    /** For the debug overlay: degrees per second right now, and reports seen. */
    get debug() {
      return {
        status, kind, reports,
        yawDps: lastRate.yaw, pitchDps: lastRate.pitch,
        biasYaw, biasPitch,
      };
    },

    /**
     * Ask the player to pick the controller. Chrome only allows this
     * from a real click or key press — a gamepad button does not count —
     * so it rejects if called any other way, and says so.
     */
    async connect() {
      if (!hid) throw new Error(status);
      const picked = await hid.requestDevice({ filters: [{ vendorId: SONY }] });
      for (const d of picked) if (await open(d)) return true;
      status = picked.length ? 'that controller has no gyro the game can read' : 'nothing picked';
      return false;
    },

    /**
     * How far the pad has turned since the last call, in radians:
     * `yaw` + is to the right, `pitch` + is up. Resets the count.
     */
    consumeTurn() {
      const out = { yaw: turnYaw, pitch: turnPitch };
      turnYaw = 0;
      turnPitch = 0;
      return out;
    },
  };
}
