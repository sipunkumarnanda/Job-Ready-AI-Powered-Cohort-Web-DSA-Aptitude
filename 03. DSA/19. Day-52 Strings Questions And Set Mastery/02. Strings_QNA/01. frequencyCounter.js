// Q. 61. Accept a string and print the frequency of each character present in the string 


import PromptSync from "prompt-sync";
let prompt = PromptSync()

let s = prompt("Give a string : ")

console.log(s);

let obj = {}
for(let i=0; i<s.length; i++){
    let char = s.charAt(i)
    if(obj.hasOwnProperty(char)){
        obj[char] = obj[char] + 1
    }else{
        obj[char] = 1
    }
}
console.log(obj);