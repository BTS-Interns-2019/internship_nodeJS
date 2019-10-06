'use strict'

// get the services for the dogs
const getDogs = require('./getDogs');
const addDogs = require('./addDogs');
const deleteDogs = require('./deleteDogs');

// export functions
module.exports = {
  getDogs,
  addDogs,
  deleteDogs
};