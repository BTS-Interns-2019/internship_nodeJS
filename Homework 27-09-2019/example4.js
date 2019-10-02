'use strict'

const server = require('http');
const fs = require('fs');

server.createServer( (req, res) => {
  
  let readStream = fs.createReadStream('../readable.json')

  readStream.on('error', () => {
    res.setHeader(400, {"Content-Type": "text/plain"});
    res.end('Something went wrong.')
  })

  readStream.on('data', (chunk) => {
    let dbData = JSON.parse(chunk);
    let reqLogger = dbData['web-app'].taglib;

    // CREATE NEW REQ LOG
    logRequest(reqLogger);

    dbData = JSON.stringify(dbData); 

    fs.writeFile('../readable.json', dbData, () => {
      console.log('Database updated.')
      res.writeHead(200, {"Content-Type": "application/json"})
      res.end(dbData)
    })    
  })
}).listen(5000, () => {
    console.log('Listening at port: 5000')
});

// LOG NEW REQUEST
function logRequest(requestLogger){

  for(let entry = 1; entry = entry; entry++){
    let reqEntry = `Request${entry}`;    

    if( !requestLogger.hasOwnProperty( reqEntry ) ){
      requestLogger[reqEntry] = reqEntry;
      break;
    };
  };
};