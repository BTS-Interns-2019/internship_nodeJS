
'use strict';

const createError = require('http-errors');
const signUpServices = require('../../services/users/signUp');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

/**
* getUsers resource
* use the getUsers service to get all users from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function signUp(req, res) {
  logger.debug('signUp resource');
  // get the users from the database
  return signUpServices()
  .then((userSettings) => {
    logger.debug('signed up from the signUp resource');
    res.set('Content-Type', 'application/json');
    res.send({users: userSettings});
  })
  .catch((err) => {
    res.send(err);
  });
}

module.exports = signUp