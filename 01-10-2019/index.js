'use strict'
// Express import
const express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');

// create an express app
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  fs.stat('./db.json', (err, data) => {
    if (err) {
      res.set('Content-Type', 'text/plain');
      res.status(404).send('File db.json does not exist');
    } else { 
      fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
          res.set('Content-Type', 'text/plain');
          res.status(400).send('Unexpected error');
        } else {
          res.set('Content-Type', 'application/json').send(data);
        }
      })
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})