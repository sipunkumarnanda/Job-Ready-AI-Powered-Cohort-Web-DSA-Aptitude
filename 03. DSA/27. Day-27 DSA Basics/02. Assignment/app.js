// Javascript Interview Question 

//Q1. 
// let i = 11;
// i = i++ + ++i;  // 11 + 13 = 24
// console.log(i); // 24

//Q2. 
// let a = 11, b = 22, c;   // current value of   a=12, 13         b= 23,  24          c= 
// c = a+b+ a++ + b++ + ++a + ++b;
//c= 11+22 + 11 + 22 + 13 + 24 = 103


// console.log("a = ", + a); // 13
// console.log("b = ", + b); // 24
// console.log("c = ", + c);  // 103

//Q3. 
// let i = 0   // Current value - 1 ,0 , 1 , 0
// i = i++ - --i + ++i - i--
// //  0 - 0 + 1 - 1
// console.log(i);  // 0

// Q4. 
// let b = true
// b++
// console.log(b); // 2

// Q5. 
// let i = 1, j = 2 , k = 3 // current value of i - 0,          , j- 1,            , k- 2       
// let m = i-- - j-- - k--
// // m = 1 - 2 - 3 = -4
// console.log("i = "+ i); // 0
// console.log("j = "+ j); // 1
// console.log("k = "+ k); // 2
// console.log("m = "+ m); // -4

// Q6.
// let a = 1 , b = 2    // Curr value = a - 2,1               , b  - 1,2,      
// console.log(--b - ++a + ++b - --a);  // 0
// // 1 - 2 + 2 - 1 = 0

// Q.7
// let i = 19 , j = 29 , k   // curr value of i = 18, 19, 18,19,      , j= 28, 29, 28, 29
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++
// // = 19 - 18 + 28 - 29 + 18 - 29 + 19 - 28 = -20
// console.log("i = "+ i); // 19
// console.log("j = "+ j); // 29
// console.log("k = "+ k); // -20

//Q.8
// let i = 11
// let j = --(i++)  // SyntaxError: Invalid left-hand side expression in prefix operation

//Q.9
// let m = 0, n = 0  // curr value of m = -1, -2       n = -1 , -2 
// let p = --m * --n * n-- * m--
// // p = -1 * -1 * -1 * -1 = 1
// console.log(p);  // 1

// Q.10 
// let a = 1  // curr value of a  = 2, 3 , 2 , 1
// a = a++ + ++a * --a - a--
// // = 1 + 3 * 2 - 2 = 5
// console.log(a); // 5
// console.log(1 + 3 * 2 - 2);  // It follow BODMAS rule 


// Q11. 
// let a = 11++  // SyntaxError: Invalid left-hand side expression in postfix operation
// console.log(a);  


// Q12.
let i = 0 , j = 0  // curr value of   i = -1 , 1   , j = 1 , 2
console.log(--i * i++ * ++j * j++);  // 1
// -1 * -1 * 1 * 1 = 1 