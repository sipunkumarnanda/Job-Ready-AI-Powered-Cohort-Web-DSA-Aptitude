// Neon Number

// Description: A number where the sum of digits of its square equals the
// number itself.

// Example(
// Input:  9
// Output: Neon Numbe;
// Explanation: 9² = 81, sum of digits = 9.

// Hint: Find square, sum digits, compare.

function checkNeonNumber(n){
// let n = 1
let sqr = n * n 
let sum = 0

while(sqr > 0){
    let digits = sqr % 10
    sum = sum + digits
    sqr = Math.floor(sqr/10)
} 
   return n === sum ? "neon number" : "Not a neon number" 
}


console.log(checkNeonNumber(1));