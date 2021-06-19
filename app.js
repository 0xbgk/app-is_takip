const express=require('express');

const mongoose=require('mongoose');

const app=express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://bgk:test1234@cluster0.ukdeo.mongodb.net/isTakipDB?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
        .then((result) => app.listen(3000, ()=>{
            console.log('db baglantisi basarili, server dinleniyor')
        }))
        .catch((err)=>console.log(err));

app.get('/', (req,res)=>res.render('home'));
app.get('/works', (req,res)=>res.render('works'));
