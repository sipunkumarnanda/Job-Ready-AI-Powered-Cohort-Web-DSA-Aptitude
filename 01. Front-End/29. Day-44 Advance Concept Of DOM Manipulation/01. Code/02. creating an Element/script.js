let h1 = document.createElement('h1')
h1.innerHTML = "Hello From JS"

let body = document.querySelector('body')

body.appendChild(h1)


// Image create and append 
let img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
img.style.width = '200px'
img.style.objectFit = "cover"

body.appendChild(img)