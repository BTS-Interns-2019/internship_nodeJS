'strict use';

const mysql = require('mysql');

let serverConnection = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'Rmc1553318',
  database: 'futbol',
});

module.exports = serverConnection;
