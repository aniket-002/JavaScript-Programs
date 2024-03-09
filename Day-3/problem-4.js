prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("enter the num1 : "));
const num2 = parseFloat(prompt("Enter the num2 : "));
const num3 = parseFloat(prompt("Enter the num3 : "));

let sum = num1+num2+num3;


if(sum%5==0){
    console.log("sum of 3 numbers are divisible by 5");
}else{
    console.log(sum +"\n" + "sum of 3 numbers are not divisible by 5");
}