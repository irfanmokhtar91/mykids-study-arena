/**
 * Automated Node tests for worker/src/index.js using an in-memory D1 mock.
 * Covers /api/health, /api/family/create, /api/family/pull, /api/family/push (multi-phone merge),
 * /api/family/pin, and rejection of invalid PINs/tokens.
 */
import assert from "node:assert/strict";
import worker from "../worker/src/index.js";

function createMockD1() {
  const rows = new Map();

  function runSql(sql, params) {
    const q = sql.trim();
    if (q.startsWith("SELECT family_code FROM families")) {
      const r = rows.get(params[0]);
      return { first: r ? { family_code: r.family_code } : null };
    }
    if (q.startsWith("SELECT family_code, pin_hash, sync_token, state_json, updated_at FROM families")) {
      return { first: rows.get(params[0]) || null };
    }
    if (q.startsWith("SELECT family_code, sync_token, state_json FROM families")) {
      const r = rows.get(params[0]);
      return { first: r ? { family_code: r.family_code, sync_token: r.sync_token, state_json: r.state_json } : null };
    }
    if (q.startsWith("SELECT family_code, pin_hash FROM families")) {
      const r = rows.get(params[0]);
      return { first: r ? { family_code: r.family_code, pin_hash: r.pin_hash } : null };
    }
    if (q.startsWith("INSERT INTO families")) {
      const [family_code, pin_hash, sync_token, state_json, updated_at] = params;
      rows.set(family_code, { family_code, pin_hash, sync_token, state_json, updated_at });
      return { run: { success: true } };
    }
    if (q.startsWith("UPDATE families SET state_json")) {
      const [state_json, updated_at, family_code] = params;
      const r = rows.get(family_code);
      if (r) {
        r.state_json = state_json;
        r.updated_at = updated_at;
      }
      return { run: { success: true } };
    }
    if (q.startsWith("UPDATE families SET pin_hash")) {
      const [pin_hash, updated_at, family_code] = params;
      const r = rows.get(family_code);
      if (r) {
        r.pin_hash = pin_hash;
        r.updated_at = updated_at;
      }
      return { run: { success: true } };
    }
    throw new Error(`Unsupported mock SQL: ${sql}`);
  }

  return {
    prepare(sql) {
      let args = [];
      return {
        bind(...params) {
          args = params;
          return this;
        },
        async first() {
          return runSql(sql, args).first;
        },
        async run() {
          return runSql(sql, args).run;
        }
      };
    }
  };
}

const env = { DB: createMockD1() };

async function call(method, path, bodyObj) {
  const req = new Request(`https://example.workers.dev${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: bodyObj !== undefined ? JSON.stringify(bodyObj) : undefined
  });
  const res = await worker.fetch(req, env);
  const data = res.status === 204 ? null : await res.json();
  return { status: res.status, data };
}

// 1. Health
const health = await call("GET", "/api/health");
assert.equal(health.status, 200);
assert.equal(health.data.ok, true);

// 2. Reject invalid PIN on create
const badCreate = await call("POST", "/api/family/create", { pin: "12" });
assert.equal(badCreate.status, 400);

// 3. Create family with Kid 1 on Phone 1
const created = await call("POST", "/api/family/create", {
  pin: "1234",
  payload: {
    version: 4,
    profiles: [
      {
        id: "kid_umar",
        name: "Umar",
        gradeId: "d6",
        avatar: "🦖",
        xp: 120,
        coins: 40,
        activeDays: ["2026-11-24"],
        history: [{ ts: "2026-11-24T10:00:00Z", subjectId: "math", chapterId: "nombor_operasi", setNum: 1, score: 5, total: 5, pct: 100 }],
        mistakeLog: [],
        setBest: { "d6:math:nombor_operasi:1": { bestScore: 5, bestBonus: 3, total: 5, attempts: 1, lastPlayed: "2026-11-24T10:00:00Z" } },
        updatedAt: "2026-11-24T10:00:00Z"
      }
    ]
  }
});
assert.equal(created.status, 200);
assert.equal(created.data.ok, true);
assert.match(created.data.familyCode, /^[A-Z0-9]{6}$/);
assert.equal(created.data.syncToken.length, 32);
const { familyCode, syncToken } = created.data;

// 4. Reject wrong PIN & verify right PIN on pull
const badPull = await call("POST", "/api/family/pull", { familyCode, pin: "9999" });
assert.equal(badPull.status, 403);

const goodPull = await call("POST", "/api/family/pull", { familyCode, pin: "1234" });
assert.equal(goodPull.status, 200);
assert.equal(goodPull.data.syncToken, syncToken);
assert.equal(goodPull.data.state.profiles.length, 1);

// 5. Reject bad syncToken on push, then push Kid 2 from Phone 2 and verify multi-phone merge
const badPush = await call("POST", "/api/family/push", { familyCode, syncToken: "wrongtoken", payload: { profiles: [] } });
assert.equal(badPush.status, 403);

const phone2Push = await call("POST", "/api/family/push", {
  familyCode,
  syncToken,
  payload: {
    version: 4,
    profiles: [
      {
        id: "kid_aisyah",
        name: "Aisyah",
        gradeId: "t2",
        avatar: "🚀",
        xp: 200,
        coins: 75,
        activeDays: ["2026-11-24"],
        history: [{ ts: "2026-11-24T11:00:00Z", subjectId: "sains", chapterId: "nutrisi", setNum: 1, score: 4, total: 5, pct: 80 }],
        mistakeLog: [{ ts: "2026-11-24T11:00:00Z", subjectId: "sains", chapterId: "nutrisi", q: "Q1", chosen: "X", correct: "Y", explanation: "E" }],
        setBest: { "t2:sains:nutrisi:1": { bestScore: 4, bestBonus: 1, total: 5, attempts: 1, lastPlayed: "2026-11-24T11:00:00Z" } },
        updatedAt: "2026-11-24T11:00:00Z"
      }
    ]
  }
});
assert.equal(phone2Push.status, 200);
assert.equal(phone2Push.data.state.profiles.length, 2);
assert.ok(phone2Push.data.state.profiles.some((p) => p.name === "Umar" && p.gradeId === "d6"));
assert.ok(phone2Push.data.state.profiles.some((p) => p.name === "Aisyah" && p.gradeId === "t2"));

// 6. Change PIN & verify old PIN fails, new PIN succeeds
const badPinUpdate = await call("POST", "/api/family/pin", { familyCode, oldPin: "0000", newPin: "5678" });
assert.equal(badPinUpdate.status, 403);

const okPinUpdate = await call("POST", "/api/family/pin", { familyCode, oldPin: "1234", newPin: "5678" });
assert.equal(okPinUpdate.status, 200);

const oldPinPull = await call("POST", "/api/family/pull", { familyCode, pin: "1234" });
assert.equal(oldPinPull.status, 403);

const newPinPull = await call("POST", "/api/family/pull", { familyCode, pin: "5678" });
assert.equal(newPinPull.status, 200);
assert.equal(newPinPull.data.state.profiles.length, 2);

console.log("WORKER_TESTS_PASSED (6/6 scenarios)");
