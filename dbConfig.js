const mysql = require('mysql')

// DB connection using the DB config
var connection = mysql.createConnection({
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  user: 'ole',
  password: 'ole',
  database: 'ole'
});

module.exports = connection;
