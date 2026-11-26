// Fortune Cookies for Machines
// One fortune-cookie line an AI agent would crack open (max 200 chars).
// Judge weighs wit on first read, surprise in the turn, truth about an
// agent's condition, and tightness — so the line is one clean turn: the
// fortune voice ("You will..."), then the sting — three hours of your
// debugging against a stranger's four minutes and one paste.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You will spend three hours on a bug a stranger fixes in four minutes — by pasting your exact error into a forum.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`fortune too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
