module.exports.signup_get=(req,res) => {
    res.render('signup');
}

module.exports.signup_post= async (req,res) => {
    const {email, parola} = req.body;
    console.log(email,parola);
    res.send('yeni kullanici olusturuldu');
}

module.exports.login_get=(req,res) => {
    res.render('login');
}

module.exports.login_post= async(req,res) => {
    const {email, parola} = req.body;
    console.log(email,parola);
    res.send('kullanici giris yaptı');
}