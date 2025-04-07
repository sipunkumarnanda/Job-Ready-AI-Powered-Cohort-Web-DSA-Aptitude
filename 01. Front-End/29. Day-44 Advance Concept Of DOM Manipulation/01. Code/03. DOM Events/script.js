let box = document.querySelector('.box')

box.addEventListener("click", (()=>{
  console.log("Event performed");
}))

box.addEventListener("dblclick", (()=>{
  console.log("double click performed");
}))

box.addEventListener("mouseenter", (()=>{
  console.log("Mouse Enter");
  document.body.style.backgroundColor = "yellow"
}))

box.addEventListener("mouseleave", (()=>{
  console.log("Mouse left");
   document.body.style.backgroundColor = "black"
}))

// let grow = 0
// box.addEventListener("mousemove", (()=>{
//   grow++
//   console.log("Mouse moving " +grow);
// }))

let body = document.querySelector('body')
body.addEventListener("mousemove", ((dets)=>{
  console.log(dets);
  console.log(dets.x);
  console.log(dets.y);
}))



// Task-1 Make a instagram like feature old with dblclick event and setTimeout

// Task-2 make custom cursoe feature with the help of mousemove , mouseEnter and mouseLeave (refer youtube sheriyans)