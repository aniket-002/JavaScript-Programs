prompt = require("prompt-sync")()

const number = parseInt(prompt("Enter the number"));

if(number%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}
