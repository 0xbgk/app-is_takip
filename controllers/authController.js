const User = require('../models/User');

const hataYakala = (err) => {

    console.log(err.message, err.code)
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signup_post = async (req, res) => {
    const { email, parola } = req.body;
    //console.log(email,parola);

    try {
        const user = await User.create({ email, parola });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send('hata olustu kullanici olusmadi');
        hataYakala(error);
    }

    // res.send('yeni kullanici olusturuldu');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.login_post = async (req, res) => {
    const { email, parola } = req.body;
    console.log(email, parola);
    res.send('kullanici giris yaptı');
}