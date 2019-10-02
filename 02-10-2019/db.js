'use strict'

const mysql = require('mysql');

var pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'sakila'
});

module.exports = pool;