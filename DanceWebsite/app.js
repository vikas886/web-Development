const express=require('express');
const path = require('path');
const app=express();
const fs = require('fs');
const port=8000;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));// for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug');//set template engine as pug

app.set('views',path.join(__dirname,'views'));//set the views directory


//ENDIPOINTS
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
});

//START THE SERVER
app.listen(port,()=>{
    console.log(`This application started on port ${port}`);
});