"use strict";

const mysql = require("mysql");
const config = require('./constants')

console.log(config)
let serverConnection = mysql.createPool({
  host: config.DB_HOST,
  port: config.APP_POR,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,

});


module.exports = serverConnection;
