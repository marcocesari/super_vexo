// Cut an mp3 down to its first N seconds, on frame boundaries.
//
//   node tools/trim-mp3.mjs <in.mp3> <out.mp3> <seconds>
//
// There is no ffmpeg on this machine and adding a dependency to shorten
// one sound file is a poor trade, so this does the arithmetic directly.
// It is safe to do by hand in this direction: an mp3 is a run of
// independent frames, and KEEPING A PREFIX of them leaves a valid file.
// (Cutting the START is the dangerous one — Layer III frames can borrow
// bits from those before them, so an arbitrary first frame may decode
// with a moment of rubbish.)
//
// Two details that make the difference between "works" and "works
// everywhere": the ID3 tag is copied through, and the Xing header —
// which is what a browser reads to learn how long the file is — has its
// frame and byte counts rewritten. Leave those stale and the file
// claims a length it no longer has, which is exactly the sort of thing
// that plays fine on a laptop and loops strangely on a phone.
import { readFileSync, writeFileSync } from 'node:fs';

const [input, output, secondsArg] = process.argv.slice(2);
if (!input || !output || !secondsArg) {
  console.error('usage: node tools/trim-mp3.mjs <in.mp3> <out.mp3> <seconds>');
  process.exit(1);
}
const seconds = Number(secondsArg);

const BITRATE_V1_L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
const BITRATE_V2_L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
const SAMPLE_RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };

const buf = readFileSync(input);

// --- ID3v2, if there is one --------------------------------------------------
let start = 0;
if (buf.slice(0, 3).toString('ascii') === 'ID3') {
  // A syncsafe integer: seven bits per byte, top bit always clear.
  const size = ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14)
    | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
  start = 10 + size;
}

/** Parse a frame header, or null if this isn't one. */
function frameAt(at) {
  if (at + 4 > buf.length) return null;
  const h = buf.readUInt32BE(at);
  if (((h >>> 21) & 0x7ff) !== 0x7ff) return null;      // sync word
  const version = (h >> 19) & 3;
  const layer = (h >> 17) & 3;
  if (version === 1 || layer !== 1) return null;         // reserved / not Layer III
  const bitrateIndex = (h >> 12) & 15;
  const rateIndex = (h >> 10) & 3;
  if (bitrateIndex === 0 || bitrateIndex === 15 || rateIndex === 3) return null;
  const mpeg1 = version === 3;
  const bitrate = (mpeg1 ? BITRATE_V1_L3 : BITRATE_V2_L3)[bitrateIndex] * 1000;
  const rate = SAMPLE_RATES[version][rateIndex];
  const padding = (h >> 9) & 1;
  const samples = mpeg1 ? 1152 : 576;
  const length = Math.floor((mpeg1 ? 144 : 72) * bitrate / rate) + padding;
  return { length, samples, rate };
}

// --- Walk the frames ----------------------------------------------------------
const first = frameAt(start);
if (!first) {
  console.error('no mp3 frame found at', start);
  process.exit(1);
}
// The first frame usually carries the Xing/Info header and decodes as
// silence, so it is copied but not counted toward the running time.
const tag = buf.slice(start, start + first.length).toString('latin1');
const xingAt = Math.max(tag.indexOf('Xing'), tag.indexOf('Info'));
const hasXing = xingAt >= 0;

let at = start;
let played = 0;
let frames = 0;
if (hasXing) at += first.length;
while (at < buf.length) {
  const frame = frameAt(at);
  if (!frame) break;
  if (played + frame.samples / frame.rate > seconds) break;
  played += frame.samples / frame.rate;
  frames += 1;
  at += frame.length;
}

const out = Buffer.from(buf.slice(0, at));

// --- Tell the Xing header the truth -------------------------------------------
if (hasXing) {
  const base = start + xingAt;
  const flags = out.readUInt32BE(base + 4);
  let field = base + 8;
  if (flags & 1) { out.writeUInt32BE(frames, field); field += 4; }        // frame count
  if (flags & 2) { out.writeUInt32BE(out.length - start, field); }        // byte count
  // The seek table, if present, is left alone: it is a hundred
  // percentages into a file that just got shorter, so seeking to the
  // middle would land in the wrong place — but nothing here seeks
  // anywhere except back to zero.
}

writeFileSync(output, out);
console.log(`${input} → ${output}`);
console.log(`  ${played.toFixed(2)}s in ${frames} frames, ` +
  `${(buf.length / 1024).toFixed(0)}KB → ${(out.length / 1024).toFixed(0)}KB`);
