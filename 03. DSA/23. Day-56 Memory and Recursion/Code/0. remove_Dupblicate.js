// remove dupblicate value 
let arr = [1,2,3,4,5,1,2,3,4,5]

console.log([...new Set(arr)])

console.log(Array.from(new Set(arr)));