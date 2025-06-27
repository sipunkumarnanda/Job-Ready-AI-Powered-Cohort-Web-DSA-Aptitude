
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
// Localstorage ek tarike ki browser ki storage hoti hia , ye lagbhag 5-10 mb ki hoti hai 
// ye kis kaam  ki aati hai consitent theme , login info saved 

// localStorage.clear()
localStorage.setItem("username", "Sipun")

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("name"));
localStorage.setItem("age", 20)
localStorage.removeItem("age")
// localStorage.clear()

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