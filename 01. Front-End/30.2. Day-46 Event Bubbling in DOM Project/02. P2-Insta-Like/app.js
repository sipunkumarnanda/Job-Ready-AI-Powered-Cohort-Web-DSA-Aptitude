let arr = [
  {
    username: "kirtiii_07",
    location: "Rairangpur, Mayurbhanj",
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postImage:
      "https://images.unsplash.com/photo-1651010966858-558fb8d3cfe1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Sunsets like this make you believe in magic. 🌅✨",
    isLike: false,
  },
  {
    username: "alex_travels",
    location: "Santorini, Greece",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    postImage: "https://picsum.photos/id/1015/500/500",
    caption: "Sunsets like this make you believe in magic. 🌅✨",
    isLike: false,
  },
  {
    username: "lifeofemily",
    location: "Kyoto, Japan",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    postImage: "https://picsum.photos/id/1025/500/500",
    caption: "Lost in the beauty of tradition and temples. 🏯🍁",
    isLike: false,
  },
  {
    username: "mark_digital",
    location: "New York City, USA",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    postImage: "https://picsum.photos/id/1011/500/500",
    caption: "Skyscrapers, hustle, and a lot of coffee. ☕🏙️",
    isLike: false,
  },
  {
    username: "jessica_fit",
    location: "Bali, Indonesia",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    postImage: "https://picsum.photos/id/1035/500/500",
    caption: "Beach yoga and coconut water = pure bliss 🧘‍♀️🥥",
    isLike: false,
  },
  {
    username: "adventure_tim",
    location: "Rocky Mountains, Canada",
    profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
    postImage: "https://picsum.photos/id/1040/500/500",
    caption: "Hiking through heaven ⛰️❄️",
    isLike: false,
  },
  {
    username: "foodie_rach",
    location: "Rome, Italy",
    profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
    postImage: "https://picsum.photos/id/1060/500/500",
    caption: "Gelato before pizza. Always. 🇮🇹🍦🍕",
    isLike: false,
  },
  {
    username: "techguy_neo",
    location: "San Francisco, USA",
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
    postImage: "https://picsum.photos/id/1074/500/500",
    caption: "Building dreams one line of code at a time. 💻🚀",
    isLike: false,
  },
  {
    username: "artbylina",
    location: "Paris, France",
    profilePic: "https://randomuser.me/api/portraits/women/30.jpg",
    postImage: "https://picsum.photos/id/1084/500/500",
    caption: "Museums, coffee, and the smell of paint. 🎨🖌️",
    isLike: false,
  },
  {
    username: "green.journey",
    location: "Amazon Rainforest",
    profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
    postImage: "https://picsum.photos/id/1080/500/500",
    caption: "Breathing with the jungle 🌿🐒",
    isLike: false,
  },
  {
    username: "sunnydays_lisa",
    location: "Barcelona, Spain",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    postImage: "https://picsum.photos/id/109/500/500",
    caption: "Every day feels like a postcard here! 🏖️📸",
    isLike: false,
  },
];

let main = document.querySelector("#main");

function loadUser() {
  main.innerHTML = "";
  arr.forEach((val, index) => {
    let post = document.createElement("div");
    post.classList.add("post");
    post.id = index;

    post.innerHTML = `
<div class="header">
                <img src=${val.profilePic} alt="">
                <div class="details">
                    <h1>${val.username}</h1>
                    <p>${val.location}</p>
                </div>
            </div>

            <!-- // post -->
            <img id=${index}  class="post-img" src=${val.postImage} alt="">
            <i class="ri-heart-fill heart"></i>

            <div class="currStatus">
                <ul>
                   <div class="left-icons">
                     <li id=${index}>${
                       val.isLike
                         ? '<i class="ri-heart-fill" style="color:red;"></i>'
                         : '<i class="ri-heart-line"></i>'
                     }</li>
                    <li><i class="ri-chat-3-line"></i></li>
                    <li><i class="ri-share-forward-line"></i></li>
                   </div>
                   <div class="right-icons">
                    <li><i class="ri-save-line"></i></li>
                   </div>
                </ul>
                <p>${val.caption}</p>
            </div>
`;

    main.appendChild(post);
  });
}
loadUser();


main.addEventListener("dblclick", (e) => {
  arr[e.target.id].isLike = true;
  let post = e.target.closest(".post");
  let heart = post.querySelector(".heart");
  heart.classList.add("active");

  setTimeout(() => {
    heart.classList.remove("active");
    loadUser();
  }, 1000);
});

// main.addEventListener("click", ((e)=>{
//   clickTimeout = setTimeout(() => {
//     let post = e.target.closest(".post");
//     let id = post?.id;
//     console.log(id);
//      arr[id].isLike = !arr[id].isLike;
//     loadUser()
//   }, 250);
// }))