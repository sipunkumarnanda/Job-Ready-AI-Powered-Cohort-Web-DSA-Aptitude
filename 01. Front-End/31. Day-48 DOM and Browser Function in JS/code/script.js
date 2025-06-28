
// let btn = document.querySelector("button")

// btn.addEventListener("click", ((e)=>{
//     // location.href = "https://google.com"
//     location.reload()
// }))

// let a = location.href
// console.log(a);

// let backward = document.querySelector("#btn1")
// let forward = document.querySelector("#btn2")

// backward.addEventListener("click", (()=>{
//     console.log("Backward btn clicked");
//     history.back()
// }))
// forward.addEventListener("click", (()=>{
//     console.log("Forward btn clicked");
//     history.forward()
// }))

// location.href = "https://google.com"

// console.log(navigator.userAgent);
// console.log(navigator.onLine);


// Local Storage
// LocalStorage is a browser-based storage system, usually around 5–10 MB in size.
// It is mainly used to keep things consistent like theme preferences, login info, or user data.

// localStorage.clear()
localStorage.setItem("username", "Sipun")

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("name"));
localStorage.setItem("age", 20)
localStorage.removeItem("age")
// localStorage.clear()

// Local Storage Theme  changer 
let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let body = document.querySelector("body")

dark.addEventListener("click", (()=>{
    localStorage.removeItem("theme")
    localStorage.setItem("theme", "black")
    document.body.style.backgroundColor = "black"
}))
light.addEventListener("click", (()=>{
    localStorage.removeItem("theme")
    localStorage.setItem("theme", "white")
    document.body.style.backgroundColor = "white"
}))


window.addEventListener("DOMContentLoaded", (()=>{
    let theme = localStorage.getItem("theme");
if (theme) {
  document.body.style.backgroundColor = theme;
}
}))




// Local storage object storing

// let obj = {name : "joe", age : 20}
// localStorage.setItem("obj", obj)  //  can't set properly 


// Storing in form of string 

let users = [
    {username : "ankita", age: 20, city : "Bhopal"},
    {username : "ankita", age: 20, city : "Bhopal"},
    {username : "ankita", age: 20, city : "Bhopal"},
    {username : "ankita", age: 20, city : "Bhopal"}
]

// localStorage.setItem("users", users) // cant store , it show object object ....

// localStorage.clear()

let newusers = JSON.stringify(users)
console.log(newusers);

localStorage.setItem("users", newusers) 

let getusers = localStorage.getItem("users")
console.log(getusers);
console.log(typeof getusers);

let users2 = JSON.parse(getusers)
console.log(users2);
console.log(typeof users2);


// You cannot store an object directly in localStorage.
// That's why we use JSON.stringify() to convert it into a string.
// And if you want to retrieve that data, you can use JSON.parse() to convert it back into a JavaScript object.


// Session Storage 

// sessionStorage.setItem("Hero", "App log")



// CLASSLIST 

let div = document.querySelector("div")

div.classList.add("violet")
div.classList.add("blue")
div.classList.remove("blue")


// Toggle 

let h1 = document.querySelector("h1")
h1.classList.toggle("light")  // if light present remove it , if not present add it 