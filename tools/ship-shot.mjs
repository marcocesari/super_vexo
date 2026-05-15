// Quick ship beauty shots in chase view. Run while `npm run dev` is up.
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
await page.goto(`${URL}/?skipIntro=1`, { waitUntil: 'load' });

await page.waitForSelector('#title-card');
await page.waitForTimeout(300);
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });
await page.waitForTimeout(800);

// Yaw the ship gently so the chase cam shows the wings off-axis.
for (const [name, yaw] of [['ship-back', 0], ['ship-banked', 0.5]]) {
  await page.evaluate((y) => {
    const svr = window.__superVexo;
    svr.ship.mesh.quaternion.set(0, 0, 0, 1);
    svr.ship.mesh.rotateY(y);
    svr.ship.velocity.set(0, 0, 0);
  }, yaw);
  await page.waitForTimeout(600);
  await page.screenshot({ path: resolve(outDir, `${name}.png`) });
}

await browser.close();
console.log('wrote ship-back, ship-banked');
