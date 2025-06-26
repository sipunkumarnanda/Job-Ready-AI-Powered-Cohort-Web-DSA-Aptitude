
let container = document.querySelector("#main")
let cursor = document.querySelector(".cursor")
console.log(cursor);

container.addEventListener("mousemove", ((e)=>{
    // console.log("Screnn ",e.screenX, e.screenY);
    // console.log("client ",e.clientX, e.clientY);

    cursor.style.left =  `${e.x}px`
    cursor.style.top =  `${e.y}px`
}))
