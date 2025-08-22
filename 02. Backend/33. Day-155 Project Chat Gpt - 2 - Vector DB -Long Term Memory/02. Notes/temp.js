
const obj = [{
    "name" : "Amrita",
    "age" : 20,
    "Fav-Food" : [{
        "Veg" : "Biriyani"
    }, {
        "chinese" : "xuiui"
    }]
}]

console.log(obj);  // [ { name: 'Amrita', age: 20, 'Fav-Food': [ [Object], [Object] ] } ]
console.log([...obj]);  // [ { name: 'Amrita', age: 20, 'Fav-Food': [ [Object], [Object] ] } ]
console.log(...obj);  /* {
  name: 'Amrita',
  age: 20,
  'Fav-Food': [ { Veg: 'Biriyani' }, { chinese: 'xuiui' } ]
} */