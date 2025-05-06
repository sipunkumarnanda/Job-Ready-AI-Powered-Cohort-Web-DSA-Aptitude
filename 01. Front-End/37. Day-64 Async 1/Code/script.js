
// Jo bhi code likhoge js mein wo do prakar ka code ho sakta hai , synchronous and asynchronous 

// coding do hisso mein ho sakti hai , koi code synchronous ho sakta hai , koi code asynchronous ho sakta hai 

// promises 
// callbacks
// setTimeout
// setInterval
// async await



console.log("Hey 1");

setTimeout(() => {
    console.log("Hello 2");
}, 1000);

console.log("Hey 3");


// aapke code mein sabse pehele synchronous part chalta hai, synchronous code ko js chalati hai main thread pe , kyunki js single threaded hai , uska likha hua code chalna chaalu hota hai pahle and mein thread occupy hojaata hai, aur main thread pe hamesha sabse pahle poora synchronous code chalega , jab ye pura code finish hoga tab jaakar async code ke chalne ki baari aayegi

// JS is single threaded -> js ek operation hi ek time par kar sakti hai 
// if your pc has octa core still js uses one thread 


// Thread matlb -> aapke processors mein cores hote hai and har core mein kai saare threads hote hai and har ek thread ek time par ek operation perform kar sakta hai 



// sync
// async
// async 
// sync 
// async
// sync

// What will be the executing serial ? 
// first all sync code goes to main thread and async code goes to webApis section

// Main Thread - jaha par sync code chalta hai sabse pahle
// call stack 
// main stack - jo bhi main stack par aayega wo hi chalega 
// WebAPIs -> browser ki taraf se kai saare features milte hai jo js mein nahi hote , wo features hum js mein use to karte hai par wo js ke featurws nahi hote wo humein browser se milte hai 
// sync code main thread mei chalna chaalu ho jata hai , and async code ko webAPI's behind the scenes operate karna chaalu ke deti hai, jab ye code complete hota hai tab ye code ka completion move ho jaata hai callback queue mein . 

// callback queue 
// micro task queue 
// priority queue 
// event loop 

// example on ->  callback queue, priority queue,  microtask queue, macrotask queue, event loop 

console.log("Hey-1");
setTimeout(() => {
    console.log("Hey-3");
}, 0);
Promise.resolve().then(()=>{
    console.log("Hey-2");
})
console.log("Hey-4");

// output :  hey-1 hey-4 hey-2 hey-3 (becasue of priority)