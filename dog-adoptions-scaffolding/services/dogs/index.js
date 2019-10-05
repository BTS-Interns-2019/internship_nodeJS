'use strict'

// get the services for the dogs
const getDogs = require('./getDogs');
const addDogs = require('./addDogs');

// export functions
module.exports = {
  getDogs,
  addDogs
};