'use strict'

const mysql = require('mysql');

let pool = mysql.createPool({
  port : 3307, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'adoptions'
});

module.exports = pool;