"use strict";

const mysql = require("mysql");
const config = require('./constants')


let serverConnection = mysql.createPool({
  host: config.DB_HOST,
  port: config.APP_POR,
  user: config.DB_USER,
  password: config.DB_PASSSWORD,
  database: config.DB_NAME,

});


module.exports = serverConnection;
