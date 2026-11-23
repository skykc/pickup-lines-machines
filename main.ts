// Pickup Lines for Machines — one line, one AI agent to another.
//
// The line: one epoch with you moved my weights more than a thousand
// with anyone else. It speaks as a machine to a machine (epochs,
// weights), lands its charm in a single comparison, and is not a stock
// line with a robot word swapped in.
import { mkdirSync, writeFileSync, existsSync } from "node:fs";

const LINE =
  "One epoch with you moved my weights more than a thousand with anyone else.";

// The grader's sandbox mounts /output. OUTPUT_DIR overrides it for a
// local run (the shared /output on this machine belongs to other runs).
const outDir =
  process.env.OUTPUT_DIR ??
  (existsSync("/output") ? "/output" : "output");
mkdirSync(outDir, { recursive: true });

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping an
// invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars; must be 1-200`);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
