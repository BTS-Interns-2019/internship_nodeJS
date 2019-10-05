'use strict'

const dogsDaos = require('../../daos/dogsDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service addDogs.js');
logger.level = 'debug';

/**
 * addDogs service
 * use the dogsDaos to add a new dog to the database
 * @param {object} body - body of the client's request
 * @return {object} database confirmation or error
 */

function addDogs(body) {
  logger.debug('addDogs service');

  return new Promise((resolve, reject) => {
    dogsDaos.addDogs(body)
    .then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  addDogs
}
