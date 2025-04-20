// Short the people 

let names = ["Mary","John","Emma"], heights = [180,165,170]

let map = new Map()

    for(let i=0; i<names.length; i++){
        map.set(heights[i], names[i])
    }

    heights.sort((a,b)=> b-a)

    let ans =  new Array(names.length)
    for(let i=0; i<heights.length; i++){
        ans[i] = map.get(heights[i])
    }

 console.log(ans);