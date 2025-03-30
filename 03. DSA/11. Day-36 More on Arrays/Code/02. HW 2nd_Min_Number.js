import promptSync from "prompt-sync";
let prompt = promptSync()

// Find second Max element from an an array
let size = Number(prompt("enter the size of array : "))
let arr = new Array(size)


for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt(`Enter the value at index ${i} : `))
}
console.log(arr);

let small = arr[0]

for(let i=2; i<arr.length; i++){
    if(arr[i]<small){
        small = arr[i]
    }
}
let Ssmall = small
for(let i=0; i<arr.length;i++){
    if(arr[i]>small & arr[i]<Ssmall){
        Ssmall = arr[i]
    }
}
console.log(`Smallest number in array is : ${small}
    Second smallest number in array is : ${Ssmall}`);