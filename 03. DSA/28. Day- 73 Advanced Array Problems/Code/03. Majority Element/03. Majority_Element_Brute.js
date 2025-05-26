
// Majority Element Brute force 

let arr = [2,2,3,3,1,2]

let n = Math.floor(arr.length/2)

for(let i=0; i<arr.length; i++){
    let count = 0

    for(let j=0; j<arr.length; j++){
        if(arr[i] == arr[j]){
            count++
        }
    }

    if(count >= n){
        console.log(arr[i]);
        break
    }
}


// Time complexity = O(n^2)