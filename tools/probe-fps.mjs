// Frame-time probe: how long a frame actually takes, flying in space and
// flying over the town, with the per-frame work broken out.
//
// Reports the MEDIAN frame interval rather than the mean — one 200ms
// hitch from the browser's own housekeeping shouldn't decide the answer.
import { chromium } from 'playwright';

const URL = process.env.SMOKE_URL ?? 'http://127.0.0.1:5173';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
await page.goto(`${URL}/?skipIntro=1`, { waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.keyboard.press('Space');
await page.waitForTimeout(800);

async function measure(label, seconds = 3) {
  await page.keyboard.down('KeyW');
  const r = await page.evaluate(async (seconds) => {
    const g = window.__superVexo;
    const frames = [];
    let last = performance.now();
    const t0 = last;
    while (performance.now() - t0 < seconds * 1000) {
      await new Promise((res) => requestAnimationFrame(res));
      const now = performance.now();
      frames.push(now - last);
      last = now;
    }
    frames.sort((a, b) => a - b);
    const info = g.renderer.info.render;
    return {
      median: +frames[Math.floor(frames.length / 2)].toFixed(1),
      worst: +frames[frames.length - 1].toFixed(1),
      frames: frames.length,
      calls: info.calls,
      triangles: info.triangles,
      programs: g.renderer.info.programs?.length ?? 0,
      geometries: g.renderer.info.memory.geometries,
      textures: g.renderer.info.memory.textures,
      scale: g.frameScaler?.scale ?? 1,
    };
  }, seconds);
  await page.keyboard.up('KeyW');
  console.log(`${label}: ${r.median}ms median (${(1000 / r.median).toFixed(0)} fps), ` +
    `worst ${r.worst}ms · ${r.calls} draw calls, ${r.triangles} tris, ` +
    `${r.programs} programs, ${r.geometries} geometries, ${r.textures} textures, scale ${r.scale}`);
  return r;
}

await measure('space ', 3);
// Down to the town and fly around there.
await page.evaluate(() => { window.__superVexo.ship.mesh.position.set(-30, 65, -240); });
await page.waitForTimeout(1500);
await measure('town  ', 3);
await browser.close();
