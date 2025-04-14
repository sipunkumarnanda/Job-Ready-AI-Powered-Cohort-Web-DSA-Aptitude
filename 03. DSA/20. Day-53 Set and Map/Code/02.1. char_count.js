import PromptSync from "prompt-sync"
let prompt = PromptSync()

let s = prompt("enter a string : ")
console.log(s);
s = s.replaceAll(" ", "")
console.log(s);

let map = new Map()

for(let i=0; i<s.length; i++){
   if(map.has(s.charAt(i))){
    map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
   }else{
    map.set(s.charAt(i), 1)
   }
}

console.log(map);

for (const [key, values] of map) {
    console.log(`${key} : ${values}`);
}