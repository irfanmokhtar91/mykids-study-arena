// Deterministic tests for the Darjah 6 variant engine ("Latihan Rawak").
// Engine: js/variants.js (pure UMD). Storage: js/storage.js (browser IIFE, run in a vm with a mock window + localStorage).
// Data: js/data/pools/d6_sejarah.js and js/data/curriculum/d6_sejarah.js (browser IIFEs).
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const V = require(path.join(ROOT, "js/variants.js"));
const W = require(path.join(ROOT, "js/weakness.js"));

// Fixed UTC instants (10:00 MYT on 25/Nov/2026 = 02:00Z).
const FIXED_NOW = Date.parse("2026-11-25T02:00:00Z");
const T0 = FIXED_NOW;
const MYT_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+08:00$/;

// Date that is frozen to FIXED_NOW whenever no argument is given (storage uses new Date() / Date.now()).
class FixedDate extends Date {
  constructor(...args) {
    if (args.length === 0) super(FIXED_NOW);
    else super(...args);
  }
  static now() {
    return FIXED_NOW;
  }
}

function readRel(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function makeLocalStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => {
      m.set(k, String(v));
    },
    removeItem: (k) => {
      m.delete(k);
    },
    _map: m
  };
}

// Loads the d6 Sejarah pool, its curriculum map and js/storage.js into one fresh sandbox.
function loadAll() {
  const win = { localStorage: makeLocalStorage() };
  const ctx = vm.createContext({ window: win, Date: FixedDate });
  for (const rel of [
    "js/data/pools/d6_sejarah.js",
    "js/data/curriculum/d6_sejarah.js",
    "js/storage.js"
  ]) {
    vm.runInContext(readRel(rel), ctx, { filename: rel });
  }
  return { win, App: win.App, Storage: win.App.Storage };
}

const SEJARAH = loadAll();
const POOL = SEJARAH.App.Pools.d6.sejarah;
const CURR = SEJARAH.App.Curriculum.d6.sejarah;
const ALL_UNITS = [...new Set(POOL.map((q) => q.unit))];
const POOL_PRISTINE = JSON.stringify(POOL);

const clone = (v) => JSON.parse(JSON.stringify(v));
const snap = (v) => JSON.stringify(v);
const rank = (d) => V.DIFF_ORDER.indexOf(d);

function deepFreeze(value, seen = new WeakSet()) {
  if (value === null || typeof value !== "object" || seen.has(value)) return value;
  seen.add(value);
  for (const key of Reflect.ownKeys(value)) deepFreeze(value[key], seen);
  return Object.freeze(value);
}

/**
 * Play one full session deterministically.
 * `answer(question, idx)` returns true for a correct pick; wrong picks use the next option.
 */
function playSession({ pool = POOL, ticked = ALL_UNITS, state, seed, id, count, answer }) {
  const created = V.createSession({ pool, tickedUnits: ticked, state, seed, sessionId: id, count });
  let session = created.session;
  let st = created.state;
  const draws = [];
  for (let idx = 0; idx < 50; idx++) {
    const r = V.drawNextQuestion(pool, session, st);
    if (!r.question) break;
    session = r.session;
    st = r.state;
    const ok = answer ? answer(r.question, idx) : true;
    const selectedIndex = ok
      ? r.question.correctIndex
      : (r.question.correctIndex + 1) % r.question.options.length;
    const rec = V.recordAnswer(st, session, {
      question: r.question,
      selectedIndex,
      timeSpentMs: 4000 + idx * 100,
      nowMs: T0 + idx * 1000
    });
    st = rec.state;
    session = rec.session;
    draws.push({ q: r.question, fromRetry: r.fromRetry, idx, drawCount: st.drawCount, correct: ok, attempt: rec.attempt });
  }
  return { session, state: st, draws };
}

function firstDraw(pool, ticked, seed) {
  const { session, state } = V.createSession({ pool, tickedUnits: ticked, seed, sessionId: `fd-${seed}` });
  const r = V.drawNextQuestion(pool, session, state);
  assert.ok(r.question, "expected a first question");
  return r.question;
}

const mkQ = (id, diff, skill = "sdiff", unit = "u1") => ({
  id,
  unit,
  skill,
  diff,
  q: "Soalan ujian",
  options: ["A", "B", "C", "D"],
  correctIndex: 0,
  explanation: "",
  ref: ""
});

// Records one answer on a standalone skill (no session) and returns the new state.
function answerSkill(state, question, ok, nowMs = T0) {
  return V.recordAnswer(state, null, {
    question,
    selectedIndex: ok ? question.correctIndex : (question.correctIndex + 1) % 4,
    timeSpentMs: 1000,
    nowMs
  });
}

// ---------------------------------------------------------------------------
const results = [];
function test(name, fn) {
  try {
    fn();
    results.push({ name, ok: true });
    console.log("PASS", name);
  } catch (e) {
    results.push({ name, ok: false, error: e });
    console.log("FAIL", name, `\n   ${(e && e.message) || e}`);
  }
}

// 1. Only ticked units are drawn --------------------------------------------
test("1. only ticked units (u1, u3) are drawn across five chained sessions", () => {
  let st = V.createInitialState();
  const drawn = [];
  for (let s = 0; s < 5; s++) {
    const run = playSession({
      ticked: ["u1", "u3"],
      state: st,
      seed: `ticked-${s}`,
      id: `t1-s${s}`,
      answer: (q, i) => i % 3 !== 0
    });
    st = run.state;
    assert.equal(run.draws.length, 10);
    drawn.push(...run.draws.map((d) => d.q));
  }
  assert.equal(drawn.length, 50);
  assert.ok(drawn.every((q) => q.unit === "u1" || q.unit === "u3"), "a question outside u1/u3 was drawn");
  assert.ok(drawn.some((q) => q.unit === "u1") && drawn.some((q) => q.unit === "u3"));
});

test("1b. empty or unknown tickedUnits yields question: null", () => {
  for (const ticked of [[], ["u99"]]) {
    const { session, state } = V.createSession({ pool: POOL, tickedUnits: ticked, seed: "empty", sessionId: "e" });
    const r = V.drawNextQuestion(POOL, session, state);
    assert.equal(r.question, null, `ticked=${JSON.stringify(ticked)}`);
  }
});

