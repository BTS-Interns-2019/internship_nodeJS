'use strict'
const db = require('./db');

function postUser(body){
    return new Promise((resolve, reject) => {
        db.getConnection((error, connection)=>{
            if(error) reject('DB connection Error:',error);

            connection.query(`SELECT email, password FROM user WHERE email = '${body.email}'`, (error, results, fields)=>{
                console.log(results)
                if(error){reject(error)}

            connection.release();

            if(error){throw error};

            resolve(results.password);

            })

        })

    })

}

module.exports = postUser;