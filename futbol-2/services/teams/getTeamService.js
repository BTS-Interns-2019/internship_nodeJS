const log4js = require('log4js');

const Logger = log4js.getLogger('Resource from getTeamService')
Logger.level = 'debug;'
const getTeam = require('../../daos/getTeam');

function getTeamService(id) {
    Logger.debug(id);
    
    return new Promise((resolve, reject) => {
        getTeam(id)
        .then((data) => {
            resolve(data)
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = getTeamService;