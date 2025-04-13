let n = 19

let seen = new Set()


while(n != 1 && !seen.has(n)){
    seen.add(n)
    let digits = n.toString().split("")
    
    let sum = 0
    for (const digit of digits) {
        sum = sum + Number(digit) ** 2
    }
    
    n = sum

    console.log(n);
}

n == 1 ? console.log("Happy Number ") : console.log("Not an happy number");