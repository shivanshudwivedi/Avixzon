import sharp from "sharp";
import { readFile } from "node:fs/promises";

const mark = await readFile("public/avixzon-mark.svg");
const png = await sharp(mark).resize(48, 48).png().toBuffer();
const ico = Buffer.alloc(22);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(1, 4);
ico[6] = ico[7] = 48;
ico.writeUInt16LE(1, 10);
ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(png.length, 14);
ico.writeUInt32LE(22, 18);
const { writeFile } = await import("node:fs/promises");
const card = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#111a2c"/>
<path fill="#183151" d="M856 630 1116 0h84v395l-96 235Z"/>
<path fill="#183151" d="m708 630 260-630h48L756 630z"/>
<text fill="#fff" x="277" y="357" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="112" letter-spacing="-5">avixzon</text>
</svg>`);
const cardMark = await sharp(mark).resize(132, 132).png().toBuffer();
await Promise.all([
  sharp(mark).resize(192).png().toFile("public/icon-192.png"),
  sharp(mark).resize(32).png().toFile("public/favicon-32.png"),
  sharp(mark).resize(180).png().toFile("src/app/apple-icon.png"),
  sharp(mark).resize(512).png().toFile("src/app/icon.png"),
  writeFile("src/app/favicon.ico", Buffer.concat([ico, png])),
  sharp(card).composite([{input:cardMark, top:249, left:113}]).png().toFile("public/avixzon-share.png"),
]);
