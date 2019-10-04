'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //_id is the user id
  
  //login_id is the user email
  login_id: {
    type: String,
    required: true,
  },
  //login_type can be "email" or "facebook" depending on how the user had registered his account
  login_type: {
    type: String,
    required: true,
  },
  //password hash
  password: {
    type: String,
  },
  info: {
    //It contains user name, this allways appear  
    first_name: {
      type: String,
    },
    //If login_type = "facebook" this contains facebook email, if not this field doesn't appear
    facebook_email: {
      type: String,
    },
  },
  //It contains general user settings, it can be null
  settings: Object,
  restore_password_token_link: {
    type: String,
  },
  //It contains the role of special users like "superAdmin", "storyAdmin". It desn't appear for simple users'
  role: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);
