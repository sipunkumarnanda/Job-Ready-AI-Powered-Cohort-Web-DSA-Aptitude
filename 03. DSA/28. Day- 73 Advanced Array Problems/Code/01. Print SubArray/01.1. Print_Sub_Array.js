
// Print sub Array of an Array 

// let arr = [1,2,3,4,5]
// let arr = [-2,1,-3,4,-1,2,1,-5,4]

let arr = [1,2,3]

for(let start = 0 ; start<arr.length; start++){
    for(let end=start; end<arr.length; end++){
        for(let i=start; i<=end; i++){
            process.stdout.write(`${arr[i]}`)
        }
        process.stdout.write(`  `)
    }
    console.log();
}