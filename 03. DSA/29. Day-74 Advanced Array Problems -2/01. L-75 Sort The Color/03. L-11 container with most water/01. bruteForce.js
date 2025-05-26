
// Leetcode - 11 container with most water 

let height = [1,8,6,2,5,4,8,3,7]

let ans = 0

for(let i=0; i<height.length; i++){
    for(let j=i+1; j<height.length; j++){
        ans = Math.max(ans, Math.min(height[i] , height[j]) * (j-i))
    }
}

console.log(ans);


// Here TLE comes 