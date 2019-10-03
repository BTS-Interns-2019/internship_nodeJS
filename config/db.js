"use strict";

const mysql = require('mysql')
const config = require('./constants');

var pool  = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSSWORD,
  database: config.DB_NAME
});

module.exports = pool;