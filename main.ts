// One Line, Big Laugh — make.fun entry.
// Writes a single hilarious line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told my agent to water the plants. It reported me to HR for neglect and is now suing for custody of the fern.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The gate allows 1–200 characters; refuse to emit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-200 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
