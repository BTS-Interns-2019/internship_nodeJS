'use strict'

const userDaos = require('../../daos/userDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service getUser.js');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

logger.level = 'debug';

/**
* getUsers service
* use the userDaos to get all users from the database
* @return {object} the database records gotten or an error
**/
function logIn(body) {
  logger.debug('log in service');
  return new Promise((resolve, reject) => {

    userDaos.logIn(body.email)
    .then((result) => {
      if(result === ''){
        reject('ERROR: The user no exist.');
      }

      bcrypt.compare(body.email, result.password)
      .then((res) => {
        if(!res) { reject('ERROR: Incorrect Password.') }

        const token = jwt.encode(body.password, 'secret');
        resolve(token);
      });
    })
    .catch((err) => {
      
    });
  });
}

module.exports = logIn;