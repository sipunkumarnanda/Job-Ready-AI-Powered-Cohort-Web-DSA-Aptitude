// Map

// Jab bhi ek array ko app ko loop karna ho aur ek naye array mein aapko elements put krne ho to aap map use karoge

// Map ek naya array banata hai and us array mein har baar element leke aata hai jo map ke andar se return hoga

let arr = [1,2,3,4]

let newArr = arr.map((value)=>{
    return 1
})

// console.log(newArr);

// Filter

let arr2 = [1,2,3,4]

let newArr2 = arr2.filter((value)=>{
    return value>2
})

console.log(newArr2);


// Reduce 

let arr3 = [1,2,3,4]

let newVal = arr3.reduce((acc, curr)=>{
    return acc + curr
},0)

console.log(newVal);



// map -> naya array mein returned value daalo 
// Filter -> naye array mein true returned value daalo
// reduce -> ek array se koi ek value banaao 