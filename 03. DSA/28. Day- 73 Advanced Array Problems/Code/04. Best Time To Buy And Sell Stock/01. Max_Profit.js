
// Leetcode - 121 
// Best Time To Buy And Sell Stock

let arr = [7,1,5,3,6]

let minValue = arr[0]
let maxProfit = 0
let currProfit = 0

for(let currValue=0; currValue<arr.length; currValue++){
    if(arr[currValue] < minValue){
        minValue = arr[currValue]
    }else{
        currProfit = arr[currValue] - minValue
    }

    if(currProfit > maxProfit ){
        maxProfit = currProfit
    }
}

console.log(maxProfit);