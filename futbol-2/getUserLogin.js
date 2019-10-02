'use strict'
const db = require('./db');

function postUser(body){
    return new Promise((resolve, reject) => {
        db.getConnection((error, connection)=>{
            if(error) reject('DB connection Error:',error);

            connection.query(`SELECT FROM user email, password WHERE email = ${body.email}`, (error, results, fields)=>{
                if(error){reject(error)}

            connection.release();

            if(error){throw error};

            resolve(results);

            })

        })

    })

}

module.exports = postUser;