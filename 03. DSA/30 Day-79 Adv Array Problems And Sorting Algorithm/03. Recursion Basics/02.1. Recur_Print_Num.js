
// print num from 1 to n using recursion

function printNum(n){
    if(n == 0) return

    printNum(n-1)
    console.log(n);
    
}

printNum(10)