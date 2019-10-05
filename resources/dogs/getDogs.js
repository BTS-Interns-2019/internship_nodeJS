'use strict';

const createError = require('http-errors');
<<<<<<< HEAD
const userServices = require('../../services/users/getUsers');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
=======
const dogServices = require('../../services/dogs/getDogs.js');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getDogs.js');
>>>>>>> fd55c99bc7f1da23ff2a97988c2b588ab7078cda
logger.level = 'debug';

/**
* getUsers resource
<<<<<<< HEAD
* use the getUsers service to get all users from the database
=======
* use the getDogss service to get all dogs from the database
>>>>>>> fd55c99bc7f1da23ff2a97988c2b588ab7078cda
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function getDogs(req, res) {
  logger.debug('getDogs resource');
  // get the users from the database
<<<<<<< HEAD
  return userServices()
  .then((userSettings) => {
=======
  return dogServices()
  .then((dogSettings) => {
>>>>>>> fd55c99bc7f1da23ff2a97988c2b588ab7078cda
    logger.debug('sending the users from the getDogs resource');
    res.set('Content-Type', 'application/json');
    res.send({dogs: dogSettings});
  })
  .catch((err) => {
    res.send(err);
  });
}

<<<<<<< HEAD
module.exports = getDogs;
=======
module.exports = getDogs;
>>>>>>> fd55c99bc7f1da23ff2a97988c2b588ab7078cda
