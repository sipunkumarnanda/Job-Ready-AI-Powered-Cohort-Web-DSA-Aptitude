// Q3. 3. Harshad Number
// Description: A number is a Harshad number if it is divisible by the sum of its digits.
// Example : 
// Input: 19
// Output: Harshad Numbea
// Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9
// Hint: Extract digits using modulo (%) and integer division (//).


let n = 216
let copy = n
let sum = 0 ;
while(n > 0){
    let digit = n % 10
    sum += digit
    n = Math.floor(n / 10)
}

copy % sum === 0 ? console.log("Harshad Number") : console.log("Not a Harshad Number");