
let data = [
    {
    "username": "kirtiii_7",
    "profilePic": "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "username": "sunny_days",
    "profilePic": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "username": "code_master",
    "profilePic": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "username": "nature_lover",
    "profilePic": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "username": "tech_guy",
    "profilePic": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "username": "foodie_queen",
    "profilePic": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    "username": "the_explorer",
    "profilePic": "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    "username": "travel_bae",
    "profilePic": "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    "username": "minimal_dude",
    "profilePic": "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    "username": "artsy_amy",
    "profilePic": "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    "username": "gadget_freak",
    "profilePic": "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    "username": "biker_babe",
    "profilePic": "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    "username": "crypto_bro",
    "profilePic": "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    "username": "design_queen",
    "profilePic": "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    "username": "code_craft",
    "profilePic": "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    "username": "green_girl",
    "profilePic": "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    "username": "coffee_guy",
    "profilePic": "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
    "username": "studio_soul",
    "profilePic": "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    "username": "fitness_freak",
    "profilePic": "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
    "username": "mountain_girl",
    "profilePic": "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    "username": "urban_wanderer",
    "profilePic": "https://randomuser.me/api/portraits/men/20.jpg"
  }
]


data.forEach((val,index)=>{
    let story = document.createElement("div")

    story.classList.add("story")

    story.innerHTML = `
            <div class="user">
                <img id=${index} src=${val.profilePic} alt="">
            </div>
            <p>${val.username}</p>`

 let stories = document.querySelector(".stories")
    stories.appendChild(story)
})

let stories = document.querySelector(".stories")

stories.addEventListener("click", ((e)=>{
    console.log(e.target.id);
    let storycard = document.createElement("div")
    storycard.classList.add("storycard")
    storycard.innerHTML = `
    <div class="progress-bar">
    <div class="progress-fill"></div>
    </div>
   <div class="inner-Prof"> 
    <img src=${data[e.target.id].profilePic} alt="">
    <p>${data[e.target.id].username}</p>
    </div>
    <img class="post" src=${data[e.target.id].profilePic} alt="">
    <div class="comment">
    <p>send message</p>
    </div>
    `

    let card = document.querySelector("#card");
card.appendChild(storycard);

// Remove after 15 seconds (15000 ms)
setTimeout(() => {
  storycard.remove(); // removes storycard
}, 2000);
}))