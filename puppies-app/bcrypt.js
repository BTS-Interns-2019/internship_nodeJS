const bcrypt = require('bcryptjs');

function compare (text, hash) {
    return new Promise ((resolve, reject) => {
        bcrypt.compare(text, hash, function (err, res)  {
            if (err) {
                reject (err);
            };
            resolve (res);
        })
    })
}

module.exports = compare;