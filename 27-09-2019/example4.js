'use strict'
const http = require('http');
const fs = require('fs');

let cont = 0;

let app = http.createServer(function(req, res){

   const promise = new Promise ((resove, reject) =>{
    fs.readFile('../readable.json','utf-8', (err, data)=>{
        if(err){ reject(err)};
        res.writeHead(200, {'Content-type': 'aplication/json'});
        const obtFile = JSON.parse(data);
        for( let i in obtFile['web-app'].taglib){
            cont+=1;
        }
        do{
            obtFile['web-app'].taglib['request'+cont-1] = 'request'+cont-1;
            cont = 0;
        } while (obtFile['web-app'].taglib != undefined)
        fs.writeFile('../readable.json', JSON.stringify(obtFile), (err, data)=>{
            if(err){console.log(err)}
        });

        resolve(JSON.stringify(obtFile));

    });
   });

   promise.then(data => res.end(data)).catch(data => res.end(data))

});

// start the server on port 5000
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000');