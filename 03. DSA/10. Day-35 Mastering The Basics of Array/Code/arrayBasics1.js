let arr = [10, 20, 30, 40]

// arr.push(100)  // insert element at last
// arr.unshift(200)  // insert element at first
// arr.pop()  // delete element from last
// arr.shift()  // delete element from first

// console.log(arr);
// console.log(arr.length);


// Indexing 
console.log(arr[0]);  // element at 0th index
console.log(arr[1]);  // element at 1st index
console.log(arr[2]);  // element at 2nd index



// putting value to array
arr[2] = 2000
console.log(arr);


// What Happens When Assigning a Value at a Higher Index in an Array?
// i know the above array size is 4, and if we assign a value at the 10th index, what will happen?
arr[10] = 100000
console.log(arr);   // [ 10, 20, 2000, 40, <6 empty items>, 100000 ]
// NOTE - In the empty fields, empty items will be present


console.log(arr[8]);  // Undefined because no value has been assigned to index 8, and it remains an empty slot.

console.log("-------------------------------------------");


// Another way to create an Array 
let arr2 = new Array(5)
arr2[0] = 10
arr2[1] = 20
arr2[2] = 30
arr2[3] = 40
arr2[4] = 50
console.log(arr2);

// here we know above Array size is 5 , and if we assign a value at the 10th index, what will happen?
arr2[10] = 1111
console.log(arr2);   // [ 10, 20, 30, 40, 50, <5 empty items>, 1111 ]
arr2.push(22222)   //  push at last , at 11th index here 
console.log(arr2);  // [ 10, 20, 30, 40, 50, <5 empty items>, 1111, 22222 ]

//  FOR THIS REASON ARRAY IS DYNOMIC IN JS 