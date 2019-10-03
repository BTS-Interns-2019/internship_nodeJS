var express = require('express');
var app = express();
var port = 3000;

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);


// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };

// app.use(requestTime);

// app.get('/', function (req, res) {
//   var responseText = 'Hello World!';
//   responseText += 'Requested at: ' + req.requestTime + '';
//   res.send(responseText);
// });


// app.listen(port, () => {
//     console.log(`Express running in port ${port}`)
//   });