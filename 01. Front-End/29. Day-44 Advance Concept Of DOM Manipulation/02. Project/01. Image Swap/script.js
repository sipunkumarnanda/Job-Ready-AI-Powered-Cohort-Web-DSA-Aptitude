let dogImg = document.querySelector("#dog");
let lionImg = document.querySelector("#lion");
let btn = document.querySelector("button");


btn.addEventListener("click", () => {
  let dogSrc = dog.getAttribute("src");
  let lionSrc = lion.getAttribute("src");

  dogImg.setAttribute("src", lionSrc);
  lionImg.setAttribute("src", dogSrc);
});


