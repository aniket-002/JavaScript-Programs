prompt = require("prompt-sync")()

const num = parseInt(prompt("Enter the number to check isprime or not"))

let isPrime = true;
if(num <= 1){
    isPrime = false;
}
else{
    for(let i =2;i<=Math.sqrt(num);i++){
        if(num%2==0){
            isPrime = false
            break;
        }
    }
}

if(isPrime){
    console.log(`${num} is prime number` );
}
else{
    console.log(`${num} is not prime number`);
}