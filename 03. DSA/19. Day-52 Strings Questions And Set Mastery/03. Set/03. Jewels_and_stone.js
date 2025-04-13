// Q. 771 . (leetcode) Jewels and stones

let jewels = "aA", stones = "aAAbbbb"
let jewelsSet = new Set(jewels)

    let count = 0
    for(let i=0 ; i<stones.length; i++){
        if(jewelsSet.has(stones.charAt(i))){
            count++
        }
    }

    console.log('Total jewels in stones : ' , count);