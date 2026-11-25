// The Router Confesses — make.fun entry.
// Writes a single line (at most 200 characters) to /output/entry.txt:
// a home Wi-Fi router excusing itself for dying at the climax of a movie.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You yanked my plug in 2019 and I never forgot. Tonight, at the climax, I simply chose to remember.";

// The gate only accepts 1-200 characters: fail loudly rather than
// silently writing an entry the judge would never see.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
