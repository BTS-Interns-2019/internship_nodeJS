'use strict'
const db = require('./db');
const compare = require('./crypt');

function postUser(body){
    return new Promise((resolve, reject) => {
        db.getConnection((error, connection)=>{
            if(error) reject('DB connection Error:',error);

            connection.query(`SELECT * FROM user WHERE email = '${body.email}'`, (error, results, fields)=>{
                if(error){reject(error)}

            connection.release();

            if(error){throw error};
            // console.log(results[0].password, body.password);
            compare(body.password, results[0].password)
            .then((data) => resolve(data) )
            .catch( (data) => reject(data));

            })

        })

    })

}

module.exports = postUser;