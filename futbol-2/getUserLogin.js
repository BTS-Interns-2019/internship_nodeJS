'use strict'
const db = require('./db');
var jwt = require('jsonwebtoken')
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
            .then((data) => {

                var tokenData = body 

                var token = jwt.sign(tokenData, 'Secret Password', {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                 })


                resolve(token);
            })
            .catch( (data) => reject(data));

            })

        })

    })

}

module.exports = postUser;