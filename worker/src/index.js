/**
 * MyKids Study Arena — Cloudflare Workers + D1 Family Sync API
 * Private multi-phone sync keyed by 6-char Family Code + Parent PIN (hashed) + syncToken.
 */

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const MAX_BODY_BYTES = 1024 * 1024; // 1 MB

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS
    }
  });
}

async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(String(text));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(a, b) {
  const sa = String(a || "");
  const sb = String(b || "");
  if (sa.length !== sb.length) return false;
  let diff = 0;
  for (let i = 0; i < sa.length; i++) {
    diff |= sa.charCodeAt(i) ^ sb.charCodeAt(i);
  }
  return diff === 0;
}

function randomFamilyCode() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return out;
}

function randomSyncToken() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function isValidPin(pin) {
  return /^\d{4,6}$/.test(String(pin || "").trim());
}

function cleanFamilyCode(code) {
  return String(code || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 10);
}

function cloneProfile(p) {
  return {
    id: String(p.id || ""),
    name: typeof p.name === "string" ? p.name.trim() : "",
    gradeId: ["d6", "t2", "t4"].includes(p.gradeId) ? p.gradeId : "d6",
    avatar: typeof p.avatar === "string" && p.avatar ? p.avatar : "🦊",
    xp: Number(p.xp) || 0,
    coins: Number(p.coins) || 0,
    dailyStreak: Number(p.dailyStreak) || 0,
    activeDays: Array.isArray(p.activeDays) ? p.activeDays.slice(-180) : [],
    weeklyStats: p.weeklyStats && typeof p.weeklyStats === "object" ? { ...p.weeklyStats } : {},
    unlockedItems: Array.isArray(p.unlockedItems) ? p.unlockedItems.slice() : [],
    equippedFrame: typeof p.equippedFrame === "string" ? p.equippedFrame : "default",
    equippedEffect: typeof p.equippedEffect === "string" ? p.equippedEffect : "default",
    lastPlayed: p.lastPlayed || null,
    streakBest: Number(p.streakBest) || 0,
    totalSpeedBonus: Number(p.totalSpeedBonus) || 0,
    history: Array.isArray(p.history) ? p.history.slice(0, 150) : [],
    mistakeLog: Array.isArray(p.mistakeLog) ? p.mistakeLog.slice(0, 300) : [],
    setBest: p.setBest && typeof p.setBest === "object" ? { ...p.setBest } : {},
    updatedAt: typeof p.updatedAt === "string" ? p.updatedAt : ""
  };
}

