// Q1. Create a function that takes another function as an arguments and calls it after 3 seconds (HOF + Callbacks)

function hello(fn){
    return function(){
       setTimeout(()=>{
        fn()
       },3000)
    }
}

// let f1 = hello(function(){
//     console.log("Hello");
// })
// f1()


//Q2. Implement your own version of .map as a higher order function. // Important

let arr = [1,2,3,4,5,6]

function mapKiCopy(arr, fn){
    let newArray = []

    for(let i=0 ; i< arr.length; i++){
        newArray.push(fn(arr[i]))
    }

    return newArray
}

let ans = mapKiCopy(arr, function(value){
    return value + 2
})

// console.log("New Array is : ", ans);


// Explanation Step by Step - 
// Step-1 : Ek function banao jo ki accept kare array and accept kare ki kya chalana hai har value par 


// Q3. Write a function that uses closures to create a counter

function counter(fn){
    let count = 0 

    return function(){
        count++
        console.log(count);
    }
}

let count = counter()

count()
count()
count()
count()

// Q4. Implement a function that limits how many times another function can be called (closure + HOF)
function hello1(fn){
    let time = 0
    
    return function(){
        let newTime = new Date().getTime()
        if(time <= newTime){
            fn()
            time = newTime + 3000    
          }else{
            console.log("Wait for some time to run again minimum waiting time 3 second");
        }
    }
}

// let fn = hello1(function(){
//     console.log(`
// Function is runing.................!!
//         `)
// })

// setInterval(()=>{
//     fn()
// },1000)