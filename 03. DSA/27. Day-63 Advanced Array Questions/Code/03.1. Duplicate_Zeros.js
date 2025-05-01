
// Duplicate Zeros (leetcode - 1089)  bruteforce solution

let arr = [1, 0, 2, 3, 0, 4, 5, 0]
// let arr = [0,0,0,0,0,0,0]

let ans = [], i = 0, j = 0

while (j < arr.length) {
    if (arr[i] !== 0) {
        ans[j] = arr[i]
    }else {
        if (j + 1 < arr.length) {
            ans[j] = arr[i]
            ans[j + 1] = arr[i]
            j++
        } else {
            ans[j] = arr[i]
        }
    }
    i++, j++
}



for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i]
}

console.log("arr : ", arr);