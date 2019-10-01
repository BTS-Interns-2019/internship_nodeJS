'use strict'

// modules
const bodyParser = require('body-parser');
const express = require('express');
const readFile = require('./fsPromises');

// create express app
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function setResponse(res, headers, status, data) {
  res.set(headers);
  res.status(status);
  res.send(data);
}

// set routes and methods to listen
app.get('/', (req, res) => {
  readFile('./db.json')
    .then((data) => {
      setResponse(res, { 'Content-Type': 'application/json' }, 200, data);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        setResponse(res, { 'Content-Type': 'application/json' }, 404, 'File does not exist');
      } else {
        setResponse(res, { 'Content-Type': 'application/json' }, 400, err);
      }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
