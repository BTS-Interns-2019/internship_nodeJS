'use strict'
const mysql = require('mysql')
var connection = mysql.createConnection({
    //socketPath : 'C:\Program Files\MySQL\MySQL Server 8.0\bin\'
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});
module.exports = connection;