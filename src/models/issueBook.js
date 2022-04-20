const mongoose = require('mongoose');

const issueBookSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    Department : {
        type : String,
        required : true
    },
    issuingDate : {
        type : String,
        required : true
    },
    BookList : {
        type : String,
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('issueBook',issueBookSchema);