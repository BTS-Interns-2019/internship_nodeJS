'strict use';

const mysql = require('mysql');

let serverConnection = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'Savant32',
  database: 'futbol',
});

module.exports = serverConnection;
