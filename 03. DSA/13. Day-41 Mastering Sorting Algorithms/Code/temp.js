let arr = [0,1,1,0,1,0,1,1]

for(let j=0; j<arr.length; j++){
    for(let i=j; i<arr.length; i++){
    if(arr[i] === 1){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        
        break
    }
}
}
console.log(arr);