const log4js = require('log4js');

const logger = log4js.getLogger('Service signUp');
logger.level = 'debug';

const dogDaos = require('../../daos/dogDaos.js');

/**
*Edit a dog (editDog) Service
*Use the userDaos to edit a dog to the DataBase
*@param {object} body - contain the object with the client´s request
*@return {object} return the DataBase confirmation or an error
*/

function editDog (body, id) {
    logger.debug('editDog Service');

    return new Promise((resolve, reject) => { 

      dogDaos.editDog(body, id)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        //Error Trying to edit a dog
        reject(err);
      });
    });
}

module.exports = editDog;