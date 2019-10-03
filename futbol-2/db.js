'use strict'
const mysql = require ('mysql');

var serverConnection = mysql.createPool({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password : 'Rmc1553318',
    database : 'futbol'
})

module.exports = serverConnection;