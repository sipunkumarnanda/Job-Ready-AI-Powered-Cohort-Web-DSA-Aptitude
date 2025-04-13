// Q. 62.  check two strings are anagram or not .
//  anagrams words have the same word length & same characater count .
// Example of anagram words are --->  arc and car , state and taste , night and thing etc .

// import PromptSync from "prompt-sync";
// let prompt = PromptSync()

// let s1 = prompt("Give a string : ")
// let s2 = prompt("Give a string : ")
// console.log(s1);
// console.log(s2);

let s1 = "arc" , s2 = "car"


let arr = new Array(123).fill(0)
let arr2 = new Array(123).fill(0)

for(let i=0; i<s1.length; i++){
    let ascii = s1.charCodeAt(i)
    arr[ascii] += 1
}

for(let i=0; i<s2.length; i++){
    let ascii = s2.charCodeAt(i)
    arr2[ascii] += 1
}

let isAnagram = true
for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr2[i]){
        isAnagram = false;
        break;
    }
  }

  console.log(isAnagram);