// Q1. Create a function that takes a callback and executes it after every 'n' seconds indefinitely.

function baarBaarchalao(fn, time){
    // setInterval(()=>{
    //     fn()
    // },time)

    setInterval(fn, time)  // Here setInterval call function automatically / implecitly , we dont have to call explicitly
}

// baarBaarchalao(function(){
//     console.log("Hello");
// }, 1000)


// Q2. Implement a function that returns a function with a preset greeting (closure)

function greetSetup(gt){
    return function(name){
        console.log(`${gt} ${name}`);
    }
}

let Indiangreeter = greetSetup("Namaste")
Indiangreeter("Sipun")
Indiangreeter("Harshita")

let spanishgreeter = greetSetup("Hola")
spanishgreeter("Ilia")



// Q3. Implement a function that takes a callback and only executes it once (HOF + closure)

function onlyOnceCaller(fn){
    let executed = false
    return function(){
        if(!executed){
            fn()
            executed = true
        }else{
            console.error("Already executed once")
        }
    }
}

let newfnc = onlyOnceCaller(function(){
    console.log("Ran");
})

newfnc()
newfnc()
newfnc()

// Q4. Implement a function that throttles another function (HOF + closures)

function throttle(fn, delay) {
    let lastCall = 0;
    return function () {
        let currentTime = new Date().getTime();
        if (currentTime - lastCall >= delay) {
            lastCall = currentTime;
            fn();
        } else {
            console.log("Function already executed. It will run again after 3 seconds.");
        }
    };
}

let fnc = throttle(function () {
    console.log("Function executed. Next execution allowed in 3 seconds.");
}, 3000);


setInterval(fnc, 1000);




function once(fn){
    let executed = false
    return function(...args){
        if(!executed){
            executed = true
            return fn(...args)
        }
    }
}

let init = once(function(){
    console.log("Initialized!");
})

// init()
// init()
// init()

// let greetOnce = once(function(name) {
//     console.log(`Hello, ${name}!`);
// });

// greetOnce("Sipun"); // Output: Hello, Sipun!
// greetOnce("Aryan"); // No output (function only runs once)
// greetOnce("John");  // No output


let greetOnce = once(function(name) {
    console.log(`Hello, ${name}!`);
    return `Greeting sent to ${name}`;
});

let res = greetOnce("Akankshya")
console.log(res);

