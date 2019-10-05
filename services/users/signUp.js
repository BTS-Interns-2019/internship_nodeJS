'use strict'

const bcrypt = require('bcrypt');
// const bcrypt = require('bcryptjs');
const log4js = require('log4js');

const logger = log4js.getLogger('Service signUp');
logger.level = 'debug';

const saltRound = 10;

//Get the DataBase operations
const userDaos = require('../../daos/userDaos.js');

/**
*Add user (signUp) Service
*Use the userDaos to add a new user to the DataBase
*@param {object} body - contain the object with the client´s request
*@return {object} return the DataBase confirmation or an error
*/

function singUp (body) {
    logger.debug('SignUp Service');

    return new Promise((resolve, reject) => {

        //password and confirm password must be equals
        //if (body.password === body.validatepassword) {
        bcrypt.hash(body.password, saltRound, (err, hash) => {
          if(err) { 
              reject(err.message)
             }
             userDaos.signUp(body, hash)
             .then((result) => {
                 resolve(result);
             })
             .catch((err) => {
                 //Error Trying to Signup
                 reject(err);
             });
        });
   // } 
   });

}

module.exports = singUp;
