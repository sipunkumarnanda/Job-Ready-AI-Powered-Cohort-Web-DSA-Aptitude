

// Merge two sorted array using 3rd array 

let arr1 = [1,3,5,7,9,10]
let arr2 = [2,4,6]

let i = 0
let j = 0
let k = 0
let arr3 = []

while(i<arr1.length && j<arr2.length){
    if(arr1[i] <= arr2[j]){
        arr3[k] = arr1[i]
        i++ , k++
    }else{
        arr3[k] = arr2[j]
        j++ , k++
    }
}

while(i < arr1.length){
    arr3[k] = arr1[i]
    i++ , k++
}
while(j < arr2.length){
    arr3[k] = arr2[j]
    j++ , k++
}

console.log(arr3);

for(let i=0; i<arr1.length; i++){
    arr1[i] = arr3[i]
}

for(let i=0; i<arr3.length; i++){
    if(i<arr1.length){
        arr1[i] = arr3[i]
    }else{
        console.log(i);
        arr2[i-arr1.length] = arr3[i]
    }
}

console.log(arr1, arr2);