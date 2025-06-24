
// Lorem Picsum

(async function fetchdata() {
    let response = await fetch('https://picsum.photos/v2/list')
    let data = await response.json()
    console.log(data);
})()