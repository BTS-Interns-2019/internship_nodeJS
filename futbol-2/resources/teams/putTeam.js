
'use strict';

const createError = require('http-errors');
const equipoServices = require('../../services/teams/putTeamService');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

/**
* putTeam resource
* use the getUsers service to get all users from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {object} a JSON response with database records or an error response
**/
function editarEquipo(req, res) {
  logger.debug('equipo resource');
  return equipoServices(req.body)
  .then((teamSettings) => {
    logger.debug('edit the team resource');
    res.set('Content-Type', 'application/json');
    res.send({
      status: 200,
      message: 'PUT team succesfully',
      data:teamSettings,
    });
  })
  .catch((err) => {
    res.send(err);
  });
}

module.exports = editarEquipo