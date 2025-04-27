
// Recursion by js 

function gcd(a,b){
    if(a == b) return a

    if(a>b) return gcd(a-b, b)
    else return gcd(b-a, a)
}

console.log(gcd(16,24));