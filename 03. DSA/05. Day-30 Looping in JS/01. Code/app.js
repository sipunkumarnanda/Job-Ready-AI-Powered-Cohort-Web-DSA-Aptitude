// // Q1. accept an integer and print hello worls n times

// let n = Number(prompt("Enter the value of n : "))

// let i;
// for(i=1; i<=n; i++){
//     console.log("Hello world");
// }
// console.log("fail at " +i);
// // If input as string - its NaN so its print     fail at 1 


// // Optimized code 
// if(isNaN(n)){
//     console.log("invalid input");
// }else{
// let i;
// for(i=1; i<=n; i++){
//     console.log("Hello world");
// }
// console.log("fail at " +i);
// }




// //Q2. print natural number upto n 

// // natural number mean - A natural number is a number that is used for counting and ordering things. These numbers start from 1 and continue indefinitely in a sequence (1, 2, 3, 4, 5, ...). Natural numbers do not include fractions, decimals, or negative numbers.

// let n = Number(prompt("Enter value of n : "))
// let num = ""
// for(let i = 1 ; i <= n ; i++){
//     num += i + " "
// }
// console.log(num);

// Output - 1 2 3 4 5 6 7 8 9 10 


// // Q3. reverse for loop print n to 1 
// let n = Number(prompt("Enter value of n : "))
// let num = ""
// for(let i = n ; i>=1 ; i--){
//     num += i + " "
// }
// console.log(num);
// // // Output -  10 9 8 7 6 5 4 3 2 1 




// // Q4. take number as input and print its table
// let n = Number(prompt("Enter the number you want to print its table : "))

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`${n} * ${i} = `, n*i);
// }




// // Q5. Sum upto n terms 
// let n = Number(prompt("Enter value of n : "))
// let sum = 0
// for(let i = 1 ; i <= n ; i++){
//     sum += i
// }
// console.log(`Sum upto 1 to ${n} is = `,sum);

// // using formula sum = (n * (n + 1)) / 2
// console.log(`Sum upto 1 to ${n} is = `,(n * (n + 1)) / 2);




// // Q6. factorial of n 

// // Defination : Factorial of a number (n!) is the product of all natural numbers from 1 to n. It is represented as: n!=n×(n−1)×(n−2)×...×1

// let n = Number(prompt("Enter the number you want to know its factorial : "))
// let fact = 1
// for(let i = n ; i >= 1 ; i--){
//     // fact = fact * i
//     fact *= i
// }
// console.log(`factorial of ${n} is = ${fact}`);




// //Q7.  print the sum of all even numbers and odd numbers in a range seperately

// let start = Number(prompt("Enter start number : "))
// let end = Number(prompt("Enter end number : "))

// if(start > end){
//     [start , end] = [end, start]
// }

// let evensum = 0
// let oddsum = 0
// for(let i = start ; i<= end ; i++){
//     if(i % 2 == 0){
//         evensum += i
//     }else{
//          oddsum += i 
//     }
// }

// console.log(`sum of even numbers between ${start} to ${end} are : ${evensum}`);
// console.log(`sum of odd numbers between ${start} to ${end} are : ${oddsum}`);

// Q8. prints all the factors of a number 

// let num = Number(prompt("Enter a number you want to know its factors : "))
// let factors = ""
// for(let i = 1 ; i <= num ; i++){
//     if(num % i == 0){
//         factors += i + " "
//     }
// }
// console.log(`factors of ${num} are : ${factors}`);

// // n the given code, the for loop runs from 1 to num, which is unnecessary.Since a number N cannot have factors greater than N/2 (except N itself), we can optimize the loop to run only till N/2, reducing execution time.

// // so we can optimize it by n/2
// // we can run loop half times here 

// let num = Number(prompt("Enter a number you want to know its factors : "))
// let factors = ""
// for(let i = 1 ; i <= num/2 ; i++){
//     if(num % i == 0){
//         factors += i + " "
//     }
// }
// console.log(`factors of ${num} are : ${factors}${num}` ); 


// Q.9 prime number checker 
// let n = Number(prompt("Enter a number : "))
// let isPrime = true
// // for(let i = 2 ; i < n ; i++){
//     for(let i = 2 ; i <= n/2 ; i++){
//     if(n % i == 0){
//         isPrime = false
//         break
//     }
// }

// if(isPrime){
//     console.log("prime number");
// }else{
//     console.log("not a prime number");
// }


// best approach square root 
//There is a mathematical principle that states:
// "If a number N is divisible by any integer between 2 and √N, then it is not a prime number. If no such divisors are found, then the number is prime."
// If a number is not divisible by 2, it won't be divisible by any even number since all evens are multiples of 2.

let n = Number(prompt("Enter a number : "));

let isPrime = isPrimeCheck(n);

if (isPrime) console.log("prime number");
else console.log("not a prime number");

function isPrimeCheck(n) {
    if(n <= 1) return false
    if(n == 2) return true
    if(n % 2 == 0) return false

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false
  }
  return true
}