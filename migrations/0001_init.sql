-- AI 數位素養課程 報名表 schema
-- 執行：npx wrangler d1 execute ai-course-enrollments --remote --file=./migrations/0001_init.sql
-- 本機：           --local 取代 --remote

CREATE TABLE IF NOT EXISTS enrollments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  version TEXT NOT NULL CHECK (version IN ('12hr', '24hr')),
  problem TEXT NOT NULL,
  source TEXT,
  user_agent TEXT,
  ip_address TEXT,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'confirmed', 'cancelled'))
);

CREATE INDEX IF NOT EXISTS idx_enrollments_created
  ON enrollments(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_enrollments_status
  ON enrollments(status);

-- 一個 email 同一個版本只能報一次（避免重複報名）
CREATE UNIQUE INDEX IF NOT EXISTS idx_enrollments_email_version
  ON enrollments(email, version);
