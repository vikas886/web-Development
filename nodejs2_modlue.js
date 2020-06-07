const fs=require('fs');
let text=fs.readFileSync("file.txt","utf8");
text=text.replace("content","vikas");
console.log("the file is:")
console.log(text);

console.log("Creating new file:")
fs.writeFileSync("vikas.txt",text);