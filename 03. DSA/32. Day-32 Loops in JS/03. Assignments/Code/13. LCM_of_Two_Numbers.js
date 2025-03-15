//   Find LCM of Two Numbers

// Description: Find the Least Common Multiple (LCM) of two numbers.

// Example5
// Input: a = 12, b = 1S
// Output: 60

// Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b). 


// find gcd 

function gcd(a,b){
    while(b !==0){
        [a,b] = [b, a%b]
    }
    return a
}


// let a = 12 ,  b = 15
let a = Number(prompt("Enter value of a : "))
let b = Number(prompt("Enter value of b : "))

// let gcdRes = gcd(a,b)

let lcm = (a * b) / gcd(a,b)
console.log(lcm); // 60 