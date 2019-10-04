'use strict'

// modules
const ajv = require('ajv');

// get schema
const newUserDataSchema = require('../../validationSchemas/newUserDataValidatorSchema');

// JSON schema validator middlware
function newUserDataValidator(req, res, next) {
  const valid = ajv.validate(newUserDataSchema, JSON.stringify(req.body));

  if (!valid) {
    res.status(400);
    res.send({
      status: 'failure',
      message: 'The input data is not valid.',
      data: ajv.errors,
    });
  }

  // if data is valid, proceed
  next();
}

module.exports = newUserDataValidator;
