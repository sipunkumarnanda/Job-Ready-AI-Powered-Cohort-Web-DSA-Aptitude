// Q16. Remove duplicate values from an array .

let arr = [1,2,2,3,4,3,5,6,7,4,3,2,8,10,9,10,8,,8,9,9,10]

let newSet = [...new Set(arr)]
console.log(newSet);   // [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 9, undefined ]

// let newSet = new Set(arr)
// console.log(Array.from(newSet));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 10, 9, undefined ] , Why undefined ?? 