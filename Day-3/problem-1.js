prompt = require("prompt-sync")()

const age = parseInt(prompt("Enter the Age : "));

const isLegalAge = age >=18;

if(isLegalAge){
    console.log("you have legal age");
}
else{
    console.log("you have not legal age");
}