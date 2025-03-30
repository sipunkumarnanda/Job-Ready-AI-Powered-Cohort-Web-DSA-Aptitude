if(10<9 || 10<7){
    console.log("Hello world");
}else if(18>5){
    console.log("Mai ta chal rha huu");
}else{
    console.log("Mai ta chalunga");
}

// Here if needs a boolean value true or false 
// Unme se koi ek hi block execute hota hai

// Q1. accept two numbers and print the greatest between them .
// let a = Number(prompt("Enter number a : "))
// let b = Number(prompt("Enter number b : "))

// if(a>b){
//     console.log(`a is greater then b where a is ${a} and b is ${b}`);
// }else if(b>a){
//     console.log(`b is greater then a where a is ${a} and b is ${b}`);
// }else{
//     console.log(`a and b are equal where a is ${a} and b is ${b}`);
// }

// Q3. accept an integer and check whether it is an even number or odd
// let num = Number(prompt("Enter number a : "))
// console.log(num);
// if(num % 2 === 0){
//     console.log(`Entered number is an even number which is ${num}`);
// }else{
//     console.log(`Entered number is an odd number which is ${num}`);
// }

// Q4. accept name and age from the user . check if the user is a valid voter or not.
// let name = prompt("Enter your name : ")
// let age = Number(prompt("Enter your age : "))

// if(age >= 18){
//     console.log(`Hello ${name} your age is ${age} and you are eligible for voting`);
// }else{
//     console.log(`Sorry ${name} you are not eligible for voting because you are not 18 `);
// }

// Q5. accept three number and print the greatest among them
let num1 = Number(prompt("Enter first number : "))
let num2 = Number(prompt("Enter second number : "))
let num3 = Number(prompt("Enter third number : "))

if(num1>num2 & num1>num3){
    console.log(`num1 = ${num1} is greatest among all three numbers where num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
}else if(num2>num1 & num2>num3){
    console.log(`num2 = ${num2} is greatest among all three numbers where num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
}else{
    console.log(`num3 = ${num3} is greatest among all three numbers where num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`);
}