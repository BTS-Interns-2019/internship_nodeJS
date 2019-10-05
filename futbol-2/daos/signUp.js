'use strict'

const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';
const db = require('../config/db');

const badRequestError = createError(400, 'Please introduce the correct Inputs');

/**
 *
 * @param {user} user object
 * @return {Promise} promise query
 */
function addUser(user) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        logger.error(err);
        reject('DB connection error');
      }
      bcrypt
        .hash(user.password, 5)
        .then((res) => {
          user.password = res;
          connection.query(
            `INSERT INTO user (email, password) values ('${user.email}','${user.password}')`,
            (error, results, fields) => {
              connection.release();
              if (error) {
                logger.error(error)
                throw error;
              }
              resolve('User created correctly');
            },
          );
        })
        .catch((err) => {
          logger.error(err);
          reject(badRequestError);
        });
    });
  });
}

module.exports = addUser;
