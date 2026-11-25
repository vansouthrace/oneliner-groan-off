// Entry for "The One-Liner Groan-Off" (u-alfasurya91-the-one-liner-groan-off-5a1febd5).
// One original dad joke, under 140 characters: the dog named Five Miles.
import * as fs from "node:fs";

const entry = "I named my dog Five Miles so I can tell people I walk Five Miles every day.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Entry written to /output/entry.txt (${entry.length} chars, limit 140).`);
