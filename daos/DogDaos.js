'use strict'

const db = require('../config/db.js');

function addDog(data) {
  return new Promise((resolve, reject) => {

    
db.getConnection(function(err, connection) {
    if (err) { 
        // Not connected!
        reject('DB Connection error'); 
    } 

    //invoque connection to execute a query
    connection.query(`SELECT * FROM dogs WHERE name = '${data.name}'` , function (error, results, fields) {
      if(error) { 
          reject(error.message); 
        }
        if(results.length > 0){
          reject(`ERROR: The name ${data.name} already exists!`);
        }

        //Make a query to insert the new user into the database
      connection.query(`INSERT INTO dogs (name, age, genre, description) VALUES ('${data.name}', '${data.age}','${data.genre}', '${data.description}')`, function (error, results, fields) {
       

        // Release, when connection finish
      connection.release();

      // Handle error after release
      if (error) { 
        throw error
      };

      // Promise resolve
      resolve(results);
      });
    });
  });
});
};

module.exports = {
addDog
} 