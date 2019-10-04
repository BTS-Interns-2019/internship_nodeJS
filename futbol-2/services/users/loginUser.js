const login = require('../../daos/getUserLogin');

function loginUser(user) {
    return new Promise((resolve, reject) => {
        login(req.body)
        .then((data)=>{
    
        })
        .catch((err) => {
    
        }
    
        );
    });   
}