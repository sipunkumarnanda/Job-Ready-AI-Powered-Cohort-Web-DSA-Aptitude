import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);


// Right rotation by 1 

let temp = arr[arr.length-1]
for(let i=arr.length-1; i>0; i--){
    arr[i] = arr[i-1]
}
arr[0] = temp
console.log(arr);