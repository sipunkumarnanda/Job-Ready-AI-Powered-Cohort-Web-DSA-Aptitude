// Problem 
// agar tumhe kai saare object create karne ho to tum saare object ko alag alag variable me store karoge , jo ki ek acchi practice nahi hai , isse acha hoga ki tum ek class banaao jo ki naye naye objects banaayegi aur wo har object apna data khud hold karega and last mein , jitne bhi methods hoga wo data share karege 


// class banate hai taaki naye objects create kar sake 
// constructor function
function Cupcake(){
    this.name = "chocolate" ;

}


let a = new Cupcake()

console.log(a);

// agar function ko kabhi call karte wakt tumne new ka use kar liya, turant man mein ek blank object banaao 

// job bhi function mein this ko dekho turant  us blank object ko yaad kar ke us jagah rakhdo 

// old 
// new 