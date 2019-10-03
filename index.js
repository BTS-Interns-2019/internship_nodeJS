'use strict'
// Express import
const express = require('express');
const user = require('./userDB');

// Create an express app
const app = express()
const port = 5000

// Set the routes and methods to listen
app.get('/', (req, res) => {
  // Get the user
  user()
  .then((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});