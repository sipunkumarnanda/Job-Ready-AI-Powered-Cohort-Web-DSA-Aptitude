

class MobileShop{
    constructor(){
        this.mobiles = []
    }

    addMobile(mobile){
        this.mobiles.push(mobile)
    }

    listAllMobiles(){
        this.mobiles.forEach((mobile, index)=>{
            console.log(`${index+1} - ${mobile.brand} - ${mobile.model} - ${mobile.color} - ${mobile.price}`);
        })
    }
}


class Mobile{
    constructor(brand, model, price, color){
        this.id = Math.floor(Math.random() * 100000)
        this.model = model
        this.price = price
        this.brand = brand
        this.color = color
        this.sims = []
    }

    getMobileInfo(){
        console.log(`${this.brand} - ${this.model} - ${this.price} - ${this.color} - ${this.sims.length > 1 ? this.sims[0].brand + " " + this.sims[1].brand : this.sims[0].brand} , available balance is : ${this.sims.length > 1 ? this.sims[0].balance + " " + this.sims[1].balance : this.sims[0].balance} `);
    }

    insertSim(sim){
        if(this.sims.length === 2){
            console.log("Sorry you already have 2 sim inserts");
        }else{
            this.sims.push(sim)
        }
    }
}



class Sim{
    constructor(brand, balance){
        this.brand = brand
        this.balance = balance
    }

    addBalance(balance){
        if(balance < 0){
            console.log("to add balance give ammount greater than 0");
            return 
        }
        this.balance += balance
    }
}


let shop1 = new MobileShop()
let samsung = new Mobile("samsung", "galaxy s23 ultra", 120000, "black")
let tataDocomo = new Sim("Tata Docomo", 300)
let redmi = new Mobile("Redmi", "Note 20", 12000, "grey")
let jio = new Sim("jio", 399)

samsung.insertSim(tataDocomo)
samsung.insertSim(jio)
shop1.addMobile(samsung)

redmi.insertSim(jio)
shop1.addMobile(redmi)