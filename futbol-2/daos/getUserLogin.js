'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getLoginUser.js');
logger.level = 'debug';

const createError = require('http-errors');
const comparePass = require('../utils/crypt');
const db = require('../config/db');

const badRequestError = createError(400, 'Please introduce the correct credentials');
function postUser(body) {
  return new Promise((resolve, reject) => {
    db.getConnection((error, connection) => {
      if (error) {
        reject(createError(500, 'DB connection Error'));
        logger.error(error);
      };

      connection.query(
        `SELECT email, password FROM user WHERE email = '${body.email}'`,
        (error, results, fields) => {

          connection.release();

          if (error) {
            logger.error(error)
            throw error;
          }
          if (results[0] !== undefined) {
            comparePass(body.password, results[0].password)
              .then((data) => {
                if (data) {
                  resolve(results[0]);
                } else {
                  reject(badRequestError);
                }
              });
          }else {
            reject(badRequestError);
          }
        },
      );
    });
  });
}

module.exports = postUser;
