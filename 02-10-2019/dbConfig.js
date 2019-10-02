const mysql = require ('mysql')

//DB connection using the DB config
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'password',
    database : 'sakila'
})

module.exports = connection;