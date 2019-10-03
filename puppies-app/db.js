'use strict'

const mysql = require('mysql');

let pool = mysql.createPool({
  port : 3306, 
  host : 'localhost',
  user : 'root',
  password : 'edgar',
  database : 'adoptions'
});

module.exports = pool;