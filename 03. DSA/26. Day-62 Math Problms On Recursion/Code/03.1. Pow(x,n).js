
// leetcode 50. Pow(x,n)

let x = 2 , n = 10

let res = 1
for(let i=1; i<=n; i++){
    res = res * x
}
console.log(res);