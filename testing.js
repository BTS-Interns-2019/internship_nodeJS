// Erick Israel Vazquez
function isNum(num) {
  return new Promise((resolved, reject) => {
    if (typeof num !== 'number') {
      reject(num);
    } else {
      resolved(num);
    }
  });
}

isNum(20).then((res) => {
  console.log(res, 'is a number');
}).catch((err) => {
  console.log(err, 'is not a numebr');
});


// Hector Sotoo
const http = require('http');

const promise = new Promise((resolved, reject) => {
  const data = this.http.get(url)
  if (!data) {
    reject(new Error('Incorrect data Null object'));
  }
  resolved(data);
});

promise.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

const promise = new Promise((resolved, reject) => {
  resolved('Fulfilled! Success');
});

promise.then((result) => {
  console.log(result)
})


// Cristian
new Promise(function (res,rej) {
  rej('ALGO');
}).catch(function (res) {
  console.error(res);
});

new Promise(function (res,rej) {
  res('SIMON');
}).then(function (R) {
  console.log(R);
});

// Luis Carlos
p = new Promise((resolve, reject) => {
  reject('hubo un error');
});

p.catch((err) => {
  console.log(err);
});

p = new Promise((resolve, reject) => {
  resolve('salio bien');
});

p.then((v) => {
  console.log(v);
});

// Urbano
const promise = new Promise(function(resolve, reject) {
  getDBdata();
});

promise()
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log('we're having problems getting the information)
});

const promise = new Promise(function(resolve, reject) {
  resolve('You have a response');
});

promise.then(data => console.log(data));


// Emmanuel
const holis = new Promise((resolve, reject) => {
  console.log('holis');
  throw(Error: 'Errorcito')
});

holis.then((x) => {})
.catch((err) => { console.log(err)});

const rana = new Promise((resolve, reject) => {
  console.log('brought');
  resolve('ujuuuu!');
});

rana.then((x) => {console.log(x)});


// Estefania
let errores = new Promise((resolve, reject) => {
  throw Error('error');
})
.catch();

let correct = new Promise((resolve, reject) => {
  correct.resolve("All it's correct");
})

correct.then((result) => {
  console.log(result)
})


// Ricardo
new Promise((resolve, reject) => {
  let varL = 1;
  if (varL == 0) {
    resolve('Bien');
  }
  reject('mal, hay un error');
})
.then((data) => {
  console.log(data);
})
.catch((data) => {
  console.log(data);
});

// Miguel Angel
new Promise((resolve, reject) => {
  console.log('Inicio');
  reject('Error');
})
.catch((error) => {
  console.log('Error:', error)
});

new Promise((resolve, reject) => {
  console.log('Inicio');
  resolve('Bien');
})
.then((msg) => {
  console.log('Termina:', msg)
});


// Marlon
const x = 5;
let promise = new Promise((resolve, reject) => {
  if (x < 10) {
    reject('Error');
  }
  resolve('Numero de dos o mas digitos ' + x);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

const x = 2;
let promise = new Promise((resolve, reject) => {
  if (x < 0) {
    reject('Error = Negative Number');
  }
  resolve('Numero correcto ' + x);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});