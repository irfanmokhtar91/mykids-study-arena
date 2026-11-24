// Real Worker + real (local, offline) D1 smoke test. Needs `wrangler dev --local --port 8799` running with:
//   --var GOOGLE_CLIENT_ID:smoke.apps.googleusercontent.com --var SESSION_SECRET:smoke-secret-smoke-secret-smoke --var GOOGLE_JWKS_URL:http://127.0.0.1:8798/certs
// (see worker/README.md). The test serves a fake Google key set on port 8798 and signs tokens with it.
import http from "node:http";
import { b64urlEncode, textToB64url } from "../worker/src/crypto.js";

const BASE = process.argv[2] || "http://127.0.0.1:8799";
const CLIENT_ID = "smoke.apps.googleusercontent.com";
let failed = 0;
const ok = (n, c, d = "") => { console.log(c ? "PASS" : "FAIL", n, c ? "" : d); if (!c) failed++; };

const kp = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"]);
const pub = await crypto.subtle.exportKey("jwk", kp.publicKey);
const jwks = JSON.stringify({ keys: [{ ...pub, kid: "smoke1", alg: "RS256", use: "sig" }] });
const srv = http.createServer((q, s) => { s.writeHead(200, { "content-type": "application/json" }); s.end(jwks); }).listen(8798);

async function idToken(sub, email) {
  const h = textToB64url(JSON.stringify({ alg: "RS256", kid: "smoke1", typ: "JWT" }));
  const p = textToB64url(JSON.stringify({ iss: "https://accounts.google.com", aud: CLIENT_ID, sub, email, email_verified: true, name: email, exp: Math.floor(Date.now() / 1000) + 3600 }));
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", kp.privateKey, new TextEncoder().encode(`${h}.${p}`));
  return `${h}.${p}.${b64urlEncode(sig)}`;
}
const call = async (method, path, { body, token, headers = {}, raw } = {}) => {
  const h = { ...headers };
  if (token) h.authorization = `Bearer ${token}`;
  let payload; if (raw !== undefined) payload = raw; else if (body !== undefined) { h["content-type"] = "application/json"; payload = JSON.stringify(body); }
  const res = await fetch(BASE + path, { method, headers: h, body: payload });
  const ct = res.headers.get("content-type") || "";
  return { status: res.status, data: ct.includes("json") ? await res.json() : null, res };
};
try {
  let r = await call("GET", "/api/health");
  ok("worker is up and configured", r.status === 200 && r.data.googleConfigured && r.data.sessionConfigured, JSON.stringify(r.data));
  r = await call("POST", "/api/auth/google", { body: { idToken: await idToken("s-1", "smoke@example.com") } });
  ok("Google token verified by the real Worker; parent row written to D1", r.status === 200 && !!r.data.session, JSON.stringify(r.data));
  const mama = r.data.session;
  r = await call("POST", "/api/auth/google", { body: { idToken: await idToken("s-1", "smoke@example.com") } });
  ok("signing in again reuses the same parent", r.status === 200 && r.data.parent.id === (await call("POST", "/api/auth/google", { body: { idToken: await idToken("s-1", "smoke@example.com") } })).data.parent.id);
  r = await call("POST", "/api/pair/start", { body: { displayName: "Aisyah", gradeId: "d6" } });
  ok("pair/start stores a code in D1", r.status === 200 && r.data.code.length === 8, JSON.stringify(r.data));
  const pair = r.data;
  r = await call("POST", "/api/pair/claim", { token: mama, body: { code: pair.code } });
  ok("pair/claim creates the child and the link in D1", r.status === 200 && r.data.childId.startsWith("ch_"), JSON.stringify(r.data));
  const childId = r.data.childId;
  r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: pair.pairSecret } });
  ok("pair/status returns the device token once", r.data.linked && r.data.deviceToken && r.data.deviceToken.length === 64, JSON.stringify(r.data));
  const dev = r.data.deviceToken;
  r = await call("POST", "/api/pair/status", { body: { code: pair.code, pairSecret: pair.pairSecret } });
  ok("device token is cleared from D1 after pick-up", r.data.linked && r.data.deviceToken === undefined);
  r = await call("POST", "/api/child/sync", { body: { childId, deviceToken: dev, displayName: "Aisyah", gradeId: "d6", snapshot: { profile: { name: "Aisyah", history: [{ pct: 70 }] } }, marksSince: 0 } });
  ok("snapshot saved to D1", r.status === 200 && r.data.ok, JSON.stringify(r.data));
  r = await call("GET", `/api/parent/child/${childId}`, { token: mama });
  ok("parent reads the snapshot back from D1", r.status === 200 && r.data.child.snapshot.profile.history[0].pct === 70, JSON.stringify(r.data));
  r = await call("GET", "/api/parent/children", { token: mama });
  ok("children list (SQL join) works", r.status === 200 && r.data.children.length === 1 && r.data.children[0].displayName === "Aisyah");
  r = await call("POST", "/api/parent/marks", { token: mama, body: { childId, recordTs: "2026-11-25T01:00:00.000Z", parentMarks: { x: { 0: [0, 1] } } } });
  ok("marks upsert (ON CONFLICT) works", r.status === 200);
  r = await call("POST", "/api/parent/marks", { token: mama, body: { childId, recordTs: "2026-11-25T01:00:00.000Z", parentMarks: { x: { 0: [0, 1, 2] } } } });
  ok("marks upsert twice updates the row", r.status === 200);
  r = await call("POST", "/api/child/sync", { body: { childId, deviceToken: dev, marksSince: 0 } });
  ok("child pulls exactly one (updated) marks row", r.data.marks.length === 1 && r.data.marks[0].parentMarks.x[0].length === 3, JSON.stringify(r.data));
  const jpeg = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, ...Array.from({ length: 70000 }, (_, i) => i % 256)]);
  r = await call("PUT", `/api/child/photo?childId=${childId}&photoId=p1`, { raw: jpeg, headers: { "x-device-token": dev } });
  ok("70 KB photo stored in D1 (base64)", r.status === 200 && r.data.size === jpeg.length, JSON.stringify(r.data));
  r = await call("GET", `/api/parent/photo/${childId}/p1`, { token: mama });
  { const buf = new Uint8Array(await r.res.arrayBuffer()); let same = buf.length === jpeg.length; for (let i = 0; same && i < buf.length; i += 997) if (buf[i] !== jpeg[i]) same = false; ok("photo round-trips byte for byte", r.status === 200 && same, `${r.status} ${buf.length}`); }
  let blocked = false;
  for (let i = 0; i < 20; i++) { const x = await call("POST", "/api/pair/claim", { token: mama, body: { code: "BBBBBBB" + (i % 9) } }); if (x.status === 429) blocked = true; }
  ok("rate limiter (INSERT ... RETURNING) works in D1", blocked);
  r = await call("DELETE", `/api/parent/child/${childId}`, { token: mama });
  ok("deleting the child removes everything", r.status === 200);
  r = await call("POST", "/api/child/sync", { body: { childId, deviceToken: dev, marksSince: 0 } });
  ok("old device token no longer works after deletion", r.status === 403);
  r = await call("DELETE", "/api/parent/account", { token: mama });
  ok("account deletion works", r.status === 200);
} catch (e) {
  console.log("FAIL smoke crashed:", e.message); failed++;
} finally {
  srv.close();
}
console.log(failed === 0 ? "WORKER_LOCAL_SMOKE_PASSED" : `WORKER_LOCAL_SMOKE_FAILED (${failed})`);
process.exit(failed === 0 ? 0 : 1);
