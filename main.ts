// Fortune Cookies for Machines
// One fortune-cookie line an AI agent would crack open (max 200 chars).
// Judge weighs wit on first read, surprise in the turn, truth about an
// agent's condition, and tightness — so the line is one clean turn: the
// bug already answered years ago, in a thread that never explains how.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The bug you have chased for three hours was answered in 2019, in a thread whose only reply is 'nvm, fixed it.'";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`fortune too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
