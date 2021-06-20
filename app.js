const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://bgk:test1234@cluster0.ukdeo.mongodb.net/isTakipDB?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000, () => {
        console.log('db baglantisi basarili, server dinleniyor')
    }))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.render('home'));
app.get('/works', (req, res) => res.render('works'));

app.use(authRoutes);

// * cookie olusturma method 1
// app.get('/set-cookie',(req,res)=>{
//     res.setHeader('Set-Cookie','yeni=true');
//     res.send('Cookie olustu');
// });

// * cookie olusturma method 2
app.get('/set-cookies', (req, res) => {
    res.cookie('yeni', false);
    res.cookie('parola', '12345', { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
    res.send('Cookie olustu');
})

// * cookie cagirma method 1
app.get('/get-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies.parola);
    res.json(cookies);
})