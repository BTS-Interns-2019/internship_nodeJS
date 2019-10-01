const  fs = require ("fs");


read = fs.readFileSync('./db.json','utf-8',(err, data)=>{
    if(err)reject('Error leyendo el archivo');
    return data;
})

data = read;
console.log(data)