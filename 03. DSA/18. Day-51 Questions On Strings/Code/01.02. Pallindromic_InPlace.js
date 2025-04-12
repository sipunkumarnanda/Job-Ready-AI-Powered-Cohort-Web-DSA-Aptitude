import PromptSync from "prompt-sync";
let prompt = PromptSync()

// Q. 37. Pallindromic string using method and Two pointer algorithm (hint : Array reverse algo)

let s = prompt("Enter a string : ").toLowerCase()
console.log(s);

// IN-place method with proper space complexity 

function isPallindromic(s){  
let start = 0 , end = s.length-1

while(start < end){
    if(s[start] != s[end]){
        return console.log("Not a pallindromic");
    }
    start++ , end--
}

return console.log("it is a pallindromic");
}

console.log(isPallindromic(s));