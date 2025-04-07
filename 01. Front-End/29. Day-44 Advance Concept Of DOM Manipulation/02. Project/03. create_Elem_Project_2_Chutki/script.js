let btn = document.querySelector('button')
let body = document.querySelector('body')



btn.addEventListener("click", () => {
  let x = Math.random()*80
  let y = Math.random()*80
  let rot = Math.random()*360

  let img = document.createElement('img')
  img.setAttribute("src","chutki_png.png");
  img.setAttribute('class', 'image')

  img.style.top = `${x}%`
  img.style.left = `${y}%`
  img.style.rotate = `${rot}deg`
  body.appendChild(img);
});