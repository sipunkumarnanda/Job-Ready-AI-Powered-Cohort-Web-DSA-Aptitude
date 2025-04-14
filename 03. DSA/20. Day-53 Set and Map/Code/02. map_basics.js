let map = new Map()
map.set("raj", 6)
map.set("ali", 8)
map.set("amit", 3)
map.set("sonu", 5)
map.set("raj", 2)

console.log(map);

// How to print only key 

console.log(map.keys());   // [Map Iterator] { 'raj', 'ali', 'amit', 'sonu' }

console.log(map.values());  //  [Map Iterator] { 2, 8, 3, 5 }


// Traverse  Keys
for(let a of map.keys()){
    console.log(a);
}
/*
Output : 

raj
ali
amit
sonu
*/



// Traverse valeus 
for(let a of map.values()){
    console.log(a);
}
/*
Output : 

2
8
3
5
*/


// Traverse entries 
for (const entries of map.entries()) {
    console.log(entries);
}
/*
 output

[ 'raj', 2 ]
[ 'ali', 8 ]
[ 'amit', 3 ]
[ 'sonu', 5 ]
*/



console.log("--------------------------");




// Traverse entries 
for (const entries of map) {
    console.log(entries);
}
/*
 output

[ 'raj', 2 ]
[ 'ali', 8 ]
[ 'amit', 3 ]
[ 'sonu', 5 ]
*/



// key value destructuring 
for (const [key, value] of map) {
    console.log(key , value);
}
/*
Output : 

raj 2
ali 8
amit 3
sonu 5
*/