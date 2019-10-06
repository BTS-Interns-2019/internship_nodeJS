'use strict'

// get data validators
const newDogValidation = require('./newDogValidation.js');
const deleteDogValidation = require('./deleteDogValidation.js');

module.exports = {
  newDogValidation,
  deleteDogValidation,
};