'use strict'

const db = require('./db');

function getFirstUser(){
    return new Promise((resolve, reject)=>{
        db.getConnection(function(err,connection){
            if(err){reject('DB Connection error');}
            connection.query('SELECT * FROM film', function (error, results, fields){
                connection.release();

                if(error){throw error};

                resolve(results[0]);
            });
        });
    });
}

function getAllUsers(){
    return new Promise((resolve, reject)=>{
        db.getConnection(function(err,connection){
            if(err){reject('DB Connection error');}
            connection.query('SELECT * FROM film', function (error, results, fields){
                connection.release();

                if(error){throw error};

                resolve(results);
            })
        })
    })
}
module.exports = {getFirstUser, getAllUsers};