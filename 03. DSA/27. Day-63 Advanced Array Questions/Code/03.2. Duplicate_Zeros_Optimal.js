// Duplicate Zeros (leetcode - 1089)  optimal solution

// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// let arr = [0,0,0,0,0,0,0]
let arr = [8,5,0,9,0,3,4,7]

let countZeros = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    countZeros++;
  }
}

console.log(countZeros);

let i = arr.length - 1;

let j = (arr.length-1) + countZeros

while (i != j) {
  if(j < arr.length){
    arr[j] = arr[i]
  }
  j--

  if(arr[i] == 0){
    if(j < arr.length){
      arr[j] = arr[i]
    }
    j--
  }
  i--
}

console.log(arr);


