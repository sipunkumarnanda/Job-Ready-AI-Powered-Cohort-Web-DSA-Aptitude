// Duplicate Zeros (leetcode - 1089)  optimal solution

// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
let arr = [0,0,0,0,0,0,0]

let countZeros = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    countZeros++;
  }
}

console.log(countZeros);

let i = arr.length - 1;

let j = 0
if(countZeros == 0){
    j = arr.length-1
}else{
    j = i + countZeros-1;
}

while (i >= 0) {
  if (j < arr.length) {
    if(arr[i] != 0){
        arr[j] = arr[i]
        j-- , i--
    }else{
       if(j+1 < arr.length){
        arr[j] = arr[i]
        arr[j-1] = arr[i]
        i-- , j-=2
       }else{
        arr[j] = arr[i]
        i-- , j--
       }
    }
  } else {
    j--, i--;
  }
}

console.log(arr);
