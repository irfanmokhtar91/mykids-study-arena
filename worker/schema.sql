CREATE TABLE IF NOT EXISTS families (
  family_code TEXT PRIMARY KEY,
  pin_hash TEXT NOT NULL,
  sync_token TEXT NOT NULL,
  state_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
