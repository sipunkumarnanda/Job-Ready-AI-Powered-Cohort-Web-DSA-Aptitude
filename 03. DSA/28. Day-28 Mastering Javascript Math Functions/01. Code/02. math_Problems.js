// Q1. calculate compound intrest
// let p = Number(prompt("Enter principle"))
// let r = Number(prompt("Enter rate of intrest"))
// let t = Number(prompt("Enter time"))

// let ammount = p * Math.pow(1 + (r/100),t)
// let ci = ammount - p
// console.log(ci);


// Q2. Generate OTP
// console.log(Math.floor(Math.random()*9000 + 1000));
// console.log(Math.random());


// Q3. Area of triangle by heron's formula ? 
// let a = Number(prompt("Enter first number : "))
// let b = Number(prompt("Enter second number : "))
// let c = Number(prompt("Enter third number : "))

// //  s = a+b+c / 2  (where s is semiperimeter)
// // = srt of s * (s-a) * (s-b) * (s-c)

// if(a+b <= c || a+c <= b || b+c <= a){
//     console.log("Invalid triangle");
// }else{
// let s = (a + b + c) / 2
// let area = Math.sqrt(s * (s-a) * (s - b) * (s - c))
// console.log("area of triangle is : ", area.toFixed(2));
// }


//Q4. circumference of circle 
let r = Number(prompt("Enter a number : ")) 
console.log((2 * Math.PI * r).toFixed(4));