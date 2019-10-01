'use strict'

// modules
const bodyParser = require('body-parser');
const express = require('express');
const {
  readFile,
  writeFile,
  checkFile,
  deleteFromFile,
  BreakChain,
} = require('./fsPromises');

// create express app
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function setResponse(res, headers, status, data) {
  res.set(headers);
  res.status(status);
  res.send(data);
}

// set routes and methods to listen
// get
app.get('/', (req, res) => {
  readFile('./db.json')
    .then((data) => {
      setResponse(res, { 'Content-Type': 'application/json' }, 200, data);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        setResponse(res, { 'Content-Type': 'application/json' }, 404, 'File does not exist');
      } else {
        setResponse(res, { 'Content-Type': 'application/json' }, 400, err);
      }
    });
});

// post
app.post('/', (req, res) => {
  writeFile('./db.json', JSON.stringify(req.body))
    .then((data) => {
      setResponse(res, { 'Content-Type': 'application/json' }, 201, data);
    })
    .catch((err) => {
      setResponse(res, { 'Content-Type': 'application/json' }, 400, err);
    });
});

// put
app.put('/', (req, res) => {
  const path = './db.json';

  // begin to check if file exists
  checkFile(path)
    .then(() => writeFile(path, JSON.stringify(req.body)))
    .catch((err) => {
      setResponse(res, { 'Content-Type': 'appplication/json' }, 404, err);
      // throw anything just to break out of the chain
      throw new BreakChain();
    })
    .then((data) => setResponse(res, { 'Content-Type': 'application/json' }, 200, data))
    .catch((err) => setResponse(res, { 'Content-Type': 'appplication/json' }, 400, err));
});

// delete
app.delete('/', (req, res) => {
  const path = './db.json';

  // begin by checking if file exists
  checkFile(path)
    // first read the file
    .then(() => readFile(path))
    .catch((err) => {
      setResponse(res, { 'Content-Type': 'appplication/json' }, 404, err);
      // throw anything just to break out of the chain
      throw new BreakChain();
    })
    // delete the properties from the content
    .then((data) => deleteFromFile(JSON.parse(data.toString()), req.body))
    // write the modified data
    .then((data) => writeFile(path, data))
    .then((data) => setResponse(res, { 'Content-Type': 'application/json' }, 200, data))
    .catch((err) => setResponse(res, { 'Content-Type': 'appplication/json' }, 400, err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
