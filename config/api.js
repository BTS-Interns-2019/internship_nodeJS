'use strict'

const express = require('express');

const api = express();

//Define module from folder routers
const users = require('../routers/Users.js');
const dogs = require('../routers/Dogs.js');

//Define routers
api.use('/user', users);
api.use('/dog', dogs);

module.exports = api;