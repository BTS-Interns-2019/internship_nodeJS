'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getTeam.js');
logger.level = 'debug';

const getTeamService = require('../../services/teams/getTeamService');
/**
 * @param {Object} req, client request that contains token
 * @param {Object} res, server's response for client
 * @return {Promise}, fJSON object with all data from teams
 * 
*/

async function getTeam(req, res) {
  logger.debug('Getting teams from service');
  res.set('Content-Type', 'application/json');
  
  try {
    logger.debug('Recieving data from teams in DB');
    const results = await getTeamService(req.params.id);
    res.send({
      status: 200,
      message: 'Get team succesfully',
      data: results,
    });
  } catch (err) {
    logger.debug('Responding an error, trying to get data from DB');
    res.status(404);
    res.send({
      status: err.statusCode,
      message: err.statusMessage,
    });
  }
}

module.exports = getTeam;