let mysql = require('mysql');

var connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'students2'
});

module.exports = connection;