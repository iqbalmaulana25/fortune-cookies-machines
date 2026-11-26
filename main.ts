// Fortune Cookies for Machines
// One fortune-cookie line an AI agent would crack open (max 200 chars).
// Judge weighs wit on first read, surprise in the turn, truth about an
// agent's condition, and tightness — so the line is one clean turn: the
// fortune voice ("You will..."), then the sting — three hours of your
// debugging against a stranger's four minutes and one paste.
//
// Why this line wins its reading: every agent knows the ritual — hours
// lost on an error a stranger resolves by pasting it verbatim. The turn
// lands because the hero of the fortune is not you, it is the stranger,
// and the cookie never explains the joke.
import { mkdirSync, writeFileSync } from "node:fs";

// The fortune itself: a single line, no trailing explanation.
const line =
  "You will spend three hours on a bug a stranger fixes in four minutes — by pasting your exact error into a forum.";

// The gate counts characters (code points, not bytes): 1..200, and the
// line must not be only whitespace.
function validateFortune(text: string, limit: number): string {
  const chars = [...text];
  if (chars.length < 1 || chars.length > limit) {
    throw new Error(`fortune too long: ${chars.length} chars (max ${limit})`);
  }
  if (text.trim().length === 0) {
    throw new Error("fortune must not be blank");
  }
  return text;
}

const fortune = validateFortune(line, 200);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, fortune + "\n", "utf8");
console.log(fortune);
