const jwt = require('jwt-simple');
const payload = { name: 'Marlon' };

const token = jwt.encode(payload, 'foo');

console.log(token);
console.log(jwt.decode(token, 'foo'));