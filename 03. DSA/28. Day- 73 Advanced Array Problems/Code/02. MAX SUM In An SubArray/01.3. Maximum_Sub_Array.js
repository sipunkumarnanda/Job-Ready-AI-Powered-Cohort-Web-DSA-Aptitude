
// // Leetcode - 53  Maximun Sub Array Sum (Brute Force) But Little Optimal


// let arr =  [-2,1,-3,4,-1,2,1,-5,4]
let arr = [1,2,3]

let max = Number.NEGATIVE_INFINITY

for(let i=0; i<arr.length; i++){
    let currSum = 0
    for(j=i; j<arr.length; j++){
         currSum += arr[j]
         max = Math.max(max, currSum)
    }
}

console.log(max);