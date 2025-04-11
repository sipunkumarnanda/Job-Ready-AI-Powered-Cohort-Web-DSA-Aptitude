// Website for practice - prepinsta.com - Top 100 questions do all per day 2-3 questions 
// HackerRank - 10days js do all 



// Q. 35. Accept a string from user and print its each character on a new line 

import PromptSync from "prompt-sync";
let prompt = PromptSync()

let s = prompt("Enter a string : ")

for(let i=0; i<s.length; i++){
    console.log(s[i]);
}


// Q. 36. Accept a string and print it in reverse order 
let s2 = prompt("Enter a string : ")

let rev = ""
for(let i=s2.length-1; i>=0; i--){
    rev += s2.charAt(i)
}
console.log(rev);