'use strict';

const dogDaos = require('../../daos/userDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service getDog.js');
logger.level = 'debug';

/**
* addUsers service
* use the userDaos to add users to the database
* @return {object} the user record added or an error
**/

function getDog() {
  logger.debug('add users service');
  return new Promise((req, res) => {
    dogs.getDog()
    .then((record) => {
      res.set('Content-Type', 'application/json');
      res.send(record)
    });
  })
}

module.exports = getDog;