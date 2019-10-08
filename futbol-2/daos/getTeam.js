'use strict';
const log4js = require('log4js');
const logger = log4js.getLogger('Resource daos/getTeam.js');
logger.level = 'debug';

const createError = require('http-errors');
const db = require('../config/db');
/**
 * @return {Promise} Promise with one team from DB
 */

function getTeam(id) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        logger.error(err);
        reject(createError(500, 'Error in DB connection'))
      }
      connection.query(`SELECT * FROM equipo WHERE idequipo = ${id}`, (err, results) => {
        connection.release();
        if (err) {
          logger.error(err)
          reject(err);
        }
        resolve(results);
      });
    });
  });
}

module.exports = getTeam;