const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    port     :  3307,
    user     : 'root',
    password : 'Savant32',
    database : 'sakila'
  });

  module.exports = connection;