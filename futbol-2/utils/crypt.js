const bcrypt = require("bcryptjs");

function compare(plainText, hash) {
    return new Promise((resolve, rej) => {
        bcrypt.compare(plainText, hash, function(err, res) {
            if(err){
                rej(err);
            }
            // console.log(res);
            
            resolve(res)
        });
    })
}

console.log(compare('$2a$05$H8CRnR3n9Q0QqGVb/qJ.HeQDmMhf5.cL36G9WlQTjFS59NMCKgdby', 'pass78465'));

module.exports = compare;