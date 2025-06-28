

function getUserInfo(){
    return new Promise(function(res, rej){
        setTimeout(() => {
            res({id : 1, name : "Harsh"})
        }, 1000);
    })
}

function getUserPics(id){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res([id, 'pic1', 'pic2'])
        }, 1000);
    })
}
getUserInfo()
.then(function(data){
    console.log(data);
    return getUserPics(data.id)
}).then((data)=>{
    console.log(data);
})