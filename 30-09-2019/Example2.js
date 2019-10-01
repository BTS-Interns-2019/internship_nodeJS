'use strict'
const http = require ('http');
const fs = require ('fs');

const app = http.createServer ((req, res)=>{
    if(req.method === 'POST'){
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString();

            fs.writeFile('db.json', body, (err) => {
                if(err){
                res.writeHead(400,{"content-type":"text/plain"});
                res.end("Error en escribir archivo db.json"); 
               
                }
        })
         res.end(body)
    })
    
}

   
})



app.listen(3000, '127.0.0.1')
console.log('Node server running on port 3000')