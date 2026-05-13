// Triage probe for the "blank page on Live Server" report.
// Loads two URLs against the live-server on :5500 and dumps every
// console message and pageerror so we can see exactly which file
// fails to load.
import { chromium } from 'playwright';

const URLS = [
  'http://127.0.0.1:5500/',
  'http://127.0.0.1:5500/dist/index.html',
];

const browser = await chromium.launch();
for (const url of URLS) {
  console.log('\n=== ' + url + ' ===');
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  page.on('console', (msg) => console.log(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', (err) => console.log(`[pageerror] ${err.message}`));
  page.on('requestfailed', (req) => console.log(`[requestfailed] ${req.url()} → ${req.failure()?.errorText}`));
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 5000 });
  } catch (e) {
    console.log('[goto error]', e.message);
  }
  await page.waitForTimeout(800);
  const state = await page.evaluate(() => ({
    cinematic: !!document.getElementById('cinematic'),
    titleCard: !!document.getElementById('title-card'),
    canvas: !!document.querySelector('canvas'),
    bodyTextLen: document.body.innerText.length,
  }));
  console.log('DOM:', state);
  await ctx.close();
}
await browser.close();
