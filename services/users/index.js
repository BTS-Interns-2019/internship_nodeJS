'use strict'

// get the services for the users
const signUp = require('./signUp.js');
const logIn = require('./logIn.js');

// export functions
module.exports = {
  signUp,
  logIn,
};