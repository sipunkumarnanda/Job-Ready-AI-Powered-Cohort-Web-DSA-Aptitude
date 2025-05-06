
// server ka code jab bhi server ke liye hoga usually wo async nahi hoga par jab bhi request kahi aur jaayegi wo kab tak response laayegi ka koi bharosa nahi hai 


// let p1 = new Promise((resolve, reject)=>{
//     console.log("Instagram jao data laao");
//     console.log("Instagram mein data collect ho raha hai");
//     // console.log("Instagram mein data collect mein error aaya");
//     console.log("Instagram mein data collect mein error nahi aaya");
//     // reject()
//     resolve()
// })

// p1.then(()=>{
//     console.log("resolved");
// }).catch(()=>{
//     console.log("rejected");
// })




// -------------------------------------------------------------

// call back callback hell

// function stepOne(cb){
//     console.log("Step-1");
//     cb()
// }
// function stepTwo(cb){
//     console.log("Step-2");
//     cb()
// }
// function stepThree(cb){
//     console.log("Step-3");
//     cb()
// }

// stepOne(function(){
//     stepTwo(function(){
//         stepThree(function(){
//             console.log("All callbacks called");
//         })
//     })
// })




// 

function stepOne(){
    return new Promise(function(res, rej){
        console.log("Step-1");
        res()
    })
}
function stepTwo(){
    return new Promise(function(res, rej){
        console.log("Step-2");
        res()
    })
}
function stepThree(){
    return new Promise(function(res, rej){
        console.log("Step-3");
        res()
    })
}

stepOne()
.then(stepTwo)
.then(stepThree)
.then(function(){
    console.log("All step done");
})