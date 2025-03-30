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








//   ----------------------------------------------------------------






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






// --------------------------------------------------------------------








// GCD - Striver 
let n1 = 20 , n2 = 40 , gcd = 0
// for(let i = 1 ; i<=n1 ; i++){
//     if(n1 % i === 0 && n2 % i === 0){
//         gcd = i
//     }
// }
// console.log(`GCD of ${n1} and ${n2} is : ${gcd}`);

//   --------------------------


// for(let i = 1 ; i<= Math.min(n1,n2) ; i++){
//     if(n1 % i === 0 && n2 % i === 0){
//         gcd = i
//     }
// }
// console.log(`GCD of ${n1} and ${n2} is : ${gcd}`);


//  ----------------------------

// for (let i = Math.min(n1, n2); i >= 1; i--) {
//   if (n1 % i === 0 && n2 % i === 0) {
//     console.log(i);
//     break
//   }
// }
