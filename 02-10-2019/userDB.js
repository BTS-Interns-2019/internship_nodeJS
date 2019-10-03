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

function postNewUser(request){
    return new Promise((resolve, reject)=>{
        db.getConnection(function(err,connection){
            if(err){reject('DB Connection error');}
            
            let sql = `INSERT INTO film 
            (title, description, 
            release_year, language_id, 
            rental_duration,rental_rate, 
            length, replacement_cost, 
            rating, special_features, 
            last_update) 
            VALUES 
            ('${request.body.title}',
            '${request.body.description}',
            '${request.body.release_year}',
            '${request.body.language_id}',
            '${request.body.rental_duration}',
            '${request.body.rental_rate}',
            '${request.body.length}',
            '${request.body.replacement_cost}',
            '${request.body.rating}',
            '${request.body.special_features}',
            '${request.body.last_update}')`;

            connection.query(sql, function (error,result){
                    if(error)throw error;
                    resolve("1 row added");
                }
            );
        })
    })
}
module.exports = {getFirstUser, getAllUsers, postNewUser};