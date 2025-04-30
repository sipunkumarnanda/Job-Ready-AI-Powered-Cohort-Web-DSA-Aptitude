
// (leetcode - 26)  remove duplicate from sorted array   inplace

let arr = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 10]

function removeDuplicate(arr) {
    j = 1

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j] = arr[i + 1]
            j++
        }
    }

    console.log(arr);

    return j
}

let ans = removeDuplicate(arr)
console.log("Unique elements in array : ", ans);