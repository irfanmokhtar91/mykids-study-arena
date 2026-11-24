import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const B = require("../js/data/blueprints.js");

let failed = 0;
const eq = (name, actual, expected) => {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(ok ? "PASS" : "FAIL", name, ok ? "" : `\n   expected ${JSON.stringify(expected)}\n   got      ${JSON.stringify(actual)}`);
  if (!ok) failed++;
};

// 1. Every paper's section marks add up to the stated paper total
B.BLUEPRINTS.forEach((bp) => {
  bp.papers.forEach((p) => {
    const sum = p.sections.reduce((a, s) => a + s.marks, 0);
    eq(`${bp.gradeId}/${bp.subjectId}/${p.id}: sections sum to ${p.marks}`, sum, p.marks);
  });
});

// 2. Every blueprint cites its source and has a duration
B.BLUEPRINTS.forEach((bp) => {
  eq(`${bp.gradeId}/${bp.subjectId}: has source`, typeof bp.source === "string" && bp.source.length > 10, true);
  bp.papers.forEach((p) => eq(`${bp.gradeId}/${bp.subjectId}/${p.id}: has minutes`, p.minutes > 0, true));
});

// 3. Known official numbers (spot checks against the KPM documents and two real sample papers)
const t2m = B.find("t2", "math").papers[0];
eq("T2 Matematik A/B/C counts", t2m.sections.map((s) => s.count), [20, 5, 6]);
eq("T2 Matematik A/B/C marks", t2m.sections.map((s) => s.marks), [20, 20, 60]);
const d6m = B.find("d6", "math").papers[0];
eq("D6 Matematik A/B", d6m.sections.map((s) => [s.count, s.marks]), [[13, 26], [2, 24]]);
eq("D6 Matematik 75 min / 50 marks", [d6m.minutes, d6m.marks], [75, 50]);
eq("T2 Sejarah C: answer 1 of 2", [B.find("t2", "sejarah").papers[0].sections[2].choose, B.find("t2", "sejarah").papers[0].sections[2].of], [1, 2]);
eq("T2 Geografi C: answer 2 of 4", [B.find("t2", "geografi").papers[0].sections[2].choose, B.find("t2", "geografi").papers[0].sections[2].of], [2, 4]);
eq("T2 BM K2 B: answer 1 of 3", [B.find("t2", "bm").papers[1].sections[1].choose, B.find("t2", "bm").papers[1].sections[1].of], [1, 3]);

// 4. Honesty guard: objective share. D6 Matematik has no objective section; T2 Matematik only 20%.
eq("D6 Matematik objective share is 0", B.objectiveShare(d6m), 0);
eq("T2 Matematik objective share is 0.2", B.objectiveShare(t2m), 0.2);
eq("T2 RBT objective share is 50/70", Math.round(B.objectiveShare(B.find("t2", "rbt").papers[0]) * 100), 71);

// 4b. Tingkatan 4 (observed SPM format): spot checks incl. the real 2023 PAT 1449/2 sample (A Q1-10, B Q11-15 at 9 marks, C worth 15)
const t4m = B.find("t4", "math");
eq("T4 Matematik K1 = 40 OAP, 90 min", [t4m.papers[0].sections[0].count, t4m.papers[0].minutes], [40, 90]);
eq("T4 Matematik K2 A/B/C counts", t4m.papers[1].sections.map((s) => s.count), [10, 5, 2]);
eq("T4 Matematik K2 B = 5 x 9 marks", t4m.papers[1].sections[1].marks / t4m.papers[1].sections[1].count, 9);
eq("T4 Matematik K2 C answer 1 of 2", [t4m.papers[1].sections[2].choose, t4m.papers[1].sections[2].of], [1, 2]);
eq("T4 Matematik K1 fully objective", B.objectiveShare(t4m.papers[0]), 1);
eq("T4 Matematik K2 has no objective", B.objectiveShare(t4m.papers[1]), 0);
eq("T4 Sejarah K2 B answer 3 of 5", [B.find("t4", "sejarah").papers[1].sections[1].choose, B.find("t4", "sejarah").papers[1].sections[1].of], [3, 5]);
eq("T4 Add Maths 3472/1 B answer 2 of 3", [B.find("t4", "addmath").papers[0].sections[1].choose, B.find("t4", "addmath").papers[0].sections[1].of], [2, 3]);
eq("T4 blueprints are labelled observed", B.BLUEPRINTS.filter((b) => b.gradeId === "t4").every((b) => /DICERAP/.test(b.source)), true);

// 5. No national format for PSV / PJPK
eq("PSV and PJPK have no blueprint", [B.find("t2", "psv"), B.find("t2", "pjpk")], [null, null]);
eq("flagged as school-set", B.NO_NATIONAL_FORMAT.t2.includes("psv") && B.NO_NATIONAL_FORMAT.t2.includes("pjpk"), true);

console.log(failed === 0 ? "BLUEPRINT_TESTS_PASSED" : `BLUEPRINT_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
