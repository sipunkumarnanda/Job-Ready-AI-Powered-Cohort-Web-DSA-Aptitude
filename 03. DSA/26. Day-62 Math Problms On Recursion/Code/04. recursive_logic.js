function hello(n){
    if(n == 0) return 1

    let ans =  hello(Math.floor(n/2))
    console.log("ans ", ans);
    return (ans*ans)+2
}

let a = hello(5)
console.log(a);