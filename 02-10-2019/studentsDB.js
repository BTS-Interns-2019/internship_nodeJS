'use strict'

const pool = require('./db.js');

function getFirstStudent() {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error');
            };
            connection.query('SELECT * FROM students', function (error, results, fields) {
            connection.release();

                if (error) {
                    throw error;
                };
                resolve(results[0]);
            });
        });
    });
};

function getStudents() {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error');
            };
            connection.query('SELECT * FROM students', function (error, results, fields) {
            connection.release();

                if (error) {
                    throw error;
                };
                resolve(results);
            });
        });
    });
};

function postStudent () {
    const post = {first_name: 'David', last_name: 'Peregrino'};
    return new Promise ((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error');
            };
            connection.query("INSERT INTO students SET ?", post, function (error, results, fields) {
                connection.release();

                if (error) {
                    throw error;
                };
                resolve(results);
            });
        });
    });
}

module.exports = { 
    getFirstStudent,
    postStudent,
    getStudents,
};
