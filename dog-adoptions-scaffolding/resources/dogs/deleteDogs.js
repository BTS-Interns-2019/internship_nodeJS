'use stric'

const log4js = require('log4js');
const logger = log4js.getLogger('Resource deleteDogs.js');
logger.level = 'debug';
const dogsServices = require('../../services/dogs/deleteDogs');

/**
 * delete resource
 * use the deleteDogs service to delete dogs to database
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @return {object} JSON response with success or failure
 */

function deleteDogs(req, res) {
  logger.debug('deleteDogs resource');
  // delete dogs to database
  return dogsServices.deleteDogs(req.params.id)
    .then((result) => {
      logger.debug('sending result of deleting dogs with the deleteDogs resource');
      res.set('Content-Type', 'application/json');
      res.status(200);
      res.send({
        status: 'success',
        message: 'Dog deleted successfully',
        data: result,
      });
    })
    .catch((err) => {
      res.send({
        status: 'failure',
        message: 'There was an error deleting dog data',
        data: err,
      });
    });
}

module.exports = deleteDogs;
