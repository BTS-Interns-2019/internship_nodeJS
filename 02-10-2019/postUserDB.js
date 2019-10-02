'use strict'
const db = require('./db');

function postUser(body){
    return new Promise((resolve, reject) => {
        db.getConnection((error, connection)=>{
            if(error) reject('DB connection Error:',error);

            connection.query(`INSERT INTO user(name, password, address) VALUES ('${body.name}',${body.password},'${body.address}')`, (error, results, fields)=>{

            connection.release();

            if(error){throw error};

            resolve('Operacion exitosa');

            })

        })

    })

}

module.exports = postUser;