
// Pow(x, n) using recursion 

function pow(x,n){
    if(n == 0) return 1.00
   
    let ans = pow(x, Math.floor(n/2))

    if(n % 2 == 0){
        return ans * ans
    }else{
        return ans * ans * x
    }
}

console.log(pow(2,10));