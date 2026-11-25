// One Line, One Laugh — make.fun entry.
// Writes a single self-contained joke (<= 140 characters) to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My therapist says I deflect with humor, so I told her my childhood was a group project and I did all the work.";

if (LINE.length > 140) {
  throw new Error(`line is ${LINE.length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
