
// Callbacks 

function getDetails(username, cb){
    setTimeout(() => {
        console.log("sending the request to instagram...");
    }, 1000);

    setTimeout(() => {
        console.log("fetching data...");
    }, 3000);

    setTimeout(() => {
        cb()
    }, 6000);
}

getDetails("sipunkumar", function(){
    console.log("data saved in galary");
})