
// Merge Two Sorted Array

let arr1 = [2,5,6,0,0,0]    , m = 3
let arr2 = [1,2,3,4,5,6,7]  , n = 7

function mergeSortedArray(arr1, arr2, m , n){

let i = m-1 , j = n-1 , k = m + n - 1

while(i>=0 && j>=0){
    if(arr1[i] > arr2[j]){
        arr1[k] = arr1[i]
        i-- , k--
    }else{
        arr1[k] = arr2[j]
        j-- , k--
    }
}

while(j>=0){
    arr1[k] = arr2[j]
    k--, j--
}
return arr1
}

let ans = mergeSortedArray(arr1, arr2, m, n)
console.log(ans);