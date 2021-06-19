const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    parola:{
        type:String,
        reqired:true,
        minlength:6
    }
});

const User = mongoose.model('user', userSchema);

module.exports=User;