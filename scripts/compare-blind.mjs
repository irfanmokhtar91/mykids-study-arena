/**
 * Compare blind-solver answers with the private key.
 * Usage: node scripts/compare-blind.mjs <keyFile> <answersFile> [<answersFile> ...]
 * Reports per solver: agree / disagree / extra-correct (solver also picked another option) / flagged, and lists every problem item.
 */
import fs from "node:fs";
const [keyFile, ...ansFiles] = process.argv.slice(2);
const key = JSON.parse(fs.readFileSync(keyFile, "utf8"));
const byN = new Map(key.map((k) => [k.n, k]));
let bad = 0;
for (const f of ansFiles) {
  const ans = JSON.parse(fs.readFileSync(f, "utf8"));
  let agree = 0, dis = 0, multi = 0, flagged = 0;
  const lines = [];
  for (const a of ans) {
    const k = byN.get(a.n);
    if (!k) continue;
    const picks = (a.picks || []).map((p) => String(p).toUpperCase());
    const ok = picks.includes(k.correct);
    if (ok && picks.length === 1) agree++;
    else if (ok) { multi++; lines.push(`  MULTI  ${k.ref} (n=${a.n}) picked ${picks.join("/")} key ${k.correct} ${a.flag || ""}`); }
    else { dis++; lines.push(`  DISAGREE ${k.ref} (n=${a.n}) picked ${picks.join("/") || "-"} key ${k.correct} ${a.flag || ""}`); }
    if (a.flag && ok && picks.length === 1) { flagged++; lines.push(`  FLAG   ${k.ref} (n=${a.n}) ${a.flag}`); }
  }
  console.log(`${f}: answered ${ans.length}/${key.length}; exact agree ${agree}; disagree ${dis}; second option also picked ${multi}; flagged-but-agree ${flagged}`);
  lines.forEach((l) => console.log(l));
  bad += dis + multi;
}
process.exit(bad ? 2 : 0);
