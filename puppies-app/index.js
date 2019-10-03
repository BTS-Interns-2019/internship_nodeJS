'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const newUser = require('./createUser');
const logUser = require ('./logUser.js');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
//Sign up User
app.post('/', (req, res) => {
  newUser(req.body)
  .then((success) => {
    res.set('Content-Type', 'aplication/json');
    res.send(success);
  })
  .catch((error) => {
    res.set('Content-Type', 'aplication/json');
    res.send(error);
  });
});*/

//Log user
app.post('/', (req, res) => {
  logUser(req.body)
  .then((success) => {
    res.set('Content-Type', 'application/json');
    res.send(success);
  })
  .catch((error) => {
    res.set('Content-Type', 'application/json');
    res.send(error);
  })

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});