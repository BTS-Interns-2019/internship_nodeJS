'use strict'

const userServices = require('../../services/users');
const log4js = require('log4js');

const logger = log4js.getLogger('Resource signUp.js');
logger.level = 'debug';


const dataValidator = require('../../filters/users/newUserValidation');

/**
* Create a user (signUp) resource
* use the signUp service to get add a new user to the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case token is invalid or expired
* @return {object} a JSON response with success or failure
**/

function signUp(req, res) {
    logger.debug('signUp Resource');

   const validation =  dataValidator(req,res);
            if (validation === true) { 

    //add a new user to the database
    return userServices.signUp(req.body)
        .then((result) => {
            logger.debug('sending result to adding a new user with the signUp Resource');
            res.set('content-type', 'application/json');
            res.send({
                status: 'success',
                message: 'User added successfully',
                data: result,
            });
        })
        .catch((error) => {
            res.send({
                status: 'Failure',
                message: 'An error ocurred adding the new user',
                data: error,
            });
        });
    };
}

module.exports = signUp;