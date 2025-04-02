import e from "express";
import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)

for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);

// K times left rotation

// Method - 1 Bruteforce
let k = Number(prompt("Enter the number of positions to rotate the array to the left : "))
k = k % arr.length  // for avoiding unnecessary rotation (if k=2 , arr.len=5, so 2%5 = 2 , 5%5=0 , 6%5=1 , so here we do modulo)






// Method-1 Bruteforce
// for(let j=1 ; j<=k;j++){
//     let temp = arr[0]
// for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = temp
// }
// console.log(arr);







// Method-2 using only one loop And 2 Array (Temp Array)    USING EXTRA SPACE
// let tempArr = new Array(arr.length)

// for(let i=0; i<arr.length; i++){
//     tempArr[i] = arr[(i+k) % arr.length]
// }
// console.log(tempArr);






// Method-3 More Optimized (USING WITHOUT EXTRA SPACE)

// using for loop
// function reverse(arr, strat, end) {
//   let sIndex = strat;
//   let eIndex = end - 1;
//   for (let i = 0; i < (end-strat)/2; i++) {
//     let temp = arr[sIndex];
//     arr[sIndex] = arr[eIndex];
//     arr[eIndex] = temp;
//     sIndex++;
//     eIndex--;
//   }
// }
// reverse(arr,0,k)
// reverse(arr, k, arr.length)
// reverse(arr, 0, arr.length)
// console.log(arr);






// Using while loop 2 pointer algorithm 

function reverse(arr, sIndex, eIndex){
    while(sIndex < eIndex){
        let temp = arr[sIndex];
            arr[sIndex] = arr[eIndex];
            arr[eIndex] = temp;

            sIndex++;
            eIndex--;
    }
}

reverse(arr, 0, k-1)
reverse(arr, k, arr.length-1)
reverse(arr, 0, arr.length-1)
console.log(arr);