
let rev = 0
function reverse(n){
    if(n === 0) return rev

    rev = (rev * 10) + (n % 10)
    return reverse(Math.floor(n/10))
}

console.log(reverse(198));