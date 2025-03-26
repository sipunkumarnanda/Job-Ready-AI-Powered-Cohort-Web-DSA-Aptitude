// color chnager project
let circle = document.querySelector(".circle")
let btn = document.querySelector(".color-btn")


btn.addEventListener("click", (()=>{
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    let bcg = `rgb(${c1}, ${c2}, ${c3})`

    circle.style.backgroundColor = bcg
}))



// Take random valur from Array 

let arr = ['CSK', 'RCB', 'KKR', 'MI', 'LSG', 'PBKS', 'GT', 'DC', 'RR', 'SRH']



let box = document.querySelector(".box1-cnt")
let winnerBtn = document.querySelector(".winner-btn-1")

winnerBtn.addEventListener("click", (()=>{
    let num = Math.floor(Math.random() * arr.length)
    box.textContent = arr[num]
}))



// IPL winner with color change using object 

let iplTeam = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black'
    }
]

let box2 = document.querySelector(".box2-cnt")
let winnerBtn2 = document.querySelector(".winner-btn-2")

winnerBtn2.addEventListener("click", (()=>{
    let num = Math.floor(Math.random() * iplTeam.length)
    let winner = iplTeam[num]
    box2.textContent = winner.team
    box2.style.backgroundColor = winner.primary
    box2.style.color = winner.secondary
}))