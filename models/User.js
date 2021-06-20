const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Mail adresini girmeniz zorunludur'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Lütfen geçerli bir email adresi giriniz']
    },
    parola: {
        type: String,
        reqired: [true, 'Parolayi girmeniz zorunludur'],
        minlength: [6, 'Parolayi minimum 6 karakter giriniz']
    }
});

userSchema.pre('save', async function (next) {

    // console.log('kaydedilmeden once calisacak', this);
    const salt = await bcrypt.genSalt();
    this.parola = await bcrypt.hash(this.parola, salt);
    next();
});

userSchema.statics.login = async function (email, parola) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(parola, user.parola);
        if (auth) {
            return user;
        }
        throw Error('parola-hatası');
    }
    throw Error('email-hatası');
}

// userSchema.post('save', function (doc, next) {

//     console.log('kaydedildikten sonra calisacak', doc);
//     next();
// });

const User = mongoose.model('user', userSchema);

module.exports = User;