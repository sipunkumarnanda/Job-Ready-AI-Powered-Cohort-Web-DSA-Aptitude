let arr = [13,46,24,52,20,9]

for(let i=0; i<arr.length; i++){
    let j = i

    while(j >= 0 && arr[j-1] > arr[j]){
        let temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp

        j--
    }
}

console.log(arr);