'use strict';

const Validator = require('jsonschema').Validator;
const log4js = require('log4js');

const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

const loginUserService = require('../../services/users/loginUser');
const userModel = require('../../validationSchemas/user');
/**
 * @param {Object} req body with user data from request
 * @param {Object} res response for user request with token if the user credentials are correct
 * @returns {Object} return object with user token
 */
function loginUser(req, res) {
  logger.debug('Login user');
  res.set('Content-Type', 'application/json');
  let valid = new Validator();
  const validatedlogin = valid.validate(req.body, userModel).errors;
  if (validatedlogin[0]) {
    res.set(400);
    res.send({
      status: 400,
      message: validatedlogin.map(msj => msj.stack)
    });
  } else {
    return loginUserService(req.body)
      .then((token) => {
        logger.debug('Get token successfuly');
        res.send({ 
          status: 200,
          message: 'Authorization success',
          data: { token  }
        });
      })
      .catch((err) => {
        logger.debug('Error trying to get token, wrong credentials');
        res.status(err.statusCode);
        res.send({
          status: err.statusCode,
          message: err.message,
        });
      });
  }
}

module.exports = loginUser;
