/* Will receive a JSON with wathever property to set on db.json PUT */
let http = require("http");
let fs = require("fs");

let app = http.createServer((req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data.toString());
        let id = body[Object.keys(body)[0]];
        let sdata = fs.readFileSync('./db.json');
        console.log("Readed ...");
        let strdata = JSON.parse(sdata.toString());
        let newdata = strdata.map((key)=>{
            if(key[Object.keys(key)[0]] == id){
                return body;
            }else{
                return key;
            }
        });
        fs.unlinkSync('./db.json');
        fs.writeFileSync('./db.json',JSON.stringify(newdata));
        console.log("Written");
    }).on('end', () => {
        res.writeHead(200,{'Content-type':'application/json'});
        fs.readFile('./db.json',(err, data) => {
            if (err){
                return console.error("Error al leer: "+err);
            }
            console.log("Property modified");
            res.end(data);
        })
    })
})
app.listen(5000, '127.0.0.1');
console.log("Conexion establecida");