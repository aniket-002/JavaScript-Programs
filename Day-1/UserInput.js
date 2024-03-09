prompt = require("prompt-sync")()

const userName = prompt("Enter the user name");
console.log("Hello"+userName + "!");

const userName1 = prompt("Enter The User-1 Name : ");
const userAge1 = prompt("Enter the user-1 Age : ");

const userName2 = prompt("Enter The User-2 Name : ");
const userAge2 = prompt("Enter the user-2 Age : ");

const userName3 = prompt("Enter The User-3 Name : ");
const userAge3 = prompt("Enter the user-3 Age : ");

// console.log("Name\tAge")
// console.log(userName1 + "\t" + userAge1);
// console.log(userName2 + "\t"+ userAge2);
// console.log(userName3 + "\t" + userAge3);

console.log("Name\t|Age")
console.log("-------------------------")
console.log(userName1 + "\t|" + userAge1);
console.log(userName2 + "\t|"+ userAge2);
console.log(userName3 + "\t|" + userAge3);

