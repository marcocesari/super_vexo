// Quick probe — load the page (no skipIntro), wait, dump all console
// messages and any page errors. Used to triage "the page is not
// working".
import { chromium } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1280, height: 800 } }).then((c) => c.newPage());

const all = [];
page.on('console', (msg) => all.push({ type: msg.type(), text: msg.text() }));
page.on('pageerror', (err) => all.push({ type: 'pageerror', text: err.message + '\n' + err.stack }));
page.on('requestfailed', (req) => all.push({ type: 'requestfailed', text: `${req.url()} ${req.failure()?.errorText}` }));

await page.goto(URL, { waitUntil: 'load' });
await page.waitForTimeout(800);

for (const m of all) {
  console.log(`[${m.type}] ${m.text}`);
}

// Also: is the cinematic DOM present?
const present = await page.evaluate(() => ({
  cinematic: !!document.getElementById('cinematic'),
  titleCard: !!document.getElementById('title-card'),
  tablet: !!document.getElementById('tablet'),
  app: !!document.getElementById('app'),
  bodyHTML: document.body.innerHTML.slice(0, 400),
}));
console.log('\nDOM state:', present);

await browser.close();
