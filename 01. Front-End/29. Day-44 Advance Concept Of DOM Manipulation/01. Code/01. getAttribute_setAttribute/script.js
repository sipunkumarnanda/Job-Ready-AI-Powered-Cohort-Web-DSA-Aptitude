let h1 = document.querySelector('h1')
h1.innerHTML = "Hello Guys"

let att = h1.getAttribute('id')
console.log(att);

let att2 = h1.getAttribute('class')
console.log(att2);

// set Attribute
h1.setAttribute('id', 'heroin')
h1.setAttribute('class', 'kat')


// -------------------------------------------------------

// getAttributes   --> for getting an attribute 
// setAttributes   --> for setting an attribute 
let img = document.querySelector('img')

// getAttribute
let imgAttribute = img.getAttribute('src')

// setAttribute
img.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')