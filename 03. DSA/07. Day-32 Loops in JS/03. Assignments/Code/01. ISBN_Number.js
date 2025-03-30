// Q1. 1. ISBN Number
// Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, eachmultiplied by its position (1 to 10), is divisible by 11.

// let n = 471958697
// let arr = []
// while(n > 0){
//     let digit = n % 10
//     arr.push(digit)
//     n = Math.floor(n/10)
// }

// let count = 2
// let sum = 0
// arr.reverse().forEach((elem)=>{
//     console.log(count * elem);
//     sum = sum + (count*elem)
//     count++
// })
// console.log(sum);
// if(sum % 11 == 0) console.log("Valid ISBN")
// else console.log("Invalid ISBN")







// if user give as string 
// let n = "0471958697"
// let sum = 0
// for(let i = 0; i<10; i++){
//     // console.log(n[i]);
//     sum = sum + (parseInt(n[i]) * (i+1))
//     // console.log(parseInt(n[i]) * i);
// }

// if(sum % 11 == 0) console.log("Valid ISBN");
// else console.log("Invalid ISBN");

//


// Usingh Function
function isValidISBN10(n){
    if (n.length !== 10) return "Invalid Number";  

    let sum = 0 ;

    for(let i = 0; i<10; i++){
        let digit = (n[i] === "X") ? 10 : +n[i];
        sum = sum + (digit * (i+1))
    }

   return sum % 11 === 0 ? "Valid ISBN" : "Invalid ISBN"
}

let res = isValidISBN10("0471958697")
console.log(res);



























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