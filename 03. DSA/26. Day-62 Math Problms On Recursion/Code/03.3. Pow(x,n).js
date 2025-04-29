function pow(x, n) {
  if (n === 0) return 1.0;

  return n < 0 ? 1 / temp(x, n) : temp(x, n);
}

function temp(x, n) {
  if (n == 0) return 1;

  
  let ans = temp(x, Math.floor(n / 2));

  if (n % 2 == 0) {
    return (ans * ans)
  } else {
    return ans * ans * x;
  }
}
console.log(pow(2, 10));