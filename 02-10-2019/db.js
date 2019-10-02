const mysql = require('mysql');

var pool = mysql.createPool({
    
    host: 'localhost',
    user: 'root',
    password: 'Rmc1553318',
    database: 'my_db',
    port:3307

})

module.exports = pool;