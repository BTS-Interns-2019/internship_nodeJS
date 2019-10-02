'use strict'
// Express import
const express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');

// create an express app
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/get', (req, res) => {
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
          if (data.length == 0) {
            res.set('Content-Type', 'text/plain')
            res.send('db.js file is empty')
          } else {
            res.set('Content-Type', 'application/json').send(data);
          }
        }
      })
    }
  })
});

app.post('/post', (req, res) => {
  fs.writeFile('./db.json', JSON.stringify(req.body), (err, data) => {
    if (err) {
      res.set('Content-Type', 'application/json');
      res.status(400).send('Unexpected error');
    } else {
      res.set('Content-Type', 'application/json');
      res.status(201).send(req.body);
    }
  })
})

app.put('/put', (req, res) => {
  fs.stat('./db.json', (err, data) => {
    if (err) {
      res.set('Content-Type', 'text/plain');
      res.status(404).send('File db.json does not exist');
    } else { 
      fs.writeFile('./db.json', JSON.stringify(req.body), (err, data) => {
        if (err) {
          res.set('Content-Type', 'application/json');
          res.status(400).send('Unexpected error');
        } else {
          res.set('Content-Type', 'application/json');
          res.status(201).send(req.body);
        }
      })
    }
  })
});

app.delete('/delete', (req, res) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File doesn´t exist');
    }
    data = JSON.parse(data);
    if (Object.values(data).length < 0) {  
      res.status(404).send('The property does not exist on db.json');
    } else {
      if (data.hasOwnProperty(Object.keys(req.body)) && Object.values(req.body)[0] === 'true') {
        delete data[Object.keys(req.body)];
    };
    fs.writeFile('./db.json', JSON.stringify(data), (err) => {
        if (err) {
          res.status(400).send('Error on write file');
        } else {
          res.set('content-type', 'application/json').status(200).send(data);
        }
      });
    };
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})