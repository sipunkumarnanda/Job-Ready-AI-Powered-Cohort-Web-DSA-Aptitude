
// GCD Optimal recursion

function gcd(a,b){
    if(b == 0) return a
    return gcd(b, a%b)
}

console.log(gcd(1,7));