import PromptSync from "prompt-sync";
let prompt = PromptSync()


// STRONG NUMBER PROGRAM 
let n = Number(prompt("Enter a number : "))
let copy = n
let sum = 0
while(n>0){
    let digit = n % 10

    let fact = 1
    for(let i=1; i<=digit; i++){
        fact = fact * i 
    }

    sum = sum + fact
    n = Math.floor(n/10)
}
console.log(`sum of factorial of each digits = ${sum}`);
(copy === sum) ? console.log("Strong Number") : console.log("Not a strong Number");