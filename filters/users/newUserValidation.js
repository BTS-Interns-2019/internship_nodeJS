'use strict'

const ajv = require('ajv');
const log4js = require('log4js');

const Ajv = new ajv ();
const logger = log4js.getLogger('Validate Schema SignUp');
logger.level = 'debug';

const newUserDataSchema = require ('../../validationSchemas/UserPostSchema.json');

/**
 * New user data validator middleware
 * validate the body of the signUp request according to the schema defined
 * @param {object} req - client request with the token included
 * @param {object} res - response depends if the token is invalid or if have expired
 * @param {function} next - callback to invoque the next function
 * @param {object} JSON - response with a failure
 */

 function newUserValidator (req,res) {
     logger.debug('Validate the new user data against the JSON schema defined');
     const validated = Ajv.validate(newUserDataSchema, req.body);

     if(!validated) {
         logger.error('New user data is not valid');
         res.status(400);
         res.send({
             status: 'failure',
             message: 'The SignUp data is not valid',
             data: Ajv.errors,
         });
     } else {
         return true;
     }
 }

 module.exports = newUserValidator;