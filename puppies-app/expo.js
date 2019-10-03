const createError = require('http-errors')

const express = require('express')

const app = express();
const port = 5000;

 
app.get('/error', (req, res, next) => {
    return next(createError(404, "You shouldn't hit this route"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});