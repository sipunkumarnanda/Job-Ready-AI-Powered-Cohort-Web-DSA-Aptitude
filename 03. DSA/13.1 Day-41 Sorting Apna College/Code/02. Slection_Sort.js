let arr = [4, 1, 5, 2, 3, 0, -1, -2, 3]

for (let i = 0; i < arr.length - 1; i++) {

    // find smallest number index
  let smallestIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[smallestIndex]) {
      smallestIndex = j;
    }
    // swaping
    if(smallestIndex !== i){
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    }
  }
}

console.log(arr);