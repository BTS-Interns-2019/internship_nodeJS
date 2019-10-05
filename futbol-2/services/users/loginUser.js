'use strict'
const log4js = require('log4js');

const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

const login = require('../../daos/getUserLogin');
const returnToken = require('../../filters/tokenValidator');

function loginUser(body) {
    
  return new Promise((resolve, reject) => {
    login(body)
      .then((data) => {
        logger.debug('Waiting for user validation');
        resolve(returnToken(data));
      })
      .catch((err) => {
        logger.debug('Sending message for invalid user data');
        reject(err);
      },
      );
  });
}

module.exports = loginUser;
