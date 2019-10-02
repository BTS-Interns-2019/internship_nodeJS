'use strict'
// Express import
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create an express app
const app = express();
const port = 5000;

function readData() {
   return new Promise ((resolve, reject) => {
    fs.readFile('./db.json', (err, data) => {
      // The file don't exist.
      if(err){
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  });
}

function writeData(res, data) {
  fs.writeFile('./db.json', JSON.stringify(data), (err) => {
    if(err) throw err
    readData().then((data) => {
      if(data === ''){
        res.set('Content-Type', 'text/plain');
        res.status(500);
        res.send("ERROR: The file db.json is empty.");
      } else {
        res.set('Content-Type', 'application/json');
        res.status(200);
        res.send(data);
      }
    }).catch((err) => {
      res.set('Content-Type', 'text/plain');
      res.status(500);
      res.send(err);
    });
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set the routes and methods to listen
app.get('/', (req, res) => {
  readData().then((data) => {
    if(data.toString() === ''){
      res.set('Content-Type', 'text/plain');
      res.status(500);
      res.send("ERROR: The file db.json is empty.");
    } else {
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send(data);
    }
  }).catch((err) => {
    res.set('Content-Type', 'text/plain');
    res.status(500);
    res.send(err);
  });
});

app.post('/', (req, res) => {
  readData().then((data) => {
    let obj = {};
    if(data.toString() !== '') {
      obj = JSON.parse(data);
      if(obj.hasOwnProperty(Object.keys(req.body)[0])) {
        res.set('Content-Type', 'text/plain');
        res.status(409);
        res.send('ERROR: The resource already exists in the API.');
      }
    }

    obj[Object.keys(req.body)[0]] = Object.values(req.body)[0];
    console.log(obj[Object.keys(req.body)[0]]);
    return obj;

  }).catch((err) => {
    res.set('Content-Type', 'text/plain');
    res.status(500);
    res.send(err);
  }).then((data) => {
    if(typeof data !== 'undefined')
      writeData(res, data);
  })
});

app.put('/', (req, res) => {
  readData().then((data) => {
    let obj = {};
    if(data.toString() !== '') {
      obj = JSON.parse(data);
      if(obj.hasOwnProperty(Object.keys(req.body)[0])) {
        obj[Object.keys(req.body)[0]] = Object.values(req.body)[0];
        return obj;
      } else {
        res.set('Content-Type', 'text/plain');
        res.status(404);
        res.send('The resource that you want edit no exist.');
      }
    }
  }).catch((err) => {
    res.set('Content-Type', 'text/plain');
    res.status(500);
    res.send(err);
  }).then((data) => {
    if(typeof data !== 'undefined')
      writeData(res, data);
  });
});

app.delete('/', (req, res) => {
  readData().then((data) => {
    let obj = {};
    if(data.toString() !== '') {
      obj = JSON.parse(data);
      if(obj.hasOwnProperty(Object.keys(req.body)[0])) {
        if(Object.values(req.body)[0]){
          delete obj[Object.keys(req.body)[0]];
        }
        return obj;

      } else {
        res.set('Content-Type', 'text/plain');
        res.status(404);
        res.send('The resource that you want delete no exist.');
      }
    }
  }).catch((err) => {
    res.set('Content-Type', 'text/plain');
    res.status(500);
    res.send(err);
  }).then((data) => {
    if(typeof data !== 'undefined')
      writeData(res, data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});