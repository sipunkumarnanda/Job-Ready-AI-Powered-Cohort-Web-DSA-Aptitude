

// Find Maximum Sum of Any Sub Array using Kadane's ALgorithm And find the sub array also 

// let arr = [3, -4, 5, 4, -1, 7, -8]
let arr = [-2,-3,4,-1,-2,1,5,-3]

let ansStart = -1 , ansEnd = -1 , start = -1
let max = Number.NEGATIVE_INFINITY
let sum = 0

for(let i=0; i<arr.length; i++){

    if(sum == 0){
         start = i
    }

    sum = sum + arr[i]
    
    if(sum > max){
        max = sum

        ansStart = start, ansEnd = i
    }

    if(sum < 0){
        sum = 0
    }
}

console.log(`Maximum sum of any sub array is : ${max}`);

console.log(`Starting Index of Answer sub array is ${ansStart}
End Index of Answer sub array is ${ansEnd}`);