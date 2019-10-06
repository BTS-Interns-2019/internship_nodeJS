'use strict'

// database operations regarding teams
const db = require('../config/db');

// updatable field for teams table
const teamUpdatables = [
  'logo',
  'name',
  'location',
  'stadium',
];

/**
 * getTeams method
 * get all the teams' data
 * @return {object} database records
 */
function getTeams() {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }

      // make query to get teams
      connection.query('SELECT * FROM teams', (err, teams) => {
        // handle errors
        if (err) {
          // release connection
          connection.release();
          reject(err);
        }

        connection.query('SELECT * FROM tournament_games', (err, tournament) => {
          connection.release();

          if (err) {
            reject(err);
          }

          const results = [];
          // get the stats of each team and join them in a single object
          teams.forEach((team) => {
            const stats = tournament.find((stat) => stat.team_id === team.id);

            if (stats) {
              results.push({ ...team, ...stats });
            }
          });

          resolve(results);
        });
      });
    });
  });
}

/**
 * getTeam method
 * get the team's data
 * @return {object} database records
 */
function getTeam(id) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject(err);
      }

      // make query to get teams
      connection.query(`SELECT * FROM teams WHERE id=${id}`, (err, teams) => {
        // handle errors
        if (err) {
          // release connection if there's an error
          connection.release();
          reject(err);
        }

        connection.query(`SELECT * FROM tournament_games WHERE team_id=${id}`, (err, results) => {
          // release connection
          connection.release();

          if (err) {
            reject(err);
          }

          // join the team results with the tournament results
          const result = { ...teams[0], ...results[0] };
          resolve(result);
        });
      });
    });
  });
}

/**
 * updateCalculatedFields method
 * update the calculable data fields for the tournament's table
 * @param {number} teamId id of the team to be updated
 * @param {object} connection object containing the connection to the database
 * @param {function} callback callback to execute once the
 * fields have been updated successfully or not
 * @return {void}
 */
function updateCalculatedFields(teamId, connection, callback) {
  // get team data
  getTeam(teamId)
    .then((data) => {
      // calculate fields
      const fields = {
        points: (data.games_won * 3) + (data.games_tied),
        games_played: data.games_won + data.games_tied + data.games_lost,
        goal_difference: data.goals_in_favor - data.goals_against,
      };

      Object.entries(fields).forEach((entry) => {
        const [key, value] = entry;
        connection.query(
          `UPDATE tournament_games SET ${key}=${value} WHERE team_id=${teamId}`,
          (err) => {
            if (err) {
              callback(err);
            }
          },
        );
      });

      // run the callback with the new teams data
      callback();
    })
    .catch((err) => {
      // send the error to the callback
      callback(err);
    });
}

/**
 * updateTeam method
 * update the team's data along with its tournament data if provided
 * @param {number} teamId id of the team to be updated
 * @param {object} newData object containing the new data for the team
 * @return {object} database confirmation or failure
 */
function updateTeam(teamId, newData) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      // check if there was an error connecting to the database
      if (err) {
        reject(err);
      }

      // check each field of the new data if it belongs to the team or tournament table
      Object.entries(newData).forEach((entry) => {
        // separate the key and its value
        const [key, value] = entry;

        if (teamUpdatables.includes(key)) {
          // update team's table
          connection.query(
            `UPDATE teams SET ${key}='${value}' WHERE id=${teamId}`,
            (err) => {
              if (err) {
                reject(err);
              }
            }
          );
        } else {
          // the field to update is in the tournaments table
          connection.query(
            `UPDATE tournament_games SET ${key}='${value}' WHERE team_id=${teamId}`,
            (err) => {
              if (err) {
                reject(err);
              }
            }
          );
        }
      });

      updateCalculatedFields(teamId, connection, (err, newTeamData) => {
        // release connection
        connection.release();

        if (err) {
          reject(err);
        }

        resolve(newTeamData);
      });
    });
  });
}

// export team's database operations
module.exports = {
  getTeams,
  getTeam,
  updateTeam,
};
