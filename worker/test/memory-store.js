// In-memory store with the same interface as D1Store. Used only by tests.
export class MemoryStore {
  constructor() {
    this.parents = new Map();
    this.children = new Map();
    this.links = new Set();
    this.pairs = new Map();
    this.marks = new Map();
    this.photos = new Map();
    this.rate = new Map();
    this.syllabusNodes = new Map();
    this.questions = new Map();
    this.diagnosticSessions = new Map();
    this.attemptLogs = new Map();
    this.seq = 0;
  }
  async upsertParent({ sub, email, name, at }) {
    for (const p of this.parents.values()) if (p.sub === sub) { p.email = email; p.name = name; return { id: p.id, email, name }; }
    const id = `pa_${++this.seq}`;
    this.parents.set(id, { id, sub, email, name, at });
    return { id, email, name };
  }
  async deleteParent(id) { for (const l of [...this.links]) if (l.startsWith(id + "|")) this.links.delete(l); this.parents.delete(id); }
  async createPair(p) { this.pairs.set(p.code, { ...p, claimedChildId: null, devicePlain: null }); }
  async getPair(code) { return this.pairs.get(code) || null; }
  async markPairClaimed(code, { childId, devicePlain }) { const p = this.pairs.get(code); p.claimedChildId = childId; p.devicePlain = devicePlain; }
  async clearPairPlain(code) { this.pairs.get(code).devicePlain = null; }
  async createChild({ id, displayName, gradeId, deviceTokenHash, at }) { this.children.set(id, { id, displayName, gradeId, deviceTokenHash, snapshot: null, snapshotUpdatedAt: null, at }); }
  async getChild(id) { return this.children.get(id) || null; }
  async saveSnapshot(id, { displayName, gradeId, snapshot, at }) { Object.assign(this.children.get(id), { displayName, gradeId, snapshot, snapshotUpdatedAt: at }); }
  async linkParent(p, c) { this.links.add(`${p}|${c}`); }
  async isLinked(p, c) { return this.links.has(`${p}|${c}`); }
  async countParents(c) { return [...this.links].filter((l) => l.endsWith("|" + c)).length; }
  async unlink(p, c) { this.links.delete(`${p}|${c}`); }
  async deleteChild(c) {
    this.children.delete(c);
    for (const k of [...this.marks.keys()]) if (k.startsWith(c + "|")) this.marks.delete(k);
    for (const k of [...this.photos.keys()]) if (k.startsWith(c + "|")) this.photos.delete(k);
    for (const l of [...this.links]) if (l.endsWith("|" + c)) this.links.delete(l);
    for (const [k, p] of [...this.pairs]) if (p.childId === c || p.claimedChildId === c) this.pairs.delete(k);
    for (const [k, s] of [...this.diagnosticSessions]) if (s.student_id === c) this.diagnosticSessions.delete(k);
    for (const [k, a] of [...this.attemptLogs]) if (a.student_id === c) this.attemptLogs.delete(k);
  }
  async saveDiagnosticSession({ childId, session, attempts, syllabusNodes = [], questions = [] }) {
    for (const n of syllabusNodes) if (n && n.id && !this.syllabusNodes.has(n.id)) this.syllabusNodes.set(n.id, { ...n });
    for (const q of questions) if (q && q.id && !this.questions.has(q.id)) this.questions.set(q.id, { ...q });
    this.diagnosticSessions.set(session.id, { id: session.id, student_id: childId, session_type: session.session_type, started_at: session.started_at, completed_at: session.completed_at || null });
    for (const a of attempts) {
      if (!this.attemptLogs.has(a.id)) {
        this.attemptLogs.set(a.id, { id: a.id, session_id: session.id, student_id: childId, question_id: a.question_id, syllabus_node_id: a.syllabus_node_id, is_correct: a.is_correct ? 1 : 0, time_spent_ms: a.time_spent_ms, error_classification: a.error_classification, answered_at_myt: a.answered_at_myt });
      }
    }
  }
  async listDiagnosticsForChild(childId) {
    const sessions = [...this.diagnosticSessions.values()].filter((s) => s.student_id === childId).sort((a, b) => String(b.started_at).localeCompare(String(a.started_at)));
    const attempts = [...this.attemptLogs.values()].filter((a) => a.student_id === childId).sort((a, b) => String(b.answered_at_myt).localeCompare(String(a.answered_at_myt)));
    const nodeIds = new Set();
    attempts.forEach((a) => {
      nodeIds.add(a.syllabus_node_id);
      const n = this.syllabusNodes.get(a.syllabus_node_id);
      if (n && n.prerequisite_node_id) nodeIds.add(n.prerequisite_node_id);
    });
    const syllabusNodes = [...nodeIds].map((id) => this.syllabusNodes.get(id)).filter(Boolean);
    return { sessions, attempts, syllabusNodes };
  }
  async listChildrenForParent(p) {
    return [...this.links].filter((l) => l.startsWith(p + "|")).map((l) => this.children.get(l.split("|")[1])).filter(Boolean).map((c) => ({ id: c.id, displayName: c.displayName, gradeId: c.gradeId, snapshotUpdatedAt: c.snapshotUpdatedAt }));
  }
  async upsertMarks(c, ts, json, at) { this.marks.set(`${c}|${ts}`, { recordTs: ts, parentMarks: JSON.parse(json), updatedAt: at }); }
  async listMarksSince(c, since) { return [...this.marks.entries()].filter(([k, v]) => k.startsWith(c + "|") && v.updatedAt > since).map(([, v]) => v); }
  async putPhoto({ id, childId, bytes, mime, size }) { this.photos.set(`${childId}|${id}`, { bytes, mime, size }); }
  async getPhoto(c, id) { return this.photos.get(`${c}|${id}`) || null; }
  async hasPhoto(c, id) { return this.photos.has(`${c}|${id}`); }
  async countPhotos(c) { return [...this.photos.keys()].filter((k) => k.startsWith(c + "|")).length; }
  async hit(key, bucket) { const k = `${key}|${bucket}`; this.rate.set(k, (this.rate.get(k) || 0) + 1); return this.rate.get(k); }
}
