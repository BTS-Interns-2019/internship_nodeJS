'use strict'

const jwt = require("jsonwebtoken");
const config = require("../config/constants");


/** 
 * @param {Object} req - client request that contains token
 * @param {Object} res - client response in case toke is invalid or expired
 * @param {Object} next - method to continue
*/
function tokenValidator(user) {
  const tokenData = Object.assign({}, user);
  return new Promise((resolve , reject) => {
    const token = jwt.sign(tokenData, config.TOKEN_SECRET, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    resolve(token);
  });
  //   logger.debug('token validator');
}

/**
 * @param {string} token recieves a token to be validated
 * @returns {Promise} Return true if token is valid or the error if not 
 */
function validateToken(token) {
  const toValidate = token.authorization.split(' ')[1]; 
  return new Promise((resolve, reject) => {
    jwt.verify(toValidate, config.TOKEN_SECRET, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
  });
  }) 
}

module.exports = { tokenValidator, validateToken };
