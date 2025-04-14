let arr = [1, 10, 2, 4, 2, 2, 2, 2, 6, 1, 1, 10]

let map = new Map()

for(let i=0; i<arr.length; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i]) + 1) 
    }else{
        map.set(arr[i], 1)
    }
}

console.log(map);