// Verify a Google Sign-In ID token (RS256) against Google's public keys. No secrets involved.
import { b64urlDecode, b64urlToText } from "./crypto.js";

const DEFAULT_JWKS = "https://www.googleapis.com/oauth2/v3/certs";
let jwksCache = { at: 0, url: "", keys: null };

async function getKeys(fetchImpl, url, nowMs) {
  if (jwksCache.keys && jwksCache.url === url && nowMs - jwksCache.at < 3600 * 1000) return jwksCache.keys;
  const r = await fetchImpl(url);
  if (!r.ok) throw new Error("Tidak dapat memuat kunci Google");
  const j = await r.json();
  jwksCache = { at: nowMs, url, keys: j.keys || [] };
  return jwksCache.keys;
}

export function resetGoogleKeyCache() {
  jwksCache = { at: 0, url: "", keys: null };
}

/**
 * @returns {Promise<{sub: string, email: string, name: string}>} or throws Error("...")
 */
export async function verifyGoogleIdToken(idToken, { clientId, fetchImpl = fetch, nowMs = Date.now(), jwksUrl = DEFAULT_JWKS }) {
  if (!clientId) throw new Error("GOOGLE_CLIENT_ID belum ditetapkan");
  const parts = String(idToken || "").split(".");
  if (parts.length !== 3) throw new Error("Token tidak sah");
  let header, payload;
  try {
    header = JSON.parse(b64urlToText(parts[0]));
    payload = JSON.parse(b64urlToText(parts[1]));
  } catch (e) {
    throw new Error("Token tidak sah");
  }
  if (header.alg !== "RS256") throw new Error("Algoritma token tidak disokong");
  const keys = await getKeys(fetchImpl, jwksUrl, nowMs);
  let jwk = keys.find((k) => k.kid === header.kid);
  if (!jwk) {
    resetGoogleKeyCache(); // keys may have rotated: refetch once
    const fresh = await getKeys(fetchImpl, jwksUrl, nowMs);
    jwk = fresh.find((k) => k.kid === header.kid);
  }
  if (!jwk) throw new Error("Kunci token tidak dikenali");
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlDecode(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
  if (!ok) throw new Error("Tandatangan token tidak sah");
  if (payload.iss !== "https://accounts.google.com" && payload.iss !== "accounts.google.com") throw new Error("Pengeluar token tidak sah");
  if (payload.aud !== clientId) throw new Error("Token bukan untuk aplikasi ini");
  if (typeof payload.exp !== "number" || payload.exp * 1000 < nowMs - 60000) throw new Error("Token telah tamat tempoh");
  if (payload.email_verified !== true) throw new Error("E-mel Google belum disahkan");
  if (!payload.sub || !payload.email) throw new Error("Token tidak lengkap");
  return { sub: String(payload.sub), email: String(payload.email), name: String(payload.name || payload.email) };
}
