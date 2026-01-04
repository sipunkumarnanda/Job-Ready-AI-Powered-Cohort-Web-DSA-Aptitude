


// Async Await
async function xyz() {
    return "Hello"
}

let arr = [1,2,3,4,5]
let res = arr.map((val)=> xyz())
console.log(res);
// let final = await Promise.resolve(res) // if one promise
let final = await Promise.all(res) // for multiple promises 
console.log(final);