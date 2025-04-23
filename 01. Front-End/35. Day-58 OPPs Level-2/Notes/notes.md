function Toffee(name, price){
    this.name = "#> "+ name
    this.price = price

    this.printMyName = function(){
        console.log(name);   // mango bite
        console.log(this.name);  //  #> mango bite
    }
}


let t2 = new Toffee("mango bite", 3)
console.log(t2);
t2.printMyName()
t2.printMyPrice()


 console.log(name);   // mango bite
        console.log(this.name);  //  #> mango bite 

        here its showing like this because the only name refer to passed paramter not object param 
        
        this.name refers to newly created objects name 


        make Notes on it . 