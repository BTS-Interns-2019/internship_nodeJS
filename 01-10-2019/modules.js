'use strict'

const fs = require('fs');

function ReadFile(file) {
    return new Promise ((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            };
            resolve(data);
        });
    });
};

function WriteFile(file, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        });
    });
}
            
    



module.exports = {
    ReadFile,
    WriteFile,
};