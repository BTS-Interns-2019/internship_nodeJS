'use stric'

require('./loadenv');
require('./config/db');

const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config/constants');
const apiApp = require('./config/api')
const port = 5000;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

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

// app.get('/', (req, res) => {
//     dogs.getDog()
//     .then((record) => {
//       res.set('Content-Type', 'application/json');
//       res.send(record)
//     });
//   });
  

app.listen(port, (req, res) => {
    console.log(`Express running in port ${port}`)
})