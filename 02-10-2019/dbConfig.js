'use strict'
const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "Ch1rr1zt1an",
//     database: "football"
// });
var pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Ch1rr1zt1an",
    database: "football"
});


module.exports = pool;