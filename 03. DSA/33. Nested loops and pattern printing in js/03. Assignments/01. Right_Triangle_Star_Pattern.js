

// Q1. Print right angle triangle pattern
let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 1 ; i<=n ; i++){
    for(let j = 1 ; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}