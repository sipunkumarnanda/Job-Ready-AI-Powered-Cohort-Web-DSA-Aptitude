// let map = new Map()

// map.set("ajay" , 5)
// map.set("ajay" , 8)

// console.log(map);

// map.set("name" , "raghav")
// map.set("age" , 25)
// map.set("isFail", true)

// console.log(map);


let map2 = new Map()
map2.set("raj", 6)
map2.set("ali", 8)
map2.set("amit", 3)
map2.set("sonu", 5)
map2.set("raj", 2)

console.log(map2);


// delete 
map2.delete("raj")    // always delete by key 
console.log(map2);

console.log(map2.has("sonu"));   // true
console.log(map2.has("adarsh"));  // false
console.log(map2.size);  // 3


console.log(map2);
console.log(map2.get("amit"));  // 3
console.log(map2.get("sonu"));  // 5


map2.clear()
console.log(map2);   // Map(0) {}