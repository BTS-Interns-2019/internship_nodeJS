'use strict'

const ajv = require('ajv');
const log4js = require('log4js');

const Ajv = new ajv ();
const logger = log4js.getLogger('Validate Schema to add a New dog');
logger.level = 'debug';

const newDogDataSchema = require ('../../validationSchemas/dogs/addDogSchema.json');

/**
 * New user data validator
 * validate the body of the addDog request according to the schema defined
 * @param {object} req - client request
 * @param {object} res - response depends if the schema is valid or not
 * @param {object} JSON - response with a failure
 */

 function newDataValidator (req, res, next) {
     logger.debug('Validate the new dog data against the JSON schema defined');
     const validated = Ajv.validate(newDogDataSchema, req.body);

     if(!validated) {
         logger.error('New dog data is not valid');
         res.status(400);
         res.send({
             status: 'failure',
             message: 'The AddDog data is not valid',
             data: Ajv.errors,
         });
     } else {
         next();
     }
 }

 module.exports = newDataValidator;