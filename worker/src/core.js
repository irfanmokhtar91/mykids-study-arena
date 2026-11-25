// MyKids Study Arena API (Phase 2). Pure request handler: all storage goes through a `store`, so it is testable without Cloudflare.
import { randomHex, randomCode, sha256Hex, signSession, verifySession } from "./crypto.js";
import { verifyGoogleIdToken } from "./google.js";

const SESSION_TTL = 60 * 60 * 24 * 14; // 14 days
const PAIR_TTL_MS = 15 * 60 * 1000;
const MAX_JSON = 16 * 1024;
const MAX_SNAPSHOT = 900 * 1024;
const MAX_PHOTO = 700 * 1024;
const MAX_PHOTOS_PER_CHILD = 400;

const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extra } });
const fail = (status, message) => json({ error: message }, status);

async function readJson(request, limit = MAX_JSON) {
  const len = Number(request.headers.get("content-length") || 0);
  if (len > limit) throw Object.assign(new Error("Data terlalu besar"), { status: 413 });
  const text = await request.text();
  if (text.length > limit) throw Object.assign(new Error("Data terlalu besar"), { status: 413 });
  try {
    const v = JSON.parse(text || "{}");
    if (!v || typeof v !== "object" || Array.isArray(v)) throw new Error("bad");
    return v;
  } catch (e) {
    throw Object.assign(new Error("JSON tidak sah"), { status: 400 });
  }
}

const cleanName = (s) => String(s || "").replace(/[\u0000-\u001f]/g, "").trim().slice(0, 40);
const GRADES = new Set(["d6", "t2", "t4"]);
const VALID_SESSION_TYPES = new Set(["INITIAL_DIAGNOSTIC", "WEEKLY_CHECKUP"]);
const VALID_ERROR_CLASSES = new Set(["MASTERY", "LOW_FLUENCY", "CARELESS_RUSH", "CONCEPTUAL_GAP", "TIMEOUT"]);
const VALID_BLOOM_LEVELS = new Set(["Remember", "Understand", "Apply", "Analyze"]);
const VALID_OPTIONS = new Set(["A", "B", "C", "D"]);

export function validateDiagnosticPayload(body) {
  if (!body || typeof body !== "object") return false;
  const s = body.session;
  if (!s || typeof s !== "object" || Array.isArray(s)) return false;
  if (typeof s.id !== "string" || !s.id.trim() || s.id.length > 80) return false;
  if (!VALID_SESSION_TYPES.has(s.session_type)) return false;
  if (typeof s.started_at !== "string" || !s.started_at.trim() || s.started_at.length > 40) return false;
  if (s.completed_at !== null && s.completed_at !== undefined && (typeof s.completed_at !== "string" || s.completed_at.length > 40)) return false;

  if (!Array.isArray(body.attempts) || body.attempts.length === 0 || body.attempts.length > 50) return false;
  for (const a of body.attempts) {
    if (!a || typeof a !== "object" || Array.isArray(a)) return false;
    if (typeof a.id !== "string" || !a.id.trim() || a.id.length > 100) return false;
    if (typeof a.question_id !== "string" || !a.question_id.trim() || a.question_id.length > 80) return false;
    if (typeof a.syllabus_node_id !== "string" || !a.syllabus_node_id.trim() || a.syllabus_node_id.length > 80) return false;
    if (typeof a.is_correct !== "boolean" && a.is_correct !== 0 && a.is_correct !== 1) return false;
    if (!Number.isInteger(a.time_spent_ms) || a.time_spent_ms < 0 || a.time_spent_ms > 3600000) return false;
    if (!VALID_ERROR_CLASSES.has(a.error_classification)) return false;
    if (typeof a.answered_at_myt !== "string" || !a.answered_at_myt.trim() || a.answered_at_myt.length > 40) return false;
  }

  if (body.syllabusNodes !== undefined) {
    if (!Array.isArray(body.syllabusNodes) || body.syllabusNodes.length > 50) return false;
    for (const n of body.syllabusNodes) {
      if (!n || typeof n !== "object") return false;
      if (typeof n.id !== "string" || !n.id.trim() || n.id.length > 80) return false;
      if (typeof n.subject !== "string" || !n.subject.trim() || n.subject.length > 40) return false;
      if (typeof n.grade_level !== "string" || !n.grade_level.trim() || n.grade_level.length > 20) return false;
      if (typeof n.topic_name !== "string" || !n.topic_name.trim() || n.topic_name.length > 160) return false;
      if (typeof n.subtopic_name !== "string" || !n.subtopic_name.trim() || n.subtopic_name.length > 160) return false;
      if (n.prerequisite_node_id !== null && n.prerequisite_node_id !== undefined && (typeof n.prerequisite_node_id !== "string" || n.prerequisite_node_id.length > 80)) return false;
      if (!Number.isInteger(n.expected_time_ms) || n.expected_time_ms <= 0) return false;
      if (!VALID_BLOOM_LEVELS.has(n.bloom_level)) return false;
    }
  }

  if (body.questions !== undefined) {
    if (!Array.isArray(body.questions) || body.questions.length > 50) return false;
    for (const q of body.questions) {
      if (!q || typeof q !== "object") return false;
      if (typeof q.id !== "string" || !q.id.trim() || q.id.length > 80) return false;
      if (typeof q.syllabus_node_id !== "string" || !q.syllabus_node_id.trim() || q.syllabus_node_id.length > 80) return false;
      if (!Number.isInteger(q.difficulty_1_to_5) || q.difficulty_1_to_5 < 1 || q.difficulty_1_to_5 > 5) return false;
      if (typeof q.prompt_text !== "string" || !q.prompt_text.trim() || q.prompt_text.length > 2000) return false;
      const optStr = typeof q.options_json === "string" ? q.options_json : JSON.stringify(q.options_json || "");
      if (!optStr || optStr.length > 4000) return false;
      if (!VALID_OPTIONS.has(q.correct_option)) return false;
      if (typeof q.explanation_text !== "string" || !q.explanation_text.trim() || q.explanation_text.length > 4000) return false;
    }
  }
  return true;
}

