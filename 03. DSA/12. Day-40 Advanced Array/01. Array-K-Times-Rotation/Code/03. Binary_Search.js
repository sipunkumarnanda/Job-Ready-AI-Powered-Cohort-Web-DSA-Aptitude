let arr = [5, 8, 12, 19, 75, 100, 150, 170]

let target = 150 


console.log(arr);
console.log(binarySearch(arr));

function binarySearch(arr, target){
    let s = 0, e = arr.length-1
    while(s <= e){
        let mid = (s+e) / 2
        if(arr[mid] == target){
            return mid
        }else if(arr[mid] > target){
            e = mid - 1
        }else {
            s = mid + 1
        }
    }
}