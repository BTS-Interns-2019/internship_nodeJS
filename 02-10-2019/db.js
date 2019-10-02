'use strict'
const mysql = require('mysql')

var pool = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'password',
    database : 'sakila'
})

module.exports = pool;