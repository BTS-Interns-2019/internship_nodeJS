const fs = require('fs');
function leer(){
    return new Promise((resolve, reject)=>{
        fs.readFile("db.json", (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(JSON.parse(data));
            }
        });
    })
}
module.exports = leer;