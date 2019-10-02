const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host     : 'localhost',
    port     :  3307,
    user     : 'root',
    password : 'Savant32',
    database : 'sakila'
  });

  module.exports= pool;