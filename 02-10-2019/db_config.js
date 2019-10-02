const mysql = require('mysql');

// set database connection
// the port is by default 3306
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'u9Ls^7NObnSw',
  database: 'sakila',
});

module.exports = connection;
