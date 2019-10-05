'use stric'

const log4js = require('log4js');
const logger = log4js.getLogger('Resource addDogs.js');
logger.level = 'debug';
const dogsServices = require('../../services/dogs/getDogs');

/**
 * getDogs resource
 * use the getDogs service to show all dogs to database
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @return {object} JSON response with success or failure
 */

function getDogs(req, res) {
  logger.debug('getDog resource');
  return dogsServices.getDogs(req.body)
    .then((result) => {
      logger.debug('sending result of get Dogs with the getDogs resource');
      res.set('Content-Type', 'application/json');
      res.status(201);
      res.send({
        status: 'success',
        message: 'Showing dogs successfully',
        data: result,
      });
    })
    .catch((err) => {
      res.send({
        status: 'failure',
        message: 'There was an error showing dogs',
        data: err,
      });
    });
}

module.exports = getDogs;
