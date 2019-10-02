'use strict'
// Express import
let express = require('express');
let student = require('./studentDB');
let bodyParser = require('body-parser');

// Create an express app
let app = express();
let port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Set the routes and methods to listen
app.get('/', (req, res) => {
  // Get the student
  student.getFirstStudent()
  .then((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record)
  });
});

app.post('/', (req, res) => {

  student.postStudent(req.body)
  .then(() => {
    student.getFirstStudent()
    .then((record) => {
      res.set('Content-Type', 'application/json');
      res.send(record)
      console.log(record)
    })
  })
})


app.listen(port, () => {
  console.log(`Express running in port ${port}`)
});