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
    .then((result) => {
      logger.debug('sending the users from the logIn resource');
      res.set('Content-Type', 'application/json');
      res.send({
        status: 'success',
        message: 'User logged in successfully',
        data: {
          token: result
        }
        });
    })
    .catch((error) => {
      res.send({
        status: 'failure',
        message: 'Error while try to log in',
        data: error
      });
    });

}

module.exports = logIn;
