'use strict'

const userDaos = require('../../daos/userDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service getUser.js');
const config = require('../../config/constants')
//const bcrypt = require('bcryptjs');
const bcrypt = require('bcrypt')
//const jwt = require('jwt-simple');
const jwt = require('jsonwebtoken');

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
      } else {

      bcrypt.compare(body.password, result.password)
      .then((res) => {
        if(!res) { 
          reject('ERROR: Incorrect Password.') 
        } else {
         const token = jwt.sign(body, config.TOKEN_SECRET);
         resolve(token);
        };

        
      });
    }
    })
    .catch((err) => {
      reject(err);
    });
  });
}

module.exports = logIn;