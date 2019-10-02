'use strict'
// Express import
let express = require('express');
let film = require('./filmDB');

// Create an express app
let app = express();
let port = 5000;

// Set the routes and methods to listen
app.get('/', (req, res) => {
  // Get the film
  film.getFirstFilm()
  .then((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record)
  });
});

app.post('/films', request.body, (request, response) => {

  film.postFilm()
  .then((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record)
  })
});


app.listen(port, () => {
  console.log(`Express running in port ${port}`)
});