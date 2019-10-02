'use strict';
const express = require('express');
// Help us to maniulate the request's body
var bodyParser = require('body-parser');
const writeFile = require('./writeFile');
const getContent = require('./getContent');
//Create app
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set the routes nd methods to listen
app.get('/', (req, res) => {
  console.log(req.body);
  getContent('db.json')
    .then((data) => {
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      if (err === 404) {
        res.set('Content-Type', 'application/json');
        res.status(404);
        res.send('File not found');
      } else {
        res.set('Content-Type', 'application/json');
        res.status(400);
        res.send(err);
      }
    });
});

app.post('/', (req, res) => {
  let isEmpty = false;
  console.log(req.body);
  const bodyString = JSON.stringify(req.body)
  getContent('db.json')
    .then((data) => {
      //If file is empty insert all the data in the file
      if (data === 'Empty file') {
        writeFile('db.json', data)
          .then((val) => {
            res.set('Content-Type', 'application/json');
            res.status(201);
            res.send(val);
          })
          .catch((err) => {
            res.set('Content-Type', 'application/json');
            res.status(400);
            res.send(err);
          });
      }
      // file exists, check if propeties too, and modifie or append new ones
      const prevData = JSON.parse(data);
      const keys = Object.keys(req.body);
      for (const key in prevData) {
        if (prevData.hasOwnProperty(keys)) {
          prevData[keys] = Object.values(req.body)[0];
        }

      }
      prevData[keys] = Object.values(req.body)[0];

      writeFile('db.json', JSON.stringify(prevData))
        .then((cont) => {
          console.log(cont);
          res.set('Content-Type', 'application/json');
          res.status(201);
          res.send(cont);
        })
        .catch((err) => {
          res.set('Content-Type', 'application/json');
          res.status(500);
          res.send(err);
        });

    })
    .catch((err) => {
      // if file does not exist, create one
      console.log(err);
      if (err === 404) {
        writeFile('db.json', bodyString)
          .then((content) => {
            console.log(content);

            res.set('Content-Type', 'application/json');
            res.status(201);
            res.send(content);
          })
          .catch((err) => {
            res.set('Content-Type', 'application/json');
            res.status(500);
            res.send(err);
          });
      }
      reject(err);
    });



});

app.put('/', (req, res) => {
  let isEmpty = false;
  console.log(req.body);
  //read the file
  getContent('db.json')
    .then((data) => {
      const prevData = JSON.parse(data);
      const keys = Object.keys(req.body);
      for (const key in prevData) {
        if (prevData.hasOwnProperty(keys)) {
          prevData[keys] = Object.values(req.body)[0];
        } else {
          res.status(404);
          res.send('Property undefined');
        }
      }
      // else check the properties, to update
      writeFile('db.json', JSON.stringify(prevData))
        .then((cont) => {
          console.log(cont);
          res.set('Content-Type', 'application/json');
          res.status(200);
          res.send(cont);
        })
        .catch((err) => {
          res.set('Content-Type', 'application/json');
          res.status(400);
          res.send(err);
        });

    })
    .catch((err) => {
      console.log(err);
      if (err === 404) {
        res.set('Content-Type', 'application/json');
        res.status(404);
        res.send('File does not exists');
      }
      res.set('Content-Type', 'application/json');
      res.status(400);
      res.send(err);
    });
});

app.delete('/', (req, res) => {
  console.log(req.body);
  getContent('db.json')
    .then((data) => {

      const prevData = JSON.parse(data);
      const keys = Object.keys(req.body);
      for (const key in prevData) {
        if (prevData.hasOwnProperty(keys)) {
          if (Object.values(req.body)[0] === true) {
            delete prevData[keys];
          }
        }
      }

      writeFile('db.json', JSON.stringify(prevData))
        .then((cont) => {
          console.log(cont);
          res.set('Content-Type', 'application/json');
          res.status(200);
          res.send(cont);

        })
        .catch((err) => {
          res.set('Content-Type', 'application/json');
          res.status(400);
          res.send(err);
        });

    })
    .catch((err) => {
      if (err === 404) {
        res.set('Content-Type', 'application/json');
        res.status(404);
        res.send('File does not exists');
      }
      res.set('Content-Type', 'application/json');
      res.status(400);
      res.send(err);
    });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
