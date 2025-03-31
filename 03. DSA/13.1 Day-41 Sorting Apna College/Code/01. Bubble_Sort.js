// let arr = [4, 1, 5, 2, 3]
let arr = [1,2,3,4,5]

for(let j=0; j<arr.length-1; j++){
    let isSwap = false
    for(let i=0; i<arr.length-j-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp

            isSwap = true
        }
    }

    if(!isSwap){
        console.log("Array is alreday sorted");
        break
    }
}

console.log(arr);