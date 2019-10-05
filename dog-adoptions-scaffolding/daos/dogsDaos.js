'use strict'

// database operations regarding dogs
const db = require('../config/db');
/**
 * getDogs method
 * get all the data of dogs
 * @return {object} database records
 */

function getDogs() {
  return new Promise((resolve, reject) => {

    db.query('SELECT * FROM dogs', (err, dogs) => {
    
      if (err) { reject(err) }
        resolve(dogs);
    });
  });
};

/**
* addDogs method
* add all dogs to the database
* @return {object} database records
**/
function addDogs(data) {
  return new Promise((resolve, reject) => {

    db.query(`INSERT INTO dogs (name, age, sex, description, imgUrl) VALUES ('${data.name}', '${data.age}','${data.sex}', '${data.description}', '${data.imgUrl}')`, function (error, results, fields) {
    
      if (error) { reject(error) };

      resolve(results);
    });
  });
}


module.exports = {
  getDogs,
  addDogs 
}