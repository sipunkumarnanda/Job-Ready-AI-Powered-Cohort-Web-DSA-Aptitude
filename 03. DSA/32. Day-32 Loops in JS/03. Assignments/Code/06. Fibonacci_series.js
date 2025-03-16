// Q6.  Fibonacci Series using Loop
// Description: Print Fibonacci series up to N terms using a loop.

// Example
// b Input: N = 6
// b Output: 0, 1, 1, 2, 3, 5

// Hint: Use a loop and store previous two numbers.
// let n = Number(prompt("Enter the number : "))
// let n = 10

let a = 0 , b = 1 
console.log(a);
if(n > 1) console.log(b);
let next;

for(let i = 2; i<n; i++){
    next = a + b
    console.log(next);
    a = b
    b = next
}