//synchronous or blocking
// line by line execution

//asynchronos or non-blocking
//-line by line exection not guarenteed-- callbacks will fire

const fs = require('fs');
fs.readFile("file.txt",'utf8',(err, data)=>{
    console.log(err,data);
});
console.log("this is a message:");
