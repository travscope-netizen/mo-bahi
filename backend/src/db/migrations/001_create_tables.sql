-- books table
CREATE TABLE IF NOT EXISTS books (
  id VARCHAR(50) PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  price INT NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  cover_url TEXT,
  description TEXT,
  stock INT DEFAULT 0,
  slug TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT now()
);

-- leads table
CREATE TABLE IF NOT EXISTS leads (
  id VARCHAR(50) PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  source TEXT,
  message TEXT,
  interest TEXT,
  category TEXT,
  campaign TEXT,
  meta JSONB,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT now()
);
