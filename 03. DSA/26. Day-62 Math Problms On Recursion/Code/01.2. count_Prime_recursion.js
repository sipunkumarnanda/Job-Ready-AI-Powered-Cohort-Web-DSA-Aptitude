
// 89. Count Of primes (Sieve of eratosthenes)

function checkRangeInPrime(n){

    let isPrime = new Array(n+1).fill(true)

    for(let i=2; i<=Math.sqrt(n); i++){
        if(isPrime[i] == true){
            for(j=i*i; j<=n; j+=i){
                isPrime[j] = false
            }
        }
    }

    let count = 0
    for(let i=2; i<isPrime.length; i++){
        if(isPrime[i]){
            process.stdout.write(`${i} `)
            count++
        }
    }
    console.log();
    console.log(count);
}

checkRangeInPrime(100)