'use strict'

const db = require('../config/db');
/**
 * @return {Promise} Promise with teams from DB
 */
function getTeams() {
  return new Promise((resolve, reject) => {
    db.getConnection((error, connection) => {
      if (error) {
        reject(`DB connection error: ${error}`);
      }
      connection.query('SELECT * FROM equipo', (err, results, fileds) => {
        connection.release();

        if (err) {
          throw err;
        }
        resolve(results);
      });
    });
  });
}

module.exports = getTeams;