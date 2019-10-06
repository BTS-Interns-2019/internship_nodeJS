'use strict'

// get data validators
const newUserValidation = require('./newUserValidation.js');
const loginValidation = require('./loginValidation.js');

module.exports = {
  newUserValidation,
  loginValidation,
};