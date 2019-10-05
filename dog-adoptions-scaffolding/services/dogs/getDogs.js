'use strict'

const log4js = require('log4js');
const logger = log4js.getLogger('Service getDogs.js');
logger.level = 'debug';

// obtain team database operations
const dogsDaos = require('../../daos/dogsDaos');

/**
 * getDogs service
 * use the dogDaos to get the data of the dogs from the database
 * @return {object} database records
 */
function getDogs() {
  logger.debug('getDogs service');

  return new Promise((resolve, reject) => {
    dogsDaos.getDogs()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  getDogs
}