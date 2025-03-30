// Sum of two integers

let a = 10;
let b = 20;
console.log(a + b); // Output: 30

// Relation between integers and strings
/*
string + string = string (concatenation)
string + number = string (concatenation)
*/

let s1 = "Hello";
let s2 = "World";
console.log(s1 + s2); // Output: HelloWorld

// string + number = string (concatenation)
console.log("Hello" + 20); // Output: Hello20

// number + number = number (Arithmetic Operation)
console.log(20 + 10); // Output: 30

let num1 = 10;
let num2 = 20;
console.log("Sum of " + num1 + " and " + b + " is " + a + b); // Output: Sum of 10 and 20 is 1020

// Explanation (Step-by-step execution):
// "Sum of 10" + " and " + 20 + " is " + 10 + 20;
// "Sum of 10 and 20 " + " is " + 10 + 20;
// "Sum of 10 and 20 is " + 10 + 20;
// "Sum of 10 and 20 is 10" + 20;
// "Sum of 10 and 20 is 1020";

console.log("Sum of " + num1 + " and " + b + " is " + (a + b)); // Output: Sum of 10 and 20 is 30

console.log(a + b + " is the sum of " + a + " and " + b); // Output: 30 is the sum of 10 and 20


// Type Coercion
console.log(1 + 1);  // Output: 2
console.log(1 + "1"); // Output: 11 (concatenation)

// The `+` operator works in two ways: 
// 1. As an arithmetic operator (addition)
// 2. As a concatenation operator (when used with a string)

console.log(1 - 1);  // Output: 0
console.log(1 - "1");  // Output: 0

// `-` operator only performs subtraction, it does NOT concatenate strings.

console.log(2 * "5"); // Output: 10 (String "5" is converted to number)
console.log(5 / "2"); // Output: 2.5

// Type coercion means JavaScript automatically converts data types 
// based on the operation being performed.


// Swap two variables using three different methods

let var1 = 10;
let var2 = 20;

// Swap using a third variable
// let var3 = var2;
// var2 = var1;
// var1 = var3;
// console.log(var1, var2); // Output: 20 10

// Swap without using a third variable 
// var2 = var1 + var2;  // 10 + 20 = 30
// var1 = var2 - var1;  // 30 - 10 = 20 
// var2 = var2 - var1;  // 30 - 20 = 10
// console.log(var1, var2); // Output: 20 10

// Swap using array destructuring (most efficient way)
[var1, var2] = [var2, var1];
console.log(var1, var2); // Output: 20 10


// Operators and their behavior

// Arithmetic operations 
console.log(a + b);  // Output: 30
console.log(a - b);  // Output: -10
console.log(a * b);  // Output: 200
console.log(a / b);  // Output: 0.5
console.log(a % b);  // Output: 10

console.log(4 % 10); // Output: 4
console.log(10 / 3); // Output: 3.333

// If we don't want a floating-point result, we can use Math.floor()
console.log(Math.floor(10 / 3));  // Output: 3


// Relational operators (>, <, <=, >=)
console.log(10 > 8);  // Output: true
console.log(10 < 8);  // Output: false
console.log(10 >= 8); // Output: true
console.log(10 <= 8); // Output: false

console.log(10 == "10");  // Output: true (checks only value, not type)
console.log(10 === "10");  // Output: false (checks both value and type)


// Logical operators (&& and ||)
console.log(10 > 8 && 9 > 5 && 17 < 7);  // Output: false 
// (all conditions must be true for && to return true)

console.log(10 < 8 || 9 > 5 || 17 < 7);  // Output: true 
// (if at least one condition is true, || returns true)


// Unary operators

// Pre-increment
// let x = 10;
// let y = ++x;
// console.log(x, y);  // Output: x = 11, y = 11

let x = 10;
let y = x++;  // Post-increment
console.log(x, y);  // Output: x = 11, y = 10

let z = 20;
console.log(z++ + ++z);  // Output: 20 + 22 = 42
