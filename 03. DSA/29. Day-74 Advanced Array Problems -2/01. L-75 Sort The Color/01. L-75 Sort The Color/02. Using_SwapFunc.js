
// Sort the color (Leetcode - 75)

let arr = [1,1,0,1,0,2,1,0,2,0,1,2,1]

let swap = function(arr, a, b){
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


let i = 0, j=0, k = arr.length-1

while(i <= k){
    if(arr[i] == 0){
       swap(arr, i++, j++)
    }else if(arr[i] == 2){
       swap(arr, i, k--)
    }else{
        i++
    }
}

console.log(arr);

// output -     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2]