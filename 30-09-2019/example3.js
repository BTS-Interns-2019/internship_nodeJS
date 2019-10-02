'use strict'

const server = require('http');
const fs = require('fs');

server.createServer( (req, res) => {

  // IF IS NOT PUT, 400
  if(req.method !== 'PUT'){
    res.writeHead(400, {"Content-Type": "text/plain"})
    res.end(`${req.method} method not allowed.`)  
  };

  const readStream = fs.createReadStream('db.json');
  
  readStream.on('error', () => {
    res.writeHead(500, {"Content-Type": "text/plain"})
    res.end('Oops!... Something went wrong.')
  });

  readStream.on('data', (chunk) => {
    let dbData = JSON.parse(chunk)
    let dbUsers = dbData.serverClients;

    // READING DATABASE
    req.on('data', (chunk) => {
      let newData = JSON.parse(chunk);
      
      // BAD FORM BODY - USER SIGNED UP
      if( !bodyFormValidation(newData) ){
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end('Bad formed body request.')
      } 
      else if ( !userExists(dbUsers, newData) ){
        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end('User do not exist in this server.')
      };

      // UPDATE DATABASE AND SAVE USER FOR RESPONSE
      let userUpdated = updateUser(dbUsers, newData);
      console.log(userUpdated)
      dbData = JSON.stringify(dbData);

      fs.writeFile('db.json', dbData, () => {
        res.writeHead(201, {"Content-Type": "application/json"})
        res.end( JSON.stringify( userUpdated ))
      });
    });
  });


}).listen(8080, () => {
  console.log('Listening at port: 8080')
});

function bodyFormValidation(body){
  return body.hasOwnProperty('userId') ? true : false
};

function userExists(dbUsers, newData){
  let userLogged = false;

  for(let user of dbUsers){
    user.userId === newData.userId ? userLogged = true : userLogged;
  }
  return userLogged;
};

function updateUser(dbUsers, newData){
  let userUpdated;
  for(let user of dbUsers){
    if(user.userId === newData.userId){
      
      userUpdated = user;

      newData = Object.entries(newData.info)
      newData.forEach( data => {

        if( user.info.hasOwnProperty(data[0])){
          user.info[data[0]] = data[1]
        };
      })      
    }
  };
  return userUpdated;
};