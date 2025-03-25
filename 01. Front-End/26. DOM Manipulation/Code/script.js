//   4 Pillers of DOM 

// 1. selection of an element
let h1 = document.querySelector("h1")
console.log(h1);

// 2. changing html 
h1.innerHTML = "Vartamaan aankho ka dhoka hai"

// 3. chnaging css 
h1.style.color = 'hotpink'

h1.style.backgroundColor = "white"


// 4. event listner
let time = 0
h1.addEventListener("click", (()=>{
    time++
   console.log(`clicked h1 for ${time} time`);
}))

// ---------------------------------------------------------------

// getElementById
let box = document.getElementById("box")
// box.innerHTML = "<h1> Changed </h1>"
box.innerHTML = "Changed"
box.style.backgroundColor = "rgb(117, 137, 234)"



// Query selector 
let h2 = document.querySelector("h2")
console.log(h2);
h2.innerHTML = "changed h2"
// Note - query selector target only 1st tag 



// Query selector all
let h2all = document.querySelectorAll("h2")
console.log(h2all);

console.log(h2all[0]);
console.log(h2all[1]);
console.log(h2all[2]);

h2all[1].innerHTML = "changed h2"

// Note : - Query selector all returns a nodelist of all h2 tags


// Inner HTML
let box2 = document.querySelector(".box-2")
box2.style.backgroundColor = "rgba(0, 111, 231, 0.17)"
box2.innerHTML = `
<h1>Hello</h1> 
<h2>Good Girls</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi pariatur praesentium vel eveniet saepe rem vero suscipit dolore nesciunt quidem</p>
`


let btns = document.querySelectorAll('button')

for (const element of btns) {
    element.style.cssText = `
    width : 200px;
    margin : 1rem;
padding : 10px;
 background-color: deeppink;
 color : white;
 border-radius : 5px;
 border : none;
 font-size : 1rem;
 font-width : bold;
`
}

btns[0].addEventListener("mouseover", (()=>{
    btns[0].style.backgroundColor = "green"
}))

btns[0].addEventListener("mouseout", (()=>{
    btns[0].style.backgroundColor = "deeppink"
}))




//  function
function lightOn(){
    box3.style.backgroundColor = "orange"
    box3.innerHTML = "<h1>light on</h1>"
    box3.style.color = "#4B0082"
}
function lightOff(){
    box3.style.backgroundColor = "black"
    box3.innerHTML = "<h1>light off</h1>"

}

let box3 = document.querySelector(".box-3")
let on = document.querySelector("#on")
let off = document.querySelector("#off")
on.addEventListener("click", lightOn)
off.addEventListener("click", lightOff)


//   

let addFrnd = document.querySelector("#addFrnd");
let h3 = document.querySelector("h3");

let check = 0;
addFrnd.addEventListener("click", () => {
  if (check === 0) {
    addFrnd.textContent = "Following";
    h3.innerText = "Friend";
    h3.style.color = "green";
    check = 1;
  } else {
    addFrnd.textContent = "Follow";
    h3.innerText = "stranger";
    h3.style.color = "red";
    check = 0;
  }
});