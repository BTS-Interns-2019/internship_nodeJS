'use strict'

const Http = require('http');
const fs = require('fs');

Http.createServer( (req, res) => {
  
  let dbAccess = []

  if( req.method !== 'POST'){
    res.writeHead(401, {"Content-Type": "text/plain"})
    res.end('Forbidden action')
  }; 
  
  const readStream = fs.createReadStream('db.json')

  readStream.on('data', (chunk) => {
    let dbData = JSON.parse(chunk)
    dbAccess.push(dbData)

    req.on('data', (chunk) => {

      const newUser = JSON.parse(chunk)

      dbAccess[0].serverClients.forEach( user => {
        if (user.userId == newUser.userId){
          res.writeHead(404, {"Content-Type": "text/plain"})
          res.end('User already exist')
        } 
      });
      
      dbAccess[0].serverClients.push(newUser)
  
      dbAccess = Buffer.from( JSON.stringify(dbAccess) )
          
      fs.writeFile('db.json', dbAccess, () => {
        console.log('Database updated.')
        res.writeHead(201, {"Content-Type": "text/plain"},
                            {"Content-Type": "application/json"})
        res.end('User registered\n', newUser);
      })
    })
  })
}).listen(8080, () => { console.log('Server running at port: 8080')})
