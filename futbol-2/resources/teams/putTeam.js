
'use strict';

const createError = require('http-errors');
const log4js = require('log4js');
const Validator = require('jsonschema').Validator;

const equipoServices = require('../../services/teams/putTeamService');
const teamSchema = require('../../validationSchemas/team');

const logger = log4js.getLogger('Resource putTeam.js');
logger.level = 'debug';

/**
* putTeam resource
* use the getUsers service to get all users from the database
* @param {Object} req - client request that contains token
* @param {Object} res - client response in case toke is invalid or expired
* @return {Object} a JSON response with database records or an error response
* */
function editarEquipo(req, res) {
  logger.debug('team resource');
  res.set('Content-Type', 'application/json');
  const toValid = new Validator();
  const validated = toValid.validate(req.body, teamSchema).errors;
  // validating JSON schema from reques body
  if (validated.length > 0) {
    res.status(400);
    res.send({
      status: 400,
      message: validated.map( msj => msj.stack)
    });
  } else {
    // return response from DB
    console.log(req.params.id)
    return equipoServices(req.body)
      .then((teamSettings) => {
        logger.debug('edit the team resource');
        res.send({
          status: 200,
          message: 'PUT team succesfully',
          data: teamSettings,
        });
      })
      .catch((err) => {
        logger.error(err);
        logger.debug('Error trying to get response form service');
        res.status(400);
        res.send({
          status: 400,
          message: 'Error trying to edit team',
        });
      });
  }
}

module.exports = editarEquipo;