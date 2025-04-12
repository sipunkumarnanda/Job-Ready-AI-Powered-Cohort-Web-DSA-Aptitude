import PromptSync from "prompt-sync";
let prompt = PromptSync()

// Q. 37. Pallindromic string using method and Two pointer algorithm (hint : Array reverse algo)

let s = prompt("Enter a string : ").toLowerCase()
console.log(s);

let start = 0 , end = s.length-1
let isPallindromic = true

while(start < end){
    if(s[start] != s[end]){
        isPallindromic = false
        break
    }
    start++ , end--
}

isPallindromic ? console.log("Pallindromic string") : console.log("Not a pallindromic string");