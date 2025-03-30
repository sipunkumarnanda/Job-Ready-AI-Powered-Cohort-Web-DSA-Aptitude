//   Find the Largest Digit in a Number

// Description: Find the largest digit in a given number.

// Example5
// Input: 5482.
// Output: 9

// Hint: Extract digits using modulo (% 10) and compare.


// let n = 54829
// let copyn = n
// let arr = []

// while (n > 0){
//     arr.push(n%10)
//     n = Math.floor(n/10)
// }

// arr = arr.sort((a,b)=>b-a)
// console.log(`largest digit in ${copyn} = ${arr[0]}`);







// Optimized Approach (Without Sorting)

let n = 5482
let copyn = n
// let arr = []
let largestNum = 0

while (n > 0){
    let digit = n % 10
    if(digit > largestNum) largestNum = digit
    n = Math.floor(n/10)
}

console.log(`largest digit in ${copyn} = ${largestNum}`);