// Q1.Remove Dupblicate Values from an array
let arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
// let originalArray = [...new Set(arr)]
let originalArray = Array.from(new Set(arr))
console.log(originalArray);


//Q2. Find the second largest numbers in an array
let arr2 = [1,2,3,4,15,14,5,6,7,8,99,99,88,9,10,1,1]
// let uniqueArray = [...new Set(arr2)]
let secondLargestNumber = [...new Set(arr2)].sort((a,b)=>{
    return b-a
})
console.log(secondLargestNumber);
// console.log("Second Largest Number is : ", secondLargestNumber[1]);

console.log("Second Largest Number is : ", [...new Set(arr2)].sort((a,b) => b-a )[1]);


//Q3. Sort an array in descending Order.
let arr3 = [1,2,9,8,7,3,5,4,6,7,8,9,10,1,2,3]
let desendArray = arr3.sort(((a,b)=>{
    return b-a
}))
console.log(desendArray);


//Q4. Reverse an array without using .reverse()

let arr4 = [1,2,3,4,5,6,7,8,9,10,10,1,2]
// let reverseArray = arr4.sort((a,b)=> b-a )
// console.log("Reveresed Array : ",reverseArray);  // in Reverse we can't use sort Method Reveresed Array :  [10, 10, 9, 8, 7, 6, 5,  4, 3, 2, 2, 1, 1 ]
let revArr = []
for(let i=arr4.length-1 ; i>=0; i--){
    revArr.push(arr4[i])
}
console.log(revArr); // [10, 10, 9, 8, 7,6,  5, 4, 3, 2,1]


// Q5. Find the most frequent element in an array 

let arr5 = [1,2,3,4,5,6,7,8,9,10,3,3,2,2,2,2,2,10]

let obj = {}

// for (let num of arr5) {
//     if(obj[num] === undefined){
//         obj[num] = 1
//     }else{
//         obj[num] += 1
//     }
// }

// arr5.forEach((val=>{
//     if(obj[val] === undefined){
//                 obj[val] = 1
//             }else{
//                 obj[val] += 1
//             }
// }))

arr5.forEach((val)=>{
    obj[val] === undefined ? obj[val]=1 : obj[val]++
})

console.log(obj);


let maxValue = -Infinity
let maxKey = null

for (const key in obj) {
    if(obj[key] > maxValue){
        maxValue = obj[key]
        maxKey = key
    }
}
console.log(`Most Frequent Number is ${maxKey} And its came ${maxValue} times`);