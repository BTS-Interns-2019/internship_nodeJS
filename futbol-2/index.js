'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';
const apiApp = require('./config/api');
const config = require('./config/constants');

const app = express();
const router = express.Router();
const port = 3000;

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
app.listen(port, () => {
logger.info(`Server Running on port ${port}`);
});
