"use strict";

const apiApp = require('express')();

// define the module from the routers folder
const users = require('../routers/users');

// define which router will be used for an specific route
apiApp.use('/user', users);

module.exports = apiApp;