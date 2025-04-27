
// sum of digits using recursion

function sum(n){
    if(n < 10) return n

    return (n % 10) + sum(Math.floor(n/10))
}

console.log(sum(56321));