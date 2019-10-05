'use stric'

const log4js = require('log4js');
const logger = log4js.getLogger('Resource addDogs.js');
logger.level = 'debug';
const dogsServices = require('../../services/dogs/addDogs');

/**
 * addDogs resource
 * use the addDogs service to add dogs to database
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @return {object} JSON response with success or failure
 */

function addDogs(req, res) {
  logger.debug('addDogs resource');
  // add dogs to database
  return dogsServices.addDogs(req.body)
    .then((result) => {
      logger.debug('sending result of adding dogs with the addDog resource');
      res.set('Content-Type', 'application/json');
      res.status(201);
      res.send({
        status: 'success',
        message: 'Dog data saved successfully',
        data: result,
      });
    })
    .catch((err) => {
      res.send({
        status: 'failure',
        message: 'There was an error saving dog data',
        data: err,
      });
    });
}

module.exports = addDogs;
