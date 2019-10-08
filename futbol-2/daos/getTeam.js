'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getTeams.js');
logger.level = 'debug';

const createError = require('http-errors');
const db = require('../config/db');
/**
 * @return {Promise} Promise with teams from DB
 */
function getTeam(id) {
  return new Promise((resolve, reject) => {
    db.getConnection((error, connection) => {
      if (error) {
        reject(createError(500, 'DB connection error'));
        logger.error(error);
      }
      connection.query(`SELECT * FROM equipo WHERE idequipo = ${id}`, (err, results) => {
        connection.release();

        if (err) {
          logger.error(err);
          reject(err);
        }
        resolve(results);
      });
    });
  });
}

module.exports = getTeam;