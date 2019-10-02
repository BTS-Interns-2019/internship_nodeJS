'use strict'

const mysql = require('mysql');

const pool = mysql.createPool( {
    //socketPath: 'C:\Program Files\MySQL\MySQL Server 8.0\bin',socketPath: 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'edgar',
    database: 'bts_internship'
});

module.exports = pool;