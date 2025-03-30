//  Prime Factors in Java

// Description: Find all prime factors of a number.

// Example/
// Input: 3h
// Output: 2, 3, 5

// Hint: Use division method.

let n = Number(prompt("Enter the number you want to print its prime factors : "))
let copyNum = n

function isPrime(n){
    if(n<2) return false
    if(n===2) return true
    if(n % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(n); i += 2) { 
        if(n % i === 0){
            return false
        }
}
return true
}

console.log(`all prime factors of ${copyNum} are : `);
for(let i = 1 ; i <= copyNum ; i++){
    if(isPrime(i)){
        if(copyNum % i === 0){
            console.log(i);
        }
    }
}