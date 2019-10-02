'use strict'
const db = require('./db');

function postUser(body){
    return new Promise((resolve, reject) => {
        db.getConnection((error, connection)=>{
            if(error) reject('DB connection Error:',error);
            console.log(body)

            connection.query(`INSERT INTO 'my_db'.user('name', 'password, 'address') VALUES (${body.name},${body.password},${body.address}) `, (error, results, fields)=>{

            connection.release();

            if(error){throw error};

            resolve('posteado');

            })

        })

    })

}

module.exports = postUser;