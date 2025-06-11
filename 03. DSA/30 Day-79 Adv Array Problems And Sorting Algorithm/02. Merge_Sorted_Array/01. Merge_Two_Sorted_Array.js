
// Merge two sorted array  by using extra space 

let arr1 = [1,2,4,7,8,9]
let arr2 = [2,5,6,8]

let ans = []

let i = 0 , j = 0

while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
        ans.push(arr1[i])
        i++
    }else{
        ans.push(arr2[j])
        j++
    }
}

while(i < arr1.length){
    ans.push(arr1[i])
    i++
}

while(j < arr2.length){
    ans.push(arr2[j])
        j++
}

console.log(ans);