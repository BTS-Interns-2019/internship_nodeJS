const mysql = require('mysql')

var connection = mysql.createConnection({
    // socketPath:'C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\',
    host: 'localhost',
    user: 'root',
    password: 'Rmc1553318',
    database: 'my_db',
    port: 3307
});

module.exports = connection;