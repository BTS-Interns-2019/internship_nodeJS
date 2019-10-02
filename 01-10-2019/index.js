'use strict'
const request = require('./requests')
function get(){
    request("get","/")
}
function post(){
    request("post","/")
}  
function put(){
    request("put","/")
} 
function del(){
    request("delete","/")
} 
get()
post()
put()
del()
