'use strict';

const createError = require('http-errors');
const userServices = require('../../services/users');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource logIn.js');
logger.level = 'debug';

/**
* getUsers resource
* use the getUsers service to get all users from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function logIn(req, res) {
  logger.debug('logIn resource');
  return userServices.logIn(req.body)
  .then((data) => {
    logger.debug('sending the users from the logIn resource');
    res.set('Content-Type', 'application/json');
    res.send({logIn: data});
  })
  .catch((error) => {
    res.send(error);
  });
}

module.exports = logIn;
