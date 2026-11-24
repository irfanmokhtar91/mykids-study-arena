// Phase 2 backend tests: Google ID-token verification (with a locally generated fake Google key), pairing, sync, photos, marks, privacy rules.
import { createApp, validateParentMarks } from "../worker/src/core.js";
import { MemoryStore } from "../worker/test/memory-store.js";
import { resetGoogleKeyCache } from "../worker/src/google.js";
import { signSession, b64urlEncode, textToB64url } from "../worker/src/crypto.js";

let failed = 0;
const ok = (name, cond, detail = "") => { console.log(cond ? "PASS" : "FAIL", name, cond ? "" : detail); if (!cond) failed++; };

// ---- fake Google: RSA key + JWKS served through an injected fetch
const kp = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"]);
const pub = await crypto.subtle.exportKey("jwk", kp.publicKey);
const JWKS = { keys: [{ ...pub, kid: "k1", alg: "RS256", use: "sig" }] };
const CLIENT_ID = "test-client.apps.googleusercontent.com";
const fetchImpl = async (u) => (String(u).includes("certs") ? new Response(JSON.stringify(JWKS), { status: 200 }) : new Response("no", { status: 404 }));
let clock = 1_800_000_000_000;
const now = () => clock;

async function idToken(over = {}, opts = {}) {
  const header = { alg: "RS256", kid: opts.kid || "k1", typ: "JWT" };
  const payload = { iss: "https://accounts.google.com", aud: CLIENT_ID, sub: "g-1", email: "mama@example.com", email_verified: true, name: "Mama", exp: Math.floor(clock / 1000) + 3600, ...over };
  const h = textToB64url(JSON.stringify(header)), p = textToB64url(JSON.stringify(payload));
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", kp.privateKey, new TextEncoder().encode(`${h}.${p}`));
  return `${h}.${p}.${b64urlEncode(sig)}`;
}

const env = { GOOGLE_CLIENT_ID: CLIENT_ID, SESSION_SECRET: "unit-test-secret-unit-test-secret", ALLOWED_ORIGINS: "https://irfanmokhtar91.github.io" };
const store = new MemoryStore();
const app = createApp({ store, env, fetchImpl, now });
const call = async (method, path, { body, token, headers = {}, raw } = {}) => {
  const h = { ...headers };
  if (token) h.authorization = `Bearer ${token}`;
  let payload;
  if (raw !== undefined) payload = raw; else if (body !== undefined) { h["content-type"] = "application/json"; payload = JSON.stringify(body); }
  const res = await app.handle(new Request(`https://api.test${path}`, { method, headers: h, body: payload }));
  let data = null; const ct = res.headers.get("content-type") || "";
  if (ct.includes("json")) data = await res.json();
  return { status: res.status, data, res };
};
const login = async (over) => (await call("POST", "/api/auth/google", { body: { idToken: await idToken(over) } })).data;

// ---------------------------------------------------------------- health + auth
let r = await call("GET", "/api/health");
ok("health reports configured", r.status === 200 && r.data.googleConfigured && r.data.sessionConfigured);
r = await call("POST", "/api/auth/google", { body: { idToken: await idToken() } });
ok("valid Google ID token signs the parent in", r.status === 200 && r.data.session && r.data.parent.email === "mama@example.com");
const mama = r.data;
resetGoogleKeyCache();
const bad = async (name, tok) => { const x = await call("POST", "/api/auth/google", { body: { idToken: tok } }); ok(name, x.status === 401 && !x.data.session, `${x.status} ${JSON.stringify(x.data)}`); };
await bad("token for another app (wrong audience) is rejected", await idToken({ aud: "other-app" }));
await bad("token from a fake issuer is rejected", await idToken({ iss: "https://evil.example" }));
await bad("expired token is rejected", await idToken({ exp: Math.floor(clock / 1000) - 3600 }));
await bad("unverified e-mail is rejected", await idToken({ email_verified: false }));
await bad("unknown signing key id is rejected", await idToken({}, { kid: "nope" }));
{ const t = await idToken(); const parts = t.split("."); const tampered = `${parts[0]}.${textToB64url(JSON.stringify({ iss: "https://accounts.google.com", aud: CLIENT_ID, sub: "g-evil", email: "x@example.com", email_verified: true, exp: Math.floor(clock / 1000) + 3600 }))}.${parts[2]}`; await bad("tampered payload (signature mismatch) is rejected", tampered); }
await bad("garbage token is rejected", "not.a.token");
{ const alg = textToB64url(JSON.stringify({ alg: "none", typ: "JWT" })); await bad('alg "none" token is rejected', `${alg}.${textToB64url("{}")}.`); }
r = await call("GET", "/api/parent/children");
ok("parent endpoints need a session", r.status === 401);
r = await call("GET", "/api/parent/children", { token: "x.y.z" });
ok("forged session token is rejected", r.status === 401);
{ const old = await signSession({ sub: "pa_1" }, env.SESSION_SECRET, 60, clock - 120000); r = await call("GET", "/api/parent/children", { token: old }); ok("expired session token is rejected", r.status === 401); }
{ const forged = await signSession({ sub: "pa_1" }, "a-different-secret", 3600, clock); r = await call("GET", "/api/parent/children", { token: forged }); ok("session signed with another secret is rejected", r.status === 401); }

