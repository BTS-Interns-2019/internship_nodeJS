const jwt = require('jwt-simple');
const config = require('../config/constants');
const createError = require('http-errors');
const logger = require('log4js');

// * @param {Object} req - client request that contains token
// * @param {Object} res - client response in case toke is invalid or expired
// * @param {Object} next - method to continue

function tokenValidator(req, res, next) {
  logger.debug('token validator');
}

module.exports = tokenValidator;


