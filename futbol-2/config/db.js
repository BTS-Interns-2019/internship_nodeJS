"use strict";

const mysql = require("mysql");

let serverConnection = mysql.createPool({
  host: config.DB_HOST,
  port: config.APP_POR,
  user: config.DB_USER,
  password: config.DB_PASSSWORD,
  database: config.DB_NAME
});

module.exports = serverConnection;
