// inverted right triangle star pattern 

let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 1 ; i<=n ; i++){
    for(let j = 1 ; j <= (n-i)+1; j++){
        process.stdout.write("* ")
    }
    console.log()
}