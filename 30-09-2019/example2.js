'use strict'

const Http = require('http');
const fs = require('fs');

Http.createServer( (req, res) => {
  // METHOD CHECK
  if( req.method !== 'POST'){
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end('Forbidden action')
  }; 
  // OPEN DB
  const readStream = fs.createReadStream('db.json')

  readStream.on('data', (chunk) => {
    
    let dbData = JSON.parse(chunk)

    //GET REQUEST BODY(NEW REGISTER)
    req.on('data', (chunk) => {

      const newUser = JSON.parse(chunk)

      // CHECK IF USER ALREADY EXISTS IN DB
      let verifyUserExistance = verifyIfExists(dbData.serverClients, newUser);
      
      if( verifyUserExistance ){

        // USER ALREADY REGISTERED
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end('User already exist')
      } else {

        // PLACE NEW USER AT DB
        dbData.serverClients.push(newUser)
    
        dbData = JSON.stringify(dbData) 
        
        // INSERT NEW DATA TO DB
        fs.writeFile('db.json', dbData, () => {
          console.log('Database updated.')
          res.writeHead(201, {"Content-Type": "text/plain"})
          res.end('New register done.');
        })
      }
    })
  })
}).listen(8080, () => { console.log('Server running at port: 8080')})

// VERIFY METHOD
function verifyIfExists(dbUsers, newUser){
  let register = false;

  for(let user of dbUsers){

    if( user.userId === newUser.userId ){
      register = true
      return register;
    } 
  };
  return register
};