// 2. Session length and no duplicates ----------------------------------------
test("2. every session has 10 draws with zero duplicate IDs, including with wrong-answer retries", () => {
  const patterns = [
    () => false, // every answer wrong: many retries
    (q, i) => i % 2 === 0,
    (q, i) => i % 4 !== 3
  ];
  let sawRetry = false;
  patterns.forEach((pat, pi) => {
    let st = V.createInitialState();
    for (let s = 0; s < 4; s++) {
      const run = playSession({ state: st, seed: `dup-${pi}-${s}`, id: `dup-${pi}-${s}`, answer: pat });
      st = run.state;
      const ids = run.draws.map((d) => d.q.id);
      assert.equal(ids.length, 10, `pattern ${pi} session ${s} length`);
      assert.equal(new Set(ids).size, 10, `duplicate question in pattern ${pi} session ${s}`);
      assert.equal(run.session.completed, true);
      if (run.draws.some((d) => d.fromRetry)) sawRetry = true;
    }
  });
  assert.ok(sawRetry, "retry path was never exercised");
});

// 3. Fresh draws and option shuffling ----------------------------------------
test("3. consecutive sessions draw a fresh set and shuffled options keep the exact answer text", () => {
  const a = playSession({ state: V.createInitialState(), seed: "fresh-a", id: "fa" });
  const b = playSession({ state: a.state, seed: "fresh-b", id: "fb" });
  const idsA = a.draws.map((d) => d.q.id);
  const idsB = b.draws.map((d) => d.q.id);
  assert.notDeepEqual(idsB, idsA, "session B repeated session A exactly");
  // Cooldown: A's draws 3..10 are still inside the 8-draw window at B's first draw (draw 11).
  for (const id of idsA.slice(2)) {
    assert.notEqual(idsB[0], id);
  }
  const rawById = new Map(POOL.map((q) => [q.id, q]));
  for (const d of [...a.draws, ...b.draws]) {
    const raw = rawById.get(d.q.id);
    assert.ok(raw, `unknown id ${d.q.id}`);
    assert.equal(d.q.options.length, 4);
    assert.equal(d.q.options[d.q.correctIndex], raw.options[raw.correctIndex], `answer text changed for ${d.q.id}`);
    assert.deepEqual([...d.q.options].sort(), [...raw.options].sort());
    assert.equal(d.q.q, raw.q);
  }
  // Shuffle varies across seeds on a single-item pool.
  const one = [POOL[0]];
  const orders = new Set();
  const correctIdx = new Set();
  for (let s = 1; s <= 40; s++) {
    const q = firstDraw(one, [one[0].unit], s);
    assert.equal(q.options[q.correctIndex], one[0].options[one[0].correctIndex]);
    orders.add(q.options.join("|"));
    correctIdx.add(q.correctIndex);
  }
  assert.ok(orders.size >= 10, `only ${orders.size} distinct option orders across 40 seeds`);
  assert.ok(correctIdx.size >= 3, `only ${correctIdx.size} distinct correctIndex values`);
});

// 4. Cooldown ----------------------------------------------------------------
test("4. a drawn question is not redrawn within the next 8 draws, including across sessions", () => {
  let st = V.createInitialState();
  const timeline = [];
  for (let s = 0; s < 8; s++) {
    const run = playSession({ state: st, seed: `cd-${s}`, id: `cd-${s}`, answer: (q, i) => (i + s) % 3 !== 0 });
    st = run.state;
    for (const d of run.draws) timeline.push({ id: d.q.id, drawCount: d.drawCount });
  }
  assert.equal(timeline.length, 80);
  assert.equal(st.drawCount, 80);
  const lastSeen = new Map();
  for (const t of timeline) {
    if (lastSeen.has(t.id)) {
      const gap = t.drawCount - lastSeen.get(t.id);
      assert.ok(gap > V.COOLDOWN_DRAWS, `${t.id} redrawn after only ${gap} draws`);
    }
    lastSeen.set(t.id, t.drawCount);
  }
});

test("4b. a question becomes eligible again once more than 8 draws have passed (new session)", () => {
  const mini = POOL.filter((q) => q.unit === "u1" && q.skill === "u1_s1").slice(0, 9);
  const s1 = playSession({ pool: mini, ticked: ["u1"], state: V.createInitialState(), seed: "mini-1", id: "m1" });
  assert.equal(s1.draws.length, 9, "9-item pool should end session 1 after 9 draws");
  const s2 = playSession({ pool: mini, ticked: ["u1"], state: s1.state, seed: "mini-2", id: "m2" });
  // At draw 9+k of session 2 only the item drawn at position k of session 1 is out of cooldown,
  // so the order is forced to repeat session 1's order.
  assert.deepEqual(
    s2.draws.map((d) => d.q.id),
    s1.draws.map((d) => d.q.id)
  );
});

// 5. Wrong answers: retry rules ----------------------------------------------
test("5a. a missed question is replaced in the SAME session by a different same-skill question at same-or-easier difficulty", () => {
  const run = playSession({ state: V.createInitialState(), seed: "retry-same", id: "rs1", answer: (q, i) => i !== 0 });
  const missed = run.draws[0].q;
  const retry = run.draws.find((d) => d.fromRetry && d.idx > 0);
  assert.ok(retry, "no retry was drawn later in the same session");
  assert.equal(retry.q.skill, missed.skill);
  assert.notEqual(retry.q.id, missed.id);
  assert.ok(rank(retry.q.diff) <= rank(missed.diff), `retry ${retry.q.diff} harder than missed ${missed.diff}`);
  assert.equal(run.draws.filter((d) => d.q.id === missed.id).length, 1, "missed question was replayed");
});

test("5b. a miss on Q10 is carried into the NEXT session as a different same-skill question", () => {
  const s1 = playSession({ state: V.createInitialState(), seed: "carry-1", id: "c1", answer: (q, i) => i !== 9 });
  const missed = s1.draws[9].q;
  assert.equal(s1.draws[9].correct, false);
  const s2 = playSession({ state: s1.state, seed: "carry-2", id: "c2", answer: () => true });
  const first = s2.draws[0];
  assert.equal(first.fromRetry, true, "first question of session 2 was not the carried retry");
  assert.equal(first.q.skill, missed.skill);
  assert.notEqual(first.q.id, missed.id);
  assert.ok(rank(first.q.diff) <= rank(missed.diff), `carried retry ${first.q.diff} harder than missed ${missed.diff}`);
});

test("5c. a carried retry is skipped while its unit is unticked, and fires once the unit is ticked again", () => {
  const s1 = playSession({ state: V.createInitialState(), seed: "skip-1", id: "k1", answer: (q, i) => i !== 9 });
  const missed = s1.draws[9].q;
  const others = ALL_UNITS.filter((u) => u !== missed.unit);
  const s2 = playSession({ ticked: others, state: s1.state, seed: "skip-2", id: "k2", answer: () => true });
  assert.equal(s2.draws.length, 10);
  assert.ok(s2.draws.every((d) => d.q.unit !== missed.unit), "a question from the unticked unit was drawn");
  assert.ok(s2.draws.every((d) => !d.fromRetry), "retry fired while its unit was unticked");
  const s3 = playSession({ state: s2.state, seed: "skip-3", id: "k3", answer: () => true });
  assert.equal(s3.draws[0].fromRetry, true, "carried retry did not fire once the unit was ticked again");
});

