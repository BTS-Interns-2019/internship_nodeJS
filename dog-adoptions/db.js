let mysql = require('mysql');
let env = require('dotenv').config();

var connection = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME
});

module.exports = connection;