
// Leetcode - 11 container with most water 

let height = [1,8,6,2,5,4,8,3,7]

let ans = 0 
let i = 0 , j = height.length-1

while(i<j){
    ans = Math.max(ans , Math.min(height[i], height[j]) * (j-i))
    if(height[i] < height[j]){
        i++
    }else {
        j--
    }
}

console.log(ans);