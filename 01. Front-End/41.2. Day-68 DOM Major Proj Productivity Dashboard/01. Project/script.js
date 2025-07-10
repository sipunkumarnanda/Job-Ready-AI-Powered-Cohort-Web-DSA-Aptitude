
function openfeatures() {
  let elems = document.querySelectorAll(".elem");
  let fullElems = document.querySelectorAll(".fullElem");
  let fullElemsBackBtns = document.querySelectorAll(".fullElem .back");

  elems.forEach((elem) => {
    elem.addEventListener("click", () => {
      // fullElems.forEach((element)=> element.style.display = "none" )
      fullElems[elem.id].style.display = "block";
    });
  });

  fullElemsBackBtns.forEach((backbtn) => {
    backbtn.addEventListener("click", () => {
      fullElems[backbtn.id].style.display = "none";
    });
  });
}
openfeatures();

function openTodo(){
let task = document.querySelector(".addTask form input")
let taskDescription = document.querySelector(".addTask form textarea")
let isImportant = document.querySelector("#checkbox")
let form = document.querySelector(".addTask form")
let allTaskPage = document.querySelector(".allTask")


let allTask =  JSON.parse(localStorage.getItem("task")) || []
let id = allTask.length

form.addEventListener("submit", ((e)=>{
  e.preventDefault()

  console.log("task : ", task.value);
  console.log("Des : ", taskDescription.value);
  isImportant.checked ? console.log("Checkbox is checked!") : console.log("Checkbox is not checked.")

  let taskObj = {
    task : task.value,
    taskDesc :  taskDescription.value,
    isImp :  isImportant.checked,
    id : id
  }
  id++
  allTask.push(taskObj)
  localStorage.setItem("task", JSON.stringify(allTask))
  renderTask()
    e.target.reset();
}))

function renderTask(){
    let localStorageAllTask = allTask
  allTaskPage.innerHTML = ""
  localStorageAllTask.forEach((elem)=>{
    let task = document.createElement("div")
    task.classList.add("task")
    task.id = elem.id
    task.innerHTML = `
    <h2>${elem.task}</h1>
    <p>${elem.taskDesc}</p>
    <p class="imp">${elem.isImp ? "Imp" : ""}</p>
    <button id=${elem.id}>complete</button>
    `
    allTaskPage.appendChild(task)
  })

  // Delete functionality 
  let allBtn = document.querySelectorAll(".allTask .task button")
  allBtn.forEach((btn)=>{
   btn.addEventListener("click", (()=>{
    allTask = localStorageAllTask.filter((task)=>{
      return task.id != btn.id
    })
    localStorage.setItem("task", JSON.stringify(allTask))
    renderTask()
   }))
  })
 
}
renderTask()
}
openTodo()


function openDayPlanner(){
  
let hours = Array.from({length : 18}, (elem, index)=>{
  let hr = index + 6
  if(hr > 12){
    return `${Math.floor(hr % 12)}.00 - ${Math.floor(hr % 12)+1}.00`
  }
  return `${hr}.00 - ${(hr+1) > 12 ? Math.floor((hr+1)%12) : (hr+1)}.00`
})

// console.log(hours);

let dailyPlanner = document.querySelector(".day-planner")

let dayplanData = JSON.parse(localStorage.getItem("dayplanData")) || {}

hours.forEach((elem, idx)=>{
  let dayplannertime = document.createElement("div")
 dayplannertime.classList.add("day-planner-time")
 let savedData = dayplanData[idx]= dayplanData[idx] || ""
  dayplannertime.innerHTML = `
   <p>${elem}</p>
   <input id=${idx} type="text" placeholder="..." value="${savedData}">
  `
  dailyPlanner.appendChild(dayplannertime)
})


let dailyPlannerInputs = document.querySelectorAll(".day-planner-time input")

dailyPlannerInputs.forEach((input)=>{
  input.addEventListener("input", (()=>{
    dayplanData[input.id] = input.value
    localStorage.setItem("dayplanData", JSON.stringify(dayplanData))
  }))
})
}
openDayPlanner()

// let api = `http://localhost:3000/quote`

// let api = `https://zenquotes.io/api/random`  // error due to cores policy 

let api = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://zenquotes.io/api/random"
)}`;

async function fetchQuote() {
  try {
    let res = await fetch(api);
    let data = await res.json();
    let parsedData = JSON.parse(data.contents);
    console.log(parsedData[0].q);
  } catch (error) {
    console.error("❌ Fetch error:", error.message || error);
  }
}

fetchQuote();