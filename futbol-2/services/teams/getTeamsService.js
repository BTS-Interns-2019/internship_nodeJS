'use strict';

const getTeams = require('../../daos/getTeams');
/**
  *  @return {Promise}, promise with all teams
 */
function getTeamsService() {
  return new Promise((resolve, reject) => {
    getTeams()
      .then((results) => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      })
  });
}
module.exports = getTeamsService;