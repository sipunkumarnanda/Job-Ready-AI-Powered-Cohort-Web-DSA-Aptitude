// fetch
// github api

let btn = document.querySelector("button");
let input = document.querySelector("input");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let username = input.value.trim();
//  let res = fetch(`https://api.github.com/users/${username}`)
//     res
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("User not found");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       // console.log(data);

//       let div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML = `
//   <img src=${data.avatar_url} alt="">
//         <h1>${data.name}</h1>
//         <p>Following : ${data.following}</p>
//         <p>Followers : ${data.followers}</p>
//         <h4>Location : ${data.location}</h4>
//   `;

//       let container = document.querySelector(".container")
//       container.innerHTML = ""
//       container.appendChild(div);
//     }).catch((error)=>{
//       alert(error.message, "Enter a valid username")
//     })
// });


function getUserInfo(username){
  return fetch(`https://api.github.com/users/${username}`).then((res) => {
    if(!res.ok){
      throw new Error("user not found")
    }
    return res.json()
  })
}



btn.addEventListener("click", ((e)=>{
  e.preventDefault()
let username = input.value.trim();
  getUserInfo(username)
.then((data)=>{
  let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
  <img src=${data.avatar_url} alt="">
        <h1>${data.name}</h1>
        <p>Following : ${data.following}</p>
        <p>Followers : ${data.followers}</p>
        <h4>Location : ${data.location}</h4>
  `;

      let container = document.querySelector(".container")
      container.innerHTML = ""
      container.appendChild(div);
}).catch((error)=>{
  alert(error.message)
})
}))