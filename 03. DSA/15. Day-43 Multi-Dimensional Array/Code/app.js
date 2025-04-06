import prompt_sync from "prompt-sync";
let prompt = prompt_sync()

let size = Number(prompt("Enter the size of array : "))

let arr = new Array(size)

for(let i=0; i<arr.length; i++){
    let innerArraySize = Number(prompt("Enter the size of Inner array " +(i+1)+ " : "))
    arr[i] = new Array(innerArraySize)
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        let element = Number(prompt("Enter element : "))
        arr[i][j] = element
    }
}
console.log(`${arr[0]}
${arr[1]}
${arr[2]}`);

  
// Leftsum and rightsum 
let leftSum = 0
let rightSum = 0
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(i == j){
            leftSum += arr[i][j]
        }
        if(i+j === arr.length-1){
            rightSum += arr[i][j]
        }
    }
}

console.log(leftSum, rightSum);