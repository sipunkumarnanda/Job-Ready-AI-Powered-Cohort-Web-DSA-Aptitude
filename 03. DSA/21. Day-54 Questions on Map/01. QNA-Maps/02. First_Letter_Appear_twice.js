// Q. 68 Firts letter appear twice (Leetcode - 2351)

let s = "habcdefghijawxhy"

let map = new Map()

for(let i=0; i<s.length; i++){
    if(map.has(s.charAt(i))){
        map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
        if(map.get(s.charAt(i)) == 2){
            console.log(s.charAt(i));
            break
        }
    }else{
        map.set(s.charAt(i), 1)
    }
}

// console.log(map);