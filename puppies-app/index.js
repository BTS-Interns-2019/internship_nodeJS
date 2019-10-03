'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const newUser = require('./createUser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  newUser(req.body)
  .then((success) => {
    res.set('Content-Type', 'text/plain');
    res.send(success);
  })
  .catch((error) => {
    res.set('Content-Type', 'text/plain');
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});