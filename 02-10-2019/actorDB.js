let db = require("./db");

function getFirstActor() {
  return new Promise((resolve, rejected) => {
    db.getConnection(function(err, connection) {
      if (err) {
        rejected("DB connection error");
      }//not connected}

      //use the connection to execute a query
      connection.query("SELECT * FROM actor", function(err, result, fields) {
        //When donde with the connection, release.
        connection.release();

        //Handle error after the release
        if (err) {
          throw error;
        }

        resolve(result[0]);
      });
    });
  });
}

function createActor() {
    return new Promise((resolve, rejected) => {
      db.getConnection(function(err, connection) {
        if (err) {
          rejected("DB connection error");
        }//not connected}
  
        //use the connection to execute a query
        connection.query("INSERT * FROM actor", function(err, result, fields) {
          //When donde with the connection, release.
          connection.release();
  
          //Handle error after the release
          if (err) {
            throw error;
          }
  
          resolve(result[0]);
        });
      });
    });
  }

module.exports = {
    getFirstActor,
    createActor
}