prompt = require("prompt-sync")()

const num = parseInt(prompt("Enter the number to check isprime or not"));
console.log(`prime number less than ${num}`);

for(let i = 2;i<num;i++){
    let isPrime = true;
    if(i===2){
        console.log(i);
        continue;
    }
    for(let j = 2; j<=Math.sqrt(i);j++){
        if(i%j===0){
            isPrime = false;
            break;
        }

    }
    if(isPrime){
        console.log(i);
    }

}