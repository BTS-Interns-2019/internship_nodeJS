'use strict'

// database operations regarding teams
const db = require('../config/db');

/**
 * getTeams method
 * get all the teams' data
 * @return {object} database records
 */
function getTeams() {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject('Error connecting to the database');
      }

      // make query to get teams
      connection.query('SELECT * FROM teams', (err, results) => {
        // release connection
        connection.release();

        // handle errors
        if (err) {
          reject(err);
        }

        resolve(results);
      });
    });
  });
}

// TODO: getTeam, updateTeam
// export team's database operations
module.exports = {
  getTeams,
  getTeam,
  updateTeam,
};
