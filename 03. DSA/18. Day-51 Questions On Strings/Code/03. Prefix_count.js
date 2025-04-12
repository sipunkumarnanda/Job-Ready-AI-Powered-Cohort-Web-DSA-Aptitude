// Q. 39. Take an array of strings words and a String prefix. print the number of strings in words that contain pref as a prefix . 
// Example - Input : words = ["pay", "attentation", "practice", "attend"] , pref = "at"
// Output : 2 

let words = ["attire", "pay", "attentation", "practice", "attend"] , pref = "at"

let count = 0
for(let i=0; i<words.length; i++){
    if(words[i].startsWith(pref)){
        count++
    }
}

console.log(count);