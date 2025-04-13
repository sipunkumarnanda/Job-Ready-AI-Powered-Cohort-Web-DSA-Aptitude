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

let obj1 = {} , obj2 = {}

for(let i=0; i<s1.length; i++){
    if(obj1.hasOwnProperty(s1.charAt(i))){
        obj1[s1.charAt(i)] += 1
    }else{
        obj1[s1.charAt(i)] = 1
    }
}

for(let i=0; i<s2.length; i++){
    if(obj2.hasOwnProperty(s2.charAt(i))){
        obj2[s2.charAt(i)] += 1
    }else{
        obj2[s2.charAt(i)] = 1
    }
}


console.log(obj1, obj2);

let isAlagram = false
if(Object.keys(obj1).length == Object.keys(obj2).length){
    for (const element in obj1) {
        if(obj1[element] === obj2[element]){
           isAlagram = true
        }else{
            isAlagram = false
        }
     }
}

isAlagram ? console.log("Given strings are alagram") : console.log("Give string are not alagram");
