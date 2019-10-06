'use strict'

// modules
const Ajv = require('ajv');
const log4js = require('log4js');

const ajv = new Ajv();
const logger = log4js.getLogger('Schema add dogs');
logger.level = 'debug';

// get schema
const dogsDataValidator = require('../../validationSchemas/dogsDataValidatorSchema');

/**
 * addDogDataValidator middleware
 * validate the body of the request goes according to the schema
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @param {function} next - callback to the next middleware
 * @return {object} JSON response with failure
 */
function dogsDataValidator(req, res, next) {
  logger.debug('validate dogs data against JSON schema');
  const valid = ajv.validate(dogsDataValidator, req.body);

  if (!valid) {
    logger.error('dog data not valid');
    res.status(400);
    res.send({
      status: 'failure',
      message: 'The dog data is not valid.',
      data: ajv.errors,
    });
  } else {
    // if data is valid, proceed
    next();
  }
}

module.exports = dogsDataValidator;