// 6. Difficulty ladder -------------------------------------------------------
test("6a. unseen skills start at L or M, never H, and both L and M appear", () => {
  const diffs = [];
  for (let seed = 1; seed <= 20; seed++) {
    const { session, state } = V.createSession({ pool: POOL, tickedUnits: ALL_UNITS, seed, sessionId: `sd-${seed}` });
    let sess = session;
    let st = state;
    for (let k = 0; k < 10; k++) {
      const r = V.drawNextQuestion(POOL, sess, st);
      assert.ok(r.question);
      diffs.push(r.question.diff);
      sess = r.session;
      st = r.state;
    }
  }
  assert.ok(!diffs.includes("H"), "an unseen skill started at H");
  assert.ok(diffs.includes("L") && diffs.includes("M"), "start mix lacks L or M");
});

test("6b. two consecutive correct steps up (L->M->H, clamped at H); a wrong answer steps down and resets the streak", () => {
  assert.equal(V.stepDiffUp("L"), "M");
  assert.equal(V.stepDiffUp("M"), "H");
  assert.equal(V.stepDiffUp("H"), "H");
  assert.equal(V.stepDiffDown("H"), "M");
  assert.equal(V.stepDiffDown("M"), "L");
  assert.equal(V.stepDiffDown("L"), "L");

  let st = V.createInitialState();
  const step = (q, ok) => {
    const r = answerSkill(st, q, ok);
    st = r.state;
    return st.skills.sdiff;
  };
  let sk = step(mkQ("e1", "L"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["L", 1]);
  sk = step(mkQ("e2", "L"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["M", 2]);
  sk = step(mkQ("e3", "M"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["M", 3]);
  sk = step(mkQ("e4", "M"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["H", 4]);
  sk = step(mkQ("e5", "H"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["H", 5]);
  sk = step(mkQ("e6", "H"), true);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["H", 6], "H must clamp");
  sk = step(mkQ("e7", "H"), false);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["M", 0]);
  sk = step(mkQ("e8", "M"), false);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["L", 0]);
  sk = step(mkQ("e9", "L"), false);
  assert.deepEqual([sk.targetDiff, sk.consecutiveCorrect], ["L", 0], "L must clamp");
});

// 7. Mastery -----------------------------------------------------------------
test("7. mastery needs 3 DIFFERENT correct questions AND the last 2 consecutive correct; repeats never master", () => {
  const status = (st) => V.classifySkill(st.skills.smast);
  const mastered = (st) => V.isSkillMastered(st.skills.smast);

  // <2 attempts is "belum cukup data".
  let st = V.createInitialState();
  st = answerSkill(st, mkQ("m1", "M", "smast"), true).state;
  assert.equal(status(st), "belum cukup data");
  assert.equal(mastered(st), false);

  // The SAME question correct 3 times never masters the skill.
  st = V.createInitialState();
  for (let i = 0; i < 3; i++) st = answerSkill(st, mkQ("same", "M", "smast"), true).state;
  assert.equal(mastered(st), false, "same question x3 mastered the skill");
  assert.equal(status(st), "belum cukup data");
  assert.equal(st.skills.smast.correctQuestionIds.length, 1);

  // Three DIFFERENT correct questions in a row masters it.
  st = V.createInitialState();
  for (const id of ["d1", "d2", "d3"]) st = answerSkill(st, mkQ(id, "M", "smast"), true).state;
  assert.equal(mastered(st), true);
  assert.equal(status(st), "kuat");

  // Getting the 4th answer wrong breaks mastery.
  st = answerSkill(st, mkQ("d4w", "M", "smast"), false).state;
  assert.equal(mastered(st), false);
  assert.equal(status(st), "lemah");

  // Two more DIFFERENT correct answers restore mastery.
  st = answerSkill(st, mkQ("d5", "M", "smast"), true).state;
  st = answerSkill(st, mkQ("d6", "M", "smast"), true).state;
  assert.equal(mastered(st), true);
  assert.equal(status(st), "kuat");

  // 3 unique correct but the last answer was not a correct streak of 2 -> not mastered.
  st = V.createInitialState();
  st = answerSkill(st, mkQ("g1", "M", "smast"), true).state;
  st = answerSkill(st, mkQ("g2", "M", "smast"), true).state;
  st = answerSkill(st, mkQ("g3w", "M", "smast"), false).state;
  st = answerSkill(st, mkQ("g4", "M", "smast"), true).state;
  assert.equal(st.skills.smast.correctQuestionIds.length, 3);
  assert.equal(mastered(st), false, "3 unique correct with only 1 trailing streak mastered the skill");
  st = answerSkill(st, mkQ("g5", "M", "smast"), true).state;
  assert.equal(mastered(st), true);
});

// 8. Immutability ------------------------------------------------------------
test("8. frozen inputs (state, session, pool, tickedUnits, curriculum) do not throw and are not mutated", () => {
  const pool = deepFreeze(clone(POOL));
  const curr = deepFreeze(clone(CURR));
  const tickedUnits = deepFreeze(["u1", "u2", "u4"]);

  // Build a mid-session state with two answers recorded.
  const created = V.createSession({ pool: POOL, tickedUnits: ["u1", "u2", "u4"], seed: "imm", sessionId: "imm-1" });
  let sess = created.session;
  let st = created.state;
  for (let k = 0; k < 2; k++) {
    const d = V.drawNextQuestion(POOL, sess, st);
    sess = d.session;
    st = d.state;
    const a = V.recordAnswer(st, sess, { question: d.question, selectedIndex: k === 0 ? 0 : 1, timeSpentMs: 2000, nowMs: T0 });
    sess = a.session;
    st = a.state;
  }
  const frozenState = deepFreeze(clone(st));
  const frozenSession = deepFreeze(clone(sess));
  const before = [snap(frozenState), snap(frozenSession), snap(pool), snap(tickedUnits), snap(curr)];

  const created2 = V.createSession({ pool, tickedUnits, state: frozenState, seed: "imm-2", sessionId: "imm-2" });
  assert.equal(created2.state.sessionCount, frozenState.sessionCount + 1);
  const drawn = V.drawNextQuestion(pool, frozenSession, frozenState);
  assert.ok(drawn.question);
  const q = deepFreeze(clone(drawn.question));
  V.recordAnswer(frozenState, frozenSession, { question: q, selectedIndex: 0, timeSpentMs: 1, nowMs: T0 });
  V.recordAnswer(frozenState, null, { question: q, selectedIndex: 1, timeSpentMs: 1, nowMs: T0 });
  V.summarizeSkills(frozenState, curr, { unitIds: tickedUnits, sessionSkillIds: ["u1_s1"] });
  V.summarizeSession(frozenSession, frozenState, curr);

  const after = [snap(frozenState), snap(frozenSession), snap(pool), snap(tickedUnits), snap(curr)];
  assert.deepEqual(after, before);
});

// 9. Attempt fields ----------------------------------------------------------
test("9. recordAnswer attempts carry unit, skill, diff, boolean correct, time_spent_ms and a UTC+8 timestamp", () => {
  const q = firstDraw(POOL, ALL_UNITS, "attempt-fields");
  const { session, state } = V.createSession({ pool: POOL, tickedUnits: ALL_UNITS, seed: "attempt-fields", sessionId: "af" });
  const dr = V.drawNextQuestion(POOL, session, state);
  const question = dr.question;
  assert.equal(question.id, q.id);

  const right = V.recordAnswer(dr.state, dr.session, {
    question,
    selectedIndex: question.correctIndex,
    timeSpentMs: 4321,
    nowMs: Date.parse("2026-11-25T02:00:00Z")
  }).attempt;
  assert.equal(right.unit, question.unit);
  assert.equal(right.skill, question.skill);
  assert.equal(right.diff, question.diff);
  assert.equal(right.correct, true);
  assert.equal(right.isCorrect, true);
  assert.equal(right.time_spent_ms, 4321);
  assert.equal(right.answered_at_myt, "2026-11-25T10:00:00+08:00");
  assert.equal(right.chosenText, question.options[question.correctIndex]);
  assert.equal(right.correctText, question.options[question.correctIndex]);

  const wrongIdx = (question.correctIndex + 1) % 4;
  const wrong = V.recordAnswer(dr.state, dr.session, {
    question,
    selectedIndex: wrongIdx,
    timeSpentMs: 900,
    nowMs: Date.parse("2026-11-25T18:30:00Z")
  }).attempt;
  assert.equal(wrong.correct, false);
  assert.equal(typeof wrong.correct, "boolean");
  assert.equal(wrong.time_spent_ms, 900);
  assert.equal(wrong.answered_at_myt, "2026-11-26T02:30:00+08:00", "must roll over to the next MYT day");
  assert.equal(wrong.chosenText, question.options[wrongIdx]);
  assert.equal(wrong.correctText, question.options[question.correctIndex]);

  for (const a of [right, wrong]) assert.match(a.answered_at_myt, MYT_RE);
  assert.equal(V.formatMytIso(Date.parse("2026-11-25T23:59:59Z")), "2026-11-26T07:59:59+08:00");
});

// 10. js/storage.js integration ---------------------------------------------
test("10a. variant unit ticks are normalised and stored per grade:subject", () => {
  const { win, Storage } = loadAll();
  const p = Storage.createProfile({ name: "Ujian Pelajar", gradeId: "d6", avatar: "🦊" });
  // Arrays built inside the vm realm fail assert.deepEqual (prototype check), so compare as JSON.
  assert.equal(snap(Storage.getVariantUnits(p.id, "d6", "sejarah")), snap([]));
  const saved = Storage.setVariantUnits(p.id, "d6", "sejarah", ["u1", " u3 ", "u1", "", null]);
  assert.equal(snap(saved), snap(["u1", "u3"]));
  assert.equal(snap(Storage.getVariantUnits(p.id, "d6", "sejarah")), snap(["u1", "u3"]));
  assert.equal(snap(Storage.getVariantUnits(p.id, "d6", "matematik")), snap([]));
  const persisted = JSON.parse(win.localStorage.getItem("mykids_study_arena_v1"));
  assert.deepEqual(persisted.profiles[0].variantUnits["d6:sejarah"], ["u1", "u3"]);
});

test("10b. variant state round-trips through saveVariantState / getVariantState", () => {
  const { Storage } = loadAll();
  const p = Storage.createProfile({ name: "Ujian Pelajar", gradeId: "d6", avatar: "🦊" });
  assert.equal(Storage.getVariantState(p.id, "d6", "sejarah"), null);
  const run = playSession({ ticked: ["u1", "u3"], state: V.createInitialState(), seed: "st-rt", id: "rt", answer: (q, i) => i % 2 === 0 });
  const returned = Storage.saveVariantState(p.id, "d6", "sejarah", run.state);
  assert.equal(snap(returned), snap(run.state));
  assert.equal(snap(Storage.getVariantState(p.id, "d6", "sejarah")), snap(run.state));
  assert.equal(Storage.saveVariantState(p.id, "d6", "sejarah", null), null);
  assert.equal(Storage.getVariantState(p.id, "d6", "sejarah"), null);
});

test("10c. recordAttempt(isVariant) stores unit/skill/diff/correct, questionLogs and timings, and leaves setBest/lastPlayed alone", () => {
  const { Storage } = loadAll();
  const p = Storage.createProfile({ name: "Ujian Pelajar", gradeId: "d6", avatar: "🦊" });
  const profile = () => Storage.getState().profiles.find((x) => x.id === p.id);

  // A legacy set first, so setBest and lastPlayed exist and can be checked for overwrite.
  Storage.recordAttempt(p.id, {
    gradeId: "d6",
    subjectId: "sejarah",
    subjectName: "Sejarah",
    chapterId: "u1",
    chapterTitle: "Pembentukan Malaysia",
    setNum: 1,
    score: 1,
    total: 1,
    speedBonus: 0,
    maxStreak: 0,
    mode: "set",
    answers: [{ qObj: { q: "Legacy", options: ["a", "b", "c", "d"], correctIndex: 0 }, selectedIndex: 0, isCorrect: true, elapsedSec: 3 }]
  });
  const setBestBefore = snap(profile().setBest);
  const lastPlayedBefore = snap(profile().lastPlayed);
  assert.notEqual(lastPlayedBefore, "null");

  const run = playSession({ ticked: ["u1", "u3"], state: V.createInitialState(), seed: "rec-var", id: "rv", answer: (q, i) => i % 3 !== 0 });
  const answers = run.draws.map((d) => d.attempt);
  const wrongCount = answers.filter((a) => !a.correct).length;
  Storage.recordAttempt(p.id, {
    gradeId: "d6",
    subjectId: "sejarah",
    subjectName: "Sejarah",
    chapterId: "variant",
    chapterTitle: "Latihan Rawak",
    setNum: 0,
    score: answers.filter((a) => a.correct).length,
    total: 10,
    speedBonus: 0,
    maxStreak: 0,
    mode: "variant",
    answers,
    isVariant: true,
    unitIds: ["u1", "u3"]
  });

  const prof = profile();
  assert.equal(snap(prof.setBest), setBestBefore, "variant attempt overwrote setBest");
  assert.equal(snap(prof.lastPlayed), lastPlayedBefore, "variant attempt overwrote lastPlayed");

  const h = prof.history[0];
  assert.equal(h.isVariant, true);
  assert.equal(h.setNum, "Rawak");
  assert.deepEqual(h.unitIds, ["u1", "u3"]);
  assert.equal(h.variantAttempts.length, 10);
  assert.equal(h.questionLogs.length, 10);
  assert.equal(prof.mistakeLog.length, wrongCount);

  answers.forEach((attempt, i) => {
    const va = h.variantAttempts[i];
    assert.equal(va.questionId, attempt.questionId);
    assert.equal(va.unit, attempt.unit);
    assert.equal(va.skill, attempt.skill);
    assert.equal(va.diff, attempt.diff);
    assert.equal(va.correct, attempt.correct);
    assert.equal(typeof va.correct, "boolean");
    assert.equal(va.time_spent_ms, attempt.time_spent_ms);
    assert.equal(va.answered_at_myt, attempt.answered_at_myt);
    assert.match(va.answered_at_myt, MYT_RE);

    const ql = h.questionLogs[i];
    assert.equal(ql.isCorrect, attempt.correct);
    assert.equal(ql.correct, attempt.correctText);
    assert.equal(ql.chosen, attempt.chosenText);
    assert.equal(ql.elapsedSec, attempt.elapsedSec);
    assert.equal(ql.time_spent_ms, attempt.time_spent_ms);
    assert.equal(ql.answered_at_myt, attempt.answered_at_myt);
    assert.equal(ql.unit, attempt.unit);
    assert.equal(ql.skill, attempt.skill);
    assert.equal(ql.diff, attempt.diff);
  });
});

test("10d. legacy recordAttempt keeps working and App.Weakness.analyse reads it cleanly (also after a variant attempt)", () => {
  const { Storage } = loadAll();
  const p = Storage.createProfile({ name: "Ujian Pelajar", gradeId: "d6", avatar: "🦊" });
  const legacyQ = (id, correctIndex, selectedIndex, elapsedSec) => ({
    qObj: { q: id, options: ["a", "b", "c", "d"], correctIndex },
    selectedIndex,
    isCorrect: selectedIndex === correctIndex,
    elapsedSec
  });
  Storage.recordAttempt(p.id, {
    gradeId: "d6",
    subjectId: "sejarah",
    subjectName: "Sejarah",
    chapterId: "u1",
    chapterTitle: "Pembentukan Malaysia",
    setNum: 1,
    score: 2,
    total: 3,
    speedBonus: 0,
    maxStreak: 1,
    mode: "set",
    answers: [legacyQ("S1", 0, 0, 5), legacyQ("S2", 1, 0, 9), legacyQ("S3", 2, 2, 4)]
  });
  const prof = Storage.getState().profiles.find((x) => x.id === p.id);
  assert.equal(prof.history[0].isVariant, undefined);
  assert.equal(prof.history[0].variantAttempts, undefined);
  assert.equal(prof.setBest["d6:sejarah:u1:1"].bestScore, 2);
  assert.equal(prof.mistakeLog.length, 1);

  let report = W.analyse(prof);
  assert.equal(report.chapters.length, 1);
  assert.equal(report.chapters[0].chapterId, "u1");
  assert.equal(report.chapters[0].mastery, 67);
  assert.equal(report.chapters[0].provisional, true);

  // A variant attempt on another chapter must not break the analyser either.
  const run = playSession({ ticked: ["u1"], state: V.createInitialState(), seed: "legacy-mix", id: "lm", answer: () => true });
  Storage.recordAttempt(p.id, {
    gradeId: "d6",
    subjectId: "sejarah",
    subjectName: "Sejarah",
    chapterId: "variant",
    chapterTitle: "Latihan Rawak",
    setNum: 0,
    score: 10,
    total: 10,
    speedBonus: 0,
    maxStreak: 0,
    mode: "variant",
    answers: run.draws.map((d) => d.attempt),
    isVariant: true,
    unitIds: ["u1"]
  });
  const prof2 = Storage.getState().profiles.find((x) => x.id === p.id);
  report = W.analyse(prof2);
  assert.ok(Array.isArray(report.chapters));
  assert.ok(report.chapters.some((c) => c.chapterId === "u1"));
  assert.ok(report.chapters.some((c) => c.chapterId === "variant"));
});

// 11. Curriculum names -------------------------------------------------------
test("11a. summarizeSkills maps real d6_sejarah skill and unit IDs to curriculum names", () => {
  const items = V.summarizeSkills(V.createInitialState(), CURR);
  const total = CURR.units.reduce((n, u) => n + u.skills.length, 0);
  assert.equal(items.length, total);

  const s1 = items.find((i) => i.skillId === "u1_s1");
  assert.equal(s1.unitId, "u1");
  assert.equal(s1.unitName, "Pembentukan Malaysia");
  assert.equal(s1.skillName, "Idea dan Sebab-sebab Pembentukan Malaysia");
  assert.equal(s1.status, "belum cukup data");

  for (const q of POOL) {
    const sk = items.find((i) => i.skillId === q.skill);
    assert.ok(sk, `pool skill ${q.skill} missing from curriculum`);
    assert.equal(sk.unitId, q.unit, `unit mismatch for ${q.skill}`);
  }

  const onlyU3 = V.summarizeSkills(V.createInitialState(), CURR, { unitIds: ["u3"] });
  assert.equal(onlyU3.length, CURR.units.find((u) => u.id === "u3").skills.length);
  assert.ok(onlyU3.every((i) => i.unitId === "u3"));
});

test("11b. summarizeSession maps answered skills to real unit and skill names and sorts lemah -> belum -> kuat", () => {
  const run = playSession({
    ticked: ["u1", "u3"],
    state: V.createInitialState(),
    seed: "sum-1",
    id: "sum",
    answer: (q, i) => i % 2 === 0
  });
  const sum = V.summarizeSession(run.session, run.state, CURR);
  const score = run.draws.filter((d) => d.correct).length;
  assert.equal(sum.total, 10);
  assert.equal(sum.score, score);
  assert.equal(sum.pct, Math.round((score / 10) * 100));
  assert.deepEqual([...sum.unitIds].sort(), ["u1", "u3"]);

  for (const s of sum.skills) {
    const unit = CURR.units.find((u) => u.id === s.unitId);
    assert.ok(unit, `unknown unit ${s.unitId}`);
    assert.equal(s.unitName, unit.name);
    const sk = unit.skills.find((k) => k.id === s.skillId);
    assert.ok(sk, `unknown skill ${s.skillId}`);
    assert.equal(s.skillName, sk.name);
    assert.equal(s.touchedInSession, true);
  }
  assert.deepEqual(
    [...new Set(sum.skills.map((s) => s.skillId))].sort(),
    [...new Set(run.draws.map((d) => d.q.skill))].sort()
  );
  const rankOf = { lemah: 0, "belum cukup data": 1, kuat: 2 };
  const order = sum.skills.map((s) => rankOf[s.status]);
  assert.deepEqual(order, [...order].sort((a, b) => a - b));
});

test("11c. getAvailablePools only lists subjects with both a non-empty pool and curriculum units", () => {
  const pools = V.getAvailablePools({ d6: { sejarah: POOL } }, { d6: { sejarah: CURR } }, "d6");
  assert.equal(pools.length, 1);
  assert.equal(pools[0].subjectId, "sejarah");
  assert.equal(pools[0].isGenerator, false);
  assert.equal(V.getAvailablePools({ d6: { sejarah: POOL } }, { d6: {} }, "d6").length, 0);
  assert.equal(V.getAvailablePools({ d6: { sejarah: [] } }, { d6: { sejarah: CURR } }, "d6").length, 0);
});

// 12. Generator-backed variant pools -----------------------------------------
function makeMockGeneratorFixture() {
  const curr = {
    units: [
      {
        id: "b1",
        name: "Nombor",
        skills: [
          { id: "b1_s1", name: "Tambah" },
          { id: "b1_s2", name: "Tolak" }
        ]
      },
      {
        id: "b2",
        name: "Darab",
        skills: [{ id: "b2_s1", name: "Darab asas" }]
      }
    ]
  };
  const makeEntry = (id, unit, skill, diff, op) => ({
    id,
    unit,
    skill,
    diff,
    generate(seed) {
      const rng = V.mulberry32(seed);
      const a = 10 + Math.floor(rng() * 40);
      const b = 2 + Math.floor(rng() * 19);
      const ans = op === "+" ? a + b : op === "-" ? a - b : a * b;
      return {
        sig: `${skill}:${op}:${a},${b}`,
        q: `Hitung ${a} ${op} ${b} = ?`,
        options: [String(ans), String(ans + 1), String(ans + 2), String(ans - 1)],
        correctIndex: 0,
        explanation: `${a} ${op} ${b} = ${ans}`
      };
    }
  });
  const genPool = [
    makeEntry("g_add_l", "b1", "b1_s1", "L", "+"),
    makeEntry("g_add_m", "b1", "b1_s1", "M", "+"),
    makeEntry("g_sub_l", "b1", "b1_s2", "L", "-"),
    makeEntry("g_sub_m", "b1", "b1_s2", "M", "-"),
    makeEntry("g_mul_l", "b2", "b2_s1", "L", "*"),
    makeEntry("g_mul_m", "b2", "b2_s1", "M", "*")
  ];
  return { curr, genPool, ticked: ["b1", "b2"] };
}

test("12a. getAvailablePools detects static and generator pools, deduplicates, and ignores legacy function arrays", () => {
  const { curr, genPool } = makeMockGeneratorFixture();
  const legacyFn = () => ({ q: "Legacy", options: ["1", "2", "3", "4"], correctIndex: 0 });
  const poolsRoot = { d6: { sejarah: POOL, math: genPool } };
  const currRoot = {
    d6: {
      sejarah: CURR,
      math: curr,
      nombor_operasi: curr
    }
  };
  const gensRoot = {
    d6: {
      nombor_operasi: [legacyFn]
    },
    pools: {
      d6: {
        math: { type: "generator", entries: genPool }
      }
    }
  };

  const found = V.getAvailablePools(poolsRoot, currRoot, "d6", gensRoot);
  assert.equal(found.length, 2);
  const sej = found.find((p) => p.subjectId === "sejarah");
  const math = found.find((p) => p.subjectId === "math");
  assert.ok(sej && math);
  assert.equal(sej.isGenerator, false);
  assert.equal(math.isGenerator, true);
  assert.equal(math.pool.length, genPool.length, "duplicate entries across roots must be deduplicated");
  assert.equal(found.some((p) => p.subjectId === "nombor_operasi"), false, "legacy function array must be ignored");

  // Direct generator-entry array under generatorsRoot[gradeId] is accepted when entries satisfy isGeneratorEntry.
  const directFound = V.getAvailablePools(null, currRoot, "d6", { d6: { math: genPool, nombor_operasi: [legacyFn] } });
  assert.equal(directFound.length, 1);
  assert.equal(directFound[0].subjectId, "math");
  assert.equal(directFound[0].isGenerator, true);
});

test("12b. generator draws are deterministic by seed, have no duplicate sig/q in session, and honor 8-draw cooldown", () => {
  const { genPool, ticked } = makeMockGeneratorFixture();
  const runA = playSession({ pool: genPool, ticked, state: V.createInitialState(), seed: "gen-det-1", id: "gd1" });
  const runB = playSession({ pool: genPool, ticked, state: V.createInitialState(), seed: "gen-det-1", id: "gd1" });
  assert.equal(runA.draws.length, 10);
  assert.deepEqual(
    runA.draws.map((d) => ({ id: d.q.id, sig: d.q.sig, q: d.q.q, options: d.q.options, ci: d.q.correctIndex })),
    runB.draws.map((d) => ({ id: d.q.id, sig: d.q.sig, q: d.q.q, options: d.q.options, ci: d.q.correctIndex }))
  );

  assert.equal(new Set(runA.draws.map((d) => d.q.sig)).size, 10, "duplicate sig in 10-question session");
  assert.equal(
    new Set(runA.draws.map((d) => V.normalizePromptText(d.q.q))).size,
    10,
    "duplicate prompt text in 10-question session"
  );

  // Bounded 10-variant generator across 2 chained sessions verifies 8-draw cooldown.
  const boundedPool = [
    {
      id: "bounded",
      unit: "b1",
      skill: "b1_s1",
      diff: "L",
      generate(seed) {
        const k = seed % 10;
        return {
          sig: `b_sig_${k}`,
          q: `Soalan terhad #${k}?`,
          options: [String(k), String(k + 1), String(k + 2), String(k + 3)],
          correctIndex: 0
        };
      }
    }
  ];
  let st = V.createInitialState();
  const timeline = [];
  for (let s = 0; s < 3; s++) {
    const run = playSession({ pool: boundedPool, ticked: ["b1"], state: st, seed: `bcd-${s}`, id: `bcd-${s}` });
    st = run.state;
    for (const d of run.draws) timeline.push({ sig: d.q.sig, drawCount: d.drawCount });
  }
  const lastSeen = new Map();
  for (const t of timeline) {
    if (lastSeen.has(t.sig)) {
      const gap = t.drawCount - lastSeen.get(t.sig);
      assert.ok(gap > V.COOLDOWN_DRAWS, `${t.sig} redrawn after only ${gap} draws`);
    }
    lastSeen.set(t.sig, t.drawCount);
  }
});

test("12c. wrong answer on generated question triggers same-skill retry with different sig and q text at <= diff", () => {
  const { genPool, ticked } = makeMockGeneratorFixture();
  const run = playSession({
    pool: genPool,
    ticked,
    state: V.createInitialState(),
    seed: "gen-retry-1",
    id: "gr1",
    answer: (q, i) => i !== 0
  });
  const missed = run.draws[0].q;
  const retry = run.draws.find((d) => d.fromRetry && d.idx > 0);
  assert.ok(retry, "no retry was drawn for generated question");
  assert.equal(retry.q.skill, missed.skill);
  assert.notEqual(retry.q.sig, missed.sig);
  assert.notEqual(V.normalizePromptText(retry.q.q), V.normalizePromptText(missed.q));
  assert.ok(rank(retry.q.diff) <= rank(missed.diff), `retry ${retry.q.diff} harder than ${missed.diff}`);
});

test("12d. generator mastery requires 3 different sigs AND 2 consecutive correct answers", () => {
  const mkGenQ = (id, sig, diff = "M") => ({
    id,
    sig,
    unit: "b1",
    skill: "b1_s1",
    diff,
    q: `Soalan ${id}`,
    options: ["A", "B", "C", "D"],
    correctIndex: 0
  });

  // Same sig 3 times (even with distinct ids) must NOT master.
  let st = V.createInitialState();
  for (let i = 0; i < 3; i++) {
    st = answerSkill(st, mkGenQ(`g_dup_${i}`, "sig_same"), true).state;
  }
  assert.equal(V.isSkillMastered(st.skills.b1_s1), false);
  assert.equal(st.skills.b1_s1.correctQuestionIds.length, 1);

  // 3 different sigs with 2 consecutive correct at the end masters the skill.
  st = V.createInitialState();
  st = answerSkill(st, mkGenQ("g1", "sig_1"), true).state;
  st = answerSkill(st, mkGenQ("g2", "sig_2"), true).state;
  st = answerSkill(st, mkGenQ("g3w", "sig_3w"), false).state;
  st = answerSkill(st, mkGenQ("g4", "sig_3"), true).state;
  assert.equal(V.isSkillMastered(st.skills.b1_s1), false, "only 1 trailing correct must not master");
  st = answerSkill(st, mkGenQ("g5", "sig_4"), true).state;
  assert.equal(V.isSkillMastered(st.skills.b1_s1), true);
  assert.equal(V.classifySkill(st.skills.b1_s1), "kuat");
});

// Pool data must be untouched by every call above.
test("shared pool data was never mutated by the engine", () => {
  assert.equal(JSON.stringify(POOL), POOL_PRISTINE);
});

// 13. Real d6_math + d6_math_gen integration tests ----------------------------
function loadD6WithMath() {
  const win = { localStorage: makeLocalStorage() };
  const ctx = vm.createContext({ window: win, Date: FixedDate });
  for (const rel of [
    "js/data/pools/d6_sejarah.js",
    "js/data/curriculum/d6_sejarah.js",
    "js/data/curriculum/d6_math.js",
    "js/data/pools/d6_math_gen.js",
    "js/storage.js"
  ]) {
    vm.runInContext(readRel(rel), ctx, { filename: rel });
  }
  return win.App;
}

const D6_WITH_MATH = loadD6WithMath();
const MATH_CURR = D6_WITH_MATH.Curriculum.d6.math;
const MATH_POOL = D6_WITH_MATH.Pools.d6.math;

test("13a. real d6_math and d6_math_gen auto-detect alongside sejarah without duplication", () => {
  assert.equal(MATH_CURR.units.length, 8);
  assert.equal(MATH_POOL.length, 96);
  const found = V.getAvailablePools(
    D6_WITH_MATH.Pools,
    D6_WITH_MATH.Curriculum,
    "d6",
    D6_WITH_MATH.Generators
  );
  assert.equal(found.length, 2);
  const sej = found.find((p) => p.subjectId === "sejarah");
  const math = found.find((p) => p.subjectId === "math");
  assert.ok(sej && math);
  assert.equal(sej.isGenerator, false);
  assert.equal(math.isGenerator, true);
  assert.equal(math.pool.length, 96);
  assert.equal(D6_WITH_MATH.Generators.d6, undefined, "App.Generators.d6 must remain untouched");
});

test("13b. real d6_math_gen 10-question session across ticked units [b1,b3,b6,b8] has unique sig/q and valid 4 options", () => {
  const ticked = ["b1", "b3", "b6", "b8"];
  const run = playSession({
    pool: MATH_POOL,
    ticked,
    state: V.createInitialState(),
    seed: "math-real-1",
    id: "mr1"
  });
  assert.equal(run.draws.length, 10);
  assert.equal(run.session.completed, true);
  assert.equal(new Set(run.draws.map((d) => d.q.sig)).size, 10, "duplicate sig in d6_math session");
  assert.equal(
    new Set(run.draws.map((d) => V.normalizePromptText(d.q.q))).size,
    10,
    "duplicate prompt text in d6_math session"
  );
  for (const d of run.draws) {
    assert.ok(ticked.includes(d.q.unit), `unexpected unit ${d.q.unit}`);
    assert.equal(d.q.options.length, 4);
    assert.equal(new Set(d.q.options.map((o) => String(o).trim())).size, 4, `duplicate options in ${d.q.id}`);
    assert.ok(d.q.correctIndex >= 0 && d.q.correctIndex <= 3);
    assert.ok(typeof d.q.explanation === "string" && d.q.explanation.trim().length > 0);
    assert.equal(/NaN|undefined/.test(`${d.q.q}|${d.q.options.join("|")}|${d.q.explanation}|${d.q.sig}`), false);
  }
});

test("13c. real d6_math_gen sessions are byte-identical for the same seed", () => {
  const ticked = ["b1", "b3", "b6", "b8"];
  const runA = playSession({ pool: MATH_POOL, ticked, state: V.createInitialState(), seed: "math-det-42", id: "md1" });
  const runB = playSession({ pool: MATH_POOL, ticked, state: V.createInitialState(), seed: "math-det-42", id: "md1" });
  const project = (run) =>
    run.draws.map((d) => ({
      id: d.q.id,
      sig: d.q.sig,
      unit: d.q.unit,
      skill: d.q.skill,
      diff: d.q.diff,
      template: d.q.template,
      q: d.q.q,
      options: d.q.options,
      correctIndex: d.q.correctIndex,
      explanation: d.q.explanation
    }));
  assert.deepEqual(project(runA), project(runB));
});

test("13d. wrong answer on real d6_math_gen triggers same-skill retry with different sig and q at <= diff", () => {
  const ticked = ["b1", "b3", "b6", "b8"];
  const run = playSession({
    pool: MATH_POOL,
    ticked,
    state: V.createInitialState(),
    seed: "math-retry-7",
    id: "mr7",
    answer: (q, i) => i !== 0
  });
  const missed = run.draws[0].q;
  const retry = run.draws.find((d) => d.fromRetry && d.idx > 0);
  assert.ok(retry, "no retry was drawn for real d6_math_gen");
  assert.equal(retry.q.skill, missed.skill);
  assert.notEqual(retry.q.sig, missed.sig);
  assert.notEqual(V.normalizePromptText(retry.q.q), V.normalizePromptText(missed.q));
  assert.ok(rank(retry.q.diff) <= rank(missed.diff), `retry ${retry.q.diff} harder than ${missed.diff}`);
});

// 14. Real d6_sains (static + Kelajuan generator) integration tests ----------
function loadD6WithSains() {
  const win = { localStorage: makeLocalStorage() };
  const ctx = vm.createContext({ window: win, Date: FixedDate });
  for (const rel of [
    "js/data/pools/d6_sejarah.js",
    "js/data/curriculum/d6_sejarah.js",
    "js/data/curriculum/d6_math.js",
    "js/data/pools/d6_math_gen.js",
    "js/data/curriculum/d6_bm.js",
    "js/data/pools/d6_bm.js",
    "js/data/curriculum/d6_sains.js",
    "js/data/pools/d6_sains.js",
    "js/data/pools/d6_sains_gen.js",
    "js/storage.js"
  ]) {
    vm.runInContext(readRel(rel), ctx, { filename: rel });
  }
  return win.App;
}

const D6_WITH_SAINS = loadD6WithSains();
const SAINS_CURR = D6_WITH_SAINS.Curriculum.d6.sains;
const SAINS_POOL = D6_WITH_SAINS.Pools.d6.sains;

test("14a. real d6_sains (13 units, 36 skills, static + Kelajuan generators) auto-detects cleanly without duplication", () => {
  assert.equal(SAINS_CURR.units.length, 13);
  const totalSkills = SAINS_CURR.units.reduce((n, u) => n + u.skills.length, 0);
  assert.equal(totalSkills, 36);
  assert.equal(SAINS_POOL.length, 339);
  const found = V.getAvailablePools(
    D6_WITH_SAINS.Pools,
    D6_WITH_SAINS.Curriculum,
    "d6",
    D6_WITH_SAINS.Generators
  );
  assert.equal(found.length, 4);
  const sains = found.find((p) => p.subjectId === "sains");
  assert.ok(sains);
  assert.equal(sains.isGenerator, true);
  assert.equal(sains.pool.length, 339, "generator entries must not be duplicated when merged across roots");
  assert.equal(D6_WITH_SAINS.Generators.d6, undefined, "App.Generators.d6 must remain untouched");
});

test("14b. real d6_sains 10-question session across mixed concept and numeric units has unique valid items", () => {
  const ticked = ["u2", "u6", "u7", "u10"];
  const run = playSession({
    pool: SAINS_POOL,
    ticked,
    state: V.createInitialState(),
    seed: "sains-mix-1",
    id: "sm1"
  });
  assert.equal(run.draws.length, 10);
  assert.equal(run.session.completed, true);
  assert.equal(new Set(run.draws.map((d) => V.normalizePromptText(d.q.q))).size, 10);
  for (const d of run.draws) {
    assert.ok(ticked.includes(d.q.unit), `unexpected unit ${d.q.unit}`);
    assert.equal(d.q.options.length, 4);
    assert.equal(new Set(d.q.options.map((o) => String(o).trim())).size, 4, `duplicate options in ${d.q.id}`);
    assert.ok(d.q.correctIndex >= 0 && d.q.correctIndex <= 3);
    assert.ok(typeof d.q.explanation === "string" && d.q.explanation.trim().length > 0);
    assert.equal(/NaN|undefined/.test(`${d.q.q}|${d.q.options.join("|")}|${d.q.explanation}`), false);
  }
});

test("14c. real d6_sains u7-only session draws both static u7_s1 and generated u7_s2..s4 items deterministically", () => {
  const runA = playSession({ pool: SAINS_POOL, ticked: ["u7"], state: V.createInitialState(), seed: "sains-u7-det", id: "su7" });
  const runB = playSession({ pool: SAINS_POOL, ticked: ["u7"], state: V.createInitialState(), seed: "sains-u7-det", id: "su7" });
  assert.equal(runA.draws.length, 10);
  const skillsDrawn = new Set(runA.draws.map((d) => d.q.skill));
  assert.ok(skillsDrawn.has("u7_s1"), "u7_s1 static skill should appear in u7-only session");
  assert.ok(skillsDrawn.has("u7_s2") || skillsDrawn.has("u7_s3") || skillsDrawn.has("u7_s4"), "generator skills should appear");
  assert.deepEqual(
    runA.draws.map((d) => ({ id: d.q.id, sig: d.q.sig || "", q: d.q.q, opts: d.q.options, ci: d.q.correctIndex })),
    runB.draws.map((d) => ({ id: d.q.id, sig: d.q.sig || "", q: d.q.q, opts: d.q.options, ci: d.q.correctIndex }))
  );
});

test("14d. wrong answer on u7 generated question triggers same-skill retry with different sig and q at <= diff", () => {
  const genOnlyU7 = SAINS_POOL.filter((it) => it.unit === "u7" && typeof it.generate === "function");
  const run = playSession({
    pool: genOnlyU7,
    ticked: ["u7"],
    state: V.createInitialState(),
    seed: "sains-retry-u7",
    id: "sru7",
    answer: (q, i) => i !== 0
  });
  const missed = run.draws[0].q;
  const retry = run.draws.find((d) => d.fromRetry && d.idx > 0);
  assert.ok(retry, "no retry was drawn for u7 generated question");
  assert.equal(retry.q.skill, missed.skill);
  assert.notEqual(retry.q.sig, missed.sig);
  assert.notEqual(V.normalizePromptText(retry.q.q), V.normalizePromptText(missed.q));
  assert.ok(rank(retry.q.diff) <= rank(missed.diff), `retry ${retry.q.diff} harder than ${missed.diff}`);
});

const failed = results.filter((r) => !r.ok);
console.log(
  failed.length === 0
    ? `VARIANT_TESTS_PASSED (${results.length})`
    : `VARIANT_TESTS_FAILED (${failed.length} of ${results.length})`
);
process.exitCode = failed.length === 0 ? 0 : 1;
