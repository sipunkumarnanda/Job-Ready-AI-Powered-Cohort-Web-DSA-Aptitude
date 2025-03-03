// Rest Parameters

function abcd(a,b,...args){
    console.log(a,b,args);  // 1 2 [ 3, 4, 5 ]
}

abcd(1,2,3,4,5)

// Hoisting 
console.log(a);  // undefined
var a = 12;

// Hoisting -> Js mein variables and functions unko js declaration wala part top pe move kar deta hai, aur isey hum kahte hai hoisting 

hoisting() // Hello
function hoisting(){
    console.log("Hello");
}

// IIFE

(function iife(){
    console.log("Hello World");
})() ;

// Here its doesn't expose the outer variable .
var ans = (function iife2(){
    var a = 12
    // console.log(a);
    return a
})()

console.log(ans);

var answer = (function abcd(){
    var a = 12 
    return {
        set : function (val){
            a = val
        },
        get : function (){
            console.log(a);
        }
       }
})()

console.log(answer);
answer.set(69)
answer.get()

let sheryJS = (function sheryLibrary(){
    var lolo = 69 // Private variable 
    return {
        imageaeffect : function(){
            console.log("Image Effect");
        },
        mouseFollower : function(){
            console.log("Mouse Follower");
        }
    }
})()


sheryJS.imageaeffect()
sheryJS.mouseFollower()

// HOFS Higher Order FUnctions

// -> Ek aisa function jo yaa ta return kare function nahito accept kare function in parameter, ya fir dono 

// Returning function 
function hofs(){
    return function(){
        return function(){
            console.log("Hyehyehye");
        }
    }
}

hofs()()()

// accepting Function 
function hofs2(fnc){
    fnc()
}
hofs2(function(){
    console.log("Hello HOFS");
})

// Function currying
function funcA(val1){
    return function(val2){
        return function(val3){
            console.log(val1+val2+val3);
        }
    }
}

funcA(1)(2)(3)


// call backfunction 

// -> Kisi function mein jo function pass hota hai call karte waqt, usey "callback function" kehte hain.

// agar ek function mein parameter mein tumne func pass kiya jo pass kiya wo hai call back and jisme pass kiya wo hai hof 

function greet(){   // ✅ Normal function
    console.log("Good Morning.");
}

function cb(func){  // ✅ Higher-order function (accepts a function as a parameter)
    func();  // ✅ Calls the function passed as an argument
}

cb(greet);  // ✅ Passing 'greet' as a callback


// first class function 

// -> first class function ek darja hai jo ki js mein fncs ko mila hai , is darje mein kaha jaata hai ki fncs ko aap value ki tarah use kr sakte ho 
// Jahan aap value likh sakte ho waha tum func likh sakte ho 
// let a = 2 , just like a = func(){}

// -----------------------------------------------------

 /* 
 First-class function ek aisa concept hai jo JavaScript mein functions ko diya gaya hai.  
 Is concept ke tahat, functions ko ek **value** ki tarah treat kiya ja sakta hai.  
 Jahan aap ek variable ya value assign kar sakte ho, wahan aap ek function bhi assign kar sakte ho.  
 Example: let a = 2; just like let a = function(){}; 
  */

//  var a = 12  

 var a = () => console.log("hello first-class function")
 a()



 // pure function 
 // -> A pure function is a function that does not cause any side effects  
//    and always returns the same output for the same input.  
//    Agar function koi **global / external value ko modify nahi kar raha hai**  
//    aur **hamesha same input ke liye same output deta hai**, to wo **pure function** hai.


 function add(a, b){
    return a + b ; // No external modification
 }
 console.log(add(2,3));  // 5
 console.log(add(2,3));  // 5

 // impure function
 // -> An impure function is a function that causes side effects  
//    or does not always return the same output for the same input.  
//    Agar function **global / external value ko modify kar raha hai**  
//    ya **same input ke liye hamesha same output nahi deta**, to wo **impure function** hai.

 let total = 0 
 function addTototal(a){
    total += a // Modifies external variable 
 }

 addTototal(10)
 console.log(total); // 10
 addTototal(10)
 console.log(total);  // 20

 
 // Scoping and closures 

 // global scope 
 // -> Global Scope:
//    Agar tumhara code kisi bhi curly braces `{}` ke andar nahi hai, to wo **global scope** mein hota hai.  
//  Jo variables ya functions **global scope** mein hote hain, unhe **kahin bhi** access kiya ja sakta hai.  

// ✅ Example of Global Scope
let value = 10; // ✅ Global variable

function globalVar() {
    console.log(value); // ✅ Accessing global variable inside a function
}

globalVar(); // Output: 10

console.log(value); // ✅ Global variable can be accessed anywhere

// local scope 
function x(){
    var y = 20 
}
// console.log(y);  // ReferenceError: y is not defined


// closure - > Closure ek concept hai jismein ek function **dusre function ko return karta hai , aur **returned function parent function ke kisi variable ya data ko access kar sakta hai , even after the parent function has finished executing.  

// closure ek concept hai jismein function return karta hai ek aur function and returned function mein aap use krte ho parent function ka koi data 

function z() {
    let a = 20;  // ✅ Local variable inside z()

    return function() {  // ✅ Returning an inner function
        console.log("I am the returned function inside z func. And value of a is:", a);
    };
}

// ✅ Calling z(), it returns a function but doesn't execute it yet
let returnFunc = z();

// ✅ Calling the returned function
returnFunc();
