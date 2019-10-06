'use strict';

const dogDaos = require('../../daos/dogDaos.js');
const log4js = require('log4js');
const logger = log4js.getLogger('Service deleteDog.js');
logger.level = 'debug';

/**
* deleteDog service
* use the dogDaos to delete the selected dog from the database
* @return {object} the database records gotten or an error
**/
function deleteDog(body) {
  logger.debug('delete dogs service');
  return new Promise((resolve, reject) => {
    dogDaos.deleteDog(body)
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
  });
}

module.exports = deleteDog;