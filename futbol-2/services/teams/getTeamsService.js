'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getTeamsService.js');
logger.level = 'debug';

const getTeams = require('../../daos/getTeams');
/**
  *  @return {Promise}, promise with all teams
 */
async function getTeamsService() {
  logger.debug('Service to get teams data');
  return await getTeams();
}
module.exports = getTeamsService;