'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({ 
    //socketPath: 'C:\Program Files\MySQL\MySQL Server 8.0\bin',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'edgar',
    database: 'bts_internship'
});

module.exports = connection;