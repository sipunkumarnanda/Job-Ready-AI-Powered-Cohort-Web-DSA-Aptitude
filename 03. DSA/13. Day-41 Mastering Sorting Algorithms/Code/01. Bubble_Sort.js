let arr = [5, 3, 1, 9, 7]

for(j=0; j<arr.length-1; j++){
    for(let i=0; i<arr.length-j-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
}
console.log(arr);
