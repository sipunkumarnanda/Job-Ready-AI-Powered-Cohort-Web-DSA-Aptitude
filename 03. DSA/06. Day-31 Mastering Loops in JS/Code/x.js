var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    while(n>0){
        let rem = n % 10
        product = product * rem
        sum = sum + rem
        n = Math.floor(n / 10)
    }
    console.log(product , sum);
    let res = product - sum
    return res
};

console.log(subtractProductAndSum(123));
