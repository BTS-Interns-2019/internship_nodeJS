'use strict'

// get the services for the users
const addDogs = require('./addDogs.js');
const getDogs = require('./getDogs.js');
const deleteDog = require('./deleteDog.js')
// export functions
module.exports = {
  addDogs,
  getDogs,
  deleteDog,
};