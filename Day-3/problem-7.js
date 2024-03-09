prompt = require("prompt-sync")()

const year = parseInt(prompt("Enter the yaer to check : "));

let isLeapYear = false;

if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0);{
    isLeapYear = true;
}

if(isLeapYear){
    console.log("Is Leap Year");
}
else{
    console.log("Is not Leap Year");
}