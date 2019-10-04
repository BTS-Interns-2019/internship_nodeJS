'use strict'

//modules
const Ajv = require('ajv');
const log4js = require('log4js');

const ajv = new Ajv();
const logger = log4js.getLogger('Schema Login');
logger.level = 'debug';

const updateTeamDataSchema = require('../../validationSchemas/updateTeamDataValidatorSchema');

function updateTeamDataValidator(req, res, next){
    logger.debug('validate update team data against JSON schema');
    const valid = ajv.validate(updateTeamDataSchema, req.body);

    if(!valid){
        logger.error('update team data not valid');
        res.status(400);
        res.send({
            status: 'failure',
            message: 'The Update team data is not valid.',
            data: ajv.errors,
        });
    } else {
        //if data is valid
        next();
    }
}

module.exports = updateTeamDataValidator;