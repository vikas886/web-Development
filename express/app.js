const express=require('express');
const path = require('path');
const app=express();
const fs = require('fs');
const port=80;
//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));// for serving static files
app.use(express.urlencoded());
//PUG SPECIFIC STUFF
app.set('view engine','pug');//set template engine as pug

app.set('views',path.join(__dirname,'views'));//set the views directory

//ENDIPOINTS
app.get('/',(req,res)=>{
    const cont='im  the best content on web';
   const params={'title': 'PubG is the best GAME','content': cont};
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
    name =req.body.name;
    age =req.body.age;
    gender =req.body.gender;
    address =req.body.address;
    more=req.body.more;
    let outPutToWrite=`the name of the client is ${name},${age} years old ,${gender}, residing at${address}. More about him/her ${more}`;
    fs.writeFileSync('output.txt',outPutToWrite);
    const params={'message': 'Successfull submission'};
    res.status(200).render('index.pug',params);
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`This application started on port ${port}`);
});
