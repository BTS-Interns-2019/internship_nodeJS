'use strict'

const mysql = require('mysql');

<<<<<<< HEAD
const pool = mysql.createPool( {
    //socketPath: 'C:\Program Files\MySQL\MySQL Server 8.0\bin',socketPath: 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'edgar',
    database: 'bts_internship'
=======
let pool = mysql.createPool({
  port : 3307, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'adoptions'
>>>>>>> 57d8033e416e919ee9d039541da0471227c94a6e
});

module.exports = pool;