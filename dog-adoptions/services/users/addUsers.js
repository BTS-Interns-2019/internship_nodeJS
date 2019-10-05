'use strict'

const bcrypt = require('bcryptjs');
const userDaos = require('../../daos/userDaos');
// const log4js = require('log4js');
// const logger = log4js.getLogger('Service getUser.js');
// logger.level = 'debug';

/**
 * addUsers service
 * use the userDaos to add a new user to the database
 * @param {object} body - body of the client's request
 * @return {object} database confirmation or error
 */

function addUsers(body) {
  return new Promise((resolve, reject) => {
    if (body.password === body.confirm_password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }

        bcrypt.hash(body.password, salt, (err, hash) => {
          if (err) {
            reject(err)
          }

          userDaos.addUsers(body, hash)
            .then((result) => {
              resolve(result)
            }).catch((err) => {
              reject(err)
            })
        });
      });
    } else {
      reject({
      error: 'Password does not match'
      });
    }
  })
};

module.exports = {
  addUsers
}
