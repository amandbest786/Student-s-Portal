const mongoose = require('mongoose');

const writeToUsSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
   concern : {
       type : String,
       required : true
   }
}, {timestamps : true})

module.exports = mongoose.model('writeToUs',writeToUsSchema);