const log4js = require('log4js');

const logger = log4js.getLogger('Service signUp');
logger.level = 'debug';

const dogDaos = require('../../daos/dogDaos.js');

/**
*Add a new dog (addDog) Service
*Use the userDaos to add a new sog to the DataBase
*@param {object} body - contain the object with the client´s request
*@return {object} return the DataBase confirmation or an error
*/

function addDog (body) {
    logger.debug('addDog Service');

    return new Promise((resolve, reject) => { 

             dogDaos.addDog(body)
             .then((result) => {
                 resolve(result);
             })
             .catch((err) => {
                 //Error Trying to add a new dog
                 reject(err);
             });
        });
}

module.exports = addDog;
