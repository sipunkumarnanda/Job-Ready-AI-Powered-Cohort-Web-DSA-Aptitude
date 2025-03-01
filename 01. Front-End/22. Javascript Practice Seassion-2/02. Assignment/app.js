// Q9. Create an array of 5 numbers and log the sum using .reduce().

let arr = [1,2,3,4,5]

let sum = arr.reduce((acc,curr)=>{
    return acc + curr
},0)

console.log(sum);

//Q10. Explain the difference between undefined, null, and NaN with example. 

console.log(num1);  // Undefined
var num1 = 0;

var num2 = null
console.log(num2);  // null

console.log(12 + undefined);  // NaN


// Sheet-2

// Q11. Write a for loop to print numbers from 10 to 1 in reverse 
for(let i=10 ; i>=1 ; i--){
    console.log(i);
}

//Q12. Use a while loop to print multiple of 3 from 3 to 30. 
let num = 3 
while(num<=30){
    console.log(num);
    num += 3
}

//Q13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
let res = 0
for(let i=1 ; i<=100 ; i++){
    res += i
}
console.log("Sum of 1 to 100 is ",res);

// Using a formula sum = n(n+1)/2
console.log(100*(100+1)/2);

// Q14. create a nested loop to print a star pattern
for(let i=1; i<=5; i++){
    let row=''
    for(let j=1 ; j<=i; j++){
        row += "*"
    }
    console.log(row);
}


// Q15. Use a for...of loop to iterate over the string "Javascript"

let str = "Javascript"
for (const val of str) {
    console.log(val);
}