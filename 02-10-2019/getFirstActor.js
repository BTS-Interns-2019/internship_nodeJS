'use strict'
const db = require('./dbPool');
function getFirstActor() {
    return new Promise((resolve, rejected) => {
        db.getConnection((error, connection) => {
            if (error) {
                rejected('DB Connection Error') // not connected!
            }
            // Use the connection to execute a query
            connection.query('SELECT * FROM  actor', (err, results, fields) => {
                // when done with the connection, release it
                connection.release();
                // handle error after the release
                if (error) {
                    throw error;
                }
                // resolve the promise
                resolve(results);
            });
        })
    });
}

module.exports = getFirstActor;