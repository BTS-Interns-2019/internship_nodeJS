const mysql = require('mysql');

// set database pool of connections
const pool = mysql.createPool({
  // connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'u9Ls^7NObnSw',
  database: 'sakila',
});

module.exports = pool;
