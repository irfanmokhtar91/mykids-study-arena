// Cloudflare D1 implementation of the store used by core.js.
import { randomHex } from "./crypto.js";

function toB64(bytes) {
  let s = "";
  const CH = 0x8000;
  for (let i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  return btoa(s);
}
function fromB64(b64) {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}

export class D1Store {
  constructor(db) {
    this.db = db;
  }

  async upsertParent({ sub, email, name, at }) {
    const existing = await this.db.prepare("SELECT id, email, name FROM parents WHERE google_sub = ?").bind(sub).first();
    if (existing) {
      await this.db.prepare("UPDATE parents SET email = ?, name = ? WHERE id = ?").bind(email, name, existing.id).run();
      return { id: existing.id, email, name };
    }
    const id = `pa_${randomHex(10)}`;
    await this.db.prepare("INSERT INTO parents (id, google_sub, email, name, created_at) VALUES (?, ?, ?, ?, ?)").bind(id, sub, email, name, at).run();
    return { id, email, name };
  }

  async deleteParent(parentId) {
    await this.db.prepare("DELETE FROM links WHERE parent_id = ?").bind(parentId).run();
    await this.db.prepare("DELETE FROM parents WHERE id = ?").bind(parentId).run();
  }

  async createPair({ code, secretHash, childId, displayName, gradeId, expiresAt }) {
    await this.db.prepare("DELETE FROM pairs WHERE expires_at < ?").bind(Date.now() - 86400000).run();
    await this.db
      .prepare("INSERT INTO pairs (code, secret_hash, child_id, display_name, grade_id, expires_at) VALUES (?, ?, ?, ?, ?, ?)")
      .bind(code, secretHash, childId, displayName, gradeId, expiresAt)
      .run();
  }

  async getPair(code) {
    const r = await this.db.prepare("SELECT * FROM pairs WHERE code = ?").bind(code).first();
    if (!r) return null;
    return { code: r.code, secretHash: r.secret_hash, childId: r.child_id, displayName: r.display_name, gradeId: r.grade_id, expiresAt: r.expires_at, claimedChildId: r.claimed_child_id, devicePlain: r.device_plain };
  }

  async markPairClaimed(code, { childId, devicePlain }) {
    await this.db.prepare("UPDATE pairs SET claimed_child_id = ?, device_plain = ? WHERE code = ?").bind(childId, devicePlain, code).run();
  }

  async clearPairPlain(code) {
    await this.db.prepare("UPDATE pairs SET device_plain = NULL WHERE code = ?").bind(code).run();
  }

  async createChild({ id, displayName, gradeId, deviceTokenHash, at }) {
    await this.db
      .prepare("INSERT INTO children (id, display_name, grade_id, device_token_hash, created_at) VALUES (?, ?, ?, ?, ?)")
      .bind(id, displayName, gradeId, deviceTokenHash, at)
      .run();
  }

  async getChild(id) {
    const r = await this.db.prepare("SELECT * FROM children WHERE id = ?").bind(id).first();
    if (!r) return null;
    return { id: r.id, displayName: r.display_name, gradeId: r.grade_id, deviceTokenHash: r.device_token_hash, snapshot: r.snapshot, snapshotUpdatedAt: r.snapshot_updated_at };
  }

  async saveSnapshot(childId, { displayName, gradeId, snapshot, at }) {
    await this.db.prepare("UPDATE children SET display_name = ?, grade_id = ?, snapshot = ?, snapshot_updated_at = ? WHERE id = ?").bind(displayName, gradeId, snapshot, at, childId).run();
  }

  async linkParent(parentId, childId, at) {
    await this.db.prepare("INSERT OR IGNORE INTO links (parent_id, child_id, created_at) VALUES (?, ?, ?)").bind(parentId, childId, at).run();
  }

  async isLinked(parentId, childId) {
    const r = await this.db.prepare("SELECT 1 AS x FROM links WHERE parent_id = ? AND child_id = ?").bind(parentId, childId).first();
    return !!r;
  }

  async countParents(childId) {
    const r = await this.db.prepare("SELECT COUNT(*) AS n FROM links WHERE child_id = ?").bind(childId).first();
    return r ? r.n : 0;
  }

  async unlink(parentId, childId) {
    await this.db.prepare("DELETE FROM links WHERE parent_id = ? AND child_id = ?").bind(parentId, childId).run();
  }

  async deleteChild(childId) {
    for (const sql of ["DELETE FROM marks WHERE child_id = ?", "DELETE FROM photos WHERE child_id = ?", "DELETE FROM links WHERE child_id = ?", "DELETE FROM children WHERE id = ?"]) {
      await this.db.prepare(sql).bind(childId).run();
    }
    await this.db.prepare("DELETE FROM pairs WHERE child_id = ? OR claimed_child_id = ?").bind(childId, childId).run();
  }

  async listChildrenForParent(parentId) {
    const { results } = await this.db
      .prepare("SELECT c.id, c.display_name, c.grade_id, c.snapshot_updated_at FROM children c JOIN links l ON l.child_id = c.id WHERE l.parent_id = ? ORDER BY c.display_name")
      .bind(parentId)
      .all();
    return (results || []).map((r) => ({ id: r.id, displayName: r.display_name, gradeId: r.grade_id, snapshotUpdatedAt: r.snapshot_updated_at }));
  }

  async upsertMarks(childId, recordTs, marksJson, at) {
    await this.db
      .prepare("INSERT INTO marks (child_id, record_ts, marks_json, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(child_id, record_ts) DO UPDATE SET marks_json = excluded.marks_json, updated_at = excluded.updated_at")
      .bind(childId, recordTs, marksJson, at)
      .run();
  }

  async listMarksSince(childId, since) {
    const { results } = await this.db.prepare("SELECT record_ts, marks_json, updated_at FROM marks WHERE child_id = ? AND updated_at > ? ORDER BY updated_at").bind(childId, since).all();
    return (results || []).map((r) => ({ recordTs: r.record_ts, parentMarks: JSON.parse(r.marks_json), updatedAt: r.updated_at }));
  }

  async putPhoto({ id, childId, bytes, mime, size, at }) {
    await this.db
      .prepare("INSERT INTO photos (id, child_id, b64, mime, size, created_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(child_id, id) DO UPDATE SET b64 = excluded.b64, size = excluded.size")
      .bind(id, childId, toB64(bytes), mime, size, at)
      .run();
  }

  async getPhoto(childId, id) {
    const r = await this.db.prepare("SELECT b64, mime FROM photos WHERE child_id = ? AND id = ?").bind(childId, id).first();
    return r ? { bytes: fromB64(r.b64), mime: r.mime } : null;
  }

  async hasPhoto(childId, id) {
    const r = await this.db.prepare("SELECT 1 AS x FROM photos WHERE child_id = ? AND id = ?").bind(childId, id).first();
    return !!r;
  }

  async countPhotos(childId) {
    const r = await this.db.prepare("SELECT COUNT(*) AS n FROM photos WHERE child_id = ?").bind(childId).first();
    return r ? r.n : 0;
  }

  async hit(key, bucket) {
    const r = await this.db.prepare("INSERT INTO rate (k, bucket, n) VALUES (?, ?, 1) ON CONFLICT(k, bucket) DO UPDATE SET n = n + 1 RETURNING n").bind(key, bucket).first();
    if (Math.random() < 0.02) await this.db.prepare("DELETE FROM rate WHERE bucket < ?").bind(bucket - 6).run();
    return r ? r.n : 1;
  }
}
