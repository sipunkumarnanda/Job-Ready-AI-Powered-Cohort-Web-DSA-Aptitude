// mirrored right triangle star pattern


let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 1 ; i<=n ; i++){
    for(j=1 ; j<= n-i ; j++){
        process.stdout.write("  ")
    }
    for(k=1 ; k<=i; k++){
        process.stdout.write("*")
        process.stdout.write(" ")
    }
    console.log()
}