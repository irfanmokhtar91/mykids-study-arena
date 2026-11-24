/**
 * Automated verification script:
 * Loads syllabus, generators, static data, fact tables, and questionEngine in a Node vm context
 * and enforces for EVERY grade, subject, chapter (BM & DLP EN):
 * - Zero empty/malformed sets
 * - Every set has valid options (>=2), valid correctIndex, non-empty explanation, zero NaN/undefined
 * - STRICT ZERO CROSS-SET REPEATS: no question prompt repeats anywhere in Set 1..K of a chapter!
 * - Every chapter has >= 2 complete 5-question disjoint sets
 * - Every chapter with generators hits full 12 complete 5-question sets (60 unique prompts)
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const ctx = {
  window: {},
  console,
  Math,
  Date,
  Set,
  Map,
  Array,
  Number,
  String,
  Object,
  JSON,
  parseFloat,
  parseInt,
  isNaN
};
ctx.window = ctx;

const files = [
  "js/syllabus.js",
  "js/generators.js",
  "js/data/d6.js",
  "js/data/t2.js",
  "js/data/t4.js",
  "js/data/t4_extra.js",
  "js/data/fact_tables.js",
  "js/questionEngine.js"
];

for (const f of files) {
  const code = fs.readFileSync(path.join(root, f), "utf8");
  vm.runInNewContext(code, ctx, { filename: f });
}

const App = ctx.App;
let totalSetsChecked = 0;
let totalQuestionsChecked = 0;
const errors = [];
const genChaptersNot12 = [];
const setCountHist = {};

function norm(s) {
  return String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
}

for (const [gradeId, grade] of Object.entries(App.GRADES)) {
  for (const subj of grade.subjects) {
    for (const ch of subj.chapters) {
      const hasGen = !!(App.Generators && App.Generators[gradeId] && App.Generators[gradeId][ch.id] && App.Generators[gradeId][ch.id].length > 0);
      for (const dlp of subj.dlp ? [false, true] : [false]) {
        const setCount = App.QuestionEngine.getChapterSetCount(gradeId, subj.id, ch.id, dlp);
        if (!dlp) setCountHist[setCount] = (setCountHist[setCount] || 0) + 1;

        if (setCount < 2) {
          errors.push(`TOO FEW SETS (<2): ${gradeId}/${subj.id}/${ch.id} dlp=${dlp} has ${setCount} sets`);
        }
        if (hasGen && setCount < 12) {
          genChaptersNot12.push(`${gradeId}/${subj.id}/${ch.id} (dlp=${dlp}): ${setCount}/12 sets`);
        }

        const chapterSeenQ = new Set();

        for (let setNum = 1; setNum <= setCount; setNum++) {
          totalSetsChecked++;
          const qs = App.QuestionEngine.getSetQuestions(gradeId, subj.id, ch.id, setNum, dlp);
          if (!qs || qs.length !== App.QUESTIONS_PER_SET) {
            errors.push(`BAD SET SIZE: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp} len=${qs ? qs.length : 0}`);
            continue;
          }

          for (let i = 0; i < qs.length; i++) {
            totalQuestionsChecked++;
            const q = qs[i];
            if (!q.q || /NaN|undefined/.test(q.q)) {
              errors.push(`BAD PROMPT: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${q.q}`);
            }
            const nq = norm(q.q);
            if (chapterSeenQ.has(nq)) {
              errors.push(`CROSS-SET OR IN-SET DUPLICATE Q: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp}: ${q.q}`);
            }
            chapterSeenQ.add(nq);

            if (!Array.isArray(q.options) || q.options.length < 4) {
              errors.push(`BAD OPTIONS (<4): ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            } else {
              const optSet = new Set(q.options.map((o) => String(o).trim()));
              if (optSet.size !== q.options.length) {
                errors.push(`DUPLICATE OPTIONS: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${JSON.stringify(q.options)}`);
              }
              if (q.options.some((o) => !o || /NaN|undefined/.test(o))) {
                errors.push(`BAD OPTION VALUE: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${JSON.stringify(q.options)}`);
              }
            }
            if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
              errors.push(`BAD CORRECT INDEX: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
            if (!q.explanation || /NaN|undefined/.test(q.explanation)) {
              errors.push(`BAD EXPLANATION: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
          }
        }
      }
    }
  }
}

console.log(`Checked ${totalSetsChecked} sets, ${totalQuestionsChecked} question instances (0 cross-set repeat check enabled).`);
console.log("Set counts per chapter (BM):", setCountHist);
if (genChaptersNot12.length > 0) {
  console.log("Generator chapters with <12 sets:", genChaptersNot12);
}

if (errors.length > 0) {
  console.error(`FOUND ${errors.length} ERRORS:`);
  errors.slice(0, 30).forEach((e) => console.error("  " + e));
  process.exit(1);
} else if (genChaptersNot12.length > 0) {
  console.error("Generator chapters failed to hit 12 unique sets!");
  process.exit(1);
} else {
  console.log("ALL CHECKS PASSED WITH 0 ERRORS & 0 CROSS-SET DUPLICATES!");
}
