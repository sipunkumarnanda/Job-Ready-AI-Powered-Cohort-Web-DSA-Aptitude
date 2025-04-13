// Q. 61. Accept a string and print the frequency of each character present in the string 


import PromptSync from "prompt-sync";
let prompt = PromptSync()

let s = prompt("Give a string : ")
console.log(s);


// for(let i=1; i<=122; i++){
//     process.stdout.write(String.fromCharCode(i) + " ")
// }

// let s = "abcaabddzzzzz"


let freqArr = new Array(123).fill(0)

for(let i=0; i<s.length; i++){
    let ascii = s.charCodeAt(i)
    freqArr[ascii] = freqArr[ascii] + 1
}

for(let i=0; i<freqArr.length; i++){
    // process.stdout.write(`${freqArr[i]} `)
    if(freqArr[i] > 0){
        console.log(`${String.fromCharCode(i)} : ${freqArr[i]}`);
    }
}

// We called this above process as bit map 


// Output 
/*
hello
e : 1
h : 1
l : 2
o : 1
*/

// home work 
// print like sorting order : h : 1 , e : 1 , l : 2 , o : 1