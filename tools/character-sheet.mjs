// Render Vexo as a turntable contact sheet: one full revolution laid
// out as a grid, so every angle can be checked at a glance.
//
// Frames are captured from the live viewer (`?character=1`) rather than
// a separate rig, so what the sheet shows is exactly what the game
// draws. Each frame is rendered and read back inside the same task —
// the canvas has no preserved drawing buffer, so a later read would
// come back blank.
//
// Usage (with `npm run dev` up):  node tools/character-sheet.mjs [out.png]
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const OUT = process.argv[2] ?? 'vexo-turntable.png';
const COLUMNS = 4;
const FRAMES = 12;           // every 30 degrees
const CELL_W = 320;
const CELL_H = 460;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: CELL_W, height: CELL_H } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message.split('\n')[0]));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });

await page.goto(`${URL}/?character=1`, { waitUntil: 'load' });
await page.waitForTimeout(1200);
// The caption belongs on the sheet, not in every cell.
await page.evaluate(() => { document.getElementById('character-label').style.display = 'none'; });

const dataUrl = await page.evaluate(async ({ frames, columns, cellW, cellH }) => {
  const viewer = window.__superVexo.characterViewer;
  const renderer = window.__superVexo.renderer;
  const shots = [];
  for (let i = 0; i < frames; i++) {
    viewer.setAngle((i / frames) * Math.PI * 2);
    viewer.render();
    shots.push(renderer.domElement.toDataURL('image/png'));
    // Let the browser breathe between frames.
    await new Promise((r) => requestAnimationFrame(r));
  }

  const rows = Math.ceil(frames / columns);
  const sheet = document.createElement('canvas');
  sheet.width = columns * cellW;
  sheet.height = rows * cellH;
  const ctx = sheet.getContext('2d');
  ctx.fillStyle = '#0a0e16';
  ctx.fillRect(0, 0, sheet.width, sheet.height);

  await Promise.all(shots.map((src, i) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      ctx.drawImage(img, col * cellW, row * cellH, cellW, cellH);
      // Label each cell with its angle.
      ctx.fillStyle = 'rgba(150, 200, 240, 0.75)';
      ctx.font = '12px ui-monospace, Menlo, monospace';
      ctx.fillText(`${Math.round((i / shots.length) * 360)}°`, col * cellW + 10, row * cellH + 20);
      resolve();
    };
    img.src = src;
  })));

  return sheet.toDataURL('image/png');
}, { frames: FRAMES, columns: COLUMNS, cellW: CELL_W, cellH: CELL_H });

writeFileSync(OUT, Buffer.from(dataUrl.split(',')[1], 'base64'));
console.log(`Wrote ${OUT} — ${FRAMES} angles, ${COLUMNS} across`);
if (errors.length) console.log('console errors:', errors.slice(0, 3));
await browser.close();
