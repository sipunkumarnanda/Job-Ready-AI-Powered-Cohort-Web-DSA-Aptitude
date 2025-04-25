
// Fibonacci series by using recursion

function fibonacci(term, first, second){
    if(term == 0) return 

    if(first == 0 && second == 1){
        process.stdout.write(`${first} ${second} `)
    }

    let third = first + second
    process.stdout.write(`${third} `)

    fibonacci(term-1, second, third)
}

fibonacci(10, 0, 1)
console.log();