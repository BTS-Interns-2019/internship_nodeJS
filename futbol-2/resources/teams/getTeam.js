const log4js = require('log4js');
const jsonschema = require('jsonschema');
const jwt = require('jsonwebtoken');
const { validateToken } = require('../../filters/tokenValidator');

const getTeamService = require('../../services/teams/getTeamService');
const logger = log4js.getLogger('Resource resource/GetTeam');
logger.level = 'debug';

function getTeam(req, res) {

  logger.debug('Get the team from service :)');
  res.set('Content-Type', 'application/json');
  logger.debug('Getting team from service');
  validateToken(req.headers)
    .then(validate => {
      console.log(validate);
      
      if (validate) {
        return getTeamService(req.params.id)
          .then((team) => {
            res.status(200);
            res.send({
              status: 200,
              message: 'Team returned successfuly',
              data: team,
            });
          })
          .catch((error) => {
            logger.error(error);
            res.status(404);
            res.send({
              status: 404,
              message: 'Team not found',
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
module.exports = getTeam;