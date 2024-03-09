prompt = require("prompt-sync")()

const yearOfBirth =parseInt(prompt("Enter the year of birth : "));

const currentYear = new Date().getFullYear();

const age = currentYear -yearOfBirth;
console.log(age);

if(age >= 16){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible");
}
