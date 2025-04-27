
//  GCD Optimal Eucledian

let a = 16, b = 24

while(a != 0 && b != 0){
    if(a>b){
       a = a % b
    }else {
     b = b % a
    }
}

console.log(a+b);