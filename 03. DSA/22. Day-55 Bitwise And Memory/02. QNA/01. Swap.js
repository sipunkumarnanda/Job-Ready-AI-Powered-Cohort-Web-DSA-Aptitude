// Swap two integers without uisng third variable 

let a = 5, b = 10
console.log(a, b);

a = a ^ b
b = a ^ b
a = a ^ b

console.log(a, b);