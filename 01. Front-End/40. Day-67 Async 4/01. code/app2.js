// fetch
// github api

let url = "https://api.github.com/users/sipunkumarnanda";

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let data = fetch(url);
  data
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
