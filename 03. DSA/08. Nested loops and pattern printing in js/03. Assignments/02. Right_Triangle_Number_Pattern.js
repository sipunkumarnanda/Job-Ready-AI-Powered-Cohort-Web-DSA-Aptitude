// right triangle number pattern 

let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 1 ; i<=n ; i++){
    let print = ""
    for(let j = 1 ; j<=i; j++){
        print += j + " "
    }
    console.log(print)
}