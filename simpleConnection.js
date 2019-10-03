'use strict'

const mysql = require('mysql');
const express = require('express');

// DB connection using the DB config
var connection = mysql.createConnection({
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  user: 'ole',
  password: 'ole',
  database: 'ole'
});

// Create an express app
const app = express()
const port = 5000

// Set the routes and methods to listen
app.get('/', (req, res) => {
  // Connect to DB
  connection.connect()
  // Execute a query
  connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw 'Connection Error'

    res.set('Content-Type', 'application/json');
    res.send(rows[0]);
  });
  // Close the connection
  connection.end()
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});