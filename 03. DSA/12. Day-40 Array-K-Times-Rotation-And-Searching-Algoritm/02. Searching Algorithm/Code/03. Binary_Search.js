let arr = [5, 8, 12, 19, 75, 100, 150, 170]

let target = 170


console.log(arr);
let index = binarySearch(arr,target)
index === -1 ? console.log(`${target} not found in array`) : console.log(`${target} found at index ${index}`);

function binarySearch(arr, target){
    let s = 0, e = arr.length-1
    while(s <= e){
        let mid = Math.floor((s+e) / 2)
        if(arr[mid] == target){
            return mid
        }else if(arr[mid] > target){
            e = mid - 1
        }else {
            s = mid + 1
        }
    }
    return -1
}