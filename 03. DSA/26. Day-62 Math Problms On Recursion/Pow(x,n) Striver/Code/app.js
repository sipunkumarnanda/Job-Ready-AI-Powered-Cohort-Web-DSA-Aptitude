
// Leetcode 

// exponentiation by squaring  (Algo)
function pow(x, n) {
    if (n == 0) return 1;

    let m = n;
    if (n < 0) {
        n = n * -1;
    }

    let ans = 1;
    while (n > 0) {
        if (n % 2 == 0) {
            x = x * x;
            n = Math.floor(n / 2);
        } else {
            ans = ans * x;
            n = n - 1;
        }
    }

    if (m < 0) {
        ans = 1 / ans;
    }

    return ans;
}

console.log(pow(2, 10));
