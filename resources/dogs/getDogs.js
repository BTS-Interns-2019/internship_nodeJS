'use strict';

const createError = require('http-errors');
const dogServices = require('../../services/dogs');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getDogs.js');
logger.level = 'debug';

/**
* getUsers resource
* use the getDogss service to get all dogs from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function getDogs(req, res) {
  logger.debug('getDogs resource');
  // get the users from the database
  return dogServices.getDogs()
  .then((results) => {
    logger.debug('sending the dogs from the getDogs resource');
    res.set('Content-Type', 'application/json');
    res.send({
           status: 'success',
            message: 'Get dogs successfully',
            data: results,
    });
  })
  .catch((err) => {
    res.send(err);
  });
}

module.exports = getDogs;