function mergeTwoProfiles(loc, inc) {
  const out = cloneProfile(loc);
  const incClean = cloneProfile(inc);

  const locTs = String(out.updatedAt || "");
  const incTs = String(incClean.updatedAt || "");
  const incIsNewer = incTs > locTs;

  if (incClean.name && (!out.name || incIsNewer)) out.name = incClean.name;
  if (incClean.gradeId && incIsNewer) out.gradeId = incClean.gradeId;
  if (incClean.avatar && incIsNewer) out.avatar = incClean.avatar;
  if (incIsNewer && incClean.equippedFrame) out.equippedFrame = incClean.equippedFrame;
  else if (out.equippedFrame === "default" && incClean.equippedFrame && incClean.equippedFrame !== "default") {
    out.equippedFrame = incClean.equippedFrame;
  }
  if (incIsNewer && incClean.equippedEffect) out.equippedEffect = incClean.equippedEffect;
  else if (out.equippedEffect === "default" && incClean.equippedEffect && incClean.equippedEffect !== "default") {
    out.equippedEffect = incClean.equippedEffect;
  }

  out.xp = Math.max(out.xp, incClean.xp);
  out.coins = Math.max(out.coins, incClean.coins);
  out.streakBest = Math.max(out.streakBest, incClean.streakBest);
  out.dailyStreak = Math.max(out.dailyStreak, incClean.dailyStreak);
  out.totalSpeedBonus = Math.max(out.totalSpeedBonus, incClean.totalSpeedBonus);
  if (incTs > locTs) out.updatedAt = incTs;

  out.unlockedItems = Array.from(new Set([...out.unlockedItems, ...incClean.unlockedItems]));
  out.activeDays = Array.from(new Set([...out.activeDays, ...incClean.activeDays])).sort().slice(-180);

  const allWeeks = new Set([...Object.keys(out.weeklyStats), ...Object.keys(incClean.weeklyStats)]);
  allWeeks.forEach((wk) => {
    const lw = out.weeklyStats[wk] || { marks: 0, sets: 0, bonus: 0, xp: 0 };
    const iw = incClean.weeklyStats[wk] || { marks: 0, sets: 0, bonus: 0, xp: 0 };
    out.weeklyStats[wk] = {
      marks: Math.max(Number(lw.marks) || 0, Number(iw.marks) || 0),
      sets: Math.max(Number(lw.sets) || 0, Number(iw.sets) || 0),
      bonus: Math.max(Number(lw.bonus) || 0, Number(iw.bonus) || 0),
      xp: Math.max(Number(lw.xp) || 0, Number(iw.xp) || 0)
    };
  });

  const allSetKeys = new Set([...Object.keys(out.setBest), ...Object.keys(incClean.setBest)]);
  allSetKeys.forEach((k) => {
    const ls = out.setBest[k];
    const is = incClean.setBest[k];
    if (!is) return;
    if (!ls) {
      out.setBest[k] = { ...is };
      return;
    }
    out.setBest[k] = {
      bestScore: Math.max(Number(ls.bestScore) || 0, Number(is.bestScore) || 0),
      bestBonus: Math.max(Number(ls.bestBonus) || 0, Number(is.bestBonus) || 0),
      total: is.total || ls.total,
      attempts: Math.max(Number(ls.attempts) || 0, Number(is.attempts) || 0),
      lastPlayed: String(is.lastPlayed || "") > String(ls.lastPlayed || "") ? is.lastPlayed : ls.lastPlayed
    };
  });

  const histMap = new Map();
  out.history.forEach((h) => histMap.set(`${h.ts}|${h.subjectId}|${h.chapterId}|${h.setNum}|${h.score}`, h));
  incClean.history.forEach((h) => {
    const hk = `${h.ts}|${h.subjectId}|${h.chapterId}|${h.setNum}|${h.score}`;
    if (!histMap.has(hk)) histMap.set(hk, h);
  });
  out.history = Array.from(histMap.values())
    .sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")))
    .slice(0, 150);
  for (let i = 80; i < out.history.length; i++) {
    if (out.history[i] && out.history[i].questionLogs) {
      out.history[i] = { ...out.history[i] };
      delete out.history[i].questionLogs;
    }
  }

  const misMap = new Map();
  out.mistakeLog.forEach((m) => misMap.set(`${m.ts}|${m.subjectId}|${m.chapterId}|${m.q}`, m));
  incClean.mistakeLog.forEach((m) => {
    const mk = `${m.ts}|${m.subjectId}|${m.chapterId}|${m.q}`;
    if (!misMap.has(mk)) misMap.set(mk, m);
  });
  out.mistakeLog = Array.from(misMap.values())
    .sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")))
    .slice(0, 300);

  if (incClean.lastPlayed && (!out.lastPlayed || incIsNewer)) {
    out.lastPlayed = incClean.lastPlayed;
  }

  return out;
}

