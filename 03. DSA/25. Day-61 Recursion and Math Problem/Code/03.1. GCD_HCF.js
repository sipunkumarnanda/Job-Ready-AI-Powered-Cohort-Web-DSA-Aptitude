
let a = 32 , b = 20

for(let i= Math.max(a,b); i>=1; i--){
    if(a % i == 0 && b % i == 0){
        console.log(i);
        break
    }
}