// convert all 1's to 0 and all 0's to 1 
let arr = [1,0,1,0,1,0]
console.log(arr);
for(let i=0; i<arr.length; i++){
    arr[i] = arr[i] ^ 1
}
console.log(arr);