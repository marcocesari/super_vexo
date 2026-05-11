// Capture two PNGs:
//   tools/screenshots/title.png  — initial title-card state
//   tools/screenshots/fly.png    — after a 1s throttle hold
// Run while `npm run dev` is up.
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
console.log('wrote title.png');

await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });
await page.keyboard.down('KeyW');
await page.waitForTimeout(1000);
await page.keyboard.up('KeyW');
await page.waitForTimeout(200);
await page.screenshot({ path: resolve(outDir, 'fly.png') });
console.log('wrote fly.png');

await browser.close();
