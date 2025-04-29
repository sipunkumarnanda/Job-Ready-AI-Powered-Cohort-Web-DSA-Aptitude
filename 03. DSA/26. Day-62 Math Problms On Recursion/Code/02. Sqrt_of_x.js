
// leetcode - 69. Sqrt(x)

function sqrt(n){
    let i =1
    for( ; i*i <= n; i++){
        if(i*i == n){
            return i
        }
    }
    return i-1
}

console.log(sqrt(49)); 