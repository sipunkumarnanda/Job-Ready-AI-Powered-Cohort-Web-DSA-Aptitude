import PromptSync from "prompt-sync"
let prompt = PromptSync()

// Toggle each alphabet of a string in - AcgDfD Output - aCGdFd

let s = prompt("Enter a string : ")
let newStr = ""

for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i)

    if(ascii >= 65 && ascii <= 90){
        newStr += String.fromCharCode(ascii + 32)
    }else  if(ascii >= 97 && ascii <= 122){
        newStr += String.fromCharCode(ascii - 32)
    }else{
        newStr += String.fromCharCode(ascii)
    }
}

console.log(s);
console.log(newStr);