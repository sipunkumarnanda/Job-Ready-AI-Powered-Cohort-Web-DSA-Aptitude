
// leetcode (88) Merge two Sorted Array
let arr1 = [2, 4, 5]
let arr2 = [1, 4, 7, 10, 15]

function mergeSortedArray(arr1, arr2) {
    let ans = new Array(arr1.length + arr2.length)
    let i = 0, j = 0, k = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans[k++] = arr1[i++]
        } else {
            ans[k++] = arr2[j++]
        }
    }

    while (i < arr1.length) {
        ans[k++] = arr1[i++]
    }
    while (j < arr2.length) {
        ans[k++] = arr2[j++]
    }

    return ans
}

console.log(arr1, arr2);
console.log(mergeSortedArray(arr1, arr2));