import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);


// With extra space (Bruteforce)
// let arr2 = new Array(arr.length)
// let i = 0 , j = arr.length - 1

// for(let k=0; k<arr.length; k++){
//     if(arr[k] === 0){
//         arr2[i] = arr[k]
//         i++
//     }else if(arr[k] === 1){
//         arr2[j] = arr[k]
//         j--
//     }
// }

// console.log(arr2);


// using 2 pointer 

let i = 0 , j = 0

while(i<arr.length){
    if(arr[i] === 0){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        j++
    }
    i++
} 
console.log(arr);