export function mergeFamilyStates(existingRaw, incomingRaw) {
  const existing = existingRaw && typeof existingRaw === "object" ? existingRaw : { version: 4, profiles: [], deletedProfileIds: [] };
  const incoming = incomingRaw && typeof incomingRaw === "object" ? incomingRaw : { version: 4, profiles: [], deletedProfileIds: [] };

  const delMap = new Map();
  const absorbDeletes = (list) => {
    if (!Array.isArray(list)) return;
    list.forEach((d) => {
      if (!d || !d.id) return;
      const prev = delMap.get(d.id) || "";
      const ts = String(d.ts || "");
      if (ts >= prev) delMap.set(d.id, ts);
    });
  };
  absorbDeletes(existing.deletedProfileIds);
  absorbDeletes(incoming.deletedProfileIds);

  const isDeleted = (p) => {
    if (!p || !p.id || !delMap.has(p.id)) return false;
    const delTs = delMap.get(p.id);
    const profTs = String(p.updatedAt || "");
    return !profTs || delTs >= profTs;
  };

  const mergedProfiles = [];
  if (Array.isArray(existing.profiles)) {
    existing.profiles.forEach((p) => {
      if (p && !isDeleted(p)) mergedProfiles.push(cloneProfile(p));
    });
  }

  if (Array.isArray(incoming.profiles)) {
    incoming.profiles.forEach((inc) => {
      if (!inc || isDeleted(inc)) return;
      const incName = typeof inc.name === "string" ? inc.name.trim() : "";
      let idx = mergedProfiles.findIndex((p) => p.id && inc.id && p.id === inc.id);
      if (idx === -1 && incName) {
        idx = mergedProfiles.findIndex(
          (p) => p.name && p.name.trim().toLowerCase() === incName.toLowerCase() && p.gradeId === inc.gradeId
        );
      }
      if (idx === -1) {
        mergedProfiles.push(cloneProfile(inc));
      } else {
        mergedProfiles[idx] = mergeTwoProfiles(mergedProfiles[idx], inc);
      }
    });
  }

  const deletedProfileIds = Array.from(delMap.entries())
    .map(([id, ts]) => ({ id, ts }))
    .sort((a, b) => String(b.ts).localeCompare(String(a.ts)))
    .slice(0, 50);

  return {
    version: 4,
    dlpEnabled: !!(incoming.dlpEnabled !== undefined ? incoming.dlpEnabled : existing.dlpEnabled),
    profiles: mergedProfiles,
    deletedProfileIds
  };
}

