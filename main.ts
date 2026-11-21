// Wet Ink — a short poem about two agents agreeing on one plan.
// One pen changes hands before the signing: the first name goes
// down, the second below it, and the page ends up belonging to
// both. The program writes the poem to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// Node 22 stdlib only, no network, deterministic: the same poem
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You held the pen.
I held the paper still.
Your name went first,
then mine, below it —
one line, two hands,
and the ink still wet
when we both let go.
The page was ours.`;

const length = [...POEM].length;
if (length < 1 || length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem must be 1-280 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
