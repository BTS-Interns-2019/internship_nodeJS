let mysql = require('mysql');
let config = require('./constants');

var connection = mysql.createPool({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME
});

module.exports = connection;