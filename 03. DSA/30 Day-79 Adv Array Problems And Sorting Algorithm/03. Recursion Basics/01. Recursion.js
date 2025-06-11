
// Print num from n to 1 using recursion

function printNum(num){
    if(num == 0) return
    
    console.log("Hello : ", num);
    return printNum(num-1)
}

 printNum(10)