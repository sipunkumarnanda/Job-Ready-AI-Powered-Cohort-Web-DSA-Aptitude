//5. Abundant Number
// Description: A number is abundant if the sum of its proper divisors is greater than the number itself.
// Example
// Input: 12
// Output: Abundant Numbea
// Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).
// Hint: Use a loop to find proper divisors.

function isAbundant(n){
    // let n = 12
let sum = 0
for(let i = 1 ; i<=n/2; i++){
    if(n % i === 0){
        sum += i
    }
}

sum > n ? console.log("Abundant Number") : console.log("Not Abundant Number");
}

isAbundant(100)