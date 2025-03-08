// Sum of two integer

let a = 10 
let b = 20 
console.log(a+b);

// Relation between integer and string
/*
string + string = string (concatenation)
string + int = string(concatenation)
*/

let s1 = "Hello"
let s2 = "World"
console.log(s1 + s2);

// string + int = string(concatenation)
console.log("Hello" + 20); // Hello20

// int + int = int (Arithmatic Operation)
console.log(20 + 10); // 30 

let num1 = 10
let num2 = 20
console.log("Sum of "+num1 +" and "+b +" is "+ a+b); // Sum of 10 and 20 is 1020
// Solution step by step 
// "Sum of 10" +" and "+b +" is "+ a+b;
// "Sum of 10 and " +b +" is "+ a+b;
//"Sum of 10 and 20 " +" is "+ a+b;
// "Sum of 10 and 20 is " + a + b;
// "Sum of 10 and 20 is 10" + b;
// "Sum of 10 and 20 is 1020;

console.log("Sum of "+num1 +" and "+b +" is "+ (a+b)); // Sum of 10 and 20 is 30

console.log(a+b +" is sum of "+a+ " and "+b); // 30 is sum of 10 and 20



// type coercison
console.log(1+1);  // 2
console.log(1+"1"); // 11 concatenation
// + Operator works in 2 type one is addition(Arithmatic Operation) and another is concatenation 

console.log(1-1);  // 0 
console.log(1 - "1");  // 0 
// - operator only substract things 

// Type coercison mean operator ko dekh kar type se deal karna is called type coercison 

console.log(2 * "5"); // 10 
console.log(5 / "2"); // 2.5

// Accept and print the answer 

// let age = Number(prompt("Enter your age : "))
// console.log(age);

// Swap 2 variable via 3 methods 

let var1 = 10;
let var2 = 20;

// Swap by using 3rd variable
// let var3 = var2
//     var2 = var1
//     var1 = var3
//     console.log(var1, var2);

// Swap without usinh any 3rd variable 
// var2 = var1 + var2  // 10 + 20 = 30
// var1 = var2 - var1  // 30 - 10 = 20 
// var2 = var2 - var1 // 30 - 20 = 10
// console.log(var1 , var2);

// Swap without using 3rd variable 


[var1, var2] = [var2 , var1];
console.log(var1, var2);


// Operators and their questions

// Arithmetic operation 
console.log(a+b);  // 30
console.log(a-b);  // -10
console.log(a*b);  // 200
console.log(a/b);  // 0.5
console.log(a%b);  // 10

console.log(4 % 10); // 4
console.log(10/3); // 3.333
// int / int = float , if we dont want float then we can use Math.floor(10/3)
console.log(Math.floor(10/3));  // 3


// Relation operator (>, < , <=, >=)
console.log(10>8);  // true
console.log(10<8);  // false
console.log(10>=8); // true
console.log(10<=8);  // false

console.log(10 == "10");  // true Here check only value 
console.log(10 === "10");  // fasle Here check both value and type

// Logical operator (&& and ||)