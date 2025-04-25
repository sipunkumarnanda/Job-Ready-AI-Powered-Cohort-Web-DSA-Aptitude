
// Fibonacci nth term sum by using recursion

let sum = 0
function fibonacci(term, first, second){
    if(first == 0 && second == 1){
        sum += first + second
    }

    if(term == 0) return 

    let third = first + second
    sum += third
    fibonacci(term-1, second, third)
}

fibonacci(5-2, 0, 1)
console.log(sum);