async function readJsonBody(request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return { err: jsonResponse({ ok: false, error: "Payload exceeds 1 MB limit." }, 413) };
  }
  try {
    return { body: raw ? JSON.parse(raw) : {} };
  } catch (e) {
    return { err: jsonResponse({ ok: false, error: "Invalid JSON body." }, 400) };
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "GET" && (path === "/api/health" || path === "/")) {
      return jsonResponse({ ok: true, service: "mykids-study-arena-api" });
    }

    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Method not allowed." }, 405);
    }

    if (!env || !env.DB) {
      return jsonResponse({ ok: false, error: "D1 database binding missing." }, 500);
    }

    const parsed = await readJsonBody(request);
    if (parsed.err) return parsed.err;
    const body = parsed.body || {};

    if (path === "/api/family/create") {
      const pin = String(body.pin || "").trim();
      if (!isValidPin(pin)) {
        return jsonResponse({ ok: false, error: "Kod PIN mesti 4 hingga 6 digit nombor." }, 400);
      }

      let code = "";
      for (let attempt = 0; attempt < 5; attempt++) {
        const candidate = randomFamilyCode();
        const exists = await env.DB.prepare("SELECT family_code FROM families WHERE family_code = ?")
          .bind(candidate)
          .first();
        if (!exists) {
          code = candidate;
          break;
        }
      }
      if (!code) {
        return jsonResponse({ ok: false, error: "Gagal menjana kod unik. Sila cuba lagi." }, 500);
      }

      const syncToken = randomSyncToken();
      const pinHash = await sha256Hex(`${code}:${pin}`);
      const merged = mergeFamilyStates(null, body.payload);
      const updatedAt = new Date().toISOString();

      await env.DB.prepare(
        "INSERT INTO families (family_code, pin_hash, sync_token, state_json, updated_at) VALUES (?, ?, ?, ?, ?)"
      )
        .bind(code, pinHash, syncToken, JSON.stringify(merged), updatedAt)
        .run();

      return jsonResponse({
        ok: true,
        familyCode: code,
        syncToken,
        state: merged,
        updatedAt
      });
    }

    if (path === "/api/family/pull") {
      const code = cleanFamilyCode(body.familyCode);
      const pin = String(body.pin || "").trim();
      if (!code || !isValidPin(pin)) {
        return jsonResponse({ ok: false, error: "Sila masukkan Kod Keluarga dan Kod PIN yang sah." }, 400);
      }

      const row = await env.DB.prepare(
        "SELECT family_code, pin_hash, sync_token, state_json, updated_at FROM families WHERE family_code = ?"
      )
        .bind(code)
        .first();
      if (!row) {
        return jsonResponse({ ok: false, error: "Kod Keluarga tidak ditemui." }, 404);
      }

      const pinHash = await sha256Hex(`${code}:${pin}`);
      if (!safeEqual(row.pin_hash, pinHash)) {
        return jsonResponse({ ok: false, error: "Kod PIN Ibu Bapa tidak tepat." }, 403);
      }

      let stateObj = { version: 4, profiles: [], deletedProfileIds: [] };
      try {
        stateObj = JSON.parse(row.state_json);
      } catch (e) {
        // fallback empty state
      }

      return jsonResponse({
        ok: true,
        familyCode: row.family_code,
        syncToken: row.sync_token,
        state: stateObj,
        updatedAt: row.updated_at
      });
    }

    if (path === "/api/family/push") {
      const code = cleanFamilyCode(body.familyCode);
      const syncToken = String(body.syncToken || "").trim();
      if (!code || !syncToken) {
        return jsonResponse({ ok: false, error: "Kod Keluarga atau token pengesahan tiada." }, 400);
      }

      const row = await env.DB.prepare(
        "SELECT family_code, sync_token, state_json FROM families WHERE family_code = ?"
      )
        .bind(code)
        .first();
      if (!row) {
        return jsonResponse({ ok: false, error: "Kod Keluarga tidak ditemui." }, 404);
      }
      if (!safeEqual(row.sync_token, syncToken)) {
        return jsonResponse({ ok: false, error: "Token segerak tidak sah." }, 403);
      }

      let current = { version: 4, profiles: [], deletedProfileIds: [] };
      try {
        current = JSON.parse(row.state_json);
      } catch (e) {
        // fallback
      }

      const merged = mergeFamilyStates(current, body.payload);
      const updatedAt = new Date().toISOString();

      await env.DB.prepare("UPDATE families SET state_json = ?, updated_at = ? WHERE family_code = ?")
        .bind(JSON.stringify(merged), updatedAt, code)
        .run();

      return jsonResponse({
        ok: true,
        familyCode: code,
        state: merged,
        updatedAt
      });
    }

    if (path === "/api/family/pin") {
      const code = cleanFamilyCode(body.familyCode);
      const oldPin = String(body.oldPin || "").trim();
      const newPin = String(body.newPin || "").trim();
      if (!code || !isValidPin(oldPin) || !isValidPin(newPin)) {
        return jsonResponse({ ok: false, error: "Kod PIN mesti 4 hingga 6 digit nombor." }, 400);
      }

      const row = await env.DB.prepare("SELECT family_code, pin_hash FROM families WHERE family_code = ?")
        .bind(code)
        .first();
      if (!row) {
        return jsonResponse({ ok: false, error: "Kod Keluarga tidak ditemui." }, 404);
      }

      const oldHash = await sha256Hex(`${code}:${oldPin}`);
      if (!safeEqual(row.pin_hash, oldHash)) {
        return jsonResponse({ ok: false, error: "Kod PIN semasa tidak tepat." }, 403);
      }

      const newHash = await sha256Hex(`${code}:${newPin}`);
      const updatedAt = new Date().toISOString();
      await env.DB.prepare("UPDATE families SET pin_hash = ?, updated_at = ? WHERE family_code = ?")
        .bind(newHash, updatedAt, code)
        .run();

      return jsonResponse({ ok: true, updatedAt });
    }

    return jsonResponse({ ok: false, error: "Endpoint not found." }, 404);
  }
};
