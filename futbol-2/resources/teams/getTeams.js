'use strict';

const log4js = require('log4js');

const logger = log4js.getLogger('Resource getTeam.js');
logger.level = 'debug';

const getTeamsService = require('../../services/teams/getTeamsService');
const { validateToken } = require('../../filters/tokenValidator');
/**
 * @param {Object} req, client request that contains token
 * @param {Object} res, server's response for client
 * @return {Promise}, fJSON object with all data from teams
 * 
*/

async function getTeams(req, res) {
  logger.debug('Getting teams from service');
  res.set('Content-Type', 'application/json');
  if (!req.headers.authorization) {
    res.status(401);
    res.send({
      status: 401,
      message: 'Unathorized',
    });
    return;
  }
  const validate = validateToken(req.headers)
    .then( (isValid) => {
      if (isValid) {
        logger.debug('Recieving data from teams in DB');
        const results = getTeamsService().then (teams => {
          res.status(200);
          res.send({
            status: 200,
            message: 'Get teams succesfully',
            data: teams,
          });
        })
          .catch( (err) => {
            logger.debug('Responding an error, trying to get data from DB');
            res.status(404);
            res.send({
              status: err.statusCode,
              message: err.statusMessage,
            });
          })
      } 
    })
    .catch((err) => {
      res.status(401);
      res.send({
        status: 401,
        message: 'Unathorized',
      });
    });
  // try {
  //   logger.debug('Recieving data from teams in DB');
  //   const results = await getTeamsService();
  //   res.send({
  //     status: 200,
  //     message: 'Get teams succesfully',
  //     data: results,
  //   });
  // } catch (err) {
  //   logger.debug('Responding an error, trying to get data from DB');
  //   res.status(404);
  //   res.send({
  //     status: err.statusCode,
  //     message: err.statusMessage,
  //   });
  // }
}

module.exports = getTeams;