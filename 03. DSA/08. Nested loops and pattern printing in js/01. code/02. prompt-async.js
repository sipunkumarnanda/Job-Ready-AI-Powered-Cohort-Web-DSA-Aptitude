import promptFunc from "prompt-sync";

console.log(promptFunc);
let prompt = promptFunc()   // Why we have to call this function before use 
let a = prompt("Enter your name : ")
console.log(a);