let btn = document.querySelector('button')
let body = document.querySelector('body')



btn.addEventListener("click", () => {
  let img = document.createElement('img')
  img.setAttribute("src","https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  img.style.width = "200px";
  img.style.objectFit = "cover";
  body.appendChild(img);
});