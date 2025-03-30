import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);


// Method-1
// let arr2 = new Array(arr.length)
// let index = 0
// for(let i=arr.length-1; i>=0; i--){
// //    arr2[arr2.length - i-1] = arr[i]
//    arr2[index] = arr[i]
//    index++
// }

// console.log(arr2);


// Method-2  (with out extra space)
// let arr2 = new Array(arr.length)

// let sIndex = 0
// let eIndex = arr.length - 1

// for(let i=0 ; i<arr.length/2; i++){
//     let temp = arr[i]
//     arr[sIndex] = arr[eIndex]
//     arr[eIndex] = temp 
//     sIndex++
//     eIndex--
// }

// console.log(arr);


// Method - 3  (2 pointer algorithm)

let i = 0 , j = arr.length - 1

while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);

