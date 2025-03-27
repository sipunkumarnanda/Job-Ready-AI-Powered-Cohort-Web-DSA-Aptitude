let btn = document.querySelector(".btn")
let grow = document.querySelector(".grow")
let progressing = document.querySelector(".progressing")


btn.addEventListener("click", (()=>{
    let percentage = 0
   let a =  setInterval(() => {
        percentage++
        grow.style.width = `${percentage}%`
        progressing.textContent = `${percentage}%`
    }, 100);

    setTimeout(() => {
        clearInterval(a)
        btn.textContent = "Downloaded"
        btn.style.opacity = 0.5
    }, 10000);
}))