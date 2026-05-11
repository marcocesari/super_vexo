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

// 1. Title card.
await page.waitForSelector('#title-card');
await page.screenshot({ path: resolve(outDir, 'title.png') });

// 2. Approaching the asteroid belt: dismiss title, hold W ~1s.
await page.keyboard.press('Space');
await page.waitForSelector('#title-card', { state: 'detached' });
await page.keyboard.down('KeyW');
await page.waitForTimeout(1500);
await page.keyboard.up('KeyW');
await page.waitForTimeout(150);
await page.screenshot({ path: resolve(outDir, 'belt.png') });

// 3. After fast travel: Mars looms.
await page.keyboard.press('KeyF');
await page.waitForTimeout(1500);
await page.screenshot({ path: resolve(outDir, 'mars.png') });

// 4. Turn around to face the Sun.
await page.keyboard.down('KeyA');
await page.waitForTimeout(2200);
await page.keyboard.up('KeyA');
await page.waitForTimeout(150);
await page.screenshot({ path: resolve(outDir, 'sun.png') });

await browser.close();
console.log('wrote title.png, belt.png, mars.png, sun.png');
