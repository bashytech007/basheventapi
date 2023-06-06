const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lasttname: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true},

password: {
        type:String,
        required:true
    },
confirmpassword: {
        type:String,
        required:true}


})

const User = mongoose.model('User', userSchema)

module.exports = User