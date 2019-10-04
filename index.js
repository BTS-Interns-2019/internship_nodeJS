'use strict'
<<<<<<< HEAD
const http = require ('http');
const fs = require('fs');

//Create an instance of the http server to handle HTTP requests
let app = http.createServer ((req, res) => {

    fs.readFile('./example.txt', 'utf8' , (err, data) => {
        if(err){
            throw Error;
        }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
    });
   

});

//start the server on port 3000
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 3000');
=======

require('./loadenv');
require('./config/db');

const bodyParser = require('body-parser');
const express = require('express');
const log4js = require('log4js');
const apiApp = require('./config/api.js');
const config = require('./config/constants');
const logger = log4js.getLogger('index.js');

const app = express();
const router = express.Router();

logger.level = 'debug';
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));

// access-control-allow
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers',
  `Origin, X-Requested-With, Content-Type, Accept, Authorization`);
  res.url = req.url;
  next();
});

app.use(bodyParser.json({ limit: '25MB' }));
app.use('/api', apiApp);

app.listen(config.APP_PORT, () => {
  logger.info(`Listen on port ${config.APP_PORT} in ${config.ENV} environment`);
});
>>>>>>> ebce5e2a4ea8c898737914fe1be81204ec5ce204
