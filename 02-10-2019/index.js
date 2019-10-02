'use strict'
// Express import
const express = require('express');
const bodyParser = require('body-parser');
const dog = require('./dogDB');
const create = require('./createDog');

//
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  dog()
  .then((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record);
  });
});

app.post('/', (req, res) => {
  create(req.body)
  .then((record) => {
    console.log(record);
    res.set('Content-Type', 'application/json');
    res.send(record);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});