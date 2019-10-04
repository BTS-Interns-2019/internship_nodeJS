'use strict';

const mysql = require('mysql');

let serverConnection = mysql.createPool({
  host: config.DB_HOST,
  port: 3307,
  user: config.DB_USER,
  password: config.DB_PASSSWORD,
  database: config.DB_NAME
});

module.exports = serverConnection;
