

// Fibonacci using loop 

let n = 10

let first = 0
let second = 1
process.stdout.write(`${first} ${second} `)

for(let i=1; i<=n-2; i++){

    let third = first + second
    process.stdout.write(`${third} `)

    first = second
    second = third
}
console.log();