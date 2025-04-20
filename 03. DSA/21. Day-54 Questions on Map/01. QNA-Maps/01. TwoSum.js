// 1. TwoSum 

let nums = [15, 2, 11, 7]
let target = 9

let map = new Map()

// for(let i = 0; i<nums.length; i++){
//     map.set(nums[i], i)
// }


for(let i=0 ; i<nums.length; i++){
    let sub = target - nums[i]
    if(map.has(sub)){
        console.log( map.get(sub), i);
        break
    }else{
        map.set(nums[i], i)
    }
}