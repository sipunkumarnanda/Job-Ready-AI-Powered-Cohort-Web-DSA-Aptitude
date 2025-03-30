// print v shape Pattern

let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 1 ; i<=n ; i++){
    for(j = 1 ; j <= (n*2) ; j++){
        if(i === j || i + j === n*2) {
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log()
}