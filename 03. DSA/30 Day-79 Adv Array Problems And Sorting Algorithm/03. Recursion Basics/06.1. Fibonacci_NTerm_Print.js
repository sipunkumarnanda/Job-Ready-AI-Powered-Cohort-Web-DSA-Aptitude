
// Fibonacci n term value print

function fiboNthTerm(n){
    if(n == 0) return 0
    if(n == 1) return 1

    return fiboNthTerm(n-1) + fiboNthTerm(n-2)
}

console.log(fiboNthTerm(6));

// 0 1 1 2 3 5 8 