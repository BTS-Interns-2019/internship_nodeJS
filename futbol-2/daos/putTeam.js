// "use strict";
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const createError = require('http-errors');

const log4js = require('log4js');
const logger = log4js.getLogger('Resource putTeams.js');
logger.level = 'debug';

/**
 *
 * @param {equipo} equipo object
 * @return {Promise} promise query
 */
function putTeam(equipo) {
  return new Promise((resolve, reject) => {
    db.getConnection(function (err, connection) {
      if (err) {
        logger.error('Error in connection DB');
        reject(createError(500, 'DB connection error'));
      }
      connection.query(
        `UPDATE equipo SET logo = '${equipo.logo}', name = '${equipo.name}',
            location = '${equipo.location}',stadium = '${equipo.stadium}',position = ${equipo.position},
            points = ${equipo.points},games_played = ${equipo.games_played},games_won = ${equipo.games_won},
            games_tied = ${equipo.games_tied}, games_lost = ${equipo.games_lost},
            goals_in_favor = ${equipo.goals_in_favor},goals_against = ${equipo.goals_against},goal_difference = ${equipo.goal_difference}
            WHERE idequipo = ${equipo.idequipo}`,
        (error, results, fields) => {
          connection.release();
          if (error) {
            logger.error(err);
            reject(createError(400, err));
          }
          resolve(equipo);
        },
      );
    });
  });
}

module.exports = putTeam;