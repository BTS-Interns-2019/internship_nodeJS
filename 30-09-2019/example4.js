'use strict'

const server = require('http');
const fs = require('fs');

server.createServer( (req, res) => {
  
  req.on('data', (chunk) => {
    if(req.method !== 'DELETE'){
      res.writeHead(400, {"Content-Type": "text/plain"})
      res.end('Action not allowed.')
    }

    let userData = JSON.parse(chunk);
    
    const readStream = fs.createReadStream('db.json')

    readStream.on('data', (dbData) => {
      dbData = JSON.parse(dbData)
      console.log(dbData.serverClients)

      const existentUser = userInDb(dbData.serverClients, userData);
      
      if( !existentUser ){
        res.writeHead(400, {"Content-Type": "text/plain"})
        res.end('User not registered.')
      }
      else{
        deleteUser(dbData.serverClients, userData);
      };
      
      dbData = JSON.stringify(dbData);
      fs.writeFile('db.json', dbData, () => {
        console.log('Database updated.')
        
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end('User deleted')
      })
    })
  })
}).listen(8080, () => {
  console.log('Listening at port: 8080')
});

function userInDb(dbUsers, userData){

  for(let user of dbUsers){
    if(user.userId === userData.userId){
      
      return true
    }
  }
  return false;
}

function deleteUser(dbData, deleteUser){
  for(let user in dbData){
    if(dbData[user].userId === deleteUser.userId){
      dbData.splice(user);
    }
  }
};