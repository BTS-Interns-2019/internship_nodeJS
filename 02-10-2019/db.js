'use strict'
const mysql = require('mysql')
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
}) 
module.exports = pool