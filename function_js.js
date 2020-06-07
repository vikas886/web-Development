console.log("this is message ");

function greet(name,Greettext=" Greetings from JavaScript "){
    console.log(Greettext + name+" is a good boy");
}

let Greettext=" Good Morning ";
greet("vikas",Greettext);
greet("Rahul",Greettext);
greet("Raman");

let return1=greet("Sanam");
console.log(return1);

function add(a,b,c){
    let d=a+b+c;
    return d;
   
}
console.log(add(2,4,5));