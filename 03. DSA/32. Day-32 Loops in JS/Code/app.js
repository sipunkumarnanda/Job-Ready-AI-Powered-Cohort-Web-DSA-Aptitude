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
// function isValidISBN10(n){
//     if (n.length !== 10) return "Invalid Number";  

//     let sum = 0 ;

//     for(let i = 0; i<10; i++){
//         let digit = (n[i] === "X") ? 10 : +n[i];
//         sum = sum + (digit * (i+1))
//     }

//    return sum % 11 === 0 ? "Valid ISBN" : "Invalid ISBN"
// }

// let res = isValidISBN10("0471958697")
// console.log(res);




// Q2. Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder 


// brute force 

// let a = 48 , b = 18
// let arr = []
// for(let i = 1 ; i<=a; i++){
   
//     if(a % i === 0){
//         arr.push(i)
//     }
// }

// let arr2 = []
// for(let i = 1 ; i<=b; i++){
   
//     if(b % i === 0){
//         arr2.push(i)
//     }
// }

// let cmnFact = arr.filter((num)=>{
//     return arr2.includes(num)
// })


// // largest common factors 
// let hcf = cmnFact.sort((a,b) => b - a)
// console.log(`HCF of ${a} and ${b} is : ${hcf[0]}`);



// // Way - 1 
// function gcd(a , b){
//     while(a !== b){
//         if(a > b){
//             a = a - b
//         }else{
//             b = b - a
//         }
//     }
//     // return a
//     return b  // we can return anything a ya b , because we break loop in a === b so both are same 
// }

// // console.log(gcd(48,108));
// console.log(gcd(11,7));

// function gcd(a,b){
//     while(b !== 0){
//         [a,b] = [b, a % b]
//     }
//     return a
// }

// console.log(gcd(18,48));

// function gcd(a,b){
    
//     if(b === 0){
//         return a
//     }else{
//         return gcd(b, a % b)
//     }
// }
// console.log(gcd(48,108));