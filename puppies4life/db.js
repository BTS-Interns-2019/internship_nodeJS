'use strict'
const mysql = require ('mysql');

var serverConnection = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'password',
    database : 'futbol'

})

module.exports = serverConnection;