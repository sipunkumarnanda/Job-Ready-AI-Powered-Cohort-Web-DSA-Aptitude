// Set is a linear data structure which hold nultiple elements .

// In array we can store duplicate values . But in set we can't store duplicate values . 
// set always contain distinct values .

// Array is ordered .
// Set is unordered . 

let set = new Set()
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add(10)
set.add(20)
set.add(30)

console.log(set);  // { 10, 20, 30, 40 }


// delete 
set.delete(20)

console.log(set);  // { 10, 30, 40 }

// set.has
console.log(set.has(10));   // true
console.log(set.has(100));   // false


//  size 
console.log(set.size);   // 3


// Traverse element in set
for(let a of set){
   process.stdout.write(`${a} `)  // 10 30 40
}
console.log();


set.clear()
console.log(set);   // Set(0) {}





let arr = [10, 20, 30, 40, 50]

let set1 = new Set(arr);
console.log(set1);