// let arr = [10, 1, 5, 3, 15,0,-1,-5]
let arr = [5,4,3,2,1]

for(let i=1; i<arr.length; i++){
    while(arr[i-1] > arr[i]){
        let temp = arr[i-1]
        arr[i-1] = arr[i]
        arr[i] = temp

        i--
    }
}

console.log(arr);