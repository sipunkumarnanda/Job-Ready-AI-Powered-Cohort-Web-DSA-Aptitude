import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);



// Bruteforce 
let temp = arr[0]
for(let i=0; i<arr.length; i++){
    if(i == arr.length-1){
        arr[i] = temp
    }else{
        arr[i] = arr[i+1] 
    }
    
}
console.log(arr);