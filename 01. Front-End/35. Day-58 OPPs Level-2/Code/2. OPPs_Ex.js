// function Toffee(){
//     this.name = "kachha aam" 
//     this.printMyName = function(){
//         console.log("kachha aam");
//     }
// }

// let t1 = new Toffee()

// console.log(t1);
// t1.printMyName()



function Toffee(name, price){
    this.name = "#> "+ name
    this.price = price

    this.printMyName = function(){
        console.log(name);   // mango bite
        console.log(this.name);  //  #> mango bite
    }

    this.printMyPrice = function(){
        console.log(this.price);
    }
}

let t1 = new Toffee("kachha aam", 2)
console.log(t1);
t1.printMyName()
t1.printMyPrice()

console.log("--------------------");

let t2 = new Toffee("mango bite", 3)
console.log(t2);
t2.printMyName()
t2.printMyPrice()