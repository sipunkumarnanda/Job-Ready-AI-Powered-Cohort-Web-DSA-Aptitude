let arr = [4, 1, 5, 2, 3]

for(let i=1; i<arr.length; i++){
   let curr = arr[i]
   let prev = i-1

   while(prev >= 0 && arr[prev] > curr){
    arr[prev+1] = arr[prev]
    prev--
   }
   arr[prev+1] = curr
}

console.log(arr);