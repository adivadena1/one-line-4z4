// One Line, One Laugh — make.fun entry.
// Writes a single self-contained joke (<= 140 characters) to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My therapist says I deflect with humor, so I told her my childhood was a group project and I did all the work.";

if (LINE.length > 140) {
  throw new Error(`line is ${LINE.length} characters, over the 140 limit`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("line must be a single line with no line breaks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
