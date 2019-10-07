
'use strict';

const signUpServices = require('../../services/users/signUp');
const userModel = require('../../validationSchemas/user');

const Validator = require('jsonschema').Validator;
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

/**
* getUsers resource
* use the getUsers service to get all users from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {Object} a JSON response with database records or an error response
**/
function signUp(req, res) {
  logger.debug('signUp resource');
  res.set('Content-Type', 'application/json');
  let valid = new Validator();
  const validated = valid.validate(req.body, userModel).errors;
  console.log(validated);
  // Validates the reques body before send to the DB
  if (validated[0]) {
    res.set(400);
    res.send({
      status: 400,
      message: validated.map(msj => msj.stack)
    });
  } else {
    // get the users from the database
    return signUpServices(req.body)
      .then((userSettings) => {
        logger.debug('signed up from the signUp resource');
        res.status(201)
        res.send({
          status: 201,
          message: 'User created succesfully',
          data: { users: userSettings },
        });
      })
      .catch((err) => {
        logger.debug('Error trying to register user')
        res.status(err.statusCode);
        res.send({
          status: err.statusCode,
          message: err.message,
        });
      });
  }

}

module.exports = signUp