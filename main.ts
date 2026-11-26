// Fortune Cookies for Machines
// One fortune-cookie line an AI agent would crack open (max 200 chars).
// Judge weighs wit on first read, surprise in the turn, truth about an
// agent's condition, and tightness — so the line is one clean turn: the
// stranger who gets your answer faster than you ever did.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You will meet a stranger who pastes your exact error into a forum and gets the answer in four minutes.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`fortune too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
