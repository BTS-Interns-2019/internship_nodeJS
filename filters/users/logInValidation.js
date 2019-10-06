'use strict'

const ajv = require('ajv');
const log4js = require('log4js');

const Ajv = new ajv ();
const logger = log4js.getLogger('Validate Schema SignUp');
logger.level = 'debug';

const logInDataSchema = require ('../../validationSchemas/users/UserLoginSchema.json');

/**
 * New user data validator
 * validate the body of the signUp request according to the schema defined
 * @param {object} req - client request with the token included
 * @param {object} res - response depends if the schema is valid or not
 * @param {object} JSON - response with a failure
 */
function logInValidator (req, res, next) {
  logger.debug('Validate the new user data against the JSON schema defined');
  const validated = Ajv.validate(logInDataSchema, req.body);

  if(!validated) {
    logger.error('Log In data is not valid');
    res.status(400);
    res.send({
    status: 'failure',
      message: 'The LogIn data is not valid',
      data: Ajv.errors,
    });
  } else {
    next();
  }
}

module.exports = logInValidator;