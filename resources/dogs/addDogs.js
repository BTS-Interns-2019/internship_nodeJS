'use strict';

const createError = require('http-errors');
const dogServices = require('../../services/dogs');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource addDogs.js');
logger.level = 'debug';

const dataValidator = require('../../filters/dogs/newDogValidation');
/**
* addDogs resource
* use the addDogs to get create all dogs from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case token is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function addDogs(req, res) {
  logger.debug('addDogs Resource');

  const validation = dataValidator(req,res);
    if (validation === true) {

  // insert the dogs to the database
  return dogServices.addDogs(req.body)
  .then((result) => {
    logger.debug('sending result to adding a new dog with the addDog Resource');
            res.set('content-type', 'application/json');
            res.send({
            status: 'success',
            message: 'Dog added successfully',
            data: result,
    });
  })
  .catch((error) => {
    res.send({
        status: 'Failure',
        message: 'An error ocurred adding the new dog',
        data: error,
        });
  });
};
}

module.exports = addDogs;
