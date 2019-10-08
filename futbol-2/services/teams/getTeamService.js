'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getTeamService.js');
logger.level = 'debug';

const getTeam = require('../../daos/getTeam');
/**
  *  @return {Promise}, promise with all teams
 */
async function getTeamService(id) {
  logger.debug('Service to get teams data');
  return await getTeam(id);
}
module.exports = getTeamService;