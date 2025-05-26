
// 169. majority-element  using Object to count

// Better 

let arr = [2,2,3,3,1,2,2,3,3,3]

let n = Math.floor(arr.length/2)
let obj = {}
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
        obj[arr[i]] = obj[arr[i]] + 1
    }else{
        obj[arr[i]] = 1
    }
}

console.log(obj);

console.log(n);
for (const elem  in obj) {
    if(obj[elem] >= n){
        console.log(elem);   // its an string -> we can make it to number by using Number(elem)
    }
}