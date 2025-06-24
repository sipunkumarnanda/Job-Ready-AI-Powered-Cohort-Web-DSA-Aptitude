
// ForEach and Array of Objects 
// let arr = ["Sipun","Mansih", 10, true, 10.2, {name: "Ankita", age : 20}, "Jayho", {name : "Aku" , age : 22}]

// arr.forEach((val, index)=>{
//     // console.log(index, val);
//     if(typeof val == "object"){
//         console.log(index, val);
//     }
// })


// 

let arr = [
    {
        username : "Salmon",
        age : 65,
        married : false,
        isStatus : "stranger",
        image : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } ,
    {
        username : "Sharukh",
        age : 60,
        married : true,
        isStatus : "stranger",
        image : "https://plus.unsplash.com/premium_photo-1664304108816-0f074b1eb09d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } ,
    {
        username : "Sarthak",
        age : 23,
        married : false,
        isStatus : "stranger",
        image : "https://plus.unsplash.com/premium_photo-1664868839978-8fba95c0cdc1?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    } 
]

// console.log(arr[0].username);

arr.forEach((val, index)=>{
    console.log(index , val.username, val.age, "isMarried :", val.married);
})

// Make a program to add age of all people 
let sumOfAllUserAge = arr.reduce((prev, curr)=>{
    return prev + curr.age
},0)

console.log("Sum of all user Age = ", sumOfAllUserAge);


let body = document.querySelector("body")

// Way-1
// let sum = ""
// arr.forEach((val)=>{
//     sum = sum + `
//      <div class="card">
//         <img src=${val.image} alt="">
//         <h1>${val.username}</h1>
//         <h5>${val.age}</h5>
//         <h3>Married : ${val.married}</h3>
//     </div>
//     `
// })

// body.innerHTML = sum

// Optimal Way
let main = document.querySelector("#main")


function herosection(){
    main.innerHTML = ""
arr.forEach((val, index)=>{
    let div = document.createElement("div")
    div.classList.add("card");
    div.innerHTML = `<img src=${val.image} alt="">
        <h1>${val.username}, ${val.age}</h1>
        <h3>Married : ${val.married}</h3>
        <h5>${val.isStatus}</h5>
        <button id=${index}>${val.isStatus == "stranger" ? "Add friend" : "Friend"}</button>
        `
        main.appendChild(div)
})
}

herosection()



// Event Bubbling

main.addEventListener("click", ((dets)=>{
    // console.log(arr[dets.target.id]);

    if(arr[dets.target.id].isStatus === "stranger"){
        document.getElementById(dets.target.id).innerHTML = "Friend"
        arr[dets.target.id].isStatus = "friend"
    }else{
        document.getElementById(dets.target.id).innerHTML = "Add friend"
        arr[dets.target.id].isStatus = "stranger"
    }
    herosection()
}))