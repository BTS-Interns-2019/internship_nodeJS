'use strcit'
const db = require('./dbPool');

function postActor(body) {
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if (err) {
                reject(err)
            }

            connection.query(`INSERT INTO actor (first_name, last_name) values (${body.first_name},${body.last_name})`);

            connection.release();
            if (err) {
                reject(err)
            }
            resolve('Inserted data successfully')
        });
    });    
}

module.exports = postActor;