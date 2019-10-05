"use strict";

const apiApp = require('express')();

// define the module from the routers folder
const users = require('../routers/users');
const dogs = require('../routers/dogs')

// define which router will be used for an specific route
apiApp.use('/auth', users);
apiApp.use('/dogs', dogs)

module.exports = apiApp;