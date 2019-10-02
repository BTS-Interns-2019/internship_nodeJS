'use strict'

const mysql = require('mysql');

let connection = mysql.createConnection({
  port : 3307, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'adoptions'
});

module.exports = connection;