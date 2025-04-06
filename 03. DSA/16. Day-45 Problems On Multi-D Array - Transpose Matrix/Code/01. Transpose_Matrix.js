import promptt from 'prompt-sync'
let prompt = promptt()

let arr = new Array(3)

for(let i=0; i<arr.length; i++){
    arr[i] = new Array(3)
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        arr[i][j] = Number(prompt("Enter element : "))
    }
}


console.log(`
ORIGINAL ARRAY
    ${arr[0]} 
    ${arr[1]} 
    ${arr[2]} 
    `);




// Transpose The Matrix (Using Space / Another Array)

    let col = arr[0].length
    let newArr = new Array(col)

for(let i=0; i<newArr.length; i++){
    newArr[i] = new Array(arr.length)
}

for(let i=0; i<arr.length; i++){
    for(let j= 0; j<arr[i].length; j++){
        newArr[j][i] = arr[i][j]
    }
}

console.log(`
TRANSPOSE ARRAY
    ${newArr[0]}
    ${newArr[1]}
    ${newArr[2]}
    `);