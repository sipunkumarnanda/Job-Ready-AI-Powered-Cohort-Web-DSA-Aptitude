
// Move zeros (leetcode - 283)

let arr = [1,0,2,3,0,4,5,0]
let ans = []
let j = 0 , i = 0

while(j < arr.length){
    if(arr[i] != 0){
        ans[j] = arr[i]
    }else{
        ans[j] = arr[i]
        ans[j+1] = arr[i]
        j++
    }
    i++ , j++
}
console.log(ans);