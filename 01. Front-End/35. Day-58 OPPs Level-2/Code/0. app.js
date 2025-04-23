function Toffee(){
    this.name = "Harsh"
    this.sayName = function(){
        console.log("Good morning ", this.name);
    }
}

let t1 = new Toffee()
let t2 = new Toffee()

console.log(t1);
console.log(t2);

console.log(t1.sayName == t2.sayName);  // false