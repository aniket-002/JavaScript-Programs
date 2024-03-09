prompt = require("prompt-sync")()

const firstNumber = parseFloat(prompt("Enter The First Number : "));
const secondNumber = parseFloat(prompt("Enter the second Number : "));

const addition = firstNumber + secondNumber;
const substraction = firstNumber - secondNumber;
const multiplication  = firstNumber * secondNumber;
const division = firstNumber / secondNumber;


console.log("Addition : "  + addition);
console.log("Substraction : " + substraction);
console.log("Multiplication : " + multiplication);
console.log("Division : "+ division);