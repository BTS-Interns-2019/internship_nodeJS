'use strict'

const db = require ('./db.js');
const jwt = require ('jsonwebtoken');
const compare = require ('./bcrypt.js');


function logUser (body) {
    return new Promise ((resolve, reject) => {
        db.getConnection((err, connection) => {
            if (err) {
            reject('DB connection error');
        };
        connection.query(`SELECT * FROM users WHERE email = '${body.email}'`, (error, results, fields) => {
            if (error) {
                reject(error);
            };
            connection.release();

            if (error) {
                throw error;
            }
            compare(body.password, results[0].password)
                .then((data) => {
                    const tokendata = body;

                    const token = jwt.sign(tokendata, 'Secret Password', {
                        expiresIn: 60 * 60 * 24
                    });
                    resolve(token);
                })
                .catch((data) => {
                    reject(data);
                });
        });
        });

    });
};

module.exports = logUser;