'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

const getTeamsService = require('../../services/teams/getTeamsService');
/**
 * @param {Object} req, client request that contains token
 * @param {Object} res, server's response for client
 * @return {Promise}, fJSON object with all data from teams
 * 
*/

async function getTeams(req, res) {
  logger.debug('Getting teams from service');
  res.set('Content-Type', 'application/json');
  
  try {
    logger.debug('Recieving data from teams in DB');
    const results = await getTeamsService();
    res.send({
      status: 200,
      message: 'Get teams succesfully',
      data: results,
    });
  } catch (err) {
    logger.debug('Responding error trying to get data from DB');
    res.status(404);
    res.send({
      status: err.statusCode,
      message: err.statusMessage,
    });
  }
}

module.exports = getTeams;