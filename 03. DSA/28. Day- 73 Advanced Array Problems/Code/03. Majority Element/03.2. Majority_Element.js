
// 169. majority-element  using Hash Map

// Better

let arr = [2,2,3,3,1,2,2,1,1,1,1]

let n = Math.floor(arr.length/2)

let map = new Map()

for(let i=0; i<arr.length; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1)
    }
    else{
        map.set(arr[i], 1)
    }
}

// console.log(n);
// console.log(map);

for (const [key, value] of map) {
    if(value >= n){
        console.log(key);
    }
}

// O(N log N) + O(N)