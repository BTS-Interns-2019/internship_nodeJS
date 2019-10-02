'use strict'
const db = require('./db');


function getFirstUser() {
    return new Promise((resolve, rejected) => {
        db.getConnection(function(err, connection) {
            if (err) { rejected('DB Connection error'); } //not connected

            //use the connection to execute a query
            connection.query('SELECT * FROM user', (error, results, fields)=>{

                //when done with the connection, release it
                connection.release();

                //Handle error after release
                if(error){throw error};

                //resolve the promise
                resolve(results[0])
            });
        });

    });

};



module.exports = getFirstUser;