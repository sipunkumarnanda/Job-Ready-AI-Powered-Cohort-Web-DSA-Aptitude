//  purana tareeka object banaane ka ek constructor function se jab js mein class ka concept nahi tha 

function Ghar(){
    this.shahar = "delhi"
    this.kamre = 3 
    this.bathroom = 2
    this.kitchen = 1
}

let ghar1 = new Ghar()

console.log(ghar1);



function Toffee(falvor, price, expiry){
    this.falvor = falvor
    this.price = price
    this.expiry = expiry
}

let t1 = new Toffee("vanilla", 1.99, "01-01-2020")
console.log(t1);

let t2 = new Toffee("chocolate", 10, "02-02-2021")
console.log(t2);