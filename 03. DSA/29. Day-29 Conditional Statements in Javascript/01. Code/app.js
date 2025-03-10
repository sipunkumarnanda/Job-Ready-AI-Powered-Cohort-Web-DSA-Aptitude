// Q. Accept a year and check if it is a leap year or not (google to find out what's a leap year)

// let year = Number(prompt("Enter a Year you want to know its an leap year or not : "))

let isLeap = false

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             isLeap = true
//         }
//     }else{
//         isLeap = true
//     }
// }else{
//     isLeap = false
// }

// console.log(isLeap ? "is a leap year" : "Not a leap year");

// Another
// if((year % 4 == 0 && year % 100 != 0)){ // 2020, 2024 etc 
//     console.log("Leap year");
// }else if(year % 400 == 0){    // 1200, 1600, 2000 etc
//     console.log("leap year");
// }else{
//     console.log("No leap year");
// }

// Optimized code 
// if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
//     isLeap = true
// }else{
//     isLeap = false
// }
// console.log(isLeap ? "is a leap year" : "Not a leap year");


// Q2. Shop discount - description on graph
// let ammount = Number(prompt("Enter Ammount : "))
// let discount = 0

// if(ammount >= 0 && ammount <= 5000){
//     discount = 0
// }else if(ammount > 5000 && ammount <= 7000){
//     discount = 5
// }else if(ammount > 7000 && ammount <= 9000){
//     discount = 10
// }else if(ammount > 9000){
//     discount = 20
// }else{
//     console.log("Invalid input");
// }

// console.log(`You have to pay ${ammount - (discount * ammount)/100} after discount`);

// Q3. Electry bill

