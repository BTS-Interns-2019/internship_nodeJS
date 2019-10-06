'use strict'

const db = require('../config/db.js');

/**
* add a new Dog (addDog method)
* post a dog to the database
* @params {object} data - contain the dog data 
* @return {object} dog record
**/
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
      connection.query(`INSERT INTO dogs (name, age, genre, description, imgUrl) VALUES ('${data.name}', ${data.age},'${data.genre}', '${data.description}', '${data.imgUrl}')`, function (error, results, fields) {
       

        // Release, when connection finish
      connection.release();

      // Handle error after release
      if (error) { 
        reject(error.message);
      };

      // Promise resolve
      resolve(results);
      });
    });
    });
  });
}

/**
* get all the Dogs (getDogs method)
* get all the dogs in the database
* @return {object} dog records
**/
function getDogs () {
  return new Promise ((resolve, reject) => {
    db.getConnection(function (err, connection) {
      if (err) {
        reject(err.message);
      };
      connection.query('SELECT * FROM dogs', function (error, results, fields) {

        connection.release();

        if (error) {
          reject(error.message);
        };

        resolve(results);
      });
    });
  });
};

function deleteDog (data) {
  return new Promise ((resolve, reject) => {

    db.getConnection(function (err, connection) {
      if (err) {
        reject('DB connection error');
      };

      connection.query(`SELECT * FROM dogs WHERE name = '${data.name}'` , function (error, results, fields) {
      if(error) { 
          reject(error.message); 
        }
        if(results.length === 0){
          reject(`ERROR: The name ${data.name} don't exists!`);
        }

      connection.query(`DELETE FROM dogs WHERE name = '${data.name}'`, function(error, results, fields) {
        connection.release();

        if(error) {
          throw error;
        };

        resolve(results);
      });
    });
    });
  });
}

/**
* edit a Dog (editDog method)
* update an existing dog in the database
* @params {object} data - contain the new dog data 
* @params {integer} id - contain the dog id 
* @return {object} dog record
**/
function editDog(data, id) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if(err) { reject(err.message); }

      const query = `UPDATE dogs SET name = '${data.name}', age = ${data.age}, genre = '${data.genre}', description = '${data.description}', imgUrl = '${data.imgUrl}' WHERE id = ${id}`;
      connection.query(query, (error, results, fields) => {

        connection.release();
        if (err) {
          reject(error.message);
        }

        resolve(results);
      });
    });
  });
}

module.exports = {
  addDog,
  getDogs,
  editDog,
  deleteDog,
} 