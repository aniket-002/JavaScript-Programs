prompt = require("prompt-sync")()

const firstNumber = parseInt(prompt("Enter The FirstNumber : "));
const secondNumber = parseInt(prompt("Enter The SecondNumber : "));


const Mean = (firstNumber + secondNumber) /2;

console.log("The Mean of" + firstNumber + "and" + secondNumber + "is" + Mean);