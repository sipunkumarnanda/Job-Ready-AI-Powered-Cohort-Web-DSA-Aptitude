let arr = [4, 1, 5, 2, 3, 0, -1, -2]

let  smallestIdx = 0
for(let i=1; i<arr.length; i++){
    if(arr[i] < arr[smallestIdx]){
        smallestIdx = i
    }
}
console.log(arr[smallestIdx]);