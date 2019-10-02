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
  })
  .catch((err) => {
    res.set('Content-Type', 'text/plain');
    res.send(err);
  });
});

app.post('/', (req, res) => {
  create(req.body)
  .then(() => {
    dog()
    .then((record) => {
      res.set('Content-Type', 'application/json');
      res.send(record);
    })
    .catch((err) => {
      res.set('Content-Type', 'text/plain');
      res.send(err);
    });
  }).catch((error) => {
    res.set('Content-Type', 'text/plain');
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});