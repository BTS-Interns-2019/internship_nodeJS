'ues strict'

const {
    getFirstStudent,
    postStudent,
    getStudents } = require ('./studentsDB.js');
const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  /*  connection.connect((err) => {
        if (err) {
            console.log('Connection error');
            return;
        };
        //console.log('connection successful')
        connection.query('SELECT * FROM students', function(err, rows, fields) {
            if(err) {
                console.log(err);
                throw 'Connection Error'
            };
            res.set('content-type', 'application/json');
            res.send(rows[0]);
        });
        connection.end();
    });
    

   // res.send('Listo');*/

   getFirstStudent ()
   .then ((record) => {
       res.set('content-type', 'application/json');
       res.send(record);
   });
});

app.post('/', (req, res) => {
    postStudent ()
    .then((record) => {
         getStudents ()
    .then ((record) => {
       res.set('content-type', 'application/json');
       res.send(record);
   });

    });

});

app.listen(port, () => {
    console.log(`Node server listenning on port ${port}`);
});
