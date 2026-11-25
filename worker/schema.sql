-- MyKids Study Arena (Phase 2). Personal Cloudflare account only. Run with:
--   wrangler d1 execute mykids-study-arena-db --remote --file=schema.sql
-- Privacy: parents (Google sub + email), children (nickname/name, grade), synced study data, photos. No birth dates, no school unless added later.
DROP TABLE IF EXISTS families; -- legacy v4 family-code tables (never deployed)

CREATE TABLE IF NOT EXISTS parents (
  id TEXT PRIMARY KEY,
  google_sub TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  name TEXT,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS children (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  grade_id TEXT NOT NULL,
  device_token_hash TEXT NOT NULL,
  snapshot TEXT,
  snapshot_updated_at INTEGER,
  created_at INTEGER NOT NULL,
  school_type TEXT
);
-- Note: For already-provisioned D1 databases, run once if migrating from v4:
--   ALTER TABLE children ADD COLUMN school_type TEXT;

CREATE TABLE IF NOT EXISTS links (
  parent_id TEXT NOT NULL,
  child_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (parent_id, child_id)
);
CREATE INDEX IF NOT EXISTS idx_links_child ON links (child_id);

CREATE TABLE IF NOT EXISTS pairs (
  code TEXT PRIMARY KEY,
  secret_hash TEXT NOT NULL,
  child_id TEXT,
  display_name TEXT NOT NULL,
  grade_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  claimed_child_id TEXT,
  device_plain TEXT
);

CREATE TABLE IF NOT EXISTS marks (
  child_id TEXT NOT NULL,
  record_ts TEXT NOT NULL,
  marks_json TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (child_id, record_ts)
);

CREATE TABLE IF NOT EXISTS photos (
  id TEXT NOT NULL,
  child_id TEXT NOT NULL,
  b64 TEXT NOT NULL,
  mime TEXT NOT NULL,
  size INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (child_id, id)
);

CREATE TABLE IF NOT EXISTS rate (
  k TEXT NOT NULL,
  bucket INTEGER NOT NULL,
  n INTEGER NOT NULL,
  PRIMARY KEY (k, bucket)
);

-- =====================================================================
-- Diagnostic Engine Tables (v5 Step 1)
-- =====================================================================

CREATE TABLE IF NOT EXISTS syllabus_nodes (
  id TEXT PRIMARY KEY,
  subject TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  chapter_id TEXT,
  topic_name TEXT NOT NULL,
  subtopic_name TEXT NOT NULL,
  prerequisite_node_id TEXT REFERENCES syllabus_nodes(id) ON DELETE SET NULL,
  expected_time_ms INTEGER NOT NULL CHECK (expected_time_ms > 0),
  bloom_level TEXT NOT NULL CHECK (bloom_level IN ('Remember', 'Understand', 'Apply', 'Analyze'))
);
CREATE INDEX IF NOT EXISTS idx_syllabus_nodes_scope ON syllabus_nodes (grade_level, subject);
CREATE INDEX IF NOT EXISTS idx_syllabus_nodes_prereq ON syllabus_nodes (prerequisite_node_id);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  syllabus_node_id TEXT NOT NULL REFERENCES syllabus_nodes(id) ON DELETE CASCADE,
  difficulty_1_to_5 INTEGER NOT NULL CHECK (difficulty_1_to_5 BETWEEN 1 AND 5),
  prompt_text TEXT NOT NULL,
  options_json TEXT NOT NULL,
  correct_option TEXT NOT NULL CHECK (correct_option IN ('A', 'B', 'C', 'D')),
  explanation_text TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_questions_node ON questions (syllabus_node_id, difficulty_1_to_5);

CREATE TABLE IF NOT EXISTS assessment_sessions (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL CHECK (session_type IN ('INITIAL_DIAGNOSTIC', 'WEEKLY_CHECKUP')),
  started_at TEXT NOT NULL,
  completed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_sessions_student ON assessment_sessions (student_id, started_at);

CREATE TABLE IF NOT EXISTS attempt_logs (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES assessment_sessions(id) ON DELETE CASCADE,
  student_id TEXT NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  syllabus_node_id TEXT NOT NULL REFERENCES syllabus_nodes(id) ON DELETE CASCADE,
  is_correct INTEGER NOT NULL CHECK (is_correct IN (0, 1)),
  time_spent_ms INTEGER NOT NULL CHECK (time_spent_ms >= 0),
  error_classification TEXT NOT NULL CHECK (error_classification IN ('MASTERY', 'LOW_FLUENCY', 'CARELESS_RUSH', 'CONCEPTUAL_GAP', 'TIMEOUT')),
  answered_at_myt TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_attempts_student_time ON attempt_logs (student_id, answered_at_myt);
CREATE INDEX IF NOT EXISTS idx_attempts_student_node ON attempt_logs (student_id, syllabus_node_id);
CREATE INDEX IF NOT EXISTS idx_attempts_session ON attempt_logs (session_id);

-- =====================================================================
-- Optional Student Google Sign-In & Cloud Sync (v5)
-- =====================================================================

CREATE TABLE IF NOT EXISTS student_accounts (
  id TEXT PRIMARY KEY,
  google_sub TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  name TEXT,
  backup_json TEXT,
  backup_updated_at INTEGER,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS student_profile_links (
  google_sub TEXT NOT NULL,
  local_profile_id TEXT NOT NULL,
  child_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (google_sub, local_profile_id)
);
CREATE INDEX IF NOT EXISTS idx_spl_google_sub ON student_profile_links (google_sub);
