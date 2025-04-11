// What is string in js 

// String are immutable in nature 

// Strings are basically array of characters - Wrong Statement 
// Strings are sequence of characters 
// String shows behaviour like array (so some people say that its array of characters)





// 01.  String are immutable in nature 
let arr = [10, 20, 30, 40, 50]
console.log(`Before : ${arr}`);
arr[3] = 100
console.log(`After : ${arr}`);
console.log(`So Array are mutable`);


console.log("------------------------------------");


let s = "Sheriyans"
console.log(`Before : ${s}`);
s[2] = 'X'
console.log(`After : ${s}`);
console.log(`So String are Immutable`);

let name = "Sipun"
name = "Akankshya"
console.log(name);   // Akankshya  , Because we are reassigning value here 