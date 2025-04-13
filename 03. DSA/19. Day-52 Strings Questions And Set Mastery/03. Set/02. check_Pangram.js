// Q. 64. check if the string is pangram or not

let s = 'thequickbrownfoxjumpsoverthelazydog'

let set = new Set()

for(let i=0; i<s.length; i++){
    set.add(s.charAt(i))
}

// console.log(set.size);
// console.log(set);

let isPangram = false
for(let i=97; i<123; i++){
    if(set.has(String.fromCharCode(i))){
        isPangram = true
    }else{
        isPangram = false
        break
    }
}

isPangram ? console.log("The given string is an pangram") : console.log("The given string is not an pangram");