// Q. 64. check if the string is pangram or not

let s = 'thequickbrownfoxjumpsoverthelazydog'

let set = new Set(s)

// for(let i=0; i<s.length; i++){
//     set.add(s.charAt(i))
// }

set.size === 26 ? console.log("The given string is an pangram") : console.log("The given string is not an pangram");