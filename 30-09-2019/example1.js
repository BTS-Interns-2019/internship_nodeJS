'use strict'

const Http = require( 'http' );
const fs = require( 'fs' );

Http.createServer( (req, res) => {  
  if(req.method !== 'GET'){
    res.writeHead(403, {"Content-Type": "text/plain"})
    res.end('Forbidden Action')
    return;
  }
  
  fs.readFile( './db.json', (err, data) => {
    if( err ) {
      throw new Error( 'something went wrong' );
    } 
    else if( data.length === 0 ){
     res.end( '404 File ot found' )
    };
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end( data )
  })
}).listen( 8080, () => {
  console.log( 'running server at port 8080')
});