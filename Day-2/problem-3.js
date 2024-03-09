prompt = require("prompt-sync")()

const base = parseFloat(prompt("Enter the base value : "));
const exponent = parseFloat(prompt("Enter the exponent value : "));

const result = Math.pow(base,exponent);
console.log(result);

