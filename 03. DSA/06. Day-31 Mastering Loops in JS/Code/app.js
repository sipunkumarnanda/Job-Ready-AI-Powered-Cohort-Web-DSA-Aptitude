// break and continue

// break
// for (let i = 1; i <= 15; i++) {
//   if (i == 7) break;
//   console.log("Hello", i);
// }

// Continue
// for (let i = 1; i <= 10; i++) {
//   if (i == 7) continue;
//   console.log("Hello", i);
// }


// while loop (entry control loop)
// let i = 1;
// let n = 10
// while(i <= n){
//     console.log("Hello world");
//     i++
// }

// Q1. print sum of n numbers using while loop

// let i = 1 , n = 10 , sum = 0
// while(i<=n){
//     sum = sum + i
//     i++
// }
// console.log(`sum of 1 to ${n} is ${sum}`);



// -------------------------------------------------------------





// // If someone says, "I want the last 2 digits of a number," then we have to do:
// let n = 1234;
// console.log(n % 100);  // 34

// // If someone says, "I want the last 3 digits of a number," then:
// console.log(n % 1000);  // 234

// // From here, we know that if we want the last 'x' digits of a number, 
// // we put that many zeros (0) after 1.






// ------------------------------------
 

// Q.3 To remove the last digit of a number:
// let num = 1234;
// let result = Math.floor(num / 10); // Removes last digit → 123
// console.log(result);

// // To remove the last 'x' digits of a number:
// // Formula: Math.floor(number / (10^x))

// let num2 = 12345678;
// let x = 3;
// let res2 = Math.floor(num2 / (10 ** x)); // Removes last 3 digits → 12345
// console.log(res2);


// -----------------------------------





// To get the last 'x' digits of a number, use:
// Formula: number % (10^x)

// // Example:
// let n = 123456;
// console.log(n % (10 ** 2));   // Last 2 digits → 56
// console.log(n % (10 ** 3));  // Last 3 digits → 456

// // Rule: Use 10^x (where x = number of last digits needed)



// -------------------------------------------------------




// console.log(2 % 10); // Output: 2 (Remainder when 2 is divided by 10)
// console.log(Math.floor(2 / 10)); // Output: 0 (Integer division result)

// Explanation:
// - When the dividend (2) is smaller than the divisor (10), the remainder will always be the dividend itself.
// - When performing integer division (Math.floor(2 / 10)), the result is 0 because 2 is not large enough to be divided at least once by 10.





// --------------------------------------------------------------------



// Q2. Print sum of a given number 
// let n = Number(prompt("Enter a number : "))   // 4321 = 10
// let res = n
// let sum = 0

// while(res > 0){
//     let rem = res % 10
//     sum = sum + rem
//     res = Math.floor(res / 10)
// }
// console.log(sum);




// Q3. reverse a number . // 123 to 321

// let n = 789
// let rev = 0
// while(n>0){
//     let lDigit = n % 10
//     rev = (rev * 10) + lDigit 
//     n = Math.floor(n/10)
// }
// console.log(rev);



// Q4. Automorphic Number
// let num = Number(prompt("Enter a number : "))
// let copynum = num
// let square = num * num
// let count = 0

// while(num > 0){
//     count++
//     num = Math.floor(num/10)
// }

// // console.log(count);

// if(copynum == square % Math.pow(10, count)){
//     console.log(`${copynum} is a automorphic number`);
// }else{
//     console.log(`${copynum} is not a automorphic number`);
// }


// switch case 
// let n = Number(prompt("Enter a number : "))
// switch(n){
//     case 1 : console.log("monday");
//     break

//     case 2 : console.log("tuesday");
//     break

//     case 3 : console.log("wendensday");
//     break

//     case 4 : console.log("thursday");
//     break

//     default: console.log("mai ta chalunga");
// }

// switch uses to ckeck constant value not expression
// expression n > 5 , 19<n etc 

// ------------------------------------------


// multile cases match 

// let n = Number(prompt("Enter a number : "))
// switch(n){
//     case 1 : 
//     case 2 :
//     case 3 : 
//             console.log("monday");
//             break
    

//     case 4 : 
//     case 5 : 
//     case 6 : 
//             console.log("tuesday");
//             break

//     default: console.log("mai ta chalunga");
// }

// ---------------------------------------

// if we pass true in switch then which case return true it will run 
// if we pass fasle in switch then which case return false it will run
switch(true){
    case 10<9 : console.log("hello");
    break

    case 18>7 && 45>9 : console.log("hey");
    break

    default : console.log("mai ta chalunga");
}



