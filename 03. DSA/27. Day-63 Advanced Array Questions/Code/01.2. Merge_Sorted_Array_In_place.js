
// Merge two sorted array in-place 

// let arr1 = [1,2,3,0,0,0] , m = 3
// let arr2 = [2,5,6] , n = 3

let arr1 = [5,6,0,0] , m = 2
let arr2 = [1,2] , n = 2

let i = m-1 , j = n-1  , k = m+n-1

while(i>=0 && j>=0){
    if(arr1[i]>arr2[j]){
        arr1[k] = arr1[i]
        k--, i--
        console.log("i= ",i, "k= ",k);
    }else{
        arr1[k] = arr2[j]
        j--, k--
        console.log("j= ",j,"k= ", k);
    }
}

while(j>=0){
    arr1[k] = arr2[j]
    j-- , k--
}

console.log(arr1);