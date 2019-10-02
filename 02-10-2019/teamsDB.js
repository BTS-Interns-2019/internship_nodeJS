const db = require('./dbConfig');

function getFirstTeam(){
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if(err){
                reject('DB Connection error' + err);
            }
            //usar la conexion para ejecutar query
            connection.query('SELECT * FROM teams', (error, rows, fields)=>{
                //cuando termine la conexion, release it
                connection.release();
                if(error){
                    throw error;
                }
                resolve(rows[0]);
            });
        });
    });
}
function insertTeam(name,location,stadium,logo){
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if(err){
                reject('DB Connection error' + err);
            }
            let querys = `INSERT INTO teams(name,locations,stadium,logo) VALUES(${name},${location},${stadium},${logo})`
            //usar la conexion para ejecutar query
            connection.query(querys, (error, rows, fields)=>{
                //cuando termine la conexion, release it
                connection.release();
                if(error){
                    throw error;
                }
                resolve(rows);
            });
        });
    });
}

module.exports = {getFirstTeam, insertTeam};