import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);

let max = Math.max(arr[0], arr[1])
let sMax = Math.min(arr[0], arr[1])

// console.log(max,sMax);

for(let i = 2; i<arr.length; i++){
    if(arr[i] > max){    // Here, arr[i] is greater, meaning the current value of max is smaller than arr[i],  so we need to update sMax (second max) before updating max.
        sMax = max
        max = arr[i]
    }else if(arr[i] > sMax  &  arr[i] != max){
        sMax = arr[i]
    }
}
console.log(`largest elemet in array is : ${max}`);
console.log(`second largest elemet in array is : ${sMax}`);  

// [ 0, 1, 5, 4, 2 ]