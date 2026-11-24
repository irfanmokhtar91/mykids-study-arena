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

      let m = path.match(/^\/api\/parent\/child\/([\w-]+)$/);
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
