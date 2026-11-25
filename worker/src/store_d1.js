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
    for (const sql of ["DELETE FROM attempt_logs WHERE student_id = ?", "DELETE FROM assessment_sessions WHERE student_id = ?"]) {
      try {
        await this.db.prepare(sql).bind(childId).run();
      } catch (e) {
        /* ignore on pre-diagnostic schema DBs */
      }
    }
    for (const sql of ["DELETE FROM marks WHERE child_id = ?", "DELETE FROM photos WHERE child_id = ?", "DELETE FROM links WHERE child_id = ?", "DELETE FROM children WHERE id = ?"]) {
      await this.db.prepare(sql).bind(childId).run();
    }
    await this.db.prepare("DELETE FROM pairs WHERE child_id = ? OR claimed_child_id = ?").bind(childId, childId).run();
  }

  async saveDiagnosticSession({ childId, session, attempts, syllabusNodes = [], questions = [] }) {
    const byId = new Map(syllabusNodes.map((n) => [n.id, n]));
    const orderedNodes = [];
    const visited = new Set();
    const visit = (n) => {
      if (!n || visited.has(n.id)) return;
      visited.add(n.id);
      if (n.prerequisite_node_id && byId.has(n.prerequisite_node_id)) visit(byId.get(n.prerequisite_node_id));
      orderedNodes.push(n);
    };
    syllabusNodes.forEach(visit);

    for (const n of orderedNodes) {
      await this.db
        .prepare("INSERT OR IGNORE INTO syllabus_nodes (id, subject, grade_level, chapter_id, topic_name, subtopic_name, prerequisite_node_id, expected_time_ms, bloom_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .bind(n.id, n.subject, n.grade_level, n.chapter_id || null, n.topic_name, n.subtopic_name, n.prerequisite_node_id || null, n.expected_time_ms, n.bloom_level)
        .run();
    }

    for (const q of questions) {
      const optJson = typeof q.options_json === "string" ? q.options_json : JSON.stringify(q.options_json);
      await this.db
        .prepare("INSERT OR IGNORE INTO questions (id, syllabus_node_id, difficulty_1_to_5, prompt_text, options_json, correct_option, explanation_text) VALUES (?, ?, ?, ?, ?, ?, ?)")
        .bind(q.id, q.syllabus_node_id, q.difficulty_1_to_5, q.prompt_text, optJson, q.correct_option, q.explanation_text)
        .run();
    }

    await this.db
      .prepare("INSERT INTO assessment_sessions (id, student_id, session_type, started_at, completed_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET session_type = excluded.session_type, completed_at = excluded.completed_at")
      .bind(session.id, childId, session.session_type, session.started_at, session.completed_at || null)
      .run();

    for (const a of attempts) {
      await this.db
        .prepare("INSERT OR IGNORE INTO attempt_logs (id, session_id, student_id, question_id, syllabus_node_id, is_correct, time_spent_ms, error_classification, answered_at_myt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .bind(a.id, session.id, childId, a.question_id, a.syllabus_node_id, a.is_correct ? 1 : 0, a.time_spent_ms, a.error_classification, a.answered_at_myt)
        .run();
    }
  }

  async listDiagnosticsForChild(childId) {
    const sessRes = await this.db
      .prepare("SELECT id, student_id, session_type, started_at, completed_at FROM assessment_sessions WHERE student_id = ? ORDER BY started_at DESC")
      .bind(childId)
      .all();
    const attRes = await this.db
      .prepare("SELECT id, session_id, student_id, question_id, syllabus_node_id, is_correct, time_spent_ms, error_classification, answered_at_myt FROM attempt_logs WHERE student_id = ? ORDER BY answered_at_myt DESC")
      .bind(childId)
      .all();
    const nodeRes = await this.db
      .prepare("SELECT * FROM syllabus_nodes WHERE id IN (SELECT DISTINCT syllabus_node_id FROM attempt_logs WHERE student_id = ?) OR id IN (SELECT DISTINCT n.prerequisite_node_id FROM syllabus_nodes n JOIN attempt_logs a ON a.syllabus_node_id = n.id WHERE a.student_id = ? AND n.prerequisite_node_id IS NOT NULL)")
      .bind(childId, childId)
      .all();
    return {
      sessions: sessRes.results || [],
      attempts: attRes.results || [],
      syllabusNodes: nodeRes.results || []
    };
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
