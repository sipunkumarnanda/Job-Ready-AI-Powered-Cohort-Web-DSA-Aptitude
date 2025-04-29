
// 89. Count Of primes 

let count = 1
for(let i=3; i<=100; i+=2){
    let isPrime = true
    for(let j=3; j<=Math.sqrt(i); j+=2){
        if(i % j == 0){
            isPrime = false
            break
        }
    }

    if(isPrime){
        count++
        console.log(i);
    }
}

console.log(count);