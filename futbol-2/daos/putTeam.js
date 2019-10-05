"use strict";
const db = require("../config/db");
const bcrypt = require("bcryptjs");

/**
 *
 * @param {equipo} equipo object
 * @return {Promise} promise query
 */
function putTeam(equipo) {
    return new Promise((resolve, reject) => {
        db.getConnection(function (err, connection) {
            if (err) {
                reject(createError(500, 'DB connection error'));
            }
            connection.query(
                `UPDATE equipo SET logo = '${equipo.logo}', name = '${equipo.name}',
            location = '${equipo.location}',stadium = '${equipo.stadium}',position = ${equipo.position},
            points = ${equipo.points},games_played = ${equipo.games_played},games_won = ${equipo.games_won},
            games_tied = ${equipo.games_tied}, games_lost = ${equipo.games_lost},
            goals_in_favor = ${equipo.goals_in_favor},goals_against = ${equipo.goals_against},goal_difference = ${equipo.goal_difference}
            WHERE idequipo = ${equipo.idequipo}`,
                function (error, results, fields) {
                    connection.release();
                    if (error) {
                        logger.error(err);
                        reject(err);
                    }
                    resolve(equipo);
                }
            );

        });
    });
}

module.exports = putTeam;