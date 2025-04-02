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


let targetNum = Number(prompt("Enter the number you want to know present at which index : "))

let index = -1 
for(let i=0; i<arr.length; i++){
    if(arr[i] === targetNum){
        index = i
        break
    }
}
index === -1 ? console.log(`${targetNum} not found`) : console.log(`${targetNum} is present at index ${index}`)