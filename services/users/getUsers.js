'use strict';

const userDaos = require('../../daos/userDaos');
const log4js = require('log4js');
const logger = log4js.getLogger('Service getUser.js');
logger.level = 'debug';

/**
* getUsers service
* use the userDaos to get all users from the database
* @return {object} the database records gotten or an error
**/
async function getUsers() {
  logger.debug('get users service');
  return await userDaos.getUsers();
}

module.exports = getUsers;
