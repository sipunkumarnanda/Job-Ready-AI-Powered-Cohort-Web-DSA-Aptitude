
// let elem1 = document.querySelector(".elem");
// let elem1Img = document.querySelector(".elem img");

// elem1.addEventListener("mousemove", (e) => {
//   elem1Img.style.left = e.x + "px";
//   elem1Img.style.top = e.y + "px";
// });

// elem1.addEventListener("mouseenter", (e) => {
//   elem1Img.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", () => {
//   elem1Img.style.opacity = 0;
// });




// let allelem = document.querySelectorAll(".elem")

// allelem.forEach((val)=>{
//     val.addEventListener("mousemove", ((e)=>{
//         val.childNodes[3].style.left = e.x + "px";
//         val.childNodes[3].style.top = e.y + "px";
//         val.childNodes[3].style.opacity = 1
//     }))
//     val.addEventListener("mouseleave", ((e)=>{
//         val.childNodes[3].style.opacity = 0
//     }))
// })



let  main = document.querySelector("#main")

main.addEventListener("mousemove", ((e)=>{
    let elem = e.target.closest(".elem")
    let img = elem.querySelector("img")
    // console.log(img);

    elem.addEventListener("mousemove", ((e)=>{
        img.style.opacity = 1
    }))

    elem.addEventListener("mouseleave",((e)=>{
        img.style.opacity = 0
    }))

    elem.addEventListener("mousemove", ((e)=>{
        img.style.left = `${e.offsetX}px`
        img.style.top = `${e.offsetY}px`
    }))
}))
