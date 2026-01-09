const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crm_db",
  password: "post123", // 
  port: 5432,
});

module.exports = pool;
