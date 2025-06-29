
function fetchUserProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) => {
    if (!res.ok) {
      throw new Error("Invalid user name");
    }
    return res.json();
  });
}

// Repo
function getUserRepo(username){
    return fetch(`https://api.github.com/users/${username}/repos`).then((res)=>{
        if(!res.ok){
            throw new console.error("Invalid user");
        }
        return res.json()
    })
}

function decorateProfileData(data){
  let div = document.createElement("div")
    div.innerHTML = `
<div class="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row gap-6 items-center sm:items-start">
  <!-- Avatar -->
  <img
    src=${data.avatar_url}
    alt="User Avatar"
    class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
  />

  <!-- Info -->
  <div class="flex-1 text-center sm:text-left space-y-2">
    <h2 class="text-xl sm:text-2xl font-semibold text-white">${data.name}</h2>
    <p class="text-sm text-gray-400">
      This profile is the mascot of GitHub.
    </p>

    <div class="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-300 pt-2">
      <span>Followers: ${data.followers}</span>
      <span>Following: ${data.following}</span>
      <span>Repos: ${data.public_repos}</span>
    </div>
  </div>
</div>

    `
    let resultcard = document.querySelector(".result-card")
    resultcard.textContent = ""
    resultcard.appendChild(div)
}

function decorateRepo(data){
  let repo = data.map((elem) => {
  return `<li class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">${elem.name}</li>`;
});

let ul = document.createElement("ul");
ul.className = "space-y-2 mt-4";
ul.innerHTML = `
  <h1 class="text-lg font-semibold text-white mb-2 text-center">Last 5 Repositories</h1>
  ${repo.slice(0, 5).join("")}
`;
let resultcard = document.querySelector(".result-card");
resultcard.appendChild(ul);

}



let input = document.querySelector("input");
let button = document.querySelector("button");


button.addEventListener("click", (e) => {
  let username = input.value.trim().replace(/\s+/g, "");

  fetchUserProfile(username).then((data) => {
    decorateProfileData(data)

    getUserRepo(username).then((data)=>{
        decorateRepo(data)
    }).catch((error)=>{
        alert(error.message)
    })
    
  }).catch((error)=>{
    alert(error.message)
  })
});
