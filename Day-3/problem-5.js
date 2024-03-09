prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("Enter the value of num1 : "));
const num2 = parseFloat(prompt("Enter the value of num2 : "));
const num3 = parseFloat(prompt("Enter the value of num3 : "));

let smallest,middle,greatest;

if(num1 <= num2 && num1 <= num3){
    smallest = num1;
    if(num2<= num3){
        middle = num2;
        largest = num3;
    }
    else{
        middle = num3;
        largest = num2;
    }
}
else if(num2 <= num1 && num2 <= num3){
    smallest = num2;
    if(num2 <= num3){
        middle = num1;
        largest = num3;
    }
}
else{
    smallest = num3;
    if(num1 <= num2){
        middle = num1;
        largest = num1
    }
}
console.log(smallest,middle,largest);