// ---------------------------------------------------------------- pairing a new child
r = await call("POST", "/api/pair/start", { body: { displayName: "Aisyah", gradeId: "d6" } });
ok("child device gets an 8-character code and a secret", r.status === 200 && /^[A-HJ-KM-NP-Z2-9]{8}$/.test(r.data.code) && r.data.pairSecret.length >= 40);
const pair = r.data;
r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: pair.pairSecret } });
ok("status before a parent claims is not linked", r.status === 200 && r.data.linked === false);
r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: "wrong" } });
ok("status with a wrong pair secret is refused", r.status === 404);
r = await call("POST", "/api/pair/claim", { body: { code: pair.code } });
ok("claiming needs a signed-in parent", r.status === 401);
r = await call("POST", "/api/pair/claim", { body: { code: pair.code.toLowerCase() }, token: mama.session });
ok("parent claims the code (case-insensitive)", r.status === 200 && r.data.childId.startsWith("ch_") && r.data.displayName === "Aisyah");
const childId = r.data.childId;
r = await call("POST", "/api/pair/claim", { body: { code: pair.code }, token: mama.session });
ok("a used code cannot be claimed again", r.status === 409);
r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: pair.pairSecret } });
ok("child device receives its device token exactly once", r.data.linked === true && r.data.childId === childId && typeof r.data.deviceToken === "string" && r.data.deviceToken.length === 64);
const deviceToken = r.data.deviceToken;
r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: pair.pairSecret } });
ok("device token is not handed out a second time", r.data.linked === true && r.data.deviceToken === undefined);
r = await call("POST", "/api/pair/start", { body: { displayName: "Zed", gradeId: "t2" } });
clock += 16 * 60 * 1000;
{ const late = await call("POST", "/api/pair/claim", { body: { code: r.data.code }, token: (await login()).session }); ok("an expired code (15 min) is refused", late.status === 404); }
r = await call("POST", "/api/pair/claim", { body: { code: "ZZZZZZZZ" }, token: mama.session });
ok("an unknown code is refused", r.status === 404);

// ---------------------------------------------------------------- sync
const mama2 = await login(); // fresh session after the clock jump
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken: "bad", snapshot: { profile: {} } } });
ok("sync with a wrong device token is refused", r.status === 403);
r = await call("POST", "/api/child/sync", { body: { childId: "ch_nope", deviceToken, snapshot: {} } });
ok("sync for an unknown child is refused", r.status === 403);
const snap = { profile: { name: "Aisyah", history: [{ pct: 80 }], mockResults: [{ ts: "2026-11-25T01:00:00.000Z" }] } };
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, displayName: "Aisyah", gradeId: "d6", snapshot: snap, marksSince: 0 } });
ok("child device syncs its data", r.status === 200 && r.data.ok === true && Array.isArray(r.data.marks));
r = await call("GET", "/api/parent/children", { token: mama2.session });
ok("parent sees the linked child", r.data.children.length === 1 && r.data.children[0].displayName === "Aisyah" && r.data.children[0].gradeId === "d6");
r = await call("GET", `/api/parent/child/${childId}`, { token: mama2.session });
ok("parent reads the synced snapshot", r.status === 200 && r.data.child.snapshot.profile.history[0].pct === 80);
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, snapshot: { blob: "x".repeat(950 * 1024) } } });
ok("an oversized snapshot is refused", r.status === 413);
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, displayName: "x\u0000\u0001Aisyah  ", gradeId: "hack", snapshot: snap } });
{ const c = await call("GET", `/api/parent/child/${childId}`, { token: mama2.session }); ok("name is sanitised and unknown grade falls back to the old one", c.data.child.displayName === "xAisyah" && c.data.child.gradeId === "d6"); }

