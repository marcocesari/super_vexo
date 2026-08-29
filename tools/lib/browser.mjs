// One place that opens a browser for the tests.
//
// It asks for the real GPU. That sounds like a detail and is not: a
// headless Chromium left to itself draws in software, and the world
// this game now draws — seven rings of ground out to twelve kilometres —
// runs at THREE frames a second that way, against sixty with a GPU.
//
// Frame rate would not matter if the tests only looked at pictures, but
// they wait for things to happen: a ladder to unfold, a man to climb
// down it, a monster to reach him. The game advances its own clock by
// the frame, capped at 50 ms a frame so a stutter cannot teleport
// anybody — so at three frames a second the game runs about six times
// slower than the wall clock, and every wait in every suite times out.
// The whole on-foot suite began failing the moment the world got heavy
// enough to matter, and nothing was wrong with the game at all.
//
// Falls back to software if this machine has no such browser, and says
// so, because a suite that quietly runs six times slow is worse than one
// that tells you why it is slow.
import { chromium } from 'playwright';

let warned = false;

/**
 * @param {import('playwright').LaunchOptions} [opts]
 */
export async function launchBrowser(opts = {}) {
  try {
    return await chromium.launch({
      channel: 'chromium',
      args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'],
      ...opts,
    });
  } catch {
    if (!warned) {
      warned = true;
      console.log('note: no GPU browser available — drawing in software, '
        + 'which is much slower and may time out.');
    }
    return chromium.launch(opts);
  }
}
