  'use strict';
  const log4js = require('log4js');
  const logger = log4js.getLogger('Resource putTeamService.js');
logger.level = 'debug';

const editarEquipo = require('../../daos/putTeam');


/**
 * @return {Promise} promise del signUp
 */
function editar(body) {
  logger.debug('Updating team DB');
    return new Promise((resolve, reject) => {
     editarEquipo(body)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        logger.debug('Error message in reponse from DB');
        reject(err);
      });
    });
  }
  
  module.exports =editar;