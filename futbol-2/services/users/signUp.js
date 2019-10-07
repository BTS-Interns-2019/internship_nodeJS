'use strict';
  
const log4js = require('log4js');

const logger = log4js.getLogger('Resource signUp.js');
logger.level = 'debug';
const addUser= require('../../daos/signUp');

/**
 * @return {Promise} promise del signUp
 */
function signUp(body) {
  return new Promise((resolve, reject) => {
    addUser(body)
      .then((result) => {
        console.log(body);
        logger.debug('Getting user validation form DB');
        resolve(result);
      })
      .catch((err) => {
        logger.debug('Sending messager for invalid user data from DB');
        reject(err);
      });
  });
}
  
module.exports = signUp;