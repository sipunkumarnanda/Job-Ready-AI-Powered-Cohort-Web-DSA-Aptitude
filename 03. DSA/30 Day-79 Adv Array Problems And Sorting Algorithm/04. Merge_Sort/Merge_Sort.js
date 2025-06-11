
// Merge sort 

function conqure(arr, f, l, m){
    let temp = new Array(l - f + 1 ).fill(0)
    let i = f , j = m+1  , k = 0
    while(i <= m && j <= l){
        if(arr[i] < arr[j]){
            temp[k] = arr[i]
            k++, i++
        }else{
            temp[k] = arr[j]
            j++, k++
        }
    }

    while(i <= m){
        temp[k] = arr[i]
        i++ , k++
    }
    while(j <= l){
        temp[k] = arr[j]
        j++ , k++
    }

    i = f , k = 0
    while(k < temp.length){
        arr[i] =  temp[k]
        i++, k++
    }
}


function divide(arr, f, l){
    if(f >= l) return

    let mid = Math.floor((f+l)/2)

   divide(arr, f, mid)
   divide(arr, mid+1, l)
   conqure(arr, f, l, mid)
}


let arr = [10,7,8,2,19,69,45,8]

divide(arr, 0, arr.length-1)

console.log(arr);