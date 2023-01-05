require("dotenv").config();

const   Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.PGRES_USERNAME,
  password: process.env.PGRES_PASSWORD,
  host: "localhost",
  post: 5432,
  database:'todolist'
});

module.exports = pool;