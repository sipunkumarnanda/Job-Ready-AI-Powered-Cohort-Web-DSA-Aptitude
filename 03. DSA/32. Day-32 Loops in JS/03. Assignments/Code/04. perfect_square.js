// Q4. 4. Perfect Square

// Description: A number is a perfect square if it is the square of an integer.

// Example
//Input: 25
//Output: Perfect SquarN
//Explanation: 5 × 5 = 25.

// Hint: Use sqrt(N), check if it’s an integer.

let n = 120
let sqrt = Math.sqrt(n)
console.log(sqrt);
sqrt % 1 === 0 ? console.log("Perfect square") : console.log("Not perfect square");