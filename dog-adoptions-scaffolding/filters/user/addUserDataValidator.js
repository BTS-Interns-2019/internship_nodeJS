'use strict'

// modules
const Ajv = require('ajv');
const log4js = require('log4js');

const ajv = new Ajv();
const logger = log4js.getLogger('Schema add user');
logger.level = 'debug';

// get schema
const newUserDataSchema = require('../../validationSchemas/addUserDataValidatorSchema');

/**
 * addUserDataValidator middleware
 * validate the body of the request goes according to the schema
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @param {function} next - callback to the next middleware
 * @return {object} JSON response with failure
 */
function addUserDataValidator(req, res, next) {
  logger.debug('validate add user data against JSON schema');
  const valid = ajv.validate(newUserDataSchema, req.body);

  if (!valid) {
    logger.error('add user data not valid');
    res.status(400);
    res.send({
      status: 'failure',
      message: 'The data is not valid.',
      data: ajv.errors,
    });
  } else {
    // if data is valid, proceed
    next();
  }
}

module.exports = addUserDataValidator;