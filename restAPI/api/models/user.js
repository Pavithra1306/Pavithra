const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
firstName: String,
lastName: String,
contact: Number,
email:String
});

module.exports= mongoose.model('User',userSchema);