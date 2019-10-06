'use strict';

const jwt = require('jsonwebtoken')
//const jwt = require('jwt-simple');
const config = require('../config/constants');
const createError = require('http-errors');
const log4js = require('log4js');

const logger = log4js.getLogger('Filter token validator.js');
logger.level = 'debug';

/**
* tokenValidator filter
* get token from header(sesion token)
* filter to validate the token
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @param {Object} next - method to continue
**/
function tokenValidator(req, res, next) {
  logger.debug('token validator');
  let token = req.header('Authorization') || req.header('x-access-token');
  console.log(token)
  if(!token) {
     logger.fatal('token does not exist');
        res.status(401);
        res.send({
          status: 'failure',
          message: 'Authorization token forbidden',
          data: 'Forbidden'
        }); 
      } //if (token.startsWith('Bearer ')) {
              token = token.slice(7, token.length);
             
           console.log(token)
  if (token) {
    logger.debug('Verifying token');
    jwt.verify(token, config.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        logger.fatal('Provided token did not match');
        res.status(401);
        res.send({
          status: 'failure',
          message: 'Authorization token does not match',
          data: err
        }); 
      };
      logger.debug('Token valid');
      req.decoded = decoded;
      next ();
    });
  } else {
    logger.fatal('Token was not provided');
    res.status(401);
    res.send({
      status: 'failure',
      message: 'Authorization token was not provided',
      data: {}
    });
  };
//};
};

module.exports = tokenValidator;