// ---------------------------------------------------------------- privacy between parents
const papa = await login({ sub: "g-2", email: "papa@example.com", name: "Papa" });
r = await call("GET", `/api/parent/child/${childId}`, { token: papa.session });
ok("another parent cannot read this child", r.status === 404);
r = await call("POST", "/api/parent/marks", { token: papa.session, body: { childId, recordTs: "t", parentMarks: {} } });
ok("another parent cannot write marks", r.status === 404);
r = await call("GET", "/api/parent/children", { token: papa.session });
ok("another parent sees an empty list", r.data.children.length === 0);

// ---------------------------------------------------------------- parent marks flow back to the child device
const ts = "2026-11-25T01:00:00.000Z";
r = await call("POST", "/api/parent/marks", { token: mama2.session, body: { childId, recordTs: ts, parentMarks: { "t2m-B01": { 0: [0, 1, 2] } } } });
ok("parent saves marks", r.status === 200 && r.data.updatedAt > 0);
for (const [name, marks] of [["marks with a negative step", { a: { 0: [-1] } }], ["marks with a non-integer step", { a: { 0: [1.5] } }], ["marks that are not an object", []], ["marks with a huge part index", { a: { 99999: [1] } }], ["marks with too many steps", { a: { 0: Array.from({ length: 50 }, (_, i) => i % 40) } }]]) {
  r = await call("POST", "/api/parent/marks", { token: mama2.session, body: { childId, recordTs: ts, parentMarks: marks } });
  ok(`${name} is refused`, r.status === 400);
}
ok("validateParentMarks accepts a normal shape", validateParentMarks({ i1: { 0: [0, 2], 1: [] } }) === true);
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, marksSince: 0 } });
ok("child device pulls the parent's marks on its next sync", r.data.marks.length === 1 && r.data.marks[0].recordTs === ts && r.data.marks[0].parentMarks["t2m-B01"][0].length === 3);
const since = r.data.serverTime;
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, marksSince: since } });
ok("already-pulled marks are not sent again", r.data.marks.length === 0);

// ---------------------------------------------------------------- photos
const jpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, ...Array.from({ length: 500 }, (_, i) => i % 256)]);
r = await call("PUT", `/api/child/photo?childId=${childId}&photoId=p1`, { raw: jpeg, headers: { "x-device-token": deviceToken } });
ok("child device uploads a JPEG photo", r.status === 200 && r.data.size === jpeg.length);
r = await call("PUT", `/api/child/photo?childId=${childId}&photoId=p2`, { raw: jpeg, headers: { "x-device-token": "bad" } });
ok("photo upload with a bad device token is refused", r.status === 403);
r = await call("PUT", `/api/child/photo?childId=${childId}&photoId=p3`, { raw: new Uint8Array([1, 2, 3, 4]), headers: { "x-device-token": deviceToken } });
ok("a non-JPEG upload is refused (415)", r.status === 415);
r = await call("PUT", `/api/child/photo?childId=${childId}&photoId=p4`, { raw: new Uint8Array(710 * 1024).fill(0xff), headers: { "x-device-token": deviceToken } });
ok("an oversized photo is refused (413)", r.status === 413);
r = await call("GET", `/api/parent/photo/${childId}/p1`, { token: mama2.session });
{ const buf = new Uint8Array(await r.res.arrayBuffer()); ok("parent downloads the photo unchanged", r.status === 200 && r.res.headers.get("content-type") === "image/jpeg" && buf.length === jpeg.length && buf[0] === 0xff && buf[5] === jpeg[5]); }
r = await call("GET", `/api/parent/photo/${childId}/p1`, { token: papa.session });
ok("another parent cannot download the photo", r.status === 404);
r = await call("GET", `/api/parent/photo/${childId}/nope`, { token: mama2.session });
ok("a missing photo is 404", r.status === 404);

