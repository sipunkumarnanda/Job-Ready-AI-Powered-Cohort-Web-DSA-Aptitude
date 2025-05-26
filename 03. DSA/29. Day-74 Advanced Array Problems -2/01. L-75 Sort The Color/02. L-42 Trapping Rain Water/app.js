
// Leetcode - 42 Trapping Rain Water

let height = [4,2,0,3,2,5]

let left = [height[0]]
let right = new Array(height.length).fill(0)

right[height.length-1] = height[height.length-1]

let leftMax = left[0] , rightMax = right[height.length-1]

for(let i=1; i<height.length; i++){
    if(height[i] > leftMax){
        leftMax = height[i]
        left.push(leftMax)
    }else{
        left.push(leftMax)
    }
}

for(let i=height.length-2; i>=0; i--){
    if(height[i] > rightMax){
        rightMax = height[i]
        right[i] = rightMax
    }else{
         right[i] = rightMax
    }
}

// console.log(left);
// console.log(right);

let ans = 0
for(let i=0; i<height.length; i++){
     ans += Math.min(left[i] , right[i]) - height[i]
}

console.log(ans);
