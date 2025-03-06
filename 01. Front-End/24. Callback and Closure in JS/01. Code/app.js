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

let fn = hello1(function(){
    console.log(`
Function is runing.................!!
        `)
})

setInterval(()=>{
    fn()
},1000) 