// The Worst Pizza Topping — make.fun entry (program/v1, BUNDLE mode).
//
// Writes exactly one funny line (<200 characters) to entry.txt, pitching
// a terrible pizza topping the way a real person would sell it: a named
// seller, a concrete price and time, and a twist in the last clause.
//
// Deterministic: no clock, no randomness, no network. The same bytes are
// written on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 180 characters. Beat 1: Marco's pizza and its awful topping.
// Beat 2: the price and the concrete time. Beat 3 (the twist, last clause):
// even the seagulls — nature's garbage disposals — filed a complaint.
const ENTRY =
  "Marco's pizza comes topped with gas-station sushi, expired mayo and a warning label, $3 a slice every Thursday at 2 a.m. — the seagulls outside tried it once and filed a complaint.";

// Safety net, not a fallback: the line must be one line, non-blank, and
// under the 200-character gate. If it ever drifted, fail loudly instead
// of writing a bad file.
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-200, one line`);
}

// The grader runs the program with /output as the working output directory;
// an optional first argument lets a local check point the file elsewhere.
const outDir = process.argv[2] ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
