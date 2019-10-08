
'use strict';
const jwt = require('jsonwebtoken');
const { validateToken } = require('../../filters/tokenValidator');

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
    if (!req.headers.authorization) {
      res.status(401);
      res.send({
        status: 401,
        message: 'Unathorized',
      });
      return;
    }
    if (!req.headers.authorization) {
      res.status(401);
      res.send({
        status: 401,
        message: 'Unathorized',
      });
      return;
    }
    // calidate token from headers, and gettin a variable from URL
    validateToken(req.headers)
    .then(validate => {
      console.log(validate);
      
      if (validate) {

    return equipoServices(req.body )
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
  })
  .catch((error) => {
    logger.error(error);
    res.status(401);
    res.send({
      status: 401,
      message: 'Unauthorized user',
    });
    
  })
}
}

module.exports = editarEquipo;