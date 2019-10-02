'use strict'
const mysql = require ('mysql');

var serverConnection = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '123456',
    database : 'futbol'
})

module.exports = serverConnection;