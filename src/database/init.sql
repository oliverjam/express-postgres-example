BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL
);

INSERT INTO users (email, password, name) VALUES (
  'test@gmail.com',
  '$2a$10$YoazGoxCZFmVHkZWMbkH4uu91tocTXuODyrjucCgIpwbTvX1AC2wG',
  'Test Testington'
);

COMMIT;