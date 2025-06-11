
// Leetcode - 15 3SUM

let arr = [-1, 0, 1, 2, -1, -4]

arr.sort((a,b) => a-b)

let ans = []

for(let i=0; i<arr.length-2; i++){
    for(let j=i+1; j<arr.length-1; j++){
        for(let k=j+1; k<arr.length; k++){
            if(arr[i] + arr[j] + arr[k] == 0){
                ans.push([arr[i], arr[j], arr[k]])
            }
        }
    }
}

console.log(arr);
console.log(ans);

// It is giving all the possible triplets, but as per the question, it requires only unique triplets 
// The current code returns all valid triplets whose sum is zero, but the problem specifically requires only unique triplets—no duplicates, regardless of order