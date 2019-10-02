'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(200);
    res.send('You ar now connected');

    // Your methods here
})

// and here
app.listen(port, 'localhost', () => {
    console.log('Server Running on port');
});
