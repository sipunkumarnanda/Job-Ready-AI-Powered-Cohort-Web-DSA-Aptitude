let obj = {
    'a' : 5,
    'b' : 10
}

console.log(obj.a);     // 5 
console.log(obj['a']);  // accessing by dynamic key    // 5 
console.log(obj['apple']);  // undefined

console.log(obj['a'] + 1);   // 5 + 1 = 6
console.log(obj['a']);  // 5

console.log(obj['a'] += 69);    //  5 = 5+69  = 74 , updating and assigning 