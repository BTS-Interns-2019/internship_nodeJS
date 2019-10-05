'use strict';

const createError = require('http-errors');
const dogServices = require('../../services/dogs/editDogs.js');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource editDogs.js');
logger.level = 'debug';

const dataValidator = require('../../filters/dogs/newDogValidation');
/**
* addDogs resource
* use the addDogs to get create all dogs from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case token is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function editDog(req, res) {
  logger.debug('editDogs Resource');

  const validation = dataValidator(req, res);
  if (validation === true) {
    // insert the dogs to the database
    return dogServices(req.body, req.params.id)
    .then((result) => {
      logger.debug('sending result to editting a new dog with the editDog Resource');
      res.set('content-type', 'application/json');
      res.send({
        status: 'success',
        message: 'Dog edited successfully',
        data: result,
      });
    })
    .catch((error) => {
      res.send({
        status: 'Failure',
        message: 'An error ocurred editing the dog',
        data: error,
      });
    });
  };
}

module.exports = editDog;
