'use stric'

require('./loadenv');
require('./config/db');

const bodyParser = require('body-parser');
const express = require('express');
const log4js = reqire('log4js');
const config = require('./config/constants');
const logger = log4.getLogger('index.js');

const app = express();
const router = express.Router();

logger.level = 'debug';
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '25MB' }));
app.use('/api', apiApp);

// access-control-allow
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers',
  `Origin, X-Requested-With, Content-Type, Accept, Authorization`);
  res.url = req.url;
  next();
});
 
app.listen(config.APP_PORT, () => {
  logger.info(`Listen on port ${config.APP_PORT} in ${config.ENV} environment`);
});