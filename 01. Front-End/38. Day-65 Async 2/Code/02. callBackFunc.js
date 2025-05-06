
// callback function

// koi function ko chalaate waqt ye bata dena kaam karne ke baad kon sa function chalaana hai 

// function getDetails(){
//     // ...
//     cb()
// }

// getDetails(function(){

// })




// --------------------------------

function stepOne(cb){
    console.log("Step-1");
    cb()
}
function stepTwo(cb){
    console.log("Step-2");
    cb()
}
function stepThree(cb){
    console.log("Step-3");
    cb()
}


// callback hell  // Christmas tree effect
stepOne(function(){
    stepTwo(function(){
        stepThree(function(){
            console.log("All callbacks called");
        })
    })
})