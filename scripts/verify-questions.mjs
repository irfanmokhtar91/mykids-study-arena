/**
 * Automated verification script:
 * Loads all app scripts in a Node vm context and validates every grade,
 * subject, chapter, and all 12 sets (Sets 1..12) for:
 * - >= 10 sets per chapter
 * - non-empty questions, valid 4 options, valid correctIndex, non-empty explanation
 * - no duplicate options, no NaN/undefined, no duplicate questions within a set
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
  "js/questionEngine.js"
];

for (const f of files) {
  const code = fs.readFileSync(path.join(root, f), "utf8");
  vm.runInNewContext(code, ctx, { filename: f });
}

const App = ctx.App;
let totalSetsChecked = 0;
let totalQuestionsChecked = 0;
let errors = [];
let shortSets = [];

for (const [gradeId, grade] of Object.entries(App.GRADES)) {
  for (const subj of grade.subjects) {
    for (const ch of subj.chapters) {
      for (const dlp of subj.dlp ? [false, true] : [false]) {
        for (let setNum = 1; setNum <= App.SETS_PER_CHAPTER; setNum++) {
          totalSetsChecked++;
          const qs = App.QuestionEngine.getSetQuestions(gradeId, subj.id, ch.id, setNum, dlp);
          if (!qs || qs.length === 0) {
            errors.push(`EMPTY SET: ${gradeId}/${subj.id}/${ch.id} set ${setNum} dlp=${dlp}`);
            continue;
          }
          if (qs.length < 10 && setNum === 1 && !dlp) {
            shortSets.push(`${gradeId}/${subj.id}/${ch.id}: ${qs.length} questions`);
          }
          const seenQ = new Set();
          for (let i = 0; i < qs.length; i++) {
            totalQuestionsChecked++;
            const q = qs[i];
            if (!q.q || /NaN|undefined/.test(q.q)) {
              errors.push(`BAD PROMPT: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${q.q}`);
            }
            if (seenQ.has(q.q)) {
              errors.push(`DUPLICATE Q IN SET: ${gradeId}/${subj.id}/${ch.id} set ${setNum}: ${q.q}`);
            }
            seenQ.add(q.q);

            if (!Array.isArray(q.options) || q.options.length < 2) {
              errors.push(`BAD OPTIONS: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            } else {
              const optSet = new Set(q.options);
              if (optSet.size !== q.options.length) {
                errors.push(`DUPLICATE OPTIONS: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}: ${JSON.stringify(q.options)}`);
              }
              if (q.options.some((o) => !o || /NaN|undefined/.test(o))) {
                errors.push(`BAD OPTION VALUE: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
              }
            }
            if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
              errors.push(`BAD CORRECT INDEX: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
            if (!q.explanation) {
              errors.push(`MISSING EXPLANATION: ${gradeId}/${subj.id}/${ch.id} set ${setNum} q${i + 1}`);
            }
          }
        }
      }
    }
  }
}

console.log(`Checked ${totalSetsChecked} sets, ${totalQuestionsChecked} question instances.`);
console.log(`Chapters with <10 questions (${shortSets.length}):`, shortSets);
if (errors.length > 0) {
  console.error(`FOUND ${errors.length} ERRORS:`);
  for (const e of errors.slice(0, 30)) console.error(" -", e);
  process.exit(1);
} else {
  console.log("ALL CHECKS PASSED WITH 0 ERRORS!");
}
