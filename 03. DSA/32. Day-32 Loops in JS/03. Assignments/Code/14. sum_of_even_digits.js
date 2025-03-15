// Find the Sum of Even Digits in a Number

// Description: Find the sum of all even digits in a given number.

// Example
// Input: 2382
// Output: 14

// Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum.


// let n = 2384
let n = Number(prompt("enter value of n "))
let cpNum = n
let sum = 0

while(n > 0){
    let digit = n % 10
    let chkeven = digit % 2
    if(chkeven === 0){
        sum += digit
    }
    n = Math.floor( n / 10 )
}
console.log(`sum of all even numbers in ${cpNum} is = ${sum}`);