const bcrypt = require('bcryptjs');
const log4js = require('log4js');
const logger = log4js.getLogger('Resource getUser.js');
logger.level = 'debug';

function compare(plainText, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err, res) => {
      if (err) {
        reject(err);
        logger.error(err)
      }
      resolve(res);
    });
  });
}

module.exports = compare;
