let arr = new Array(10).fill(0)

console.log(arr);

arr[8] = arr[8] + 1
arr[2] = arr[2] + 1
arr[8] = arr[8] + 1
arr[2] = arr[2] + 1

console.log(arr);

for(let i=0; i<arr.length; i++){
    arr[i] = arr[i] + 1
}

console.log(arr);