// Sum of Even Indexed Fibonacci Numbers

// Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth
// Fibonacci number.

// Example
// Input: N =  4
// Output: 33

// Hint: Use a loop and maintain a sum for even-indexed elements

function printFibonacci(n) {
  let arr = [];
  let a = 0;
  arr.push(a);
  let b = 1 
  if (n > 1) arr.push(b);
  for (let i = 1; i <= n; i++) {
    let next = a + b;
    arr.push(next)
    a = b;
    b = next;
  }
  return arr
}

let n = Number(prompt("enter the number of n "))

let arr = printFibonacci(2*n)

let sum = 0
let even = 2

for(let i = 1; i<= n ; i++){
  // console.log(arr[even]);
  sum += arr[even]
  even+=2
}
console.log(sum);
