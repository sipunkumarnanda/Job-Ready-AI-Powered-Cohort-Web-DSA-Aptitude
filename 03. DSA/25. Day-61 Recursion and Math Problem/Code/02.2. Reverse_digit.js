
// Reverse the number 

function reverse(n){
    if(n === 0) return 0

    return ((n % 10) * Math.pow(10, Math.floor(Math.log10(n)))) + reverse(Math.floor(n/10))
}

console.log(reverse(198));