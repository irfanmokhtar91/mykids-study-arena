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
  created_at INTEGER NOT NULL
);

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
