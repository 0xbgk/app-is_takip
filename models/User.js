const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Mail adresini girmeniz zorunludur'],
        unique: true,
        lowercase: true,
        validate:[isEmail, 'Lütfen geçerli bir email adresi giriniz']
    },
    parola: {
        type: String,
        reqired: [true, 'Parolayi girmeniz zorunludur'],
        minlength: [6, 'Parolayi minimum 6 karakter giriniz']
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;