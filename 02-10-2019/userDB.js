'use strict'
const db = require('./db');
function getFirstUser() {
    return new Promise((resolve, reject) => {
        db.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error')
            }
            connection.query('SELECT * FROM user', function (error, results, fields) {
                connection.release();
                if (error) {
                    throw error
                }
                resolve(results[0])
            })
        })
    })
}
function getAllUser() {
    return new Promise((resolve, reject) => {
        db.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error')
            }
            connection.query('SELECT * FROM user', function (error, results, fields) {
                connection.release();
                if (error) {
                    throw error
                }
                resolve(results)
            })
        })
    })
}
function addUser(user) {
    return new Promise((resolve, reject) => {
        db.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error')
            }
            connection.query(`INSERT INTO user (name) values ('${user.name}')`, function (error, results, fields) {
                connection.release();
                if (error) {
                    throw error
                }
                resolve(user)
            })
        })
    })
}
function updateUser(user) {
    return new Promise((resolve, reject) => {
        db.getConnection(function (err, connection) {
            if (err) {
                reject('DB connection error')
            }
            let query = `UPDATE user SET `
            for (let key in user) {
                query+=`${key} = '${user[key]}',`
            }
            query = query.slice(0,-1)
            query+=`WHERE id = ${user.id}`
                connection.query(query, function (error, results, fields) {
                    connection.release();
                    if (error) {
                        throw error
                    }
                    resolve(user)
                })
            
        })
    })
}
module.exports = { getAllUser, addUser,updateUser };