/** parentMarks = { itemId: { "0": [stepIdx, ...], ... } } with sane bounds. */
export function validateParentMarks(m) {
  if (!m || typeof m !== "object" || Array.isArray(m)) return false;
  const items = Object.keys(m);
  if (items.length > 100) return false;
  for (const id of items) {
    if (id.length > 40 || !m[id] || typeof m[id] !== "object" || Array.isArray(m[id])) return false;
    const parts = Object.keys(m[id]);
    if (parts.length > 12) return false;
    for (const pi of parts) {
      if (!/^\d{1,2}$/.test(pi) || !Array.isArray(m[id][pi]) || m[id][pi].length > 40) return false;
      if (!m[id][pi].every((k) => Number.isInteger(k) && k >= 0 && k < 40)) return false;
    }
  }
  return true;
}

export function createApp({ store, env, fetchImpl = fetch, now = () => Date.now() }) {
  const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);

  function cors(request, res) {
    const origin = request.headers.get("origin");
    const h = new Headers(res.headers);
    if (origin && allowed.includes(origin)) {
      h.set("access-control-allow-origin", origin);
      h.set("vary", "Origin");
      h.set("access-control-allow-headers", "content-type, authorization, x-device-token");
      h.set("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
      h.set("access-control-max-age", "600");
    }
    return new Response(res.body, { status: res.status, headers: h });
  }

  async function limited(request, key, max, windowSec) {
    const ip = request.headers.get("cf-connecting-ip") || "local";
    const bucket = Math.floor(now() / 1000 / windowSec);
    const n = await store.hit(`${key}:${ip}`, bucket);
    return n > max;
  }

  async function parentFrom(request) {
    const auth = request.headers.get("authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!token || !env.SESSION_SECRET) return null;
    const payload = await verifySession(token, env.SESSION_SECRET, now());
    return payload && payload.sub ? payload.sub : null;
  }

  async function childFromDevice(childId, deviceToken) {
    if (!childId || !deviceToken) return null;
    const child = await store.getChild(String(childId));
    if (!child) return null;
    const h = await sha256Hex(String(deviceToken));
    return h === child.deviceTokenHash ? child : null;
  }

  async function route(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === "/api/health" && method === "GET") return json({ ok: true, service: "mykids-study-arena", googleConfigured: !!env.GOOGLE_CLIENT_ID, sessionConfigured: !!env.SESSION_SECRET });

    // ---------------- parent signs in with Google ----------------
    if (path === "/api/auth/google" && method === "POST") {
      if (await limited(request, "auth", 30, 600)) return fail(429, "Terlalu banyak percubaan. Cuba sebentar lagi.");
      const body = await readJson(request);
      let claims;
      try {
        claims = await verifyGoogleIdToken(body.idToken, { clientId: env.GOOGLE_CLIENT_ID, fetchImpl, nowMs: now(), jwksUrl: env.GOOGLE_JWKS_URL || undefined });
      } catch (e) {
        return fail(401, e.message || "Log masuk Google gagal");
      }
      if (!env.SESSION_SECRET) return fail(500, "Pelayan belum dikonfigurasi");
      const parent = await store.upsertParent({ sub: claims.sub, email: claims.email, name: claims.name, at: now() });
      const session = await signSession({ sub: parent.id }, env.SESSION_SECRET, SESSION_TTL, now());
      return json({ session, parent: { id: parent.id, email: parent.email, name: parent.name } });
    }

    // ---------------- child device starts pairing (no login) ----------------
    if (path === "/api/pair/start" && method === "POST") {
      if (await limited(request, "pairstart", 20, 600)) return fail(429, "Terlalu banyak permintaan.");
      const body = await readJson(request);
      let childId = null;
      if (body.childId) {
        const child = await childFromDevice(body.childId, body.deviceToken);
        if (!child) return fail(403, "Peranti tidak dikenali");
        childId = child.id;
      }
      const displayName = cleanName(body.displayName);
      if (!displayName) return fail(400, "Nama diperlukan");
      const gradeId = GRADES.has(body.gradeId) ? body.gradeId : "d6";
      const code = randomCode(8);
      const pairSecret = randomHex(24);
      await store.createPair({ code, secretHash: await sha256Hex(pairSecret), childId, displayName, gradeId, expiresAt: now() + PAIR_TTL_MS });
      return json({ code, pairSecret, expiresAt: now() + PAIR_TTL_MS });
    }

    // ---------------- child device polls until a parent has claimed the code ----------------
    if (path === "/api/pair/status" && method === "POST") {
      if (await limited(request, "pairstatus", 120, 600)) return fail(429, "Terlalu banyak permintaan.");
      const body = await readJson(request);
      const pair = await store.getPair(String(body.code || "").toUpperCase());
      if (!pair || pair.secretHash !== (await sha256Hex(String(body.pairSecret || "")))) return fail(404, "Kod tidak dijumpai");
      if (!pair.claimedChildId) return json({ linked: false, expired: pair.expiresAt < now() });
      const out = { linked: true, childId: pair.claimedChildId };
      if (pair.devicePlain) {
        out.deviceToken = pair.devicePlain; // handed over exactly once
        await store.clearPairPlain(pair.code);
      }
      return json(out);
    }

    // ---------------- child device syncs its data and receives parent marks ----------------
    if (path === "/api/child/sync" && method === "POST") {
      const body = await readJson(request, MAX_SNAPSHOT + 8 * 1024);
      const child = await childFromDevice(body.childId, body.deviceToken);
      if (!child) return fail(403, "Peranti tidak dikenali");
      let marks = [];
      if (body.snapshot !== undefined) {
        if (!body.snapshot || typeof body.snapshot !== "object" || JSON.stringify(body.snapshot).length > MAX_SNAPSHOT) return fail(413, "Data terlalu besar");
        await store.saveSnapshot(child.id, { displayName: cleanName(body.displayName) || child.displayName, gradeId: GRADES.has(body.gradeId) ? body.gradeId : child.gradeId, snapshot: JSON.stringify(body.snapshot), at: now() });
      }
      marks = await store.listMarksSince(child.id, Number(body.marksSince) || 0);
      return json({ ok: true, serverTime: now(), marks });
    }

    if (path === "/api/child/diagnostics" && method === "POST") {
      const body = await readJson(request, 64 * 1024);
      const child = await childFromDevice(body.childId, body.deviceToken);
      if (!child) return fail(403, "Peranti tidak dikenali");
      if (!validateDiagnosticPayload(body)) return fail(400, "Data diagnostik tidak sah");
      await store.saveDiagnosticSession({
        childId: child.id,
        session: body.session,
        attempts: body.attempts,
        syllabusNodes: body.syllabusNodes || [],
        questions: body.questions || []
      });
      return json({ ok: true, savedAttempts: body.attempts.length });
    }

    if (path === "/api/child/photo" && method === "PUT") {
      const childId = url.searchParams.get("childId");
      const photoId = url.searchParams.get("photoId");
      const child = await childFromDevice(childId, request.headers.get("x-device-token"));
      if (!child) return fail(403, "Peranti tidak dikenali");
      if (!photoId || photoId.length > 120) return fail(400, "ID gambar tidak sah");
      const buf = new Uint8Array(await request.arrayBuffer());
      if (buf.length === 0 || buf.length > MAX_PHOTO) return fail(413, "Gambar terlalu besar");
      if (!(buf[0] === 0xff && buf[1] === 0xd8)) return fail(415, "Hanya gambar JPEG diterima");
      if ((await store.countPhotos(child.id)) >= MAX_PHOTOS_PER_CHILD && !(await store.hasPhoto(child.id, photoId))) return fail(413, "Had gambar dicapai");
      await store.putPhoto({ id: photoId, childId: child.id, bytes: buf, mime: "image/jpeg", size: buf.length, at: now() });
      return json({ ok: true, size: buf.length });
    }

    // ---------------- everything below needs a signed-in parent ----------------
    if (path.startsWith("/api/parent/") || path === "/api/pair/claim") {
      const parentId = await parentFrom(request);
      if (!parentId) return fail(401, "Sila log masuk");

      if (path === "/api/pair/claim" && method === "POST") {
        if (await limited(request, "claim", 15, 600)) return fail(429, "Terlalu banyak percubaan. Cuba sebentar lagi.");
        const body = await readJson(request);
        const code = String(body.code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
        const pair = await store.getPair(code);
        if (!pair || pair.expiresAt < now()) return fail(404, "Kod tidak sah atau sudah tamat tempoh");
        if (pair.claimedChildId) return fail(409, "Kod ini sudah digunakan");
        let childId = pair.childId;
        let devicePlain = null;
        if (!childId) {
          childId = `ch_${randomHex(10)}`;
          devicePlain = randomHex(32);
          await store.createChild({ id: childId, displayName: pair.displayName, gradeId: pair.gradeId, deviceTokenHash: await sha256Hex(devicePlain), at: now() });
        }
        await store.linkParent(parentId, childId, now());
        await store.markPairClaimed(code, { childId, devicePlain });
        return json({ childId, displayName: pair.displayName });
      }

      if (path === "/api/parent/children" && method === "GET") {
        return json({ children: await store.listChildrenForParent(parentId) });
      }

      let m = path.match(/^\/api\/parent\/child\/([\w-]+)\/diagnostics$/);
      if (m && method === "GET") {
        if (!(await store.isLinked(parentId, m[1]))) return fail(404, "Anak tidak dijumpai");
        return json(await store.listDiagnosticsForChild(m[1]));
      }

      m = path.match(/^\/api\/parent\/child\/([\w-]+)$/);
      if (m && method === "GET") {
        if (!(await store.isLinked(parentId, m[1]))) return fail(404, "Anak tidak dijumpai");
        const child = await store.getChild(m[1]);
        const marks = await store.listMarksSince(m[1], 0);
        return json({ child: { id: child.id, displayName: child.displayName, gradeId: child.gradeId, snapshot: child.snapshot ? JSON.parse(child.snapshot) : null, snapshotUpdatedAt: child.snapshotUpdatedAt }, marks });
      }
      if (m && method === "DELETE") {
        if (!(await store.isLinked(parentId, m[1]))) return fail(404, "Anak tidak dijumpai");
        await store.unlink(parentId, m[1]);
        if ((await store.countParents(m[1])) === 0) await store.deleteChild(m[1]); // last parent leaves: all data deleted
        return json({ ok: true });
      }

      m = path.match(/^\/api\/parent\/photo\/([\w-]+)\/(.+)$/);
      if (m && method === "GET") {
        if (!(await store.isLinked(parentId, m[1]))) return fail(404, "Tidak dijumpai");
        const ph = await store.getPhoto(m[1], decodeURIComponent(m[2]));
        if (!ph) return fail(404, "Gambar tidak dijumpai");
        return new Response(ph.bytes, { status: 200, headers: { "content-type": ph.mime, "cache-control": "private, max-age=3600" } });
      }

      if (path === "/api/parent/marks" && method === "POST") {
        const body = await readJson(request);
        if (!(await store.isLinked(parentId, String(body.childId || "")))) return fail(404, "Anak tidak dijumpai");
        if (typeof body.recordTs !== "string" || body.recordTs.length > 40) return fail(400, "Rekod tidak sah");
        if (!validateParentMarks(body.parentMarks)) return fail(400, "Markah tidak sah");
        const at = now();
        await store.upsertMarks(body.childId, body.recordTs, JSON.stringify(body.parentMarks), at);
        return json({ ok: true, updatedAt: at });
      }

      if (path === "/api/parent/account" && method === "DELETE") {
        const kids = await store.listChildrenForParent(parentId);
        for (const k of kids) {
          await store.unlink(parentId, k.id);
          if ((await store.countParents(k.id)) === 0) await store.deleteChild(k.id);
        }
        await store.deleteParent(parentId);
        return json({ ok: true });
      }
    }

    return fail(404, "Tidak dijumpai");
  }

  return {
    async handle(request) {
      if (request.method === "OPTIONS") return cors(request, new Response(null, { status: 204 }));
      try {
        return cors(request, await route(request));
      } catch (e) {
        const status = e && e.status ? e.status : 500;
        return cors(request, fail(status, status === 500 ? "Ralat pelayan" : e.message));
      }
    }
  };
}
