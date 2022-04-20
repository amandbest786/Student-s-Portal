const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/College_Project", {useNewUrlParser: true})
.then(() => console.log('Successfully connected to mongoDB 27017'))
.catch(err => console.log('Connection error'))