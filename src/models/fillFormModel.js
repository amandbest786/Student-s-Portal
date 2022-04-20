const mongoose = require('mongoose');

const fillFormSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        trim:true
    },
    fName : {
        type : String,
        required : true
    },
    mName : {
        type : String,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Department : {
        type : String,
        required : true
    },
    Semester : {
        type : String,
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('onlineForm',fillFormSchema);