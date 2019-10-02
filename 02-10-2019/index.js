'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const { getActor, addActor } = require('./actor_db');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // get first actor
  getActor()
    .then((data) => {
      res.set('Content-Type', 'application/json');
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.post('/', (req, res) => {
  // add new actor
  addActor(req.body)
    .then((newId) => {
      res.set('Content-Type', 'application/json');
      res.send({
        newActorId: newId,
      });
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => console.log(`Node server on port ${port}`));
