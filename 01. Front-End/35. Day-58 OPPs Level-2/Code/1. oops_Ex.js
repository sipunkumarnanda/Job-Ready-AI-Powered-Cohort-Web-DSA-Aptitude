// jab bhi constructor banaaoge aur kuch aisa mil gaya job ki sab mein same hai to usey kabhi bhi direct constructor mein banana galat tareeka hota hai, par sahi tareeka hai prototype ko use karna kyunki prototype mein save karne par jitne bhi new ke saath instance banaaoge wo saare instance by default tumhaari proto ki value ko hold karege .

// function Toffee(name){
//     this.name = name
// }

// Toffee.prototype.price = 10

// let t1 = new Toffee("alpenleibel")
// let t2 = new Toffee("dairy milk")

// console.log(t1);
// console.log(t2);


function Human(name, age, isHandsome){
    this.name = name
    this.age = age
    this.isHandsome = isHandsome
}

Human.prototype.sayHello = function(){
    console.log("hello", this.name);
}

let h1 = new Human("harsh", 26 , true)

console.log(h1.sayHello());


// sabse pehele property  ko aapke object mein dhundege nahi mila ta prototype mein dhundte hai 

function Toffee(name){
    this.name = name
    // this.price = 34
}

Toffee.prototype.price = 10

let t1 = new Toffee("kachha aam")
console.log(t1.price);