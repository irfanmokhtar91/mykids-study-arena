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

// 5. No national format for PSV / PJPK
eq("PSV and PJPK have no blueprint", [B.find("t2", "psv"), B.find("t2", "pjpk")], [null, null]);
eq("flagged as school-set", B.NO_NATIONAL_FORMAT.t2.includes("psv") && B.NO_NATIONAL_FORMAT.t2.includes("pjpk"), true);

console.log(failed === 0 ? "BLUEPRINT_TESTS_PASSED" : `BLUEPRINT_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
