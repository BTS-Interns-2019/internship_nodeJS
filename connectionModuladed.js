'use strict'

const express = require('express');
const connection = require('./dbConfig');

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