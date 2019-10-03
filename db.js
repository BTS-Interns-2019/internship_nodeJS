'use strict'

const mysql = require('mysql')

var pool  = mysql.createPool({
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  connectionLimit : 10,
  host: 'localhost',
  user: 'ole',
  password: 'ole',
  database: 'ole'
});

module.exports = pool;


 
