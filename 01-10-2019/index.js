'use strict'
// Express import
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create an express app
const app = express();
const port = 5000;

// Set the routes and methods to listen
app.get('/', (req, res) => {
  fs.readFile('db.json', (err, data) => {

    // The file don't exist.
    if(err){
      res.set('Content-Type', 'text/plain');
      res.status(500);
      res.send(err.message);
    } else {

      // The file is empty.
      if(data.toString() === '') {
        res.set('Content-Type', 'text/plain');
        res.status(500);
        res.send("ERROR: The file db.json is empty.");
      } else {

        // The file has content.
        res.set('Content-Type', 'application/json');
        res.status(200);
        res.send(data);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});