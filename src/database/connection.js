const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) throw new Error("DATABASE_URL env var not found");

const db = new pg.Pool({
  connectionString: DB_URL,
});

module.exports = db;

db.query("SELECT * FROM users").then(console.log);
