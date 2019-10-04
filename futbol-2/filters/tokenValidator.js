const jwt = require("jwt-simple");
const config = require("../config/constants");
const createError = require("http-errors");
const logger = require("log4js");

// * @param {Object} req - client request that contains token
// * @param {Object} res - client response in case toke is invalid or expired
// * @param {Object} next - method to continue

function tokenValidator(bpassword, res, next) {
  return compare(bpassword, results[0].password)
    .then(data => {
      var tokenData = body;

      var token = jwt.sign(tokenData, "Secret Password", {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
      });

      resolve(token);
    })
    .catch(data => reject(bpassword));

  //   logger.debug('token validator');
}

module.exports = tokenValidator;
