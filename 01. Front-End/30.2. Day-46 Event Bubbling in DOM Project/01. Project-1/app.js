
let arr = [
  {
    "username": "Alice Johnson",
    "image": "https://randomuser.me/api/portraits/women/21.jpg",
    "isStatus": "stranger"
  },
  {
    "username": "Michael Smith",
    "image": "https://randomuser.me/api/portraits/men/34.jpg",
    "isStatus": "stranger"
  },
  {
    "username": "Priya Verma",
    "image": "https://randomuser.me/api/portraits/women/45.jpg",
    "isStatus": "stranger"
  },
  {
    "username": "David Miller",
    "image": "https://randomuser.me/api/portraits/men/60.jpg",
    "isStatus": "stranger"
  },
  {
    "username": "Sophie Lee",
    "image": "https://randomuser.me/api/portraits/women/52.jpg",
    "isStatus": "stranger"
  }
]


let main = document.querySelector("#main")

function upadteCard(){
    main.innerHTML = ""
    arr.forEach((val, index)=>{  
let div = document.createElement("div")
div.classList.add("card")
div.innerHTML = `
            <img src=${val.image} alt="">
            <h1>${val.username}</h1>
            <h2>${val.isStatus}</h2>
            <button id=${index}>${val.isStatus == "stranger" ? "Add Friend" : "Friend"}</button>
`
main.appendChild(div)
})
}

upadteCard()

main.addEventListener("click", ((e)=>{
    if(e.target.tagName === "BUTTON"){
      if(arr[e.target.id].isStatus === "stranger"){
        arr[e.target.id].isStatus = "friend"
      }else{
        arr[e.target.id].isStatus = "stranger"
      }
    }
    upadteCard()
}))