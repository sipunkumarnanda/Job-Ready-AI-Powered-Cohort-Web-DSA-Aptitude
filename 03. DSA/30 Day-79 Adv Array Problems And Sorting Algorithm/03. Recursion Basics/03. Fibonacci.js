
// print fibonacci series till n 


let prev = 0 , curr = 1

process.stdout.write(`${prev} ${curr} `);

function fibonacci(term){
    if(term == 0) return

    let sum = prev + curr
    process.stdout.write(`${sum} `)
    prev = curr
    curr = sum
    return fibonacci(term-1)
}
fibonacci(10)

console.log();