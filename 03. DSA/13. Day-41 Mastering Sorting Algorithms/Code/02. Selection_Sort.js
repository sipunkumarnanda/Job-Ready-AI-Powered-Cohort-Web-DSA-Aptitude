let arr = [10, 1, 5, 3, 15,0,-1]



for (let j = 0; j < arr.length - 1; j++) {
  let small = j;
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[small] > arr[i]) {
      small = i;
    }
  }
  if (j != small) {
    let temp = arr[j];
    arr[j] = arr[small];
    arr[small] = temp;
  }
}

console.log(arr);