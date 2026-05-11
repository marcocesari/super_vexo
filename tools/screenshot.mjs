// Capture PNGs to tools/screenshots/. Run while `npm run dev` is up.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, 'screenshots');
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1280, height: 800 } }).then((c) => c.newPage());
await page.goto(URL, { waitUntil: 'load' });

await page.waitForSelector('#title-card');
await page.screenshot({ path: resolve(outDir, 'title.png') });

await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });

// Fast travel to Mars orbit.
await page.keyboard.press('KeyF');
await page.waitForTimeout(1500);

// Move toward a rover and hold H briefly to capture the hack prompt.
await page.evaluate(() => {
  const svr = window.__superVexo;
  const r = svr.rovers.rovers[0];
  svr.ship.mesh.position.set(r.position.x + 1, r.position.y, r.position.z);
  svr.ship.velocity.set(0, 0, 0);
});
await page.keyboard.down('KeyH');
await page.waitForTimeout(700);
await page.screenshot({ path: resolve(outDir, 'hack.png') });
await page.waitForTimeout(1300);
await page.keyboard.up('KeyH');
await page.waitForTimeout(150);
await page.screenshot({ path: resolve(outDir, 'fixed.png') });

// Force mission complete and screenshot the overlay.
await page.evaluate(() => {
  const svr = window.__superVexo;
  // Repair remaining rovers via the test shortcut.
  const unfixed = svr.rovers.rovers.filter((r) => !r.fixed);
  for (let i = 1; i < unfixed.length; i++) svr.rovers.markFixed(unfixed[i]);
  const last = unfixed[0];
  if (last) {
    svr.ship.mesh.position.set(last.position.x + 1, last.position.y, last.position.z);
    svr.ship.velocity.set(0, 0, 0);
  }
});
await page.keyboard.down('KeyH');
await page.waitForTimeout(2400);
await page.keyboard.up('KeyH');
await page.waitForTimeout(400);
await page.screenshot({ path: resolve(outDir, 'mission-complete.png') });

// Open Upgrades from the complete overlay.
await page.click('[data-action="open-upgrades"]');
await page.waitForTimeout(200);
await page.screenshot({ path: resolve(outDir, 'upgrades.png') });

await browser.close();
console.log('wrote title, hack, fixed, mission-complete, upgrades');
