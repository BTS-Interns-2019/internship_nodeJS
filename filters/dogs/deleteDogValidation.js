'use strict'

const ajv = require('ajv');
const log4js = require('log4js');

const Ajv = new ajv ();
const logger = log4js.getLogger('Validate Schema to delete a dog');
logger.level = 'debug';

const deleteDogDataSchema = require ('../../validationSchemas/dogs/deleteDogSchema.json');

/**
 * New user data validator
 * validate the body of the addDog request according to the schema defined
 * @param {object} req - client request
 * @param {object} res - response depends if the schema is valid or not
 * @param {object} JSON - response with a failure
 */

 function deleteDogDataValidator (req,res) {
     logger.debug('Validate the delete dog data against the JSON schema defined');
     const validated = Ajv.validate(deleteDogDataSchema, req.body);

     if(!validated) {
         logger.error('Delete dog data is not valid');
         res.status(400);
         res.send({
             status: 'failure',
             message: 'The deleteDog data is not valid',
             data: Ajv.errors,
         });
     } else {
         return true;
     }
 }

 module.exports = deleteDogDataValidator;