prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("Enter the value of num1 : "));
const num2 = parseFloat(prompt("Enter the value of num2 : "));
const num3 = parseFloat(prompt("Enter the value of num3 : "));

let largestNumber;

if(num1 > num2 && num1 >num3){
    largestNumber = num1;
}
else if(num2 > num3 && num2 > num1){
    largestNumber = num2;
}
else{
    largestNumber = num3;
}

console.log(largestNumber);
