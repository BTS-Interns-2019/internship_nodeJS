const log4js = require('log4js');
const jsonschema = require ('jsonschema')
const jwt = require('jsonwebtoken');
const { validateToken } = require('../../filters/tokenValidator');

const getTeamService = require('../../services/teams/getTeamService');
const logger = log4js.getLogger('Resource resource/GetTeam')
logger.level = 'debug';

async function getTeam(req, res) {
  logger.debug('Get the team from service');
  res.set('Content-Type', 'application/json');
  logger.debug('Getting team from service');
  try {
    const tokenV = await validateToken();
    if (tokenV && req.params.id) {
      return getTeamService(req.params.id)
        .then( (team) => {
          res.status(200);
          res.send({
            status: 200,
            message: 'Team returned successfuly',
            data: team,
          });
        })
        .catch((error) => {
          res.status(404);
          res.send({
            status: 404,
            message: 'Team not found',
          });
        });
    }
  } catch (error) {
    res.status(400);
    res.send({
      status: 400,
      message: error,
    })
  }
}