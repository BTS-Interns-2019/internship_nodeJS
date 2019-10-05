'use strict';

const dogDaos = require('../../daos/dogDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service getDogs.js');
logger.level = 'debug';

/**
* getUsers service
* use the userDaos to get all users from the database
* @return {object} the database records gotten or an error
**/
function getDogs() {
  logger.debug('get dogs service');
  return new Promise((resolve, reject) => {
    dogDaos.getDogs()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
  });
}

module.exports = getDogs;