import promptSync from "prompt-sync";
let prompt = promptSync()

// let size = Number(prompt("Enter the size of array : "))
// let arr = new Array(size)

// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt(`Enter the value at index ${i} : `))
// }
// console.log(arr);


// // sum of an array elements 
// let size = Number(prompt("Enter the size of array : "))
// let arr = new Array(size)

// let sum = 0
// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt(`Enter the value at index ${i} : `))
//     sum += arr[i]
// }
// console.log(arr);
// console.log(`sum of array's elements is : ${sum}`);



// //  Max element from the array 
// let size = Number(prompt("Enter the size of array : "))
// let arr = new Array(size)

// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt(`Enter the value at index ${i} : `))
// }
// console.log(arr);

// let max = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i] >= max){
//         max = arr[i]
//     }
// }
// console.log(`largest element in give array is : ${max}`);




// MIN element from the array
let size = Number(prompt("Enter the size of array : "))
let arr = new Array(size)

for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);

let min = arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i] <= min){
        min = arr[i]
    }
}
console.log(`smallest element in give array is : ${min}`);
