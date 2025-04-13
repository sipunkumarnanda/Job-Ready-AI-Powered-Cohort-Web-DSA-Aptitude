// Q. 62.  check two strings are anagram or not .
//  anagrams words have the same word length & same characater count .
// Example of anagram words are --->  arc and car , state and taste , night and thing etc .

import PromptSync from "prompt-sync";
let prompt = PromptSync()

let s1 = prompt("Give a string : ")
let s2 = prompt("Give a string : ")
console.log(s1);
console.log(s2);

// let s1 = "arc" , s2 = "car"


let freqArr = new Array(123).fill(0)

if(s1.length !== s2.length){
    console.log("Given string are not anagram");
}else{
for(let i=0; i<s1.length; i++){
    let ascii = s1.charCodeAt(i)
    freqArr[ascii] += 1
}

for(let i=0; i<s2.length; i++){
    let ascii = s2.charCodeAt(i)
    freqArr[ascii] -= 1
}

// for(let i=0; i<arr.length; i++){
// process.stdout.write(`${arr[i]} `)
// }

let isAnagram = true
for (let i = 0; i < freqArr.length; i++) {
    if(freqArr[i] != 0){
        isAnagram = false;
    }
  }
  isAnagram ? console.log("Given strings are anagram") : console.log("Given strings are not anagram");
}