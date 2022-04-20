const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        trim:true
    },
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Department : {
        type : String,
        required : true
    },
    Semester : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    ConfirmPassword : {
        type : String,
        required : true
   },
   isDeleted : {
       type : Boolean,
       default : false
   }
}, {timestamps : true})

module.exports = mongoose.model('signUpDetail',signupSchema);