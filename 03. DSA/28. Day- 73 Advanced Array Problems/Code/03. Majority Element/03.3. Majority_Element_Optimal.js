
// 169. majority-element  using Moor's Voting Algorithm 

// Optimal


let arr = [2,2,3,3,1,2,2]

let count = 1 , ans = arr[0]

for(let i=1; i<arr.length; i++){
    if(arr[i] == ans){
        count++
    }else{
        count--
    }

    if(count == 0){
        ans = arr[i]
        count = 1
    }
}

console.log(ans);


// Time Complexity O(N)   , Space complexity - O(1) 