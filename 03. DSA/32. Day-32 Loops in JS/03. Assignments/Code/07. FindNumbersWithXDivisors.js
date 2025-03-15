//    Find Numbers with Exactly X Divisors (Java)

// Description: Find numbers that have exactly X divisors.

// Example 
// Input: X = 3
// Output: 4, 9, 25, 49
// Explanation: These numbers have exactly three divisors.

// Hint: Use prime factorization.



// Q7. print prime number till n 
// let n = 7

// function isPrime(n){
//     if(n < 2) return false
//     if(n === 2) return true
//     if(n % 2 === 0) return false

//     for(let i = 3; i<= Math.sqrt(n) ; i+=2){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log("3 divisors numbers are ");
// for(let i = 1; i<=100; i++){
//     if(isPrime(i)){
//         console.log(i*i);
//     }
// } 








// 4 divisors
// let arr = []
// for(let i=1; i<=100; i++){
//     let count = 0
//     for(let j=1; j<=i; j++){
//       if(i % j === 0){
//         // console.log(`${i} is divisible by ${j}`);
//         count++
//       }
//     //   else{
//     //     console.log(`${i} is not divisible by ${j}`);
//     //   }
//     }
//     // console.log(`Count for ${i} is  : ${count}`);
//     if(count === 4){
//         arr.push(i)
//     }

// }
// console.log(arr);



// Give result for any input 
let num = Number(prompt("Enter the value of X to find numbers that have exactly X divisors: "));

let arr = []
for(let i=1; i<=100; i++){
    let count = 0
    for(let j=1; j<=i; j++){
      if(i % j === 0){
        count++
      }
    }
    if(count === num){
        arr.push(i)
    }

}


arr.length === 0 
    ? console.log(`There are no numbers with exactly ${num} divisors.`) 
    : console.log(`Total numbers with exactly ${num} divisors: ${arr}`);