// ---------------------------------------------------------------- second parent through the child device
r = await call("POST", "/api/pair/start", { body: { displayName: "Aisyah", gradeId: "d6", childId, deviceToken } });
ok("the child device can create a code for a second parent", r.status === 200);
const code2 = r.data;
r = await call("POST", "/api/pair/start", { body: { displayName: "Aisyah", gradeId: "d6", childId, deviceToken: "bad" } });
ok("a code for an existing child needs the device token", r.status === 403);
r = await call("POST", "/api/pair/claim", { token: papa.session, body: { code: code2.code } });
ok("the second parent links to the SAME child", r.status === 200 && r.data.childId === childId);
r = await call("GET", `/api/parent/child/${childId}`, { token: papa.session });
ok("the second parent now sees the child", r.status === 200 && r.data.child.snapshot.profile.name === "Aisyah");
r = await call("POST", "/api/pair/status", { body: { code: code2.code, pairSecret: code2.pairSecret } });
ok("no new device token is issued for an existing child", r.data.linked === true && r.data.deviceToken === undefined);

// ---------------------------------------------------------------- unlink and delete
r = await call("DELETE", `/api/parent/child/${childId}`, { token: papa.session });
ok("a parent can unlink", r.status === 200);
r = await call("GET", `/api/parent/child/${childId}`, { token: mama2.session });
ok("the other parent still has the child and the data", r.status === 200);
r = await call("DELETE", `/api/parent/child/${childId}`, { token: mama2.session });
ok("the last parent can delete the child", r.status === 200);
ok("all child data (snapshot, marks, photos, links) is gone", !store.children.has(childId) && store.photos.size === 0 && store.marks.size === 0);
r = await call("POST", "/api/child/sync", { body: { childId, deviceToken, marksSince: 0 } });
ok("the old device token no longer works", r.status === 403);
r = await call("DELETE", "/api/parent/account", { token: papa.session });
ok("a parent can delete the whole account", r.status === 200 && ![...store.parents.values()].some((p) => p.email === "papa@example.com"));

// ---------------------------------------------------------------- abuse and CORS
const fresh = await login({ sub: "g-3", email: "c@example.com" });
let blocked = false;
for (let i = 0; i < 20; i++) { const x = await call("POST", "/api/pair/claim", { token: fresh.session, body: { code: "AAAAAAA" + (i % 9) }, headers: { "cf-connecting-ip": "9.9.9.9" } }); if (x.status === 429) blocked = true; }
ok("guessing pairing codes is rate-limited (429)", blocked);
r = await app.handle(new Request("https://api.test/api/health", { headers: { origin: "https://irfanmokhtar91.github.io" } }));
ok("CORS allows the app origin", r.headers.get("access-control-allow-origin") === "https://irfanmokhtar91.github.io");
r = await app.handle(new Request("https://api.test/api/health", { headers: { origin: "https://evil.example" } }));
ok("CORS does not allow other origins", r.headers.get("access-control-allow-origin") === null);
r = await app.handle(new Request("https://api.test/api/auth/google", { method: "OPTIONS", headers: { origin: "https://irfanmokhtar91.github.io" } }));
ok("CORS preflight succeeds", r.status === 204 && /authorization/.test(r.headers.get("access-control-allow-headers") || ""));
r = await call("POST", "/api/auth/google", { raw: "{not json" , headers: { "content-type": "application/json" } });
ok("malformed JSON is a clean 400, not a crash", r.status === 400);
r = await call("GET", "/api/nope");
ok("unknown routes are 404", r.status === 404);
const noSecret = createApp({ store: new MemoryStore(), env: { GOOGLE_CLIENT_ID: CLIENT_ID, ALLOWED_ORIGINS: "" }, fetchImpl, now });
r = await noSecret.handle(new Request("https://api.test/api/auth/google", { method: "POST", body: JSON.stringify({ idToken: await idToken() }), headers: { "content-type": "application/json" } }));
ok("a server without SESSION_SECRET refuses to issue sessions", r.status === 500);

console.log(failed === 0 ? "WORKER_TESTS_PASSED" : `WORKER_TESTS_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
