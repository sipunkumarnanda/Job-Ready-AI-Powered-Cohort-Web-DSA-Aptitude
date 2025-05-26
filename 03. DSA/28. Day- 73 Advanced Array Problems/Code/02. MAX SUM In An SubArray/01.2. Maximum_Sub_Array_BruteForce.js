
// Leetcode - 53  Maximun Sub Array Sum (Brute Force)

// let arr = [1,2,3,4,5]
let arr = [-2,1,-3,4,-1,2,1,-5,4]

let max = arr[0]
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        let sum = 0
        for(let k=i; k<=j; k++){
            sum = sum+arr[k]
        }
       max =  Math.max(max,sum)
    }
}

console.log(max);