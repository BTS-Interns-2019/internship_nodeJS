let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    fs.readFile('./db.json',(err, data) => {
        if(err){
            return console.log('a descriptive message');
        }
        console.log(data);
        if(data==''){
            res.end('a descriptive message')
        }else{
            console.log('file readed');
            res.end(data);
        }
    });
    
})
app.listen(5000,'127.0.0.1');
console.log("Conexion establecida")