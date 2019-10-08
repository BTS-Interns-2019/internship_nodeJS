'use strict'
const log4js = require('log4js');

const logger = log4js.getLogger('Resource loginUser.js');
logger.level = 'debug';

const login = require('../../daos/getUserLogin');
const { tokenValidator }= require('../../filters/tokenValidator');

function loginUser(body) {
    
  return new Promise((resolve, reject) => {
    login(body)
      .then((data) => {
        logger.debug('Waiting for user validation');
        resolve(tokenValidator(data));
      })
      .catch((err) => {
        logger.debug('Sending message for invalid user data');
        reject(err);
      },
      );
  });
}

module.exports = loginUser;
