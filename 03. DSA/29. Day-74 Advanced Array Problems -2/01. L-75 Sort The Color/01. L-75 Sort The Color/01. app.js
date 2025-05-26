
// Sort the color (Leetcode - 75)

let arr = [1,1,0,1,0,2,1,0,2,0,1,2,1]

let i = 0, j=0, k = arr.length-1

while(i <= k){
    if(arr[i] == 0){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        j++
    }else if(arr[i] == 2){
        let temp = arr[i]
        arr[i] = arr[k]
        arr[k] = temp
        k--, i--
    }
    i++
}

console.log(arr);

// output -     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2]