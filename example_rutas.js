'use strict'

const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  console.log(req.params);
});

app.listen(5000, () => {
  console.log('Listen on port 5000.');
});