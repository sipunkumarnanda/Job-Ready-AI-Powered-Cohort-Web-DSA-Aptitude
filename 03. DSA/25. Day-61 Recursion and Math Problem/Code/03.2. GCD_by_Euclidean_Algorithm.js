
// GCD by recursion  Euclidean algorithm 

let a = 18 , b = 28

while(a != b){
    if(a>b) a = a-b
    else b = b-a
}

console.log(a);