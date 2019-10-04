'use strict'

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getTeams.js');
logger.level = 'debug';

// obtain user services
const teamServices = require('../../services/teams');

/**
 * getTeams resource
 * use the getTeams service to get the teams info from the database
 * @return {object} Database records
 */
function getTeams(req, res) {
  logger.debug('getTeams resource');
  // add user to database
  return teamServices.getTeams()
    .then((result) => {
      logger.debug('sending result of adding user with the getTeams resource');
      res.set('Content-Type', 'application/json');
      res.send({
        status: 'success',
        message: 'Teams retrieved successfully',
        data: result,
      });
    })
    .catch((err) => {
      res.send({
        status: 'failure',
        message: 'There was an error retrieven the teams\' data',
        data: err,
      });
    });
}

module.exports = getTeams;
