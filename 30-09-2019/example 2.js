/* Will receive a JSON with wathever property to set on db.json POST */
let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
    req.on('data', (data) => {
        let body = JSON.parse(data.toString());
        let id = body[Object.keys(body)[0]];
        let sdata = fs.readFileSync('./db.json');
        console.log("Readed ...");
        let file = sdata.toString();
        console.log(file);
        if(file.length>0){
            let newdata=`[${file.substring(1,file.length-1)},${JSON.stringify(body)}]`;
            fs.unlinkSync('./db.json');
            fs.writeFileSync('./db.json',newdata);
            console.log("Written");
        }else{
            fs.writeFileSync('./db.json',`[${JSON.stringify(body)}]`);
            console.log("Written");

        }
    }).on('end', () => {
        res.writeHead(200,{'Content-type':'application/json'});
        fs.readFile('./db.json',(err, data) => {
            if (err){
                return console.error("Error al leer: "+err);
            }
            console.log("Property added");
            res.end(data);
        })
    })
})

app.listen(5000,'127.0.0.1');
console.log("Conexion establecida");