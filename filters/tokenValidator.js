'use strict'

const jwt = require('jwt-simple');
const config = require('../config/constants');
const createError = require('http-errors');
const logger = require('log4js');

// set logger level
logger.level = 'debug';

/**
 * tokenValidator filter
 * get token from header (session token)
 * filter to validate the token
 * @param {object} req - client request with the token
 * @param {object} res - response in case token is invalid or expired
 * @param {object} next - method to continue to next middleware
 */
function tokenValidator(req, res, next) {
  logger.debug('token validator');
}

module.exports = tokenValidator;
