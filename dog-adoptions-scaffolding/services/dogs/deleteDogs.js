'use strict'

const dogsDaos = require('../../daos/dogsDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service deleteDogs.js');
logger.level = 'debug';

/**
 * addDogs service
 * use the dogsDaos to add a new dog to the database
 * @param {object} body - body of the client's request
 * @return {object} database confirmation or error
 */

function deleteDogs(idDog) {
  logger.debug('deleteDogs service');

  return new Promise((resolve, reject) => {
    dogsDaos.deleteDogs(idDog)
    .then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  deleteDogs
}
