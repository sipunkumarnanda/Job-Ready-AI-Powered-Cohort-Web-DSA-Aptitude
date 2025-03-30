// right triangle alphabet pattern 

let prompt = require("prompt-sync")()

let n = Number(prompt("Enter value on n "))

for(let i = 65 ; i< 65+n ; i++){
    let print = ""
    for(let j = 65 ; j<=i ; j++){
        print += String.fromCharCode(j) + " "
    }
    console.log(print)
}