'use strict'

require('./loadenv');
require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
// const login = require('./daos/getUserLogin');
// const signUp = require('./daos/signUp');
var jwt = require('jsonwebtoken');
const apiApp = require('./config/api');
const config = require('./config/constants');

const app = express();
const router = express.Router();
// const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.url = req.url;
  next();
});

app.use(bodyParser.json());
app.use('/api', apiApp);

app.listen(3000, () => {
  console.log(`Server Running on port 3000`);
  console.log();
});
